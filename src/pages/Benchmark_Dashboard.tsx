import { useState } from "react";
import { supabase } from "../lib/supabase";

type BenchmarkRun = {
  id: string;
  run_timestamp: string;
  service: string;
  p50_latency_s: string;
  p95_latency_s: string;
  p99_latency_s: string;
  success_rate: string;
};

export function Feature_SnapShots_Dashboard() {
  const [data, setData] = useState<BenchmarkRun[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from("service_feature_snapshots")
      .select("*")
      .order("run_timestamp", { ascending: false })
      .limit(1000);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setData(data ?? []);
    setLoading(false);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Benchmark Dashboard</h1>

      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Load Data"}
      </button>
      <br></br>
      <br></br>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data.length > 0 && (
        <table border={1} cellPadding={6}>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Service</th>
              <th>p50</th>
              <th>p95</th>
              <th>p99</th>
              <th>Success</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{new Date(row.run_timestamp).toLocaleString()}</td>
                <td>{row.service}</td>
                <td>{Number(row.p50_latency_s).toFixed(2)}</td>
                <td>{Number(row.p95_latency_s).toFixed(2)}</td>
                <td>{Number(row.p99_latency_s).toFixed(2)}</td>
                <td>{Number(row.success_rate) === 1 ? "🟢" : "🔴"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
