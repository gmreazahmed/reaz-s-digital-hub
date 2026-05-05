import { Link } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-neon text-sm font-mono mb-2">// featured work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
        </div>
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-neon">
          View all →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {featured.map((p) => (
          <article
            key={p.slug}
            className="group rounded-xl border border-border bg-card p-5 hover:border-neon/60 transition-colors"
          >
            <div className={`h-32 rounded-lg bg-gradient-to-br ${p.accent} opacity-90 mb-4 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <span className="absolute bottom-2 right-3 font-mono text-xs text-background/80">{p.category}</span>
            </div>
            <h3 className="font-semibold text-lg group-hover:text-neon transition-colors">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.slice(0, 3).map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-xs">
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-neon hover:underline">
                <ExternalLink size={12} /> Live
              </a>
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                <Github size={12} /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
