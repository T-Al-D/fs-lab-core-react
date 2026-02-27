import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { SmallExperiments } from "../pages/experiments/SmallExperiments";
import { Feature_Snapshots_Dashboard } from "../pages/Feature_Snapshot_Dashboard";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/small-experiments" element={<SmallExperiments />} />
      <Route
        path="/feature-snapshot-dashboard"
        element={<Feature_Snapshots_Dashboard />}
      />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
