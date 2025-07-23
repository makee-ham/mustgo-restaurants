import { useEffect, useState } from "react";
import Page from "./components/Page";
import RestaurantGrid from "./components/RestaurantGrid";
import Section from "./components/Section";
import { fetchPlaces } from "./api/fetchPlaces";
import type { Place } from "./types/Place";
import { sortPlacesByDistance } from "./api/loc";
import { saveLikedPlace } from "./api/bookmark";

export default function App() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [likedPlaces, setLikedPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLike = async (place: Place) => {
    try {
      await saveLikedPlace(place);
      setLikedPlaces((prev) => [...prev, place]);
    } catch {
      setError("찜하기에 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchPlaces()
      .then((data) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            const sorted = sortPlacesByDistance(
              data.places,
              latitude,
              longitude
            );
            setPlaces(sorted);
            setIsLoading(false);
          },
          () => {
            setError("위치를 불러오지 못했습니다.");
            setIsLoading(false);
          }
        );
      })
      .catch((err) => {
        if (err.message === "404") {
          setError("요청하신 데이터를 찾을 수 없습니다. (404)");
        } else {
          setError("데이터를 불러오는 중 오류가 발생했습니다.");
        }
        setIsLoading(false);
      });
  }, []);

  return (
    <Page>
      {error ? (
        <div className="alert alert-error shadow-lg mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728"
            />
          </svg>
          <span>{error}</span>
        </div>
      ) : (
        <>
          <Section title="찜 목록">
            <RestaurantGrid
              places={likedPlaces}
              loading={isLoading}
              onLike={handleLike}
            />
          </Section>

          <Section title="맛집 목록">
            <RestaurantGrid
              places={places}
              loading={isLoading}
              onLike={handleLike}
            />
          </Section>
        </>
      )}
    </Page>
  );
}
