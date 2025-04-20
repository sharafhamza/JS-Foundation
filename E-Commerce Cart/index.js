const products = [
  { name: "Product 1", price: 39.999, id: 1 },
  { name: "Product 2", price: 14.33, id: 2 },
  { name: "Product 3", price: 21.4554, id: 3 },
];
const cart = [];
const productContainer = document.querySelector("#main-container");

products.forEach((product) => {
  productItemRender(product);
});

function productItemRender({ name, price, id }) {
  const productItem = document.createElement("div");
  productItem.classList.add("product");
  productItem.innerHTML = `<span> ${name} - $${price}</span>
    <button class="btn" data-id="${id}">Add to Cart</button>`;
  productContainer.appendChild(productItem);
}

productContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const productId = parseInt(e.target.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);
    cart.push(product);
  }
});

function addCart(product) {
  cart.push(product);
}
