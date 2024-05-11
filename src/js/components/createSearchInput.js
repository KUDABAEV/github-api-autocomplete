export const createSearchInput = () => {
  const searchInput = document.createElement("input");
  searchInput.setAttribute("placeholder", "search");
  searchInput.classList.add("input-search");

  return searchInput;
};
