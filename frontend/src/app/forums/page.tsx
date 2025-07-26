import Link from "next/link";

const forums = [
  {
    id: 1,
    title: "r/roommates",
    description: "Find your perfect roommate match. Share your preferences, budget, and lifestyle. No more random assignments!",
    members: 1247,
    posts: 89,
    lastActivity: "2 hours ago",
    category: "Roommates"
  },
  {
    id: 2,
    title: "r/studygroup",
    description: "Form study groups for any class. Share notes, practice together, and ace those exams. All majors welcome!",
    members: 892,
    posts: 156,
    lastActivity: "1 hour ago",
    category: "Study Buddies"
  },
  {
    id: 3,
    title: "r/hackathon",
    description: "Build amazing projects together. Find teammates for hackathons, hack nights, and side projects. Developers, designers, and idea people needed!",
    members: 567,
    posts: 234,
    lastActivity: "30 minutes ago",
    category: "Teammates"
  },
  {
    id: 4,
    title: "r/events",
    description: "Never go to events alone again. Find plus-ones for concerts, parties, workshops, and campus activities.",
    members: 1103,
    posts: 445,
    lastActivity: "5 hours ago",
    category: "Event Buddies"
  },
  {
    id: 5,
    title: "r/gymbuddies",
    description: "Find workout partners to stay motivated. Share routines, spot each other, and crush your fitness goals together.",
    members: 456,
    posts: 78,
    lastActivity: "1 day ago",
    category: "Activity Partners"
  },
  {
    id: 6,
    title: "r/languageexchange",
    description: "Practice languages with native speakers. Find conversation partners for any language you're learning or teaching.",
    members: 734,
    posts: 123,
    lastActivity: "3 hours ago",
    category: "Study Buddies"
  },
  {
    id: 7,
    title: "r/projectpartners",
    description: "Collaborate on side projects, research papers, and creative endeavors. Find people who share your interests and skills.",
    members: 389,
    posts: 67,
    lastActivity: "4 hours ago",
    category: "Teammates"
  },
  {
    id: 8,
    title: "r/campuslife",
    description: "General campus community. Share experiences, ask questions, and connect with fellow students about university life.",
    members: 2156,
    posts: 892,
    lastActivity: "10 minutes ago",
    category: "General"
  }
];

export default function ForumsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6faf7] via-[#eaf3ec] to-[#f6faf7] p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#254d32]">Browse Forums</h1>
          <Link href="/forums/create">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-br from-[#4e9a6e] to-[#254d32] text-white font-semibold shadow hover:from-[#37624e] hover:to-[#254d32] transition">
              Create Forum
            </button>
          </Link>
        </div>
        
        <div className="grid gap-4">
          {forums.map((forum) => (
            <div key={forum.id} className="bg-white bg-opacity-90 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-[#eaf3ec]">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#254d32]">{forum.title}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#eaf3ec] text-[#254d32]">
                      {forum.category}
                    </span>
                  </div>
                  <p className="text-[#254d32] text-base mb-3 opacity-80">{forum.description}</p>
                  <div className="flex items-center gap-6 text-sm text-[#254d32] opacity-70">
                    <span>{forum.members} members</span>
                    <span>{forum.posts} posts</span>
                    <span>Last activity: {forum.lastActivity}</span>
                  </div>
                </div>
                <div className="text-[#254d32] opacity-60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 