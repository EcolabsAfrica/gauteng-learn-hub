import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, Heart } from "lucide-react";
import principal from "../assets/principal.jpeg.asset.json";
import staff from "../assets/staff-group.jpeg.asset.json";
import outdoor from "../assets/students-outdoor.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Gauteng CET College" },
      { name: "description", content: "Learn about Gauteng Community Education and Training College — our vision, mission, leadership and commitment to lifelong learning." },
      { property: "og:title", content: "About Gauteng CET College" },
      { property: "og:description", content: "Our vision, mission and leadership." },
      { property: "og:image", content: staff.url },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={outdoor.url} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold">About the College</h1>
          <p className="mt-4 max-w-2xl opacity-90 text-lg">
            Established under the Department of Higher Education and Training, Gauteng CET College is a public
            post-school institution dedicated to second-chance education and skills development.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-6">
        {[
          { icon: Eye, title: "Our Vision", text: "A college of choice driving social change for out-of-school youth and adults through quality community education and training programmes." },
          { icon: Target, title: "Our Mission", text: "To provide accessible, relevant and quality learning pathways that empower communities and prepare learners for employment and further study." },
          { icon: Heart, title: "Our Values", text: "Integrity, inclusivity, excellence and accountability — anchored in a deep respect for every learner's potential." },
        ].map((v) => (
          <div key={v.title} className="rounded-xl border border-border bg-card p-6">
            <v.icon className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-xl font-semibold text-primary">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <img src={principal.url} alt="Principal of Gauteng CET College" className="rounded-xl shadow-lg aspect-[4/5] object-cover max-w-md" />
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-accent">Leadership</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary">A message from the Principal</h2>
            <p className="mt-4 text-muted-foreground">
              "At Gauteng CET College, we believe education is the most powerful tool to transform lives and
              communities. Every learner who walks through our doors carries a story and a future worth
              investing in. Our team is committed to delivering programmes that are relevant, rigorous and
              rooted in dignity."
            </p>
            <p className="mt-4 text-sm font-semibold text-primary">— Office of the Principal</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-primary">Our team</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">A dedicated staff complement of educators, administrators and community partners.</p>
        <img src={staff.url} alt="Gauteng CET College staff and partners" className="mt-8 w-full rounded-xl shadow-lg object-cover" />
      </section>
    </>
  );
}