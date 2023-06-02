import { projectItemList } from "./config.js";

// Insert Project Details
export function insertProjectItems() {
  const projectItemElementsList = projectItemList.map((json) => {
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
    anchor.href = json.url;

    // Create the heading element
    const heading = document.createElement("h3");
    heading.textContent = json.name;

    // Append the heading element to the anchor element
    anchor.appendChild(heading);

    // Create the paragraph element
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${json.desc} <br><br> ${json.tech}`;

    // Append the anchor element and paragraph element to the inner div element
    projectItemContent.appendChild(heading);
    projectItemContent.appendChild(paragraph);

    // Append the inner div element to the outer div element
    anchor.appendChild(projectItemContent);
    projectItem.appendChild(anchor);

    return projectItem;
  });

  // Insert the outer div element into the DOM
  projectItemElementsList.forEach((ele) =>
    document
      .getElementById("projects")
      .querySelector(".content")
      .appendChild(ele)
  );
}
