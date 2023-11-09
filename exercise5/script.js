function setupTabs() {
  document.querySelectorAll(".tabs__button").forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.dataset)
      onClickButton(button.dataset.forTab);
    });
  });
}
  
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});

const button = document.querySelector(".tabs__button");
const sidebar = button.parentElement;
const tabsContainer = sidebar.parentElement;


function onClickButton(tabNumber) {
  // console.log(`Clicked button ${tabNumber}`)
  sidebar.querySelectorAll(".tabs__button").forEach((button) => {
    button.classList.remove("tabs__button--active");
  });
  
  tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
    tab.classList.remove("tabs__content--active");
  });

  const button = sidebar.querySelector(`.tabs__button[data-for-tab="${tabNumber}"]`)
  const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);
  
  button.classList.add("tabs__button--active");
  tabToActivate.classList.add("tabs__content--active");
}
