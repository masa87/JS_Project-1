import { fetchPopularMovie } from "./fetchApi";
import { renderMovies } from "./renderMovies";

function setPopularMovie() {
  fetchPopularMovie()
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}
export { setPopularMovie };
