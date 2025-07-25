"use client";
const matches = [
  {
    name: "Emma Chen",
    category: "Roommate",
    lastMessage: "Hey! Are you still looking for a roommate?",
    time: "2h ago",
  },
  {
    name: "Alex Rodriguez",
    category: "Teammate",
    lastMessage: "Let's sync up for the hackathon!",
    time: "4h ago",
  },
];

export default function Connections() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6faf7] to-[#eaf3ec] p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-[#254d32] mb-1 text-center">Your Connections</h2>
        <div className="flex flex-col gap-4">
          {matches.map((match, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow transition">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-[#254d32]">
                {match.name[0]}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#254d32]">{match.name}</div>
                <div className="text-xs text-gray-500">{match.category}</div>
                <div className="text-sm text-gray-700 mt-1">{match.lastMessage}</div>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap">{match.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 