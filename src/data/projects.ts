export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  category: "Web App" | "Marketing" | "E-commerce" | "Open Source";
  demo: string;
  repo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "saas-analytics",
    name: "Pulse Analytics",
    description: "Real-time SaaS analytics dashboard with custom funnels, cohort analysis, and AI-driven insights.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    category: "Web App",
    demo: "https://example.com",
    repo: "https://github.com",
    accent: "from-emerald-500 to-lime-400",
  },
  {
    slug: "seo-toolkit",
    name: "RankForge SEO",
    description: "All-in-one SEO toolkit: keyword tracking, on-page audits, backlink monitoring, and reporting.",
    tags: ["Next.js", "SEO", "Node", "Postgres"],
    category: "Marketing",
    demo: "https://example.com",
    repo: "https://github.com",
    accent: "from-cyan-500 to-emerald-400",
  },
  {
    slug: "shopify-storefront",
    name: "Nova Storefront",
    description: "Headless Shopify storefront with sub-second loads, A/B tested checkout and personalized PDPs.",
    tags: ["React", "Shopify", "GraphQL", "CRO"],
    category: "E-commerce",
    demo: "https://example.com",
    repo: "https://github.com",
    accent: "from-fuchsia-500 to-emerald-400",
  },
  {
    slug: "ad-attribution",
    name: "AdTrace",
    description: "Multi-channel ad attribution platform that unifies Google, Meta, and TikTok performance data.",
    tags: ["Marketing", "Analytics", "API"],
    category: "Marketing",
    demo: "https://example.com",
    repo: "https://github.com",
    accent: "from-amber-400 to-emerald-400",
  },
  {
    slug: "ui-kit",
    name: "Neon UI Kit",
    description: "Open-source React + Tailwind component library focused on dark, neon-accented interfaces.",
    tags: ["Open Source", "React", "Tailwind"],
    category: "Open Source",
    demo: "https://example.com",
    repo: "https://github.com",
    accent: "from-emerald-400 to-teal-400",
  },
  {
    slug: "blog-engine",
    name: "Inkstack",
    description: "Markdown-driven blog engine with built-in SEO scoring, sitemap generation and RSS.",
    tags: ["Next.js", "MDX", "SEO"],
    category: "Open Source",
    demo: "https://example.com",
    repo: "https://github.com",
    accent: "from-lime-400 to-green-500",
  },
];
