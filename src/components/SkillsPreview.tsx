const skills = [
  { name: "React / Next.js", value: 95 },
  { name: "TypeScript", value: 90 },
  { name: "Tailwind CSS", value: 95 },
  { name: "SEO Optimization", value: 92 },
  { name: "Google Analytics & Ads", value: 88 },
  { name: "Node.js / APIs", value: 82 },
];

export function SkillsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-neon text-sm font-mono mb-2">// what I do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering meets Growth</h2>
          <p className="text-muted-foreground">
            I sit at the intersection of clean code and conversion. I build production-grade web
            apps and pair them with data-driven marketing systems — so you ship product
            <span className="text-neon"> and </span> revenue.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Frontend architectures that scale (React, Next.js, TS)",
              "SEO foundations that rank — technical, on-page & content",
              "Conversion-focused UX, A/B testing & funnel design",
              "Marketing automation, analytics & attribution",
            ].map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon shrink-0" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium">{s.name}</span>
                <span className="font-mono text-neon">{s.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon to-emerald-300"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
