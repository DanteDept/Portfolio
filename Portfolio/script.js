
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.src = "/img/moon100.png";
    themeIcon.alt = "Тёмная тема";
  } else {
    themeIcon.src = "/img/sun100.png";
    themeIcon.alt = "Светлая тема";
  }
});

const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");
burger.addEventListener("click", () => nav.classList.toggle("show"));

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDescription.textContent = card.querySelector("p").textContent;
    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", (e) => { if(e.target === modal) modal.classList.add("hidden"); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("active"); });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach(section => observer.observe(section));