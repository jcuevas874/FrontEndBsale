import { cardsComponent } from "./cards.js";
// import { paginationComponent } from "./pagination.js";

export const mainComponent = async (categoryName, sortBy) => {
  
  const containerMain = document.querySelector("#main");
  // containerMain.className = "container-fluid containerMain d-flex flex-column vh-100";
  containerMain.innerHTML = '';
  containerMain.appendChild(await cardsComponent(categoryName, sortBy));
  // containerMain.appendChild(paginationComponent());
  return containerMain;
};
