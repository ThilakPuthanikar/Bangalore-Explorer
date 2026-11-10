/**
 * Bangalore Explorer - Local Storage & User State
 * Manages favorites, custom trip planner, recently viewed places,
 * and user preferences without requiring any server or database.
 */

const StorageService = (function () {
  const KEYS = {
    FAVORITES: "bengaluru_favorites",
    PLANNER: "bengaluru_trip_planner",
    RECENT: "bengaluru_recent_places",
    THEME: "theme",
    LANG: "lang"
  };

  const listeners = [];

  function subscribe(callback) {
    if (typeof callback === "function") {
      listeners.push(callback);
    }
  }

  function emitChange(event, data) {
    listeners.forEach((cb) => {
      try {
        cb(event, data);
      } catch (err) {
        console.error("Storage listener error:", err);
      }
    });
  }

  // Safe JSON getter
  function getJson(key, defaultValue) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }

  // Safe JSON setter
  function setJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("localStorage quota exceeded or unavailable:", e);
    }
  }

  /* --- Favorites --- */
  function getFavorites() {
    return getJson(KEYS.FAVORITES, []);
  }

  function isFavorite(placeId) {
    const list = getFavorites();
    return list.includes(placeId);
  }

  function toggleFavorite(placeId) {
    let list = getFavorites();
    const exists = list.includes(placeId);
    if (exists) {
      list = list.filter((id) => id !== placeId);
    } else {
      list.push(placeId);
    }
    setJson(KEYS.FAVORITES, list);
    emitChange("favorites_changed", { placeId, isFavorite: !exists, list });
    return !exists;
  }

  /* --- Trip Planner --- */
  function getPlannerStops() {
    return getJson(KEYS.PLANNER, []);
  }

  function isInPlanner(placeId) {
    const stops = getPlannerStops();
    return stops.includes(placeId);
  }

  function addToPlanner(placeId) {
    const stops = getPlannerStops();
    if (!stops.includes(placeId)) {
      stops.push(placeId);
      setJson(KEYS.PLANNER, stops);
      emitChange("planner_changed", { action: "add", placeId, stops });
      return true;
    }
    return false;
  }

  function removeFromPlanner(placeId) {
    let stops = getPlannerStops();
    const initialLen = stops.length;
    stops = stops.filter((id) => id !== placeId);
    if (stops.length !== initialLen) {
      setJson(KEYS.PLANNER, stops);
      emitChange("planner_changed", { action: "remove", placeId, stops });
      return true;
    }
    return false;
  }

  function reorderPlanner(newOrderedPlaceIds) {
    setJson(KEYS.PLANNER, newOrderedPlaceIds);
    emitChange("planner_changed", { action: "reorder", stops: newOrderedPlaceIds });
  }

  function clearPlanner() {
    setJson(KEYS.PLANNER, []);
    emitChange("planner_changed", { action: "clear", stops: [] });
  }

  /* --- Recently Viewed --- */
  function getRecentlyViewed() {
    return getJson(KEYS.RECENT, []);
  }

  function addRecentlyViewed(placeId) {
    let recent = getRecentlyViewed().filter((id) => id !== placeId);
    recent.unshift(placeId);
    if (recent.length > 8) {
      recent = recent.slice(0, 8);
    }
    setJson(KEYS.RECENT, recent);
    emitChange("recent_changed", { recent });
  }

  /* --- Language & Theme --- */
  function getLanguage() {
    return localStorage.getItem(KEYS.LANG) || "en";
  }

  function setLanguage(lang) {
    localStorage.setItem(KEYS.LANG, lang);
    emitChange("lang_changed", { lang });
  }

  function getTheme() {
    return localStorage.getItem(KEYS.THEME) || "light";
  }

  function setTheme(theme) {
    localStorage.setItem(KEYS.THEME, theme);
    emitChange("theme_changed", { theme });
  }

  return {
    subscribe,
    getFavorites,
    isFavorite,
    toggleFavorite,
    getPlannerStops,
    isInPlanner,
    addToPlanner,
    removeFromPlanner,
    reorderPlanner,
    clearPlanner,
    getRecentlyViewed,
    addRecentlyViewed,
    getLanguage,
    setLanguage,
    getTheme,
    setTheme
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = StorageService;
}

