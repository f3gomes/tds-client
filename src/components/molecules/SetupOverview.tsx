import Image from "next/image";
import { generateCardCount, generateRoleCount } from "../../selectors/game";

interface Props {
  nPlayers: number;
}

function SetupOverview({ nPlayers }: Props) {
  const { nGold, nFire, nEmpty } = generateCardCount(nPlayers);
  const { nAdventurers, nGuardians, isExact } = generateRoleCount(nPlayers);

  const roleRange = (n: number) => (isExact ? `${n}` : `${n - 1}-${n}`);

  return (
    <div>
      <p>Com {nPlayers} jogadores, a distribuição é:</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CardOverview slug="adventurer" count={roleRange(nAdventurers)} />
        <CardOverview slug="guardian" count={roleRange(nGuardians)} />
        <CardOverview slug="gold" count={nGold} />
        <CardOverview slug="fire" count={nFire} />
        <CardOverview slug="empty" count={nEmpty} />
      </div>
    </div>
  );
}

export function CardOverview({
  count,
  slug,
}: {
  count: number | string;
  slug: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <Image
        alt="asset"
        width={150}
        height={230}
        src={`/assets/tds-${slug}.png`}
      />
      <span style={{ fontSize: "1.2rem" }}>{count}</span>
    </div>
  );
}

export default SetupOverview;
