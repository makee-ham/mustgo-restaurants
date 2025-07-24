import type { Place } from "../types/Place";

type DeleteModalProps = {
  isOpen: boolean;
  placeToDelete: Place | null;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function DeleteModal({
  isOpen,
  placeToDelete,
  onConfirm,
  onCancel,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">정말 삭제하시겠습니까?</h3>
        <p className="py-4">{placeToDelete?.title}</p>
        <div className="modal-action">
          <button type="button" className="btn btn-error" onClick={onConfirm}>
            삭제
          </button>
          <button type="button" className="btn" onClick={onCancel}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
