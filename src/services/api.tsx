const API_URL = import.meta.env.VITE_API_URL;

export async function getHealth() {
  const res = await fetch(`${API_URL}/health`);

  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`);
  }

  if (!API_URL) {
    throw new Error(
      "VITE_API_URL is not defined (check Render Static Site ENV)",
    );
  }

  return res.json();
}
