import Link from "next/link";
import { getTrack } from "../app/lib/spotify";

export default async function Home() {
  const age = new Date().getFullYear() - 2005;
  const { playing, played_at, title, artist, albumImageUrl } = await getTrack();
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-auto grid grid-cols-1 grid-rows-* md:grid-cols-2 lg:grid-cols-6 gap-2 items-center justify-center p-2">
        <div className="w-full h-full col-span-1 row-span-1 p-2 bg-zinc-950">
          <img
            src="https://github.com/aexfin.png"
            alt="aexfin"
            className="pointer-events-none"
          />
        </div>
        <div className="w-full h-full flex flex-col col-span-1 md:col-span-1 lg:col-span-2 row-span-1 items-center justify-center p-2 bg-zinc-950">
          <h1 className="text-2xl text-zinc-300">aexfin</h1>
          <p>random guy with shit load of time</p>
          <div className="flex flex-row flex-wrap gap-1">
            <span className="px-1 bg-zinc-900">👾</span>
            <span className="px-1 bg-zinc-900">he/him</span>
            <span className="px-1 bg-zinc-900">{age} y/o</span>
            <span className="px-1 bg-zinc-900">Mumbai, MH, IN</span>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
          <Link
            href={"https://github.com/aexfin"}
            target="_blank"
            className="w-full h-1/3 flex flex-col items-center justify-center text-xl bg-zinc-950 hover:bg-zinc-900"
          >
            GitHub
          </Link>
          <Link
            href={"https://instagram.com/aexfin"}
            target="_blank"
            className="w-full h-1/3 flex flex-col items-center justify-center text-xl bg-zinc-950 hover:bg-zinc-900"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            href={"https://discord.com/users/1028983693269815296"}
            className="w-full h-1/3 flex flex-col items-center justify-center text-xl bg-zinc-950 hover:bg-zinc-900"
          >
            Discord
          </Link>
        </div>
        <div className="w-full h-full flex flex-row col-span-1 md:col-span-1 lg:col-span-2 row-span-1 items-center justify-center p-2 bg-zinc-950">
          <img
            src={albumImageUrl}
            alt={title}
            className={`size-32 lg:size-56 pointer-events-none ${
              playing ? "animate-pulse" : ""
            }`}
          />
          <div
            className={`w-full flex flex-col items-center align-middle justify-center ${
              playing ? "animate-pulse" : ""
            }`}
          >
            <p>{playing ? "Listening to" : "Last played"}</p>
            <h1 className="text-xl text-zinc-300">{title}</h1>
            <p>
              by {""} <span className="text-zinc-300">{artist}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
