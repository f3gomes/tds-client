"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ClientSocket } from "./src/types/event.types";

export const socketUrl = "https://tds-server.onrender.com";

export const socket: ClientSocket = io(socketUrl);

export const SocketContext = createContext(socket);

export function useSocket() {
  const [hasConnected, setHasConnected] = useState(false);
  const socket = useContext(SocketContext);

  // rerender when connected, to allow access to id
  useEffect(() => {
    !hasConnected &&
      socket.on("connect", () => {
        setHasConnected(true);
      });
  });

  return socket;
}
