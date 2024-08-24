import Profile from "../components/profile";
import CurrentlyPlaying from "../components/currently-playing";
import Info from "../components/info";
import Socials from "../components/socials";
import Tools from "../components/tools";

export default async function About() {

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6">
      <Profile />
      <Info />
      <CurrentlyPlaying />
      <Tools />
      <Socials />
    </main>
  );
}
