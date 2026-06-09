import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/PagePlaceholder";

export const Route = createFileRoute("/accreditation")({
  head: () => ({ meta: [
    { title: "Accreditation | Gauteng CET College" },
    { name: "description", content: "Our accreditations and quality assurance." },
    { property: "og:title", content: "Accreditation | Gauteng CET College" },
    { property: "og:description", content: "Accreditation and quality assurance." },
  ] }),
  component: () => <PagePlaceholder title="Accreditation" subtitle="Our accreditations and quality assurance partners." />,
});