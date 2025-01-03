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
    <Container className="active-contents flex-between">
      <div style={{ width: "100%" }}>
        <h2>Round {game.rounds.length} of 4</h2>

        {/* info={!gameOverReason} warning={!!gameOverReason} */}
        <div>
          <p>
            {gameOverReason
              ? gameOverReason + "!"
              : roundFlippedCards.length === 0
                ? "A new round has started!"
                : "The round is ongoing!"}
          </p>
        </div>

        <h3>Round stats</h3>
        <table>
          <thead>
            <tr>
              <th>Round</th>
              <th>Gold</th>
              <th>Fire</th>
              <th>Empty</th>
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
                  <td>{countCardType(cardsFlipped, CardType.FIRE)}</td>
                  <td>{countCardType(cardsFlipped, CardType.EMPTY)}</td>
                </tr>
              );
            })}
            <tr className="active">
              <td>Total</td>
              <td>{flippedCount.nGold}</td>
              <td>{flippedCount.nFire}</td>
              <td>{flippedCount.nEmpty}</td>
            </tr>
            <tr className="active">
              <td>Left</td>
              <td>{remaining.nGold}</td>
              <td>{remaining.nFire}</td>
              <td>{remaining.nEmpty}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ width: "100%" }}>
        {isHost && (
          <button color="red" onClick={onGameReset}>
            Reset game
          </button>
        )}
        <button onClick={onBackToGame}>Back to game</button>
      </div>
    </Container>
  );
}

export default GameStats;
