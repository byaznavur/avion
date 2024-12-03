const productCards = document.querySelector(".product-cards");
const searchInput = document.querySelector(".search");
const productTotal = document.querySelector(".product-total");
const pagination = document.querySelector(".pagination");
function getAllProducts(el) {
  return `
  <div class="all-cards">
    <img src="${el.img}" alt="${el.title}">
    <h3>${el.title}</h3>
    <p>${el.price}</p>
  </div>
  `;
}

let search = "";
let activePage = 1;

function getProducts() {
  productCards.innerHTML = "";
  let result = ceramics.filter((el) => el.title.toLowerCase().includes(search));
  let pages = Math.ceil(result.length / 3);

  if (pages > 1) {
    pagination.innerHTML = `<li>
    <button onClick = "getPage('-')" ${
      activePage == 1 ? "disabled" : " "
    }>Previous</button>
  </li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li >
<button onClick = "getPage(${i})" class = ${
        i == activePage ? "active" : ""
      } >${i}</button>
</li>`;
    }
    pagination.innerHTML += `<li>
    <button   onClick = "getPage('+')" ${
      activePage == 3 ? "disabled" : " "
    }>Next</button>
  </li>`;
  } else {
    pagination.innerHTML = "";
  }

  let start = (activePage - 1) * 3;
  let end = activePage * 3;
  let pageResult = result.slice(start, end);
  pageResult.map((el) => (productCards.innerHTML += getAllProducts(el)));
  productTotal.textContent = result.length;
}

searchInput.addEventListener("keyup", function () {
  activePage = 1;
  search = this.value.trim().toLowerCase();
  getProducts();
});

getProducts();

function getPage(page) {
  if (page == "+") {
    activePage++;
  } else if (page == "-") {
    activePage--;
  } else {
    activePage = page;
  }
  getProducts();
}
