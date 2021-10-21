const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmGallery = qs(".film-gallery");

const baseURL = "http://image.tmdb.org/t/p/";
const posterSize = "w500";

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

const searchBoxValue = () => {
  // console.log(inputTitle.value);
  fetchMovie(inputTitle.value)
    .then((movie) => {
      console.log(movie);
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
};

const setPopularMovie = () => {
  fetchPopularMovie()
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
};
setPopularMovie();

function renderMovies(movie) {
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
      filmGallery.innerHTML += `
      <ul class="film-list">
        <div class="film-card">        
          <img class="film-cover" src="${baseURL}${posterSize}${poster_path}" alt="${original_title}" loading="lazy" />
          <p class="film-title">${original_title}</p>
          <p class="film-info"> | ${relaseYear}</p>
        </div>
      </ul>`;
    }
  );
}

const newSearch = (e) => {
  e.preventDefault();

  if (inputTitle.value === "") {
    setPopularMovie();
  }

  filmGallery.innerHTML = "";
  searchBoxValue();
};

inputTitle.addEventListener("change", newSearch);
