import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Programmes" },
  { to: "/news", label: "News & Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-wide">Gauteng CET College</span>
              <span className="block text-[10px] uppercase opacity-80">Community Education & Training</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 [&.active]:bg-white/15"
                activeProps={{ className: "active" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Apply Now
            </Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-primary">
            <div className="px-4 py-2 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-sm font-medium border-b border-white/10 last:border-0"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span>Gauteng CET College</span>
            </div>
            <p className="text-sm opacity-80">
              A college of choice driving social change for out-of-school youth and adults through quality
              community education and training programmes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:underline">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Head Office, 2nd Floor, Johannesburg</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +27 (0)11 000 0000</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@gautengcetc.edu.za</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Department</h4>
            <p className="text-sm opacity-80">
              Affiliated with the Department of Higher Education and Training, Republic of South Africa.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs opacity-70 flex flex-col sm:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} Gauteng CET College. All rights reserved.</span>
            <span>Empowering communities through education.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}