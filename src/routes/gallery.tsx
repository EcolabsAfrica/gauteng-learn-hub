import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/PagePlaceholder";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery | Gauteng CET College" },
    { name: "description", content: "Photo gallery from campuses, events and programmes." },
    { property: "og:title", content: "Gallery | Gauteng CET College" },
    { property: "og:description", content: "Photos from our centres and events." },
  ] }),
  component: () => <PagePlaceholder title="Gallery" subtitle="Moments from our centres, students and events." />,
});