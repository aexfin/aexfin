import TopTracks from "../components/top-tracks";
import TopArtists from "../components/top-artists";
import RecentlyPlayed from "../components/recently-played";

export default async function Music() {
    return (
      <main className="flex flex-col items-center justify-center gap-6 p-6 overflow-hidden">
        <TopTracks />
        <TopArtists />
        <RecentlyPlayed />
      </main>
    );
}
