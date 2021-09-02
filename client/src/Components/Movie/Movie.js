import React, { useState } from "react";
import styles from "./Movie.module.css";
import Modal from "../Modal/DetailsModal";

const Movie = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  // Current movie
  const movie = props.currentMovie;

  const deleteHandler = () => {
    const result = window.confirm(`${movie.title} will be deleted`);
    if (result) {
      props.onDelete(movie.id);
    }
  };
  const detailsHandler = () => {
    setShowDetails((hidden) => !hidden);
  };

  // Friendly format date
  const formatDate = (stringDate) => {
    const date = new Date(stringDate);
    return date.toLocaleDateString();
  };

  // Bg img to movie
  const movieImg = { backgroundImage: `url(${movie.imageurl})` };

  return (
    <li className={styles.movie} style={movieImg}>
      <div className={styles.caption}>
        <h2>{movie.title}</h2>
        <p>
          <span>Genre:</span> {movie.genre}
        </p>
        <p>
          <span>Initial Release:</span> {formatDate(movie.releasedate)}
        </p>
        <div className={styles.actions}>
          <button onClick={detailsHandler}>
            <i className="fas fa-info-circle"></i>
          </button>
          <button onClick={deleteHandler}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>

      {/* Details Modal  */}
      {showDetails && <Modal movie={movie} onCloseDetails={detailsHandler} />}
    </li>
  );
};

export default Movie;
