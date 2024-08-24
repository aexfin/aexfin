import { getTopArtists } from "../lib/spotify";

export default async function TopArtists() {
  const artists = await getTopArtists();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="hover:text-violet-400">Top Artists this Month</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3">
        {artists.map((artist) => (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
            className="w-auto h-full flex flex-col items-center justify-center p-2 bg-neutral-950 hover:bg-violet-400 group"
          >
            <img
              src={artist.images[0].url}
              alt={artist.name}
              className="size-32"
            />
            <h1 className="text-center text-neutral-300 group-hover:text-neutral-950">
              {artist.name}
            </h1>
          </a>
        ))}
      </div>
    </div>
  );
}
