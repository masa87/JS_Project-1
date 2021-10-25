// const qs = (sel) => document.querySelector(sel);

const openModalCard = qs("[data-modal-open]");
const closeModalCard = qs("[data-modal-close]");
const modall = qs("[data-backdropp]");
console.log(openModalCard);
console.log(closeModalCard);

const toggleModal = () => {
    modall.classList.toggle("is-hidden");
};

openModalCard.addEventListener("click", toggleModal);
closeModalCard.addEventListener("click", toggleModal);


//close modal with [esc] btn
document.onkeydown = function (e) {
  if (e.key === 'Escape') {
     modall.classList.add('is-hidden')
  }
};