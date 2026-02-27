import { supabase } from "../supabase";

// define the row in table
export type FeatureSnapshot = {
  id: string;
  run_timestamp: string;
  service: string;
  p50_latency_s: string;
  p95_latency_s: string;
  p99_latency_s: string;
  success_rate: string;
};

/* 
  send an HTTP rest to API, supabase is executing Query
  RLS is being checked, JSON response is send back 
*/
export async function fetchFeatureSnapshots(): Promise<FeatureSnapshot[]> {
  const { data, error } = await supabase
    .from("service_feature_snapshots")
    .select("*")
    .order("run_timestamp", { ascending: false })
    .limit(150);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
