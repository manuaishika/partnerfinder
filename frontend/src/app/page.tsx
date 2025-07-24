import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#dbead7] to-[#254d32] font-sans">
      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#254d32]" style={{ fontFamily: 'inherit' }}>
          One partner. Infinite contexts.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[#254d32] mb-8 max-w-2xl font-light">
          Whether you're looking for a roommate, a hackathon teammate, a study buddy, or someone to attend a pottery class with — this is your all-in-one place to find a partner who gets it.
        </p>
        <Link href="/login">
          <button className="mt-4 px-8 py-3 rounded-full bg-[#254d32] text-white text-lg font-semibold shadow-md hover:bg-[#37624e] transition-all">
            Connect
          </button>
        </Link>
      </main>
      <footer className="w-full py-6 flex justify-center text-[#254d32] opacity-70 text-sm">
        Not your typical networking app. Just find your +1 — for whatever.
      </footer>
    </div>
  );
}
