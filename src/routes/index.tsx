import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, GraduationCap, Wrench, Briefcase, Check } from "lucide-react";
import hero from "../assets/gallery/gallery-2.jpeg.asset.json";
import about from "../assets/gallery/gallery-3.jpeg.asset.json";
import g1 from "../assets/gallery/gallery-9.jpeg.asset.json";
import g2 from "../assets/gallery/gallery-11.jpeg.asset.json";
import g3 from "../assets/gallery/gallery-13.jpeg.asset.json";
import g4 from "../assets/gallery/gallery-15.jpeg.asset.json";
import g5 from "../assets/gallery/gallery-17.jpeg.asset.json";
import g6 from "../assets/gallery/gallery-19.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Gauteng CET College | Unlocking Potential, Transforming Lives" },
    { name: "description", content: "Serving 71,486 students across Gauteng through 47 Community Learning Centres and 267 Satellite Centres." },
    { property: "og:title", content: "Gauteng CET College" },
    { property: "og:description", content: "Education for every South African — academic, vocational and skills programmes across Gauteng." },
    { property: "og:image", content: hero.url },
  ] }),
  component: HomePage,
});

const stats = [
  { n: "47", l: "Community Learning Centres" },
  { n: "267", l: "Satellite Centres" },
  { n: "71,486", l: "Students Enrolled (2024)" },
  { n: "5", l: "Municipal Districts" },
];

const programmes = [
  { Icon: BookOpen, title: "AET Levels 1–3", desc: "Foundational literacy and numeracy equivalent to Grades 1–8." },
  { Icon: GraduationCap, title: "Grade 12 (NSC & ASC)", desc: "Senior Certificate qualifications for adults 21 and over." },
  { Icon: Wrench, title: "Skills Programmes", desc: "Vocational training in seamstress, baking, computing, agriculture and more." },
  { Icon: Briefcase, title: "Occupational Qualifications", desc: "QCTO-accredited occupational programmes at NQF level." },
];

const clusters = [
  { name: "City of Johannesburg", staff: "474 lecturers" },
  { name: "City of Tshwane", staff: "492 lecturers" },
  { name: "City of Ekurhuleni", staff: "439 lecturers" },
  { name: "Sedibeng", staff: "79 lecturers" },
  { name: "West Rand", staff: "196 lecturers" },
];

const galleryTeaser = [g1, g2, g3, g4, g5, g6];

function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section
        className="relative w-full min-h-[85vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.url})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(232, 80, 10, 0.55)" }} />
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm bg-white/90 inline-block px-3 py-1 rounded">
            Gauteng Community Education &amp; Training College
          </p>
          <h1 className="mt-6 text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
            Unlocking Potential.<br />Transforming Lives.
          </h1>
          <p className="mt-6 text-white max-w-2xl text-lg md:text-2xl font-normal">
            Serving 71,486 students across Gauteng through 47 Community Learning Centres and 267 Satellite Centres.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-md hover:opacity-90 transition shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/centres"
              className="bg-white text-primary border-2 border-primary font-semibold px-7 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition"
            >
              Find a Centre Near You
            </Link>
          </div>
        </div>
      </section>
      <div className="h-2 w-full bg-primary" />

      {/* SECTION 2: STATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-gray-200 gap-y-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-primary font-bold text-4xl md:text-5xl lg:text-[56px] leading-none">{s.n}</div>
                <div className="mt-3 text-navy font-medium text-sm md:text-base">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <img
            src={about.url}
            alt="Students in discussion"
            className="w-full h-full max-h-[480px] object-cover rounded-2xl shadow-xl"
          />
          <div>
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm">Who We Are</p>
            <h2 className="mt-3 text-navy font-bold text-3xl md:text-4xl">Education for Every South African</h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              The Gauteng Community Education &amp; Training College (CET) serves youth and adults who did not complete their schooling or never attended school. We facilitate lifelong learning in communities by building numeracy, literacy, and vocational skills across all five municipal districts of Gauteng.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Academic programmes from AET Level 1 to Grade 12",
                "Vocational and skills development training",
                "Entrepreneurship programmes",
                "Non-formal and occupational qualifications",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="text-secondary mt-1 shrink-0" size={20} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-block bg-navy text-navy-foreground font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Read More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROGRAMMES */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-center text-navy font-bold text-3xl md:text-4xl">What We Offer</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border-t-4 border-primary shadow-sm hover:shadow-lg transition p-6">
                <Icon className="text-primary" size={36} />
                <h3 className="mt-4 text-navy font-bold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/programmes"
              className="inline-block bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-md hover:opacity-90 transition"
            >
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLUSTERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-center text-navy font-bold text-3xl md:text-4xl">Our 5 Municipal Clusters</h2>
          <p className="mt-3 text-center text-foreground/70">47 CLCs across Gauteng's five district municipalities.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {clusters.map((c) => (
              <div key={c.name} className="bg-alt-bg rounded-lg border-t-4 border-secondary p-5 text-center">
                <h3 className="text-navy font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{c.staff}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-foreground/60">
            Total: 1,680 lecturers + 202 administrators + 40 head office staff
          </p>
        </div>
      </section>

      {/* SECTION 6: GALLERY TEASER */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-center text-white font-bold text-3xl md:text-4xl">Our Community in Action</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryTeaser.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={img.url}
                  alt="Community gallery"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-block bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-md hover:opacity-90 transition"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: PARTNERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-center text-gray-500 text-xl">In Partnership With</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {[
              "Department of Higher Education & Training (DHET)",
              "QCTO",
              "Tshwane North TVET",
            ].map((p) => (
              <div
                key={p}
                className="border-2 border-gray-300 text-gray-500 font-semibold px-6 py-4 rounded-md text-center min-w-[200px]"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: APPLY CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-white font-bold text-3xl md:text-[40px]">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-white text-lg md:text-xl max-w-2xl mx-auto">
            Enrolment is open. Find a centre near you and register today — it's free.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary font-semibold px-7 py-3 rounded-md hover:opacity-90 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold px-7 py-3 rounded-md hover:bg-white hover:text-primary transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}