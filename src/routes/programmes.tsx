import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen, GraduationCap, Award, Scissors, Laptop, Cake, Baby,
  HeartPulse, ShoppingBag, Sprout, Briefcase, Plane, Wrench, Gem, Sofa,
  ShieldCheck, FileText, MapPin,
} from "lucide-react";
import hero from "../assets/gallery/photo-09-classroom.jpeg.asset.json";
import getcImg from "../assets/gallery/gallery-13.jpeg.asset.json";
import sg1 from "../assets/skills-programmes/skills-group-1.jpeg.asset.json";
import sg2 from "../assets/skills-programmes/skills-group-2.jpeg.asset.json";
import sg3 from "../assets/skills-programmes/skills-group-3.jpeg.asset.json";
import sg4 from "../assets/skills-programmes/skills-group-4.jpeg.asset.json";
import sg5 from "../assets/skills-programmes/skills-group-5.jpeg.asset.json";
import wattvillePdf from "../assets/skills-programmes/wattville-accreditation.pdf.asset.json";
import wedelaPdf from "../assets/skills-programmes/wedela-accreditation.pdf.asset.json";

export const Route = createFileRoute("/programmes")({
  head: () => ({ meta: [
    { title: "Programmes | Gauteng CET College" },
    { name: "description", content: "AET, GETC, Grade 12 (NSC & ASC), vocational skills and occupational qualifications at Gauteng CET College." },
    { property: "og:title", content: "Our Academic & Skills Programmes" },
    { property: "og:description", content: "From basic literacy to Grade 12 and vocational qualifications." },
    { property: "og:image", content: hero.url },
  ] }),
  component: ProgrammesPage,
});

const aetLevels = [
  { l: "Level 1", e: "Equivalent to Grades 1–3", s: "Numeracy and Languages" },
  { l: "Level 2", e: "Equivalent to Grades 4–6", s: "Numeracy and Languages" },
  { l: "Level 3", e: "Equivalent to Grades 7–8", s: "Numeracy, Language, and option of Integrated Studies or a Skills Programme" },
];

const skills = [
  { Icon: Scissors, name: "Seamstress / Clothing & Textiles" },
  { Icon: Laptop, name: "Computer & Digital Support Assistance" },
  { Icon: Cake, name: "Assistant Baker / Baking" },
  { Icon: Baby, name: "Early Childhood Development (ECD)" },
  { Icon: HeartPulse, name: "Ancillary Health Care" },
  { Icon: ShoppingBag, name: "Wholesale & Retail" },
  { Icon: Sprout, name: "Agriculture / Farming" },
  { Icon: Briefcase, name: "Small, Medium & Micro Enterprises (SMMEs)" },
  { Icon: Plane, name: "Travel & Tourism" },
  { Icon: Wrench, name: "Plumbing (select centres)" },
  { Icon: Gem, name: "Jewellery Manufacturing (select centres)" },
  { Icon: Sofa, name: "Basic Upholstery (select centres)" },
];

const qctoProgrammes = [
  { title: "Basic End User Computing", nqf: "NQF Level 3", credits: 30, code: "SP-240201" },
  { title: "Intermediate End User Computing", nqf: "NQF Level 4", credits: 20, code: "SP-240202" },
  { title: "Advanced End User Computing", nqf: "NQF Level 5", credits: 20, code: "SP-240203" },
];

const qctoCentres = [
  {
    name: "Wattville Community Learning Centre",
    address: "1799 Lesabe Street, Wattville, Benoni, Gauteng, 1501",
    accreditation: "07-QCTO/SDP220526101809",
    pdf: wattvillePdf.url,
  },
  {
    name: "Wedela Community Learning Centre",
    address: "2604 4th Avenue, Wedela, Carletonville, Gauteng, 2499",
    accreditation: "07-QCTO/SDP220526104112",
    pdf: wedelaPdf.url,
  },
];

const skillsGallery = [sg1, sg2, sg3, sg4, sg5];

function ProgrammesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[50vh] min-h-[360px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.url})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(46, 125, 50, 0.55)" }} />
        <h1 className="relative text-white font-bold text-4xl md:text-5xl lg:text-[48px] text-center px-4">
          Our Academic &amp; Skills Programmes
        </h1>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <p className="text-foreground/80 text-lg leading-relaxed">
            The Gauteng CET College offers programmes defined by its Programme Qualification Mix (PQM), designed to meet learners wherever they are — from basic literacy to full Grade 12 and vocational qualifications.
          </p>
        </div>
      </section>

      {/* PROGRAMME 1: AET 1-3 */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 grid md:grid-cols-[160px_1fr] gap-8 items-start">
          <div className="bg-secondary text-white rounded-2xl aspect-square flex items-center justify-center w-full max-w-[160px]">
            <BookOpen size={64} />
          </div>
          <div>
            <h2 className="text-primary font-bold text-2xl md:text-3xl">Adult Education &amp; Training (AET) Levels 1–3</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              These are foundational literacy programmes for adult learners. Programmes include numeracy and language instruction.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-alt-bg text-navy">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold">Level</th>
                    <th className="text-left px-4 py-3 font-bold">Equivalent</th>
                    <th className="text-left px-4 py-3 font-bold">Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  {aetLevels.map((r) => (
                    <tr key={r.l} className="border-t border-gray-200">
                      <td className="px-4 py-3 font-semibold text-navy">{r.l}</td>
                      <td className="px-4 py-3 text-foreground/80">{r.e}</td>
                      <td className="px-4 py-3 text-foreground/80">{r.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME 2: GETC */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-primary font-bold text-2xl md:text-3xl">
              GETC: ABET Level 4 (NQF Level 1 — Equivalent to Grade 9)
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Students who complete AET Levels 1–3 can progress to the General Education and Training Certificate (GETC: ABET), which awards 120 credits at NQF Level 1. Upon completion, students may register with TVET Colleges for National Certificate Vocational (NCV) courses, or progress to the Amended Senior Certificate.
            </p>
          </div>
          <img src={getcImg.url} alt="Conference session" className="w-full max-h-[420px] object-cover rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* PROGRAMME 3: GRADE 12 */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-primary font-bold text-2xl md:text-3xl">
            Grade 12 — National Senior Certificate (NSC) &amp; Amended Senior Certificate (ASC)
          </h2>
          <p className="mt-5 text-foreground/80 leading-relaxed max-w-4xl">
            The Gauteng CET College offers Senior Certificate qualifications for students who were unable to complete their Matric. The Amended Senior Certificate (ASC) is available to students who are 21 years of age and older.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              { t: "NSC — National Senior Certificate", d: "Standard Grade 12 qualification." },
              { t: "ASC — Amended Senior Certificate", d: "Available to learners 21 years of age and older." },
            ].map((c) => (
              <div key={c.t} className="bg-alt-bg rounded-xl border-t-4 border-primary p-6">
                <GraduationCap className="text-primary" size={32} />
                <h3 className="mt-3 text-navy font-bold text-lg">{c.t}</h3>
                <p className="mt-2 text-foreground/75 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME 4: SKILLS */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-primary font-bold text-2xl md:text-3xl">Vocational Skills Programmes</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed max-w-4xl">
            The majority of students opt for the Vocational Learning Stream, which offers practical, employment-ready skills. Programmes include:
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map(({ Icon, name }) => (
              <div key={name} className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
                <div className="bg-primary/10 text-primary p-3 rounded-lg shrink-0">
                  <Icon size={28} />
                </div>
                <span className="text-navy font-medium">{name}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-foreground/65 italic">
            Availability of specific programmes varies by CLC. See the <Link to="/accreditation" className="text-primary underline">Accreditation page</Link> for the full list of which centres offer which programmes.
          </p>
        </div>
      </section>

      {/* PROGRAMME 5: OCCUPATIONAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-primary font-bold text-2xl md:text-3xl">Occupational Qualifications</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed max-w-4xl">
            The college offers QCTO-registered Occupational Qualifications, developed in partnership with industry and sector bodies. These qualifications provide learners with a formal credential that is nationally recognised and occupationally relevant.
          </p>
          <div className="mt-8 bg-alt-bg border-l-4 border-secondary rounded-xl p-6 flex items-start gap-4 max-w-3xl">
            <Award className="text-secondary shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-navy font-bold">Computer and Digital Support Assistance</h3>
              <p className="text-sm text-foreground/75 mt-1">QCTO Occupational Certificate (offered at accredited CLCs).</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME 6: ENTREPRENEURSHIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="font-bold text-3xl md:text-4xl">Entrepreneurship Programmes</h2>
          <p className="mt-5 text-white/95 text-lg leading-relaxed max-w-3xl mx-auto">
            We equip our learners not just with skills, but with the mindset and tools to create their own economic opportunities. Entrepreneurship modules are integrated across programmes and offered as standalone short courses.
          </p>
        </div>
      </section>

      {/* PROGRAMME 7: QCTO-ACCREDITED SKILLS PROGRAMMES (informal but accredited) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-secondary" size={32} />
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">QCTO Accredited</span>
          </div>
          <h2 className="mt-3 text-primary font-bold text-2xl md:text-3xl">
            Accredited Short Skills Programmes
          </h2>
          <p className="mt-5 text-foreground/80 leading-relaxed max-w-4xl">
            These are short, practical skills programmes — informal in format and shorter than a full qualification — but fully accredited by the Quality Council for Trades and Occupations (QCTO) as part of our Skills Development Provider status. Learners gain nationally recognised, occupationally relevant skills in a flexible setting.
          </p>

          {/* Programmes table */}
          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-alt-bg text-navy">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Programme</th>
                  <th className="text-left px-4 py-3 font-bold">NQF Level</th>
                  <th className="text-left px-4 py-3 font-bold">Credits</th>
                  <th className="text-left px-4 py-3 font-bold">Code</th>
                </tr>
              </thead>
              <tbody>
                {qctoProgrammes.map((p) => (
                  <tr key={p.code} className="border-t border-gray-200">
                    <td className="px-4 py-3 font-semibold text-navy">{p.title}</td>
                    <td className="px-4 py-3 text-foreground/80">{p.nqf}</td>
                    <td className="px-4 py-3 text-foreground/80">{p.credits}</td>
                    <td className="px-4 py-3 text-foreground/70 font-mono text-xs">{p.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Accredited centres */}
          <h3 className="mt-12 text-navy font-bold text-xl">Offered at these accredited centres</h3>
          <div className="mt-5 grid sm:grid-cols-2 gap-5">
            {qctoCentres.map((c) => (
              <div key={c.accreditation} className="bg-alt-bg rounded-xl border-l-4 border-secondary p-6">
                <h4 className="text-navy font-bold">{c.name}</h4>
                <div className="mt-3 flex items-start gap-2 text-sm text-foreground/75">
                  <MapPin size={16} className="shrink-0 mt-0.5 text-secondary" />
                  <span>{c.address}</span>
                </div>
                <p className="mt-3 text-xs text-foreground/60">
                  Accreditation No: <span className="font-mono">{c.accreditation}</span><br />
                  Period: 15 May 2026 — 14 May 2031
                </p>
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  <FileText size={16} /> View accreditation letter (PDF)
                </a>
              </div>
            ))}
          </div>

          {/* Photo gallery */}
          <h3 className="mt-14 text-navy font-bold text-xl">Our learners in action</h3>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {skillsGallery.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={`Gauteng CET College accredited skills programme learners — group photo ${i + 1}`}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-lg shadow-sm hover:shadow-md transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-white font-bold text-3xl md:text-4xl">Not Sure Which Programme Is Right for You?</h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Contact your nearest Community Learning Centre or call our head office for guidance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/centres" className="bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-md hover:opacity-90 transition">
              Find a Centre
            </Link>
            <a href="tel:0109001158" className="bg-transparent border-2 border-white text-white font-semibold px-7 py-3 rounded-md hover:bg-white hover:text-navy transition">
              Call Us: 010 900 1158
            </a>
          </div>
        </div>
      </section>
    </>
  );
}