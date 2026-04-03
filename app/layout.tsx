"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-black">
        <nav className="px-6 py-4 border-b border-[#c8dfc8]" style={{ backgroundColor: "#dceedd" }}>
          <div className="flex items-center justify-between">
            {/* Name */}
            <Link
              href="/"
              className="hover:opacity-75 transition-opacity"
              style={{
                color: "#3b6e3b",
                fontFamily: "'Dancing Script', cursive",
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              Sharini Rao
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex gap-10">
              <Link href="/about" className="text-base uppercase tracking-widest font-medium hover:text-[#8aab8a] flex items-center gap-1" style={{ color: "#2d5a2d" }}>
                🍋 About
              </Link>
              <Link href="/recipes" className="text-base uppercase tracking-widest font-medium hover:text-[#8aab8a] flex items-center gap-1" style={{ color: "#2d5a2d" }}>
                🍋 Recipes
              </Link>
            </div>

            {/* Hamburger button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-[#2d5a2d] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#2d5a2d] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#2d5a2d] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col gap-4 pt-4 pb-2">
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-base uppercase tracking-widest font-medium hover:text-[#8aab8a]" style={{ color: "#2d5a2d" }}>
                🍋 About
              </Link>
              <Link href="/recipes" onClick={() => setMenuOpen(false)} className="text-base uppercase tracking-widest font-medium hover:text-[#8aab8a]" style={{ color: "#2d5a2d" }}>
                🍋 Recipes
              </Link>
            </div>
          )}
        </nav>

        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}