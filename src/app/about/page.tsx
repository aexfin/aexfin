import { Metadata } from "next";
import { formatDistanceToNow } from "date-fns"

export const metadata: Metadata = {
  title: "about @aexfin",
  description: "a bit more information about @aexfin 👾",
  openGraph: {
    title: "about @aexfin",
    description: "a bit more information about @aexfin 👾",
    url: "https://aexfin.vercel.app/about",
    siteName: "about aexfin 👾"
  }
}

type Track = {
  artist: {
    "#text": string;
  };
  image: [
    {}, {}, {},
    {
      size: string;
      "#text": string;
    }
  ];
  name: string;
  date: {
    uts: number
  }
  "@attr": {
    nowplaying: string;
  }
}

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=aexfin&api_key=${process.env.API_KEY}&limit=1&format=json`,
    {
      cache: "no-store",
      method: "GET",
    }
  );
  const data = await response.json();
  const track: Track = data.recenttracks.track[0];

  function timeAgo(epoch: number): string {
    const date = new Date(epoch * 1000);
    let distance = formatDistanceToNow(date, {addSuffix: false, includeSeconds: true});
    distance = distance.replace("about ", "");
    return distance;
  }
  return (
    <main className="flex flex-col items-center justify-between p-6">
      <img src="https://github.com/aexfin.png" alt="aexfin" className="w-60 rounded-full border-2 border-neutral-900 pointer-events-none"/>
      
      <div className="flex flex-col items-center justify-between m-4">
        <a href="https://github.com/aexfin" target="_blank" className="text-neutral-100 text-4xl p-1 font-black tracking-wider cursor-crosshair">
        <h1>@aexfin</h1>
        </a>
        <p className="p-1 mb-4 text-neutral-500">pixels; frames; nodes; vertices</p>
        <p>some stuffs i can do(very efficiently):</p>
        <ul>
          <li><p className="text-neutral-400">- write programs</p></li>
          <li><p className="text-neutral-400">- make 3d objects</p></li>
          <li><p className="text-neutral-400">- edit videos; photos</p></li>
          <li><p className="text-neutral-400">- listen songs</p></li>
          <li><p className="text-neutral-400">- watch animes</p></li>
        </ul>
      </div>

      <div className="flex flex-row align-middle items-center px-2 py-2 bg-neutral-950 border-2 border-neutral-900 rounded-md">
        <div className="relative">
          <img src={track.image[3]["#text"]} alt="track" className="w-20 h-auto rounded-md border-2 border-neutral-900 pointer-events-none"/>
          <div className={`${Boolean(track["@attr"]?.nowplaying) === true ? "bg-green-600 animate-pulse" : "bg-neutral-600"} w-2 h-2 rounded-full absolute bottom-0 right-0`}></div>
        </div>
        <div className="flex mb-1 align-middle flex-col">
          <div className="flex flex-row align-middle items-center ml-2">
          </div>
          <h2 className="mx-2 text-lg tracking-wider">{track.name}</h2>
          <h2 className="mx-2 text-xs tracking-wider text-neutral-600">by <span className="text-neutral-50">{track.artist["#text"]}</span></h2>
          {Boolean(track["@attr"]?.nowplaying) === false ? (
            <h2 className="mx-2 text-xs mt-2 tracking-wider text-neutral-600">about <span className="text-neutral-50">{timeAgo(track.date.uts)}</span> ago</h2>
          ) : null}
        </div>
      </div>
    </main>
  );
}