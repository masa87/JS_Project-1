import { fetchGenres, fetchMovie, fetchPopularMovie } from "./js/fetchApi.js";
import { renderMovies } from "./js/renderMovies.js";
import {
  searchBoxValue,
  setPopularMovie,
  startPage,
} from "./js/initFunctions.js";
import { renderPagination, nextPagePagination } from "./js/pagination.js";
import { searchGenres } from "./js/genres.js";
import { spinner, body } from "./js/spinner.js";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");
const paginationContainer = qs(".pagination");
const paginationitem = document.getElementsByClassName("page-item");

setPopularMovie();

// ---------------addEventListener
inputTitle.addEventListener("change", startPage);
paginationContainer.addEventListener("click", nextPagePagination);
