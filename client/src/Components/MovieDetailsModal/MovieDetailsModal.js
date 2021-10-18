import Modal from "../UI/Modal/Modal";
import styles from "./MovieDetailsModal.module.css";
import { formatDate } from "../Movie/Movie";

function MovieDetailsModal(props) {
  const { onCloseModal, movie } = props;
  const closeBtnClasses = `btn btn-close ${styles.closeBtn}`;
  return (
    <Modal onClose={onCloseModal}>
      <button
        type="button"
        className={closeBtnClasses}
        onClick={onCloseModal}
      ></button>
      <div className="row g-0">
        <div className="col-md-4">
          <div className={styles.imgCont}>
            <img src={movie.imageurl} alt="movie" />
          </div>
        </div>
        <div className="col-md-8">
          <div className={styles.content}>
            <h3>{movie.title}</h3>
            <p>{movie.synopsis}</p>

            <p>
              <span>Genre</span>
              {movie.genre}
            </p>
            <p>
              <span>Initial Release </span>
              {formatDate(movie.releasedate)}
            </p>
            <p>
              <span>Languages</span>
              {movie.language}
            </p>
            <p>
              <span>Actors</span>
              {movie.actors}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default MovieDetailsModal;