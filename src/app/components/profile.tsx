export default async function Profile() {
    return (
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://github.com/aexfin.png"
          alt="aexfin"
          className="w-40 h-auto pointer-events-none"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-neutral-300">aexfin</h1>
          <p className="text-center hover:text-violet-400">
            short guy with sh*t load of time
          </p>
        </div>
      </div>
    );
}