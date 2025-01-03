import { useSocket } from "../../socket";
import { useEffect, useRef } from "react";
import { useSessionStorage } from "@uidotdev/usehooks";

function useSocketAliases() {
  const socket = useSocket();
  const initialized = useRef(false);

  const [socketAliases, setSocketAliases] = useSessionStorage(
    "socketAliases",
    [] as string[]
  );

  useEffect(() => {
    if (
      !initialized.current &&
      socket.id &&
      !socketAliases.includes(socket.id)
    ) {
      initialized.current = true;
      setSocketAliases([...socketAliases, socket.id]);
    }
  }, [socket.id]);

  return socketAliases;
}

export default useSocketAliases;
