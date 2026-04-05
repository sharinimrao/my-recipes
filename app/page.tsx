import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-black">

      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center py-40 border-b border-zinc-100"
        style={{
          backgroundImage: "url('/homepage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <p className="text-5xl italic text-white drop-shadow-md" style={{ fontFamily: "'Dancing Script', cursive" }}>
            From my kitchen to your table
          </p>
          <p className="text-white/80 text-lg uppercase tracking-widest">
            recipes · stories · flavor
          </p>
        </div>
      </section>

      {/* PHOTO + BLURB */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6 items-center">
        <div className="aspect-[4/5] relative overflow-hidden rounded-sm shadow-sm">
          <img src="/pizza.JPG" alt="cooking" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl italic" style={{ fontFamily: "'Lora', serif" }}>The Art of Saucing</h2>
          <p className="text-zinc-600 leading-relaxed text-lg md:text-xl">
            Food has always been more than fuel to me. It's a form of love — to yourself, to the people
            around your table, and to the little moments that don't feel significant until you look back and
            realize they were everything. It's a medium to share culture, tradition, and joy. A way to
            carry your heritage forward without saying a word — through the spices your grandmother kept
            in unlabeled jars, the recipes passed down on blotchy scraps of paper, and the dishes that taste like
            home even when you're 3000 miles away. Every dish has a story behind it. And every time we cook for someone, we're offering a piece of that story.
            So here's me offering mine :)
          </p>
        </div>
      </section>

      {/* LATEST RECIPES */}
      <section className="bg-zinc-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-2xl italic" style={{ fontFamily: "'Lora', serif" }}>Latest Recipes</h3>
            <Link href="/recipes" className="text-sm border-b border-black pb-1">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Samosa Pinwheels */}
            <Link href="/recipes/samosa-pinwheels" className="group block">
              <div className="aspect-square bg-white border border-zinc-200 rounded-sm overflow-hidden flex items-end relative">
                <img src="/pinwheels.jpg" alt="Samosa Pinwheels" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 w-full bg-white/90 px-4 py-3">
                  <p className="font-medium text-sm uppercase tracking-wide">Samosa Pinwheels</p>
                  <p className="text-xs text-zinc-500 mt-1">Snacks · Indian-inspired</p>
                </div>
              </div>
            </Link>

            {/* Cinnamon Rolls */}
            <Link href="/recipes/cinnamon-rolls" className="group block">
              <div className="aspect-square bg-white border border-zinc-200 rounded-sm overflow-hidden flex items-end relative">
                <img src="/cinnamonroll.jpg" alt="Cinnamon Rolls" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 w-full bg-white/90 px-4 py-3">
                  <p className="font-medium text-sm uppercase tracking-wide">Cinnamon Rolls</p>
                  <p className="text-xs text-zinc-500 mt-1">Baking · Sweet</p>
                </div>
              </div>
            </Link>

            {/* Chickpea Salad */}
            <Link href="/recipes/chickpea-salad" className="group block">
              <div className="aspect-square bg-white border border-zinc-200 rounded-sm overflow-hidden flex items-end relative">
                <img src="/ChickpeaSalad.jpg" alt="Chickpea Salad" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 w-full bg-white/90 px-4 py-3">
                  <p className="font-medium text-sm uppercase tracking-wide">Chickpea Salad</p>
                  <p className="text-xs text-zinc-500 mt-1">Salad · Fresh</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-3xl italic mb-4" style={{ fontFamily: "'Lora', serif" }}>Follow the Journey</h3>
        <p className="text-zinc-500 mb-12 text-sm uppercase tracking-widest">find me on the internet</p>
        <div className="flex justify-center gap-10 flex-wrap">

          {/* Instagram */}
          <a href="https://instagram.com/rinisrecs" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group">
            <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center text-3xl group-hover:bg-zinc-200 transition-colors">
              📸
            </div>
            <div>
              <p className="font-medium text-sm">Instagram</p>
              <p className="text-zinc-400 text-xs">@rinisrecs</p>
            </div>
          </a>

          {/* Beli */}
<a href="https://beliapp.com/users/sharinir" target="_blank" rel="noopener noreferrer"
className="flex flex-col items-center gap-3 group">
  <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center text-3xl group-hover:bg-zinc-200 transition-colors">
    🍽️
  </div>
  <div>
    <p className="font-medium text-sm">Beli</p>
    <p className="text-zinc-400 text-xs">@sharinir</p>
  </div>
</a>

        </div>
      </section>

    </div>
  );
}