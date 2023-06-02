"use-strict";
import { toggleNav } from "./supportFunctions.js";
import { insertProjectItems } from "./templateFunctions.js";

// Query Selectors
const navButton = document.querySelector(".hamburger-icon");
const exitButton = document.querySelector(".exit-icon");
const mainNavLinks = document.querySelectorAll("#main-navigation>ul>li");

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

// Main Function
(() => {
  insertProjectItems();
})();

console.log("Script Loaded");
