import { useHistory, Link } from "react-router-dom";
import NewMovieForm from "../../Components/NewMovieForm/NewMovieForm";
import "./newMovie.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function NewMovie() {
  const history = useHistory();

  // Save Movie
  const newMovieHandler = async (movie) => {
    try {
      await addDoc(collection(db, "movies"), movie);

      alert("Movie save successfully");
      history.push("/");
    } catch (e) {
      alert("Something went wrong");
      console.log(e.message);
    }
  };

  const cancelSubmissionHandler = () => {
    history.push("/");
  };

  return (
    <div className="bg-img">
      <div className="bg-img-2">
        <div className="container page-container">
          <section className="new-movie">
            <div className="row pb-3">
              <div className="col-12">
                <Link to="/" className="fw-bold">
                  Back
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="form-col">
                  <h1 className="fw-bold mb-4">New Movie</h1>
                  <NewMovieForm
                    onNewMovie={newMovieHandler}
                    onCancel={cancelSubmissionHandler}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NewMovie;
