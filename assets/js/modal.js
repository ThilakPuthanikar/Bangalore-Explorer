/**
 * Bangalore Explorer - Modal Controller 2.0
 * Accessible detail modal dialog featuring rich travel guide metadata,
 * visitor guidelines, metro connectivity, directions, Lucide SVG icons, and reactive actions.
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

    // Reactive subscriber to storage events
    if (typeof StorageService !== "undefined") {
      StorageService.subscribe((event) => {
        if ((event === "favorites_changed" || event === "planner_changed") && isOpen() && activePlace) {
          renderModalContent(activePlace, activeLang);
        }
      });
    }
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
        <img src="${place.image || place.img}" alt="${title}" class="modal-hero-img" onerror="this.src='assets/images/placeholder.jpg'">
        <div class="modal-hero-gradient"></div>
        <div class="modal-hero-meta">
          <span class="badge badge-category">${(place.category || "destination").replace("-", " ").toUpperCase()}</span>
          ${place.rating ? `<span class="badge badge-rating d-inline-flex align-items-center gap-1">${Icons.get("star-filled", { size: 13, class: "text-amber" })} ${place.rating}</span>` : ""}
        </div>
      </div>
      <div class="modal-content-body p-4">
        <div class="modal-heading mb-3">
          <h2 class="modal-title h3 mb-1" id="modalTitle">${title}</h2>
          ${subTitle ? `<p class="modal-subtitle text-muted fs-sm mb-1">${subTitle}</p>` : ""}
          <p class="modal-location text-primary fs-sm d-flex align-items-center gap-1">
            ${Icons.get("map-pin", { size: 14 })} <span>${nb || "Bengaluru, Karnataka"}</span>
          </p>
        </div>

        <div class="modal-description mb-4">
          <p id="modalText" class="lead-sm text-body">${desc}</p>
          ${
            historyText
              ? `
            <div class="history-callout p-3 rounded bg-surface-variant my-3 border-start border-4 border-primary">
              <strong class="d-flex align-items-center gap-1 text-primary fs-xs text-uppercase tracking-wider mb-1">
                ${Icons.get("book-open", { size: 14 })} <span>${lang === "ka" ? "ಐತಿಹಾಸಿಕ ಮಹತ್ವ" : "Historical Significance"}</span>
              </strong>
              <p class="fs-sm m-0">${historyText}</p>
            </div>
          `
              : ""
          }
        </div>

        <div class="visitor-info-grid mb-4">
          <div class="info-cell">
            <span class="info-icon">${Icons.get("clock", { size: 18 })}</span>
            <div>
              <strong class="info-label">${lang === "ka" ? "ಸಮಯ" : "Timings"}</strong>
              <p class="info-val">${timing}</p>
            </div>
          </div>
          <div class="info-cell">
            <span class="info-icon">${Icons.get("ticket", { size: 18 })}</span>
            <div>
              <strong class="info-label">${lang === "ka" ? "ಪ್ರವೇಶ ಶುಲ್ಕ" : "Entry Fee"}</strong>
              <p class="info-val">${fee}</p>
            </div>
          </div>
          <div class="info-cell">
            <span class="info-icon">${Icons.get("train", { size: 18 })}</span>
            <div>
              <strong class="info-label">${lang === "ka" ? "ಸಮೀಪದ ಮೆಟ್ರೋ" : "Nearest Metro"}</strong>
              <p class="info-val">${metro}</p>
            </div>
          </div>
          <div class="info-cell">
            <span class="info-icon">${Icons.get("timer", { size: 18 })}</span>
            <div>
              <strong class="info-label">${lang === "ka" ? "ಅಂದಾಜು ಅವಧಿ" : "Suggested Duration"}</strong>
              <p class="info-val">${duration}</p>
            </div>
          </div>
        </div>

        <div class="modal-footer-actions d-flex gap-2 flex-wrap pt-3 border-top">
          <button class="btn btn-primary flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2" onclick="GeoService.openDirections(${place.coordinates?.lat || 12.9716}, ${place.coordinates?.lng || 77.5946}, '${encodeURIComponent(place.name)}')">
            ${Icons.get("navigation", { size: 16 })} <span>${dirText}</span>
          </button>
          <button class="btn ${inPlan ? "btn-secondary is-in-plan" : "btn-outline-primary"} d-inline-flex align-items-center gap-2" onclick="ModalController.togglePlannerAction('${place.id}')">
            ${Icons.get(inPlan ? "check" : "plus", { size: 16 })} <span>${planText}</span>
          </button>
          <button class="btn ${isFav ? "btn-danger" : "btn-outline-secondary"} d-inline-flex align-items-center gap-2" onclick="ModalController.toggleFavoriteAction('${place.id}')" title="Favorite">
            ${Icons.get(isFav ? "heart-filled" : "heart", { size: 16 })} <span>${favText}</span>
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

  function openPrivacyPolicy(lang = "en") {
    if (!backdropEl || !modalContainerEl) return;
    activePlace = null;
    activeLang = lang;
    previouslyFocusedEl = document.activeElement;

    const isKa = lang === "ka";
    const title = isKa ? "ಗೌಪ್ಯತಾ ನೀತಿ • Privacy Policy" : "Privacy Policy • Bangalore Explorer";
    const closeText = isKa ? "ಮುಚ್ಚಿ" : "Close";

    modalContainerEl.innerHTML = `
      <div class="legal-modal-content p-4 p-md-5" style="max-height: 80vh; overflow-y: auto;">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div>
            <span class="badge bg-primary-soft text-primary px-3 py-1 rounded-full fs-xs fw-semibold mb-2">
              ${isKa ? "ಅಧಿಕೃತ ನೀತಿ • ನವೆಂಬರ್ 2026" : "OFFICIAL POLICY • NOVEMBER 2026"}
            </span>
            <h2 class="h3 fw-bold mb-1">${title}</h2>
            <p class="text-muted fs-xs mb-0">
              ${isKa ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ 2.0 • ಸರ್ವರ್‌ರಹಿತ, ಗೌಪ್ಯತೆ-ಆಧಾರಿತ ಮುಕ್ತ ವೇದಿಕೆ" : "Bangalore Explorer 2.0 • Serverless, Privacy-First Open Platform"}
            </p>
          </div>
          <button class="btn btn-sm btn-outline-secondary modal-close-btn modal-close-trigger" aria-label="Close dialog">&times;</button>
        </div>

        <div class="legal-text-body text-secondary fs-sm" style="line-height: 1.7;">
          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "1. ಪರಿಚಯ ಮತ್ತು ಉದ್ದೇಶ" : "1. Introduction & Purpose"}</h4>
          <p>${isKa
            ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ (Bangalore Explorer) ಒಂದು ಮುಕ್ತ, ವಾಣಿಜ್ಯೇತರ ಹಾಗೂ ಶೈಕ್ಷಣಿಕ ಡಿಜಿಟಲ್ ನಗರ ವೇದಿಕೆಯಾಗಿದ್ದು, ಬೆಂಗಳೂರಿನ ಶ್ರೀಮಂತ ಸಂಸ್ಕೃತಿ, ಐತಿಹಾಸಿಕ ತಾಣಗಳು, ಉದ್ಯಾನಗಳು ಹಾಗೂ ದೈನಂದಿನ ಪ್ರವಾಸಗಳನ್ನು ಅನ್ವೇಷಿಸಲು ನೆರವಾಗುತ್ತದೆ. ಬಳಕೆದಾರರ ಗೌಪ್ಯತೆಯನ್ನು ರಕ್ಷಿಸುವುದು ನಮ್ಮ ಅತ್ಯುನ್ನತ ಆದ್ಯತೆಯಾಗಿದೆ."
            : "Bangalore Explorer is an open-source, non-commercial city discovery platform dedicated to showcasing Bengaluru's rich cultural heritage, historic petes, botanical gardens, and curated day trails. We believe user privacy is fundamental and must be respected by default."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "2. ನಾವು ಸಂಗ್ರಹಿಸದ ಮಾಹಿತಿಗಳು" : "2. Information We Do NOT Collect"}</h4>
          <p>${isKa
            ? "ನಮ್ಮ ವೇದಿಕೆಯು ಯಾವುದೇ ರಿಮೋಟ್ ಬ್ಯಾಕೆಂಡ್ ಸರ್ವರ್ ಅಥವಾ ಬಳಕೆದಾರರ ಡೇಟಾಬೇಸ್ ಅನ್ನು ನಿರ್ವಹಿಸುವುದಿಲ್ಲ. ನಾವು ನಿಮ್ಮ ಹೆಸರು, ಇಮೇಲ್, ದೂರವಾಣಿ ಸಂಖ್ಯೆ, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಯಾವುದೇ ಆರ್ಥಿಕ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ."
            : "Our platform operates without runtime servers, user accounts, databases, or tracking infrastructure. We do not collect, process, or store names, email addresses, phone numbers, passwords, IP addresses, or financial details."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "3. ಬ್ರೌಸರ್ ಸಂಗ್ರಹಣೆ (localStorage)" : "3. Local Browser Storage (localStorage)"}</h4>
          <p>${isKa
            ? "ನಿಮ್ಮ ಮೆಚ್ಚಿನ ತಾಣಗಳು (Favorites), ವೈಯಕ್ತಿಕ ಟ್ರಿಪ್ ಪ್ಲಾನರ್‌ನಲ್ಲಿ ಸೇರಿಸಲಾದ ಸ್ಥಳಗಳು, ಡಾರ್ಕ್/ಲೈಟ್ ಥೀಮ್ ಆಯ್ಕೆ ಹಾಗೂ ಭಾಷಾ ಆದ್ಯತೆ (ಕನ್ನಡ/ಇಂಗ್ಲಿಷ್) ಸಂಪೂರ್ಣವಾಗಿ ನಿಮ್ಮ ಸಾಧನದ ಬ್ರೌಸರ್‌ನ ಸ್ಥಳೀಯ ಮೆಮೊರಿಯಲ್ಲಿ (localStorage) ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ. ಈ ಮಾಹಿತಿಯು ನಿಮ್ಮ ಸಾಧನದಿಂದ ಹೊರಹೋಗುವುದಿಲ್ಲ ಮತ್ತು ಯಾವುದೇ ಮೂರನೇ ವ್ಯಕ್ತಿಗೆ ರವಾನೆಯಾಗುವುದಿಲ್ಲ."
            : "Your saved favorites, custom trip itineraries, dark/light theme preference, and language selection (English/Kannada) are stored strictly and exclusively inside your device's browser <code>localStorage</code>. This data never leaves your device and is never transmitted to any external server."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "4. ಬ್ರೌಸರ್ ಜಿಯೋಲೊಕೇಶನ್ (ಸ್ಥಳ ವಿವರ)" : "4. Browser Geolocation Services"}</h4>
          <p>${isKa
            ? "ಸ್ಥಳ ಅನುಮತಿಯು 100% ಐಚ್ಛಿಕವಾಗಿದೆ. ನೀವು 'Near Me' ಅಥವಾ 'ದಿಕ್ಕುಗಳು' ಗುಂಡಿಯನ್ನು ಸ್ಪರ್ಶಿಸಿದಾಗ ಮಾತ್ರ ಬ್ರೌಸರ್ ಜಿಯೋಲೊಕೇಶನ್ ಕರೆಯಲ್ಪಡುತ್ತದೆ. ಇದು ನಿಮ್ಮ ಸಮೀಪದ ತಾಣಗಳಿಗೆ ದೂರವನ್ನು ಲೆಕ್ಕಹಾಕಲು ನಿಮ್ಮ ಸಾಧನದಲ್ಲೇ ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತದೆ. ನಿಮ್ಮ ನಿಖರ ಸ್ಥಳವನ್ನು ಎಂದಿಗೂ ಸರ್ವರ್‌ನಲ್ಲಿ ಶೇಖರಿಸುವುದಿಲ್ಲ ಅಥವಾ ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದಿಲ್ಲ."
            : "Location permission is 100% optional. The browser Geolocation API is invoked only upon your explicit user action (clicking 'Near Me' or 'Get Directions'). Your latitude and longitude are calculated locally in your browser to sort distances to landmarks. Your location is never logged, stored, or transmitted remotely."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "5. ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಸೇವೆಗಳು" : "5. Third-Party Integrations"}</h4>
          <p>${isKa
            ? "ನಕ್ಷೆ ಟೈಲ್‌ಗಳಿಗಾಗಿ ಓಪನ್‌ಸ್ಟ್ರೀಟ್‌ಮ್ಯಾಪ್ (OpenStreetMap) ಮತ್ತು ಫಾಂಟ್‌ಗಳಿಗಾಗಿ ಗೂಗಲ್ ಫಾಂಟ್ಸ್ (Google Fonts) ಬಳಸಲಾಗುತ್ತದೆ. ನೀವು ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ದಿಕ್ಕುಗಳ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ ಗೂಗಲ್‌ನ ಬಾಹ್ಯ ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯಲ್ಪಡುತ್ತದೆ, ಇದು ಅವರದ್ದೇ ಆದ ಗೌಪ್ಯತಾ ನೀತಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ."
            : "To deliver an API-key-free experience, Bangalore Explorer loads free, open map tiles from OpenStreetMap under the ODbL license, and web fonts from Google Fonts. When clicking external navigation links, you are directed to Google Maps, which operates under Google's independent privacy policy."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "6. ಕುಕೀಸ್ ಮತ್ತು ಟ್ರ್ಯಾಕಿಂಗ್" : "6. Cookies & Tracking"}</h4>
          <p>${isKa
            ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ ಯಾವುದೇ ಜಾಹೀರಾತು ಕುಕೀಗಳನ್ನು, ಟ್ರ್ಯಾಕಿಂಗ್ ಪಿಕ್ಸೆಲ್‌ಗಳನ್ನು ಅಥವಾ ವಿಶ್ಲೇಷಣಾತ್ಮಕ (Analytics) ಟ್ರ್ಯಾಕರ್‌ಗಳನ್ನು ಬಳಸುವುದಿಲ್ಲ."
            : "Bangalore Explorer employs zero tracking cookies, zero advertising pixels, zero fingerprinting, and zero third-party analytics scripts (no Google Analytics, no Meta Pixel)."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "7. ಮಾಹಿತಿ ಅಳಿಸುವಿಕೆ" : "7. Data Retention & Erasure"}</h4>
          <p>${isKa
            ? "ನಿಮ್ಮ ಬ್ರೌಸರ್ ಸಂಗ್ರಹಣೆಯಲ್ಲಿರುವ ಡೇಟಾವನ್ನು ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಬ್ರೌಸರ್‌ನ 'Clear Browsing Data' ಮೂಲಕ ಅಥವಾ ಟ್ರಿಪ್ ಪ್ಲಾನರ್‌ನಲ್ಲಿರುವ 'Clear All' ಗುಂಡಿಯ ಮೂಲಕ ತಕ್ಷಣವೇ ಅಳಿಸಿಹಾಕಬಹುದು."
            : "You maintain complete control over locally stored data. You can erase all saved favorites and custom trip plans at any time via your browser's 'Clear Cache / Storage' settings, or by clicking 'Clear All' in the Trip Planner drawer."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "8. ಸಂಪರ್ಕ ಮತ್ತು ನಿರ್ವಹಣೆ" : "8. Maintainer & Contact"}</h4>
          <p>${isKa
            ? "ಯೋಜನೆಯನ್ನು ತಿಲಕ್ ಪೂತಾನಿಕರ್ (Thilak Puthanikar) ಅವರು ಸಾರ್ವಜನಿಕ ಮುಕ್ತ ಸಂಪನ್ಮೂಲವಾಗಿ ನಿರ್ವಹಿಸುತ್ತಿದ್ದಾರೆ. ತಾಂತ್ರಿಕ ವಿವರಗಳು ಮತ್ತು ಕೋಡ್ ಗಿಟ್‌ಹಬ್‌ನಲ್ಲಿ (GitHub: @ThilakPuthanikar) ಲಭ್ಯವಿದೆ."
            : "Maintained as an open-source public resource by Thilak Puthanikar (GitHub: <a href='https://github.com/ThilakPuthanikar' target='_blank' rel='noopener noreferrer'>@ThilakPuthanikar</a>)."}</p>
        </div>

        <div class="mt-4 pt-3 border-top text-end">
          <button class="btn btn-secondary btn-sm modal-close-trigger">${closeText}</button>
        </div>
      </div>
    `;

    backdropEl.classList.add("is-open");
    backdropEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const closeBtn = modalContainerEl.querySelector(".modal-close-trigger");
    if (closeBtn) closeBtn.focus();
  }

  function openTerms(lang = "en") {
    if (!backdropEl || !modalContainerEl) return;
    activePlace = null;
    activeLang = lang;
    previouslyFocusedEl = document.activeElement;

    const isKa = lang === "ka";
    const title = isKa ? "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು • Terms & Conditions" : "Terms & Conditions • Bangalore Explorer";
    const closeText = isKa ? "ಮುಚ್ಚಿ" : "Close";

    modalContainerEl.innerHTML = `
      <div class="legal-modal-content p-4 p-md-5" style="max-height: 80vh; overflow-y: auto;">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div>
            <span class="badge bg-primary-soft text-primary px-3 py-1 rounded-full fs-xs fw-semibold mb-2">
              ${isKa ? "ಅಧಿಕೃತ ನಿಯಮಗಳು • ನವೆಂಬರ್ 2026" : "OFFICIAL TERMS • NOVEMBER 2026"}
            </span>
            <h2 class="h3 fw-bold mb-1">${title}</h2>
            <p class="text-muted fs-xs mb-0">
              ${isKa ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ 2.0 • ಬಳಕೆಯ ನಿಯಮಗಳು ಮತ್ತು ಹಕ್ಕುತ್ಯಾಗ" : "Bangalore Explorer 2.0 • Terms of Use & Platform Disclaimers"}
            </p>
          </div>
          <button class="btn btn-sm btn-outline-secondary modal-close-btn modal-close-trigger" aria-label="Close dialog">&times;</button>
        </div>

        <div class="legal-text-body text-secondary fs-sm" style="line-height: 1.7;">
          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "1. ನಿಯಮಗಳ ಅಂಗೀಕಾರ" : "1. Acceptance of Terms"}</h4>
          <p>${isKa
            ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ ವೇದಿಕೆಯನ್ನು ಪ್ರವೇಶಿಸುವ ಮೂಲಕ ಮತ್ತು ಬಳಸುವ ಮೂಲಕ, ನೀವು ಈ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳಿಗೆ ಬದ್ಧರಾಗಿರಲು ಸಮ್ಮತಿಸುತ್ತೀರಿ."
            : "By accessing and using Bangalore Explorer, you acknowledge and agree to comply with these Terms & Conditions. If you do not agree with any part, please discontinue use."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "2. ಮಾಹಿತಿಯ ಸ್ವರೂಪ ಮತ್ತು ಉದ್ದೇಶ" : "2. Nature & Purpose of Content"}</h4>
          <p>${isKa
            ? "ಈ ವೇದಿಕೆಯಲ್ಲಿರುವ ಎಲ್ಲಾ ಮಾಹಿತಿಗಳು—ತಾಣಗಳ ವಿವರಣೆಗಳು, ಐತಿಹಾಸಿಕ ಲೇಖನಗಳು, ಛಾಯಾಚಿತ್ರಗಳು, ನಕ್ಷೆಗಳು ಮತ್ತು ದಿನಚರಿ ಪ್ರವಾಸಗಳು—ಕೇವಲ ಮಾಹಿತಿ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಅರಿವಿಗಾಗಿ ಮಾತ್ರ ಒದಗಿಸಲಾಗಿದೆ."
            : "All content provided—including destination descriptions, historical narratives, photographs, interactive maps, and suggested itineraries—is published strictly for informational, educational, and cultural appreciation purposes."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "3. ನಿಖರತೆ ಮತ್ತು ಪರಿಶೀಲನೆಯ ಹಕ್ಕುತ್ಯಾಗ" : "3. Accuracy & Verification Disclaimer"}</h4>
          <p>${isKa
            ? "ತಾಣಗಳ ಪ್ರವೇಶ ಸಮಯಗಳು, ಟಿಕೆಟ್ ದರಗಳು, ವಾರದ ರಜಾದಿನಗಳು ಹಾಗೂ ನಿಯಮಗಳು ಸಂಬಂಧಪಟ್ಟ ಇಲಾಖೆಗಳು (ASI, KSTDC, BBMP, ತೋಟಗಾರಿಕೆ ಇಲಾಖೆ, ನಮ್ಮ ಮೆಟ್ರೋ) ಕಾಲಕಾಲಕ್ಕೆ ಬದಲಾಯಿಸಬಹುದು. ಪ್ರವಾಸ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಅಗತ್ಯ ವಿವರಗಳನ್ನು ಅಧಿಕೃತ ಮೂಲಗಳಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಿಕೊಳ್ಳಲು ಸಲಹೆ ನೀಡಲಾಗುತ್ತದೆ."
            : "Opening hours, admission fees, weekly closures, and transit connectivity are managed by independent authorities (ASI, KSTDC, BBMP, Department of Horticulture, BMRCL) and private entities. Information may change without notice. Visitors are strongly advised to independently verify critical information prior to traveling."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "4. ನಕ್ಷೆ ಮತ್ತು ಸಂಚಾರ ಸುರಕ್ಷತೆ" : "4. Maps & Route Navigation Disclaimer"}</h4>
          <p>${isKa
            ? "ನಡಿಗೆ ಮತ್ತು ವಾಹನ ಸಂಚಾರದ ಮಾರ್ಗಗಳು ಬಾಹ್ಯ ನಕ್ಷಾ ಸೇವೆಗಳಿಂದ ಒದಗಿಸಲ್ಪಡುತ್ತವೆ. ಸಂಚಾರದ ಸಮಯದಲ್ಲಿ ರಸ್ತೆ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸುವುದು, ಸ್ಥಳೀಯ ಪರಿಸ್ಥಿತಿಯನ್ನು ಗಮನಿಸುವುದು ಹಾಗೂ ವೈಯಕ್ತಿಕ ಸುರಕ್ಷತೆಯ ಜವಾಬ್ದಾರಿ ಸಂಪೂರ್ಣವಾಗಿ ಬಳಕೆದಾರರದಾಗಿರುತ್ತದೆ."
            : "Walking and driving directions are routed via external navigation services. Routes are suggestions only. Users remain solely responsible for personal road safety, awareness of pedestrian conditions, and adherence to local traffic regulations."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "5. ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಮತ್ತು ಮುಕ್ತ ಬಳಕೆ" : "5. Intellectual Property & Fair Use"}</h4>
          <p>${isKa
            ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಕೋಡ್ ಮುಕ್ತ ಪರವಾನಗಿಯಡಿಯಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಐತಿಹಾಸಿಕ ತಾಣಗಳ ಛಾಯಾಚಿತ್ರಗಳನ್ನು ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ನ್ಯಾಯಯುತ ಬಳಕೆಯ (Fair Use) ತತ್ವದಡಿಯಲ್ಲಿ ಪ್ರಸ್ತುತಪಡಿಸಲಾಗಿದೆ."
            : "Bangalore Explorer software code and bilingual UI compilations are licensed as open-source. Heritage photographs and cultural media are presented under educational fair use with attribution to respective landmarks."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "6. ಹೊಣೆಗಾರಿಕೆಯ ಮಿತಿ" : "6. Limitation of Liability"}</h4>
          <p>${isKa
            ? "ಈ ವೇದಿಕೆಯನ್ನು 'ಯಥಾಸ್ಥಿತಿ' (As-Is) ಆಧಾರದ ಮೇಲೆ ಒದಗಿಸಲಾಗಿದೆ. ಯಾವುದೇ ತಾಣದ ಲಭ್ಯತೆ, ಸಮಯ ವ್ಯತ್ಯಾಸ ಅಥವಾ ಸಂಚಾರ ವಿಳಂಬಗಳಿಂದ ಉಂಟಾಗುವ ಯಾವುದೇ ನಷ್ಟಕ್ಕೆ ವೇದಿಕೆಯ ನಿರ್ವಾಹಕರು ಹೊಣೆಗಾರರಾಗಿರುವುದಿಲ್ಲ."
            : "Bangalore Explorer is provided 'as is' without warranties of any kind, express or implied. In no event shall the creators or contributors be liable for any inconvenience, delay, or loss arising from reliance on information presented."}</p>

          <h4 class="h6 fw-bold text-primary mt-4 mb-2">${isKa ? "7. ಸಂಪರ್ಕ" : "7. Contact"}</h4>
          <p>${isKa
            ? "ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಸಲಹೆಗಳಿಗಾಗಿ ಗಿಟ್‌ಹಬ್ ರೆಪೊಸಿಟರಿ ಮೂಲಕ ಸಂಪರ್ಕಿಸಬಹುದು (GitHub: @ThilakPuthanikar)."
            : "For questions or suggested updates, visit the project repository on GitHub (<a href='https://github.com/ThilakPuthanikar/Bangalore-Explorer' target='_blank' rel='noopener noreferrer'>@ThilakPuthanikar</a>)."}</p>
        </div>

        <div class="mt-4 pt-3 border-top text-end">
          <button class="btn btn-secondary btn-sm modal-close-trigger">${closeText}</button>
        </div>
      </div>
    `;

    backdropEl.classList.add("is-open");
    backdropEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const closeBtn = modalContainerEl.querySelector(".modal-close-trigger");
    if (closeBtn) closeBtn.focus();
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
    openPrivacyPolicy,
    openTerms,
    toggleFavoriteAction,
    togglePlannerAction,
    close,
    isOpen
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = ModalController;
}
