import Link from "next/link";

const features = [
  {
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m-4-5v9" /></svg>
    ),
    title: "Roommates",
    desc: "Find your perfect living companion",
  },
  {
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
    title: "Teammates",
    desc: "Build projects together",
  },
  {
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
    title: "Study Buddies",
    desc: "Ace those exams together",
  },
  {
    icon: (
      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 7 16.5 7 12.5C7 9.46243 9.46243 7 12.5 7C15.5376 7 18 9.46243 18 12.5C18 16.5 12 21 12 21Z" /></svg>
    ),
    title: "Plus-Ones",
    desc: "Never go to events alone",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6faf7] font-sans">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold text-[#254d32] tracking-tight">Partner<span className="text-[#37624e]">+</span></div>
        <Link href="/login">
          <button className="border border-[#254d32] text-[#254d32] rounded-lg px-4 py-2 font-medium hover:bg-[#254d32] hover:text-white transition">Login</button>
        </Link>
      </header>
      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 px-4 text-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg px-8 py-12 w-full max-w-3xl mb-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-[#254d32] leading-tight">
            Find your people
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#254d32] mb-8 max-w-2xl font-light mx-auto">
            Whether you're looking for a roommate, a hackathon teammate, a study buddy, or someone to attend a pottery class with — this is your all-in-one place to find a partner who gets it.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 justify-center">
            <Link href="/login">
              <button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[#254d32] text-white text-lg font-semibold shadow-md hover:bg-[#37624e] transition-all">
                Connect <span className="ml-1">→</span>
              </button>
            </Link>
          </div>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mb-12">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <div className="text-[#254d32]">{f.icon}</div>
              <div className="text-lg font-semibold text-[#254d32] mb-1">{f.title}</div>
              <div className="text-[#254d32] text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-6 flex justify-center text-[#254d32] opacity-70 text-sm border-t border-[#254d32]/10 mt-auto">
        © 2024 Partner+. Made for college students, by college students.
      </footer>
    </div>
  );
}
