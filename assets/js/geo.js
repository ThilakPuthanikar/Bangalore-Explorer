/**
 * Bangalore Explorer - Geolocation & Direction Services
 * Privacy-first: Requests browser location ONLY upon explicit user action.
 * Calculates distances via Haversine formula and generates Google Maps directions.
 */

const GeoService = (function () {
  let cachedUserLocation = null;
  let isLocating = false;

  /**
   * Calculate distance between two lat/lng coordinates in kilometers (Haversine)
   */
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /**
   * Format distance string (e.g. '850 m' or '3.4 km')
   */
  function formatDistance(distanceKm, lang = "en") {
    if (distanceKm === null || isNaN(distanceKm)) return "";
    if (distanceKm < 1) {
      const meters = Math.round(distanceKm * 1000);
      return lang === "ka" ? `${meters} ಮೀ` : `${meters} m`;
    }
    const km = distanceKm.toFixed(1);
    return lang === "ka" ? `${km} ಕಿ.ಮೀ` : `${km} km`;
  }

  /**
   * Request user location on explicit action
   * Returns Promise resolving to { lat, lng } or rejecting with error
   */
  function getUserLocation() {
    return new Promise((resolve, reject) => {
      if (cachedUserLocation) {
        return resolve(cachedUserLocation);
      }
      if (!navigator.geolocation) {
        return reject(new Error("Geolocation is not supported by your browser."));
      }
      isLocating = true;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          isLocating = false;
          cachedUserLocation = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
          resolve(cachedUserLocation);
        },
        (err) => {
          isLocating = false;
          let msg = "Location access was denied or timed out.";
          if (err.code === err.PERMISSION_DENIED) {
            msg = "Location permission denied. You can enable it in your browser settings.";
          }
          reject(new Error(msg));
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
      );
    });
  }

  /**
   * Open Google Maps directions to a specific coordinate
   * If user location is known or accessible, routes from user -> destination.
   * Otherwise falls back gracefully to opening the destination pin.
   */
  async function openDirections(destLat, destLng, destName = "", travelMode = "driving") {
    let url = "";
    try {
      const userLoc = await getUserLocation();
      url = `https://www.google.com/maps/dir/?api=1&origin=${userLoc.lat},${userLoc.lng}&destination=${destLat},${destLng}&travelmode=${encodeURIComponent(travelMode)}`;
    } catch (e) {
      // Graceful fallback without user coordinates
      const query = destName ? `${encodeURIComponent(destName)}&center=${destLat},${destLng}` : `${destLat},${destLng}`;
      url = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}&travelmode=${encodeURIComponent(travelMode)}`;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  /**
   * Open Google Maps with multiple waypoints (for Personal Trip Planner)
   */
  async function openMultiStopRoute(places = [], travelMode = "driving") {
    if (!places || places.length === 0) return;

    if (places.length === 1) {
      return openDirections(places[0].coordinates.lat, places[0].coordinates.lng, places[0].name, travelMode);
    }

    const first = places[0];
    const last = places[places.length - 1];
    const waypoints = places.slice(1, -1).map(p => `${p.coordinates.lat},${p.coordinates.lng}`).join("|");

    let url = `https://www.google.com/maps/dir/?api=1&origin=${first.coordinates.lat},${first.coordinates.lng}&destination=${last.coordinates.lat},${last.coordinates.lng}&travelmode=${encodeURIComponent(travelMode)}`;
    if (waypoints) {
      url += `&waypoints=${encodeURIComponent(waypoints)}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return {
    calculateDistance,
    formatDistance,
    getUserLocation,
    getCachedLocation: () => cachedUserLocation,
    isLocating: () => isLocating,
    openDirections,
    openMultiStopRoute
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GeoService;
}

