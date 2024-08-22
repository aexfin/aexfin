export default async function Info() {
    const yob = 2005;
    const year = new Date().getFullYear();
    const age = year - yob;

    return (
      <div className="flex flex-row lg:flex-col items-center justify-center gap-2">
        <h1 className="px-1 bg-neutral-950 hover:text-violet-400">👾</h1>
        <h1 className="px-1 bg-neutral-950 hover:text-violet-400">he/him</h1>
        <h1 className="px-1 bg-neutral-950 hover:text-violet-400">{age} y/o</h1>
        <h1 className="px-1 bg-neutral-950 hover:text-violet-400">
          Mumbai, MH, IN
        </h1>
      </div>
    );
}