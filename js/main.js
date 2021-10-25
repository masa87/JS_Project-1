const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");
const paginationContainer = qs(".pagination");
const paginationitem = document.getElementsByClassName("page-item");

let movieId = [];
let page = 1;
let totalPages = 0;
let currentPage = 1;
let tempInputValue = "";

// ------------ wyszukiwanie filmów po tytule
async function fetchMovie(title, page) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b8c69e73ca2b06d4109ce06d6df842ad&query=${title}&page=${page}`
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
async function fetchPopularMovie(page) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=b8c69e73ca2b06d4109ce06d6df842ad&page=${page}`
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

function renderMovies(movie) {
  totalPages = movie.total_pages;

  renderPagination();
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
  fetchPopularMovie(page)
    .then((movie) => {
      renderMovies(movie);
    })
    .catch((err) => {});
}

//---------szukajka
function searchBoxValue() {
  if (inputTitle.value !== tempInputValue) {
    page = 1;
  }
  fetchMovie(inputTitle.value, page)
    .then((movie) => {
      tempInputValue = inputTitle.value;
      renderMovies(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}

setPopularMovie();

// -------------- paginacja

function renderPagination() {
  if (page <= 1) {
    for (let i = page; i < totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        paginationContainer.innerHTML = `
        <li class="page-item disabled page-item-previous">
          <a class="page-link" href="#" tabindex="-1"><-</a>
        </li>        
        <li class="page-item active" data=1>
          <a class="page-link" href="#">1<span class="sr-only">(current)</span></a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">${page + 1}</a>      
        </li>
        <li class="page-item" data=${page + 2}>
          <a class="page-link" href="#">${page + 2}</a>      
        </li>
        <li class="page-item" data=${page + 3}>
          <a class="page-link" href="#">${page + 3}</a>      
        </li>
        <li class="page-item" data=${page + 4}>
          <a class="page-link" href="#">${page + 4}</a>      
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">...</a>      
        </li>
        <li class="page-item" data=${totalPages}>
          <a class="page-link" href="#">${totalPages}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">-></a>
        </li>
        `;
      }
    }
  } else {
    for (let i = page; i < totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        paginationContainer.innerHTML = `
        <li class="page-item page-item-previous" data=${page - 1}>
          <a class="page-link" href="#" tabindex="-1"><-</a>
        </li>
        <li class="page-item" data=1>
          <a class="page-link" href="#">1<span class="sr-only">(current)</span></a>      
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">...</a>      
        </li>
        <li class="page-item" data=${page - 2}>
          <a class="page-link" href="#">${
            page - 2
          }<span class="sr-only">(current)</span></a>      
        </li>
        <li class="page-item" data=${page - 1}>
          <a class="page-link" href="#">${page + -1}</a>      
        </li>
        <li class="page-item active" data=${page}>
          <a class="page-link" href="#">${page}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">${page + 1}</a>      
        </li>
        <li class="page-item" data=${page + 2}>
          <a class="page-link" href="#">${page + 2}</a>      
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">...</a>      
        </li>
        <li class="page-item" data=${totalPages}>
          <a class="page-link" href="#">${totalPages}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">-></a>
        </li>
        `;
      }
    }
  }
}

let currentPageNr = 0;

const nextPagePagination = (e) => {
  filmList.innerHTML = "";
  currentPageNr = e.target.closest("li");
  page = parseInt(currentPageNr.getAttribute("data"));
  console.log(page);
  if (inputTitle.value === "") {
    setPopularMovie();
  }
  searchBoxValue();
};

// ---------------addEventListener

inputTitle.addEventListener("change", (e) => {
  e.preventDefault();
  if (inputTitle.value === "") {
    setPopularMovie();
  }
  filmList.innerHTML = "";
  searchBoxValue();
});

paginationContainer.addEventListener("click", nextPagePagination);
