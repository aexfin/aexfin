import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="flex flex-col items-center justify-between p-6">
      <img src="https://github.com/aexfin.png" alt="aexfin" className="w-60 rounded-full border-2 border-neutral-900 pointer-events-none"/>
      
      <div className="flex flex-col items-center justify-between m-4">
        <a href="https://github.com/aexfin" target="_blank" className="text-neutral-100 text-4xl p-1 font-black tracking-wider cursor-crosshair">
        <h1>@aexfin</h1>
        </a>
        <p className="p-1 text-neutral-500">pixels; frames; nodes; vertices</p>
      </div>

      <div className="flex flex-row">
        <span className="px-2 bg-neutral-900 rounded-lg text-neutral-400 m-1 duration-300 hover:bg-html hover:text-neutral-50">
          HTML
        </span>
        <span className="px-2 bg-neutral-900 rounded-lg text-neutral-400 m-1 duration-300 hover:bg-css hover:text-neutral-50">
          CSS
        </span>
        <span className="px-2 bg-neutral-900 rounded-lg text-neutral-400 m-1 duration-300 hover:bg-js hover:text-neutral-900">
          JavaScript
        </span>
        <span className="px-2 bg-neutral-900 rounded-lg text-neutral-400 m-1 duration-300 hover:bg-py hover:text-neutral-900">
          Python
        </span>
        <span className="px-2 bg-neutral-900 rounded-lg text-neutral-400 m-1 duration-300 hover:bg-rs hover:text-neutral-50">
          Rust
        </span>
        <span className="px-2 bg-neutral-900 rounded-lg text-neutral-400 m-1 duration-300 hover:bg-ts hover:text-neutral-50">
          TypeScript
        </span>
      </div>

      <div className="flex flex-col my-2">
        <Link href="https://github.com/aexfin" target="_blank" className="px-16 py-3 m-2 text-lg bg-neutral-950 text-neutral-500 rounded-md border-2 border-neutral-900 duration-300 hover:text-neutral-50 hover:bg-neutral-800 cursor-crosshair">
          socials/<span className="text-neutral-50">github</span>
        </Link>
        <Link href="https://discord.com/users/1028983693269815296/" target="_blank" className="px-16 py-3 m-2 text-lg bg-neutral-950 text-neutral-500 rounded-md border-2 border-neutral-900 duration-300 hover:text-neutral-50 hover:bg-neutral-800 cursor-crosshair">
          socials/<span className="text-neutral-50">discord</span>
        </Link>
        <Link href="https://steamcommunity.com/profiles/76561199387769792" target="_blank" className="px-16 py-3 m-2 text-lg bg-neutral-950 text-neutral-500 rounded-md border-2 border-neutral-900 duration-300 hover:text-neutral-50 hover:bg-neutral-800 cursor-crosshair">
          socials/<span className="text-neutral-50">steam</span>
        </Link>
      </div>
    </main>
  );
}