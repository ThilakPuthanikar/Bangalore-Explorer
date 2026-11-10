/**
 * Bangalore Explorer - Modal Controller
 * Accessible detail modal dialog for landmark information.
 */

const ModalController = (function () {
  let backdropEl = null;
  let modalImgEl = null;
  let modalTitleEl = null;
  let modalTextEl = null;
  let closeBtnEl = null;
  let previouslyFocusedEl = null;

  function init() {
    backdropEl = document.getElementById("modalBackdrop");
    modalImgEl = document.getElementById("modalImg");
    modalTitleEl = document.getElementById("modalTitle");
    modalTextEl = document.getElementById("modalText");
    closeBtnEl = document.getElementById("modalClose");

    if (!backdropEl || !closeBtnEl) return;

    // Close on button click
    closeBtnEl.addEventListener("click", close);

    // Close on backdrop overlay click
    backdropEl.addEventListener("click", function (e) {
      if (e.target === backdropEl) {
        close();
      }
    });

    // Close on Escape key press
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) {
        close();
      }
    });
  }

  function isOpen() {
    return backdropEl && backdropEl.classList.contains("is-open");
  }

  function open(item, lang) {
    if (!backdropEl || !item) return;

    previouslyFocusedEl = document.activeElement;

    modalImgEl.src = item.img;
    modalImgEl.alt = item[lang]?.title || "";
    modalTitleEl.textContent = item[lang]?.title || "";
    modalTextEl.textContent = item[lang]?.long || "";

    backdropEl.classList.add("is-open");
    backdropEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Move focus into the modal
    if (closeBtnEl) {
      closeBtnEl.focus();
    }
  }

  function close() {
    if (!backdropEl) return;

    backdropEl.classList.remove("is-open");
    backdropEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // Restore focus
    if (previouslyFocusedEl && typeof previouslyFocusedEl.focus === "function") {
      previouslyFocusedEl.focus();
    }
  }

  return {
    init,
    open,
    close,
    isOpen
  };
})();

