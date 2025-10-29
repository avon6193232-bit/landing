const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#features", label: "Features" },
  { href: "#platforms", label: "Platforms" },
  { href: "#community", label: "Community" },
  { href: "#signup", label: "Join Beta", extraClass: "cta" },
];

const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.querySelector(".menu-toggle");

if (mobileNav && menuToggle) {
  mobileNav.innerHTML = navLinks
    .map(
      (link) =>
        `<a class="${link.extraClass ?? ""}" href="${link.href}">${link.label}</a>`
    )
    .join("");

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const hero = document.querySelector(".hero");
const cardStack = document.querySelector(".card-stack");

if (hero && cardStack) {
  const heroRect = hero.getBoundingClientRect();

  hero.addEventListener("mousemove", (event) => {
    const x = (event.clientX - heroRect.left) / heroRect.width;
    const y = (event.clientY - heroRect.top) / heroRect.height;

    const rotateY = (x - 0.5) * 24;
    const rotateX = (0.5 - y) * 18;

    cardStack.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  hero.addEventListener("mouseleave", () => {
    cardStack.style.transform = "";
  });
}
