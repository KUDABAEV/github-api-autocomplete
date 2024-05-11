import { debounce } from "./utils.js";
import { urlRepositories } from "./api.js";
import { createApp } from "./components/createApp.js";
import { createSearchInput } from "./components/createSearchInput.js";
import { cresteSearchList } from "./components/createSearchList.js";
import { createRepositoriesList } from "./components/createRepositoriesList.js";
import { cresteSearchItem } from "./components/createSearchItem.js";
import { createSearch } from "./components/createSearch.js";
import { createRepositoriesItem } from "./components/createRepositoriesItem.js";

const app = createApp();
const search = createSearch();
const searchInput = createSearchInput();
const searchList = cresteSearchList();
const repositories = createRepositoriesList();

search.appendChild(searchInput);
search.appendChild(searchList);

app.appendChild(search);
app.appendChild(repositories);

document.body.append(app);

let listArray = [];

async function searchPost() {
  if (searchInput.value.trim().length === 0) {
    searchList.innerHTML = "";
  }
  if (searchInput.value.trim().length > 0) {
    await requestSearch(searchInput.value);
    downList();
  }
}

async function requestSearch(value) {
  let ListPost = await fetch(`${urlRepositories}?q=${value}&per_page=5`);
  const post = await ListPost.json();
  listArray = post.items;
}

function downList() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; listArray.length > i; i++) {
    const elementList = cresteSearchItem(listArray[i].name);

    fragment.appendChild(elementList);
  }
  searchList.innerHTML = "";
  searchList.appendChild(fragment);
}

searchInput.addEventListener("keyup", debounce(searchPost.bind(this), 500));
searchList.addEventListener("click", (e) => {
  let postTarget = listArray.find((el) => el.name === e.target.textContent);
  const newItem = createRepositoriesItem({
    name: postTarget.name,
    owner: postTarget.owner.login,
    starts: postTarget.stargazers_count,
  });

  repositories.querySelector(".repositories-list").appendChild(newItem);
  if (repositories.querySelector(".repositories-list").children.length > 0) {
    repositories.classList.remove("hidden");
  }
  searchList.innerHTML = "";
  searchInput.value = "";
});

repositories.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    if (
      repositories.querySelector(".repositories-list").children.length === 0
    ) {
      repositories.classList.add("hidden");
    }
  }
});
