import { getTopTracks } from "../lib/spotify";

export default async function TopTracks() {
  const tracks = await getTopTracks();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="hover:text-violet-400">Top Tracks this Month</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3">
        {tracks.map((track) => (
          <a
            key={track.id}
            href={track.external_urls.spotify}
            target="_blank"
            className="w-full max-w-64 h-full flex flex-row p-1 items-center bg-neutral-950 hover:bg-violet-400 group"
          >
            <img
              src={track.album.images[0].url}
              alt={track.name}
              className="size-20 pointer-events-none"
            />
            <div className="w-full flex flex-col mx-4 items-center justify-center">
              <h1 className="text-center text-neutral-300 group-hover:text-neutral-950">
                {track.name}
              </h1>
              <p className="text-center group-hover:text-neutral-950 text-sm">
                by{" "}
                <span className="text-center text-sm text-neutral-300 group-hover:text-neutral-950">
                  {track.artists[0].name}
                </span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}