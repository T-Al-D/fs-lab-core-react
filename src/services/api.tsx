const API_URL = import.meta.env.VITE_API_URL;

export async function getHealth() {
  const res = await fetch(`${API_URL}/health`);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const contentType = res.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    throw new Error("API did not return JSON");
  }

  return res.json();
}
