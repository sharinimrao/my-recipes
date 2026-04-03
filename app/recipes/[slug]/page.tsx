import { recipes } from "@/app/lib/recipes";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-black">
      {/* HERO */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/70 text-sm uppercase tracking-widest mb-3">{recipe.tags.join(" · ")}</p>
          <h1 className="text-5xl italic text-white" style={{ fontFamily: "'Lora', serif" }}>
            {recipe.title}
          </h1>
          <p className="text-white/70 text-sm mt-3">⏱ {recipe.cookTime}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-2xl mx-auto px-6 py-16 w-full space-y-12">
        {/* DESCRIPTION */}
        <p className="text-zinc-600 text-xl leading-relaxed italic" style={{ fontFamily: "'Lora', serif" }}>
          {recipe.description}
        </p>

        {/* INGREDIENTS */}
        <div>
          <h2 className="text-3xl italic text-[#3b6e3b] mb-6" style={{ fontFamily: "'Lora', serif" }}>
            Ingredients
          </h2>
          <ul className="space-y-3">
            {recipe.ingredients.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-600 text-lg">
                <span className="text-[#3b6e3b] mt-1">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* INSTRUCTIONS */}
        <div>
          <h2 className="text-3xl italic text-[#3b6e3b] mb-6" style={{ fontFamily: "'Lora', serif" }}>
            Instructions
          </h2>
          <ol className="space-y-6">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="flex items-start gap-4 text-zinc-600 text-lg">
                <span className="text-2xl italic text-[#3b6e3b] font-light" style={{ fontFamily: "'Lora', serif" }}>
                  {i + 1}.
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* BACK LINK */}
        <div className="pt-8 border-t border-zinc-100">
          <Link
            href="/recipes"
            className="text-sm uppercase tracking-widest border-b border-[#3b6e3b] text-[#3b6e3b] pb-1 hover:opacity-70 transition-opacity"
          >
            ← Back to Recipes
          </Link>
        </div>
      </section>
    </div>
  );
}
