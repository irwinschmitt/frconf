"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
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

  const handleJoinRoom = () => {
    if (!name) {
      setIsNameError(true);
    }
    if (!roomId) {
      setIsRoomIdError(true);
    }
    if (name && roomId) {
      router.push(`/${roomId}`);
    }
  };

  const handleCreateRoom = () => {
    if (!name) {
      setIsNameError(true);
      return;
    }
    console.log("Creating room...");
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

      <select className="w-80 p-2 border border-gray-300 rounded-md">
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
