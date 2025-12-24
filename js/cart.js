let cart = [
  { id: 1, name: "Wireless Headphones", price: 1999, qty: 1 },
  { id: 2, name: "Smart Watch", price: 3499, qty: 1 }
];

function renderCart() {
  const cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    cartDiv.innerHTML += `
      <div class="cart-card">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>

        <div class="qty-control">
          <button onclick="decrease(${item.id})">−</button>
          <span>${item.qty}</span>
          <button onclick="increase(${item.id})">+</button>
        </div>

        <p><strong>Subtotal: ₹${item.price * item.qty}</strong></p>
      </div>
    `;
  });

  document.getElementById("totalPrice").innerText =
    "Total: ₹" + total;
}

function increase(id) {
  const item = cart.find(p => p.id === id);
  item.qty++;
  renderCart();
}

function decrease(id) {
  const item = cart.find(p => p.id === id);
  if (item.qty > 1) {
    item.qty--;
  }
  renderCart();
}

function checkout() {
  alert("Checkout will be handled by backend later");
}

renderCart();
