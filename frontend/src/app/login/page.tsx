import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6faf7] to-[#eaf3ec]">
      <div className="absolute left-8 top-8">
        <Link href="/">
          <span className="text-[#254d32] text-lg hover:underline">&larr; Back to home</span>
        </Link>
      </div>
      <div className="w-full max-w-md mx-auto">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white rounded-2xl shadow-lg border-0",
              headerTitle: "text-2xl font-bold text-[#254d32]",
              headerSubtitle: "text-[#254d32]",
              formButtonPrimary: "bg-[#254d32] hover:bg-[#37624e] text-white font-semibold",
              formFieldInput: "border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#254d32] focus:border-[#254d32]",
              formFieldLabel: "text-[#254d32] font-semibold",
              footerActionLink: "text-[#254d32] hover:text-[#37624e]",
              dividerLine: "bg-gray-200",
              dividerText: "text-[#254d32]",
              socialButtonsBlockButton: "border border-gray-200 hover:bg-gray-50",
              socialButtonsBlockButtonText: "text-[#254d32]",
            }
          }}
          signUpUrl="/signup"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
} 