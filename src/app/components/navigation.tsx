import Link from "next/link";

export default async function Navigation() {
    return (
      <div className="flex flex-row w-5/6 lg:w-1/3 items-center bg-neutral-950 justify-between px-4">
        <Link
          href="/"
          className="px-1 hover:bg-violet-400 hover:text-neutral-950"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="px-1 hover:bg-violet-400 hover:text-neutral-950"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="px-1 hover:bg-violet-400 hover:text-neutral-950"
        >
          Projects
        </Link>
        <Link
          href="/music"
          className="px-1 hover:bg-violet-400 hover:text-neutral-950"
        >
          Music
        </Link>
      </div>
    );
}