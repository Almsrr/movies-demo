import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Modal(props) {
  const hasOnClose = props.onClose ? props.onClose : null;
  const modalClasses = `modal-content ${
    props.className ? props.className : ""
  }`;
  const modal = (
    <Fragment>
      <div className={styles.overlay} onClick={hasOnClose}></div>
      <div className={styles.modalDialog}>
        <div className={modalClasses}>{props.children}</div>
      </div>
    </Fragment>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
