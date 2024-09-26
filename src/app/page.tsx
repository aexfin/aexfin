import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa6";
import { getTrack } from "../app/lib/spotify";

export default async function Home() {
  const age = new Date().getFullYear() - 2005;
  const { playing, title, artist, albumImageUrl } = await getTrack();
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-rows-* gap-4 items-center justify-center p-4">
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 row-span-1">
          <img
            src="https://github.com/aexfin.png"
            className="w-full h-full pointer-events-none object-contain scale-105"
            alt="aexfin"
            loading="lazy"
          />
        </div>
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1 py-4 md:py-0 lg:py-0">
          <div className="flex flex-col m-1 items-center justify-center">
            <h1 className="text-2xl">aexfin</h1>
            <p className="text-sm text-neutral-600">yet another programmer</p>
          </div>
          <ul className="flex flex-row m-1 gap-2 items-center justify-center">
            <span className="text-xs px-1 py-0.5 bg-black grayscale brightness-200 rounded-sm">
              👾
            </span>
            <span className="text-xs px-1 py-0.5 bg-black text-slate-300 rounded-sm">
              he/him
            </span>
            <span className="text-xs px-1 py-0.5 bg-black text-slate-300 rounded-sm">
              {age} y/o
            </span>
            <span className="text-xs px-1 py-0.5 bg-black text-slate-300 rounded-sm">
              Mumbai, MH, IN
            </span>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col overflow-hidden items-center justify-center gap-4 col-span-1 row-span-1">
          <a
            href="https://github.com/aexfin"
            target="_blank"
            className="w-full h-full flex flex-row gap-2 border-2 border-black items-center justify-center bg-slate-50 text-black rounded-md shadow-[0px_4px_0_0_#000] hover:bg-slate-400 active:shadow-[0px_2px_0_0_#000] active:translate-y-[2px]"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://instagram.com/aexfin"
            target="_blank"
            className="w-full h-full flex flex-row gap-2 border-2 border-black items-center justify-center bg-slate-50 text-black rounded-md shadow-[0px_0px_0_0_#000] hover:bg-slate-400 active:shadow-[0px_0px_0_0_#000] active:translate-y-[0px] active:scale-95 "
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            href="https://discord.com/users/1028983693269815296"
            target="_blank"
            className="w-full h-full flex flex-row gap-2 border-2 border-black items-center justify-center bg-slate-50 text-black rounded-md shadow-[0px_-4px_0_0_#000] hover:bg-slate-400 active:shadow-[0px_-2px_0_0_#000] active:translate-y-[-2px]"
          >
            <FaDiscord />
            Discord
          </a>
        </div>
        <div className="w-full h-full flex flex-row border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
          <div className="w-full h-full flex flex-col overflow-hidden items-center justify-center">
            <img
              src={albumImageUrl}
              className={`pointer-events-none object-contain border-r-2 border-black ${
                playing ? "" : "grayscale"
              }`}
              alt={title}
              loading="lazy"
            />
          </div>
          <div className="w-full h-full flex flex-col overflow-hidden items-center justify-center">
            <p className="text-xs text-neutral-600">
              {playing ? "Listening to" : "Last played"}
            </p>
            <h1>{title}</h1>
            <p className="text-xs text-neutral-600">
              by {""} <span className="text-black">{artist}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
