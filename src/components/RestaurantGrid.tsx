import type { Place } from "../types/Place";
import RestaurantCard from "./RestaurantCard";

type RestaurantGridProps = {
  places: Place[];
  loading: boolean;
  onLike: (place: Place) => void;
  likedPlaces: Place[];
};

export default function RestaurantGrid({
  places,
  loading,
  onLike,
  likedPlaces,
}: RestaurantGridProps) {
  if (loading) {
    return <p className="text-center">맛집을 불러오는 중입니다...</p>;
  }

  if (places.length === 0) {
    return <p className="text-center">데이터가 없습니다.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {places.map((place) => {
        const liked = likedPlaces.some((p) => p.id === place.id);

        return (
          <RestaurantCard
            key={place.id}
            place={place}
            liked={liked}
            onLike={() => onLike(place)}
          />
        );
      })}
    </div>
  );
}
