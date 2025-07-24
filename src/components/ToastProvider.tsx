import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
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
  );
}
