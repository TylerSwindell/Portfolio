"use-strict";

const navButton = document.querySelector(".hamburger-icon");
const exitButton = document.querySelector(".exit-icon");
const modalOverlay = document.getElementById("modal-overlay");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = document.querySelectorAll("#mobile-nav>ul>li");

console.log("Script Loaded");

const toggleOverlay = () => {
  modalOverlay.classList.toggle("show");
  modalOverlay.classList.toggle("visible");
  modalOverlay.classList.toggle("hidden");

  if (modalOverlay.classList.contains("show")) {
    modalOverlay.style.marginTop = `${window.scrollY}px`;
    disableScroll();
  } else enableScroll();
};

const toggleNav = () => {
  toggleOverlay();
  mobileNav.classList.toggle("closed-nav");
};

navButton.addEventListener("click", toggleNav);
exitButton.addEventListener("click", toggleNav);
mobileNavLinks.forEach((item) => item.addEventListener("click", toggleNav));

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
