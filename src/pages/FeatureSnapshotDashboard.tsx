import { useQuery } from "@tanstack/react-query";
import type { FeatureSnapshot } from "../lib/queries/snapshots";
import { fetchFeatureSnapshots } from "../lib/queries/snapshots";
import { FeatureSnapshotsTable } from "../components/tables/FeatureSnapshotsTable";
import { QueryState } from "../components/common/QueryState";

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
    </div>
  );
}
