/* generic API service (no JSX, logic only) */
// " api-contract "
import type { ApiResponse, HealthData } from "../types/api";

// pure dependency injection
type HealthProviderConfig = {
  baseUrl: string;
};

// generic api-call , returns a promise
async function getHealth(
  config: HealthProviderConfig,
): Promise<ApiResponse<HealthData>> {
  const start = performance.now();

  const res = await fetch(`${config.baseUrl}/health`);

  const json = await res.json();

  // if status is not 200-299 throw error!
  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`);
  }

  return {
    ...json,
    _timing: Math.round(performance.now() - start),
  };
}

// check if URL/ENV exists
function assertApiUrl(url: string | undefined, name: string): string {
  if (!url) {
    throw new Error(`${name} is not defined (check VITE_* env vars)`);
  }
  return url;
}

export function getNodeJSHealth() {
  return getHealth({
    baseUrl: assertApiUrl(
      import.meta.env.VITE_NODE_API_URL,
      "VITE_NODE_API_URL",
    ),
  });
}

export function getPythonHealth() {
  return getHealth({
    baseUrl: assertApiUrl(
      import.meta.env.VITE_PYTHON_API_URL,
      "VITE_PYTHON_API_URL",
    ),
  });
}

export function getGoHealth() {
  return getHealth({
    baseUrl: assertApiUrl(import.meta.env.VITE_GO_API_URL, "VITE_GO_API_URL"),
  });
}
