import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Download } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GM Reaz Ahmed" },
      { name: "description", content: "Get in touch with GM Reaz Ahmed for freelance, collaboration or full-time opportunities." },
      { property: "og:title", content: "Contact — GM Reaz Ahmed" },
      { property: "og:description", content: "Start a project or just say hi." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-neon text-sm font-mono mb-2">// contact</p>
        <h1 className="text-4xl md:text-5xl font-bold">Let's build something good.</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Tell me a bit about your project, timeline and goals. I reply within 24 hours.
        </p>

        <div className="mt-12 grid md:grid-cols-[1fr_1.4fr] gap-10">
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-5">
              <Mail size={18} className="text-neon mb-2" />
              <div className="text-sm font-medium">Email</div>
              <a href="mailto:hello@gmreaz.dev" className="text-sm text-muted-foreground hover:text-neon">
                hello@gmreaz.dev
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <MapPin size={18} className="text-neon mb-2" />
              <div className="text-sm font-medium">Location</div>
              <div className="text-sm text-muted-foreground">Remote · GMT+6</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm font-medium mb-3">Social</div>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon"><Github size={16} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon"><Linkedin size={16} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-md border border-border hover:border-neon hover:text-neon"><Twitter size={16} /></a>
              </div>
            </div>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border hover:border-neon hover:text-neon w-full justify-center">
              <Download size={16} /> Download Resume (PDF)
            </a>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium block mb-1.5">Name</label>
              <input
                id="name"
                name="name"
                required
                maxLength={100}
                className="w-full px-3 py-2.5 rounded-md bg-input border border-border focus:outline-none focus:border-neon text-sm"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium block mb-1.5">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                className="w-full px-3 py-2.5 rounded-md bg-input border border-border focus:outline-none focus:border-neon text-sm"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium block mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={1000}
                className="w-full px-3 py-2.5 rounded-md bg-input border border-border focus:outline-none focus:border-neon text-sm resize-none"
                placeholder="Tell me about your project…"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {status === "sent" && (
              <p className="text-sm text-neon">Thanks! Your message has been sent. I'll be in touch soon.</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neon text-neon-foreground font-medium hover:opacity-90 disabled:opacity-60"
            >
              <Send size={16} />
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
