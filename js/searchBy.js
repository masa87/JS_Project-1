import { fetchMovie } from "../js/fetchApi.js";
import { renderMovies } from "../js/renderMovies.js";

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
