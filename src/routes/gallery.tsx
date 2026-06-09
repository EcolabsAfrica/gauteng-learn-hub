import { createFileRoute } from "@tanstack/react-router";

const images = import.meta.glob("../assets/gallery/*.asset.json", {
  eager: true,
}) as Record<string, { default: { url: string; original_filename: string } }>;

const gallery = Object.entries(images)
  .map(([path, mod]) => ({
    key: path,
    url: mod.default.url,
    alt: mod.default.original_filename,
  }))
  .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery | Gauteng CET College" },
    { name: "description", content: "Photo gallery from campuses, events and programmes." },
    { property: "og:title", content: "Gallery | Gauteng CET College" },
    { property: "og:description", content: "Photos from our centres and events." },
  ] }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">
            Moments from our learning centres, students, training sessions and events.
          </p>
        </div>
      </section>
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {gallery.map((img) => (
              <a
                key={img.key}
                href={img.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="h-48 sm:h-56 w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}