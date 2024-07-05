export default async function About() {
  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=aexfin&api_key=${process.env.API_KEY}&limit=1&format=json`);
  const data = await response.json();
  const track = data.recenttracks.track[0];

  const artist = track["artist"]["#text"];
  const name = track["name"];
  const image = track["image"][3]["#text"];
  return (
    <main className="flex flex-col items-center justify-between p-6">
      <img src="https://github.com/aexfin.png" alt="aexfin" className="w-60 rounded-full border-2 border-neutral-500 pointer-events-none"/>
      
      <div className="flex flex-col items-center justify-between m-4">
        <a href="https://github.com/aexfin"  className="text-4xl p-1 font-black tracking-wider cursor-crosshair">
        <h1>@aexfin</h1>
        </a>
        <p className="p-1 text-neutral-500">pixels; frames; nodes; vertices</p>
        <p>some stuffs i can do(very efficiently):</p>
        <ul>
          <li><p className="text-neutral-400">- write programs</p></li>
          <li><p className="text-neutral-400">- make 3d objects</p></li>
          <li><p className="text-neutral-400">- edit videos; photos</p></li>
          <li><p className="text-neutral-400">- listen songs</p></li>
          <li><p className="text-neutral-400">- watch animes</p></li>
        </ul>
      </div>

      <div className="flex flex-row items-center justify-between px-2 py-2 bg-neutral-800 rounded-md">
        <img src={image} alt="track" className="w-20 h-auto rounded-md"/>
        <div className="flex flex-col">
          <h2 className="px-2 text-xs text-neutral-500">Last Played</h2>
          <h2 className="px-2 py-0 text-lg">{name}</h2>
          <h2 className="px-2 text-xs text-neutral-400">by {artist}</h2>
        </div>
      </div>
    </main>
  );
}