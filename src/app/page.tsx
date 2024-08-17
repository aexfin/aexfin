export default async function Home() {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM}&api_key=${process.env.API_KEY}&page=1&limit=1&format=json`,
    {
      cache: "no-cache",
      method: "GET"
    }
  );
  const data = await response.json()
  const track = await data.recenttracks.track?.[0];
  const artist = await track?.artist?.["#text"];
  const name = await track?.name;
  const image = await track?.image?.[3]?.["#text"]
  const playing = Boolean(await track?.["@attr"]?.["nowplaying"])

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center gap-10 p-6">
      <img
        src="https://github.com/aexfin.png"
        alt="aexfin"
        className="w-32 h-auto pointer-events-none"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-neutral-300">aexfin</h1>
        <p className="hover:text-neutral-300">
          short guy with sh*t load of time
        </p>
      </div>
      <div className="flex flex-col items-center gap-1 justify-center">
        <span className="px-1 bg-neutral-950 hover:text-neutral-300">
          Graphic Designer
        </span>
        <span className="px-1 bg-neutral-950 hover:text-neutral-300">
          VFX Editor
        </span>
        <span className="px-1 bg-neutral-950 hover:text-neutral-300">
          Developer
        </span>
      </div>
      <div
        className={`w-auto h-32 flex flex-row items-center justify-center bg-neutral-950 ${
          playing ? "animate-pulse" : ""
        }`}
      >
        <img src={image} alt="track" className="w-32 pointer-events-none" />
        <div className="flex flex-col items-center justify-center m-4">
          {playing ? (
            <p className="text-center">Listening to</p>
          ) : (
            <p className="text-center">Last played</p>
          )}
          <h1 className="text-neutral-300 text-center">{name}</h1>
          <p className="text-center">
            by <span className="text-neutral-300">{artist}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <a
          href="https://github.com/aexfin"
          target="_blank"
          className="hover:text-neutral-300"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/aexfin"
          target="_blank"
          className="hover:text-neutral-300"
        >
          Instagram
        </a>
        <a
          href="https://discord.com/users/1028983693269815296"
          target="_blank"
          className="hover:text-neutral-300"
        >
          Discord
        </a>
      </div>
    </main>
  );
}