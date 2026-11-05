DROP POLICY IF EXISTS "Anyone can view documents" ON public.opportunity_documents;
CREATE POLICY "Public can view published documents" ON public.opportunity_documents
  FOR SELECT TO anon, authenticated
  USING (category IN ('council-nominations','vacancies','tenders','rfq','bursaries') OR public.is_staff());
REVOKE SELECT ON public.opportunity_documents FROM anon;
GRANT SELECT (id, category, title, description, closing_date, file_path, file_name, created_at) ON public.opportunity_documents TO anon;

DROP POLICY IF EXISTS "Anyone can read opportunity files" ON storage.objects;
CREATE POLICY "Anyone can read published opportunity files" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (
    bucket_id = 'opportunities'
    AND (
      EXISTS (SELECT 1 FROM public.opportunity_documents d WHERE d.file_path = storage.objects.name)
      OR public.is_staff()
    )
  );