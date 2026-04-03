import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-black">
      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-zinc-100">
        <h1 className="text-6xl italic text-[#3b6e3b]" style={{ fontFamily: "'Lora', serif" }}>
          About Me
        </h1>
        <p className="text-zinc-400 mt-4 text-base uppercase tracking-widest">the person behind the kitchen</p>
      </section>

      {/* PHOTO + BIO */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6 items-center">
        <div className="aspect-square relative overflow-hidden rounded-sm shadow-sm bg-zinc-100">
          <img
            src="/me.jpg"
            alt="Sharini"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl italic" style={{ fontFamily: "'Lora', serif" }}>Hi, I'm Sharini</h2>
          <p className="text-zinc-600 leading-relaxed text-xl">
            A college student, food lover, chronic Beli user, and the face behind this site and all its fun recipes!
            What started as a fun hobby of mine quickly turned into a passion for sharing recipes,
            restaurant finds, and everything in between. I'm excited to share all of my good eats on here!
          </p>
        </div>
      </section>

      {/* VALUES / PHILOSOPHY */}
      <section className="bg-zinc-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl italic text-[#3b6e3b]" style={{ fontFamily: "'Lora', serif" }}>
            My Food Philosophy
          </h2>
          <p className="text-zinc-600 leading-relaxed text-xl">
            Best place to eat in Berkeley is Rm 205 2610 Hillegass Ave :p
          </p>
        </div>
      </section>

      {/* FUN FACTS */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl italic text-center mb-12" style={{ fontFamily: "'Lora', serif" }}>
          A Few Things About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-5xl">🍜</p>
            <p className="font-medium text-lg">Fact One</p>
            <p className="text-zinc-500 text-base">Favorite food is a nice bowl of ramen</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl">🍍</p>
            <p className="font-medium text-lg">Fact Two</p>
            <p className="text-zinc-500 text-base">Obsessed with pineapple everything</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl">🪴</p>
            <p className="font-medium text-lg">Fact Three</p>
            <p className="text-zinc-500 text-base">I used to have 20 allergies when I was younger :/</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t border-zinc-100">
        <p className="text-zinc-500 italic text-xl mb-6" style={{ fontFamily: "'Lora', serif" }}>
          Want to see what I've been making?
        </p>
        <Link href="/recipes" className="text-base uppercase tracking-widest border-b border-[#3b6e3b] text-[#3b6e3b] pb-1 hover:opacity-70 transition-opacity">
          View My Recipes
        </Link>
      </section>
    </div>
  );
}