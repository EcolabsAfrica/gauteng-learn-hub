import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/PagePlaceholder";

export const Route = createFileRoute("/programmes")({
  head: () => ({ meta: [
    { title: "Programmes | Gauteng CET College" },
    { name: "description", content: "Explore programmes offered at Gauteng CET College." },
    { property: "og:title", content: "Programmes | Gauteng CET College" },
    { property: "og:description", content: "Skills, literacy and vocational programmes." },
  ] }),
  component: () => <PagePlaceholder title="Programmes" subtitle="Skills, literacy and vocational programmes." />,
});