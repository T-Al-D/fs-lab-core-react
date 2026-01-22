import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/small-experiments">Experiments</NavLink> |{" "}
    </nav>
  );
}
