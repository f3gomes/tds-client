import { Card } from "../../types/game.types";
import CardItem from "../atoms/CardItem";

interface Props {
  cards: Card[];
  style?: React.CSSProperties;
  onCardClick?: (card: Card, idx: number) => void;
}

function CardRow({ cards, style, onCardClick }: Props) {
  return (
    <div style={{ ...style }} className="flex justify-center gap-12">
      {cards.map((card, idx) => (
        <CardItem
          key={card.id}
          card={card}
          onClick={(card) => onCardClick && onCardClick(card, idx)}
        />
      ))}
    </div>
  );
}

export default CardRow;
