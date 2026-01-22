import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { SmallExperiments } from "../pages/experiments/SmallExperiments";
import { APIHealthCheck } from "../pages/experiments/APIHealthCheck";

import { NotFound } from "../pages/NotFound";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* subrouting with 'index' */}
      <Route path="/small-experiments" element={<SmallExperiments />}>
        <Route index element={<APIHealthCheck />} />
        <Route path="health" element={<APIHealthCheck />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
