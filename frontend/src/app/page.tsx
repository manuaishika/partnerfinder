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

const howItWorks = [
  {
    step: "1",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Choose Category",
    desc: "Pick what you're looking for - roommate, teammate, study buddy, or event partner",
  },
  {
    step: "2",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Fill Profile",
    desc: "Tell others about yourself, your interests, and what you're looking for",
  },
  {
    step: "3",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Swipe & Connect",
    desc: "Browse profiles, swipe right on matches, and start meaningful connections",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    college: "Stanford University",
    category: "Roommate",
    avatar: "SC",
    quote: "Found my perfect roommate in just 2 days! We've been living together for 6 months now.",
  },
  {
    name: "Marcus Rodriguez",
    college: "MIT",
    category: "Teammate",
    avatar: "MR",
    quote: "Met my hackathon partner here. We won first place and now we're building a startup together!",
  },
  {
    name: "Emma Thompson",
    college: "UC Berkeley",
    category: "Study Buddy",
    avatar: "ET",
    quote: "Finally found someone who studies as hard as I do. We're both getting straight A's now!",
  },
];

const stats = [
  { number: "5,000+", label: "Connections Made" },
  { number: "100+", label: "Colleges" },
  { number: "10,000+", label: "Active Users" },
  { number: "95%", label: "Success Rate" },
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

        {/* Enhanced Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mb-16">
          {features.map((f, i) => (
            <Link href="/login" key={i}>
              <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer group">
                <div className="text-[#254d32] group-hover:text-[#37624e] transition-colors duration-300">{f.icon}</div>
                <div className="text-lg font-semibold text-[#254d32] mb-1 group-hover:text-[#37624e] transition-colors duration-300">{f.title}</div>
                <div className="text-[#254d32] text-sm text-center">{f.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* How it Works Section */}
        <div className="w-full max-w-6xl mb-16">
          <h2 className="text-3xl font-bold text-[#254d32] mb-8">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#254d32] text-white flex items-center justify-center text-xl font-bold mr-4">
                    {step.step}
                  </div>
                  <div className="text-[#254d32]">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-[#254d32] mb-3">{step.title}</h3>
                <p className="text-[#254d32] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-4xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#254d32] mb-2">{stat.number}</div>
                <div className="text-[#254d32] text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full max-w-6xl mb-16">
          <h2 className="text-3xl font-bold text-[#254d32] mb-8">See people you might match with</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#254d32] text-white flex items-center justify-center text-lg font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#254d32]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.college}</div>
                    <div className="text-xs text-[#37624e] font-medium">{testimonial.category}</div>
                  </div>
                </div>
                <p className="text-[#254d32] text-sm leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="w-full py-8 border-t border-[#254d32]/10 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#254d32] mb-4 md:mb-0">
              <div className="text-xl font-bold tracking-tight mb-2">Partner<span className="text-[#37624e]">+</span></div>
              <div className="text-sm opacity-70">Made for college students, by college students.</div>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="#" className="text-[#254d32] hover:text-[#37624e] transition-colors">About</Link>
              <Link href="#" className="text-[#254d32] hover:text-[#37624e] transition-colors">Privacy</Link>
              <Link href="#" className="text-[#254d32] hover:text-[#37624e] transition-colors">Contact</Link>
            </div>
          </div>
          <div className="text-center text-[#254d32] opacity-70 text-sm mt-6 pt-6 border-t border-[#254d32]/10">
            © 2024 Partner+. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
