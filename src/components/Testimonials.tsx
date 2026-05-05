const testimonials = [
  {
    quote:
      "Reaz rebuilt our marketing site and our organic traffic doubled in 90 days. He genuinely cares about the outcome.",
    name: "Sarah Lin",
    role: "Head of Growth, Northwind",
  },
  {
    quote:
      "Rare combo: ships clean React code AND understands SEO and CRO at a senior level. Hire him before someone else does.",
    name: "Marcus Reed",
    role: "CTO, Bloomstack",
  },
  {
    quote:
      "Our conversion rate jumped 38% after the redesign. Communication and delivery were flawless.",
    name: "Aisha Khan",
    role: "Founder, Lumen Studio",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
      <div className="text-center mb-12">
        <p className="text-neon text-sm font-mono mb-2">// kind words</p>
        <h2 className="text-3xl md:text-4xl font-bold">Trusted by founders & teams</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-xl border border-border bg-card p-6">
            <blockquote className="text-sm text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon to-emerald-300 text-neon-foreground flex items-center justify-center text-xs font-semibold">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
