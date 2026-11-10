/**
 * Bangalore Explorer - Interactive Map Controller
 * Zero-key Leaflet.js + OpenStreetMap integration with category layers,
 * custom SVG markers, popup info cards, directions triggers, and offline fallback.
 */

const MapController = (function () {
  let mapInstance = null;
  let markersLayer = null;
  let userMarker = null;
  let activeCategory = "all";
  let activeLang = "en";

  // Category Marker Colors & Icons
  const CATEGORY_STYLES = {
    "heritage-culture": { color: "#b45309", symbol: "🏛️" },
    "nature-outdoors": { color: "#047857", symbol: "🌿" },
    "food-dining": { color: "#c2410c", symbol: "☕" },
    "shopping-markets": { color: "#9333ea", symbol: "🛍️" },
    "technology-innovation": { color: "#0369a1", symbol: "💻" },
    "temples-spirituality": { color: "#ea580c", symbol: "🕉️" },
    "sports-recreation": { color: "#15803d", symbol: "🏏" },
    "stay-accommodation": { color: "#4f46e5", symbol: "🏨" },
    "essential-services": { color: "#0284c7", symbol: "🏥" }
  };

  /**
   * Create custom SVG Leaflet DivIcon for pins
   */
  function createCustomIcon(category) {
    const style = CATEGORY_STYLES[category] || { color: "#2563eb", symbol: "📍" };
    const html = `
      <div class="custom-map-pin" style="--pin-color: ${style.color}">
        <span class="pin-symbol">${style.symbol}</span>
      </div>
    `;
    return L.divIcon({
      html: html,
      className: "custom-div-icon",
      iconSize: [36, 42],
      iconAnchor: [18, 42],
      popupAnchor: [0, -40]
    });
  }

  /**
   * Initialize Leaflet map in container
   */
  function init(containerId = "map-container", lang = "en") {
    activeLang = lang;
    const container = document.getElementById(containerId);
    if (!container) return;

    // Check if Leaflet library is available
    if (typeof L === "undefined") {
      renderFallbackMap(container);
      return;
    }

    if (mapInstance) {
      mapInstance.remove();
      mapInstance = null;
    }

    // Centered at Bangalore CBD (Vidhana Soudha / MG Road)
    mapInstance = L.map(containerId, {
      center: [12.9716, 77.5946],
      zoom: 12,
      minZoom: 10,
      maxZoom: 18,
      zoomControl: false
    });

    // Add zoom control at bottom-right
    L.control.zoom({ position: "bottomright" }).addTo(mapInstance);

    // OpenStreetMap free tile server
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(mapInstance);

    markersLayer = L.layerGroup().addTo(mapInstance);

    renderMarkers(activeCategory);

    // Invalidate size after layout settles
    setTimeout(() => {
      if (mapInstance) {
        mapInstance.invalidateSize();
      }
    }, 200);
  }

  /**
   * Render destination markers based on category filter
   */
  function renderMarkers(category = "all") {
    activeCategory = category;
    if (!mapInstance || !markersLayer) return;

    markersLayer.clearLayers();

    const filtered =
      category === "all"
        ? PLACES
        : PLACES.filter((p) => p.category === category);

    filtered.forEach((place) => {
      if (!place.coordinates || !place.coordinates.lat || !place.coordinates.lng) return;

      const marker = L.marker([place.coordinates.lat, place.coordinates.lng], {
        icon: createCustomIcon(place.category),
        title: activeLang === "ka" ? place.kannadaName : place.name
      });

      const title = activeLang === "ka" ? place.kannadaName : place.name;
      const desc = activeLang === "ka" ? place.shortDescKn : place.shortDesc;
      const nb = activeLang === "ka" ? place.neighbourhoodKn : place.neighbourhood;
      const directionsText = activeLang === "ka" ? "ದಿಕ್ಕುಗಳು ಪಡೆಯಿರಿ" : "Get Directions";
      const viewDetailsText = activeLang === "ka" ? "ವಿವರ ನೋಡಿ" : "View Details";

      const popupHtml = `
        <div class="map-popup-card">
          <img src="${place.image}" alt="${title}" class="map-popup-thumb" onerror="this.src='assets/images/logo/logo.png'">
          <div class="map-popup-body">
            <span class="map-popup-cat">${place.category.replace("-", " ").toUpperCase()}</span>
            <h4 class="map-popup-title">${title}</h4>
            <p class="map-popup-nb">📍 ${nb || "Bengaluru"}</p>
            <p class="map-popup-desc">${desc}</p>
            <div class="map-popup-actions">
              <button class="btn btn-sm btn-outline-primary" onclick="window.Router ? window.Router.navigate('/destination/${place.id}') : (window.ModalController && window.ModalController.openModalById('${place.id}'))">
                ${viewDetailsText}
              </button>
              <button class="btn btn-sm btn-primary" onclick="GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')">
                🚗 ${directionsText}
              </button>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 300, className: "custom-leaflet-popup" });
      markersLayer.addLayer(marker);
    });
  }

  /**
   * Center map on a specific place and open its popup
   */
  function focusPlace(placeId) {
    const place = PLACES.find((p) => p.id === placeId);
    if (!place || !mapInstance) return;

    mapInstance.setView([place.coordinates.lat, place.coordinates.lng], 15, {
      animate: true,
      duration: 0.8
    });

    if (markersLayer) {
      markersLayer.eachLayer((marker) => {
        const pos = marker.getLatLng();
        if (
          Math.abs(pos.lat - place.coordinates.lat) < 0.0001 &&
          Math.abs(pos.lng - place.coordinates.lng) < 0.0001
        ) {
          marker.openPopup();
        }
      });
    }
  }

  /**
   * User location button handler
   */
  async function locateUser() {
    if (!mapInstance) return;
    try {
      const loc = await GeoService.getUserLocation();
      if (userMarker) {
        userMarker.remove();
      }

      userMarker = L.circleMarker([loc.lat, loc.lng], {
        radius: 9,
        fillColor: "#2563eb",
        color: "#ffffff",
        weight: 3,
        opacity: 1,
        fillOpacity: 0.9
      }).addTo(mapInstance);

      userMarker.bindPopup(`<b>${activeLang === "ka" ? "ನಿಮ್ಮ ಸ್ಥಳ" : "Your Location"}</b>`).openPopup();
      mapInstance.setView([loc.lat, loc.lng], 14, { animate: true });
    } catch (err) {
      alert(err.message || "Unable to acquire current location.");
    }
  }

  /**
   * Graceful offline fallback renderer if Leaflet CDN fails
   */
  function renderFallbackMap(container) {
    const directionsLabel = activeLang === "ka" ? "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ" : "Open in Google Maps";
    let cardsHtml = PLACES.slice(0, 12)
      .map((p) => {
        const title = activeLang === "ka" ? p.kannadaName : p.name;
        const nb = activeLang === "ka" ? p.neighbourhoodKn : p.neighbourhood;
        return `
          <div class="fallback-map-card">
            <h4>${title}</h4>
            <p>📍 ${nb} (${p.coordinates.lat.toFixed(4)}, ${p.coordinates.lng.toFixed(4)})</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${p.coordinates.lat},${p.coordinates.lng}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              🚗 ${directionsLabel}
            </a>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="map-offline-fallback">
        <div class="map-fallback-banner">
          <h3>🗺️ ${activeLang === "ka" ? "ಸ್ಥಳ ನಿರ್ದೇಶನ ನಕ್ಷೆ" : "Bengaluru City Destinations Map"}</h3>
          <p>${activeLang === "ka" ? "ಎಲ್ಲಾ ಸ್ಥಳಗಳ ಅಧಿಕೃತ ನಿರ್ದೇಶಾಂಕಗಳು ಕೆಳಗೆ ಲಭ್ಯವಿದೆ. ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ:" : "Complete verified coordinates and navigation routes for Bengaluru landmarks:"}</p>
        </div>
        <div class="fallback-map-grid">${cardsHtml}</div>
      </div>
    `;
  }

  function setLanguage(lang) {
    activeLang = lang;
    if (mapInstance) {
      renderMarkers(activeCategory);
    }
  }

  return {
    init,
    renderMarkers,
    focusPlace,
    locateUser,
    setLanguage,
    getMap: () => mapInstance
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MapController;
}

