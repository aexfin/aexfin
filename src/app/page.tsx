import Profile from "./components/profile";
import SpotifyStatus from "./components/spotify-status";
import Socials from "./components/socials";

export default async function Home() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center gap-10 p-6">
      <Profile />
      <SpotifyStatus />
      <Socials />
    </main>
  );
}
