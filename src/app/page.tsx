import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-6">
      <img src="https://github.com/aexfin.png" alt="aexfin" className="w-60 rounded-full border-2 border-neutral-500 pointer-events-none"/>
      
      <div className="flex flex-col items-center justify-between m-4">
        <a href="https://github.com/aexfin"  className="text-4xl p-1 font-black tracking-wider cursor-crosshair">
        <h1>@aexfin</h1>
        </a>
        <p className="p-1 text-neutral-500">pixels; frames; nodes; vertices</p>
      </div>

      <div className="flex flex-row">
        <span className="px-2 bg-neutral-400 rounded-lg text-neutral-950 m-1 duration-300 hover:bg-html hover:text-neutral-50">
          HTML
        </span>
        <span className="px-2 bg-neutral-400 rounded-lg text-neutral-950 m-1 duration-300 hover:bg-css hover:text-neutral-50">
          CSS
        </span>
        <span className="px-2 bg-neutral-400 rounded-lg text-neutral-950 m-1 duration-300 hover:bg-js">
          JavaScript
        </span>
        <span className="px-2 bg-neutral-400 rounded-lg text-neutral-950 m-1 duration-300 hover:bg-py">
          Python
        </span>
        <span className="px-2 bg-neutral-400 rounded-lg text-neutral-950 m-1 duration-300 hover:bg-rs hover:text-neutral-50">
          Rust
        </span>
        <span className="px-2 bg-neutral-400 rounded-lg text-neutral-950 m-1 duration-300 hover:bg-ts hover:text-neutral-50">
          TypeScript
        </span>
      </div>
    </main>
  );
}
