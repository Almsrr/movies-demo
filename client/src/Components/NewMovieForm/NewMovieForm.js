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

    if (newMovieGenre.current.value === "all") {
      alert("Select a movie genre please");
      return;
    }

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
    // newMovieTitle.current.value = "";
    // newMovieGenre.current.value = "";
    // newMovieReleaseDate.current.value = "";
    // newMovieImgUrl.current.value = "";
    // newMovieSynopsis.current.value = "";
    // newMovieActors.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className="new-movie-form">
      <div className="pb-4">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          ref={newMovieTitle}
          className="form-control"
          required
        />
      </div>
      <div className="pb-4">
        <label htmlFor="genre" className="form-label">
          Genre
        </label>
        <select id="genre" ref={newMovieGenre} className="form-select" required>
          <option value="all">Select one</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="infantile">Infantile</option>
          <option value="romance">Romance</option>
        </select>
      </div>
      <div className="pb-4">
        <label htmlFor="release-date" className="form-label">
          Release date
        </label>
        <input
          type="date"
          id="release-date"
          ref={newMovieReleaseDate}
          className="form-control"
          required
        />
      </div>
      <div className="pb-4">
        <label htmlFor="image-url" className="form-label">
          Image URL
        </label>
        <input
          type="url"
          id="image-url"
          ref={newMovieImgUrl}
          className="form-control"
          pattern="http.*"
          placeholder="https://my-movie-image.com"
          minLength="20"
          required
        />
      </div>
      <div className="pb-4">
        <label htmlFor="synopsis" className="form-label">
          Synopsis
        </label>
        <textarea
          id="synopsis"
          ref={newMovieSynopsis}
          className="form-control"
          rows="6"
        ></textarea>
      </div>
      <div className="pb-4">
        <label htmlFor="actors" className="form-label">
          Actors
        </label>
        <textarea
          id="actors"
          ref={newMovieActors}
          placeholder="Alam Sierra, Marcelo Erizo"
          className="form-control"
          rows="6"
          required
        ></textarea>
      </div>
      <div className="text-end mt-4">
        <button
          type="button"
          className="btn btn-outline-dark me-4"
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
