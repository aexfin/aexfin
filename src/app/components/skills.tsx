import { FaHtml5, FaCss3, FaJs, FaPython, FaJava, FaRust, FaSpotify } from "react-icons/fa6";

export default async function Skills() {
    return (
      <div className="grid grid-cols-4 grid-rows-* items-center justify-center gap-2">
        <i className="devicon-html5-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        <i className="devicon-css3-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        <i className="devicon-javascript-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        <i className="devicon-python-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        <i className="devicon-java-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        <i className="devicon-typescript-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        <i className="devicon-rust-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        <i className="devicon-tailwindcss-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        <div className="col-span-4 flex justify-center gap-2">
          <i className="devicon-discordjs-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
          <i className="devicon-github-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
          <i className="devicon-docker-plain text-xl p-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950" />
        </div>
      </div>
    );
}