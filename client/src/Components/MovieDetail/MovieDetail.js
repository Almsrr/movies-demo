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
      <div class="card detail">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={movie.imgUrl}
              class="img-fluid rounded-start"
              alt={movie.title}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body overflow-scroll">
              <h3 class="detail__title">{movie.title}</h3>
              <p class="detail__text">
                <span>Genre </span>
                {movie.genre}
              </p>
              <p class="detail__text">
                <span>Release Date </span>
                {movie.releaseDate}
              </p>
              <p class="detail__text">
                <span>Synopsis </span>
                {movie.description}
              </p>
              <p class="detail__text">
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
