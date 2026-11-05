import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase } from "lucide-react";
import { opportunityCategories } from "../lib/opportunities";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities | Gauteng CET College" },
      {
        name: "description",
        content:
          "College Council nominations, vacancies, tenders, requests for quotation and bursaries at Gauteng CET College — download the documents you need.",
      },
      { property: "og:title", content: "Opportunities | Gauteng CET College" },
      {
        property: "og:description",
        content:
          "College Council nominations, vacancies, tenders, requests for quotation and bursaries at Gauteng CET College.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OpportunitiesPage,
});

function OpportunitiesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative w-full h-[40vh] min-h-[320px] flex items-center justify-center"
        style={{ backgroundColor: "#E8500A" }}
      >
        <div className="relative text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[48px]">
            Opportunities
          </h1>
          <p className="mt-4 text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            Nominations, vacancies, tenders, quotations and bursaries — choose a
            category below to view and download the available documents.
          </p>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunityCategories.map((c) => (
              <Link
                key={c.slug}
                to="/opportunities/$category"
                params={{ category: c.slug }}
                className="group bg-alt-bg border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition flex flex-col"
              >
                <Briefcase className="h-8 w-8 text-primary" />
                <h2 className="mt-4 text-navy font-bold text-xl">{c.title}</h2>
                <p className="mt-2 text-foreground/70 text-sm leading-relaxed flex-1">
                  {c.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  View documents
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-foreground/60 text-sm">
            All documents are free to download — no sign-in required.
          </p>
        </div>
      </section>
    </>
  );
}
