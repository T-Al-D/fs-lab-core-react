import { GenericHealthCheckCard } from "./cards/GenericHealthCheckCard";
import {
  getNodeJSHealth,
  getPythonHealth,
  getGoHealth,
} from "../../services/api";

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
  {
    label: "GO API Health",
    provider: getGoHealth,
  },
];

export function ExperimentsOverview() {
  return (
    <>
      {/* multiple cards in a grid */}
      <section className="grid">
        {healthExperiments.map((experiment) => (
          <GenericHealthCheckCard
            key={experiment.label}
            label={experiment.label}
            provider={experiment.provider}
          />
        ))}
      </section>
    </>
  );
}
