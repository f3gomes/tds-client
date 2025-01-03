import React from "react";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean | undefined;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 w-full max-w-lg rounded-lg bg-black p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between absolute right-2 top-2">
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100 hover:text-black transition-all duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
