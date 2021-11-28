import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Modal(props) {
  const modal = (
    <Fragment>
      <div className={styles.overlay} onClick={props.onClose}></div>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.modalCloseBtn}
          onClick={props.onClose}
        >
          <i className="fas fa-times"></i>
        </button>
        {props.children}
      </div>
    </Fragment>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
