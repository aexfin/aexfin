import { getTopArtists } from "../lib/spotify";

export default async function TopArtists() {
  const artists = await getTopArtists();
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="">Top Artists this Month</h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4">
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
