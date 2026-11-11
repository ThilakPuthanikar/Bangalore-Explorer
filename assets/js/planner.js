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
   * Render Curated Itineraries section
   */
  function renderItinerariesView(containerId = "itineraries-view") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const itinerariesHtml = CURATED_ITINERARIES.map((itinerary) => {
      const title = activeLang === "ka" ? itinerary.title.ka : itinerary.title.en;
      const summary = activeLang === "ka" ? itinerary.summary.ka : itinerary.summary.en;
      const duration = activeLang === "ka" ? itinerary.duration.ka : itinerary.duration.en;
      const pace = activeLang === "ka" ? itinerary.pace.ka : itinerary.pace.en;
      const transport = activeLang === "ka" ? itinerary.recommendedTransport.ka : itinerary.recommendedTransport.en;

      // Render timeline stops
      const stopsHtml = itinerary.stops
        .map((stop, index) => {
          const place = PLACES.find((p) => p.id === stop.placeId);
          if (!place) return "";
          const placeName = activeLang === "ka" ? place.kannadaName : place.name;
          const noteText = activeLang === "ka" ? stop.note.ka : stop.note.en;
          const nb = activeLang === "ka" ? place.neighbourhoodKn : place.neighbourhood;
          const isInTrip = StorageService.isInPlanner(place.id);

          return `
            <div class="itinerary-timeline-item">
              <div class="timeline-badge">${index + 1}</div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <span class="timeline-time">${Icons.get("clock", { size: 14 })} ${stop.timeSlot}</span>
                  <span class="timeline-nb">${Icons.get("map-pin", { size: 14 })} ${nb}</span>
                </div>
                <h4 class="timeline-place-title">
                  <a href="#/destination/${place.id}" class="place-link">${placeName}</a>
                </h4>
                <p class="timeline-note">${noteText}</p>
                <div class="timeline-actions">
                  <button class="btn btn-xs btn-outline-secondary" onclick="GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')">
                    ${Icons.get("navigation", { size: 13 })} ${activeLang === "ka" ? "ದಿಕ್ಕುಗಳು" : "Directions"}
                  </button>
                  <button class="btn btn-xs ${isInTrip ? "btn-secondary" : "btn-outline-primary"}" onclick="PlannerController.addPlaceToPlanner('${place.id}')">
                    ${Icons.get(isInTrip ? "check" : "plus", { size: 13 })} ${isInTrip ? (activeLang === "ka" ? "ಟ್ರಿಪ್‌ನಲ್ಲಿದೆ" : "In Trip") : (activeLang === "ka" ? "ಟ್ರಿಪ್‌ಗೆ ಸೇರಿಸಿ" : "Add to Trip")}
                  </button>
                </div>
              </div>
            </div>
          `;
        })
        .join("");

      const loadPlanText = activeLang === "ka" ? "ನನ್ನ ಪ್ಲಾನರ್‌ಗೆ ಲೋಡ್ ಮಾಡಿ" : "Load into My Planner";
      const openFullRouteText = activeLang === "ka" ? "ಸಂಪೂರ್ಣ ಮಾರ್ಗವನ್ನು ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ" : "Open Route in Google Maps";

      return `
        <article class="itinerary-card card mb-4">
          <div class="card-header bg-surface-variant d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <div class="d-flex gap-2 mb-2 flex-wrap">
                <span class="badge bg-primary text-white">${Icons.get("timer", { size: 13 })} ${duration}</span>
                <span class="badge bg-secondary text-white">${Icons.get("route", { size: 13 })} ${pace}</span>
              </div>
              <h3 class="itinerary-title mt-1 mb-0">${title}</h3>
            </div>
          </div>
          <div class="card-body">
            <p class="itinerary-summary lead-sm">${summary}</p>
            <div class="itinerary-meta mb-3">
              <strong>${Icons.get("train", { size: 14 })} ${activeLang === "ka" ? "ಶಿಫಾರಸು ಮಾಡಿದ ಸಾರಿಗೆ:" : "Recommended Transport:"}</strong> ${transport}
            </div>
            <div class="itinerary-timeline">
              ${stopsHtml}
            </div>
            <div class="itinerary-footer-actions mt-4 pt-3 border-top d-flex gap-2 flex-wrap">
              <button class="btn btn-primary" onclick="PlannerController.loadItineraryIntoPlanner('${itinerary.id}')">
                ${Icons.get("route", { size: 16 })} ${loadPlanText}
              </button>
              <button class="btn btn-outline-primary" onclick="PlannerController.openItineraryInGoogleMaps('${itinerary.id}')">
                ${Icons.get("map", { size: 16 })} ${openFullRouteText}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    container.innerHTML = `
      <div class="itineraries-container container py-4">
        <div class="section-intro text-center mb-5">
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
