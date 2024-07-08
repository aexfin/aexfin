import { notFound } from "next/navigation";

type Repository = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    languages_url: string;
    commits_url: string;
    contents_url: string;
    size: number;
    created_at: string;
    pushed_at: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
}

export default async function ProjectDetails({ params }: {
    params: { projectName: string };
}) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    let response = await fetch(`https://api.github.com/repos/aexfin/${params.projectName}`, {
        cache: "no-store",
        method: "GET",
        headers: {
            Authorization: `token ${process.env.TOKEN}`
        }
    });

    const errorCode = response?.ok ? false : response.status;
    if (errorCode) {
        return notFound();
    }

    const repository: Repository = await response.json();

    response = await fetch(repository.languages_url, {
        cache: "no-store",
        method: "GET",
        headers: {
            Authorization: `token ${process.env.TOKEN}`
        }
    });
    const languages: { [key: string]: number } = await response.json();
    const languageNames = Object.keys(languages);
    return (
        <main className="flex flex-col items-center justify-center h-screen p-6">
            <div className="flex flex-col max-w-96 justify-between px-6 py-4 bg-neutral-950 rounded-md border-2 border-neutral-900">
                <div className="mb-2">
                    <h2 className="mb-2 text-2xl text-wrap text-neutral-500">
                        projects/<span className="text-neutral-50">{repository.name}</span>
                    </h2>
                    <p className="mb-2 break-word text-neutral-500">{repository.description}</p>
                    <div className="flex flex-row flex-wrap">
                        {languageNames.map((language, index) => (
                            <div key={index} className="mx-1 my-1 px-2 py-0.5 rounded-full bg-neutral-50 duration-300 hover:bg-neutral-500">
                                <h2 className="text-xs font-bold text-neutral-950">{language}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-2 p-2 rounded-md border-2 border-neutral-800 bg-neutral-900">
                    <p className="text-neutral-500">⭐ Stars: <span className="text-neutral-50">{repository.stargazers_count}</span></p>
                    <p className="text-neutral-500">👁️ Watchers: <span className="text-neutral-50">{repository.watchers_count}</span></p>
                    <p className="text-neutral-500">🖇️ Forks: <span className="text-neutral-50">{repository.forks_count}</span></p>
                    <p className="text-neutral-500">💾 Size: <span className="text-neutral-50">{repository.size}MB</span></p>
                </div>

                <div className="my-2">
                    <p className="text-neutral-500">
                        Created @ <span className="text-neutral-50">
                            {new Date(repository.pushed_at).getUTCHours()}:{new Date(repository.created_at).getUTCMinutes()} <span className="text-neutral-500">on</span> {new Date(repository.created_at).toLocaleDateString()}
                        </span>
                    </p>
                    <p className="text-neutral-500">
                        Latest Push was @ <span className="text-neutral-50">
                            {new Date(repository.pushed_at).getUTCHours()}:{new Date(repository.pushed_at).getUTCMinutes()} <span className="text-neutral-500">on</span> {new Date(repository.pushed_at).toLocaleDateString()}
                        </span>
                    </p>
                </div>

                <a href={repository.html_url} target="_blank" className="mt-4 py-2 text-center rounded-md duration-300 border-2 border-neutral-800 bg-neutral-900 hover:bg-neutral-700 cursor-crosshair">
                    GitHub
                </a>
            </div>
        </main>
    )
}