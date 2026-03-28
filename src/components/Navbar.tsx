"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-agri-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline opacity-80">Welcome to AgriLink — Direct Farm-to-Business Sourcing</span>
            {/* Social icons */}
            <div className="flex items-center gap-2 sm:ml-4">
              <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="opacity-70 hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="opacity-70 hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-agri-800/50 border border-white/20 rounded px-3 py-1 text-xs text-white placeholder-white/50 w-40 focus:outline-none focus:border-white/50"
                aria-label="Search"
              />
              <svg className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-agri-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/25">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-wide">AGRI<span className="font-light">LINK</span></span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/marketplace" className="px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-white/10 rounded transition-colors">
                Marketplace
              </Link>
              <Link href="/about" className="px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-white/10 rounded transition-colors">
                About Us
              </Link>
              <Link href="/trust" className="px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-white/10 rounded transition-colors">
                Trust &amp; Safety
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/dashboard/supplier"
                className="px-4 py-2 text-sm font-medium border border-white/30 rounded hover:bg-white/10 transition-colors"
              >
                Supplier Portal
              </Link>
              <Link
                href="/dashboard/buyer"
                className="px-4 py-2 text-sm font-medium bg-white text-agri-700 rounded hover:bg-agri-50 transition-colors"
              >
                Buyer Portal
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-agri-700 px-4 py-4 space-y-2">
            <Link href="/marketplace" className="block px-3 py-2 text-sm font-medium uppercase tracking-wider hover:bg-white/10 rounded">Marketplace</Link>
            <Link href="/about" className="block px-3 py-2 text-sm font-medium uppercase tracking-wider hover:bg-white/10 rounded">About Us</Link>
            <Link href="/trust" className="block px-3 py-2 text-sm font-medium uppercase tracking-wider hover:bg-white/10 rounded">Trust &amp; Safety</Link>
            <hr className="border-white/10" />
            <Link href="/dashboard/supplier" className="block text-center px-4 py-2 text-sm font-medium border border-white/30 rounded">Supplier Portal</Link>
            <Link href="/dashboard/buyer" className="block text-center px-4 py-2 text-sm font-medium bg-white text-agri-700 rounded">Buyer Portal</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
