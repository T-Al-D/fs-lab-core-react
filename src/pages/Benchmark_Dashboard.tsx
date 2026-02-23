import { useState } from "react";
import { supabase } from "../lib/supabase";

// define the row in table
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
  // state management
  const [data, setData] = useState<BenchmarkRun[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // fetching the data
  async function fetchData() {
    setLoading(true);
    setError(null);

    // send an HTTP rest to API, supabase is executing Query
    // RLS is being checked, JSON response is send back
    const { data, error } = await supabase
      .from("service_feature_snapshots")
      .select("*")
      .order("run_timestamp", { ascending: false })
      .limit(150);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // save JSON response
    setData(data ?? []);
    setLoading(false);
  }

  return (
    <div>
      <h1>Benchmark Dashboard</h1>

      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Load Data"}
      </button>
      <br></br>
      <br></br>

      {error && <p className="status-down">Error: {error}</p>}

      {data.length > 0 && (
        <table className="snapshot-table">
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
            {/* iterrate over JSON and build DOM elements */}
            {data.map((row) => (
              <tr key={row.id}>
                {/*table datacells inside a table row */}
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
