import { randomUUID } from "crypto";

interface Rooms {
  [id: string]: {
    mode: string;
  };
}

const rooms: Rooms = {};

// Create a new room
export async function POST(req: Request) {
  const { mode } = await req.json();

  const id = randomUUID();
  rooms[id] = { mode };

  return Response.json({ id });
}

// Get a room
export async function GET(
  request: Request,
  { params: { roomId } }: { params: { roomId: string } }
) {
  const room = rooms[roomId];

  if (!room) {
    return new Response("Room not found", { status: 404 });
  }

  return Response.json(room);
}
