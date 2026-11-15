(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  const filters = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".gallery-item");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      projects.forEach((project) => {
        project.classList.toggle("is-hidden", filter !== "all" && project.dataset.category !== filter);
      });
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.getElementById("enquiry-form");
  const note = document.getElementById("form-note");

  if (form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const defaultButtonText = submitButton ? submitButton.innerHTML : "Send enquiry";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const keyInput = form.querySelector('input[name="access_key"]');
      const accessKey = keyInput ? keyInput.value.trim() : "";
      if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
        if (note) {
          note.textContent = "The enquiry form is not activated yet. Add your Web3Forms Access Key in index.html.";
          note.classList.remove("form-note-success");
          note.classList.add("form-note-error");
        }
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
        submitButton.textContent = "Sending…";
      }
      if (note) {
        note.classList.remove("form-note-error", "form-note-success");
        note.textContent = "Sending your enquiry securely…";
      }

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.message || "The enquiry could not be sent.");
        }
        form.reset();
        if (note) {
          note.textContent = "Thank you! Your enquiry has been sent successfully. Our team will get back to you soon.";
          note.classList.add("form-note-success");
        }
      } catch (error) {
        console.error("Web3Forms submission failed:", error);
        if (note) {
          note.textContent = "We couldn't send your enquiry right now. Please try again, call +91 82173 01334 or email vgprecision10@gmail.com.";
          note.classList.add("form-note-error");
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute("aria-busy");
          submitButton.innerHTML = defaultButtonText;
        }
      }
    });
  }
})();