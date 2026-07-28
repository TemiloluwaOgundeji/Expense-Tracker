"use client";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmText = "Delete",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-bold text-slate-900">
              {title}
            </h2>
          </div>

          <div className="px-6 py-5">
            <p className="text-slate-600 leading-7">
              {message}
            </p>
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-5">
            <button
              onClick={onCancel}
              className="rounded-lg border border-slate-300 px-5 py-2 font-medium transition hover:bg-slate-100"
            >
              {cancelText}
            </button>

            <button
              onClick={onConfirm}
              className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}