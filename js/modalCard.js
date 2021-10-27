const openModalCard = qs("[data-modal-open]");
const closeModalCard = qs("[data-modal-close]");
const modall = qs("[data-backdropp]");
const template = document.querySelector('#film-template')


let targetCard = null;
let filmId = null;
//funkcja do renderowania karty filmu w oknie modalnym, 
//html w gravisach, do uzupełnienia za pomocą ${cośtam} 
//żeby wyciągnąc dane z API i je umieścić w templatce
//za pomocą ID wyciągniętego w następnej funkcji
const renderSingleMovieCard = (id) => {
  template.innerHTML = `
  <div class="modal__poster-tmp js-poster">
            <!-- Poster do okna modalnego  -->
    <div class="modal__poster">
        <img class="modal__poster-img" src="#" alt="title of poster" />
    </div>
</div>
<div class="modal__info-container">
    <div class="js-modal">
              <!-- Szablon karty okno modalne -->
        <div class="modal__descr">
            <h2 class="modal__descr-title">Title</h2>
            <div class="list modal__descr-list">

                <ul class="list modal__descr-sublist">
                    <li class="modal__descr-details modal__descr-details--indent">Vote / Votes</li>
                    <li class="modal__descr-item">
                        <span class="modal__descr-vote">Rating</span>
                        <span class="modal__descr-separator">/</span>
                        <span class="modal__descr-votes">Votes</span>
                    </li>
                </ul>

                <ul class="list modal__descr-sublist">
                    <li class="modal__descr-details modal__descr-details--indent">Popularity</li>
                    <li class="modal__descr-item">1163.098</li>
                </ul>

                <ul class="list modal__descr-sublist">
                    <li class="modal__descr-details modal__descr-details--indent">Original Title</li>
                    <li class="modal__descr-item modal__descr-item--title">title</li>
                </ul>

                <ul class="list modal__descr-sublist">
                    <li class="modal__descr-details modal__descr-details--indent">Genre</li>
                    <li class="modal__descr-item">Żenres</li>
                </li>
                </ul>

            </div>
            <h3 class="modal__descr-subtitle">ABOUT</h3>
            <p class="modal__descr-info">About</p>
        </div>

        <div class="modal__buttons">
            <button  type="submit" class="js-modal-btn-watched modal__buttons-watched" id="#">
                ADD TO WATCHED
            </button>
            <button type="submit" class="js-modal-btn-queue modal__buttons-queue" id="#">
                ADD TO QUEUE
            </button>
        </div>
    </div>
</div>
  `
};
//tutaj funkcja pozwala na otwarcie odpowiedniego filmu, klikając
//na jego kartę (event jest na całym divie), wyciąga od razu 
//ID tego filmu, żeby mozna było je przekazać do funkcji renderującej
const openModalMovie = (e) => {
  template.innerHTML = '';
  targetCard = e.target.closest('.film-card')
  if (!targetCard) {
    return;
  }
    modall.classList.remove("is-hidden");
    filmId = targetCard.getAttribute("data-id");
    console.log(filmId);
    renderSingleMovieCard(filmId);
};
//zamykanie okna modalnego "z krzyżyka"
const closeModalMovie = () => {
  modall.classList.add("is-hidden")
}
//zamykanie modala za pomocą [esc]
document.onkeydown = function (e) {
  if (e.key === "Escape") {
    modall.classList.add("is-hidden");
  }
};


openModalCard.addEventListener("click", openModalMovie);
closeModalCard.addEventListener("click", closeModalMovie);

