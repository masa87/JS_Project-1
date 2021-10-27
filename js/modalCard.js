const openModalCard = qs("[data-modal-open]");
const closeModalCard = qs("[data-modal-close]");
const modall = qs("[data-backdropp]");
console.log(openModalCard);
console.log(closeModalCard);

const toggleModalMovie = () => {
    modall.classList.toggle("is-hidden");
};

openModalCard.addEventListener("click", toggleModalMovie);
closeModalCard.addEventListener("click", toggleModalMovie);


//close modal with [esc] btn
document.onkeydown = function (e) {
  if (e.key === 'Escape') {
     modall.classList.add('is-hidden')
  }
};