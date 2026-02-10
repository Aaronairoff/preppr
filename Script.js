const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealTargets = document.querySelectorAll("section, .hero-card, .hero-content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
