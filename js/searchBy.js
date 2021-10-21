import { fetchMovie } from "./fetchApi";
import { renderMovies } from "./renderMovies";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");

export default function searchBoxValue() {
  fetchMovie(inputTitle.value)
    .then((movie) => {
      console.log(movie);
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}
//export { searchBoxValue };
