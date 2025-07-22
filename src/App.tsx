import { useEffect, useState } from "react";
import Page from "./components/Page";
import RestaurantGrid from "./components/RestaurantGrid";
import Section from "./components/Section";
import { fetchPlaces } from "./api/fetchPlaces";
import type { Place } from "./types/Place";

export default function App() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlaces()
      .then((data) => setPlaces(data.places))
      .catch(console.error)
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
