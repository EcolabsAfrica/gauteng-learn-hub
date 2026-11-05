import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Download, FileText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getOpportunityCategory } from "../lib/opportunities";
import { listDocs, downloadDoc } from "../lib/opportunity-docs";

export const Route = createFileRoute("/opportunities/$category")({
  loader: ({ params }) => {
    const category = getOpportunityCategory(params.category);
    if (!category) throw notFound();
    return category;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Opportunities"} | Gauteng CET College` },
      {
        name: "description",
        content:
          loaderData?.blurb ??
          "Download opportunity documents from Gauteng CET College.",
      },
      {
        property: "og:title",
        content: `${loaderData?.title ?? "Opportunities"} | Gauteng CET College`,
      },
      {
        property: "og:description",
        content:
          loaderData?.blurb ??
          "Download opportunity documents from Gauteng CET College.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OpportunityCategoryPage,
});

function OpportunityCategoryPage() {
  const category = Route.useLoaderData();
  const { data: uploaded = [], isLoading } = useQuery({
    queryKey: ["opp-docs", category.slug],
    queryFn: () => listDocs(category.slug),
  });

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative w-full h-[36vh] min-h-[280px] flex items-center justify-center"
        style={{ backgroundColor: "#E8500A" }}
      >
        <div className="relative text-center px-4">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            {category.title}
          </h1>
          <p className="mt-4 text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            {category.blurb}
          </p>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link
            to="/opportunities"
            className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All opportunities
          </Link>

          {isLoading ? (
            <p className="mt-8 text-foreground/60">Loading documents…</p>
          ) : uploaded.length === 0 ? (
            <div className="mt-8 bg-alt-bg border border-gray-200 rounded-xl p-8 text-center">
              <p className="text-foreground/70 text-base md:text-lg">
                No documents have been posted here yet. Please check back soon.
              </p>
            </div>
          ) : (
            <ul className="mt-8 space-y-4">
              {uploaded.map((doc) => (
                <li
                  key={doc.id}
                  className="bg-alt-bg border border-gray-200 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <FileText className="h-8 w-8 text-primary shrink-0" />
                  <div className="flex-1">
                    <h2 className="text-navy font-bold text-lg">{doc.title}</h2>
                    {doc.description && (
                      <p className="mt-1 text-foreground/70 text-sm">
                        {doc.description}
                      </p>
                    )}
                    {doc.closing_date && (
                      <p className="mt-1 inline-flex items-center gap-1 text-sm text-foreground/60">
                        <CalendarDays className="h-4 w-4" />
                        Closing date: {new Date(doc.closing_date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => downloadDoc(doc).catch(() => alert("Sorry, the download failed. Please try again."))}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shrink-0"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
