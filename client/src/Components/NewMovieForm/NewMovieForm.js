import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const NewMovieForm = () => {
  const history = useHistory();
  const newMovieTitle = useRef();
  const newMovieGenre = useRef();
  const newMovieReleaseDate = useRef();
  const newMovieImgUrl = useRef();
  const newMovieSynopsis = useRef();
  const newMovieLanguage = useRef();
  const newMovieActors = useRef();

  // POST Movie
  const newMovieHandler = async (movie) => {
    try {
      const response = await fetch("/api/movies?api-key=123", {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        history.push("/");
        return;
      }
      throw new Error("Request failed");
    } catch (e) {
      console.log(e.message);
    }
  };

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
    newMovieHandler(newMovie);

    // Empty fields;
    newMovieTitle.current.value = "";
    newMovieGenre.current.value = "";
    newMovieReleaseDate.current.value = "";
    newMovieImgUrl.current.value = "";
    newMovieSynopsis.current.value = "";
    newMovieLanguage.current.value = "";
    newMovieActors.current.value = "";
  };

  const cancelFormHandler = () => {
    history.push("/");
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">New Movie</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
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
              <div className="mb-3">
                <label htmlFor="genre" className="form-label">
                  Genre
                </label>
                <select
                  name="genre"
                  ref={newMovieGenre}
                  className="form-select"
                >
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
              <div className="mb-3">
                <label htmlFor="releaseDate" className="form-label">
                  Release Date
                </label>
                <input
                  type="date"
                  name="releaseDate"
                  ref={newMovieReleaseDate}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  ref={newMovieImgUrl}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="synopsis" className="form-label">
                  Synopsis
                </label>
                <textarea
                  name="synopsis"
                  ref={newMovieSynopsis}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="language" className="form-label">
                  Language
                </label>
                <select
                  name="language"
                  ref={newMovieLanguage}
                  className="form-select"
                >
                  <option value="">Select one</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>
              <div className="mb-3">
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
              <div className="text-end">
                <button
                  className="btn btn-secondary me-3"
                  onClick={cancelFormHandler}
                >
                  Cancel
                </button>
                <button className="btn btn-success" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewMovieForm;
