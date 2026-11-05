CREATE TABLE public.staff_emails (email text PRIMARY KEY);
GRANT ALL ON public.staff_emails TO service_role;
ALTER TABLE public.staff_emails ENABLE ROW LEVEL SECURITY;
INSERT INTO public.staff_emails (email) VALUES
 ('serai.t@dhet.gov.za'), ('smdeletshe@gp.cetc.edu.za'), ('pntshuntshe@gp.cetc.edu.za');

CREATE OR REPLACE FUNCTION public.is_staff()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.staff_emails s
    JOIN auth.users u ON lower(u.email) = s.email
    WHERE u.id = auth.uid() AND u.email_confirmed_at IS NOT NULL
  )
$$;
GRANT EXECUTE ON FUNCTION public.is_staff() TO authenticated, anon;

CREATE TABLE public.opportunity_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  title text NOT NULL,
  description text,
  closing_date date,
  file_path text NOT NULL,
  file_name text NOT NULL,
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.opportunity_documents TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.opportunity_documents TO authenticated;
GRANT ALL ON public.opportunity_documents TO service_role;
ALTER TABLE public.opportunity_documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view documents" ON public.opportunity_documents FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Staff can add documents" ON public.opportunity_documents FOR INSERT TO authenticated WITH CHECK (public.is_staff());
CREATE POLICY "Staff can update documents" ON public.opportunity_documents FOR UPDATE TO authenticated USING (public.is_staff());
CREATE POLICY "Staff can delete documents" ON public.opportunity_documents FOR DELETE TO authenticated USING (public.is_staff());

CREATE POLICY "Staff upload opportunity files" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'opportunities' AND public.is_staff());
CREATE POLICY "Staff delete opportunity files" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'opportunities' AND public.is_staff());