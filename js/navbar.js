function loadNavbar() {
  const nav = document.getElementById("navbar");

  nav.innerHTML = `
    <div class="nav-left">
      <img src="${SITE_CONFIG.logo}" class="logo" />
    </div>

    <div class="hamburger" onclick="toggleMenu()">☰</div>

    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>

      <li class="dropdown">
        <a href="#">Categories ▾</a>
        <ul class="dropdown-menu">
          ${SITE_CONFIG.categories.map(c => `<li>${c}</li>`).join("")}
        </ul>
      </li>

      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact Us</a></li>
      <li><a href="cart.html">Cart</a></li>
      <li><a href="login.html">Login</a></li>
    </ul>
  `;
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
