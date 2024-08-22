import CurrentlyPlaying from "./components/currently-playing";
import Profile from "./components/profile";
import Socials from "./components/socials";

export default async function Home() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center gap-10 p-6">
      <Profile />
      <CurrentlyPlaying />
      <Socials />
    </main>
  );
}
