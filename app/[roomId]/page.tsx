const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function Room({ params }: { params: { roomId: string } }) {
  const { mode } = await fetch(`${baseUrl}/api/room/${params.roomId}`).then(
    (res) => res.json()
  );

  return (
    <div className="text-3xl text-center mt-20">
      Sala &quot;{params.roomId}&quot; ({mode})
    </div>
  );
}
