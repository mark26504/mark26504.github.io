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

function initDecorativeMotion() {
  const motionToggle = document.querySelector(".motion-toggle");
  const motionElements = [
    document.querySelector(".architecture-diagram"),
    document.querySelector(".availability"),
  ];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const visibleElements = new Set();
  let isPaused = false;

  function syncMotion() {
    const canAnimate = !isPaused && !reducedMotion.matches && !document.hidden;
    for (const element of motionElements) {
      element.toggleAttribute("data-motion-running", canAnimate && visibleElements.has(element));
    }
  }

  function updateMotionPreference() {
    let label = isPaused ? "Resume decorative animations" : "Pause decorative animations";
    if (reducedMotion.matches) {
      label = "Decorative animations off for reduced motion";
    }

    motionToggle.toggleAttribute("data-paused", isPaused || reducedMotion.matches);
    motionToggle.setAttribute("aria-label", label);
    motionToggle.setAttribute("aria-disabled", String(reducedMotion.matches));
    motionToggle.title = label;
    syncMotion();
  }

  const observer = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      if (isIntersecting) {
        visibleElements.add(target);
      } else {
        visibleElements.delete(target);
      }
    }
    syncMotion();
  });

  motionToggle.addEventListener("click", () => {
    if (reducedMotion.matches) {
      return;
    }
    isPaused = !isPaused;
    updateMotionPreference();
  });
  reducedMotion.addEventListener("change", updateMotionPreference);
  document.addEventListener("visibilitychange", syncMotion);

  updateMotionPreference();
  motionToggle.hidden = false;
  for (const element of motionElements) {
    observer.observe(element);
  }
}

if ("IntersectionObserver" in window) {
  initDecorativeMotion();
}
