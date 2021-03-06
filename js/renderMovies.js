import { renderPagination } from "./pagination.js";
import { searchGenres, movieId } from "./genres.js";
import { spinner } from "./spinner.js";

const qs = (selector) => document.querySelector(selector);
const filmList = qs(".film-list");
const errorSearch = qs(".error");
let totalPages = 0;

searchGenres();
// -----------renderowanie listy filmów
const baseURL = "http://image.tmdb.org/t/p/";
const posterSize = "w500";

function renderMovies(movie) {
  totalPages = movie.total_pages;

  if (movie.total_pages === 0) {
    errorSearch.classList.remove("is-hidden");
  } else {
    errorSearch.classList.add("is-hidden");
  }

  // renderPagination();
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
  spinner.stop();
  // renderPagination();
}

export { totalPages, renderMovies };
