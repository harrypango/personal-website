const desc = document.querySelector(".description");
const desc1 = document.querySelector(".description-1");
const desc2 = document.querySelector(".description-2");
const desc3 = document.querySelector(".description-3");
const desc4 = document.querySelector(".description-4");

const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");
const project4 = document.querySelector(".project-4");

const projects = [project1, project2, project3, project4]; // Add more projects here
const descriptions = [desc, desc1, desc2, desc3, desc4]; // Add more descriptions here

projects.forEach((project, index) => {
  project.addEventListener("click", () => {
    descriptions.forEach((description, i) => {
      if (i === index + 1) {
        if (description.style.display === "block") {
          desc.style.display = "block"; // Show the default description
          description.style.display = "none"; // Hide the current description
        } else {
          description.style.display = "block"; // Show the clicked description
        }
      } else {
        description.style.display = "none"; // Hide other descriptions
      }
    });
  });
});
