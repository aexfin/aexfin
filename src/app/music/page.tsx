import Link from "next/link";
import { getAccessToken, TOP_TRACKS_ENDPOINT } from "@/app/lib/spotify";

type Track = {
  album: {
    images: [
      {
        url: string;
      }, {}, {}
    ]
  }
  artists: [
    {
      name: string;
    }
  ];
  external_urls: {
    spotify: string;
  }
  id: string;
  name: string;
}

export default async function Music(res: any) {
  const getTopTracks = async () => {
    const { access_token } = await getAccessToken();

    return fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache"
    });
  };
  let tracks:Track[] = [];
  const response = await getTopTracks();
  if (response.status === 204) {
    console.log(response.status);
  } else if (response.status >= 200 && response.status < 300) {
    try {
      const data = await response.json();
      tracks = await data.items;
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  } else {
    console.error("Error response status:", response.status);
  }
  return (
    <main className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 p-6">
      <div className="flex flex-row lg:flex-col items-center justify-center gap-1">
        <Link
          href="/"
          className="px-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="px-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950"
        >
          Projects
        </Link>
        <Link
          href="/music"
          className="px-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950"
        >
          Music
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1>
          Top 10{" "}
          <span className="text-neutral-300 hover:text-violet-400">Tracks</span>{" "}
          this Month
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 grid-rows-* items-center justify-center gap-2">
          {tracks.map((track) => (
            <a
              href={track.external_urls.spotify}
              target="_blank"
              key={track.id}
              className="flex flex-col items-center justify-center bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950 p- group"
            >
              <img
                src={track.album.images[0].url}
                alt="image"
                className="w-32 h-auto pointer-events-none"
              />
              <h1 className="text-neutral-300 text-center group-hover:text-neutral-950">
                {track.name}
              </h1>
              <p className="text-center group-hover:text-neutral-950">
                by{" "}
                <span className="text-neutral-300 text-center group-hover:text-neutral-950">
                  {track.artists[0].name}
                </span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
