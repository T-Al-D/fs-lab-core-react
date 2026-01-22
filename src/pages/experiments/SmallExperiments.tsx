import { NavLink, Outlet } from "react-router-dom";

export function SmallExperiments() {
  return (
    <>
      <h1>Small Experiments</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="health">Render API Health Check</NavLink>
          </li>
        </ul>
      </nav>

      <section>
        <Outlet />
      </section>
    </>
  );
}
