"use client";
import React, { useState } from "react";

const categories = [
  "Roommate",
  "Teammate",
  "Study Partner",
  "Event Buddy",
  "Miscellaneous",
];

export default function CreatePost() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const addTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim()) && tags.length < 8) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6faf7] to-[#eaf3ec] p-4">
      <form className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-[#254d32] mb-1 text-center">What kind of partner are you looking for?</h2>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[#254d32]">Category *</label>
          <select required className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]">
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[#254d32]">Title *</label>
          <input
            type="text"
            required
            maxLength={100}
            placeholder="Give your post a catchy title..."
            className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]"
          />
          <span className="text-xs text-gray-400">0/100 characters</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[#254d32]">Description *</label>
          <textarea
            required
            maxLength={500}
            placeholder="Describe what you're looking for, your preferences, and what you can offer in return..."
            className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32] min-h-[100px]"
          />
          <span className="text-xs text-gray-400">0/500 characters</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[#254d32]">Tags (optional)</label>
          <form className="flex gap-2" onSubmit={addTag}>
            <input
              type="text"
              placeholder="Add relevant tags..."
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]"
            />
            <button type="submit" className="px-4 py-2 bg-[#254d32] text-white rounded-lg font-semibold hover:bg-[#37624e] transition">+</button>
          </form>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-[#e3f2e8] text-[#254d32] px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
          <span className="text-xs text-gray-400">Add up to 8 tags to help others find your post</span>
        </div>
        <div className="flex gap-4 mt-4">
          <button type="submit" className="flex-1 bg-[#254d32] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#37624e] transition">
            Post Partner Request
          </button>
          <button type="button" className="flex-1 bg-gray-100 text-[#254d32] py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
} 