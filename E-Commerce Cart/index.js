const products = [
  { name: "Product 1", price: 39.99, id: 1 },
  { name: "Product 2", price: 14.33, id: 2 },
  { name: "Product 3", price: 21.4554, id: 3 },
];
const cart = [];
const productContainer = document.querySelector("#main-container");
const cartContainer = document.querySelector("#cart-container");
const emptyCart = document.querySelector(".empty-card");
const checkOutBtn = document.querySelector(".checkout-btn");

const priceItem = products.forEach((product) => {
  productItemRender(product);
});

const priceDisplay = document.querySelector(".total");

function productItemRender({ name, price, id }) {
  const productItem = document.createElement("div");
  productItem.classList.add("product");
  productItem.innerHTML = `<span> ${name} - $${price}</span>
    <button class="btn" data-id="${id}">Add to Cart</button>`;
  productContainer.appendChild(productItem);
}

productContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    emptyCart.classList.add("hidden");
    priceDisplay.classList.remove("hidden");
    const productId = parseInt(e.target.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);
    addCart(product);
  }
});

function addCart(product) {
  const existingItem = cart.find((p) => p.id === product.id);
  if (existingItem) return;
  cart.push(product);
  cartRender(product);
}

let totalPrice = 0;
priceDisplay.innerHTML = "$0.00";
function cartRender({ name, price }) {
  totalPrice += price;
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `<span>${name}</span>
            <span>$${price.toFixed(2)}</span>`;
  cartContainer.appendChild(cartItem);
  priceDisplay.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
}

checkOutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  totalPrice = 0;
  priceDisplay.innerHTML = "$0.00";
  cartContainer.innerHTML = "";
  priceDisplay.classList.add("hidden");
  emptyCart.classList.remove("hidden");
});
