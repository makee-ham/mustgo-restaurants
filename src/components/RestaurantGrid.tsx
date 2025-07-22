import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { fetchPlaces } from "../api/fetchPlaces";
import type { Place } from "../types/place";

export default function RestaurantGrid() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlaces()
      .then((data) => setPlaces(data.places))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center">로딩 중...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {places.map((place) => (
        <RestaurantCard key={place.id} place={place} />
      ))}
    </div>
  );
}
