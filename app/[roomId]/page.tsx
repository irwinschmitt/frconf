export default function Room({ params }: { params: { roomId: string } }) {
  return (
    <div className="text-3xl text-center mt-20">
      Sala &quot;{params.roomId}&quot;
    </div>
  );
}
