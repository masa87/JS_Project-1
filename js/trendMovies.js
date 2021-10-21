import { fetchPopularMovie } from "../js/fetchApi";
import renderMovies from "../js/renderMovies";

export function setPopularMovie() {
  fetchPopularMovie()
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}
