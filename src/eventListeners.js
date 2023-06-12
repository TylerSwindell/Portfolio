import { devLog, toggleNav } from "./supportFunctions.js";

// Query Selectors
const navButton = document.querySelector(".hamburger-icon");
const exitButton = document.querySelector(".exit-icon");
const mainNavLinks = document.querySelectorAll("#main-navigation>ul>li");

const initializeEventListeners = () => {
  // Event Listeners
  navButton.addEventListener("click", toggleNav);
  exitButton.addEventListener("click", toggleNav);
  mainNavLinks.forEach((item) => item.addEventListener("click", toggleNav));

  // Keydown events on site
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
  devLog("Event Listeners Loaded");
};

export default initializeEventListeners;
