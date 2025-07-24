import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6faf7] to-[#eaf3ec]">
      <div className="absolute left-8 top-8">
        <Link href="/">
          <span className="text-[#254d32] text-lg hover:underline">&larr; Back to home</span>
        </Link>
      </div>
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#254d32] mb-2">Welcome back</h2>
        <p className="text-[#254d32] mb-6">Sign in to find your perfect partner</p>
        <form className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="your.name@college.edu"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254d32]"
          />
          <button
            type="submit"
            className="w-full bg-[#254d32] text-white py-3 rounded-lg font-semibold hover:bg-[#37624e] transition"
          >
            Sign In
          </button>
        </form>
        <div className="w-full flex justify-between items-center mt-4">
          <span className="text-[#254d32] text-sm">Don't have an account?</span>
          <Link href="/signup" className="text-[#254d32] text-sm font-semibold hover:underline">Sign up</Link>
        </div>
        <div className="w-full mt-6 bg-[#f6faf7] text-[#254d32] text-xs rounded-lg p-3 text-center">
          Only users with valid college email addresses can register. This is a student-first space.
        </div>
      </div>
    </div>
  );
} 