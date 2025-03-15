import ReactModal from "react-modal";
import styles from "./Modal.module.scss";
import { ReactNode } from "react";

ReactModal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContainer}
      overlayClassName={styles.modalOverlay}
      contentLabel="Modal"
    >
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        ></button>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
