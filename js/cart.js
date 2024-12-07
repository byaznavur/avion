const cartCards = document.querySelector(".cart-cards");
const productsSumma = document.querySelector(".productsSumma");
function getCardCart(el) {
  return `
    <div class = "cart-card">
  <div class = "cardImage">
    <img src = ${el.img} alt = ${el.title}/>
   <div>
    <h2>${el.title}</h2>
     <p>${el.price}</p>
   </div>
  </div>
     
   <div class = "onDicInc">
     <button onClick = decQuantity(${el.id})>-</button>
     <span>${el.quantity}</span>
     <button onClick = incQuantity(${el.id})>+</button>
    </div>
    <div class = "sumProduct">
    <h3> Sum: ${el.quantity * +el.price}  </h3>
    </div>

    
    </div>
    `;
}

function getProductCart() {
  cartCards.innerHTML = "";

  cart.map((el) => {
    cartCards.innerHTML += getCardCart(el);
  });
}

getProductCart();

function getSummaProduct() {
  const totalSum = cart.reduce(
    (total, el) => total + el.price * el.quantity,
    0
  );

  if (productsSumma) {
    productsSumma.textContent = `Umumiy summa: ${totalSum} so'm`;
  }
}

getSummaProduct();

function incQuantity(id) {
  cart = cart.map((el) => {
    if (el.id === id) {
      el.quantity++;
    }

    return el;
  });

  getProductCart();
  getSummaProduct();

  localStorage.setItem("cart", JSON.stringify(cart));
}

function decQuantity(id) {
  let product = cart.find((el) => el.id === id);

  if (product.quantity === 1) {
    let checkDelete = window.confirm("Are you sure you want to delete this");

    if (checkDelete) {
      cart = cart.filter((el) => el.id !== id);
    }
  } else {
    cart = cart.map((el) => {
      if (el.id === id) {
        el.quantity--;
      }

      return el;
    });
  }
  getSummaProduct();

  getProductCart();
  localStorage.setItem("cart", JSON.stringify(cart));
}
