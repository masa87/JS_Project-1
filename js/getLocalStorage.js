// import { queue } from "./localStorage";

// import { fetchMovie } from "../main";

const qs = (el) => document.querySelector(el);
const filmList = qs(".film-list");
// const backdrop = qs(".js-open-modal");
const btnQueue = qs(".btn__queue");
const KEY_QUEUE = "queue-movies";

let key = KEY_QUEUE;
let idQueue = [];

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return (idQueue =
      serializedState === null ? undefined : JSON.parse(serializedState));
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

async function fetchById(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b8c69e73ca2b06d4109ce06d6df842ad`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    // console.log(response.json());
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}

function loadF() {
  load(key);
  console.log(idQueue);
}

const baseURL = "http://image.tmdb.org/t/p/";
const posterSize = "w500";

function renderQueueMovies() {
  load(key);
  // console.log(idQueue);

  idQueue.forEach((movieId) => {
    // console.log(movieId);
    fetchById(movieId).then((movie) => {
      // console.log(movie.original_title);

      filmList.innerHTML += `
      <li class="film-list-item">
        <div class="film-card" data-id="${movie.id}">        
          <img class="film-cover" src="${baseURL}${posterSize}${movie.poster_path}" alt="${movie.original_title}" loading="lazy" />
          <p class="film-title">${movie.original_title}</p>
          <p class="film-info"> | ${movie.relaseYear}</p>
        </div>
      </li>`;
    });
  });
}

btnQueue.addEventListener("click", renderQueueMovies);
