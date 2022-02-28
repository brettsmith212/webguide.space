interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_GA_TRACKING_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
