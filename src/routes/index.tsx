import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Users, Award, Sparkles, GraduationCap, Hammer, Laptop } from "lucide-react";
import studentsOutdoor from "../assets/students-outdoor.jpeg.asset.json";
import classroom from "../assets/classroom.jpeg.asset.json";
import training from "../assets/training-session.jpeg.asset.json";
import sewing from "../assets/sewing-workshop.jpeg.asset.json";
import tabletHandover from "../assets/tablet-handover.jpeg.asset.json";
import induction from "../assets/students-induction.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gauteng CET College | A College of Choice" },
      { name: "description", content: "Gauteng CET College provides quality community education, skills and vocational training to out-of-school youth and adults across Gauteng province." },
      { property: "og:title", content: "Gauteng CET College" },
      { property: "og:description", content: "A college of choice driving social change through education and training." },
      { property: "og:image", content: studentsOutdoor.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={studentsOutdoor.url} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> A College of Choice
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
              Education that opens <span className="text-accent">doors</span>.
            </h1>
            <p className="mt-5 text-lg opacity-90 max-w-xl">
              Gauteng Community Education and Training College equips out-of-school youth and adults with
              the skills, literacy and qualifications to thrive — across nine learning centres in Gauteng.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/programmes" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
                Explore Programmes <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                About the College
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img src={induction.url} alt="Gauteng CET College students" className="rounded-xl shadow-2xl ring-1 ring-white/10 aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-lg p-4 shadow-xl w-48">
              <div className="text-3xl font-bold">9</div>
              <div className="text-xs uppercase tracking-wide">Learning centres across Gauteng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "10k+", l: "Learners served" },
            { v: "9", l: "Learning centres" },
            { v: "20+", l: "Skills programmes" },
            { v: "100%", l: "Free public education" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programmes preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What we offer</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              From foundational learning to industry-aligned skills training — pathways designed for every learner.
            </p>
          </div>
          <Link to="/programmes" className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1">
            All programmes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "General Education & Training (GETC)", desc: "Adult literacy and basic education leading to the GETC: ABET Level 4 qualification.", img: classroom.url },
            { icon: Hammer, title: "Skills & Vocational Programmes", desc: "Hands-on training in sewing, hospitality, ICT, plumbing, hair care and more.", img: sewing.url },
            { icon: Laptop, title: "Digital Skills & ICT", desc: "Computer literacy, end-user computing and digital fluency for the modern workplace.", img: training.url },
          ].map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-border bg-card flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <img src={tabletHandover.url} alt="Tablet handover ceremony at Gauteng CET College" className="rounded-xl shadow-lg aspect-[4/3] object-cover" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Driving social change through learning</h2>
            <p className="mt-4 text-muted-foreground">
              We exist to widen access to education for those who were left behind by the formal schooling
              system. Through partnerships with the Department of Higher Education and Training, we deliver
              qualifications, skills and confidence — and equip learners with the tools they need to succeed,
              including devices and connectivity.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: Users, label: "Inclusive" },
                { icon: Award, label: "Accredited" },
                { icon: GraduationCap, label: "Empowering" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center text-center rounded-lg bg-background p-4 border border-border">
                  <b.icon className="h-6 w-6 text-accent" />
                  <span className="mt-2 text-sm font-semibold text-primary">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to start your journey?</h2>
            <p className="mt-2 opacity-90 max-w-xl">Applications are open. Visit your nearest learning centre or get in touch with our admissions team.</p>
          </div>
          <Link to="/contact" className="relative inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
