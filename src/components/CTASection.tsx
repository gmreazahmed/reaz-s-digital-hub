import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-neon/30 bg-card p-10 md:p-14 text-center">
        <div className="absolute inset-0 bg-hero-glow opacity-80" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Let's build something that ranks, converts, and scales. I take on a limited number of
            projects each month.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neon text-neon-foreground font-medium hover:opacity-90 transition-opacity glow-neon"
          >
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
