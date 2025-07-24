'use client';

import React, { useState } from "react";

const years = [
  "Freshman",
  "Sophomore",
  "Junior",
  "Senior",
  "Graduate",
];

const colleges = [
  "Select your college",
  "College of Engineering",
  "College of Arts & Sciences",
  "College of Business",
  "College of Design",
  "Other",
];

export default function ProfileSetup() {
  const [interests, setInterests] = useState<string[]>([]);
  const [interestInput, setInterestInput] = useState("");

  const addInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (interestInput.trim() && !interests.includes(interestInput.trim())) {
      setInterests([...interests, interestInput.trim()]);
      setInterestInput("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6faf7] to-[#eaf3ec] p-4">
      <form className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-[#254d32] mb-1 text-center">Welcome to Partner+!</h2>
        <p className="text-[#254d32] mb-4 text-center">Let's set up your profile so others can find you</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#254d32]">First Name *</label>
            <input type="text" required placeholder="Enter your first name" className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#254d32]">Last Name *</label>
            <input type="text" required placeholder="Enter your last name" className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#254d32]">Academic Year *</label>
            <select required className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]">
              <option value="">Select your year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[#254d32]">Major *</label>
            <input type="text" required placeholder="e.g., Computer Science" className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]" />
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="font-semibold text-[#254d32]">College *</label>
            <select required className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]">
              {colleges.map((college) => (
                <option key={college} value={college === 'Select your college' ? '' : college}>{college}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[#254d32]">Bio</label>
          <textarea placeholder="Tell others about yourself..." className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32] min-h-[80px]" />
        </div>
        <div className="flex flex-col gap-1">
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
        <button type="submit" className="w-full bg-[#254d32] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#37624e] transition mt-2">
          Complete Profile & Start Connecting
        </button>
      </form>
    </div>
  );
} 