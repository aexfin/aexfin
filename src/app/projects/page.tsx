import Link from "next/link";

export default async function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col lg:flex-col items-center justify-center gap-10 p-6">
      <div className="flex flex-row items-center justify-center gap-1">
        <Link
          href="/"
          className="px-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="px-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950"
        >
          Projects
        </Link>
        <Link
          href="/music"
          className="px-1 bg-neutral-950 hover:bg-violet-400 hover:text-neutral-950"
        >
          Music
        </Link>
      </div>
      <div>
        <h1 className="text-2xl">No projects yet :/</h1>
      </div>
    </main>
  );
}
