import type { Metadata } from "next";
import { Inter, Nunito, Poppins, Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Added weight to resolve error
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Added weight to resolve error
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Added weight to resolve error
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Partner+ - Find Your Perfect Match",
  description: "Connect with roommates, teammates, study partners, and event companions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      allowedRedirectOrigins={['localhost:3000']}
    >
      <html lang="en">
        <body
          className={`
            ${inter.variable}
            ${nunito.variable}
            ${poppins.variable}
            ${geistSans.variable}
            ${geistMono.variable}
            antialiased
          `}
          style={{ fontFamily: 'var(--font-inter), Arial, Helvetica, sans-serif' }}
          suppressHydrationWarning={true}
        >
          <Navigation />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
