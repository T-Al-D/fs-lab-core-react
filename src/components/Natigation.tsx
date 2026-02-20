import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="global-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/small-experiments">Small Experiments</NavLink>
      <NavLink to="/benchmark-dashboard">Benchmark Dashboard</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
