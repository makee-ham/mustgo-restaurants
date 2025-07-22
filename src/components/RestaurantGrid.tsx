import type { Place } from "../types/Place";
import RestaurantCard from "./RestaurantCard";

type RestaurantGridProps = {
  places: Place[];
  loading: boolean;
};

export default function RestaurantGrid({
  places,
  loading,
}: RestaurantGridProps) {
  if (loading) {
    return <p className="text-center">맛집을 불러오는 중입니다...</p>;
  }

  if (places.length === 0) {
    return <p className="text-center">데이터가 없습니다.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {places.map((place) => (
        <RestaurantCard key={place.id} place={place} />
      ))}
    </div>
  );
}
