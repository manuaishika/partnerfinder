import Link from "next/link";

export default function CreateForumPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6faf7] via-[#eaf3ec] to-[#f6faf7] p-4">
      <div className="w-full max-w-2xl bg-white bg-opacity-90 rounded-2xl shadow-lg p-10 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-[#254d32] mb-4">Create Your Own Forum</h1>
        <form className="w-full flex flex-col gap-4">
          <input type="text" placeholder="Forum Title" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]" />
          <textarea placeholder="Forum Description" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32] min-h-[80px]" />
          <button type="submit" className="w-full bg-gradient-to-br from-[#4e9a6e] to-[#254d32] text-white py-3 rounded-lg font-semibold hover:from-[#37624e] hover:to-[#254d32] transition">Create Forum</button>
        </form>
        <Link href="/forums" className="mt-6 text-[#254d32] hover:underline">&larr; Back to Forums</Link>
      </div>
    </div>
  );
} 