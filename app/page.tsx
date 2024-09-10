export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <input
        className="w-80 p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Seu nome"
      />
      <select className="w-80 p-2 border border-gray-300 rounded-md">
        <option value="webrtc">WebRTC</option>
        <option value="websocket">WebSocket</option>
      </select>
      <button className="w-80 p-2 border border-gray-300 rounded-md">
        Criar sala
      </button>
      <div className="flex items-center w-80">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-2 text-gray-500">Ou</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <input
        className="w-80 p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Código da sala"
      />
      <button className="w-80 p-2 border border-gray-300 rounded-md">
        Entrar na sala
      </button>
    </div>
  );
}
