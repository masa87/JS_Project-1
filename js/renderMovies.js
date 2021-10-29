import { renderPagination, nextPagePagination } from "./pagination";
import { searchGenres, movieId } from "./genres";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");
const paginationContainer = qs(".pagination");
const paginationitem = document.getElementsByClassName("page-item");

let page = 1;
let totalPages = 0;
let currentPage = 1;
let tempInputValue = "";

searchGenres();
// -----------renderowanie listy filmów
const baseURL = "http://image.tmdb.org/t/p/";
const posterSize = "w500";

function renderMovies(movie) {
  totalPages = movie.total_pages;

  renderPagination();
  movie.results.forEach(
    ({
      id,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      backdrop_path,
      genre_ids,
    }) => {
      let getNewId = movieId
        .filter((genre) => genre_ids.includes(genre.id))
        .map((genre) => genre.name)
        .join(", ");

      let relaseYear = release_date.substring(0, 4);
      filmList.innerHTML += `
      <li class="film-list-item">
        <div class="film-card" data-id="${id}">        
          <img class="film-cover" src="${baseURL}${posterSize}${poster_path}" alt="${original_title}" loading="lazy" />
          <p class="film-title">${original_title}</p>
          <p class="film-info">${getNewId} | ${relaseYear}</p>
        </div>
      </li>`;
    }
  );
  // spinner.stop();
}

export { totalPages, renderMovies };
