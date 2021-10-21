import searchBoxValue from "../js/searchBy";
import { setPopularMovie } from "../js/trendMovies";
import { fetchMovie } from "../js/fetchApi";
import { fetchPopularMovie } from "../js/fetchApi";

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
