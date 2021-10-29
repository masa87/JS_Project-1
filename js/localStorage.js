const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const log = (l) => console.log(l);
const qs = (el) => document.querySelector(el);
const backdrop = qs(".js-open-modal");
const KEY_WATCHED = "watched-movies";
const KEY_QUEUE = "queue-movies";

let watched = [];
let queue = [];
let btnTarget = null;

// console.log(queue[1]);

const addToLocalStorage = (e) => {
  btnTarget = e.target.closest(".btn-modal");
  if (!btnTarget) {
    return;
  }
  let btnTargetId = btnTarget.getAttribute("data-id");
  let btnTargetType = btnTarget.getAttribute("data-btn");
  //log(btnTargetType);
  //log(btnTargetId);
  if (btnTargetType === "watched") {
    if (load(KEY_WATCHED) !== undefined) {
      watched = load(KEY_WATCHED);
    }
    watched.push(btnTargetId);
    watched = watched.filter(
      (movie, index, array) => array.indexOf(movie) === index
    );
    //log(watched);
    save(KEY_WATCHED, watched);
  } else if (btnTargetType === "queue") {
    if (load(KEY_QUEUE) !== undefined) {
      queue = load(KEY_QUEUE);
    }
    queue.push(btnTargetId);
    queue = queue.filter(
      (movie, index, array) => array.indexOf(movie) === index
    );
    log(queue);
    save(KEY_QUEUE, queue);
  }
};

backdrop.addEventListener("click", addToLocalStorage);
