import React from "react";
import styles from "./MoviesList.module.css";
import Movie from "../../../Components/Movie/Movie";
import { v4 as uuidv4 } from "uuid";

const MoviesList = (props) => {
  if (props.movies.length === 0) {
    return <p>Not movies found</p>;
  }
  return (
    <div className={styles.container}>
      <ul className={styles.moviesList}>
        {props.movies.map((movie) => (
          <Movie
            key={uuidv4()}
            currentMovie={movie}
            releaseDate={movie.releasedate}
            onDelete={props.onDeleteMovie}
          />
        ))}
        {/* <p>Movies list</p> */}
      </ul>
    </div>
  );
};

export default MoviesList;
