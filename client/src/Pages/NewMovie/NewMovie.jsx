import { useHistory } from "react-router-dom";
import NewMovieForm from "../../Components/NewMovieForm/NewMovieForm";
import "./newMovie.css";

function NewMovie() {
  const history = useHistory();

  // Save Movie
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

  const cancelSubmissionHandler = () => {
    history.push("/");
  };

  return (
    <section className="new-movie">
      <div className="row pb-4">
        <div className="col-12">
          <h1 className="fw-bold">New Movie</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <NewMovieForm
            onNewMovie={newMovieHandler}
            onCancel={cancelSubmissionHandler}
          />
        </div>
      </div>
    </section>
  );
}

export default NewMovie;
