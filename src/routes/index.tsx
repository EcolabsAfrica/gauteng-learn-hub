import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/PagePlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Home | Gauteng CET College" },
    { name: "description", content: "Gauteng Community Education & Training College — institution of choice driving social change." },
    { property: "og:title", content: "Gauteng CET College" },
    { property: "og:description", content: "Institution of choice driving social change." },
  ] }),
  component: () => <PagePlaceholder title="Gauteng CET College" subtitle="Institution of choice driving social change." />,
});