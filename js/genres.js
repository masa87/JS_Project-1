import { fetchGenres } from "./fetchApi.js";

let movieId = [];

function searchGenres() {
  fetchGenres().then((id) => {
    return (movieId = id.genres);
  });
}

export { searchGenres, movieId };
