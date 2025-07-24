import Page from "./components/Page";
import RestaurantGrid from "./components/RestaurantGrid";
import Section from "./components/Section";
import { Toaster } from "react-hot-toast";
import DeleteModal from "./components/DeleteModal";
import usePlaces from "./hooks/usePlaces";
import ErrorAlert from "./components/ErrorAlert";

export default function App() {
  const {
    places,
    likedPlaces,
    isLoading,
    error,
    isModalOpen,
    placeToDelete,
    handleLike,
    confirmDelete,
    cancelDelete,
  } = usePlaces();

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "var(--color-base-100)",
            color: "var(--color-base-content)",
            border: "1px solid var(--color-base-300)",
          },
          error: {
            style: {
              background: "var(--color-error)",
              color: "var(--color-error-content)",
            },
          },
        }}
      />
      <Page>
        {error ? (
          <ErrorAlert message={error} />
        ) : (
          <>
            <Section title="찜 목록">
              <RestaurantGrid
                places={likedPlaces}
                loading={isLoading}
                onLike={handleLike}
                likedPlaces={likedPlaces}
              />
            </Section>

            <Section title="맛집 목록">
              <RestaurantGrid
                places={places}
                loading={isLoading}
                onLike={handleLike}
                likedPlaces={likedPlaces}
              />
            </Section>
          </>
        )}
        <DeleteModal
          isOpen={isModalOpen}
          placeToDelete={placeToDelete}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      </Page>
    </>
  );
}
