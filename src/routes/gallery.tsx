import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

import p1 from "../assets/gallery/photo-1.jpeg.asset.json";
import p2 from "../assets/gallery/photo-2.jpeg.asset.json";
import p3 from "../assets/gallery/photo-3.jpeg.asset.json";
import p4 from "../assets/gallery/photo-4.jpeg.asset.json";
import p5 from "../assets/gallery/photo-5.jpeg.asset.json";
import p6 from "../assets/gallery/photo-6.jpeg.asset.json";
import p7 from "../assets/gallery/photo-7.jpeg.asset.json";
import p8 from "../assets/gallery/photo-8.jpeg.asset.json";
import p9 from "../assets/gallery/photo-9.jpeg.asset.json";
import p10 from "../assets/gallery/photo-10.jpeg.asset.json";

type Category = "Students" | "Training" | "Skills & Vocational" | "Leadership & Events";

interface GalleryPhoto {
  url: string;
  caption: string;
  category: Category;
}

const photos: GalleryPhoto[] = [
  { url: p1.url, caption: "Thabomeleng Training Institute — vocational trainees with their branded toolkit cases", category: "Skills & Vocational" },
  { url: p2.url, caption: "Occupational health and safety training — hi-vis, hard hats, fire extinguishers and first-aid kit", category: "Training" },
  { url: p3.url, caption: "Graduation celebration — mortar boards raised in the air", category: "Leadership & Events" },
  { url: p4.url, caption: "Workplace safety training group — smiling and celebratory", category: "Training" },
  { url: p5.url, caption: "Learners in hi-vis vests outdoors — a candid moment", category: "Students" },
  { url: p6.url, caption: "Agriculture programme — student with a fresh harvest of leafy vegetables", category: "Skills & Vocational" },
  { url: p7.url, caption: "In partnership with the Department of Higher Education & Training", category: "Leadership & Events" },
  { url: p8.url, caption: "Seamstress programme — vocational skills with a future", category: "Skills & Vocational" },
  { url: p9.url, caption: "Active learning in our community classrooms", category: "Students" },
  { url: p10.url, caption: "Gauteng CET College student leadership and representatives", category: "Leadership & Events" },
];

const filters: ("All" | Category)[] = ["All", "Students", "Training", "Skills & Vocational", "Leadership & Events"];

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery | Gauteng CET College" },
    { name: "description", content: "Real moments from our learners, lecturers, and programmes across Gauteng." },
    { property: "og:title", content: "Gallery | Gauteng CET College" },
    { property: "og:description", content: "Our community in action — students, training, skills and events." },
  ] }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  return (
    <>
      <section
        className="relative flex items-center justify-center text-white"
        style={{
          height: "40vh",
          backgroundImage: `url(${p3.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-orange-600/45" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bold" style={{ fontSize: "48px", lineHeight: 1.1 }}>
            Our Community in Action
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Real moments from our learners, lecturers, and programmes across Gauteng.
          </p>
        </div>
      </section>

      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {filters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium border transition",
                    active
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-transparent text-foreground/80 border-foreground/20 hover:border-foreground/50",
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {visible.map((p, i) => (
              <button
                key={p.url + i}
                onClick={() => setLightbox(i)}
                className="group relative mb-4 block w-full overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition break-inside-avoid cursor-pointer"
              >
                <img
                  src={p.url}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <p className="p-4 text-left text-sm text-white">{p.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full cursor-pointer"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={visible[lightbox].url}
              alt={visible[lightbox].caption}
              className="max-h-[75vh] w-auto object-contain rounded"
            />
            <p className="mt-4 text-center text-white text-base">{visible[lightbox].caption}</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full cursor-pointer"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </>
  );
}