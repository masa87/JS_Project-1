import { fetchById } from "./fetchApi.js";

const qs = (el) => document.querySelector(el);
const filmList = qs(".film-list");
const btnQueue = qs(".btn__queue");
const btnWatched = qs(".btn__watched");
const KEY_QUEUE = "queue-movies";
const KEY_WATCHED = "watched-movies";

let idQueue = [];
let key = null;
let movieId = [];

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    console.log(
      (idQueue =
        serializedState === null ? undefined : JSON.parse(serializedState))
    );
    return (idQueue =
      serializedState === null ? undefined : JSON.parse(serializedState));
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

// -------------rendeMovies

const baseURL = "http://image.tmdb.org/t/p/";
const posterSize = "w500";

function renderQueueMovies() {
  filmList.innerHTML = "";
  load(key);

  idQueue.forEach((movieId1) => {
    fetchById(movieId1).then(
      ({
        id,
        poster_path,
        original_title,
        release_date,
        genres,
        vote_average,
      }) => {
        let getGenres = [...genres].map((genre) => genre.name).join(", ");
        let relaseYear = release_date.substring(0, 4);
        filmList.innerHTML += `
      <li class="film-list-item">
        <div class="film-card" data-id="${id}">        
          <img class="film-cover" src="${baseURL}${posterSize}${poster_path}" alt="${original_title}" loading="lazy" />
          <p class="film-title">${original_title}</p>
          <p class="film-info">${getGenres} | ${relaseYear} <span class="modal__descr-vote"> ${vote_average}</span></p>
        </div>
      </li>`;
      }
    );
  });
}

function startMyLibPage() {
  btnQueue.classList.add("is-chosen");
  btnWatched.classList.remove("is-chosen");
  key = KEY_QUEUE;
  renderQueueMovies();
}

startMyLibPage();

// -----------------addEventListeners
btnQueue.addEventListener("click", () => {
  btnQueue.classList.add("is-chosen");
  btnWatched.classList.remove("is-chosen");
  key = KEY_QUEUE;
  renderQueueMovies();
});
btnWatched.addEventListener("click", () => {
  btnWatched.classList.add("is-chosen");
  btnQueue.classList.remove("is-chosen");
  key = KEY_WATCHED;
  console.log(key);
  renderQueueMovies();
});

export { load };
