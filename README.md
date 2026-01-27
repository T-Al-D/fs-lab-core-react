# fs-lab-core-react

![CI](https://github.com/<user>/<repo>/actions/workflows/ci.yml/badge.svg)

Core React frontend of the fs-lab fullstack architecture.

**Live Demo:**  
https://fs-lab-core-react.onrender.com/

---

## Purpose

This project serves as a **reference React + TypeScript frontend** for experimenting with:

- frontend architecture and project structure
- API-first frontend design
- communication with multiple independent backend services
- environment-based configuration (local vs hosted)
- deployment and CI workflows in a real-world setup

The focus is on **clarity, correctness, and conscious architectural decisions**  
rather than feature completeness or UI polish.

---

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- ESLint

---

## Project Structure

The codebase is organized by **responsibility rather than file type**:

- `app/` – application shell, layout, and routing
- `pages/` – top-level views and experiment dashboards
- `components/` – reusable UI components
- `services/` – API access layer (logic only, no JSX)
- `styles/` – global design tokens and component-level styles
- `types/` – shared TypeScript contracts (API-first)

This structure is intended to scale without introducing unnecessary complexity
or premature abstraction.

---

## Design Decisions

- Global navigation is intentionally minimal
- Small experiments are displayed as a **dashboard**, not separate routes
- Routing is introduced only when additional context or complexity is required
- CI focuses on **reproducible builds**, not complex deployment logic

---

## API-First Architecture

The frontend follows a strict **API-first approach**.

All backend communication is based on a **shared response contract**:

- consistent `success / data / error / meta` structure
- typed API responses using TypeScript generics
- frontend logic remains agnostic to backend implementation details

The API layer (`services/api.ts`) acts as a **thin SDK**, providing:

- a generic, dependency-injected API core
- backend-specific providers (Node.js, Python, etc.)
- environment-based configuration without UI coupling

This allows the frontend to communicate with **multiple backend implementations**
(Node.js, Python/FastAPI, etc.) without requiring structural changes.

---

## Multiple Backends (Node.js & Python)

The frontend is designed to interact with **multiple independent backend services**
using the same API contract.

Example use cases:

- comparing response times (cold vs warm starts)
- validating API contract consistency
- observing hosting behavior under real conditions

Backends are treated as **replaceable providers**, not as hard dependencies.

---

## Styling Approach

Styling follows a lightweight design-system approach:

- `global.css` defines design tokens, base HTML elements, and global rules
- `classes.css` contains layout and component-level styles

Global semantic tokens (e.g. success / warning / danger) are reused across
components to ensure visual consistency.

---

## Small Experiments Dashboard

The _Small Experiments_ section acts as a **persistent experiment dashboard**.

- API checks are triggered manually
- results are displayed side by side
- experiments are intentionally **not routed** to avoid unnecessary complexity

The goal is **fast feedback and comparison**, not navigation depth.

More complex experiments can be promoted to dedicated routes if needed.

---

## CI / CD

This project uses **GitHub Actions** for continuous integration.

On every push and pull request:

- dependencies are installed from a clean state
- linting is executed
- a production build is created

The pipeline ensures the frontend can always be built reproducibly.

Deployment is intentionally handled by the hosting provider (Render),
keeping the CI pipeline focused and transparent.

---

## Deployment

The application is deployed as a **static site** via **Render**
on every push to the `main` branch.

Client-side routing is supported via SPA fallback configuration.

---

## Local Development

The frontend expects backend base URLs to be provided via environment variables.

Example `.env.local`:

```env
VITE_NODE_API_URL=http://localhost:3000
VITE_PYTHON_API_URL=http://localhost:8000
```
