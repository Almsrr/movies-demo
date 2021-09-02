import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./DetailsModal.module.css";

const Modal = (props) => {
  // Friendly format date
  const formatDate = (stringDate) => {
    const date = new Date(stringDate);
    return date.toDateString();
  };
  const detailsModal = (
    <Fragment>
      {/* Backdrop  */}
      <div className={styles.backdrop} onClick={props.onCloseDetails}></div>

      {/* Modal  */}
      <div className={styles.modal}>
        {/* Image  */}
        <img src={props.movie.imageurl} alt="" className={styles.movieImg} />

        {/* Button  */}
        <button className={styles.closeBtn} onClick={props.onCloseDetails}>
          <i className="far fa-window-close"></i>
        </button>

        {/* Content  */}
        <div className={styles.content}>
          <h2>{props.movie.title}</h2>
          <p>
            <span>Genre</span>
            {props.movie.genre}
          </p>
          <p>
            <span>Initial Release</span>
            {formatDate(props.movie.releasedate)}
          </p>
          <p>
            <span>Synopsis</span>
            {props.movie.synopsis}
          </p>
          <p>
            <span>Language</span>
            {props.movie.language}
          </p>
          <p>
            <span>Actors</span>
            {props.movie.actors}
          </p>
        </div>
      </div>
    </Fragment>
  );

  // Transport to the top of the dom
  return ReactDOM.createPortal(
    detailsModal,
    document.getElementById("modal-root")
  );
};

export default Modal;
