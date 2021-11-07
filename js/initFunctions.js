import { fetchMovie, fetchPopularMovie } from "./fetchApi.js";
import { renderMovies } from "./renderMovies.js";
import { page, setPage } from "./pagination.js";
import { renderPagination } from "./pagination.js";
import * as DOM_ELEMENTS from "./VARs";

let tempInputValue = "";

function searchBoxValue() {
  if (DOM_ELEMENTS.inputTitle.value !== tempInputValue) {
    setPage(1);
  }
  fetchMovie(DOM_ELEMENTS.inputTitle.value, page)
    .then((movie) => {
      tempInputValue = DOM_ELEMENTS.inputTitle.value;
      renderMovies(movie);
      renderPagination();
    })
    .catch((err) => {
      console.log(err);
    });
}

function setPopularMovie() {
  fetchPopularMovie(page)
    .then((movie) => {
      renderMovies(movie);
      renderPagination();
    })
    .catch((err) => {});
}

function startPage(e) {
  e.preventDefault();
  if (DOM_ELEMENTS.inputTitle.value === "") {
    setPopularMovie();
    renderPagination();
  } else {
    DOM_ELEMENTS.filmList.innerHTML = "";
    searchBoxValue();
    renderPagination();
  }
}

export { searchBoxValue, setPopularMovie, startPage };
