import { fetchPopularMovie } from "./fetchApi";
import { renderMovies } from "./renderMovies";

export default function setPopularMovie() {
  fetchPopularMovie()
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}

