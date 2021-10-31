import { page } from "./pagination.js";
import { spinner } from "./spinner.js";

const qs = (selector) => document.querySelector(selector);
// const inputTitle = qs(".header-input");
// const filmList = qs(".film-list");
// const paginationContainer = qs(".pagination");
// const paginationitem = document.getElementsByClassName("page-item");

// let movieId = [];
// let page = 1;
// let totalPages = 0;
// let currentPage = 1;
// let tempInputValue = "";

// ------------ wyszukiwanie filmów po tytule
async function fetchMovie(title, page) {
  spinner.spin(body);
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
  spinner.spin(body);
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

export { fetchGenres, fetchMovie, fetchPopularMovie };
