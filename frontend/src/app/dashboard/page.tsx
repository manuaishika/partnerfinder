import React from "react";

const posts = [
  {
    id: 1,
    name: "Emma Chen",
    avatar: "",
    meta: "Computer Science • Junior • 2 hours ago",
    title: "Looking for a clean, organized roommate for next semester!",
    desc: "I'm a CS major who loves plants, cooking, and having friends over occasionally. Looking for someone who shares similar vibes and won't mind my occasional late coding sessions.",
    tags: ["clean", "plants", "cooking", "social"],
    category: "roommate",
    likes: 12,
    comments: 5,
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    avatar: "",
    meta: "Business • Sophomore • 4 hours ago",
    title: "Looking for a teammate for the upcoming hackathon!",
    desc: "Excited to build something cool. Prefer someone with design or backend experience.",
    tags: ["hackathon", "design", "backend"],
    category: "teammate",
    likes: 8,
    comments: 2,
  },
];

const categories = [
  "All Categories",
  "Roommate",
  "Teammate",
  "Study Partner",
  "Event Buddy",
  "Miscellaneous",
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f6faf7]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-[#254d32] tracking-tight">Partner<span className="text-[#37624e]">+</span></div>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-[#254d32]">N</div>
      </header>
      {/* Filters */}
      <div className="flex gap-4 px-8 pb-8">
        <select className="border rounded-lg px-4 py-2 bg-white text-[#254d32]">
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <select className="border rounded-lg px-4 py-2 bg-white text-[#254d32]">
          <option>Latest</option>
          <option>Most Liked</option>
        </select>
      </div>
      {/* Posts Feed */}
      <div className="flex flex-col items-center gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow p-8 w-full max-w-3xl">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-[#254d32]">
                {post.avatar || post.name[0]}
              </div>
              <div>
                <div className="font-semibold text-[#254d32]">{post.name}</div>
                <div className="text-sm text-gray-500">{post.meta}</div>
              </div>
              <div className="ml-auto">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 capitalize`}>
                  {post.category}
                </span>
              </div>
            </div>
            <div className="mt-2 mb-2 text-xl font-bold text-[#254d32]">{post.title}</div>
            <div className="mb-4 text-[#254d32]">{post.desc}</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-[#e3f2e8] text-[#254d32] px-3 py-1 rounded-full text-xs font-medium">#{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-6 text-[#254d32] text-sm">
              <span className="flex items-center gap-1"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>{post.likes}</span>
              <span className="flex items-center gap-1"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m10-4V6a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>{post.comments}</span>
              <button className="ml-auto border border-[#254d32] text-[#254d32] rounded-lg px-4 py-2 font-medium hover:bg-[#254d32] hover:text-white transition">Connect</button>
            </div>
          </div>
        ))}
      </div>
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#254d32] text-white text-3xl flex items-center justify-center shadow-lg hover:bg-[#37624e] transition">
        +
      </button>
    </div>
  );
} 