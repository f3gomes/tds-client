import Image from "next/image";
import { Role } from "../../types/game.types";

interface Props {
  role: Role;
}

function RoleOverview({ role }: Props) {
  return (
    <>
      <p style={{ marginBottom: 0 }}>You have drawn...</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          fill
          alt="asset"
          src={`/assets/tds-${role === Role.ADVENTURER ? "adventurer" : "guardian"
            }.jpeg`}
        />
        <p style={{ fontSize: "1.5rem" }}>{role}</p>
      </div>
    </>
  );
}

export default RoleOverview;
