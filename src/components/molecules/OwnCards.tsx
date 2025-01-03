import { countCardType } from "../../selectors/game";
import { Card, CardType, Player } from "../../types/game.types";
import CardPreview from "../atoms/CardPreview";
import PlayerCards from "./PlayerCards";

interface Props {
  cards: Card[];
  isKeyholder: boolean;
  player: Player;
}

function OwnCards({ cards, isKeyholder, player }: Props) {
  return (
    <>
      <PlayerCards cards={cards} player={player} isKeyholder={isKeyholder} />

      <span>Suas cartas:</span>

      <div className="flex">
        {Object.values(CardType).map((cardType) => (
          <CardPreview
            key={cardType}
            cardType={cardType}
            n={countCardType(cards, cardType)}
          />
        ))}
      </div>
    </>
  );
}

export default OwnCards;
