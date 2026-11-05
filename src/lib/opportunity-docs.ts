import { supabase } from "@/integrations/supabase/client";

export interface StoredDoc {
  id: string;
  category: string;
  title: string;
  description: string | null;
  closing_date: string | null;
  file_path: string;
  file_name: string;
  created_at: string;
}

export async function listDocs(category?: string): Promise<StoredDoc[]> {
  let q = supabase.from("opportunity_documents").select("id, category, title, description, closing_date, file_path, file_name, created_at").order("created_at", { ascending: false });
  if (category) q = q.eq("category", category);
  const { data, error } = await q;
  if (error) throw error;
  return data as StoredDoc[];
}

export async function downloadDoc(doc: StoredDoc) {
  const { data, error } = await supabase.storage
    .from("opportunities")
    .createSignedUrl(doc.file_path, 120, { download: doc.file_name });
  if (error || !data) throw error ?? new Error("Download failed");
  window.location.href = data.signedUrl;
}
