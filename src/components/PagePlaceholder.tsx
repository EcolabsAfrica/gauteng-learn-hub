import { Link } from "@tanstack/react-router";

export function PagePlaceholder({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">{subtitle}</p>
        </div>
      </section>
      <section className="bg-alt-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-muted-foreground">This page is coming soon. Content will be added in the next step.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Apply Now</Link>
        </div>
      </section>
    </>
  );
}