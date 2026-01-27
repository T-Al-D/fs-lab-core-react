//import { NodeJSHealthCheckCard } from "./cards/NodeJSHealthCheck";

import { GenericHealthCheckCard } from "./cards/GenericHealthCheckCard";
import { getNodeJSHealth, getPythonHealth } from "../../services/api";

// different API calls for each Label
const healthExperiments = [
  {
    label: "Node.js API Health",
    provider: getNodeJSHealth,
  },
  {
    label: "Python API Health",
    provider: getPythonHealth,
  },
];

export function ExperimentsOverview() {
  return (
    <>
      {/* multiple cards in a grid */}
      <section className="grid">
        {healthExperiments.map((exp) => (
          <GenericHealthCheckCard
            key={exp.label}
            label={exp.label}
            provider={exp.provider}
          />
        ))}
      </section>
    </>
  );
}
