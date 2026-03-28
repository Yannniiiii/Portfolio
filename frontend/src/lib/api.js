// src/lib/api.js
const apiUrl = import.meta.env.VITE_API_URL; // Must be set on Vercel

export async function fetchBackend(endpoint) {
  try {
    const res = await fetch(`${apiUrl}/${endpoint}`);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch from backend:", err);
    throw err;
  }
}