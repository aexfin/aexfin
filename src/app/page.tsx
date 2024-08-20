import Link from "next/link";
import { getAccessToken, NOW_PLAYING_ENDPOINT } from "@/app/lib/spotify";

export default async function Home() {
  const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache"
    });
  };
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    console.log("something is wrong")
  }

  const song = await response.json();
  const device = song.device.name;
  const playing = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists[0].name;
  const albumImageUrl = song.item.album.images[0].url;

  const yob = 2005;
  const year = new Date().getFullYear();
  const age = year - yob;

  return (
    <main className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 p-6">
      {/* Navigation */}
      <div className="flex flex-col items-center justify-center gap-1">
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

      {/* Profile Image */}
      <img
        src="https://github.com/aexfin.png"
        alt="aexfin"
        className="w-32 h-auto pointer-events-none"
      />

      {/* Profile Info */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-neutral-300">aexfin</h1>
        <p className="hover:text-violet-400">
          short guy with sh*t load of time
        </p>
      </div>

      {/* Additional Info */}
      <div className="flex flex-col items-center gap-1 justify-center">
        <span className="px-1 bg-neutral-950 hover:text-violet-400">
          {age} y/o
        </span>
        <span className="px-1 bg-neutral-950 hover:text-violet-400 text-center">
          Mumbai, IN
        </span>
        <span className="px-1 bg-neutral-950 hover:text-violet-400">👾</span>
      </div>

      {/* Now Playing */}
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
            <span className={playing ? "text-green-400" : "text-neutral-300"}>
              {artist}
            </span>
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center justify-between gap-1">
        <a
          href="https://github.com/aexfin"
          target="_blank"
          className="px-1 bg-neutral-950 hover:text-violet-400"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/aexfin"
          target="_blank"
          className="px-1 bg-neutral-950 hover:text-violet-400"
        >
          Instagram
        </a>
        <a
          href="https://discord.com/users/1028983693269815296"
          target="_blank"
          className="px-1 bg-neutral-950 hover:text-violet-400"
        >
          Discord
        </a>
      </div>
    </main>
  );
}
