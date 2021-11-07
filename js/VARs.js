const qs = (el) => document.querySelector(el);

const filmList = qs(".film-list");
const btnQueue = qs(".btn__queue");
const btnWatched = qs(".btn__watched");
const errorSearch = qs(".error");
const inputTitle = qs(".header-input");
const backdrop = qs(".js-open-modal");

const KEY_QUEUE = "queue-movies";
const KEY_WATCHED = "watched-movies";
const BASE_URL = "http://image.tmdb.org/t/p/";
const POSTER_SIZE = "w500";

export {
  filmList,
  btnQueue,
  btnWatched,
  KEY_QUEUE,
  KEY_WATCHED,
  BASE_URL,
  POSTER_SIZE,
  errorSearch,
  inputTitle,
  backdrop,
};
