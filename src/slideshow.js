import { projectItemList as projects } from "./config.js";

const slideshowImageFolder = "assets/slideshow/";

// Set the index of the current image
let currentIndex = 0;

// Function to display the current image
const updateSlide = () => {
  const imgElement = document.getElementById("project-slideshow-img");
  const titleElement = document.getElementById("project-slideshow-link");
  const descElement = document.querySelector(
    ".project-slideshow-content-lower>p"
  );

  imgElement.style.backgroundImage = `url(${slideshowImageFolder}/${projects[currentIndex].image})`;

  titleElement.innerText = projects[currentIndex].name;
  titleElement.href = projects[currentIndex].url;

  switch (projects[currentIndex].textColor) {
    case "light":
      descElement.style.color = "var(--light-sf)";
      break;
    case "dark":
      descElement.style.color = "var(--darker-sf)";
      break;
    default:
  }
  descElement.innerHTML = `
    <span style="font-weight:var(--semibold-text-weight);color:var(--light-sf);">
      ${projects[currentIndex].desc}
    </span>
    <br>
    <br>
    <br>
    <span style="color:var(--light-sf);">
    ${projects[currentIndex].tech}
    </span>
    `;
};

// Function to rotate to the next image
const nextImage = () => {
  currentIndex = (currentIndex + 1) % projects.length;
  updateSlide();
};

// Function to rotate to the previous image
const previousImage = () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateSlide();
};

const initializeSlideshow = () => {
  // Initial display of the first image
  updateSlide();

  // Add event listeners to the next and previous buttons
  document.getElementById("next-btn").addEventListener("click", nextImage);
  document
    .getElementById("previous-btn")
    .addEventListener("click", previousImage);
};

export default initializeSlideshow;
