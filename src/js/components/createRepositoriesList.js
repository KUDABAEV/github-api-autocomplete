import { createRepositoriesTitle } from "./createRepositoriesTitle.js";

export const createRepositoriesList = () => {
  const repositoriesTitle = createRepositoriesTitle();

  const repositories = document.createElement("div");
  const repositoriesList = document.createElement("ul");
  repositoriesList.classList.add("repositories-list");

  repositories.classList.add("hidden");
  repositories.appendChild(repositoriesTitle);
  repositories.appendChild(repositoriesList);

  return repositories;
};
