import { getAccessToken, NOW_PLAYING_ENDPOINT } from "../lib/spotify";

export default async function CurrentlyPlaying() {
  const { access_token } = await getAccessToken();
  const getNowPlaying = async () => {
    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-cache",
    });
  };
  const response = await getNowPlaying();

  let song = null;
  let playing = false;
  let title = "";
  let artist = "";
  let albumImageUrl = "";

  if (response.status === 200) {
    try {
      song = await response.json();
      playing = song.is_playing;
      title = song.item.name;
      artist = song.item.artists[0].name;
      albumImageUrl = song.item.album.images[0].url;

      return (
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
              <span
                className={playing ? "text-green-400" : "text-neutral-300"}
              >
                {artist}
              </span>
            </p>
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  } else {
    return null;
  }
}