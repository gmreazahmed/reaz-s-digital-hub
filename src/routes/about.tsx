import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Download, ArrowRight } from "lucide-react";
import portrait from "@/assets/reaz-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GM Reaz Ahmed" },
      { name: "description", content: "About GM Reaz Ahmed — web developer and digital marketer focused on real client results." },
      { property: "og:title", content: "About — GM Reaz Ahmed" },
      { property: "og:description", content: "Background, philosophy and approach behind GM Reaz Ahmed's work." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-neon text-sm font-mono mb-2">// about</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          A developer who thinks <span className="text-gradient-neon">like a marketer</span>.
        </h1>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 items-start">
          <img
            src={portrait}
            alt="GM Reaz Ahmed"
            width={896}
            height={1024}
            loading="lazy"
            className="rounded-2xl border border-border w-full aspect-[4/5] object-cover"
          />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-foreground font-medium">GM Reaz Ahmed</span> — a web
              developer and digital marketer with 5+ years building products and growing brands. I
              specialize in modern frontend stacks (React, Next.js, TypeScript) and pair every
              build with SEO and conversion strategy from day one.
            </p>
            <p>
              I've shipped SaaS dashboards, e-commerce storefronts, marketing sites and content
              engines — for early-stage founders and 7-figure brands alike. My work is judged on
              one thing: <span className="text-neon">measurable outcomes</span>.
            </p>
            <p>
              Outside of client work I write about web performance, SEO, and growth, and maintain
              a few open-source UI libraries.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { k: "5+", v: "Years" },
                { k: "60+", v: "Projects" },
                { k: "30+", v: "Happy clients" },
              ].map((s) => (
                <div key={s.v} className="rounded-lg border border-border p-4 text-center">
                  <div className="text-2xl font-bold text-neon">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neon text-neon-foreground font-medium hover:opacity-90"
              >
                <Download size={16} /> Download Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:border-neon hover:text-neon font-medium"
              >
                Work with me <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
