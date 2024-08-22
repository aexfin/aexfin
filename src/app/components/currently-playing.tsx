import { getTrack } from "../lib/spotify";

export default async function CurrentlyPlaying() {
  const { playing, title, artist, albumImageUrl } = await getTrack();
  return (
    <div
      className={`w-auto h-32 flex flex-row items-center justify-center bg-neutral-950 ${
      playing ? "animate-pulse" : ""
      }`}
    >
      <img
        src={albumImageUrl}
        alt="track"
        className="w-32 h-full pointer-events-none"
      />
      <div className="flex flex-col items-center justify-center m-4">
        <p className="text-center">
          {playing ? "Listening to" : "Last played"}
        </p>
        <h1
          className={`text-center ${
          playing ? "text-green-400" : "text-neutral-300"
          }`}
        >
          {title}
        </h1>
        <p className="text-center">
          by{" "}
          <span
            className={playing ? "text-green-400" : "text-neutral-300"}
          >
            {artist}
          </span>
        </p>
      </div>
    </div>
  );
}