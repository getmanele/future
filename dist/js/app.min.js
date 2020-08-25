// $(document).ready(function () {
//   $("body").hide();
// });

// const { Callbacks, type } = require("jquery");

// element.querySelectorAll('[role="tab"]')

// document.getElementById("furnitures").onclick = function () {
//   document.querySelector(".furnitures").classList.add("visible1");
//   document.querySelector(".furnitures").classList.remove("hidden1");
//   document.querySelector(".fashion").classList.add("hidden1");
// };

// let tab = function () {
//   let tabNav = document.querySelectorAll(".tabs-nav-item"),
//     tabContent = document.querySelectorAll(".tab"),
//     tabName;

//   tabNav.forEach((item) => {
//     item.addEventListener("click", selectTabNav);
//   });

//   function selectTabNav() {}
// };

// tab();

let tab = function () {
  let tabNav = document.querySelectorAll(".tabs-nav-item"),
    tabContent = document.querySelectorAll(".tab"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};

tab();
