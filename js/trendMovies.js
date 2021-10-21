import { fetchPopularMovie } from "./fetchApi";
import renderMovies from "./renderMovies";

export function setPopularMovie() {
  fetchPopularMovie()
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}
