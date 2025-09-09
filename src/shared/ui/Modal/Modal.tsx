import React, { useEffect, useRef } from "react"
import type { ReactNode } from "react"
import "./Modal.css"


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // простейший автофокус внутрь
    contentRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div
        className="modal-content"
        ref={contentRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" aria-label="Закрыть" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};

export const ModalHeader = ({ children }: { children: ReactNode }) => (
  <div className="modal-header">{children}</div>
);

export const ModalBody = ({ children }: { children: ReactNode }) => (
  <div className="modal-body">{children}</div>
);

export const ModalFooter = ({ children }: { children: ReactNode }) => (
  <div className="modal-footer">{children}</div>
);
