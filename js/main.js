const menuBtn = document.querySelector(".menu");
const menuImg = document.querySelector(".menu img");
const list = document.querySelector(".list");
const searchBtn = document.querySelector(".search-btn");
const navInput = document.querySelector(".nav-input");
const cartCount = document.querySelector(".cart-count");

const loading = document.querySelector(".loading");
const menuSrc =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII=";

const closeSrc =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAo5JREFUSEu1lUnIjlEcxX+fZMhQbMQnlC+UMcXqy7AgQxIyLFBKkogFFsgQVhKZShaEEgvJGGXKsJMp4jMmJQtT5gj36Dx13+t5n/dNvXf1PPf+7//87/mfe24dNR51Nc5PJYCWwBRgDDAQ6AH8Bp4Dt4AzwFHgR7lCiwDGAructOigj4H5wPm8oHIAa0Ola7zhBXAYOAXc9twgYAIwDejquaXA5hQkDyBL/hGYCZwwLXkFNgOmAnuB1sBiYFscmAKoquPA11DxkLD5XpUiGApcAwQ4HLia7YsB2gJNQGdgFnAwSt4hVPcuAUvnlgBbgAeh8QOyxscAC4Cdgdf7QL+Ilu2hulGu7LVBOgGXraAVnmthdanAScAxzccApwEpZ6GBtN4OuAn0BB6FpCO952I4YUM46RPL97NBNgIC3APMSwFehoV6J3sa0aGKLgG9gGfmubvpHAG8imIbgSsuanAK8MVKkBq+JXxnlPT2/MOEsiy8I/AGeA+oRyUUSZZqdHtA3/GoFkB7P3i/vksA1H1VKAXcjbKLtgumSBahIcuQ4oYBWeM1L1puWCh9U4BDQWIzgOXAJidSk+84oRoqjUsY4lkgAuwPfHL8KmB96OMBYHYKIO3vt1r6AL+8aavNTsljmV63TJc5rrlV1Q2YDhxJAdRc0aSAOaHCfRFNeRdNDX0bxSyyTYg60fw9BdD/aODsf1iFbEUnklVIuqLw78gzu5XABqtBZncyUVT8q4SiQxerTZCoTrEjDihn16sD+DoH6nLJrnXT1XBZgqxkop20i21FTipbKRlFD874YHy7fbsLDoEenLn2pn/iKj2ZrULVk4FxbpwsQk+mJCu9n7Op/SxXQSWAosqrWqs5wB9HeoQZYENF2wAAAABJRU5ErkJggg==";

let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  if (isMenuOpen) {
    menuImg.src = menuSrc;
    list.classList.remove("show");
  } else {
    menuImg.src = closeSrc;
    list.classList.add("show");
  }
  isMenuOpen = !isMenuOpen;
});

searchBtn.addEventListener("click", () => {
  navInput.classList.toggle("showInput");
});

window.addEventListener("load", () => {
  loading.classList.add("loading-hidden");
});

const backtop = document.querySelector(".backtop");

window.addEventListener("scroll", () => {
  if (scrollY > 200) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
});

let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getCartCount() {
  cartCount.textContent = cart.length;
}

getCartCount();
