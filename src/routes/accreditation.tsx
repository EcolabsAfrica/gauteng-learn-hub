import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info, Award, Clock, FileText } from "lucide-react";
import heroImg from "../assets/sewing-workshop.jpeg.asset.json";
import wattvillePdf from "../assets/skills-programmes/wattville-accreditation.pdf.asset.json";
import wedelaPdf from "../assets/skills-programmes/wedela-accreditation.pdf.asset.json";

export const Route = createFileRoute("/accreditation")({
  head: () => ({
    meta: [
      { title: "Accreditation | Gauteng CET College" },
      {
        name: "description",
        content:
          "QCTO-accredited centres and occupational programme offerings across Gauteng.",
      },
      {
        property: "og:title",
        content: "Accreditation | Gauteng CET College",
      },
      {
        property: "og:description",
        content:
          "QCTO-accredited centres and occupational programme offerings across Gauteng.",
      },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: AccreditationPage,
});

const accredited = [
  {
    name: "Kwazini",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress (RPL process via QCTO, DHET & Tshwane North TVET)",
    ],
  },
  {
    name: "Kwa-Thema",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress (RPL process)",
    ],
  },
  {
    name: "Wattville",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
      "Assistant Baker",
      "Cook Assistant",
      "Information Technology End User Computing",
    ],
    pdf: wattvillePdf.url,
    pdfLabel: "QCTO Accreditation Letter (07-QCTO/SDP220526101809)",
  },
  {
    name: "City Deep",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Sydney Maseko",
    programmes: ["Seamstress", "Jewellery Manufacturing"],
  },
  {
    name: "DWT Ntathe",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
      "Assistant Baker",
    ],
  },
  {
    name: "Thutomfundo",
    programmes: [
      "Seamstress",
      "Computer and Digital Support Assistance",
    ],
  },
  {
    name: "Mamelodi",
    programmes: [
      "Computer and Digital Support Assistance (lecturer in training)",
    ],
  },
  {
    name: "21 Battalion Main Centre",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Bethsaida",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
    ],
  },
  {
    name: "21 Battalion St Charles",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
      "Assistant Baker",
    ],
  },
  {
    name: "Tembisa",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Sharpeville",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
      "Basic Upholstery",
    ],
  },
] as Array<{ name: string; programmes: string[]; pdf?: string; pdfLabel?: string }>;

// Wedela is in the accreditation-in-progress list, but the centre now has an accreditation letter
// for End User Computing programmes. Add the PDF where its entry appears below.

const inProgress = [
  {
    name: "Gaegolelwe",
    programmes: [
      "Computer and Digital Support Assistance",
      "Cook Assistance",
      "Seamstress (RPL)",
    ],
  },
  {
    name: "Kagiso",
    programmes: ["Plumbing (RPL)"],
  },
  {
    name: "Chiawelo",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Vunanimfundo",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Sebokeng",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
    ],
  },
  {
    name: "Moepathutse",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
    ],
  },
  {
    name: "Victory",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
    ],
  },
  {
    name: "PQ Vundla",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Denver",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Setlakalane",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Aaron Moeti",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
      "Assistant Baker",
    ],
  },
  {
    name: "Reneilwe",
    programmes: ["Computer and Digital Support Assistance"],
  },
  {
    name: "Taamane",
    programmes: [
      "Computer and Digital Support Assistance",
      "Seamstress",
      "Assistant Baker",
    ],
  },
] as Array<{ name: string; programmes: string[]; pdf?: string; pdfLabel?: string }>;

const wedelaEntry = {
  name: "Wedela",
  programmes: [
    "Basic End User Computing (NQF 3)",
    "Intermediate End User Computing (NQF 4)",
    "Advanced End User Computing (NQF 5)",
  ],
  pdf: wedelaPdf.url,
  pdfLabel: "QCTO Accreditation Letter (07-QCTO/SDP220526104112)",
};

// Wedela is now fully accredited — surface it in the accredited list.
accredited.push(wedelaEntry);

function AccreditationPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative w-full h-[40vh] min-h-[280px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg.url})` }}
      >
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative text-center px-4">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[44px]">
            Accreditation &amp; Programme Offerings
          </h1>
          <p className="mt-3 text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            QCTO-accredited centres and programmes across Gauteng.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
            The Gauteng CET College is expanding its occupational programme delivery. Below are the CLCs that are already fully accredited to offer formal occupational programmes, followed by centres currently in the accreditation process.
          </p>
        </div>
      </section>

      {/* SECTION A: CURRENTLY ACCREDITED CLCs */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <h2 className="text-secondary font-bold text-2xl md:text-3xl text-center">
            Accredited Centres — Currently Offering Formal Programmes
          </h2>
          <div className="mt-8 space-y-3">
            <Accordion type="multiple" className="w-full">
              {accredited.map((c) => (
                <AccordionItem
                  key={c.name}
                  value={c.name}
                  className="border rounded-xl px-5 bg-white shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Award className="w-5 h-5 text-secondary shrink-0" />
                      <span className="font-semibold text-navy">
                        {c.name}
                      </span>
                      <span className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2 py-0.5 text-xs font-semibold text-white shrink-0">
                        ACCREDITED
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/80 pb-2">
                      {c.programmes.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    {c.pdf && (
                      <a
                        href={c.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                      >
                        <FileText size={16} />
                        {c.pdfLabel ?? "View accreditation letter (PDF)"}
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION B: CENTRES IN ACCREDITATION PROCESS */}
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-primary font-bold text-2xl md:text-3xl text-center">
            Centres Currently Being Accredited
          </h2>
          <div className="mt-8 space-y-3">
            <Accordion type="multiple" className="w-full">
              {inProgress.map((c) => (
                <AccordionItem
                  key={c.name}
                  value={c.name}
                  className="border rounded-xl px-5 bg-white shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-semibold text-navy">
                        {c.name}
                      </span>
                      <span className="inline-flex items-center rounded-md border border-transparent bg-primary px-2 py-0.5 text-xs font-semibold text-white shrink-0">
                        IN PROGRESS
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/80 pb-2">
                      {c.programmes.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    {c.pdf && (
                      <a
                        href={c.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                      >
                        <FileText size={16} />
                        {c.pdfLabel ?? "View accreditation letter (PDF)"}
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION C: INFO BOX */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="flex items-start gap-4 bg-alt-bg rounded-xl p-6 md:p-8">
            <Info className="w-6 h-6 text-navy shrink-0 mt-0.5" />
            <p className="text-foreground/80 leading-relaxed">
              Accreditation is conducted in partnership with the Quality Council
              for Trades and Occupations (QCTO), the Department of Higher
              Education &amp; Training (DHET), and partner TVET colleges.
              Programmes are delivered by qualified or RPL-certified lecturers on
              site.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
