import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/PagePlaceholder";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact & Apply | Gauteng CET College" },
    { name: "description", content: "Contact Gauteng CET College and apply to join a programme." },
    { property: "og:title", content: "Contact & Apply | Gauteng CET College" },
    { property: "og:description", content: "Get in touch or apply today." },
  ] }),
  component: () => <PagePlaceholder title="Contact & Apply" subtitle="Get in touch with us or apply for a programme." />,
});