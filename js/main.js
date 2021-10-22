// import  _default  from "./searchBy";
// import  setPopularMovie  from "./trendMovies";
//import { fetchMovie, fetchPopularMovie } from "./fetchApi";
// import "./renderMovies";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");

let movieId = [];

// ------------ wyszukiwanie filmów po tytule
async function fetchMovie(title) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b8c69e73ca2b06d4109ce06d6df842ad&query=${title}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}

// ----------------wyświetlanie topRated filmów
async function fetchPopularMovie() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=b8c69e73ca2b06d4109ce06d6df842ad`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}

// ------------genres

async function fetchGenres() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=b8c69e73ca2b06d4109ce06d6df842ad`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    // console.log(response.json());
    return response.json();
  } catch (err) {
    return console.log(err);
  }
}

const searchGenres = () => {
  fetchGenres().then((id) => {
    return (movieId = id.genres);
  });
};

searchGenres();

// -----------renderowanie listy filmów
const baseURL = "http://image.tmdb.org/t/p/";
const posterSize = "w500";

export function renderMovies(movie) {
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
        <div class="film-card">        
          <img class="film-cover" src="${baseURL}${posterSize}${poster_path}" alt="${original_title}" loading="lazy" />
          <p class="film-title">${original_title}</p>
          <p class="film-info">${getNewId} | ${relaseYear}</p>
        </div>
      </li>`;
    }
  );
}

//---------popularne filmy
function setPopularMovie() {
  fetchPopularMovie()
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}

//---------szukajka
function searchBoxValue() {
  fetchMovie(inputTitle.value)
    .then((movie) => {
      console.log(movie);
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}

setPopularMovie();

inputTitle.addEventListener("change", (e) => {
  e.preventDefault();
  if (inputTitle.value === "") {
    setPopularMovie();
  }
  filmList.innerHTML = "";
  searchBoxValue();
});
