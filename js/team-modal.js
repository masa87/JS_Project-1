const qs = (sel) => document.querySelector(sel);

const openModal = qs("[data-open-team]");
const closeModal = qs("[data-close-team]");
const modal = qs("[data-backdrop]");
console.log(openModal);
console.log(closeModal);

const toggleModalTeam = () => {
  modal.classList.toggle("team-is-hidden");
};

openModal.addEventListener("click", toggleModalTeam);
closeModal.addEventListener("click", toggleModalTeam);


//close modal with [esc] btn
document.onkeydown = function (e) {
  if (e.key === 'Escape') {
     modal.classList.add('team-is-hidden')
  }
};