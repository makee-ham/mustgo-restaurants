import type { Place } from "../types/Place";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function saveLikedPlace(place: Place) {
  const response = await fetch(baseUrl + "users/places", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ place }),
  });

  if (!response.ok) {
    throw new Error("찜하기 요청에 실패했습니다.");
  }

  return await response.json();
}

export async function fetchLikedPlaces(): Promise<Place[]> {
  const response = await fetch(baseUrl + "users/places");

  if (!response.ok) {
    throw new Error("찜 목록을 불러오지 못했습니다.");
  }

  const data = await response.json();
  return data.places;
}
