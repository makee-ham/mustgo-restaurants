export default function RestaurantCard() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group">
      <img
        src="https://placehold.co/600x400"
        alt="맛집"
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute bottom-0 w-full bg-base-100/70 text-base-content text-center py-1 text-sm font-medium">
        맛집 이름
      </div>

      <button
        className="absolute top-2 right-2 btn btn-sm btn-circle bg-base-100/80 text-base-content hover:bg-base-200"
        aria-label="찜하기"
      >
        ❤️
      </button>
    </div>
  );
}
