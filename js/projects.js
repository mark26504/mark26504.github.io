const viewer = document.querySelector(".case-viewer");

if (typeof viewer?.showModal === "function") {
  const stage = viewer.querySelector(".case-viewer-stage");
  const title = viewer.querySelector("#case-viewer-title");
  const status = viewer.querySelector(".case-viewer-status");
  const closeButton = viewer.querySelector("[data-viewer-close]");
  const zoomOut = viewer.querySelector("[data-zoom-out]");
  const zoomIn = viewer.querySelector("[data-zoom-in]");
  const resetZoom = viewer.querySelector("[data-zoom-reset]");
  const image = new Image();
  const zoomLevels = [1, 1.5, 2, 3, 4, 6, 8];
  let opener;
  let zoomIndex = 0;
  let drag;

  image.className = "case-viewer-image";
  image.draggable = false;
  viewer.querySelector(".case-viewer-canvas").append(image);

  function setZoom(index) {
    const centerX = (stage.scrollLeft + stage.clientWidth / 2) / stage.scrollWidth;
    const centerY = (stage.scrollTop + stage.clientHeight / 2) / stage.scrollHeight;
    const aspectRatio = Number(image.getAttribute("width")) / Number(image.getAttribute("height"));
    const fitWidth = Math.min(stage.offsetWidth, stage.offsetHeight * aspectRatio);

    zoomIndex = Math.max(0, Math.min(index, zoomLevels.length - 1));
    const scale = zoomLevels[zoomIndex];
    image.style.width = Math.floor(fitWidth * scale) + "px";

    stage.scrollLeft = centerX * stage.scrollWidth - stage.clientWidth / 2;
    stage.scrollTop = centerY * stage.scrollHeight - stage.clientHeight / 2;
    stage.toggleAttribute("data-pannable", zoomIndex > 0);
    zoomOut.setAttribute("aria-disabled", String(zoomIndex === 0));
    resetZoom.setAttribute("aria-disabled", String(zoomIndex === 0));
    zoomIn.setAttribute("aria-disabled", String(zoomIndex === zoomLevels.length - 1));
    status.textContent = zoomIndex ? scale * 100 + "% of fit" : "Fit · 100%";
  }

  document.addEventListener("click", event => {
    const link = event.target.closest("a[data-image-viewer]");
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const preview = link.querySelector("img");
    event.preventDefault();
    opener = link;
    title.textContent = link.parentElement.querySelector("figcaption").textContent;
    image.setAttribute("width", preview.getAttribute("width"));
    image.setAttribute("height", preview.getAttribute("height"));
    image.alt = preview.alt;
    image.src = link.href;
    viewer.showModal();
    setZoom(0);
  });

  zoomOut.addEventListener("click", () => setZoom(zoomIndex - 1));
  zoomIn.addEventListener("click", () => setZoom(zoomIndex + 1));
  resetZoom.addEventListener("click", () => setZoom(0));
  closeButton.addEventListener("click", () => viewer.close());

  viewer.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const levels = { "+": zoomIndex + 1, "=": zoomIndex + 1, "-": zoomIndex - 1, "0": 0 };
    if (Object.hasOwn(levels, event.key)) {
      event.preventDefault();
      setZoom(levels[event.key]);
    }
  });

  window.addEventListener("resize", () => {
    if (viewer.open) {
      setZoom(zoomIndex);
    }
  });

  stage.addEventListener("pointerdown", event => {
    if (!zoomIndex || event.pointerType !== "mouse" || event.button !== 0 || event.target === stage) {
      return;
    }
    event.preventDefault();
    stage.focus({ preventScroll: true });
    stage.setPointerCapture(event.pointerId);
    drag = {
      id: event.pointerId,
      x: event.clientX + stage.scrollLeft,
      y: event.clientY + stage.scrollTop,
    };
    stage.setAttribute("data-dragging", "");
  });

  stage.addEventListener("pointermove", event => {
    if (event.pointerId === drag?.id) {
      stage.scrollLeft = drag.x - event.clientX;
      stage.scrollTop = drag.y - event.clientY;
    }
  });

  stage.addEventListener("lostpointercapture", () => {
    drag = undefined;
    stage.removeAttribute("data-dragging");
  });

  viewer.addEventListener("close", () => {
    image.removeAttribute("src");
    opener.focus({ preventScroll: true });
  });
}
