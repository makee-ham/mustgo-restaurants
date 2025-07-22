import { useEffect, useState } from "react";
import Page from "./components/Page";
import RestaurantGrid from "./components/RestaurantGrid";
import Section from "./components/Section";
import { fetchPlaces } from "./api/fetchPlaces";
import type { Place } from "./types/Place";

export default function App() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlaces()
      .then((data) => setPlaces(data.places))
      .catch((err) => {
        if (err.message === "404") {
          setError("요청하신 데이터를 찾을 수 없습니다. (404)");
        } else {
          setError("데이터를 불러오는 중 오류가 발생했습니다.");
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Page>
      <Section title="찜 목록">
        <RestaurantGrid places={places} loading={isLoading} />
      </Section>
      <Section title="맛집 목록">
        <RestaurantGrid places={places} loading={isLoading} />
      </Section>
    </Page>
  );
}
