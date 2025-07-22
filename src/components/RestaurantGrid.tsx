import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { fetchPlaces } from "../api/fetchPlaces";

export default function RestaurantGrid() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlaces()
      .then((data) => setPlaces(data.places))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
}
