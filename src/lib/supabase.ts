import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!;

// publishable or anon keys are for user acces in the frontend, use with RLS!
export const supabase = createClient(supabaseUrl, supabasePublishableKey);
