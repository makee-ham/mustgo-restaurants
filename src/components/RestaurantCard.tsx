import type { Place } from "../types/Place";

type RestaurantCardProps = {
  place: Place;
  liked: boolean;
  onLike: () => void;
};

export default function RestaurantCard({
  place,
  liked,
  onLike,
}: RestaurantCardProps) {
  const imageUrl = `${import.meta.env.VITE_API_BASE_URL}${place.image.src}`;

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group">
      <img
        src={imageUrl}
        alt={place.image.alt}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute bottom-0 w-full bg-base-100/70 text-base-content text-center py-1 text-sm font-medium">
        {place.title}
      </div>

      {/* 찜하기 토글 버튼은 추후 찜 기능 때 디자인 할 것 */}
      <button
        onClick={onLike}
        className="absolute top-2 right-2 btn btn-sm btn-circle bg-base-100/80 text-base-content hover:bg-base-200"
        aria-label="찜하기"
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
