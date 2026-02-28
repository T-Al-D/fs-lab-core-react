import type { FeatureSnapshot } from "../../lib/queries/snapshots";

type Props = {
  data: FeatureSnapshot[];
};

export function FeatureSnapshotsTable({ data }: Props) {
  return (
    <div className="table-container">
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
    </div>
  );
}
