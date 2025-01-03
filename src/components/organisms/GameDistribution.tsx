import { Player } from "../../types/game.types";
import RoleOverview from "../molecules/RoleOverview";
import SetupOverview from "../molecules/SetupOverview";

interface Props {
  nPlayers: number;
  onBackToGame: () => void;
  onGameReset(): void;
  player: Player;
}

function GameDistribution({
  nPlayers,
  player,
  onBackToGame,
  onGameReset,
}: Props) {
  return (
    <>
      {player.role && <RoleOverview role={player.role} />}
      <SetupOverview nPlayers={nPlayers} />
      <div style={{ width: "100%" }}>
        {player.isHost && (
          <button color="red" onClick={onGameReset}>
            Reset game
          </button>
        )}
        <button onClick={onBackToGame}>Back to game</button>
      </div>
    </>
  );
}

export default GameDistribution;
