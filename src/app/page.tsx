import { FaGithub, FaInstagram, FaDiscord, FaDribbble } from "react-icons/fa6";
import { TbBrandStrava, TbCodeCircle, TbCodeAsterisk } from "react-icons/tb";
import { getTrack } from "../app/lib/spotify";
import { fetchFromSupabase } from "./lib/strava";
import { fetchWakaTime } from "./lib/wakatime";

export default async function Home() {
  const descriptions = ["एक सामान्य व्यक्ति", "some description here", "part time graphic designer :(", "tries to be cool*"];
  const selected = descriptions[Math.floor(Math.random() * descriptions.length)];
  const age = new Date().getFullYear() - 2005;
  const { playing, title, artist, albumImageUrl } = await getTrack();
  const stats = await fetchFromSupabase();
  const wakatime = await fetchWakaTime();
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-4 items-center justify-center p-4">
        <div
          title="not me"
          className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 row-span-1"
        >
          <img
            src="https://github.com/aexfin.png"
            className="w-full h-full pointer-events-none object-cover scale-105"
            alt="aexfin"
            loading="lazy"
          />
        </div>
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1 py-4 md:py-0 lg:py-0">
          <div className="flex flex-col m-1 items-center justify-center">
            <h1 title="not my real name" className="text-2xl">aexfin</h1>
            <p className="text-sm text-neutral-600">{selected}</p>
          </div>
          <ul className="flex flex-row m-1 gap-2 items-center justify-center">
            <span title="some random emoji" className="text-xs px-1 py-0.5 bg-black grayscale brightness-200 rounded-sm">
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
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 overflow-hidden items-center justify-center gap-4 col-span-1 row-span-1">
          <a
            href="https://github.com/aexfin"
            target="_blank"
            title="GitHub"
            className="w-full h-full min-h-16 flex flex-row gap-2 border-2 border-black items-center justify-center bg-slate-50 text-black rounded-md hover:bg-slate-400 active:scale-95"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://instagram.com/aexfin"
            target="_blank"
            title="Instagram"
            className="w-full h-full min-h-16 flex flex-row gap-2 border-2 border-black items-center justify-center bg-slate-50 text-black rounded-md hover:bg-slate-400"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://discord.com/users/1028983693269815296"
            target="_blank"
            title="Discord"
            className="w-full h-full min-h-16 flex flex-row gap-2 border-2 border-black items-center justify-center bg-slate-50 text-black rounded-md hover:bg-slate-400 active:scale-95"
          >
            <FaDiscord className="text-3xl" />
          </a>
          <a
            href="https://dribbble.com/aexfin"
            target="_blank"
            title="Dribbble"
            className="w-full h-full min-h-16 flex flex-row gap-2 border-2 border-black items-center justify-center bg-slate-50 text-black rounded-md hover:bg-slate-400 active:scale-95"
          >
            <FaDribbble className="text-3xl" />
          </a>
        </div>
        <div className="w-full h-full flex flex-row border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
          <div
            title={title}
            className="w-full h-full flex flex-col overflow-hidden border-r-2 border-black items-center justify-center"
          >
            <img
              src={albumImageUrl}
              className={`pointer-events-none object-cover scale-100 ${
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
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-2">
            <div
              title="Last 4 weeks"
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <h3>Recent Runs</h3>
              <p className="text-sm text-neutral-600">
                Count: {stats?.recent_runs?.count}
              </p>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.recent_runs?.distance} kms
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.recent_runs?.time?.hours}:
                {stats?.recent_runs?.time?.minutes}:
                {stats?.recent_runs?.time?.seconds}
              </p>
            </div>
            <div
              title="Last 4 weeks"
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <h3>Recent Bikings</h3>
              <p className="text-sm text-neutral-600">
                Count: {stats?.recent_rides?.count}
              </p>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.recent_rides?.distance} kms
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.recent_rides?.time?.hours}:
                {stats?.recent_rides?.time?.minutes}:
                {stats?.recent_rides?.time?.seconds}
              </p>
            </div>
            <div
              title="Last 4 weeks"
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <h3>Recent Swims</h3>
              <p className="text-sm text-neutral-600">
                Count: {stats?.recent_swims?.count}
              </p>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.recent_swims?.distance} kms
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.recent_swims?.time?.hours}:
                {stats?.recent_swims?.time?.minutes}:
                {stats?.recent_swims?.time?.seconds}
              </p>
            </div>
            <div
              title="All time"
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <h3>Total Runs</h3>
              <p className="text-sm text-neutral-600">
                Count: {stats?.total_runs?.count}
              </p>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.total_runs?.distance} kms
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.total_runs?.time?.hours}:
                {stats?.total_runs?.time?.minutes}:
                {stats?.total_runs?.time?.seconds}
              </p>
            </div>
            <div
              title="All time"
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <h3>Total Bikings</h3>
              <p className="text-sm text-neutral-600">
                Count: {stats?.total_rides?.count}
              </p>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.total_rides?.distance} kms
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.total_rides?.time?.hours}:
                {stats?.total_rides?.time?.minutes}:
                {stats?.total_rides?.time?.seconds}
              </p>
            </div>
            <div
              title="All time"
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <h3>Total Swims</h3>
              <p className="text-sm text-neutral-600">
                Count: {stats?.total_swims?.count}
              </p>
              <p className="text-sm text-neutral-600">
                Distance: {stats?.total_swims?.distance} kms
              </p>
              <p className="text-sm text-neutral-600">
                Time: {stats?.total_swims?.time?.hours}:
                {stats?.total_swims?.time?.minutes}:
                {stats?.total_swims?.time?.seconds}
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
        <div className="w-full h-full flex flex-col border-2 border-black rounded-lg overflow-hidden items-center justify-center col-span-1 md:col-span-2 row-span-1">
          <div className="w-full h-auto flex flex-row border-b-2 border-black items-center justify-center py-2 gap-2">
            <TbCodeAsterisk />
            <h1>Language Statistics</h1>
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
                  className={`w-full h-full min-h-8 flex flex-col border-y-2 ${
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
