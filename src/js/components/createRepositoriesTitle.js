export const createRepositoriesTitle = () => {
  const repositoriesTitle = document.createElement("h2");
  repositoriesTitle.textContent = "Repository: ";
  repositoriesTitle.classList.add("repositories-title");

  return repositoriesTitle;
};
