import { searchBoxValue } from "../js/searchBy.js";
import { setPopularMovie } from "../js/trendMovies.js";
import { fetchMovie } from "../js/fetchApi.js";
import { fetchPopularMovie } from "../js/fetchApi.js";
import { renderMovies } from "../js/renderMovies.js";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");

setPopularMovie();

inputTitle.addEventListener("change", (e) => {
  e.preventDefault();
  if (inputTitle.value === "") {
    setPopularMovie();
  }
  filmList.innerHTML = "";
  searchBoxValue();
});
