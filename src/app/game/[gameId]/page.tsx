"use client";

import { use } from "react";

import GamePage from "@/components/pages/GamePage";
import PlayerNamer from "@/components/atoms/PlayerNamer";

import useGame from "../../../hooks/useGame";
import { useSocket } from "../../../../socket";
import usePlayer from "../../../hooks/usePlayer";
import { getKeyholder } from "../../../selectors/game";
import { ClientEvent } from "../../../types/event.types";
import useGameSounds from "../../../hooks/useGameSounds";
import useSocketAliases from "../../../hooks/useSocketAliases";
import { CardType, GameStatus } from "../../../types/game.types";

export default function Game({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = use(params);
  // eslint-disable-next-line
  const socket: any = useSocket();
  const socketAliases = useSocketAliases();

  const game = useGame(gameId);
  const player = usePlayer(socket.id, socketAliases);

  const sounds = useGameSounds();

  const takenNames = Object.values(game.data?.players ?? {}).map(
    (player) => player.name!
  );

  if (game.data?.status === GameStatus.ONGOING && !player.data) {
    return <p>Não é possível entrar em um jogo já iniciado.</p>;
  } else if (
    !game.data?.players[player.data?.socketId ?? ""] &&
    takenNames.length >= 10
  ) {
    return <p>The game is full (10 players max) - sorry</p>;
  } else if (!player.loading && !player.data?.name) {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <PlayerNamer
          handleSetName={(name) => {
            if (player.data) {
              // player is in game, so update
              socket.emit(ClientEvent.UPDATE_PLAYER, gameId, {
                socketId: socket.id,
                name,
                gameId,
              });
            } else {
              // player not in game, so join
              socket.emit(ClientEvent.JOIN_GAME, gameId, {
                socketId: socket.id,
                name,
              });
            }
          }}
          takenNames={takenNames}
        />
      </div>
    );
  } else {
    return (
      <>
        {game.loading && <p>Carregando...</p>}
        {game.data && player.data && (
          <GamePage
            game={game.data}
            onGameStart={() => {
              socket.emit(ClientEvent.START_GAME, game.data!.id);
            }}
            onCardClick={(card, idx, player) => {
              if (!card.isFlipped) {
                socket.emit(
                  ClientEvent.FLIP_CARD,
                  game.data!.id,
                  getKeyholder(game.data!).socketId,
                  player.socketId,
                  idx,
                  card
                );
              }
            }}
            onFlipComplete={(card): void => {
              switch (card.type) {
                case CardType.EMPTY:
                  console.log(CardType.EMPTY);
                  return sounds.playRevealEmptySound();
                case CardType.FIRE:
                  return sounds.playRevealFireSound();
                case CardType.GOLD:
                  return sounds.playRevealGoldSound();
              }
            }}
            onGameRestart={() => {
              socket.emit(ClientEvent.RESET_GAME, game.data!.id);
            }}
            onNextRound={() => {
              socket.emit(ClientEvent.NEXT_ROUND, game.data!.id);
            }}
            onPlayerKick={(playerIdToKick) => {
              socket.emit(
                ClientEvent.KICK_PLAYER,
                game.data!.id,
                playerIdToKick
              );
            }}
            players={Object.values(game.data.players)}
            player={player.data}
          />
        )}
      </>
    );
  }
}
