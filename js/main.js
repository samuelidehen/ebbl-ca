// Header: solid background once scrolled past 40px
(function headerScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const SCROLL_THRESHOLD = 40;

  function onScroll() {
    header.classList.toggle("site-header--scrolled", window.scrollY > SCROLL_THRESHOLD);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// Desktop nav dropdowns — JS-driven (not pure CSS :hover) so each
// dropdown's open state is explicit and only ever applies to the item
// actually being interacted with.
(function navDropdowns() {
  const items = document.querySelectorAll(".site-header__nav-item");

  items.forEach((item) => {
    if (!item.querySelector(".site-header__dropdown")) return;

    item.addEventListener("mouseenter", () => item.classList.add("is-open"));
    item.addEventListener("mouseleave", () => item.classList.remove("is-open"));
  });
})();

// Mobile menu toggle
(function mobileMenu() {
  const toggle = document.querySelector(".site-header__menu-toggle");
  const nav = document.querySelector(".site-header__mobile-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

// Newsletter form -> Formspree
(function newsletterForm() {
  // Replace with your real Formspree endpoint: https://formspree.io/forms/<id>
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

  const form = document.querySelector(".newsletter__form");
  const successMessage = document.querySelector(".newsletter__success");
  const errorMessage = document.querySelector(".newsletter__error");
  const submitButton = form ? form.querySelector(".newsletter__submit") : null;

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const email = data.get("email");

    if (!email) {
      errorMessage.textContent = "Veuillez entrer votre courriel.";
      errorMessage.hidden = false;
      return;
    }

    errorMessage.hidden = true;
    submitButton.disabled = true;
    submitButton.textContent = "Envoi…";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");

      form.classList.add("is-hidden");
      successMessage.classList.add("is-visible");
    } catch (err) {
      errorMessage.textContent = "Une erreur est survenue — réessayez.";
      errorMessage.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "M'inscrire";
    }
  });
})();
