import Page from "./components/Page";
import DeleteModal from "./components/DeleteModal";
import usePlaces from "./hooks/usePlaces";
import ErrorAlert from "./components/ErrorAlert";
import ToastProvider from "./components/ToastProvider";
import RestaurantSections from "./components/RestaurantSections";

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
      <ToastProvider />
      <Page>
        {error ? (
          <ErrorAlert message={error} />
        ) : (
          <RestaurantSections
            places={places}
            likedPlaces={likedPlaces}
            isLoading={isLoading}
            onLike={handleLike}
          />
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
