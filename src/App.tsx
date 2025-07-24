import Page from "./components/Page";
import RestaurantGrid from "./components/RestaurantGrid";
import Section from "./components/Section";
import { Toaster } from "react-hot-toast";
import DeleteModal from "./components/DeleteModal";
import usePlaces from "./hooks/usePlaces";

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
