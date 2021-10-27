// import { Spinner } from "spin.js/spin";

var opts = {
  lines: 18, // The number of lines to draw
  length: 35, // The length of each line
  width: 5, // The line thickness
  radius: 30, // The radius of the inner circle
  scale: 0.5, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 5, // The rotation offset
  animation: "spinner-line-fade-more", // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: "#111111", // CSS color or array of colors
  fadeColor: "#ffffff", // CSS color or array of colors
  top: "50%", // Top position relative to parent
  left: "50%", // Left position relative to parent
  shadow: "0 0 1px transparent", // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: "spinner", // The CSS class to assign to the spinner
  position: "fixed", // Element positioning
};

export const body = document.querySelector("#body");
export const spinner = new Spinner(opts);

//const search = document.querySelector(".header-icon-search");
//spinner odpala się na eventListener na click,
//zamyka się na [esc] trzeba zaimplementować w funkcję async
// podzielić na moduły, wywalić poniższe i powinno działać z powyższego
// const spiner = () => {
//     let szpinak = new Spinner(opts).spin(body);
//     document.onkeydown = function (e) {
//         if (e.key === 'Escape') {
//            szpinak.stop();
//         }
//       };
//     }
// console.log(search);
// console.log(body);
// search.addEventListener('click', spiner);
