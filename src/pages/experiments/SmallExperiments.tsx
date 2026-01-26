import { ExperimentsOverview } from "./ExperimentsOverview";

export function SmallExperiments() {
  return (
    <>
      <h1>Small Experiments</h1>

      {/* always visible: Dashboard */}
      <ExperimentsOverview />
    </>
  );
}
