import type { ApiResponse, HealthData } from "../types/api";

const API_URL = import.meta.env.VITE_API_URL;

// check the ENV variable first
if (!API_URL) {
  throw new Error("VITE_API_URL is not defined (check Render Static Site ENV)");
}

export async function getHealth(): Promise<ApiResponse<HealthData>> {
  const res = await fetch(`${API_URL}/health`);

  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`);
  }

  return res.json();
}
