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
      <div className="flex flex-col gap-2 justify-center items-center mt-4">
        <button
          onClick={onBackToGame}
          className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          Jogar
        </button>

        {player.isHost && (
          <button
            color="red"
            onClick={onGameReset}
            className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
          >
            Reiniciar
          </button>
        )}
      </div>
    </>
  );
}

export default GameDistribution;
