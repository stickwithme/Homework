import React, { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
