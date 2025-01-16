import { useState } from "react";
import styled from "styled-components";
import { Card, Game, Player } from "../../types/game.types";
import GameArea from "./GameArea";
import {
  getIsRoundComplete,
  getNumberOfPlayers,
  getKeyholder,
  getPlayerCardsInRound,
  getGameOverReason,
} from "../../selectors/game";
import GameDistribution from "./GameDistribution";
import GameStats from "./GameStats";
import useSocketListener from "../../hooks/useSocketListener";
import { ServerEvent } from "../../types/event.types";
import OwnCards from "../molecules/OwnCards";
import CardRevealModal from "./CardRevealModal";

interface Props {
  game: Game;
  player: Player;
  onCardClick: (card: Card, idx: number, player: Player) => void;
  onFlipComplete(card: Card): void;
  onGameRestart: () => void;
  onNextRound: () => void;
}

enum SectionView {
  DISTRIBUTION = "distribution",
  GAME_STATS = "game-stats",
  MAIN_GAME = "main-game",
}

const Container = styled.div`
  width: 100%;
`;

function GameOngoing({
  game,
  player,
  onCardClick,
  onFlipComplete,
  onGameRestart,
  onNextRound,
}: Props) {
  const [view, setView] = useState<SectionView>(SectionView.DISTRIBUTION);
  const handleBackToGame = () => setView(SectionView.MAIN_GAME);
  const gameOverReason = getGameOverReason(game);
  const isRoundComplete = getIsRoundComplete(game);

  const { [player.socketId]: ownCards } = getPlayerCardsInRound(game);

  const keyholder = getKeyholder(game);
  const isKeyholder = keyholder.socketId === player.socketId;

  const [cardFlipModal, setCardFlipModal] = useState<{
    isOpen: boolean;
    card?: Card;
    flipper?: string;
    flippee?: string;
  }>({ isOpen: false });

  const handleCloseModal = () =>
    setCardFlipModal((prev) => ({ ...prev, isOpen: false }));

  const handleProgression = () => {
    if (player.isHost && gameOverReason) {
      onGameRestart();
    } else if (player.isHost && isRoundComplete) {
      onNextRound();
    }
  };

  useSocketListener(
    ServerEvent.CARD_FLIPPED,
    (gameId, keyholderId, targetPlayerId, cardIdx, card) => {
      if (gameId === game.id) {
        setCardFlipModal({
          isOpen: true,
          card,
          flipper:
            keyholderId === player.socketId
              ? "You"
              : game.players[keyholderId].name,
          flippee:
            targetPlayerId === player.socketId
              ? "your"
              : game.players[targetPlayerId].name + "'s",
        });
      }
    }
  );

  useSocketListener(ServerEvent.ROUND_STARTED, (gameId) => {
    if (gameId === game.id) {
      setView(SectionView.GAME_STATS);
    }
  });

  return (
    <Container>
      <CardRevealModal
        {...cardFlipModal}
        onClose={handleCloseModal}
        onFlipComplete={onFlipComplete}
      />

      {view === SectionView.DISTRIBUTION && (
        <GameDistribution
          player={player}
          nPlayers={getNumberOfPlayers(game)}
          onBackToGame={handleBackToGame}
          onGameReset={onGameRestart}
        />
      )}

      {view === SectionView.GAME_STATS && (
        <GameStats
          game={game}
          isHost={player.isHost}
          onBackToGame={handleBackToGame}
          onGameReset={onGameRestart}
          gameOverReason={gameOverReason}
        />
      )}

      {view === SectionView.MAIN_GAME && (
        <>
          <GameArea
            game={game}
            player={player}
            onCardClick={
              isRoundComplete
                ? () =>
                  window.alert(
                    "Essa rodada acabou - aguarde o host iniciar a próxima rodada"
                  )
                : onCardClick
            }
            gameOverReason={gameOverReason}
          />
          <div className="flex flex-col gap-2">
            <hr className="my-4" />
            <OwnCards
              cards={ownCards}
              player={player}
              isKeyholder={isKeyholder}
            />

            <div className="flex gap-2 my-4">
              <button
                onClick={handleProgression}
                disabled={
                  !(player.isHost && (isRoundComplete || gameOverReason))
                }
                className="btn-default disabled:opacity-60"
              >
                {gameOverReason ? "Novo Jogo" : "Próxima Rodada"}
              </button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

export default GameOngoing;
