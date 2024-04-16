import styles from "./modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({ children, handleCloseModal }) => {
  return createPortal(
    <div>
      <div
        onClick={() => handleCloseModal(false)}
        className={styles.modalBackdrop}
      ></div>
      <div className={styles.modalContent}>{children}</div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
