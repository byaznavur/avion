const herroCategory = document.querySelector(".herro-category");
const ceramicCards = document.querySelector(".ceramic-cards");
const popularCards = document.querySelector(".popular-cards");
const brandCards = document.querySelector(".brand-cards");

function getCategory(el) {
  return `<a href ="#">${el}</a>`;
}

if (category && Array.isArray(category)) {
  herroCategory.innerHTML = category.map((el) => getCategory(el)).join("");
}

function getBrand(el) {
  if (!el.img || !el.title || !el.desc) return ""; // Mavjudligini tekshirish
  return `
  <div class="brand-card">
    <img src="${el.img}" alt="${el.name}">
    <h3>${el.title}</h3>
    <p>${el.desc}</p>
  </div>`;
}

if (brand && Array.isArray(brand)) {
  brandCards.innerHTML = brand.map((el) => getBrand(el)).join("");
}

function getCeramics(el) {
  if (!el.img || !el.title || !el.price) return ""; // Tekshirish
  return `
  <div class="ceramic-card">
    <span>new</span>
    <img src=${el.img} alt="" />
    <h3>${el.title}</h3>
    <p>${el.price}</p>
  </div>`;
}

if (ceramics && Array.isArray(ceramics)) {
  ceramicCards.innerHTML = ceramics
    .filter((el) => el.newProduct)
    .map((el) => getCeramics(el))
    .join("");

  popularCards.innerHTML = ceramics
    .filter((el) => el.popular)
    .map((el) => getPopular(el))
    .join("");
}

function getPopular(el) {
  if (!el.img || !el.title || !el.price) return ""; // Tekshirish
  return `
  <div class="popular-card">
    <span>popular</span>
    <img src=${el.img} alt="" />
    <h3>${el.title}</h3>
    <p>${el.price}</p>
  </div>`;
}
