import { useQuery } from "@tanstack/react-query";
import type { FeatureSnapshot } from "../lib/queries/snapshots";
import { fetchFeatureSnapshots } from "../lib/queries/snapshots";
import { QueryState } from "../components/common/QueryState";

import { FeatureSnapshotsTable } from "../components/tables/FeatureSnapshotsTable";
import { LatencyChart } from "../components/charts/LatencyChart";

export function FeatureSnapshotsDashboard() {
  /*
  state management
  init snapshotData variable (not null)
  fetch or chace if page is mounted
  refresh for manual refresh
  */
  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useQuery<FeatureSnapshot[], Error>({
    queryKey: ["featureSnapshots"],
    queryFn: fetchFeatureSnapshots,
    staleTime: 5 * 60 * 1000 /* 5 min Chace */,
  });

  return (
    <div className="dashboard">
      <h1>Feature Snapshots Dashboard</h1>

      <section className="table">
        <h3>Snapshot Table</h3>
        <button onClick={() => refetch()} disabled={isLoading}>
          Refresh
        </button>
        <br />
        <br />

        <QueryState isLoading={isLoading} error={error} data={data}>
          <FeatureSnapshotsTable data={data} />
        </QueryState>
      </section>

      <section className="charts">
        <h3>Latency Overview</h3>

        <QueryState isLoading={isLoading} error={error} data={data}>
          <LatencyChart
            data={data}
            metric="p50_latency_s"
            title="p50 Latency"
          />

          <LatencyChart
            data={data}
            metric="p95_latency_s"
            title="p95 Latency"
          />

          <LatencyChart
            data={data}
            metric="p99_latency_s"
            title="p99 Latency"
          />
        </QueryState>
      </section>
    </div>
  );
}
