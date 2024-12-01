const productCards = document.querySelector(".product-cards");

ceramics.map((el) => (productCards.innerHTML += getAllProducts(el)));

function getAllProducts(el) {
  return `
  <div class="all-cards">
    <img src="${el.img}" alt="${el.name}">
    <h3>${el.title}</h3>
    <p>${el.price}</p>
  </div>
  `;
}
