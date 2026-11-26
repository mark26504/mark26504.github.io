const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const desktopNavigation = window.matchMedia("(min-width: 48rem)");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

  const isCollapsed = !desktopNavigation.matches && !isOpen;
  if (isCollapsed && primaryNavigation.contains(document.activeElement)) {
    menuToggle.focus();
  }
  primaryNavigation.inert = isCollapsed;
}

function syncNavigation() {
  menuToggle.hidden = desktopNavigation.matches;
  setMenuOpen(false);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") === "false");
});

document.addEventListener("click", (event) => {
  if (menuToggle.getAttribute("aria-expanded") !== "true" || menuToggle.contains(event.target)) {
    return;
  }

  if (!primaryNavigation.contains(event.target) || event.target.closest("a[href]")) {
    setMenuOpen(false);
  }
});

document.addEventListener("focusin", (event) => {
  if (menuToggle.getAttribute("aria-expanded") === "true" && !siteHeader.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

desktopNavigation.addEventListener("change", syncNavigation);
syncNavigation();

const sectionLinks = Array.from(primaryNavigation.querySelectorAll('.nav-list a[href^="#"]'), (link) => ({
  link,
  section: document.getElementById(link.hash.slice(1)),
})).filter(({ section }) => section);
let activeSectionLink = primaryNavigation.querySelector('.nav-list a[aria-current="location"]');

function updateCurrentSection() {
  const scrollPadding = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingBlockStart);
  const activationLine = Math.max(siteHeader.getBoundingClientRect().bottom, scrollPadding || 0) + 1;
  const isAtPageEnd = window.scrollY > 0 && Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight;
  const current = isAtPageEnd
    ? sectionLinks.at(-1)
    : sectionLinks.findLast(({ section }) => section.getBoundingClientRect().top <= activationLine) ?? sectionLinks[0];

  if (current.link === activeSectionLink) {
    return;
  }

  activeSectionLink?.removeAttribute("aria-current");
  current.link.setAttribute("aria-current", "location");
  activeSectionLink = current.link;
}

if (sectionLinks.length > 1) {
  updateCurrentSection();
  window.addEventListener("scroll", updateCurrentSection, { passive: true });
  window.addEventListener("resize", updateCurrentSection);
}
