import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/PagePlaceholder";

export const Route = createFileRoute("/centres")({
  head: () => ({ meta: [
    { title: "Our Centres | Gauteng CET College" },
    { name: "description", content: "Learning centres across Gauteng province." },
    { property: "og:title", content: "Our Centres | Gauteng CET College" },
    { property: "og:description", content: "Find a learning centre near you." },
  ] }),
  component: () => <PagePlaceholder title="Our Centres" subtitle="Learning centres across Gauteng." />,
});