// frontend/src/lib/api.js
const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchBackend(endpoint) {
  const response = await fetch(`${apiUrl}/${endpoint}`); // no port needed in deployed version
  if (!response.ok) throw new Error("Failed to fetch from backend");
  return await response.json();
}