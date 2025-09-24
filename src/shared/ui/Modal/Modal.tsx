import type { ReactNode, MouseEvent, FC } from 'react'
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

type SectionProps = { children: ReactNode }

const Header: FC<SectionProps> = ({ children }) => (
  <div className={styles.header}>{children}</div>
)
const Body: FC<SectionProps> = ({ children }) => (
  <div className={styles.body}>{children}</div>
)
const Footer: FC<SectionProps> = ({ children }) => (
  <div className={styles.footer}>{children}</div>
)

const BaseModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  const onOverlayClick = () => onClose()
  const onContentClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

  return (
    <div className={styles.overlay} onClick={onOverlayClick}>
      <div className={styles.modal} onClick={onContentClick}>
        {children}
      </div>
    </div>
  )
}

export const Modal = Object.assign(BaseModal, {
  Header,
  Body,
  Footer,
})

export const ModalHeader = Header
export const ModalBody = Body
export const ModalFooter = Footer
