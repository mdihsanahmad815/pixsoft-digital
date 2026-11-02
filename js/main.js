const WHATSAPP_NUMBER = "8801922889616"; // Bangladesh country code + number, digits only

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      toggle.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }

  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll("form[data-whatsapp-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = [`PIXSOFT DIGITAL — ${form.dataset.formTitle || "Website inquiry"}`];
      for (const [key, value] of data.entries()) {
        if (String(value).trim()) lines.push(`${key}: ${String(value).trim()}`);
      }
      const message = encodeURIComponent(lines.join("\n"));
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
      const status = form.querySelector("[data-form-status]");
      if (status) status.textContent = "Your message is ready in WhatsApp. Please press Send there to submit it.";
    });
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentFile || (currentFile === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });
});
