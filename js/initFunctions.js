import { fetchMovie, fetchPopularMovie } from "./fetchApi.js";
import { renderMovies } from "./renderMovies.js";
import { page, setPage } from "./pagination.js";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");

let tempInputValue = "";

function searchBoxValue() {
  if (inputTitle.value !== tempInputValue) {
    setPage(1);
  }
  fetchMovie(inputTitle.value, page)
    .then((movie) => {
      tempInputValue = inputTitle.value;
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}

function setPopularMovie() {
  fetchPopularMovie(page)
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {});
}

function startPage(e) {
  e.preventDefault();
  if (inputTitle.value === "") {
    setPopularMovie();
  } else {
    filmList.innerHTML = "";
    searchBoxValue();
  }
}

export { searchBoxValue, setPopularMovie, startPage };
