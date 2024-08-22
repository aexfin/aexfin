import TopTracks from "../components/top-tracks";

export default async function Music() {
    return (
        <main className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6">
            <TopTracks />
        </main>
    );
}
