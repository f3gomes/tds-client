/* eslint-disable jsx-a11y/anchor-is-valid */

import { useCopyToClipboard } from "react-use";
import styled from "styled-components";
import { gameLobbyReadiness } from "../../selectors/game";
import { GameBase, Player } from "../../types/game.types";
import PlayerList from "../atoms/PlayerList";

interface Props {
  game: GameBase;
  onGameStart(): void;
  onPlayerKick(playerIdToKick: string): void;
  players: Player[];
  player: Player;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ActionArea = styled.div`
  width: 100%;
`;

const StyledPlayerList = styled(PlayerList)`
  grid-area: players;
  overflow-y: scroll;
  padding-inline-start: 20px;
`;

const PlayerListItemContents = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  font-size: 1.2rem;
  justify-content: space-between;
  padding-bottom: 10px;

  p {
    margin: 0;
  }

  button {
    font-size: 0.9rem;
    margin: 0;
  }
`;

function GameLobby({
  game,
  onGameStart,
  onPlayerKick,
  players,
  player,
}: Props) {
  const readiness = gameLobbyReadiness(game);
  // eslint-disable-next-line
  const [_, copyToClipboard] = useCopyToClipboard();

  const disableStart = !readiness.isReady;

  return (
    <Container className="active-contents flex gap-6">
      <div className="flex flex-col gap-2">
        <h1 style={{ textAlign: "center" }}>Game ID: {game.id}</h1>

        <button
          className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
          onClick={(e) => {
            e.preventDefault();
            copyToClipboard(window.location.href);
            window.alert(`Copiado: ${window.location.href}`);
          }}
        >
          Copiar link
        </button>

        <StyledPlayerList
          players={players}
          ownPlayerId={player.socketId}
          renderPlayer={(playerToRender, idx, ownPlayerId) => {
            return (
              <PlayerListItemContents>
                <p style={{ marginLeft: "10px" }}>
                  {playerToRender.name}
                  {playerToRender.socketId === ownPlayerId && " (Você)"}
                  {playerToRender.isHost && " (Host)"}
                </p>
                {player.isHost &&
                  playerToRender.socketId !== player.socketId && (
                    <button
                      onClick={() => onPlayerKick(playerToRender.socketId)}
                    >
                      x
                    </button>
                  )}
              </PlayerListItemContents>
            );
          }}
        />
      </div>
      <ActionArea>
        <div className="flex flex-col gap-2">
          {!readiness.isReady && (
            <div className="text-center">
              <p>Necessário 3 jogadores ou mais para iniciar o jogo.</p>
            </div>
          )}
          {player.isHost ? (
            <div className="text-center">
              <button
                className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
                disabled={disableStart}
                onClick={() => {
                  onGameStart();
                }}
              >
                Inciar
              </button>
            </div>
          ) : (
            <p>Aguardando inicio do jogo...</p>
          )}
        </div>
      </ActionArea>
    </Container>
  );
}

export default GameLobby;
