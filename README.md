# fs-lab-core-react

![CI](https://github.com/<user>/<repo>/actions/workflows/ci.yml/badge.svg)

Core React frontend of the fs-lab fullstack architecture.

**Live Demo:** https://fs-lab-core-react.onrender.com/

---

## Purpose

This project serves as a reference React + TypeScript frontend for experimenting with:

- frontend architecture and project structure
- client-side routing with React Router
- API-first integration against independent backend services
- deployment and CI workflows in a real-world setup

The focus is on clarity, maintainability, and conscious architectural decisions
rather than feature completeness.

---

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- ESLint

---

## Project Structure

The codebase is organized by responsibility rather than file type:

- `app/` – application shell, layout, and routing
- `pages/` – top-level views and feature entry points
- `components/` – reusable UI components
- `services/` – API access and external communication
- `styles/` – global design tokens and component-level styles
- `types/` – shared TypeScript contracts (API-first)

This structure is intended to scale without introducing unnecessary complexity.

---

## Design Decisions

- Global navigation is intentionally minimal
- Small experiments are displayed as a dashboard instead of separate routes
- Routing is introduced only when additional context or complexity is required
- CI focuses on reproducible builds rather than complex deployment pipelines

---

## API-First Approach

The frontend follows an **API-first design**.

All backend communication is based on a shared response contract:

- consistent `success / data / error / meta` structure
- typed API responses using TypeScript generics
- frontend logic remains agnostic to backend implementation details

This allows the frontend to communicate with different backend services
(e.g. Node.js, Python) without requiring structural changes.

---

## Styling Approach

Styling follows a lightweight design-system approach:

- `global.css` defines design tokens, base HTML elements, and global rules
- `classes.css` contains layout and component-level styles

This separation keeps global concerns stable while allowing components to evolve
without leaking styles across the application.

---

## Small Experiments

The _Small Experiments_ section acts as a persistent experiment dashboard.

- Small API checks are triggered manually and displayed side by side
- Experiments are intentionally **not routed** to avoid fragmenting simple tests
- The focus is fast feedback and comparison rather than page navigation

More complex experiments can be promoted to dedicated routes if needed.

---

## CI / CD

This project uses **GitHub Actions** for continuous integration.

On every push and pull request:

- dependencies are installed from a clean state
- linting is executed
- a production build is created

The pipeline ensures the frontend can always be built reproducibly.

Deployment is intentionally handled outside the CI pipeline by the hosting provider
(Render), keeping the workflow simple and transparent.

---

## Deployment

The application is automatically deployed via **Render** as a static site
on every push to the `main` branch.

Client-side routing is supported via SPA fallback configuration.

---

## Local Development

The frontend expects the backend base URL to be provided via environment variables.

Example `.env.local`:

```env
VITE_API_URL=http://localhost:3000
```
