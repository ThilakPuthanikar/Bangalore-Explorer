/**
 * Bangalore Explorer - Trip Planner & Curated Itineraries
 * Interactive itinerary visualizer and personal day-planner with
 * multi-stop Google Maps routing export and Lucide SVG icons.
 */

const PlannerController = (function () {
  let activeLang = "en";

  function setLanguage(lang) {
    activeLang = lang;
    renderItinerariesView();
    renderPersonalPlanner();
  }

  /**
   * Render Curated Itineraries section (Premium Editorial Expedition Cards)
   */
  function renderItinerariesView(containerId = "itineraries-view") {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Verified high-resolution cover photography for each itinerary
    const itineraryCovers = {
      "royal-heritage-trail": "assets/images/destinations/heritage-culture/bangalore-palace.jpg",
      "green-heart-colonial": "assets/images/destinations/nature-outdoors/cubbon-park.jpg",
      "south-bangalore-culture": "assets/images/destinations/temples-spirituality/bull-temple.jpg",
      "bazaars-silks-street-food": "assets/images/destinations/shopping-markets/kr-market.jpg",
      "tech-science-circuit": "assets/images/destinations/technology-innovation/iisc-bangalore.jpg",
      "nature-wildlife-escape": "assets/images/destinations/nature-outdoors/bannerghatta-national-park.jpg"
    };

    const itinerariesHtml = CURATED_ITINERARIES.map((itinerary, itIndex) => {
      const title = activeLang === "ka" ? itinerary.title.ka : itinerary.title.en;
      const summary = activeLang === "ka" ? itinerary.summary.ka : itinerary.summary.en;
      const duration = activeLang === "ka" ? itinerary.duration.ka : itinerary.duration.en;
      const pace = activeLang === "ka" ? itinerary.pace.ka : itinerary.pace.en;
      const transport = activeLang === "ka" ? itinerary.recommendedTransport.ka : itinerary.recommendedTransport.en;
      const coverImg = itineraryCovers[itinerary.id] || "assets/images/destinations/heritage-culture/bangalore-palace.jpg";
      const isFirst = itIndex === 0;

      // Render step-by-step timeline stops with rich cards
      const stopsHtml = itinerary.stops
        .map((stop, index) => {
          const place = PLACES.find((p) => p.id === stop.placeId);
          if (!place) return "";
          const placeName = activeLang === "ka" ? place.kannadaName : place.name;
          const noteText = activeLang === "ka" ? stop.note.ka : stop.note.en;
          const nb = activeLang === "ka" ? place.neighbourhoodKn : place.neighbourhood;
          const isInTrip = StorageService.isInPlanner(place.id);
          const stopNumber = String(index + 1).padStart(2, "0");

          return `
            <div class="itinerary-step-row">
              <div class="itinerary-step-indicator">
                <div class="itinerary-step-badge">${stopNumber}</div>
                ${index < itinerary.stops.length - 1 ? '<div class="itinerary-step-line"></div>' : ''}
              </div>
              <div class="itinerary-step-card">
                <div class="itinerary-step-thumb-wrap">
                  <img src="${place.image}" alt="${placeName}" class="itinerary-step-thumb" loading="lazy">
                  ${place.rating ? `<span class="itinerary-step-rating">${Icons.get("star-filled", { size: 10 })} ${place.rating}</span>` : ""}
                </div>
                <div class="itinerary-step-info">
                  <div class="itinerary-step-meta mb-1">
                    <span class="itinerary-step-time">${Icons.get("clock", { size: 12 })} ${stop.timeSlot}</span>
                    <span class="itinerary-step-nb">${Icons.get("map-pin", { size: 12 })} ${nb}</span>
                  </div>
                  <h4 class="itinerary-step-title mb-1">
                    <a href="#/destination/${place.id}">${placeName}</a>
                  </h4>
                  <p class="itinerary-step-note mb-2">${noteText}</p>
                  <div class="itinerary-step-actions d-flex gap-2">
                    <button class="btn btn-xs btn-outline-secondary d-inline-flex align-items-center gap-1" onclick="GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')">
                      ${Icons.get("navigation", { size: 12 })} <span>${activeLang === "ka" ? "ದಿಕ್ಕುಗಳು" : "Directions"}</span>
                    </button>
                    <button class="btn btn-xs ${isInTrip ? "btn-secondary" : "btn-outline-primary"} d-inline-flex align-items-center gap-1" onclick="PlannerController.addPlaceToPlanner('${place.id}')">
                      ${Icons.get(isInTrip ? "check" : "plus", { size: 12 })} <span>${isInTrip ? (activeLang === "ka" ? "ಟ್ರಿಪ್‌ನಲ್ಲಿದೆ" : "In Trip") : (activeLang === "ka" ? "ಟ್ರಿಪ್‌ಗೆ ಸೇರಿಸಿ" : "Add to Trip")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
        })
        .join("");

      const loadPlanText = activeLang === "ka" ? "ನನ್ನ ಪ್ಲಾನರ್‌ಗೆ ಲೋಡ್ ಮಾಡಿ" : "Load Full Trail into Planner";
      const openFullRouteText = activeLang === "ka" ? "ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ಸಂಪೂರ್ಣ ಮಾರ್ಗ" : "Open Route in Google Maps";
      const viewDetailsText = isFirst
        ? (activeLang === "ka" ? "ವೇಳಾಪಟ್ಟಿ ಮರೆಮಾಡಿ" : "Hide Schedule")
        : (activeLang === "ka" ? `ಸಂಪೂರ್ಣ ವೇಳಾಪಟ್ಟಿ (${itinerary.stops.length} ತಾಣಗಳು)` : `View Complete Schedule (${itinerary.stops.length} Stops)`);

      return `
        <article class="itinerary-premium-card mb-4" id="itinerary-card-${itinerary.id}">
          <!-- Cinematic Hero Banner -->
          <div class="itinerary-card-hero">
            <img src="${coverImg}" alt="${title}" class="itinerary-hero-img" loading="lazy">
            <div class="itinerary-hero-overlay"></div>
            
            <div class="itinerary-hero-top-badges">
              <span class="itinerary-badge-pill">
                ${Icons.get("sparkles", { size: 12 })} <span>${activeLang === "ka" ? "ಕ್ಯುರೇಟೆಡ್ ದಿನದ ಪ್ರವಾಸ" : "Curated Day Trail"}</span>
              </span>
              <span class="itinerary-badge-pill badge-duration">
                ${Icons.get("timer", { size: 12 })} <span>${duration}</span>
              </span>
            </div>

            <div class="itinerary-hero-headline-wrap">
              <h3 class="itinerary-hero-title mb-1">${title}</h3>
              <p class="itinerary-hero-summary mb-0">${summary}</p>
            </div>
          </div>

          <!-- Key Highlights Specs Ribbon -->
          <div class="itinerary-specs-ribbon">
            <div class="itinerary-spec-item">
              <span class="spec-icon text-primary">${Icons.get("route", { size: 14 })}</span>
              <div class="spec-content">
                <span class="spec-label">${activeLang === "ka" ? "ನಡಿಗೆ ಶೈಲಿ:" : "Pace:"}</span>
                <span class="spec-val">${pace}</span>
              </div>
            </div>
            <div class="itinerary-spec-item">
              <span class="spec-icon text-amber">${Icons.get("train", { size: 14 })}</span>
              <div class="spec-content">
                <span class="spec-label">${activeLang === "ka" ? "ಶಿಫಾರಸು ಸಾರಿಗೆ:" : "Transit:"}</span>
                <span class="spec-val">${transport}</span>
              </div>
            </div>
            <div class="itinerary-spec-item">
              <span class="spec-icon text-emerald">${Icons.get("map-pin", { size: 14 })}</span>
              <div class="spec-content">
                <span class="spec-label">${activeLang === "ka" ? "ನಿಲುಗಡೆಗಳು:" : "Stops:"}</span>
                <span class="spec-val">${itinerary.stops.length} ${activeLang === "ka" ? "ಪ್ರಮುಖ ಸ್ಥಳಗಳು" : "Landmarks"}</span>
              </div>
            </div>
          </div>

          <!-- Main Actions Strip -->
          <div class="itinerary-actions-strip">
            <button class="btn btn-primary btn-sm d-inline-flex align-items-center gap-2" onclick="PlannerController.loadItineraryIntoPlanner('${itinerary.id}')">
              ${Icons.get("plus", { size: 14 })} <span>${loadPlanText}</span>
            </button>
            <button class="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2" onclick="PlannerController.openItineraryInGoogleMaps('${itinerary.id}')">
              ${Icons.get("navigation", { size: 14 })} <span>${openFullRouteText}</span>
            </button>
            <button class="btn btn-secondary btn-sm itinerary-toggle-btn d-inline-flex align-items-center gap-2 ms-auto" id="itinerary-toggle-btn-${itinerary.id}" onclick="PlannerController.toggleItineraryDetails('${itinerary.id}')">
              <span class="itinerary-toggle-label">${viewDetailsText}</span>
              <span class="itinerary-toggle-icon" style="transition: transform 0.25s ease; ${isFirst ? 'transform: rotate(180deg);' : ''}">${Icons.get("chevron-down", { size: 14 })}</span>
            </button>
          </div>

          <!-- Stepped Timeline Details Panel -->
          <div class="itinerary-details-panel ${isFirst ? "open" : ""}" id="itinerary-details-${itinerary.id}">
            <div class="itinerary-timeline-premium pt-3 mt-3 border-top">
              ${stopsHtml}
            </div>
          </div>
        </article>
      `;
    }).join("");

    container.innerHTML = `
      <div class="itineraries-container container py-4">
        <div class="section-intro text-center mb-5">
          <span class="badge bg-primary-soft text-primary px-3 py-1 rounded-full mb-2 fw-semibold">
            ${Icons.get("route", { size: 14 })} ${activeLang === "ka" ? "ದಿನಚರಿ ಪರಿಶೋಧನೆಗಳು" : "Ready-Made Day Expeditions"}
          </span>
          <h2 class="display-title">${activeLang === "ka" ? "ಬೆಂಗಳೂರು ಕ್ಯುರೇಟೆಡ್ ದಿನಚರಿ ಪ್ರವಾಸಗಳು" : "Curated Bengaluru Day Itineraries"}</h2>
          <p class="section-lead">${activeLang === "ka" ? "ನಿಮ್ಮ ಅನುಕೂಲಕ್ಕೆ ತಕ್ಕಂತೆ ರೂಪಿಸಲಾದ 6 ಪಾರಂಪರಿಕ, ಸಾಂಸ್ಕೃತಿಕ, ತಂತ್ರಜ್ಞಾನ ಹಾಗೂ ಪ್ರಕೃತಿ ದಿನದ ಪ್ರವಾಸಗಳು." : "Expertly planned walking and transit trails covering royal palaces, historic pete bazaars, lush green lungs, and tech circuits."}</p>
        </div>
        <div class="itineraries-list">
          ${itinerariesHtml}
        </div>
      </div>
    `;
  }

  /**
   * Toggle expansion of itinerary schedule details
   */
  function toggleItineraryDetails(itineraryId) {
    const panel = document.getElementById(`itinerary-details-${itineraryId}`);
    const btn = document.getElementById(`itinerary-toggle-btn-${itineraryId}`);
    if (!panel) return;
    const isExpanded = panel.classList.toggle("open");
    if (btn) {
      const chevron = btn.querySelector(".itinerary-toggle-icon");
      if (chevron) {
        chevron.style.transform = isExpanded ? "rotate(180deg)" : "rotate(0deg)";
      }
      const label = btn.querySelector(".itinerary-toggle-label");
      if (label) {
        const itin = CURATED_ITINERARIES.find(i => i.id === itineraryId);
        const stopsCount = itin ? itin.stops.length : "";
        label.textContent = isExpanded
          ? (activeLang === "ka" ? "ವೇಳಾಪಟ್ಟಿ ಮರೆಮಾಡಿ" : "Hide Schedule")
          : (activeLang === "ka" ? `ಸಂಪೂರ್ಣ ವೇಳಾಪಟ್ಟಿ (${stopsCount} ತಾಣಗಳು)` : `View Complete Schedule (${stopsCount} Stops)`);
      }
    }
  }

  /**
   * Render Personal Planner Drawer/View in all matching containers
   */
  function renderPersonalPlanner(targetContainerId = null) {
    const targetContainers = [];
    if (targetContainerId) {
      const c = document.getElementById(targetContainerId);
      if (c) targetContainers.push(c);
    }
    const drawerContent = document.getElementById("planner-drawer-content");
    if (drawerContent && !targetContainers.includes(drawerContent)) {
      targetContainers.push(drawerContent);
    }
    const personalContainer = document.getElementById("personal-planner-container");
    if (personalContainer && !targetContainers.includes(personalContainer)) {
      targetContainers.push(personalContainer);
    }

    const stopIds = StorageService.getPlannerStops();
    const plannerPlaces = stopIds
      .map((id) => PLACES.find((p) => p.id === id))
      .filter(Boolean);

    // Always update planner badge counters globally
    const badges = document.querySelectorAll(".planner-count-badge, #planner-count-badge");
    badges.forEach((b) => {
      b.textContent = plannerPlaces.length;
      if (b.classList.contains("badge")) {
        b.style.display = plannerPlaces.length > 0 ? "inline-block" : "none";
      }
    });

    if (targetContainers.length === 0) return;

    const title = activeLang === "ka" ? "ನನ್ನ ಪ್ರವಾಸ ಯೋಜನೆ" : "My Custom Trip Planner";
    const emptyMsg = activeLang === "ka" ? "ನಿಮ್ಮ ಪ್ರವಾಸ ಪಟ್ಟಿಯಲ್ಲಿ ಯಾವುದೇ ಸ್ಥಳಗಳಿಲ್ಲ. ಯಾವುದೇ ಕಾರ್ಡ್‌ನಿಂದ 'ಟ್ರಿಪ್‌ಗೆ ಸೇರಿಸಿ' ಕ್ಲಿಕ್ ಮಾಡಿ!" : "Your trip planner is empty. Click '+ Add to Trip' on any destination to build your personal route!";
    const exportText = activeLang === "ka" ? "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ಎಲ್ಲಾ ನಿಲುಗಡೆಗಳನ್ನು ತೆರೆಯಿರಿ" : "Export Full Route to Google Maps";
    const clearText = activeLang === "ka" ? "ತೆರವುಗೊಳಿಸಿ" : "Clear All";

    let stopsListHtml = "";
    if (plannerPlaces.length === 0) {
      stopsListHtml = `
        <div class="planner-empty-state text-center py-5 text-muted">
          <div class="mb-3 opacity-50">${Icons.get("route", { size: 40 })}</div>
          <p class="fs-sm mb-0">${emptyMsg}</p>
        </div>
      `;
    } else {
      stopsListHtml = plannerPlaces
        .map((place, idx) => {
          const placeName = activeLang === "ka" ? place.kannadaName : place.name;
          const nb = activeLang === "ka" ? place.neighbourhoodKn : place.neighbourhood;

          return `
            <div class="planner-stop-item d-flex align-items-center justify-content-between p-2 mb-2 rounded bg-surface border" data-id="${place.id}">
              <div class="d-flex align-items-center gap-2">
                <span class="stop-index badge bg-primary rounded-circle">${idx + 1}</span>
                <img src="${place.image}" alt="" class="planner-thumb rounded" width="40" height="40" style="object-fit: cover;" onerror="this.src='assets/images/placeholder.jpg'">
                <div>
                  <h6 class="mb-0 fs-sm font-weight-bold">${placeName}</h6>
                  <small class="text-muted fs-xs">${Icons.get("map-pin", { size: 11 })} ${nb}</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-1">
                <button class="btn btn-xs btn-icon btn-outline-secondary" onclick="PlannerController.moveStop('${place.id}', -1)" title="Move Up" ${idx === 0 ? "disabled" : ""}>${Icons.get("chevron-up", { size: 14 })}</button>
                <button class="btn btn-xs btn-icon btn-outline-secondary" onclick="PlannerController.moveStop('${place.id}', 1)" title="Move Down" ${idx === plannerPlaces.length - 1 ? "disabled" : ""}>${Icons.get("chevron-down", { size: 14 })}</button>
                <button class="btn btn-xs btn-icon btn-outline-danger" onclick="PlannerController.removePlaceFromPlanner('${place.id}')" title="Remove">${Icons.get("trash-2", { size: 14 })}</button>
              </div>
            </div>
          `;
        })
        .join("");
    }

    const htmlContent = `
      <div class="planner-panel-inner p-3">
        <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <h4 class="m-0 fs-md d-flex align-items-center gap-2">
            ${Icons.get("route", { size: 18 })} 
            <span>${title}</span>
            <span class="badge bg-secondary fs-xs">${plannerPlaces.length}</span>
          </h4>
          ${plannerPlaces.length > 0 ? `<button class="btn btn-xs btn-outline-danger d-flex align-items-center gap-1" onclick="PlannerController.clearAllPlanner()">${Icons.get("trash-2", { size: 12 })} ${clearText}</button>` : ""}
        </div>
        <div class="planner-stops-list">
          ${stopsListHtml}
        </div>
        ${
          plannerPlaces.length > 0
            ? `
          <div class="planner-actions mt-3 pt-2 border-top">
            <button class="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2" onclick="PlannerController.exportToGoogleMaps()">
              ${Icons.get("navigation", { size: 16 })} ${exportText}
            </button>
          </div>
        `
            : ""
        }
      </div>
    `;

    targetContainers.forEach((c) => {
      c.innerHTML = htmlContent;
    });
  }

  function addPlaceToPlanner(placeId) {
    const success = StorageService.addToPlanner(placeId);
    if (success) {
      renderPersonalPlanner();
      showToast(activeLang === "ka" ? "ಪ್ರವಾಸ ಪಟ್ಟಿಗೆ ಸೇರಿಸಲಾಗಿದೆ!" : "Added to your Trip Planner!");
    } else {
      showToast(activeLang === "ka" ? "ಈ ಸ್ಥಳವು ಈಗಾಗಲೇ ಪಟ್ಟಿಯಲ್ಲಿದೆ." : "Place already in Trip Planner.");
    }
  }

  function removePlaceFromPlanner(placeId) {
    StorageService.removeFromPlanner(placeId);
    renderPersonalPlanner();
  }

  function moveStop(placeId, direction) {
    const stops = StorageService.getPlannerStops();
    const idx = stops.indexOf(placeId);
    if (idx === -1) return;
    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= stops.length) return;

    const temp = stops[idx];
    stops[idx] = stops[targetIdx];
    stops[targetIdx] = temp;

    StorageService.reorderPlanner(stops);
    renderPersonalPlanner();
  }

  function clearAllPlanner() {
    if (confirm(activeLang === "ka" ? "ಪ್ರವಾಸ ಪಟ್ಟಿಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತೆರವುಗೊಳಿಸಬೇಕೆ?" : "Clear all stops from your Trip Planner?")) {
      StorageService.clearPlanner();
      renderPersonalPlanner();
    }
  }

  function loadItineraryIntoPlanner(itineraryId) {
    const itinerary = CURATED_ITINERARIES.find((it) => it.id === itineraryId);
    if (!itinerary) return;
    itinerary.stops.forEach((s) => StorageService.addToPlanner(s.placeId));
    renderPersonalPlanner();
    showToast(activeLang === "ka" ? "ದಿನಚರಿ ಪ್ರವಾಸವನ್ನು ನಿಮ್ಮ ಪ್ಲಾನರ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ!" : "Itinerary stops loaded into your planner!");
  }

  function openItineraryInGoogleMaps(itineraryId) {
    const itinerary = CURATED_ITINERARIES.find((it) => it.id === itineraryId);
    if (!itinerary) return;
    const places = itinerary.stops
      .map((s) => PLACES.find((p) => p.id === s.placeId))
      .filter(Boolean);
    GeoService.openMultiStopRoute(places, "driving");
  }

  function exportToGoogleMaps() {
    const stopIds = StorageService.getPlannerStops();
    const places = stopIds
      .map((id) => PLACES.find((p) => p.id === id))
      .filter(Boolean);
    if (places.length === 0) return;
    GeoService.openMultiStopRoute(places, "driving");
  }

  function showToast(msg) {
    let toast = document.getElementById("app-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "app-toast";
      toast.className = "app-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
  }

  // Subscribe to storage changes automatically
  StorageService.subscribe((event) => {
    if (event === "planner_changed") {
      renderPersonalPlanner();
    }
  });

  return {
    setLanguage,
    renderItinerariesView,
    toggleItineraryDetails,
    renderPersonalPlanner,
    addPlaceToPlanner,
    removePlaceFromPlanner,
    moveStop,
    clearAllPlanner,
    loadItineraryIntoPlanner,
    openItineraryInGoogleMaps,
    exportToGoogleMaps
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = PlannerController;
}
