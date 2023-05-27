"use-strict";

const navButton = document.querySelector(".hamburger-icon");
const exitButton = document.querySelector(".exit-icon");
const modalOverlay = document.getElementById("modal-overlay");
const expandedNav = document.getElementById("expanded-nav");
const expandedNavLinks = document.querySelectorAll("#expanded-nav>ul>li");

const toggleOverlay = () => {
  if (modalOverlay.classList.contains("hidden")) {
    modalOverlay.style.marginTop = `${window.scrollY}px`;
    modalOverlay.classList.add("visible");
    modalOverlay.classList.remove("hidden");
    disableScroll();
  } else {
    modalOverlay.classList.add("hidden");
    modalOverlay.classList.remove("visible");
    enableScroll();
  }
};

const toggleNav = () => {
  toggleOverlay();
  if (expandedNav.classList.contains("hidden")) {
    expandedNav.style.marginTop = `${window.scrollY}px`;
    expandedNav.classList.add("visible");
    expandedNav.classList.remove("hidden");
  } else {
    expandedNav.classList.add("hidden");
    expandedNav.classList.remove("visible");
  }
};

navButton.addEventListener("click", toggleNav);
exitButton.addEventListener("click", toggleNav);
expandedNavLinks.forEach((item) => {
  item.addEventListener("click", toggleNav);
});

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
