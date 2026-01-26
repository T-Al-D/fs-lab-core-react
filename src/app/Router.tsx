import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { SmallExperiments } from "../pages/experiments/SmallExperiments";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/small-experiments" element={<SmallExperiments />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
