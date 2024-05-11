export const createRepositoriesItem = ({ name, owner, starts }) => {
  const repositoriesItem = document.createElement("li");
  const repositoriesName = document.createElement("p");
  const repositoriesOwner = document.createElement("p");
  const repositoriesStars = document.createElement("p");
  const repositoriesContent = document.createElement("div");
  const repositoriesBtnDelete = document.createElement("button");

  repositoriesItem.classList.add("repositories-item");

  repositoriesName.classList.add("repositories-name");
  repositoriesName.textContent = `Name: ${name}`;

  repositoriesOwner.classList.add("repositories-owner");
  repositoriesOwner.textContent = `Owner: ${owner}`;

  repositoriesStars.classList.add("repositories-stars");
  repositoriesStars.textContent = `Stars: ${starts}`;

  repositoriesContent.classList.add("repositories-content");

  repositoriesBtnDelete.classList.add("repositories-btn-remove");
  repositoriesBtnDelete.textContent = "Remove";

  repositoriesContent.appendChild(repositoriesName);
  repositoriesContent.appendChild(repositoriesOwner);
  repositoriesContent.appendChild(repositoriesStars);

  repositoriesItem.appendChild(repositoriesContent);
  repositoriesItem.appendChild(repositoriesBtnDelete);

  return repositoriesItem;
};
