import { fetchGenres } from "./fetchApi";

let movieId = [];

function searchGenres() {
  fetchGenres().then((id) => {
    return (movieId = id.genres);
  });
}

export { searchGenres, movieId };
