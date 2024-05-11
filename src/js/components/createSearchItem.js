export const cresteSearchItem = (content) => {
  const searchItem = document.createElement("li");

  searchItem.textContent = content;
  searchItem.classList.add("search-item");

  return searchItem;
};
