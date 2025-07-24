import Section from "./Section";
import RestaurantGrid from "./RestaurantGrid";
import type { Place } from "../types/Place";

interface RestaurantSectionsProps {
  places: Place[];
  likedPlaces: Place[];
  isLoading: boolean;
  onLike: (place: Place, liked: boolean) => void;
}

export default function RestaurantSections({
  places,
  likedPlaces,
  isLoading,
  onLike,
}: RestaurantSectionsProps) {
  return (
    <>
      <Section title="찜 목록">
        <RestaurantGrid
          places={likedPlaces}
          loading={isLoading}
          onLike={onLike}
          likedPlaces={likedPlaces}
        />
      </Section>
      <Section title="맛집 목록">
        <RestaurantGrid
          places={places}
          loading={isLoading}
          onLike={onLike}
          likedPlaces={likedPlaces}
        />
      </Section>
    </>
  );
}
