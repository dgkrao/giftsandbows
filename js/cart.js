// Later this will come from backend
let cart = [
  { name: "Wireless Headphones", price: 1999, qty: 1 },
  { name: "Smart Watch", price: 3499, qty: 1 }
];

const cartDiv = document.getElementById("cartItems");
let total = 0;

cart.forEach(item => {
  total += item.price * item.qty;

  cartDiv.innerHTML += `
    <p>
      ${item.name} × ${item.qty}
      <strong>₹${item.price}</strong>
    </p>
  `;
});

document.getElementById("totalPrice").innerText = "Total: ₹" + total;

function checkout() {
  alert("Proceeding to checkout (backend will handle this)");
}
