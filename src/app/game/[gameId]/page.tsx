export default function Game({ params }: { params: { gameId: string } }) {
  return <div>{params.gameId}</div>;
}
