import { getTrack } from "../lib/spotify";

export default async function CurrentlyPlaying() {
  const { playing, played_at, title, artist, albumImageUrl } = await getTrack();
  return (
    <div
      className={`w-auto h-auto flex flex-row items-center justify-center bg-neutral-950 ${
        playing ? "animate-pulse" : ""
      }`}
    >
      <img
        src={albumImageUrl}
        alt={title}
        className="w-32 h-full pointer-events-none"
      />
      <div className="flex flex-col items-center justify-center m-6">
        <p className="text-center text-sm">
          {playing ? "Listening to" : "Last played"}
        </p>
        <h1
          className={`text-center ${
            playing ? "text-green-400" : "text-neutral-300"
          }`}
        >
          {title}
        </h1>
        <p className="text-center text-sm">
          by{" "}
          <span
            className={playing ? "text-green-400" : "text-neutral-300 text-sm"}
          >
            {artist}
          </span>
        </p>
        {played_at && <h1 className="text-center text-sm">{played_at}</h1>}
      </div>
    </div>
  );
}