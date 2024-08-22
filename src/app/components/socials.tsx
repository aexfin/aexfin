export default async function Socials() {
    return (
      <div className="flex flex-row lg:flex-col items-center justify-between gap-2">
        <a
          href="https://github.com/aexfin"
          target="_blank"
          className="px-1 bg-neutral-950 hover:text-violet-400"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/aexfin"
          target="_blank"
          className="px-1 bg-neutral-950 hover:text-violet-400"
        >
          Instagram
        </a>
        <a
          href="https://discord.com/users/1028983693269815296"
          target="_blank"
          className="px-1 bg-neutral-950 hover:text-violet-400"
        >
          Discord
        </a>
      </div>
    );
}