import { useQuery } from "@tanstack/react-query";
import { fetchFeatureSnapshots } from "../lib/queries/snapshots";
import type { FeatureSnapshot } from "../lib/queries/snapshots";

export function Feature_Snapshots_Dashboard() {
  /*
  state management
  init data variable (not null)
  fetch or chace if page is mounted
  refresh for manual refresh
  */
  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useQuery<FeatureSnapshot[]>({
    queryKey: ["featureSnapshots"],
    queryFn: fetchFeatureSnapshots,
    staleTime: 5 * 60 * 1000 /* 5 min Chace */,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) {
    return <p className="status-down">Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Feature Snapshots Dashboard</h1>

      <button onClick={() => refetch()} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load Data"}
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
            {data?.map((row) => (
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
