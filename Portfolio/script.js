const body = document.body;
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const detailButtons = document.querySelectorAll(".details-btn");
const currentYearElements = document.querySelectorAll(".current-year");
const contactForm = document.getElementById("contact-form");

function updateThemeIcon() {
  if (!themeIcon) return;

  if (body.classList.contains("dark")) {
    themeIcon.src = "img/moon100.png";
    themeIcon.alt = "Тёмная тема";
  } else {
    themeIcon.src = "img/sun100.png";
    themeIcon.alt = "Светлая тема";
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}
updateThemeIcon();

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    updateThemeIcon();
  });
}

if (burger && nav) {
  burger.addEventListener("click", () => nav.classList.toggle("show"));
}

if (detailButtons.length && modal && modalTitle && modalDescription) {
  detailButtons.forEach(button => {
    button.addEventListener("click", event => {
      const card = event.target.closest(".project-card");
      if (!card) return;

      const title = card.querySelector("h3");
      const description = card.querySelector("p");
      modalTitle.textContent = title ? title.textContent : "Проект";
      modalDescription.textContent = description ? description.textContent : "Описание проекта отсутствует.";
      modal.classList.remove("hidden");
    });
  });
}

if (closeModal && modal) {
  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".reveal").forEach(section => observer.observe(section));
} else {
  document.querySelectorAll(".reveal").forEach(section => section.classList.add("active"));
}

if (currentYearElements.length) {
  const year = new Date().getFullYear();
  currentYearElements.forEach(element => {
    element.textContent = year;
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    alert("Сообщение отправлено. Спасибо за обратную связь!");
    contactForm.reset();
  });
}
