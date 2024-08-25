import RecentlyPlayed from "../components/recently-played";
import TopArtists from "../components/top-artists";
import TopTracks from "../components/top-tracks";

export default async function Music() {
    return (
      <main className="flex flex-col items-center justify-center gap-6 p-6 overflow-hidden">
        <TopTracks />
        <TopArtists />
        <RecentlyPlayed />
      </main>
    );
}
