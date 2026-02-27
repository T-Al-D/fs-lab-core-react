import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/global.css";
import "./styles/classes.css";
import { App } from "./app/App";

// central cache-manager
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

/* 
typescript assertion operator -> gurantee that root is not null!
redercycle -> building DOM and put it in root (<App />)
strictmode is a dev-tool - dosen´t run in production 
QueryClientProvider is global recat context provide
*/
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
