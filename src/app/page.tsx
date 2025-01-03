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

  console.log(isLoading);

  useSocketListener(ServerEvent.GAME_CREATED, (data) => {
    history.push(`/game/${data.id}`);
  });

  const handleNewGame = () => {
    setIsLoadingGame(true);

    try {
      const data: CreateGameEvent = {
        socketId: socket.id,
      };

      socket.emit(ClientEvent.CREATE_GAME, data);
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
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl">Templo dos Horrores</h1>

        <div className="flex justify-center">
          <Image src="/assets/tds-box.png" alt="box" width={494} height={630} />
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
          <p className="text-lg">
            Um jogo rápido que combina dedução social cooperativa com blefe,
            sorte e acaso.
          </p>
        )}
      </div>

      <div className="flex gap-3 mt-6">
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
