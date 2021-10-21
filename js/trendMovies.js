import { fetchPopularMovie } from "../js/fetchApi.js";
import { renderMovies } from "../js/renderMovies.js";

export function setPopularMovie() {
  fetchPopularMovie()
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}
