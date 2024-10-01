import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa6";
import { TbBrandStrava, TbCodeCircle, TbCodeAsterisk } from "react-icons/tb";
import { getTrack } from "../app/lib/spotify";
import { fetchFromSupabase } from "./lib/strava";
import { fetchWakaTime } from "./lib/wakatime";

export default async function Home() {
  const age = new Date().getFullYear() - 2005;
  const { playing, title, artist, albumImageUrl } = await getTrack();
  const stats = await fetchFromSupabase();
  const wakatime = await fetchWakaTime();
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-4 items-center justify-center p-4">
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 row-span-1">
          <img
            src="https://github.com/aexfin.png"
            className="w-full h-full pointer-events-none object-cover scale-105"
            alt="aexfin"
            loading="lazy"
          />
        </div>
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1 py-4 md:py-0 lg:py-0">
          <div className="flex flex-col m-1 items-center justify-center">
            <h1 className="text-2xl">aexfin</h1>
            <p className="text-sm text-neutral-600">एक सामान्य व्यक्ति</p>
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
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
          <div className="w-full h-auto flex flex-row border-b-2 border-black items-center justify-center p-2 gap-2">
            <TbBrandStrava />
            <h1>Strava Statistics</h1>
          </div>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="flex flex-row items-center gap-2 mb-2">
                <h3>Last Run</h3>
              </div>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.last_run?.distance} km
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.last_run?.time?.hours}:
                {stats?.last_run?.time?.minutes}:
                {stats?.last_run?.time?.seconds}
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="flex flex-row items-center gap-2 mb-2">
                <h3>Total Run</h3>
              </div>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.total_run?.distance} km
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.total_run?.time?.hours}:
                {stats?.total_run?.time?.minutes}:
                {stats?.total_run?.time?.seconds}
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="flex flex-row items-center gap-2 mb-2">
                <h3>Last Biking</h3>
              </div>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.last_ride?.distance} km
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.last_ride?.time?.hours}:
                {stats?.last_ride?.time?.minutes}:
                {stats?.last_ride?.time?.seconds}
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="flex flex-row items-center gap-2 mb-2">
                <h3>Total Biking</h3>
              </div>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.total_ride?.distance} km
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.total_ride?.time?.hours}:
                {stats?.total_ride?.time?.minutes}:
                {stats?.total_ride?.time?.seconds}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
          <div className="w-full h-auto flex flex-row border-b-2 border-black items-center justify-center p-2 gap-2">
            <TbCodeCircle />
            <h1>Coding Statistics</h1>
          </div>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h3>Daily Average</h3>
              <p className="text-sm text-neutral-600">
                This Week: {wakatime.tw_daily_average}
              </p>
              <p className="text-sm text-neutral-600">
                All Time: {wakatime.at_daily_average}
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h3>Total Time</h3>
              <p className="text-sm text-neutral-600">
                This Week: {wakatime.tw_total_time}
              </p>
              <p className="text-sm text-neutral-600">
                All Time: {wakatime.at_total_time}
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h3>Best Day (This Week)</h3>
              <p className="text-sm text-neutral-600">
                Date: {wakatime.tw_best_day.date}
              </p>
              <p className="text-sm text-neutral-600">
                Time: {wakatime.tw_best_day.time}
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h3>Best Day (All Time)</h3>
              <p className="text-sm text-neutral-600">
                Date: {wakatime.at_best_day.date}
              </p>
              <p className="text-sm text-neutral-600">
                Time: {wakatime.at_best_day.time}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
          <div className="w-full h-auto flex flex-row border-b-2 border-black items-center justify-center py-2 gap-2">
            <TbCodeAsterisk />
            <h1>Languages Statistics</h1>
          </div>
          <div className="w-full h-full flex flex-col gap-4">
            {wakatime.languages.map((language: any, index: number) => (
              <div
                key={index}
                className="w-full h-full flex flex-col overflow-hidden items-center justify-center"
              >
                <h3>
                  {language.name} ({language.text})
                </h3>
                <div
                  className={`w-full min-h-8 flex flex-col border-y-2 ${
                    index === wakatime.languages.length - 1 ? "border-b-0" : ""
                  } border-black overflow-hidden items-start justify-center`}
                >
                  <div
                    style={{ width: `${language.percent}%` }}
                    className="h-full bg-black"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
