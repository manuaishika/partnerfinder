'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/create', label: 'Create Post' },
    { href: '/forums', label: 'Forums' },
    { href: '/connections', label: 'Connections' },
    { href: '/notifications', label: 'Notifications' },
    { href: '/settings', label: 'Settings' },
  ];

  const publicNavItems = [
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
  ];

  return (
    <nav className="bg-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-12 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-[#4e9a6e] to-[#254d32] rounded-xl w-12 h-12 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.91z" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold text-[#254d32] tracking-tight">Partner<span className="text-[#7bbf8e]">+</span></span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-10 text-lg font-medium text-[#254d32]">
            <SignedIn>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-[#37624e] transition-colors ${
                    isActive(item.href) ? 'text-[#37624e] font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </SignedIn>
            <SignedOut>
              {publicNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-[#37624e] transition-colors ${
                    isActive(item.href) ? 'text-[#37624e] font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </SignedOut>
          </nav>

          {/* Auth Section */}
          <div className="flex gap-3">
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonBox: "w-10 h-10",
                    userButtonTrigger: "rounded-lg",
                  }
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-5 py-2 rounded-lg font-semibold text-[#254d32] border border-[#254d32] bg-white bg-opacity-80 hover:bg-[#eaf3ec] transition">Login</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-br from-[#4e9a6e] to-[#254d32] shadow hover:from-[#37624e] hover:to-[#254d32] transition">Sign Up</button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>


    </nav>
  );
} 