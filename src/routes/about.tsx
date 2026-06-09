import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import hero from "../assets/gallery/photo-02-fire-safety-training.jpeg.asset.json";
import partnership from "../assets/students-induction.jpeg.asset.json";
import principal from "../assets/principal.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us | Gauteng CET College" },
    { name: "description", content: "Our purpose, vision, mission, values, footprint, strategic objectives and leadership at Gauteng CET College." },
    { property: "og:title", content: "About Us | Gauteng CET College" },
    { property: "og:description", content: "Our purpose, vision, mission, values and leadership." },
    { property: "og:image", content: hero.url },
  ] }),
  component: AboutPage,
});

const footprint = [
  { n: "47", l: "Community Learning Centres" },
  { n: "267", l: "Satellite Centres" },
  { n: "5", l: "Municipal Districts" },
];

const objectives = [
  "Expand youth and adult access to community education and training programmes — including flexible times and multiple languages.",
  "Ensure the delivery of responsive programmes that cater to the diversity of youth and adults.",
  "Improve youth and adult success in community education and training programmes.",
  "Improve the quality of provision in CET colleges.",
  "Improve business operations within the CET College.",
];

const personnel = [
  { name: "Mrs F.M. Chechile", title: "Acting Principal, Gauteng CET College", photo: principal.url, initials: "FC" },
  { name: "Ms M. Noge", title: "Deputy Principal: Academic Services", initials: "MN" },
  { name: "Vacant", title: "Deputy Principal: Corporate Services", initials: "—", vacant: true },
  { name: "Vacant", title: "Deputy Principal: Finance", initials: "—", vacant: true },
];

const staffByCluster = [
  { name: "Tshwane", n: 492 },
  { name: "Johannesburg", n: 474 },
  { name: "Ekurhuleni", n: 439 },
  { name: "West Rand", n: 196 },
  { name: "Sedibeng", n: 79 },
];

function AboutPage() {
  const max = Math.max(...staffByCluster.map((s) => s.n));
  return (
    <>
      {/* SECTION 1: PAGE HERO */}
      <section
        className="relative w-full h-[50vh] min-h-[360px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.url})` }}
      >
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative text-center px-4">
          <p className="text-white/90 uppercase tracking-widest text-sm font-semibold">About the College</p>
          <h1 className="mt-4 text-white font-bold text-4xl md:text-5xl lg:text-[52px]">Who We Are</h1>
        </div>
      </section>

      {/* SECTION 2: MISSION & HISTORY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-primary font-bold text-3xl md:text-4xl">Our Purpose</h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              The Gauteng Community Education &amp; Training College (CET) — previously known as ABET — addresses the education needs of youth and adults who did not complete their schooling or never attended school. We facilitate a cycle of lifelong learning in communities by developing numeracy, literacy, and vocational skills.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-secondary font-bold text-xl">Vision</h3>
                <p className="mt-2 text-foreground/80 leading-relaxed">Institution of choice driving social change for adults and out-of-school youth through community education and training programmes.</p>
              </div>
              <div>
                <h3 className="text-secondary font-bold text-xl">Mission</h3>
                <p className="mt-2 text-foreground/80 leading-relaxed">To increase access and success through relevant community education and training programmes for socio-economic impact for adults and out-of-school youth.</p>
              </div>
              <div>
                <h3 className="text-secondary font-bold text-xl">Values</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                  <li>Shared Values</li>
                  <li>Batho Pele Principles</li>
                  <li>Competitiveness</li>
                  <li>Ethical Leadership</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            src={partnership.url}
            alt="DHET partnership"
            className="w-full h-full max-h-[640px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* SECTION 3: FOOTPRINT */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-center text-navy font-bold text-3xl md:text-4xl">Our Footprint Across Gauteng</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {footprint.map((t) => (
              <div key={t.l} className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="text-primary font-bold text-5xl md:text-6xl leading-none">{t.n}</div>
                <div className="mt-3 text-navy font-medium">{t.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-foreground/70 max-w-3xl mx-auto">
            Gauteng CET serves communities in the City of Ekurhuleni, City of Johannesburg, City of Tshwane, Sedibeng, and West Rand.
          </p>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC OBJECTIVES */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-center text-primary font-bold text-3xl md:text-4xl">Our 5 Strategic Objectives</h2>
          <div className="mt-10 space-y-4">
            {objectives.map((text, i) => (
              <div
                key={i}
                className={`flex gap-5 p-6 rounded-xl border-l-4 border-primary ${i % 2 === 0 ? "bg-white shadow-sm" : "bg-alt-bg"}`}
              >
                <div className="text-primary font-bold text-4xl leading-none shrink-0 w-12">{i + 1}</div>
                <p className="text-navy font-medium text-base md:text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHERE WE FIT */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-center text-navy font-bold text-3xl md:text-4xl">Where We Fit in South Africa's Education System</h2>
          <div className="mt-10 space-y-4">
            <div className="bg-gray-200 text-navy rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg">Universities — 1st Tier</h3>
              <p className="text-sm mt-1">Focus: Academia &amp; Research</p>
            </div>
            <div className="bg-gray-300 text-navy rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg">TVET Colleges — 2nd Tier</h3>
              <p className="text-sm mt-1">Focus: Occupations in High Demand &amp; Critical Skills</p>
            </div>
            <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center shadow-xl">
              <h3 className="font-bold text-xl md:text-2xl">CET Colleges — 3rd Tier — THAT'S US!</h3>
              <p className="mt-2">Focus: Numeracy, Literacy, Entrepreneurship &amp; Skills Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: KEY PERSONNEL */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-center text-navy font-bold text-3xl md:text-4xl">Our Key Personnel</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {personnel.map((p) => (
              <div
                key={p.name + p.title}
                className={`flex items-center gap-5 p-6 rounded-xl border border-gray-200 ${p.vacant ? "opacity-60" : ""}`}
              >
                {p.photo ? (
                  <img src={p.photo} alt={p.name} className="w-20 h-20 rounded-full object-cover shrink-0" />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-alt-bg text-navy font-bold flex items-center justify-center text-xl shrink-0">
                    {p.initials}
                  </div>
                )}
                <div>
                  <div className="text-navy font-bold">{p.name}</div>
                  <div className="text-sm text-foreground/60 mt-1">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: STAFF COMPLEMENT */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-center font-bold text-3xl md:text-4xl">Our People</h2>
          <div className="mt-10 space-y-4">
            {staffByCluster.map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <div className="w-32 shrink-0 font-semibold">{s.name}</div>
                <div className="flex-1 bg-white/20 rounded-full h-8 overflow-hidden">
                  <div
                    className="h-full bg-white text-primary font-bold text-sm flex items-center justify-end pr-3"
                    style={{ width: `${(s.n / max) * 100}%` }}
                  >
                    {s.n}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t border-white/30">
              <div className="w-32 shrink-0 font-bold">TOTAL</div>
              <div className="flex-1 font-bold text-xl">1,680 lecturers</div>
            </div>
          </div>
          <p className="mt-8 text-center text-white/90">Plus 202 administrators and 40 head office staff members.</p>
          <div className="mt-10 text-center">
            <Link to="/centres" className="inline-block bg-white text-primary font-semibold px-7 py-3 rounded-md hover:opacity-90 transition">
              Explore Our Centres
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}