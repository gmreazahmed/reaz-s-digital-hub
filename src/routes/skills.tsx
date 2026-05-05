import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Github, Star, GitFork, GitCommit } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Open Source — GM Reaz Ahmed" },
      { name: "description", content: "Skills, expertise and open source contributions by GM Reaz Ahmed." },
      { property: "og:title", content: "Skills & Open Source — GM Reaz Ahmed" },
      { property: "og:description", content: "Frontend, SEO, marketing tooling and contributions." },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    title: "Frontend Development",
    items: [
      { n: "React / Next.js", v: 95 },
      { n: "TypeScript", v: 90 },
      { n: "Tailwind CSS", v: 95 },
      { n: "TanStack / Vite", v: 85 },
    ],
  },
  {
    title: "SEO & Digital Marketing",
    items: [
      { n: "Technical SEO", v: 92 },
      { n: "On-Page & Content SEO", v: 90 },
      { n: "Google Ads / Meta Ads", v: 85 },
      { n: "Email & Funnels", v: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { n: "Git / GitHub", v: 95 },
      { n: "Firebase / Supabase", v: 88 },
      { n: "GA4 / GTM / Search Console", v: 92 },
      { n: "Figma", v: 80 },
    ],
  },
];

const repos = [
  { name: "neon-ui-kit", desc: "Dark, neon-accented React + Tailwind component library.", stars: 1240, forks: 88 },
  { name: "inkstack", desc: "Markdown blog engine with built-in SEO scoring.", stars: 612, forks: 41 },
  { name: "rankforge-cli", desc: "Lightweight CLI for technical SEO audits.", stars: 384, forks: 22 },
];

function SkillsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-neon text-sm font-mono mb-2">// skills</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-10">Skills & Expertise</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-5">{g.title}</h3>
              <div className="space-y-4">
                {g.items.map((i) => (
                  <div key={i.n}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span>{i.n}</span>
                      <span className="font-mono text-neon text-xs">{i.v}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon to-emerald-300" style={{ width: `${i.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 border-t border-border">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-neon text-sm font-mono mb-2">// open source</p>
            <h2 className="text-3xl font-bold">GitHub Contributions</h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-border hover:border-neon hover:text-neon"
          >
            <Github size={16} /> @gmreaz
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: GitCommit, label: "Commits this year", value: "1,284" },
            { icon: Star, label: "Total stars", value: "2,236" },
            { icon: GitFork, label: "Public repos", value: "42" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-neon/10 text-neon flex items-center justify-center">
                <s.icon size={18} />
              </div>
              <div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {repos.map((r) => (
            <a
              key={r.name}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-card p-5 hover:border-neon/60 transition-colors block"
            >
              <div className="flex items-center gap-2 font-mono text-sm">
                <Github size={14} className="text-neon" />
                <span className="font-semibold">{r.name}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Star size={12} /> {r.stars}</span>
                <span className="inline-flex items-center gap-1"><GitFork size={12} /> {r.forks}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
