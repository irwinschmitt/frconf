"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [mode, setMode] = useState("webrtc");
  const [isNameError, setIsNameError] = useState(false);
  const [isRoomIdError, setIsRoomIdError] = useState(false);

  const handleRoomIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
    setIsRoomIdError(false);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsNameError(false);
  };

  const handleModeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value);
  };

  const handleJoinRoom = async () => {
    if (!name) {
      setIsNameError(true);
      return;
    }

    if (!roomId) {
      setIsRoomIdError(true);
      return;
    }

    try {
      const response = await fetch(`/api/room/${roomId}`);

      console.log(response);

      if (response.ok) {
        router.push(`/${roomId}`);
      } else {
        alert("Room not found");
      }
    } catch (error) {
      console.error("Failed to join room:", error);
    }
  };

  const handleCreateRoom = async () => {
    if (!name) {
      setIsNameError(true);
      return;
    }

    try {
      const response = await fetch("/api/room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mode }),
      });

      console.log(response);

      if (response.ok) {
        const { id } = await response.json();
        router.push(`/${id}`);
      } else {
        alert("Failed to create room");
      }
    } catch (error) {
      console.error("Failed to create room:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <input
        value={name}
        className={`w-80 p-2 mb-8 border rounded-md ${
          isNameError ? "border-red-500" : "border-gray-300"
        }`}
        type="text"
        placeholder="Seu nome"
        onChange={handleNameChange}
      />

      <select
        className="w-80 p-2 border border-gray-300 rounded-md"
        onChange={handleModeChange}
      >
        <option value="webrtc">WebRTC</option>
        <option value="websocket">WebSocket</option>
      </select>

      <button
        className="w-80 p-2 border border-gray-300 rounded-md"
        onClick={handleCreateRoom}
      >
        Criar sala
      </button>

      <div className="flex items-center w-80">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-2 text-gray-500">Ou</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <input
        className={`w-80 p-2 border rounded-md ${
          isRoomIdError ? "border-red-500" : "border-gray-300"
        }`}
        value={roomId}
        type="text"
        placeholder="Código da sala"
        onChange={handleRoomIdChange}
      />

      <button
        className="w-80 p-2 border border-gray-300 rounded-md"
        onClick={handleJoinRoom}
      >
        Entrar na sala
      </button>
    </div>
  );
}
