import Profile from "../components/profile";
import Info from "../components/info";
import SpotifyStatus from "../components/spotify-status";
import Tools from "../components/tools";
import Socials from "../components/socials";

export default async function About() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6">
      <Profile />
      <Info />
      <SpotifyStatus />
      <Tools />
      <Socials />
    </main>
  );
}
