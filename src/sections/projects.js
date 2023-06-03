import { projectItemList } from "../config.js";
import { appendListToElement } from "../templateFunctions.js";

const createProjectItem = (projectObject) => {
  // Create the outer div element
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");

  // Create the inner div element
  const projectItemContent = document.createElement("div");
  projectItemContent.classList.add("project-item-content");
  // projectItemContent.style.backgroundImage =
  //   "url(assets/imgs/me_500x500.png)";

  // Create the anchor element
  const anchor = document.createElement("a");
  anchor.target = "_blank";
  anchor.href = projectObject.url;

  // Create the heading element
  const heading = document.createElement("h3");
  heading.textContent = projectObject.name;

  // Append the heading element to the anchor element
  anchor.appendChild(heading);

  // Create the paragraph element
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `${projectObject.desc} <br><br> ${projectObject.tech}`;

  // Append the anchor element and paragraph element to the inner div element
  projectItemContent.appendChild(heading);
  projectItemContent.appendChild(paragraph);

  // Append the inner div element to the outer div element
  anchor.appendChild(projectItemContent);
  projectItem.appendChild(anchor);

  return projectItem;
};

export const renderProjectSection = () => {
  const projectItemElementsList = projectItemList.map((projectObject) =>
    createProjectItem(projectObject)
  );

  // Insert the outer div element into the DOM
  appendListToElement(
    projectItemElementsList,
    document.getElementById("projects").querySelector(".content")
  );
};
