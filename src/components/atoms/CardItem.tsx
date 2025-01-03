import Image from "next/image";
import { Card } from "../../types/game.types";

interface Props {
  card: Card;
  style?: React.CSSProperties;
  onClick?: (card: Card) => void;
}

function CardItem({ card, onClick, style }: Props) {
  const imageSlug = card.isFlipped ? card.type : "chamber";

  return (
    <div style={style}>
      <Image
        width={150}
        height={230}
        alt="card"
        onClick={() => onClick && onClick(card)}
        src={`/assets/tds-${imageSlug}.jpeg`}
      />
    </div>
  );
}

export default CardItem;
