const herroCategory = document.querySelector(".herro-category");
const ceramicCards = document.querySelector(".ceramic-cards");
function getCategory(el) {
  return `<a href ="#">${el}</a>`;
}

category.map((el) => (herroCategory.innerHTML += getCategory(el)));

const brandCards = document.querySelector(".brand-cards");

function getBrand(el) {
  return `
  <div class="brand-card">
    <img src="${el.img}" alt="${el.name}">
    <h3>${el.title}</h3>
    <p>${el.desc}</p>
  </div>
  `;
}

brand.map((el) => (brandCards.innerHTML += getBrand(el)));

function getCeramics(el) {
  return `
  <div class="ceramic-card">
  <span>new</span>
   <img src=${el.img} alt="" />
     <h3>${el.title}</h3>
    <p>${el.price}</p>
  </div>
          `;
}

ceramics.map((el) => {
  if (el.newProduct) {
    ceramicCards.innerHTML += getCeramics(el);
  }
});
