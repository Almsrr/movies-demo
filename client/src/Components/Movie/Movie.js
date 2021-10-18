import React from "react";
import styles from "./Movie.module.css";

// Friendly format date
export const formatDate = (stringDate) => {
  const date = new Date(stringDate);
  return date.toLocaleDateString();
};

const Movie = (props) => {
  const { movie, onShowDetails } = props;

  // Classes
  const cardClases = `card ${styles.movie}`;
  const cardOverlayClasses = `card-img-overlay ${styles.movieOverlay}`;

  const showDetailsHandler = () => {
    onShowDetails(movie);
  };

  return (
    <div className={cardClases} onClick={showDetailsHandler}>
      <img src={movie.imageurl} alt="movie" />
      <div className={cardOverlayClasses}>
        <h3 className="mb-3">{movie.title}</h3>
        <p>
          Genre: <b>{movie.genre}</b>
        </p>
        <p>
          Initial Release: <b>{formatDate(movie.releasedate)}</b>
        </p>
      </div>
    </div>
  );
};

export default Movie;
