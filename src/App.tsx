import Page from "./components/Page";
import RestaurantGrid from "./components/RestaurantGrid";
import Section from "./components/Section";

export default function App() {
  return (
    <Page>
      <Section title="찜 목록">
        <RestaurantGrid />
      </Section>
      <Section title="맛집 목록">
        <RestaurantGrid />
      </Section>
    </Page>
  );
}
