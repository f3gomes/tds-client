import styled from "styled-components";
import {
  countCardType,
  findFlippedCardsFromRound,
  getFlippedCardsInRound,
  getFlippedTypeCount,
  getRemainingTypeCount,
} from "../../selectors/game";
import { CardType, Game, GameOverReason } from "../../types/game.types";

interface Props {
  game: Game;
  gameOverReason?: GameOverReason;
  isHost?: boolean;
  onBackToGame: () => void;
  onGameReset(): void;
}

const Container = styled.div``;

function GameStats({
  game,
  gameOverReason,
  isHost,
  onBackToGame,
  onGameReset,
}: Props) {
  const roundFlippedCards = getFlippedCardsInRound(game);
  const flippedCount = getFlippedTypeCount(game);
  const remaining = getRemainingTypeCount(game);

  return (
    <Container className="flex flex-col gap-2">
      <div>
        <h2>Rodada {game.rounds.length} de 4</h2>

        {/* info={!gameOverReason} warning={!!gameOverReason} */}
        <div>
          <p>
            {gameOverReason
              ? gameOverReason + "!"
              : roundFlippedCards.length === 0
                ? "Uma nova rodada foi iniciada!"
                : "A rodada está em andamento!"}
          </p>
        </div>

        <table className="border-separate border-spacing-2">
          <thead>
            <tr>
              <th>Rodada</th>
              <th>Ouro</th>
              <th>Vazio</th>
              <th>Armadilha</th>
            </tr>
          </thead>

          <tbody>
            {game.rounds.map((round, idx) => {
              const cardsFlipped = findFlippedCardsFromRound(
                round,
                game.deck.cards
              );
              return (
                <tr
                  key={round.number}
                  className={idx === game.rounds.length - 1 ? "positive" : ""}
                >
                  <td>{round.number}</td>
                  <td>{countCardType(cardsFlipped, CardType.GOLD)}</td>
                  <td>{countCardType(cardsFlipped, CardType.EMPTY)}</td>
                  <td>{countCardType(cardsFlipped, CardType.FIRE)}</td>
                </tr>
              );
            })}
            <tr className="active">
              <td>Total</td>
              <td>{flippedCount.nGold}</td>
              <td>{flippedCount.nEmpty}</td>
              <td>{flippedCount.nFire}</td>
            </tr>
            <tr className="active">
              <td>Restante</td>
              <td>{remaining.nGold}</td>
              <td>{remaining.nEmpty}</td>
              <td>{remaining.nFire}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex gap-2 mt-3">
        {isHost && (
          <button
            color="red"
            onClick={onGameReset}
            className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
          >
            Reset game
          </button>
        )}
        <button
          onClick={onBackToGame}
          className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          Back to game
        </button>
      </div>
    </Container>
  );
}

export default GameStats;
