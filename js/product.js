const demoProducts = [
  {
    name: "Wireless Headphones",
    original: 2999,
    discounted: 1999,
    offer: "33% OFF"
  },
  {
    name: "Smart Watch",
    original: 4999,
    discounted: 3499,
    offer: "Limited Deal"
  }
];

const productDiv = document.getElementById("products");

demoProducts.forEach(p => {
  productDiv.innerHTML += `
    <div class="product-card">
      <h3>${p.name}</h3>
      <p>
        <del>₹${p.original}</del>
        <strong> ₹${p.discounted}</strong>
      </p>
      <span class="offer">${p.offer}</span><br><br>
      <button>Add to Cart</button>
    </div>
  `;
});
