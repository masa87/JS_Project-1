import { fetchById } from "./fetchApi.js";
import * as DOM_ELEMENTS from "./VARs";

let idQueue = [];
let key = null;

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return (idQueue =
      serializedState === null ? undefined : JSON.parse(serializedState));
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

// -------------rendeMovies

function renderQueueMovies() {
  DOM_ELEMENTS.filmList.innerHTML = "";
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
        let relaseYear = release_date?.substring(0, 4) ?? "";
        DOM_ELEMENTS.filmList.innerHTML += `
      <li class="film-list-item">
        <div class="film-card" data-id="${id}">        
          <img class="film-cover" src="${DOM_ELEMENTS.BASE_URL}${DOM_ELEMENTS.POSTER_SIZE}${poster_path}" alt="${original_title}" loading="lazy" />
          <p class="film-title">${original_title}</p>
          <p class="film-info">${getGenres} | ${relaseYear} <span class="modal__descr-vote"> ${vote_average}</span></p>
        </div>
      </li>`;
      }
    );
  });
}

function startMyLibPage() {
  DOM_ELEMENTS.btnQueue.classList.add("is-chosen");
  DOM_ELEMENTS.btnWatched.classList.remove("is-chosen");
  key = DOM_ELEMENTS.KEY_QUEUE;
  renderQueueMovies();
}

startMyLibPage();

// -----------------addEventListeners
DOM_ELEMENTS.btnQueue.addEventListener("click", () => {
  DOM_ELEMENTS.btnQueue.classList.add("is-chosen");
  DOM_ELEMENTS.btnWatched.classList.remove("is-chosen");
  key = DOM_ELEMENTS.KEY_QUEUE;
  renderQueueMovies();
});
DOM_ELEMENTS.btnWatched.addEventListener("click", () => {
  DOM_ELEMENTS.btnWatched.classList.add("is-chosen");
  DOM_ELEMENTS.btnQueue.classList.remove("is-chosen");
  key = DOM_ELEMENTS.KEY_WATCHED;
  // console.log(key);
  renderQueueMovies();
});

export { load };
