import  searchBoxValue  from "./searchBy";
import  setPopularMovie  from "./trendMovies";
//import { fetchMovie, fetchPopularMovie } from "./fetchApi";
//import { renderMovies } from "../js/renderMovies.js";

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
