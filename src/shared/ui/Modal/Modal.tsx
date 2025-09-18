import type { ReactNode, MouseEvent } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const onOverlayClick = () => onClose();
  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onOverlayClick} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={onContentClick}>
        {children}
      </div>
    </div>
  );
};

export const ModalHeader = ({ children }: { children: ReactNode }) => (
  <div className={styles.header}>{children}</div>
);

export const ModalBody = ({ children }: { children: ReactNode }) => (
  <div className={styles.body}>{children}</div>
);

export const ModalFooter = ({ children }: { children: ReactNode }) => (
  <div className={styles.footer}>{children}</div>
);
