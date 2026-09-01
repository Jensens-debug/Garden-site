// The Real Food Gardens — shared front-end behavior (no build step required)

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  // Newsletter forms (front-end only — no backend wired up)
  document.querySelectorAll(".newsletter-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button");
      const original = btn.textContent;
      btn.textContent = "Thanks, you're in!";
      form.querySelector("input").value = "";
      setTimeout(() => (btn.textContent = original), 2600);
    });
  });

  // Contact form (front-end only)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector(".form-success")?.classList.add("show");
      contactForm.reset();
      document.querySelector(".form-success")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  // Shop filters
  const filterButtons = document.querySelectorAll(".shop-filters button");
  const products = document.querySelectorAll(".product-card");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      products.forEach((card) => {
        card.style.display = cat === "all" || card.dataset.cat === cat ? "" : "none";
      });
    });
  });

  // "Add to cart" buttons — cosmetic only, this is a static template
  document.querySelectorAll(".product-price button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const original = btn.textContent;
      btn.textContent = "Added ✓";
      setTimeout(() => (btn.textContent = original), 1600);
    });
  });
});
