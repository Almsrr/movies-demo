import React from "react";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import styles from "./MoviesList.module.css";

const MoviesList = (props) => {
  const { movies, onShowMovieDetails } = props;

  if (movies.length === 0) {
    return <p>Not movies found</p>;
  }

  const listClasses = `row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-2 ${styles.list}`;
  return (
    <ul className={listClasses}>
      {movies.map((movie) => (
        <li className="col" key={movie.id}>
          <Movie movie={movie} onShowDetails={onShowMovieDetails} />
        </li>
      ))}
      <li className="col" key="plus">
        <Link className={styles.addBtn} to="new-movie">
          <i className="fas fa-plus"></i>
        </Link>
      </li>
    </ul>
  );
};

export default MoviesList;
