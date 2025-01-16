"use client";

import useSocketListener from "../hooks/useSocketListener";
import { socketUrl, useSocket } from "../../socket";
import {
  ClientEvent,
  CreateGameEvent,
  ServerEvent,
} from "../types/event.types";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  // eslint-disable-next-line
  const socket: any = useSocket();
  const history = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingGame, setIsLoadingGame] = useState(false);

  useSocketListener(ServerEvent.GAME_CREATED, (data) => {
    history.push(`/game/${data.id}`);
  });

  const handleNewGame = async () => {
    setIsLoadingGame(true);

    const data: CreateGameEvent = {
      socketId: socket.id,
    };

    try {
      await socket.emit(ClientEvent.CREATE_GAME, data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingGame(false);
    }
  };

  useEffect(() => {
    const fetchPing = async () => {
      const response = await fetch(`${socketUrl}/ping`);
      return await response.json();
    };

    try {
      fetchPing();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image src="/assets/tds-box.png" alt="box" width={375} height={500} />
        </div>

        {isLoading ? (
          <>
            <div>
              <div>Icon loading</div>
              <div>
                <div>Carregando...</div>
                <p>This can be 30-40s on first boot. Thanks for waiting!</p>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleNewGame}
          className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          {isLoadingGame ? "Carregando..." : "Jogar"}
        </button>

        <button
          color="black"
          onClick={() => history.push("/rules")}
          className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          Regras
        </button>
      </div>
    </div>
  );
}
