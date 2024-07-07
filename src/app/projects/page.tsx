import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "@aexfin's projects",
  description: "a bunch of information about @aexfin's projects 👾",
  openGraph: {
    title: "@aexfin's projects",
    description: "a bunch of information about @aexfin's projects 👾",
    url: "https://aexfin.vercel.app/projects",
    siteName: "aexfin's projects 👾"
  }
}

type Repository = {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
}

export default async function Projects() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://api.github.com/users/aexfin/repos",
    {
      cache: "no-store",
      method: "GET",
      headers: {
        Authorization: `token ${process.env.TOKEN}`,
      }
    }
  )
  const repositories: Repository[] = await response.json();
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="flex flex-row flex-wrap items-center justify-center">
        {repositories.map((repository) => (
          <Link href={`/projects/${repository.name}`} className="min-w-64 min-h-32 px-6 py-4 m-1.5 justify-between text-wrap bg-neutral-950 rounded-md border-2 border-neutral-900 cursor-crosshair duration-300 hover:bg-neutral-800" key={repository.id}>
            <div className="mb-2">
            <h2 className="text-2xl">{repository.full_name}</h2>
            <p className="text-sm text-neutral-500">{repository.description}</p>
            </div>
              {repository.language && (
                <span className="px-1.5 py-1 my-1 text-xs font-semibold bg-neutral-400 rounded-full text-neutral-950">
                  {repository.language}
                </span>
              )}
          </Link>
        ))}
      </div>
    </main>
  );
}