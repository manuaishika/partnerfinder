"use client";
const notifications = [
  {
    type: "reply",
    message: "Alex replied to your post: 'Looking for a hackathon teammate'",
    time: "Just now",
  },
  {
    type: "match",
    message: "You matched with Emma Chen!",
    time: "1h ago",
  },
  {
    type: "reminder",
    message: "Don't forget to update your profile for better matches!",
    time: "3h ago",
  },
];

export default function Notifications() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6faf7] to-[#eaf3ec] p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-[#254d32] mb-1 text-center">Notifications</h2>
        <div className="flex flex-col gap-4">
          {notifications.map((notif, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow transition">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold text-white"
                style={{ background: notif.type === 'reply' ? '#37624e' : notif.type === 'match' ? '#254d32' : '#e3b23c' }}>
                {notif.type === 'reply' ? '💬' : notif.type === 'match' ? '🤝' : '⏰'}
              </div>
              <div className="flex-1">
                <div className="text-[#254d32]">{notif.message}</div>
                <div className="text-xs text-gray-400 mt-1">{notif.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 