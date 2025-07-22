const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function fetchPlaces() {
  const response = await fetch(baseUrl + "places");
  if (!response.ok) {
    throw new Error("맛집 데이터를 불러오지 못했습니다.");
  }
  return response.json();
}
