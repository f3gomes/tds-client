import { Card, Player } from "../../types/game.types";
import CardRow from "./CardRow";

interface Props {
  player: Player;
  cards: Card[];
  onCardClick?: (card: Card, idx: number, player: Player) => void;
  isKeyholder?: boolean;
  style?: React.CSSProperties;
}

function PlayerCards({
  cards,
  onCardClick,
  player,
  isKeyholder,
  style,
}: Props) {
  return (
    <div style={{ ...style }} className="flex flex-col">
      <div className="flex gap-2">
        <span className="font-semibold">{player.name}</span>
        <span>{isKeyholder && "🗝️"}</span>
      </div>

      <CardRow
        cards={cards}
        style={{ width: "calc(100% - 50px)" }}
        onCardClick={(card, idx) =>
          onCardClick && onCardClick(card, idx, player)
        }
      />
    </div>
  );
}

export default PlayerCards;
