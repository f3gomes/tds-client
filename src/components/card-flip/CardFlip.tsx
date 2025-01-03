import styled from "styled-components";
import { forwardRef, JSX } from "react";

export interface CardFlipProps {
  active?: boolean;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  styles?: {
    parent?: React.CSSProperties;
    cardFrame?: React.CSSProperties;
  };
  back: JSX.Element;
  front: JSX.Element;
  children?: React.ReactNode;
  isFlippedUp?: boolean;
  onClick?(): void;
  onClickFront?(): void;
  onClickBack?(): void;
  onFlipComplete?(): void;
  rotate?: number;
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "content";

  .card-front,
  .card-back {
    grid-area: content;
  }

  div.card-children {
    grid-area: content;
  }
`;

function CardFlipWithRef(
  {
    className,
    children,
    style,
    styles,
    back,
    front,
    onClick,
    onClickFront,
    onClickBack,
  }: CardFlipProps,
  ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element {
  const frontElement = (
    <div
      className="card-front"
      onClick={() => onClickFront && onClickFront()}
      style={{
        ...styles?.cardFrame,
      }}
    >
      {front}
    </div>
  );

  const backElement = (
    <div
      className="card-back"
      onClick={() => onClickBack && onClickBack()}
      style={{ ...styles?.cardFrame }}
    >
      {back}
    </div>
  );

  return (
    <Container
      className={className}
      ref={ref}
      style={{
        ...style,
        ...styles?.parent,
      }}
      onClick={onClick}
    >
      {frontElement}
      {backElement}
      {children && <div className="card-children">{children}</div>}
    </Container>
  );
}

const CardFlip = forwardRef(CardFlipWithRef);

export default CardFlip;
