import { getTopTracks } from "../lib/spotify";

export default async function TopTracks() {
  const tracks = await getTopTracks();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="">Top Tracks this Month</h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 place-items-center justify-center gap-4">
        {tracks.map((track) => (
          <a
            key={track.id}
            href={track.external_urls.spotify}
            target="_blank"
            className="w-auto h-full flex flex-col items-center justify-center p-2 bg-neutral-950 hover:bg-violet-400 group"
          >
            <img
              src={track.album.images[0].url}
              alt={track.name}
              className="size-24 lg:size-32"
            />
            <h1 className="text-center text-neutral-300 group-hover:text-neutral-950">
              {track.name}
            </h1>
            <p className="text-center group-hover:text-neutral-950">
              by{" "}
              <span className="text-center text-neutral-300 group-hover:text-neutral-950">
                {track.artists[0].name}
              </span>
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}