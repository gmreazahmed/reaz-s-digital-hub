import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { SkillsPreview } from "@/components/SkillsPreview";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GM Reaz Ahmed — Web Developer & Digital Marketer" },
      { name: "description", content: "Personal portfolio of GM Reaz Ahmed — building fast, beautiful websites and growth systems that convert." },
      { property: "og:title", content: "GM Reaz Ahmed — Web Developer & Digital Marketer" },
      { property: "og:description", content: "Web Developer & Digital Marketer. Portfolio, projects, blog and contact." },
      { name: "google-site-verification" content: "AiyjjCqIW989hDMuFo9IHfCAEuMfh6vc43RmfU9iyEI" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <Testimonials />
      <CTASection />
    </SiteLayout>
  );
}
