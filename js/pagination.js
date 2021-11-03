import { setPopularMovie, searchBoxValue } from "./initFunctions.js";
import { totalPages } from "./renderMovies.js";

const qs = (selector) => document.querySelector(selector);
const inputTitle = qs(".header-input");
const filmList = qs(".film-list");
const paginationContainer = qs(".pagination");

let page = 1;
let setFirstPage = 1;

function setPage(value) {
  page = value;
}

let bull = `<li class="page-item disabled hide" style="font-size:10px">
              <a class="page-link" href="#">&bull;&bull;&bull;</a>      
            </li>`;
// deklaracja tablicy stron do zmapowania
let listPagesStart = [`${page}`, `${page + 1}`, `${page + 2}`];
let setActive;
function renderPagination() {
  let firstPage = ` <li class="page-item hide page-click" data=${setFirstPage}>
                    <a class="page-link" href="#">${setFirstPage}</a>      
                  </li>`;
  let arrowLeft = ` <li class="page-item page-click" data=${page - 1}>
                  <a class="page-link arrow" href="#">
                    <img src="./images/pagination/arrow-left.svg" class="page-icon" width="16" height="16" alt="page icon"/>
                  </a>
                </li>`;
  let arrowRight = ` <li class="page-item page-click" data=${page + 1}>
                  <a class="page-link arrow" href="#">
                    <img src="./images/pagination/arrow-right.svg" class="page-icon" width="16" height="16" alt="page icon"/>
                  </a>
                </li>`;
  let markupStart = null;
  // deklaracja li / lastPage
  let lastPage = `<li class="page-item page-click hide" data=${totalPages}>
                  <a class="page-link" href="#">${totalPages}</a>
                </li>`;

  const markupFn = () => {
    markupStart = listPagesStart.map((x) => {
      return `<li class="page-item page-click" data=${x}>
      <a class="page-link" href="#">${x}</a>
      </li>`;
    });
  };

  // warunki wyświetlania
  if (totalPages < 2) {
    listPagesStart = [`${page}`];
    markupFn();
    paginationContainer.innerHTML = `
    ${markupStart.join(" ")}
    `;
  } else if (totalPages > 1 && totalPages <= 3) {
    listPagesStart = [`${page}`, `${page + 1}`, `${page + 2}`];
    markupFn();
    paginationContainer.innerHTML = `
    ${markupStart.join(" ")}${arrowRight}
    `;
  } else if (page == totalPages) {
    listPagesStart = [`${page - 2}`, `${page - 1}`, `${page}`];
    markupFn();
    paginationContainer.innerHTML = `
    ${arrowLeft}${firstPage}${bull}${markupStart.join(" ")}
    `;
  } else if (page == totalPages - 1) {
    listPagesStart = [`${page - 1}`, `${page}`, `${page + 1}`];
    markupFn();
    paginationContainer.innerHTML = `
    ${arrowLeft}${firstPage}${bull}${markupStart.join(" ")}${arrowRight}
    `;
  } else if (page == totalPages - 2) {
    listPagesStart = [`${page - 1}`, `${page}`, `${page + 1}`, `${page + 2}`];
    markupFn();
    paginationContainer.innerHTML = `
    ${arrowLeft}${firstPage}${bull}${markupStart.join(" ")}${arrowRight}
    `;
  } else if (page == totalPages - 3) {
    listPagesStart = [
      `${page - 1}`,
      `${page}`,
      `${page + 1}`,
      `${page + 2}`,
      `${page + 3}`,
    ];
    markupFn();
    paginationContainer.innerHTML = `
    ${arrowLeft}${firstPage}${bull}${markupStart.join(" ")}${arrowRight}
    `;
  } else if (page === 1) {
    listPagesStart = [`${page}`, `${page + 1}`, `${page + 2}`];
    markupFn();
    paginationContainer.innerHTML = `
    ${markupStart.join(" ")}${bull}${lastPage}${arrowRight}
    `;
  } else if (page > 1 && page <= 2) {
    listPagesStart = [`${page - 1}`, `${page}`, `${page + 1}`];
    markupFn();
    paginationContainer.innerHTML = `
    ${arrowLeft}${markupStart.join(" ")}${bull}${lastPage}${arrowRight}
    `;
  } else if (page === 4) {
    listPagesStart = [
      `${page - 3}`,
      `${page - 2}`,
      `${page - 1}`,
      `${page}`,
      `${page + 1}`,
    ];
    markupFn();
    paginationContainer.innerHTML = `
    ${arrowLeft}${markupStart.join(" ")}${bull}${lastPage}${arrowRight}
    `;
  } else if (page < 4) {
    listPagesStart = [`${page - 2}`, `${page - 1}`, `${page}`, `${page + 1}`];
    markupFn();
    paginationContainer.innerHTML = `
    ${arrowLeft}${markupStart.join(" ")}${bull}${lastPage}${arrowRight}
    `;
  } else if (page >= 4) {
    listPagesStart = [
      `${page - 2}`,
      `${page - 1}`,
      `${page}`,
      `${page + 1}`,
      `${page + 2}`,
    ];
    markupFn();
    paginationContainer.innerHTML = `
    ${arrowLeft}${firstPage}${bull}${markupStart.join(
      " "
    )}${bull}${lastPage}${arrowRight}
    `;
  }
  setActive = document.querySelector(`[data="${page}"]`);
  setActive.classList.add("active");
}
let currentPageNr = 0;

const nextPagePagination = (e) => {
  currentPageNr = e.target.closest(".page-click");
  if (!currentPageNr) {
    return;
  }
  filmList.innerHTML = "";
  page = parseInt(currentPageNr.getAttribute("data"));
  if (page === 1) {
    renderPagination();
  }
  if (inputTitle.value === "") {
    setPopularMovie();
  } else {
    searchBoxValue();
  }
};

export { renderPagination, nextPagePagination, page, setPage };
