import Image from "next/image";

interface Props {
  role: string;
}

function RoleOverview({ role }: Props) {
  return (
    <>
      <p>Você é...</p>
      <div className="flex justify-center flex-col items-center">
        <Image
          width={195}
          height={300}
          alt="asset"
          src={`/assets/tds-${role.toLowerCase()}.jpeg`}
        />

        <p className="text-2xl">{role}</p>
      </div>
    </>
  );
}

export default RoleOverview;
