import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Scissors, Laptop, Utensils, Wrench, Sparkles, Briefcase, HeartHandshake, ArrowRight } from "lucide-react";
import sewing from "../assets/sewing-workshop.jpeg.asset.json";
import classroom from "../assets/classroom.jpeg.asset.json";
import training from "../assets/training-session.jpeg.asset.json";
import tailoring from "../assets/tailoring-student.jpeg.asset.json";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Programmes | Gauteng CET College" },
      { name: "description", content: "Explore our GETC, skills and vocational programmes — from adult basic education to sewing, ICT, hospitality and more." },
      { property: "og:title", content: "Programmes at Gauteng CET College" },
      { property: "og:description", content: "GETC, skills and vocational training pathways." },
      { property: "og:image", content: sewing.url },
    ],
  }),
  component: Programmes,
});

const programmes = [
  { icon: BookOpen, title: "GETC: ABET Level 4", desc: "Adult Basic Education and Training culminating in the General Education and Training Certificate — equivalent to Grade 9." },
  { icon: Scissors, title: "Sewing & Clothing Production", desc: "Practical training in garment construction, pattern making and the use of industrial sewing machines." },
  { icon: Laptop, title: "End User Computing", desc: "Microsoft Office, internet basics and digital literacy for the modern workplace." },
  { icon: Utensils, title: "Hospitality & Catering", desc: "Food preparation, service standards and kitchen operations for the hospitality industry." },
  { icon: Wrench, title: "Plumbing & Welding", desc: "Hands-on trade skills with industry-recognised short course outcomes." },
  { icon: Sparkles, title: "Hair Care & Beauty", desc: "Salon services, hair treatments and beauty therapy fundamentals." },
  { icon: Briefcase, title: "New Venture Creation", desc: "Entrepreneurship, business planning and small enterprise management." },
  { icon: HeartHandshake, title: "Early Childhood Development", desc: "Foundational training for those entering the ECD sector." },
];

function Programmes() {
  return (
    <>
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={sewing.url} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold">Programmes & Courses</h1>
          <p className="mt-4 max-w-2xl opacity-90 text-lg">
            Pathways to qualifications, skills and employment — designed for adults and out-of-school youth.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programmes.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-0.5 transition">
              <p.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={tailoring.url} alt="Tailoring student" className="rounded-lg aspect-square object-cover" />
            <img src={training.url} alt="Training session" className="rounded-lg aspect-square object-cover mt-8" />
            <img src={classroom.url} alt="Classroom" className="rounded-lg aspect-square object-cover" />
            <img src={sewing.url} alt="Sewing workshop" className="rounded-lg aspect-square object-cover mt-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Learn by doing</h2>
            <p className="mt-4 text-muted-foreground">
              Our programmes blend classroom learning with practical workshops, mentoring and real-world
              projects. Learners graduate with the confidence and competence to take on work or further study.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
              Enquire about admissions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}