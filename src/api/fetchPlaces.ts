const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function fetchPlaces() {
  const response = await fetch(baseUrl + "places");
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("404");
    }
    throw new Error("unknown");
  }
  return response.json();
}
