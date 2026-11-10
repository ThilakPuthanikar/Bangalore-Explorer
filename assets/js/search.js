/**
 * Bangalore Explorer - Search & Filter Engine
 * High-performance bilingual client-side search across destinations,
 * categories, tags, neighbourhoods, and proximity.
 */

const SearchEngine = (function () {
  /**
   * Normalize search string for resilient matching
   */
  function normalize(str) {
    if (!str) return "";
    return str
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\-_]+/g, " ");
  }

  /**
   * Filter and query destination places
   * @param {Array} places - Array of place objects from data.js
   * @param {Object} options - Search and filter options
   * {
   *   query: string,
   *   category: string, // 'all' or category ID
   *   neighbourhood: string,
   *   tag: string,
   *   onlyFavorites: boolean,
   *   userLocation: { lat, lng } | null,
   *   sortBy: 'featured' | 'rating' | 'name' | 'distance',
   *   lang: 'en' | 'ka'
   * }
   */
  function search(places = [], options = {}) {
    const {
      query = "",
      category = "all",
      neighbourhood = "all",
      tag = "all",
      onlyFavorites = false,
      userLocation = null,
      sortBy = "featured",
      lang = "en"
    } = options;

    const q = normalize(query);
    const favorites = StorageService.getFavorites();

    let results = places.filter((place) => {
      // 1. Favorites filter
      if (onlyFavorites && !favorites.includes(place.id)) {
        return false;
      }

      // 2. Category filter
      if (category && category !== "all" && place.category !== category) {
        return false;
      }

      // 3. Neighbourhood filter
      if (neighbourhood && neighbourhood !== "all") {
        const placeNb = normalize(place.neighbourhood + " " + place.neighbourhoodKn);
        if (!placeNb.includes(normalize(neighbourhood))) {
          return false;
        }
      }

      // 4. Tag filter
      if (tag && tag !== "all") {
        const hasTag = place.tags && place.tags.some((t) => normalize(t) === normalize(tag));
        if (!hasTag) return false;
      }

      // 5. Query matching (English + Kannada)
      if (q) {
        const searchableText = normalize([
          place.name,
          place.kannadaName,
          place.neighbourhood,
          place.neighbourhoodKn,
          place.shortDesc,
          place.shortDescKn,
          ...(place.tags || []),
          place.visitorInfo ? place.visitorInfo.nearestMetro : "",
          place.visitorInfo ? place.visitorInfo.nearestMetroKn : ""
        ].join(" "));

        // Check if all words in search query match
        const queryTerms = q.split(" ");
        const allTermsMatch = queryTerms.every((term) => searchableText.includes(term));
        if (!allTermsMatch) return false;
      }

      return true;
    });

    // Calculate distance if user location is available
    if (userLocation && userLocation.lat && userLocation.lng) {
      results = results.map((place) => {
        const dist = GeoService.calculateDistance(
          userLocation.lat,
          userLocation.lng,
          place.coordinates.lat,
          place.coordinates.lng
        );
        return { ...place, _distance: dist };
      });
    }

    // Sort results
    results.sort((a, b) => {
      if (sortBy === "distance" && userLocation) {
        return (a._distance || 9999) - (b._distance || 9999);
      }
      if (sortBy === "rating") {
        return (b.rating || 0) - (a.rating || 0);
      }
      if (sortBy === "name") {
        const titleA = lang === "ka" ? a.kannadaName : a.name;
        const titleB = lang === "ka" ? b.kannadaName : b.name;
        return titleA.localeCompare(titleB);
      }
      // Default: 'featured' priority, then rating
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.rating || 0) - (a.rating || 0);
    });

    return results;
  }

  /**
   * Extract unique neighbourhoods with counts
   */
  function getNeighbourhoodFacets(places = []) {
    const map = new Map();
    places.forEach((p) => {
      if (p.neighbourhood) {
        const count = map.get(p.neighbourhood) || 0;
        map.set(p.neighbourhood, count + 1);
      }
    });
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }

  /**
   * Extract popular tags
   */
  function getPopularTags(places = []) {
    const map = new Map();
    places.forEach((p) => {
      (p.tags || []).forEach((t) => {
        const count = map.get(t) || 0;
        map.set(t, count + 1);
      });
    });
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }

  return {
    search,
    getNeighbourhoodFacets,
    getPopularTags
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SearchEngine;
}

