import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Globe, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Apply | Gauteng CET College" },
      { name: "description", content: "Contact Gauteng CET College and apply to join a programme." },
      { property: "og:title", content: "Contact & Apply | Gauteng CET College" },
      { property: "og:description", content: "Get in touch or apply today." },
    ],
  }),
  component: ContactPage,
});

const steps = [
  {
    title: "Find Your Nearest Centre",
    desc: "Use the Centres page or call head office to locate the CLC closest to you.",
  },
  {
    title: "Visit the Centre",
    desc: "Walk in during office hours. Bring your South African ID and any previous school certificates you have.",
  },
  {
    title: "Complete Registration",
    desc: "Fill in the enrolment form at the centre with a staff member. Registration is FREE.",
  },
  {
    title: "Start Learning",
    desc: "Attend your orientation and begin your programme. Flexible morning and afternoon sessions available.",
  },
];

function ContactPage() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative w-full h-[40vh] min-h-[320px] flex items-center justify-center"
        style={{ backgroundColor: "#E8500A" }}
      >
        <div className="relative text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[48px]">
            Contact Us & Apply
          </h1>
          <p className="mt-4 text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            We&apos;re here to help. Find your nearest centre or reach us at head office.
          </p>
        </div>
      </section>

      {/* SECTION 1: CONTACT INFORMATION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h2 className="text-primary font-bold text-2xl md:text-3xl">Head Office</h2>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm md:text-base">
                    Block D, 2nd Floor, Crownwood Office Park, 100 Northern Parkway, Ormonde, 2091
                  </span>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm md:text-base">
                    <a href="tel:0109001158" className="hover:text-primary">010 900 1158</a>
                    {" / "}
                    <a href="tel:0109001153" className="hover:text-primary">010 900 1153</a>
                    {" / "}
                    <a href="tel:0109001166" className="hover:text-primary">010 900 1166</a>
                  </span>
                </div>
                <div className="flex gap-3">
                  <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm md:text-base">
                    www.gautengcetc.edu.za
                  </span>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm md:text-base">
                    Monday – Friday, 07:30 – 16:00
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="Gauteng CET Head Office Map"
                src="https://www.google.com/maps?q=Crownwood+Office+Park,+100+Northern+Parkway,+Ormonde,+Johannesburg&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW TO APPLY */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-navy font-bold text-3xl md:text-4xl text-center">How to Apply</h2>
          <p className="mt-3 text-center text-foreground/70 max-w-2xl mx-auto">
            Admission to Gauteng CET College is open and free. Follow these steps to enrol:
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-primary font-bold text-5xl leading-none">{i + 1}</div>
                <h3 className="mt-4 text-navy font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-foreground/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ANNOUNCEMENTS */}
      {/* [ADMIN: Replace this section with live announcement links as provided by the college] */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-primary font-bold text-3xl md:text-4xl text-center">Announcements</h2>
          <div className="mt-8 bg-alt-bg border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-foreground/70 text-base md:text-lg">
              No announcements at this time. Check back soon for enrolment dates, programme updates, and events.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: NEWSLETTER SIGNUP */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <Mail className="h-10 w-10 text-primary mx-auto" />
          <h2 className="mt-4 font-bold text-3xl md:text-4xl text-white">Stay Informed</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Subscribe to receive enrolment dates, programme updates, and college news directly to your inbox.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Subscribed with: ${email}`);
              setEmail("");
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 rounded-md bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-white/50">We respect your privacy. No spam, ever.</p>
        </div>
      </section>

      {/* SECTION 5: SOCIAL MEDIA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-foreground/60 font-bold text-2xl md:text-3xl">Follow Us</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/p/Gauteng-Community-Education-and-Training-College-100038071645314/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/gauteng-cet-collge/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/gauteng_cet_college/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.155 0-3.51.012-4.752.068-1.022.047-1.578.218-1.948.362-.49.19-.84.418-1.208.786-.368.368-.595.718-.786 1.208-.144.37-.315.926-.362 1.948-.056 1.243-.067 1.597-.067 4.752s.011 3.51.067 4.752c.047 1.022.218 1.578.362 1.948.19.49.418.84.786 1.208.368.368.718.595 1.208.786.37.144.926.315 1.948.362 1.243.056 1.597.067 4.752.067s3.51-.011 4.752-.067c1.022-.047 1.578-.218 1.948-.362.49-.19.84-.418 1.208-.786.368-.368.595-.718.786-1.208.144-.37.315-.926.362-1.948.056-1.243.067-1.597.067-4.752s-.011-3.51-.067-4.752c-.047-1.022-.218-1.578-.362-1.948-.19-.49-.418-.84-.786-1.208-.368-.368-.718-.595-1.208-.786-.37-.144-.926-.315-1.948-.362C15.51 4.013 15.155 4.001 12 4.001zm0 3.838a4.161 4.161 0 110 8.322 4.161 4.161 0 010-8.322zm0 6.861a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4zm5.293-7.072a.972.972 0 11-1.944 0 .972.972 0 011.944 0z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://x.com/GautengCet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter/X
            </a>
            <a
              href="https://www.tiktok.com/@gautengcetcollege/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z" />
              </svg>
              TikTok
            </a>
            <a
              href="https://www.youtube.com/channel/UCVyEL6afRmPBHxc_yHE45Pg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.934L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
