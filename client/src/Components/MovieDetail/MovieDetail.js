import Modal from "../UI/Modal/Modal";

import "./movieDetail.css";

// Friendly format date
export const formatDate = (stringDate) => {
  const date = new Date(stringDate);
  return date.toLocaleDateString();
};

function MovieDetail(props) {
  const { onCloseModal, movie } = props;

  return (
    <Modal onClose={onCloseModal}>
      <div className="card detail">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie.imgUrl}
              className="img-fluid rounded-start"
              alt={movie.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body overflow-scroll">
              <h3 className="detail__title">{movie.title}</h3>
              <p className="detail__text">
                <span>Genre </span>
                {movie.genre}
              </p>
              <p className="detail__text">
                <span>Release Date </span>
                {movie.releaseDate}
              </p>
              <p className="detail__text">
                <span>Synopsis </span>
                {movie.description}
              </p>
              <p className="detail__text">
                <span>Actors </span>
                {movie.actors}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default MovieDetail;
