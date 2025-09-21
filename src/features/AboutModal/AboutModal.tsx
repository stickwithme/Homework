import { FC, useCallback, useState } from 'react';
import { Button } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';

export const AboutModal: FC = () => {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button onClick={openModal}>About</Button>
      <Modal isOpen={open} onClose={closeModal}>
        <Modal.Header>About MoviePortal</Modal.Header>
        <Modal.Body>
          <p>
            Demo project with users, posts, albums and todos. Comments toggle inside post cards.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
