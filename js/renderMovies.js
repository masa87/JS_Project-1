import { fetchMovie, fetchPopularMovie } from "./fetchApi";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");

const baseURL = "http://image.tmdb.org/t/p/";
const posterSize = "w500";

export function renderMovies(movie) {
  console.log(movie.results);
  console.log(inputTitle.value);
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
      genres,
    }) => {
      // console.log(genre_ids[1]);
      let relaseYear = release_date.substring(0, 4);
      filmList.innerHTML += `
      <li class="film-list-item">
        <div class="film-card">        
          <img class="film-cover" src="${baseURL}${posterSize}${poster_path}" alt="${original_title}" loading="lazy" />
          <p class="film-title">${original_title}</p>
          <p class="film-info"> | ${relaseYear}</p>
        </div>
      </li>`;
    }
  );
}

// export { renderMovies };
