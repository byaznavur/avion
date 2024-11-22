const herroCategory = document.querySelector(".herro-category");

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
