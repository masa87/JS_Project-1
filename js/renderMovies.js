import { renderPagination } from "./pagination.js";
import { searchGenres, movieId } from "./genres.js";
import { spinner } from "./spinner.js";
import * as DOM_ELEMENTS from "./VARs";

let totalPages = 0;

searchGenres();
// -----------renderowanie listy filmów

function renderMovies(movie) {
  totalPages = movie.total_pages;

  if (movie.total_pages === 0) {
    DOM_ELEMENTS.errorSearch.classList.remove("is-hidden");
  } else {
    DOM_ELEMENTS.errorSearch.classList.add("is-hidden");
  }

  movie.results.forEach(
    ({ id, original_title, poster_path, release_date, genre_ids }) => {
      let getNewId = movieId
        .filter((genre) => genre_ids.includes(genre.id))
        .map((genre) => genre.name)
        .join(", ");

      let relaseYear = release_date?.substring(0, 4) ?? "";
      DOM_ELEMENTS.filmList.innerHTML += `
      <li class="film-list-item">
        <div class="film-card" data-id="${id}">        
          <img class="film-cover" src="${DOM_ELEMENTS.BASE_URL}${DOM_ELEMENTS.POSTER_SIZE}${poster_path}" alt="${original_title}" loading="lazy" />
          <p class="film-title">${original_title}</p>
          <p class="film-info">${getNewId} | ${relaseYear}</p>
        </div>
      </li>`;
    }
  );
  spinner.stop();
}

export { totalPages, renderMovies };
