import { FaGithub, FaInstagram, FaDiscord, FaLastfm } from "react-icons/fa6";
import { TbBrandStrava, TbCodeCircle, TbCodeAsterisk } from "react-icons/tb";
import { fetchTopArtists, getTrack } from "../app/lib/spotify";
import { fetchFromSupabase } from "./lib/strava";
import { fetchWakaTime } from "./lib/wakatime";
import { fetchVisibilityConfigFromSupabase } from "./lib/database";

export default async function Home() {
  const artists = await fetchTopArtists();
  let hidden = await fetchVisibilityConfigFromSupabase();
  const descriptions = [
    // "एक सामान्य व्यक्ति",
    // "some description here",
    // "swooooosh",
    // "//",
    "[on vacation]",
    "[touching some grass]",
    "[out of my crib]"
  ];
  const selected =
    descriptions[Math.floor(Math.random() * descriptions.length)];
  const age = 19;
  const { playing, title, artist, album, albumImageUrl, trackUrl, artistUrl, albumUrl } = await getTrack();
  const stats = await fetchFromSupabase();
  const wakatime = await fetchWakaTime();
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-2 items-center justify-center p-4">
        <div className="relative w-full h-full flex flex-row overflow items-center justify-center col-span-1 row-span-1">
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center pointer-events-none bg-black z-50 ${
              hidden.pfp ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-neutral-400">
              ssshhhhh
              <br />
              (something's cooking here)
            </p>
          </div>
          <div
            title="not me"
            className="w-full h-full flex flex-col border-2 border-black overflow-hidden items-center justify-center col-span-1 row-span-1"
          >
            <img
              src="https://github.com/aexfin.png"
              className="w-full h-full pointer-events-none object-cover scale-105"
              alt="aexfin"
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative w-full h-full flex flex-row overflow-hidden items-center justify-center lg:col-span-2 row-span-1 py-4 md:py-0 lg:py-0">
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center pointer-events-none bg-black z-50 ${
              hidden.desc ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-neutral-400">
              ssshhhhh
              <br />
              (something's cooking here)
            </p>
          </div>
          <div className="w-full h-full flex flex-col border-2 border-black overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1 py-4 md:py-0 lg:py-0">
            <div className="flex flex-col m-1 items-center justify-center">
              <h1 title="not my real name" className="text-2xl">
                aexfin
              </h1>
              <p className="text-sm text-neutral-600">{selected}</p>
            </div>
            <ul className="flex flex-row m-1 gap-2 items-center justify-center">
              <span
                title="some random emoji"
                className="text-xs px-1 py-0.5 bg-black grayscale brightness-200"
              >
                👾
              </span>
              <span className="text-xs px-1 py-0.5 bg-black text-slate-300">
                he/him
              </span>
              <span className="text-xs px-1 py-0.5 bg-black text-slate-300">
                {age} y/o
              </span>
              <span
                title="Mumbai, Maharashtra, India"
                className="text-xs px-1 py-0.5 bg-black text-slate-300"
              >
                Mumbai, MH, IN
              </span>
            </ul>
          </div>
        </div>
        <div className="relative w-full h-full flex flex-row overflow-hidden items-center justify-center col-span-1 row-span-1">
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center bg-black pointer-events-none z-50 ${
              hidden.socials ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-neutral-400">
              ssshhhhh
              <br />
              (something's cooking here)
            </p>
          </div>
          <div className="w-full h-full grid grid-cols-2 grid-rows-2 overflow-hidden items-center justify-center col-span-1 row-span-1">
            <a
              href="https://github.com/aexfin"
              target="_blank"
              title="GitHub"
              className="w-full h-full min-h-16 flex flex-row gap-2 border-2 border-black items-center justify-center bg-slate-50 text-black hover:bg-neutral-600"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://instagram.com/aexfin"
              target="_blank"
              title="Instagram"
              className="w-full h-full min-h-16 flex flex-row gap-2 border-y-2 border-r-2 border-black items-center justify-center bg-slate-50 text-black hover:bg-pink-500"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://discord.com/users/1028983693269815296"
              target="_blank"
              title="Discord"
              className="w-full h-full min-h-16 flex flex-row gap-2 border-x-2 border-b-2 border-black items-center justify-center bg-slate-50 text-black hover:bg-indigo-600"
            >
              <FaDiscord className="text-3xl" />
            </a>
            <a
              href="https://last.fm/user/carbongrated"
              target="_blank"
              title="Last.fm"
              className="w-full h-full min-h-16 flex flex-row gap-2 border-r-2 border-b-2 border-black items-center justify-center bg-slate-50 text-black hover:bg-red-600"
            >
              <FaLastfm className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="relative w-full h-full flex flex-row overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center pointer-events-none bg-black z-50 ${
              hidden.spotify ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-neutral-400">
              ssshhhhh
              <br />
              (something's cooking here)
            </p>
          </div>
          <div className="w-full h-full flex flex-row border-2 border-black overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
            <div
              title={album}
              className="w-full h-full flex flex-col overflow-hidden border-r-2 border-black items-center justify-center"
            >
              <a href={albumUrl} target="_blank">
                <img
                  src={albumImageUrl}
                  className={`pointer-events-none object-cover scale-100 ${
                    playing ? "" : "grayscale"
                  }`}
                  alt={title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="w-full h-full flex flex-col overflow-hidden items-center justify-center">
              <p className="text-xs text-neutral-600">
                {playing ? "Listening to" : "Last played"}
              </p>
              <a href={trackUrl} target="_blank">
                {title}
              </a>
              <p className="text-xs text-neutral-600">
                by {""}{" "}
                <a href={artistUrl} target="_blank" className="text-black">
                  {artist}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full flex flex-row overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center pointer-events-none bg-black z-50 ${
              hidden.artists ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-neutral-400">
              ssshhhhh
              <br />
              (something's cooking here)
            </p>
          </div>
          <div className="w-full h-full flex flex-col border-2 border-black overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
            <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4">
              {artists.map((artist: any, index: any) => (
                <div
                  key={index}
                  className="relative w-full aspect-w-1 aspect-h-1 outline outline-2 outline-black"
                >
                  <a
                    title={`${artist.name} on Spotify`}
                    href={artist.url}
                    target="_blank"
                    className="absolute w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 z-10"
                  >
                    <p className="text-sm text-white">{artist.name}</p>
                    <p className="text-xs text-neutral-400">{artist.genre}</p>
                  </a>
                  <img
                    className="absolute inset-0 w-full h-full object-cover hover:opacity-55 transition-opacity duration-300"
                    src={artist.image}
                    alt={artist.name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-full h-full flex flex-row overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center pointer-events-none bg-black z-50 ${
              hidden.stats ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-neutral-400">
              ssshhhhh
              <br />
              (something's cooking here)
            </p>
          </div>
          <div className="w-full h-full flex flex-col border-2 border-black overflow-hidden items-center justify-center col-span-1 lg:col-span-2 row-span-1">
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
        </div>
        <div className="relative w-full h-full flex flex-row overflow-hidden items-center justify-center col-span-1 md:col-span-2 row-span-1">
          <div
            className={`absolute w-full h-full flex flex-col items-center justify-center pointer-events-none bg-black z-50 ${
              hidden.langs ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-neutral-400">
              ssshhhhh
              <br />
              (something's cooking here)
            </p>
          </div>
          <div className="w-full h-full flex flex-col border-2 border-black overflow-hidden items-center justify-center col-span-1 md:col-span-2 row-span-1">
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
                      index === wakatime.languages.length - 1
                        ? "border-b-0"
                        : ""
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
      </div>
    </main>
  );
}
