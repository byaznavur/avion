const cartCards = document.querySelector(".cart-cards");

function getCardCart(el) {
  return `
    <div>
  <div>
    <img src = ${el.img} alt = ${el.title}/>
     <h2>${el.title}</h2>
     <p>${el.price}</p>
  </div>
     
   <div>
     <button onClick = decQuantity(${el.id})>-</button>
     <button>${el.quantity}</button>
     <button onClick = incQuantity(${el.id})>+</button>
    </div>
    <div>
    <h3> Sum:   </h3>
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

function incQuantity(id) {
  cart = cart.map((el) => {
    if (el.id === id) {
      el.quantity++;
    }

    return el;
  });

  getProductCart();
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

  getProductCart();
  localStorage.setItem("cart", JSON.stringify(cart));
}
