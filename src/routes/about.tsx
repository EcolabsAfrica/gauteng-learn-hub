import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/PagePlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us | Gauteng CET College" },
    { name: "description", content: "Learn about Gauteng CET College — our vision, mission and leadership." },
    { property: "og:title", content: "About Us | Gauteng CET College" },
    { property: "og:description", content: "Our vision, mission and leadership." },
  ] }),
  component: () => <PagePlaceholder title="About Us" subtitle="Our story, vision and mission." />,
});