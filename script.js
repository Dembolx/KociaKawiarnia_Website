document.addEventListener("DOMContentLoaded", function () {
  const catTail = document.querySelector(".cat-tail");
  let mouseX = 0;
  let mouseY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (catTail) {
      const angle = Math.atan2(
        mouseY - catTail.offsetTop,
        mouseX - catTail.offsetLeft
      );
      catTail.style.transform = `rotate(${angle}rad)`;
    }
  });
  const menuItemss = document.querySelectorAll(".menu-item");
  menuItemss.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const paw = document.createElement("span");
      paw.textContent = "🐾";
      paw.style.position = "absolute";
      paw.style.left = "50%";
      paw.style.top = "50%";
      paw.style.transform = "translate(-50%, -50%)";
      paw.style.fontSize = "24px";
      paw.style.opacity = "0";
      paw.style.transition = "all 0.5s ease";
      item.appendChild(paw);
      setTimeout(() => {
        paw.style.opacity = "1";
        paw.style.transform = "translate(-50%, -100%)";
      }, 100);
      setTimeout(() => {
        paw.remove();
      }, 600);
    });
  });
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
  // Menu Tabs
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
      // Hide all tab contents
      tabContents.forEach((content) => content.classList.add("hidden"));
      // Show the selected tab content
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.remove("hidden");
    });
  });
  // Menu Search
  const menuSearch = document.getElementById("menu-search");
  const menuItems = document.querySelectorAll(".menu-item");
  menuSearch.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    menuItems.forEach((item) => {
      const itemName = item.querySelector("h3").textContent.toLowerCase();
      const itemDesc = item.querySelector("p").textContent.toLowerCase();
      if (itemName.includes(searchTerm) || itemDesc.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  // Cats Carousel Navigation
  const prevCatBtn = document.getElementById("prev-cat");
  const nextCatBtn = document.getElementById("next-cat");
  const catsCarousel = document.getElementById("cats-carousel");
  if (prevCatBtn && nextCatBtn && catsCarousel) {
    nextCatBtn.addEventListener("click", function () {
      catsCarousel.scrollBy({ left: 300, behavior: "smooth" });
    });
    prevCatBtn.addEventListener("click", function () {
      catsCarousel.scrollBy({ left: -300, behavior: "smooth" });
    });
  }
});
