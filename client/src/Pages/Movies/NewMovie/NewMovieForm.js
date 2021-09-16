import React, { useState, useRef } from "react";
import styles from "./NewMovieForm.module.css";

const NewMovieForm = (props) => {
  const [showForm, setShowForm] = useState(false);

  const newMovieTitle = useRef();
  const newMovieGenre = useRef();
  const newMovieReleaseDate = useRef();
  const newMovieImgUrl = useRef();
  const newMovieSynopsis = useRef();
  const newMovieLanguage = useRef();
  const newMovieActors = useRef();

  // Capitalize first all words first letter
  const capitalizeAll = (str) =>
    str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

  //Capitalize first letter
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  // Create movie object and send to Movies Component
  const submitHandler = (event) => {
    event.preventDefault();
    const newMovie = {
      title: capitalizeAll(newMovieTitle.current.value),
      genre: capitalizeAll(newMovieGenre.current.value),
      releaseDate: newMovieReleaseDate.current.value,
      imageUrl: newMovieImgUrl.current.value,
      synopsis: capitalizeFirstLetter(newMovieSynopsis.current.value),
      language: capitalizeFirstLetter(newMovieLanguage.current.value),
      actors: capitalizeAll(newMovieActors.current.value),
    };
    props.onNewMovie(newMovie);

    // Empty fields;
    newMovieTitle.current.value = "";
    newMovieGenre.current.value = "";
    newMovieReleaseDate.current.value = "";
    newMovieImgUrl.current.value = "";
    newMovieSynopsis.current.value = "";
    newMovieLanguage.current.value = "";
    newMovieActors.current.value = "";
  };
  const showFormHandler = () => {
    setShowForm((hidden) => !hidden);
  };

  let content = (
    <button onClick={showFormHandler} className={styles.showFormBtn}>
      New Movie
    </button>
  );

  if (showForm) {
    content = (
      <form onSubmit={submitHandler} className={styles.movieForm}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref={newMovieTitle} />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <select name="genre" ref={newMovieGenre}>
            <option value="">Select one</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="infantile">Infantile</option>
            <option value="kids">Romance</option>
          </select>
        </div>
        <div>
          <label htmlFor="releaseDate">Release Date</label>
          <input type="date" name="releaseDate" ref={newMovieReleaseDate} />
        </div>
        <div>
          <label htmlFor="imageURL">Image URL</label>
          <input type="text" name="imageURL" ref={newMovieImgUrl} />
        </div>
        <div>
          <label htmlFor="synopsis">Synopsis</label>
          <textarea name="synopsis" rows="5" ref={newMovieSynopsis}></textarea>
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <select name="language" ref={newMovieLanguage}>
            <option value="">Select one</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
        <div>
          <label htmlFor="actors">Actors</label>
          <textarea
            name="actors"
            rows="5"
            ref={newMovieActors}
            defaultValue="Alam Sierra, Marcelo Erizo"
          ></textarea>
        </div>
        <div className={styles.formActions}>
          <button onClick={showFormHandler}>Cancel</button>
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
  return <div className={styles.formContainer}>{content}</div>;
};

export default NewMovieForm;
