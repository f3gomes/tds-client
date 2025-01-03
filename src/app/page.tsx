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
  const socket: any = useSocket();
  const history = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useSocketListener(ServerEvent.GAME_CREATED, (data) => {
    history.push(`/game/${data.id}`);
  });

  const handleNewGame = () => {
    const data: CreateGameEvent = {
      socketId: socket.id,
    };
    socket.emit(ClientEvent.CREATE_GAME, data);
  };

  const handleJoinGame = () => {
    window.alert(
      "This isn't implemented yet - get the join link from your host!"
    );
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
      <div className="text-center">
        <h1>Tempel des Schreckens</h1>

        <div className="flex justify-center">
          <Image src="/assets/tds-box.png" alt="box" width={494} height={630} />
        </div>

        {isLoading ? (
          <>
            <div>
              <div>Icon loading</div>
              <div>
                <div>Loading...</div>
                <p>This can be 30-40s on first boot. Thanks for waiting!</p>
              </div>
            </div>
          </>
        ) : (
          <p style={{ margin: "5%" }}>
            A quick-play party game that combines cooperative social deduction
            with bluffing, luck and chance.
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          color="black"
          onClick={() => history.push("/rules")}
          className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          RULES
        </button>

        <button
          disabled={isLoading}
          onClick={handleJoinGame}
          className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          JOIN
        </button>

        <button
          disabled={isLoading}
          onClick={handleNewGame}
          className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          NEW
        </button>
      </div>
    </div>
  );
}
