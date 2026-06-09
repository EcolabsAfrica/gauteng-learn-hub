import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

import photo02 from "../assets/gallery/photo-02-fire-safety-training.jpeg.asset.json";
import photo09 from "../assets/gallery/photo-09-classroom.jpeg.asset.json";
import g2 from "../assets/gallery/gallery-2.jpeg.asset.json";
import g3 from "../assets/gallery/gallery-3.jpeg.asset.json";
import g9 from "../assets/gallery/gallery-9.jpeg.asset.json";
import g11 from "../assets/gallery/gallery-11.jpeg.asset.json";
import g13 from "../assets/gallery/gallery-13.jpeg.asset.json";
import staffGroup from "../assets/staff-group.jpeg.asset.json";
import studentSpeaker from "../assets/student-speaker.jpeg.asset.json";
import studentsInduction from "../assets/students-induction.jpeg.asset.json";
import studentsOutdoor from "../assets/students-outdoor.jpeg.asset.json";
import trainingSession from "../assets/training-session.jpeg.asset.json";
import tailoringStudent from "../assets/tailoring-student.jpeg.asset.json";
import sewingWorkshop from "../assets/sewing-workshop.jpeg.asset.json";
import tabletHandover from "../assets/tablet-handover.jpeg.asset.json";
import principal from "../assets/principal.jpeg.asset.json";

type Category = "Students" | "Training" | "Skills & Vocational" | "Leadership & Events";

interface GalleryPhoto {
  url: string;
  caption: string;
  category: Category;
}

const photos: GalleryPhoto[] = [
  { url: staffGroup.url, caption: "Skills programme graduates with their toolkit kits — ready for the world of work", category: "Skills & Vocational" },
  { url: photo02.url, caption: "Occupational health and safety training in action", category: "Training" },
  { url: studentSpeaker.url, caption: "Celebrating completion — our students earn every success", category: "Leadership & Events" },
  { url: trainingSession.url, caption: "Hands-on workplace safety skills training", category: "Training" },
  { url: studentsOutdoor.url, caption: "Learners engaged in outdoor practical training", category: "Students" },
  { url: g2.url, caption: "Agriculture programme — growing food security alongside skills", category: "Skills & Vocational" },
  { url: g3.url, caption: "In partnership with the Department of Higher Education & Training", category: "Leadership & Events" },
  { url: tailoringStudent.url, caption: "Seamstress programme — vocational skills with a future", category: "Skills & Vocational" },
  { url: photo09.url, caption: "Active learning in our community classrooms", category: "Students" },
  { url: studentsInduction.url, caption: "Gauteng CET College students — proud and ready", category: "Students" },
  { url: g9.url, caption: "Our students engage in a national education conference", category: "Leadership & Events" },
  { url: sewingWorkshop.url, caption: "Sewing and textiles — practical vocational training", category: "Skills & Vocational" },
  { url: g11.url, caption: "A proud community of learners and educators", category: "Students" },
  { url: g13.url, caption: "Students in discussion — ideas and futures being built", category: "Students" },
  { url: tabletHandover.url, caption: "Digitisation initiative — students receive tablets to support learning", category: "Leadership & Events" },
  { url: principal.url, caption: "Mrs F.M. Chechile — Acting Principal, Gauteng CET College", category: "Leadership & Events" },
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
          backgroundImage: `url(${studentSpeaker.url})`,
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