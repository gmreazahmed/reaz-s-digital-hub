import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — GM Reaz Ahmed" },
      { name: "description", content: "Articles on web development, SEO and digital marketing by GM Reaz Ahmed." },
      { property: "og:title", content: "Blog — GM Reaz Ahmed" },
      { property: "og:description", content: "Tutorials and insights on building and growing on the modern web." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Shipping React apps that actually rank on Google",
    excerpt: "A practical guide to combining SSR, structured data and Core Web Vitals in modern React stacks.",
    date: "Apr 18, 2026",
    tag: "SEO",
    read: "8 min",
  },
  {
    title: "The marketing funnel for developers",
    excerpt: "How I think about the customer journey when designing landing pages and product flows.",
    date: "Mar 22, 2026",
    tag: "Marketing",
    read: "6 min",
  },
  {
    title: "TanStack Start: my new default for client work",
    excerpt: "Why I'm reaching for TanStack Start over Next.js for most production projects in 2026.",
    date: "Feb 09, 2026",
    tag: "Engineering",
    read: "10 min",
  },
  {
    title: "GA4 events that actually matter",
    excerpt: "A minimal tracking plan that gives you 90% of the insight with 10% of the noise.",
    date: "Jan 14, 2026",
    tag: "Analytics",
    read: "5 min",
  },
];

function BlogPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-neon text-sm font-mono mb-2">// writing</p>
        <h1 className="text-4xl md:text-5xl font-bold">Blog & Articles</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Tutorials, breakdowns and opinions on building and marketing on the modern web.
        </p>

        <div className="mt-12 grid gap-5">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group rounded-xl border border-border bg-card p-6 hover:border-neon/60 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full bg-neon/10 text-neon">{p.tag}</span>
                  <span className="inline-flex items-center gap-1"><Calendar size={12} /> {p.date}</span>
                  <span>· {p.read} read</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold group-hover:text-neon transition-colors">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
              <ArrowRight size={18} className="text-muted-foreground group-hover:text-neon transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
