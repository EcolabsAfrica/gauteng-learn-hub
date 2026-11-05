import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Session } from "@supabase/supabase-js";
import { Trash2, Upload, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { opportunityCategories } from "../lib/opportunities";
import { listDocs } from "../lib/opportunity-docs";

export const Route = createFileRoute("/staff")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Staff Portal | Gauteng CET College" },
      { name: "description", content: "Staff portal for posting Opportunities documents at Gauteng CET College." },
      { property: "og:title", content: "Staff Portal | Gauteng CET College" },
      { property: "og:description", content: "Staff portal for posting Opportunities documents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: StaffPage,
});

const input = "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";
const btn = "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition disabled:opacity-50";

function StaffPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);
  if (!ready) return <div className="py-20 text-center">Loading…</div>;
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-navy">Staff Portal</h1>
      <p className="mt-2 text-foreground/70">Post documents to the Opportunities pages.</p>
      {session ? <Dashboard email={session.user.email ?? ""} /> : <AuthForm />}
    </section>
  );
}

function AuthForm() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true); setMsg(null);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
    } else {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/staff` } });
      setMsg(error ? error.message : "Check your email inbox and click the confirmation link, then sign in here.");
    }
    setBusy(false);
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-4 bg-alt-bg border border-gray-200 rounded-xl p-6">
      <h2 className="font-bold text-lg">{mode === "in" ? "Sign in" : "Create your staff account"}</h2>
      <input className={input} type="email" placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className={input} type="password" placeholder="Password (min 6 characters)" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
      {msg && <p className="text-sm text-foreground/80">{msg}</p>}
      <button className={btn} disabled={busy}>{mode === "in" ? "Sign in" : "Create account"}</button>
      <p className="text-sm">
        {mode === "in" ? "First time here? " : "Already have an account? "}
        <button type="button" className="text-primary font-semibold underline" onClick={() => setMode(mode === "in" ? "up" : "in")}>
          {mode === "in" ? "Create your account" : "Sign in"}
        </button>
      </p>
    </form>
  );
}

function Dashboard({ email }: { email: string }) {
  const qc = useQueryClient();
  const { data: isStaff, isLoading } = useQuery({
    queryKey: ["is-staff", email],
    queryFn: async () => (await supabase.rpc("is_staff")).data === true,
  });
  const { data: docs = [] } = useQuery({ queryKey: ["opp-docs", "all"], queryFn: () => listDocs(), enabled: !!isStaff });

  const [category, setCategory] = useState(opportunityCategories[0].slug);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [closing, setClosing] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function publish(e: FormEvent) {
    e.preventDefault();
    if (!file) return;
    setBusy(true); setMsg(null);
    const path = `${category}/${Date.now()}-${file.name.replace(/[^\w.\-]/g, "_")}`;
    const up = await supabase.storage.from("opportunities").upload(path, file);
    if (up.error) { setMsg(up.error.message); setBusy(false); return; }
    const { error } = await supabase.from("opportunity_documents").insert({
      category, title, description: description || null, closing_date: closing || null, file_path: path, file_name: file.name,
    });
    if (error) { setMsg(error.message); await supabase.storage.from("opportunities").remove([path]); }
    else { setMsg("Published! It is now live on the website."); setTitle(""); setDescription(""); setClosing(""); setFile(null); (e.target as HTMLFormElement).reset(); }
    qc.invalidateQueries({ queryKey: ["opp-docs"] });
    setBusy(false);
  }

  async function remove(id: string, path: string) {
    if (!confirm("Remove this document from the website?")) return;
    await supabase.from("opportunity_documents").delete().eq("id", id);
    await supabase.storage.from("opportunities").remove([path]);
    qc.invalidateQueries({ queryKey: ["opp-docs"] });
  }

  const signOut = (
    <button onClick={() => supabase.auth.signOut()} className="inline-flex items-center gap-1 text-sm text-primary font-semibold">
      <LogOut className="h-4 w-4" /> Sign out
    </button>
  );

  if (isLoading) return <p className="mt-8">Checking access…</p>;
  if (!isStaff)
    return (
      <div className="mt-8 bg-alt-bg border rounded-xl p-6 space-y-3">
        <p>Signed in as {email}, but this account is not on the staff list. Please contact the website administrator.</p>
        {signOut}
      </div>
    );

  return (
    <div className="mt-8 space-y-10">
      <div className="flex justify-between items-center text-sm"><span>Signed in as {email}</span>{signOut}</div>
      <form onSubmit={publish} className="space-y-4 bg-alt-bg border border-gray-200 rounded-xl p-6">
        <h2 className="font-bold text-lg">Post a new document</h2>
        <select className={input} value={category} onChange={(e) => setCategory(e.target.value)}>
          {opportunityCategories.map((c) => <option key={c.slug} value={c.slug}>{c.title}</option>)}
        </select>
        <input className={input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea className={input} placeholder="Short description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label className="block text-sm">Closing date (optional)
          <input className={input} type="date" value={closing} onChange={(e) => setClosing(e.target.value)} />
        </label>
        <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" onChange={(e) => setFile(e.target.files?.[0] ?? null)} required />
        {msg && <p className="text-sm">{msg}</p>}
        <button className={btn} disabled={busy}><Upload className="h-4 w-4" />{busy ? "Publishing…" : "Publish"}</button>
      </form>

      <div>
        <h2 className="font-bold text-lg mb-3">Published documents</h2>
        {docs.length === 0 ? <p className="text-foreground/60 text-sm">Nothing posted yet.</p> : (
          <ul className="divide-y border rounded-xl">
            {docs.map((d) => (
              <li key={d.id} className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="font-semibold">{d.title}</p>
                  <p className="text-xs text-foreground/60">{opportunityCategories.find((c) => c.slug === d.category)?.title}</p>
                </div>
                <button onClick={() => remove(d.id, d.file_path)} className="text-destructive" aria-label="Remove"><Trash2 className="h-5 w-5" /></button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
