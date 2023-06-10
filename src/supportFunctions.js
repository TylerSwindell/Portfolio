import { developmentMode } from "./config.js";

const modalOverlay = document.getElementById("modal-overlay");
const mainNav = document.getElementById("main-navigation");

// Support Functions
export const toggleOverlay = (noScroll = true) => {
  const modalIsVisible = modalOverlay.classList.contains("show");

  modalOverlay.classList.toggle("show");
  modalOverlay.classList.toggle("visible");
  modalOverlay.classList.toggle("hidden");

  if (!noScroll) return;

  if (!modalIsVisible) {
    // Moves modal overlay down to current screen position
    modalOverlay.style.marginTop = `${window.scrollY}px`;
    disableScroll();
  } else enableScroll();
};

export const toggleNav = () => {
  const modalIsHidden = modalOverlay.classList.contains("hidden");

  // Do not toggle nav if site width is larger than a mobile device
  if (window.innerWidth > 769) return;

  toggleOverlay();

  mainNav.classList.toggle("closed-nav");

  if (modalIsHidden) {
    mainNav.classList.toggle("hidden");
  } else
    setTimeout(() => {
      mainNav.classList.toggle("hidden");
    }, 300);
};

export function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

export function enableScroll() {
  window.onscroll = function () {};
}

export const devLog = (msg) => {
  if (developmentMode) console.log(msg);
};
