"use client";
import React, { useState } from "react";

const colleges = [
  "College of Engineering",
  "College of Arts & Sciences",
  "College of Business",
  "College of Design",
  "Other",
];

export default function Settings() {
  const [interests, setInterests] = useState<string[]>(["coding", "music"]);
  const [interestInput, setInterestInput] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    reminders: true,
  });

  const addInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (interestInput.trim() && !interests.includes(interestInput.trim())) {
      setInterests([...interests, interestInput.trim()]);
      setInterestInput("");
    }
  };

  const toggleNotification = (key: string) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6faf7] to-[#eaf3ec] p-4">
      <form className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-[#254d32] mb-1 text-center">Settings</h2>
        {/* College Info */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-[#254d32]">College</label>
          <select className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]">
            {colleges.map((college) => (
              <option key={college} value={college}>{college}</option>
            ))}
          </select>
        </div>
        {/* Interests */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-[#254d32]">Interests & Hobbies</label>
          <form className="flex gap-2" onSubmit={addInterest}>
            <input
              type="text"
              placeholder="Add an interest..."
              value={interestInput}
              onChange={e => setInterestInput(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]"
            />
            <button type="submit" className="px-4 py-2 bg-[#254d32] text-white rounded-lg font-semibold hover:bg-[#37624e] transition">Add</button>
          </form>
          <div className="flex flex-wrap gap-2 mt-2">
            {interests.map((interest, idx) => (
              <span key={idx} className="bg-[#e3f2e8] text-[#254d32] px-3 py-1 rounded-full text-xs font-medium">{interest}</span>
            ))}
          </div>
        </div>
        {/* Notification Preferences */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-[#254d32]">Notification Preferences</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={notifications.email} onChange={() => toggleNotification('email')} />
              Email Notifications
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={notifications.sms} onChange={() => toggleNotification('sms')} />
              SMS Notifications
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={notifications.reminders} onChange={() => toggleNotification('reminders')} />
              Reminders
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-[#254d32] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#37624e] transition mt-2">
          Save Settings
        </button>
      </form>
    </div>
  );
} 