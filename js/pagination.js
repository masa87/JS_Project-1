import { setPopularMovie, searchBoxValue } from "./initFunctions.js";
import { totalPages } from "./renderMovies.js";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");
const paginationContainer = qs(".pagination");
const paginationitem = document.getElementsByClassName("page-item");

let movieId = [];
let page = 1;
let currentPage = 1;
let tempInputValue = "";
let setActive = null;

function setPage(value) {
  page = value;
}

function renderPagination() {
  if (page <= 1) {
    console.log(page);
    for (let i = page; i < totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        // console.log(page);
        paginationContainer.innerHTML = `
        <li class="page-item disabled page-item-previous">
          <a class="page-link arrow" href="#" tabindex="-1">
            <img
              src="./images/pagination/arrow-left.svg"
              class="page-icon"
              width="16"
              height="16"
              alt="page icon"
            />
          </a>
        </li>        
        <li class="page-item active" data=1>
          <a class="page-link" href="#">1</a>      
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
         <li class="page-item disabled hide" style="font-size:10px">
          <a class="page-link" href="#">&bull;&bull;&bull;</a>      
        </li>
        <li class="page-item hide" data=${totalPages}>
          <a class="page-link" href="#">${totalPages}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link arrow" href="#">
            <img
              src="./images/pagination/arrow-right.svg"
              class="page-icon"
              width="16"
              height="16"
              alt="page icon"
            />
          </a>
        </li>
        `;
      }
    }
  } else if (page === totalPages) {
    console.log(page);
    for (let i = page; i <= totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        paginationContainer.innerHTML = `
        <li class="page-item page-item-previous" data=${page - 1}>
          <a class="page-link arrow" href="#" tabindex="-1">
            <img
              src="./images/pagination/arrow-left.svg"
              class="page-icon"
              width="16"
              height="16"
              alt="page icon"
            />
          </a>
        </li>
        <li class="page-item hide" data=1>
          <a class="page-link" href="#">1</a>      
        </li>
         <li class="page-item disabled hide" style="font-size:10px">
          <a class="page-link" href="#">&bull;&bull;&bull;</a>      
        </li>
        <li class="page-item" data=${page - 2}>
          <a class="page-link" href="#">${page - 2}</a>      
        </li>
        <li class="page-item" data=${page - 1}>
          <a class="page-link" href="#">${page + -1}</a>      
        </li>
        <li class="page-item" data=${page}>
          <a class="page-link" href="#">${page}</a>      
        </li>
        <li class="page-item disabled"  data=${page + 1}>
          <a class="page-link arrow" href="#">
            <img
              src="./images/pagination/arrow-right.svg"
              class="page-icon"
              width="16"
              height="16"
              alt="page icon"
            />
          </a>
        </li>
        
        `;
      }
    }
  } else if (page > 1 && page <= totalPages - 1) {
    for (let i = page; i < totalPages; i++) {
      for (let j = page - 1; j < page + 3; j++) {
        paginationContainer.innerHTML = `
        <li class="page-item page-item-previous" data=${page - 1}>
          <a class="page-link arrow" href="#" tabindex="-1">
            <img
              src="./images/pagination/arrow-left.svg"
              class="page-icon"
              width="16"
              height="16"
              alt="page icon"
            />
          </a>
        </li>
        <li class="page-item hide" data=1>
          <a class="page-link" href="#">1</a>      
        </li>
         <li class="page-item disabled hide" style="font-size:10px">
          <a class="page-link" href="#">&bull;&bull;&bull;</a>      
        </li>
        <li class="page-item" data=${page - 2}>
          <a class="page-link" href="#">${page - 2}</a>      
        </li>
        <li class="page-item" data=${page - 1}>
          <a class="page-link" href="#">${page + -1}</a>      
        </li>
        <li class="page-item" data=${page}>
          <a class="page-link" href="#">${page}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link" href="#">${page + 1}</a>      
        </li>
         <li class="page-item disabled hide" style="font-size:10px">
          <a class="page-link" href="#">&bull;&bull;&bull;</a>      
        </li>
        <li class="page-item hide" data=${totalPages}>
          <a class="page-link" href="#">${totalPages}</a>      
        </li>
        <li class="page-item" data=${page + 1}>
          <a class="page-link arrow" href="#">
            <img
              src="./images/pagination/arrow-right.svg"
              class="page-icon"
              width="16"
              height="16"
              alt="page icon"
            />
          </a>
        </li>
        `;
      }
    }
  }
  setActive = document.querySelector(`[data="${page}"]`);
  // setPage(setActive);
  setActive.classList.add("active");
  console.log(page);
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
