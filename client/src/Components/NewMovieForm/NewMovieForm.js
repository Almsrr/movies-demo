import { useRef } from "react";

import "./newMovieForm.css";

function NewMovieForm(props) {
  const newMovieTitle = useRef();
  const newMovieGenre = useRef();
  const newMovieReleaseDate = useRef();
  const newMovieImgUrl = useRef();
  const newMovieSynopsis = useRef();
  const newMovieActors = useRef();

  // Capitalize all words first letter
  const capitalizeFirstLetters = (str) =>
    str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

  //Capitalize first letter
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  // Create movie object and send to new movies component
  const submitHandler = (event) => {
    event.preventDefault();

    const newMovie = {
      title: capitalizeFirstLetters(newMovieTitle.current.value),
      genre: capitalizeFirstLetter(newMovieGenre.current.value),
      releaseDate: newMovieReleaseDate.current.value,
      imageUrl: newMovieImgUrl.current.value,
      synopsis: capitalizeFirstLetter(newMovieSynopsis.current.value),
      actors: capitalizeFirstLetters(newMovieActors.current.value),
    };

    //Send
    props.onNewMovie(newMovie);

    // Empty fields;
    newMovieTitle.current.value = "";
    newMovieGenre.current.value = "";
    newMovieReleaseDate.current.value = "";
    newMovieImgUrl.current.value = "";
    newMovieSynopsis.current.value = "";
    newMovieActors.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="pb-4">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          ref={newMovieTitle}
          className="form-control"
        />
      </div>
      <div className="pb-4">
        <label htmlFor="genre" className="form-label">
          Genre
        </label>
        <select name="genre" ref={newMovieGenre} className="form-select">
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
      <div className="pb-4">
        <label htmlFor="release-date" className="form-label">
          Release Date
        </label>
        <input
          type="date"
          name="release-date"
          ref={newMovieReleaseDate}
          className="form-control"
        />
      </div>
      <div className="pb-4">
        <label htmlFor="image-url" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          name="image-url"
          ref={newMovieImgUrl}
          className="form-control"
        />
      </div>
      <div className="pb-4">
        <label htmlFor="synopsis" className="form-label">
          Synopsis
        </label>
        <textarea
          name="synopsis"
          ref={newMovieSynopsis}
          className="form-control"
        ></textarea>
      </div>
      <div className="pb-4">
        <label htmlFor="actors" className="form-label">
          Actors
        </label>
        <textarea
          name="actors"
          ref={newMovieActors}
          placeholder="Alam Sierra, Marcelo Erizo"
          className="form-control"
        ></textarea>
      </div>
      <div className="text-end mt-4">
        <button
          type="button"
          className="btn btn-outline-secondary fw-bold me-4"
          onClick={() => props.onCancel()}
        >
          Cancel
        </button>
        <button className="btn btn-success px-4 fw-bold" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default NewMovieForm;
