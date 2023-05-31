"use-strict";

const navButton = document.querySelector(".hamburger-icon");
const exitButton = document.querySelector(".exit-icon");
const modalOverlay = document.getElementById("modal-overlay");
const mainNav = document.getElementById("main-navigation");
const mainNavLinks = document.querySelectorAll("#main-nav>ul>li");

console.log("Script Loaded");

const toggleOverlay = (noScroll = true) => {
  const modalIsVisible = modalOverlay.classList.contains("show");

  modalOverlay.classList.toggle("show");
  modalOverlay.classList.toggle("visible");
  modalOverlay.classList.toggle("hidden");

  if (!noScroll) return;

  if (!modalIsVisible) {
    // Moves modal overlay down to current screen position

    disableScroll();
  } else enableScroll();
};

const toggleNav = () => {
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

navButton.addEventListener("click", toggleNav);
exitButton.addEventListener("click", toggleNav);
mainNavLinks.forEach((item) => item.addEventListener("click", toggleNav));

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Escape":
      toggleNav();
      break;
    default:
      console.log(e);
      break;
  }
});

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  (scrollLeft = window.scrollX || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
