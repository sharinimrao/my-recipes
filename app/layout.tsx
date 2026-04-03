import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Recipe App",
  description: "A collection of my favorite recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black text-black dark:text-white">
        <nav className="flex items-center justify-between px-10 py-4 border-b border-[#c8dfc8]" style={{ backgroundColor: "#dceedd" }}>

          {/* Name on the left — cursive, bold green */}
          <Link
            href="/"
            className="hover:opacity-75 transition-opacity"
            style={{
              color: "#3b6e3b",
              fontFamily: "'Dancing Script', cursive",
              fontSize: "36px",
              fontWeight: "700",
            }}
          >
            Sharini Rao
          </Link>

          {/* Links on the right in ivy green with leaf icons */}
          <div className="flex gap-10">
            <Link
              href="/about"
              className="text-base uppercase tracking-widest font-medium transition-colors hover:text-[#8aab8a] flex items-center gap-1"
              style={{ color: "#2d5a2d" }}
            >
              🍋 About
            </Link>
            <Link
              href="/recipes"
              className="text-base uppercase tracking-widest font-medium transition-colors hover:text-[#8aab8a] flex items-center gap-1"
              style={{ color: "#2d5a2d" }}
            >
              🍋 Recipes
            </Link>
            <Link
              href="/socials"
              className="text-base uppercase tracking-widest font-medium transition-colors hover:text-[#8aab8a] flex items-center gap-1"
              style={{ color: "#2d5a2d" }}
            >
            
            </Link>
          </div>
        </nav>

        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}