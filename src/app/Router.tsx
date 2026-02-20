import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { SmallExperiments } from "../pages/experiments/SmallExperiments";
import { Benchmark_Dashboard } from "../pages/Benchmark_Dashboard";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/small-experiments" element={<SmallExperiments />} />
      <Route path="/benchmark-dashboard" element={<Benchmark_Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
