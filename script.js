document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector(".footer-content p:first-child");
  if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.textContent = `© ${currentYear} Sahyog Vikas Foundation`;
  }
});
