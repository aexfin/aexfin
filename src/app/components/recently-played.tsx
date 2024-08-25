import moment from "moment";
import { getRecentlyPlayed } from "../lib/spotify";

export default async function RecentlyPlayed() {
  const tracks = await getRecentlyPlayed();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="hover:text-violet-400">Recently Played Tracks</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3">
        {tracks.map((track) => (
          <a
            key={track.track.id}
            href={track.track.external_urls.spotify}
            target="_blank"
            className="w-full max-w-64 h-full flex flex-row p-1 items-center bg-neutral-950 hover:bg-violet-400 group"
          >
            <img
              src={track.track.album.images[0].url}
              alt={track.track.name}
              className="size-20 pointer-events-none"
            />
            <div className="w-full flex flex-col mx-4 items-center justify-center">
              <h1 className="text-center text-neutral-300 group-hover:text-neutral-950">
                {track.track.name}
              </h1>
              <p className="text-center group-hover:text-neutral-950 text-sm">
                by{" "}
                <span className="text-center text-sm text-neutral-300 group-hover:text-neutral-950">
                  {track.track.artists[0].name}
                </span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
