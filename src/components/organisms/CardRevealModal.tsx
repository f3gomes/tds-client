import { useEffect, useState } from "react";
import CardFlip from "../card-flip/CardFlip";
import { Card, CardType } from "../../types/game.types";
import Modal from "../modal";
import Image from "next/image";

interface CardRevealModalProps {
  className?: string;
  style?: React.CSSProperties;
  card?: Card;
  flipper?: string;
  flippee?: string;
  isOpen?: boolean;
  onFlipComplete?(card: Card): void;
  onClose(): void;
}

function CardRevealModal({
  card,
  flipper,
  flippee,
  isOpen,
  onFlipComplete,
  onClose,
}: CardRevealModalProps) {
  const [flip, setFlip] = useState({ started: false, completed: false });

  useEffect(() => {
    if (!flip.started) {
      setTimeout(() => {
        setFlip((prev) => ({ ...prev, started: true }));
      }, 1000);
    }
  }, [flip.started, setFlip]);

  useEffect(() => {
    if (!isOpen && (flip.started || flip.completed)) {
      setFlip({ started: false, completed: false });
    }
  }, [isOpen, flip, setFlip]);

  const header = flip.completed
    ? `${flipper} opened ${flippee} ${card?.type}!`
    : `${flipper} ${flipper?.match(/you/i) ? "are" : "is"
    } opening ${flippee} chamber...`;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div content={header} onClick={onClose} />
      <div onClick={flip.completed ? onClose : undefined}>
        <CardReveal
          cardType={card?.type}
          onFlipComplete={() => {
            card && onFlipComplete && onFlipComplete(card);
            setFlip((prev) => ({ ...prev, completed: true }));
          }}
          isFlipped={flip.started}
        />
      </div>
    </Modal>
  );
}

interface CardRevealProps {
  className?: string;
  style?: React.CSSProperties;
  cardType?: CardType;
  isFlipped?: boolean;
  onClickFront?(): void;
  onFlipComplete?(): void;
}

function CardReveal({
  className,
  style,
  cardType,
  isFlipped,
  onClickFront,
  onFlipComplete,
}: CardRevealProps) {
  return (
    <CardFlip
      {...{ className, style }}
      styles={{
        cardFrame: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxHeight: "100%",
          minHeight: 0,
        },
      }}
      back={
        <Image
          width={195}
          height={300}
          alt="card-back"
          src="/assets/tds-chamber.jpeg"
        />
      }
      isFlippedUp={isFlipped}
      onClickFront={onClickFront}
      onFlipComplete={onFlipComplete}
      front={
        <Image
          width={195}
          height={300}
          alt="card-front"
          src={`/assets/tds-${cardType}.jpeg`}
        />
      }
    />
  );
}

export default CardRevealModal;
