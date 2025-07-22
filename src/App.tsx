import Page from "./components/Page";
import RestaurantGrid from "./components/RestaurantGrid";
import Section from "./components/Section";

export default function App() {
  return (
    <Page>
      <Section>
        <RestaurantGrid />
      </Section>
      <Section>
        <RestaurantGrid />
      </Section>
    </Page>
  );
}
