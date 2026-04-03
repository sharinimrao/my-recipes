"use client";

import { useState } from "react";
import Link from "next/link";
import { recipes } from "@/app/lib/recipes";

const categories = ["All", "Breakfast", "Meals", "Snacks", "Baking", "Salads"];

export default function Recipes() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? recipes : recipes.filter((r) => r.category === active);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-black">
      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-zinc-100">
        <h1 className="text-6xl italic text-[#3b6e3b]" style={{ fontFamily: "'Lora', serif" }}>
          Recipes
        </h1>
        <p className="text-zinc-400 mt-4 text-base uppercase tracking-widest">
          everything i've been cooking
        </p>
      </section>

      {/* FILTERS */}
      <section className="py-8 px-6 flex justify-center gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm uppercase tracking-widest px-5 py-2 rounded-full border transition-colors ${
              active === cat
                ? "bg-[#3b6e3b] text-white border-[#3b6e3b]"
                : "text-zinc-500 border-zinc-300 hover:border-[#3b6e3b] hover:text-[#3b6e3b]"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* RECIPE GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((recipe) => (
            <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="group block">
              <div className="border border-zinc-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square relative overflow-hidden bg-zinc-100">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-widest text-zinc-400">{recipe.tags.join(" · ")}</span>
                    <span className="text-xs text-zinc-400">{recipe.cookTime}</span>
                  </div>
                  <h3 className="text-xl italic" style={{ fontFamily: "'Lora', serif" }}>{recipe.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{recipe.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}