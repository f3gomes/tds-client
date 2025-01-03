import { useSocket } from "../../socket";
import { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

function useSocketAliases() {
  const socket: any = useSocket();

  const [socketAliases, setSocketAliases]: any = useLocalStorage(
    "socketAliases",
    sessionStorage
  );

  useEffect(() => {
    if (socket && !socketAliases.includes(socket.id)) {
      setSocketAliases([...socketAliases, socket.id]);
    }
  });

  return socketAliases;
}

export default useSocketAliases;
