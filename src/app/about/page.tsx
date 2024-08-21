import Profile from "../components/profile";
import CurrentlyPlaying from "../components/currently-playing";
import Info from "../components/info";
import Socials from "../components/socials";
import Skills from "../components/skills";

export default async function About() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6">
      <Profile />
      <Info />
      <CurrentlyPlaying />
      <Skills />
      <Socials />
    </main>
  );
}
