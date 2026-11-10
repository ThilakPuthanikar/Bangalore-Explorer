/**
 * Bangalore Explorer - Modal Controller 2.0
 * Accessible detail modal dialog featuring rich travel guide metadata,
 * visitor guidelines, metro connectivity, directions, and trip planner actions.
 */

const ModalController = (function () {
  let backdropEl = null;
  let modalContainerEl = null;
  let previouslyFocusedEl = null;
  let activePlace = null;
  let activeLang = "en";

  function init() {
    backdropEl = document.getElementById("modalBackdrop");
    modalContainerEl = document.querySelector(".modal-card") || document.getElementById("modalCard");

    if (!backdropEl) return;

    // Close on backdrop overlay click
    backdropEl.addEventListener("click", function (e) {
      if (e.target === backdropEl || e.target.classList.contains("modal-close-trigger")) {
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

  function openModalById(placeId, lang = "en") {
    activeLang = lang;
    const place = PLACES.find((p) => p.id === placeId);
    if (place) {
      open(place, lang);
    }
  }

  function open(item, lang = "en") {
    if (!backdropEl || !item) return;
    activePlace = item;
    activeLang = lang;
    previouslyFocusedEl = document.activeElement;

    // Track recently viewed
    if (item.id && typeof StorageService !== "undefined") {
      StorageService.addRecentlyViewed(item.id);
    }

    renderModalContent(item, lang);

    backdropEl.classList.add("is-open");
    backdropEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const closeBtn = backdropEl.querySelector(".modal-close-btn");
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  function renderModalContent(place, lang) {
    if (!modalContainerEl) return;

    const isFav = StorageService.isFavorite(place.id);
    const inPlan = StorageService.isInPlanner(place.id);

    const title = lang === "ka" ? place.kannadaName || place.name : place.name;
    const subTitle = lang === "ka" ? place.name : place.kannadaName || "";
    const nb = lang === "ka" ? place.neighbourhoodKn || place.neighbourhood : place.neighbourhood;
    const desc = lang === "ka" ? place.fullDescKn || place.fullDesc || place.ka?.long : place.fullDesc || place.en?.long;
    const historyText = lang === "ka" ? place.historyKn || place.history : place.history;

    const info = place.visitorInfo || {};
    const timing = lang === "ka" ? info.timingKn || info.timing : info.timing || "Check local hours";
    const fee = lang === "ka" ? info.feeKn || info.fee : info.fee || "Free / Standard";
    const metro = lang === "ka" ? info.nearestMetroKn || info.nearestMetro : info.nearestMetro || "BMTC Bus / Auto accessible";
    const duration = lang === "ka" ? info.durationKn || info.duration : info.duration || "1 - 2 hours";

    const dirText = lang === "ka" ? "ದಿಕ್ಕುಗಳು ಪಡೆಯಿರಿ" : "Get Directions";
    const favText = isFav ? (lang === "ka" ? "ಮೆಚ್ಚಿನವುಗಳಿಂದ ತೆಗೆಯಿರಿ" : "Saved in Favorites") : (lang === "ka" ? "ಮೆಚ್ಚಿನವುಗಳಿಗೆ ಸೇರಿಸಿ" : "Save to Favorites");
    const planText = inPlan ? (lang === "ka" ? "ಪ್ಲಾನರ್‌ನಿಂದ ತೆಗೆಯಿರಿ" : "Remove from Planner") : (lang === "ka" ? "ಟ್ರಿಪ್‌ಗೆ ಸೇರಿಸಿ" : "Add to Trip Planner");

    modalContainerEl.innerHTML = `
      <button class="modal-close-btn modal-close-trigger" aria-label="Close dialog">&times;</button>
      <div class="modal-hero-wrapper">
        <img src="${place.image || place.img}" alt="${title}" class="modal-hero-img" onerror="this.src='assets/images/logo/logo.png'">
        <div class="modal-hero-gradient"></div>
        <div class="modal-hero-meta">
          <span class="badge badge-category">${(place.category || "destination").replace("-", " ").toUpperCase()}</span>
          ${place.rating ? `<span class="badge badge-rating">⭐ ${place.rating}</span>` : ""}
        </div>
      </div>
      <div class="modal-content-body p-4">
        <div class="modal-heading mb-3">
          <h2 class="modal-title h3 mb-1" id="modalTitle">${title}</h2>
          ${subTitle ? `<p class="modal-subtitle text-muted fs-sm mb-1">${subTitle}</p>` : ""}
          <p class="modal-location text-primary fs-sm">📍 ${nb || "Bengaluru, Karnataka"}</p>
        </div>

        <div class="modal-description mb-4">
          <p id="modalText" class="lead-sm text-body">${desc}</p>
          ${
            historyText
              ? `
            <div class="history-callout p-3 rounded bg-surface-variant my-3 border-start border-4 border-primary">
              <strong class="d-block text-primary fs-xs text-uppercase tracking-wider mb-1">📜 ${lang === "ka" ? "ಐತಿಹಾಸಿಕ ಮಹತ್ವ" : "Historical Significance"}</strong>
              <p class="fs-sm m-0">${historyText}</p>
            </div>
          `
              : ""
          }
        </div>

        <div class="visitor-info-grid mb-4">
          <div class="info-cell">
            <span class="info-icon">🕒</span>
            <div>
              <strong class="info-label">${lang === "ka" ? "ಸಮಯ" : "Timings"}</strong>
              <p class="info-val">${timing}</p>
            </div>
          </div>
          <div class="info-cell">
            <span class="info-icon">🎟️</span>
            <div>
              <strong class="info-label">${lang === "ka" ? "ಪ್ರವೇಶ ಶುಲ್ಕ" : "Entry Fee"}</strong>
              <p class="info-val">${fee}</p>
            </div>
          </div>
          <div class="info-cell">
            <span class="info-icon">🚇</span>
            <div>
              <strong class="info-label">${lang === "ka" ? "ಸಮೀಪದ ಮೆಟ್ರೋ" : "Nearest Metro"}</strong>
              <p class="info-val">${metro}</p>
            </div>
          </div>
          <div class="info-cell">
            <span class="info-icon">⏱️</span>
            <div>
              <strong class="info-label">${lang === "ka" ? "ಅಂದಾಜು ಅವಧಿ" : "Suggested Duration"}</strong>
              <p class="info-val">${duration}</p>
            </div>
          </div>
        </div>

        <div class="modal-footer-actions d-flex gap-2 flex-wrap pt-3 border-top">
          <button class="btn btn-primary flex-grow-1" onclick="GeoService.openDirections(${place.coordinates?.lat || 12.9716}, ${place.coordinates?.lng || 77.5946}, '${encodeURIComponent(place.name)}')">
            🚗 ${dirText}
          </button>
          <button class="btn ${inPlan ? "btn-secondary" : "btn-outline-primary"}" onclick="ModalController.togglePlannerAction('${place.id}')">
            ${inPlan ? "✓" : "➕"} ${planText}
          </button>
          <button class="btn ${isFav ? "btn-danger" : "btn-outline-secondary"}" onclick="ModalController.toggleFavoriteAction('${place.id}')" title="Favorite">
            ${isFav ? "❤️" : "🤍"} ${favText}
          </button>
        </div>
      </div>
    `;
  }

  function toggleFavoriteAction(placeId) {
    StorageService.toggleFavorite(placeId);
    if (activePlace && activePlace.id === placeId) {
      renderModalContent(activePlace, activeLang);
    }
  }

  function togglePlannerAction(placeId) {
    if (StorageService.isInPlanner(placeId)) {
      StorageService.removeFromPlanner(placeId);
    } else {
      StorageService.addToPlanner(placeId);
    }
    if (activePlace && activePlace.id === placeId) {
      renderModalContent(activePlace, activeLang);
    }
  }

  function close() {
    if (!backdropEl) return;
    backdropEl.classList.remove("is-open");
    backdropEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (previouslyFocusedEl && typeof previouslyFocusedEl.focus === "function") {
      previouslyFocusedEl.focus();
    }
  }

  return {
    init,
    open,
    openModalById,
    toggleFavoriteAction,
    togglePlannerAction,
    close,
    isOpen
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ModalController;
}
