// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = toggle.classList.toggle("open");
  navLinks.classList.toggle("show", isOpen);
  toggle.setAttribute("aria-expanded", isOpen);
});

// Add-to-cart counter
const cartCount = document.getElementById("cartCount");
let count = 0;

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;

    cartCount.classList.remove("bump");
    void cartCount.offsetWidth; // restart animation
    cartCount.classList.add("bump");

    btn.textContent = "Added ✓";
    setTimeout(() => (btn.textContent = "Add to cart"), 1200);
  });
});
