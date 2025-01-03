import { cn } from "@/utils/cn";
import { CardType } from "../../types/game.types";
import Image from "next/image";

interface Props {
  cardType: CardType;
  n: number;
}

function CardPreview({ cardType, n }: Props) {
  const range = Array.from(Array(n).keys());
  return (
    <>
      {range.map((n) => (
        <Image
          key={n}
          alt={cardType}
          src={`/assets/tds-${cardType}.jpeg`}
          className={cn(
            "border-2 border-solid",
            cardType === "fire"
              ? "border-red-500"
              : cardType === "gold"
                ? "border-green-500"
                : "border-black"
          )}
        />
      ))}
    </>
  );
}

// const CardPreviewImage = styled(Image)`
//   border: 3px solid
//     ${({ cardType }: { cardType: CardType }) =>
//       cardType === CardType.FIRE
//         ? "red"
//         : cardType === CardType.GOLD
//         ? "green"
//         : "black"};
// `;

export default CardPreview;
