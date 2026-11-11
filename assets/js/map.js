/**
 * Bangalore Explorer - Interactive Map Controller 2.0
 * Zero-key Leaflet.js + CartoDB tile integration with dynamic Dark Matter / Voyager
 * tile switching, Lucide SVG pin markers, responsive split-screen coordination,
 * popup info cards, and directions triggers.
 */

const MapController = (function () {
  let mapInstance = null;
  let markersLayer = null;
  let userMarker = null;
  let currentTileLayer = null;
  let activeCategory = "all";
  let activeLang = "en";
  let onSelectCallback = null;

  // Category Marker Colors & Lucide Icon Names
  const CATEGORY_STYLES = {
    "heritage-culture": { color: "#b45309", icon: "landmark" },
    "nature-outdoors": { color: "#047857", icon: "trees" },
    "food-dining": { color: "#c2410c", icon: "utensils" },
    "shopping-markets": { color: "#9333ea", icon: "shopping-bag" },
    "technology-innovation": { color: "#0369a1", icon: "cpu" },
    "temples-spirituality": { color: "#ea580c", icon: "sparkles" },
    "sports-recreation": { color: "#15803d", icon: "trophy" },
    "stay-accommodation": { color: "#4f46e5", icon: "hotel" },
    "essential-services": { color: "#0284c7", icon: "cross" }
  };

  const TILE_URLS = {
    osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    // Optional authenticated CARTO endpoint if key is provided on window.CARTO_API_KEY
    cartoLight: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    cartoDark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  };

  const TILE_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors';

  /**
   * Create custom SVG Leaflet DivIcon for pins
   */
  function createCustomIcon(category, isSelected = false) {
    const style = CATEGORY_STYLES[category] || { color: "#2563eb", icon: "map-pin" };
    const iconSvg = typeof Icons !== "undefined" ? Icons.get(style.icon, { size: 16 }) : "📍";
    const selectedClass = isSelected ? "is-selected" : "";

    const html = `
      <div class="custom-map-pin ${selectedClass}" style="--pin-color: ${style.color}">
        <span class="pin-symbol">${iconSvg}</span>
      </div>
    `;
    return L.divIcon({
      html: html,
      className: "custom-div-icon",
      iconSize: isSelected ? [42, 48] : [36, 42],
      iconAnchor: isSelected ? [21, 48] : [18, 42],
      popupAnchor: [0, -42]
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
      currentTileLayer = null;
    }

    // Centered at Bangalore CBD (Vidhana Soudha / MG Road)
    mapInstance = L.map(containerId, {
      center: [12.9716, 77.5946],
      zoom: 12,
      minZoom: 10,
      maxZoom: 19,
      zoomControl: false
    });

    // Add zoom control at bottom-right
    L.control.zoom({ position: "bottomright" }).addTo(mapInstance);

    // Initial tile layer according to current theme
    const initialTheme = typeof StorageService !== "undefined" ? StorageService.getTheme() : "light";
    applyTileTheme(initialTheme);

    markersLayer = L.layerGroup().addTo(mapInstance);

    renderMarkers(activeCategory);

    // Invalidate size after layout settles
    setTimeout(() => {
      if (mapInstance) {
        mapInstance.invalidateSize();
      }
    }, 250);
  }

  /**
   * Apply appropriate tile layer and styling based on active theme
   */
  function applyTileTheme(theme) {
    if (!mapInstance) return;

    // Use zero-key OpenStreetMap tiles by default (no watermarks, 100% free)
    // If a CARTO_API_KEY is explicitly configured on window, use Carto
    let url = TILE_URLS.osm;
    let subdomains = "abc";
    let attribution = TILE_ATTRIBUTION;

    if (window.CARTO_API_KEY) {
      url = (theme === "dark" ? TILE_URLS.cartoDark : TILE_URLS.cartoLight) + `?key=${window.CARTO_API_KEY}`;
      subdomains = "abcd";
      attribution += ' &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>';
    }

    if (currentTileLayer) {
      // If we are using OSM and the layer is already added, just update container theme
      if (!window.CARTO_API_KEY && currentTileLayer._url === TILE_URLS.osm) {
        updateMapContainerTheme(theme);
        return;
      }
      mapInstance.removeLayer(currentTileLayer);
    }

    currentTileLayer = L.tileLayer(url, {
      attribution: attribution,
      subdomains: subdomains,
      maxZoom: 19
    }).addTo(mapInstance);

    updateMapContainerTheme(theme);
  }

  function updateMapContainerTheme(theme) {
    if (!mapInstance) return;
    const container = mapInstance.getContainer();
    if (container) {
      container.setAttribute("data-map-theme", theme);
      container.classList.toggle("map-dark-tiles", theme === "dark");
    }
  }

  function switchTileTheme(theme) {
    applyTileTheme(theme);
  }

  /**
   * Render destination markers based on category filter
   */
  function renderMarkers(category = "all", selectedPlaceId = null) {
    activeCategory = category;
    if (!mapInstance || !markersLayer) return;

    markersLayer.clearLayers();

    const filtered =
      category === "all"
        ? PLACES
        : PLACES.filter((p) => p.category === category);

    filtered.forEach((place) => {
      if (!place.coordinates || !place.coordinates.lat || !place.coordinates.lng) return;

      const isSelected = selectedPlaceId && selectedPlaceId === place.id;
      const marker = L.marker([place.coordinates.lat, place.coordinates.lng], {
        icon: createCustomIcon(place.category, isSelected),
        title: activeLang === "ka" ? place.kannadaName : place.name
      });

      marker.placeId = place.id;

      const title = activeLang === "ka" ? place.kannadaName : place.name;
      const desc = activeLang === "ka" ? place.shortDescKn : place.shortDesc;
      const nb = activeLang === "ka" ? place.neighbourhoodKn : place.neighbourhood;
      const directionsText = activeLang === "ka" ? "ದಿಕ್ಕುಗಳು" : "Directions";
      const viewDetailsText = activeLang === "ka" ? "ವಿವರ ನೋಡಿ" : "View Details";

      const popupHtml = `
        <div class="map-popup-card">
          <img src="${place.image}" alt="${title}" class="map-popup-thumb" onerror="this.src='assets/images/placeholder.jpg'">
          <div class="map-popup-body">
            <span class="map-popup-cat">${(place.category || "destination").replace("-", " ").toUpperCase()}</span>
            <h4 class="map-popup-title">${title}</h4>
            <p class="map-popup-nb d-flex align-items-center gap-1">
              ${typeof Icons !== "undefined" ? Icons.get("map-pin", { size: 12 }) : "📍"} <span>${nb || "Bengaluru"}</span>
            </p>
            <p class="map-popup-desc">${desc}</p>
            <div class="map-popup-actions">
              <button class="btn btn-xs btn-outline-primary" onclick="window.Router ? window.Router.navigate('/destination/${place.id}') : (window.ModalController && window.ModalController.openModalById('${place.id}'))">
                ${typeof Icons !== "undefined" ? Icons.get("info", { size: 12 }) : ""} ${viewDetailsText}
              </button>
              <button class="btn btn-xs btn-primary" onclick="GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')">
                ${typeof Icons !== "undefined" ? Icons.get("navigation", { size: 12 }) : ""} ${directionsText}
              </button>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 300, className: "custom-leaflet-popup" });

      marker.on("click", () => {
        if (typeof onSelectCallback === "function") {
          onSelectCallback(place.id);
        }
      });

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
   * Graceful offline fallback renderer if Leaflet fails
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
              ${directionsLabel}
            </a>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="map-offline-fallback p-4 text-center">
        <div class="map-fallback-banner mb-4">
          <h3 class="h4">${activeLang === "ka" ? "ಸ್ಥಳ ನಿರ್ದೇಶನ ನಕ್ಷೆ" : "Bengaluru City Destinations Map"}</h3>
          <p class="text-muted">${activeLang === "ka" ? "ಎಲ್ಲಾ ಸ್ಥಳಗಳ ಅಧಿಕೃತ ನಿರ್ದೇಶಾಂಕಗಳು ಕೆಳಗೆ ಲಭ್ಯವಿದೆ. ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ:" : "Complete verified coordinates and navigation routes for Bengaluru landmarks:"}</p>
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

  function onSelect(cb) {
    onSelectCallback = cb;
  }

  // Subscribe to theme updates
  if (typeof StorageService !== "undefined") {
    StorageService.subscribe((event, data) => {
      if (event === "theme_changed" && data && data.theme) {
        switchTileTheme(data.theme);
      }
    });
  }

  return {
    init,
    renderMarkers,
    focusPlace,
    locateUser,
    switchTileTheme,
    setLanguage,
    onSelect,
    getMap: () => mapInstance
  };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = MapController;
}
