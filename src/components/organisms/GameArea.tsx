import {
  getIsRoundComplete,
  getKeyholder,
  getNumberOfCardsLeftToFlipInRound,
  getNumberOfSubsequentRounds,
  getPlayerCardsInRound,
  getRemainingTypeCount,
} from "../../selectors/game";
import { Card, Game, GameOverReason, Player } from "../../types/game.types";
import PlayerCards from "../molecules/PlayerCards";

interface Props {
  game: Game;
  gameOverReason?: GameOverReason;
  onCardClick?: (card: Card, idx: number, player: Player) => void;
  player: Player;
}

function GameArea({ game, gameOverReason, player, onCardClick }: Props) {
  const keyholder = getKeyholder(game);

  const isKeyholder = keyholder.socketId === player.socketId;

  const handleCardClick = (card: Card, idx: number, player: Player) => {
    if (isKeyholder && onCardClick && !gameOverReason) {
      onCardClick(card, idx, player);
    }
  };

  // eslint-disable-next-line
  const { [player.socketId]: ownCards, ...otherPlayerCards } =
    getPlayerCardsInRound(game);

  const nRemainingRounds = getNumberOfSubsequentRounds(game);
  const roundsRemainingMessage =
    nRemainingRounds === 1 ? (
      <>
        <strong>1 rodada</strong> restante
      </>
    ) : (
      <>
        <strong>{nRemainingRounds} rodadas</strong> restantes
      </>
    );

  const cardsLeftToFlip = getNumberOfCardsLeftToFlipInRound(game);
  const { nGold, nFire } = getRemainingTypeCount(game);

  const headlineMessage = gameOverReason
    ? gameOverReason === GameOverReason.ALL_GOLD_FLIPPED
      ? "Os aventureiros venceram!"
      : "Os guardiões venceram!"
    : isKeyholder
      ? "Você tem a chave"
      : `${keyholder.name} tem a chave`;

  const subheadlineMessage = gameOverReason ? (
    gameOverReason + "!"
  ) : getIsRoundComplete(game) ? (
    player.isHost ? (
      "Por favor incie a próxima rodada"
    ) : (
      "Aguardando início da próxima rodada"
    )
  ) : (
    <>
      <strong>
        {cardsLeftToFlip} jogada{cardsLeftToFlip === 1 ? "" : "s"}
      </strong>{" "}
      restantes nessa rodada, {roundsRemainingMessage}.
    </>
  );

  return (
    <>
      <div style={{ width: "100%", paddingBottom: "5px" }}>
        <div>
          <span className="font-semibold">{player.name}</span>:{" "}
          <span>{player.role}</span>
          <p>
            <strong>{headlineMessage}</strong>
          </p>
          <p style={{ marginBottom: 0 }}>{subheadlineMessage}</p>
          {!gameOverReason && (
            <p style={{ marginTop: 0 }}>
              Oculto: <strong>{nGold} tesouro</strong> e{" "}
              <strong>{nFire} armadilha</strong>
            </p>
          )}
        </div>
      </div>

      <div style={{ width: "100%", overflowY: "scroll" }}>
        {Object.entries(otherPlayerCards).map(([playerId, cards]) => (
          <PlayerCards
            key={playerId}
            cards={cards}
            player={game.players[playerId]}
            isKeyholder={keyholder.socketId === playerId}
            onCardClick={handleCardClick}
            style={{ margin: "15px 0" }}
          />
        ))}
      </div>
    </>
  );
}

export default GameArea;
