import { Link } from "@tanstack/react-router";
import { ArrowRight, Github, Mail, Code2, Sparkles, Search, Rocket } from "lucide-react";
import portrait from "@/assets/reaz-portrait.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 bg-hero-glow" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
            Available for freelance & collaborations
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient-neon">GM Reaz Ahmed</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl">
            <span className="text-foreground font-medium">Web Developer</span> &{" "}
            <span className="text-foreground font-medium">Digital Marketer</span> — I build
            blazing-fast websites and growth systems that turn visitors into customers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neon text-neon-foreground font-medium hover:opacity-90 transition-opacity glow-neon"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:border-neon hover:text-neon transition-colors font-medium"
            >
              <Mail size={16} /> Contact Me
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:border-neon hover:text-neon transition-colors font-medium"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Stack</span>
            {[
              { icon: Code2, label: "React" },
              { icon: Sparkles, label: "TypeScript" },
              { icon: Rocket, label: "Next.js" },
              { icon: Search, label: "SEO" },
            ].map((s) => (
              <span key={s.label} className="inline-flex items-center gap-1.5">
                <s.icon size={14} className="text-neon" />
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-6 rounded-3xl bg-neon/20 blur-3xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-[4/5]">
            <img
              src={portrait}
              alt="GM Reaz Ahmed — Web Developer & Digital Marketer"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
              <span className="px-2 py-1 rounded-md bg-background/70 backdrop-blur border border-border">
                5+ years experience
              </span>
              <span className="px-2 py-1 rounded-md bg-neon/20 text-neon border border-neon/40">
                Open to work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
