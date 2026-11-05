import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import dhetLogo from "../assets/dhet-logo.png.asset.json";
import cetLogo from "../assets/cet-logo.png.asset.json";
import { opportunityCategories } from "../lib/opportunities";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programmes", label: "Programmes" },
  { to: "/centres", label: "Our Centres" },
  { to: "/accreditation", label: "Accreditation" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const [oppOpen, setOppOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <header className="relative z-40 bg-white text-foreground shadow-sm border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link to="/" className="flex items-center shrink-0" aria-label="Department of Higher Education and Training">
              <img src={dhetLogo.url} alt="Department of Higher Education and Training, Republic of South Africa" className="h-28 sm:h-36 lg:h-44 w-auto object-contain" />
            </Link>
            <Link to="/" className="flex items-center shrink-0" aria-label="South West Gauteng TVET College">
              <img src={cetLogo.url} alt="South West Gauteng TVET College" className="h-16 sm:h-20 lg:h-24 w-auto object-contain" />
            </Link>
            <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <nav className="hidden lg:block bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 h-14">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 text-sm font-semibold text-primary-foreground/95 hover:text-white [&.active]:text-white [&.active]:underline [&.active]:underline-offset-8 [&.active]:decoration-2"
                activeProps={{ className: "active" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="relative group">
              <Link
                to="/opportunities"
                className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary-foreground/95 hover:text-white [&.active]:text-white [&.active]:underline [&.active]:underline-offset-8 [&.active]:decoration-2"
                activeProps={{ className: "active" }}
              >
                Opportunities
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition">
                <div className="w-64 rounded-lg bg-white text-foreground shadow-lg border border-black/10 py-2">
                  {opportunityCategories.map((c) => (
                    <Link
                      key={c.slug}
                      to="/opportunities/$category"
                      params={{ category: c.slug }}
                      className="block px-4 py-2 text-sm font-medium hover:bg-alt-bg hover:text-primary [&.active]:text-primary"
                      activeProps={{ className: "active" }}
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-semibold text-primary-foreground/95 hover:text-white [&.active]:text-white [&.active]:underline [&.active]:underline-offset-8 [&.active]:decoration-2"
              activeProps={{ className: "active" }}
            >
              Contact & Apply
            </Link>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary hover:opacity-90 transition"
            >
              Apply Now
            </Link>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden border-t border-black/5 bg-white">
            <div className="px-4 py-2 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-sm font-medium border-b border-black/5 [&.active]:text-primary"
                  activeProps={{ className: "active" }}
                >
                  {n.label}
                </Link>
              ))}
              <button
                onClick={() => setOppOpen(!oppOpen)}
                className="flex items-center justify-between px-2 py-3 text-sm font-medium border-b border-black/5 text-left"
                aria-expanded={oppOpen}
              >
                Opportunities
                <ChevronDown className={`h-4 w-4 transition-transform ${oppOpen ? "rotate-180" : ""}`} />
              </button>
              {oppOpen && (
                <div className="flex flex-col border-b border-black/5">
                  <Link
                    to="/opportunities"
                    onClick={() => setOpen(false)}
                    className="px-6 py-2.5 text-sm font-medium text-foreground/70 [&.active]:text-primary"
                    activeProps={{ className: "active" }}
                  >
                    All Opportunities
                  </Link>
                  {opportunityCategories.map((c) => (
                    <Link
                      key={c.slug}
                      to="/opportunities/$category"
                      params={{ category: c.slug }}
                      onClick={() => setOpen(false)}
                      className="px-6 py-2.5 text-sm font-medium text-foreground/70 [&.active]:text-primary"
                      activeProps={{ className: "active" }}
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm font-medium border-b border-black/5 [&.active]:text-primary"
                activeProps={{ className: "active" }}
              >
                Contact & Apply
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 mb-2 inline-flex justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Apply Now</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-navy text-navy-foreground mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-4 bg-white/95 rounded-md p-4 w-full max-w-sm">
              <img src={dhetLogo.url} alt="DHET" className="h-10 sm:h-12 w-auto object-contain shrink-0" />
              <img src={cetLogo.url} alt="Gauteng CET College" className="h-10 sm:h-12 w-auto object-contain shrink-0" />
            </div>
            <h3 className="font-bold text-lg">Gauteng CET College</h3>
            <p className="text-sm opacity-90 mt-1">Institution of choice driving social change.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm opacity-90">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:underline">{n.label}</Link></li>
              ))}
              <li><Link to="/opportunities" className="hover:underline">Opportunities</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact & Apply</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> 010 900 1158 / 53 / 66</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Block D, 2nd Floor, Crownwood Office Park, 100 Northern Parkway, Ormonde, 2091</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs opacity-80 text-center">
            © 2026 Gauteng Community Education & Training College | Department of Higher Education & Training, Republic of South Africa
          </div>
        </div>
      </footer>
    </div>
  );
}