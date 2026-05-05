import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — GM Reaz Ahmed" },
      { name: "description", content: "Selected web development and digital marketing projects by GM Reaz Ahmed." },
      { property: "og:title", content: "Projects — GM Reaz Ahmed" },
      { property: "og:description", content: "Case studies and live projects across web apps, e-commerce and marketing." },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Web App", "Marketing", "E-commerce", "Open Source"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-neon text-sm font-mono mb-2">// projects</p>
        <h1 className="text-4xl md:text-5xl font-bold">Things I've built</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          A mix of client work, open source and side experiments — spanning product engineering
          and growth.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                active === f
                  ? "bg-neon text-neon-foreground border-neon"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <article
              key={p.slug}
              className="group rounded-xl border border-border bg-card p-5 hover:border-neon/60 transition-colors"
            >
              <div className={`h-36 rounded-lg bg-gradient-to-br ${p.accent} mb-4 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-25" />
                <span className="absolute bottom-2 right-3 font-mono text-xs text-background/80">
                  {p.category}
                </span>
              </div>
              <h3 className="font-semibold text-lg group-hover:text-neon transition-colors">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-xs">
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-neon hover:underline">
                  <ExternalLink size={12} /> Live demo
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  <Github size={12} /> Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
