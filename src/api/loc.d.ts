import type { Place } from "../types/Place";

export function sortPlacesByDistance(
  places: Place[],
  lat: number,
  lon: number
): Place[];
