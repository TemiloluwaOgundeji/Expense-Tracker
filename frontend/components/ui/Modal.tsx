interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  open,
  onClose,
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="absolute inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="absolute inset-0 z-50 flex items-center justify-center p-6">
        <div
          className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}