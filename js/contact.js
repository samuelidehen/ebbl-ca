// Replace with your real Formspree endpoint: https://formspree.io/forms/<id>
// (use a separate form on Formspree from the newsletter one, so submissions
// don't get mixed together)
const CONTACT_FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_CONTACT_FORM_ID";

(function contactForm() {
  const form = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".contact-form__success");
  const errorMessage = form ? form.querySelector(".newsletter__error") : null;
  const submitButton = form ? form.querySelector(".newsletter__submit") : null;

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const email = data.get("email");
    const message = data.get("message");

    if (!email || !message) {
      errorMessage.textContent = "Veuillez remplir votre courriel et votre message.";
      errorMessage.hidden = false;
      return;
    }

    errorMessage.hidden = true;
    submitButton.disabled = true;
    submitButton.textContent = "Envoi…";

    try {
      const response = await fetch(CONTACT_FORMSPREE_ENDPOINT, {
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
      submitButton.textContent = "Envoyer";
    }
  });
})();
