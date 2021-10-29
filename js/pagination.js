import { setPopularMovie, searchBoxValue } from "./initFunctions";
import { totalPages } from "./renderMovies";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");
const paginationContainer = qs(".pagination");
const paginationitem = document.getElementsByClassName("page-item");

let movieId = [];
let page = 1;
// let totalPages = 0;
let currentPage = 1;
let tempInputValue = "";

function setPage(value) {
  page = value;
}

function renderPagination() {
  if (page <= 1) {
    for (let i = page; i < totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        paginationContainer.innerHTML = `
        <li class="page-item disabled page-item-previous">
          <a class="page-link" href="#" tabindex="-1">
            <svg class="page-icon" width="16" height="16">
              <use href="./images/pagination/arrows.svg#icon-arrow-left"></use>
            </svg>
          </a>
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
        <li class="page-item disabled hide">
          <a class="page-link" href="#">...</a>      
        </li>
        <li class="page-item hide" data=${totalPages}>
          <a class="page-link" href="#">${totalPages}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">
            <svg class="page-icon" width="16" height="16">
                <use href="./images/pagination/arrows.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
        `;
      }
    }
  } else {
    for (let i = page; i < totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        paginationContainer.innerHTML = `
        <li class="page-item page-item-previous" data=${page - 1}>
          <a class="page-link" href="#" tabindex="-1">
            <svg class="page-icon" width="16" height="16">
              <use href="./images/pagination/arrows.svg#icon-arrow-left"></use>
            </svg>
          </a>
        </li>
        <li class="page-item hide" data=1>
          <a class="page-link" href="#">1<span class="sr-only">(current)</span></a>      
        </li>
        <li class="page-item disabled hide">
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
        <li class="page-item hide disabled">
          <a class="page-link" href="#">...</a>      
        </li>
        <li class="page-item hide" data=${totalPages}>
          <a class="page-link" href="#">${totalPages}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">
            <svg class="page-icon" width="16" height="16">
              <use href="./images/pagination/arrows.svg#icon-arrow-right"></use>
            </svg>
          </a>
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

export { renderPagination, nextPagePagination, page, setPage };
