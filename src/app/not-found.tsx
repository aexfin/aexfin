export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-8xl">404</h1>
            <h2 className="text-neutral-400 text-2xl">Not Found</h2>
            <h4 className="text-neutral-600 text-wrap max-w-96">
                while you are searching for your page,
            </h4>
            <h4 className="text-neutral-600 text-wrap max-w-96">
            take a sec to follow me on <a href="https://github.com/aexfin"   target="_blank" className="text-neutral-100 cursor-crosshair">GitHub</a>
            </h4>
        </div>
    )
}