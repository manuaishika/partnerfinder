import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#" },
  { name: "Features", href: "#" },
  { name: "Contact", href: "#" },
];

const features = [
  {
    icon: (
      <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01M8 12h.01M16 12h.01" />
        </svg>
      </div>
    ),
    title: "Roommates",
    desc: "Find your perfect living companion for the semester",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    ),
    title: "Teammates",
    desc: "Build amazing projects with like-minded peers",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
    ),
    title: "Study Buddies",
    desc: "Ace those tough courses together",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-16 h-16 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    ),
    title: "Event Buddies",
    desc: "Never attend events alone again",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#f6faf7] via-[#eaf3ec] to-[#f6faf7] overflow-x-hidden">
      {/* Floating glassy shapes */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-white bg-opacity-40 rounded-3xl blur-2xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-white bg-opacity-30 rounded-3xl blur-2xl z-0" />
      <div className="absolute top-[40%] left-[-120px] w-[200px] h-[200px] bg-[#eaf3ec] bg-opacity-60 rounded-2xl blur-2xl z-0" />
      <div className="absolute bottom-[20%] right-[-120px] w-[180px] h-[180px] bg-[#eaf3ec] bg-opacity-60 rounded-2xl blur-2xl z-0" />

      {/* Header */}
      <header className="relative z-10 w-full flex items-center justify-between px-12 py-6 bg-transparent">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-12 h-12 flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.91z" />
            </svg>
          </div>
          <span className="text-2xl font-extrabold text-[#254d32] tracking-tight">Partner<span className="text-[#7bbf8e]">+</span></span>
        </div>
        <nav className="hidden md:flex gap-10 text-lg font-medium text-[#254d32]">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#37624e] transition-colors">{link.name}</Link>
          ))}
        </nav>
        <div className="flex gap-3">
          <Link href="/login">
            <button className="px-5 py-2 rounded-lg font-semibold text-[#254d32] border border-[#254d32] bg-white bg-opacity-80 hover:bg-[#eaf3ec] transition">Login</button>
          </Link>
          <Link href="/signup">
            <button className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-br from-[#4e9a6e] to-[#254d32] shadow hover:from-[#37624e] hover:to-[#254d32] transition">Sign Up</button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center flex-1 px-4 text-center justify-center pt-8 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#eaf3ec] text-[#254d32] font-medium mb-6 shadow-sm text-base">
          <svg className="w-5 h-5 text-[#4e9a6e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.16 3.73 1.64-7.03L2 9.24l7.19-.61L12 2.5l2.81 6.13 7.19.61-5.48 5.21 1.64 7.03z" /></svg>
          Made by students, for students
        </div>
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 text-[#254d32] leading-tight">
          Find your <span className="text-[#4e9a6e]">perfect match</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#254d32] mb-4 opacity-80">for any context</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-[#254d32] mb-8 max-w-2xl font-light mx-auto opacity-80">
          Connect with roommates, teammates, study partners, and event companions.<br />
          <span className="font-semibold text-[#254d32]">Simple. Authentic. Effective.</span>
        </p>
        {/* Get Started Button and Stats */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 justify-center">
          <Link href="/signup">
            <button className="px-10 py-4 rounded-2xl bg-gradient-to-br from-[#4e9a6e] to-[#254d32] text-white text-xl font-bold shadow-lg hover:from-[#37624e] hover:to-[#254d32] transition-all flex items-center gap-2">
              Get Started <span className="ml-1">→</span>
            </button>
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-4 text-[#254d32] text-base font-medium">
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 rounded-full bg-[#4e9a6e]" />
              <span className="inline-block w-5 h-5 rounded-full bg-[#7bbf8e]" />
              <span className="inline-block w-5 h-5 rounded-full bg-[#eaf3ec] border border-[#4e9a6e]" />
              1,000+ students
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m4 0h-1v-4h-1" /></svg>
              Instant matching
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /></svg>
              100% free
            </div>
          </div>
        </div>
        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mb-16">
          {features.map((f, i) => (
            <Link href="/login" key={i}>
              <div className="bg-white bg-opacity-80 rounded-3xl p-8 flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer group w-64 h-64 border border-[#eaf3ec]">
                {f.icon}
                <div className="text-xl font-extrabold text-[#254d32] mb-2 text-center group-hover:text-[#37624e] transition-colors duration-300">{f.title}</div>
                <div className="text-gray-600 text-lg text-center font-normal">{f.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
