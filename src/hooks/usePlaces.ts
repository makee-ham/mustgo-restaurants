import { useEffect, useState } from "react";
import { fetchPlaces } from "../api/fetchPlaces";
import {
  fetchLikedPlaces,
  saveLikedPlace,
  deleteLikedPlace,
} from "../api/bookmark";
import { sortPlacesByDistance } from "../api/loc";
import type { Place } from "../types/Place";
import toast from "react-hot-toast";

export default function usePlaces() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [likedPlaces, setLikedPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeToDelete, setPlaceToDelete] = useState<Place | null>(null);

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
      .catch(() => {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        setIsLoading(false);
      });

    fetchLikedPlaces()
      .then(setLikedPlaces)
      .catch(() => {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      });
  }, []);

  const handleLike = (place: Place, liked: boolean) => {
    if (liked) {
      setPlaceToDelete(place);
      setIsModalOpen(true);
    } else {
      saveLikedPlace(place)
        .then(() => setLikedPlaces((prev) => [...prev, place]))
        .catch(() => toast.error("찜하기에 실패했습니다."));
    }
  };

  const confirmDelete = async () => {
    if (!placeToDelete) return;

    try {
      await deleteLikedPlace(placeToDelete.id);
      setLikedPlaces((prev) => prev.filter((p) => p.id !== placeToDelete.id));
      toast.success("찜 해제되었습니다.");
    } catch {
      toast.error("삭제에 실패했습니다.");
    } finally {
      setIsModalOpen(false);
      setPlaceToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setPlaceToDelete(null);
  };

  return {
    places,
    likedPlaces,
    isLoading,
    error,
    isModalOpen,
    placeToDelete,
    handleLike,
    confirmDelete,
    cancelDelete,
  };
}
