/**
 * Bangalore Explorer - Client-Side Hash Router
 * Lightweight zero-dependency router supporting deep linking,
 * back/forward history, and dynamic view rendering.
 */

const Router = (function () {
  const routes = {};
  let currentRoute = "";
  let currentParams = {};

  function register(pattern, handler) {
    routes[pattern] = handler;
  }

  function parseHash() {
    let hash = window.location.hash.slice(1).trim();
    if (!hash || hash === "/") {
      hash = "/home";
    }
    return hash;
  }

  function matchRoute(path) {
    for (const pattern in routes) {
      const paramNames = [];
      const regexPattern = pattern.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
        paramNames.push(key);
        return "([^/]+)";
      });

      const regex = new RegExp(`^${regexPattern}$`);
      const match = path.match(regex);

      if (match) {
        const params = {};
        paramNames.forEach((name, index) => {
          params[name] = decodeURIComponent(match[index + 1]);
        });
        return { handler: routes[pattern], params };
      }
    }
    return null;
  }

  const ROUTE_METADATA = {
    "/home": {
      titleEn: "Bangalore Explorer | Discover Bengaluru's Places, Culture & Heritage",
      titleKa: "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ | ಪ್ರಸಿದ್ಧ ಸ್ಥಳಗಳು, ಪರಂಪರೆ ಮತ್ತು ಸಂಸ್ಕೃತಿ",
      descEn: "Discover, explore, and experience Bengaluru with 68+ curated destinations, verified GPS coordinates, interactive map, day itineraries, and authentic bilingual stories.",
      descKa: "68+ ಪ್ರಸಿದ್ಧ ಸ್ಥಳಗಳು, ನಿಖರ ಜಿಪಿಎಸ್ ನಿರ್ದೇಶಾಂಕಗಳು, ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ ಮತ್ತು ಕ್ಯುರೇಟೆಡ್ ಪ್ರವಾಸಗಳೊಂದಿಗೆ ಬೆಂಗಳೂರನ್ನು ಅನ್ವೇಷಿಸಿ."
    },
    "/explore": {
      titleEn: "Explore 68+ Bengaluru Landmarks | Bangalore Explorer",
      titleKa: "ಬೆಂಗಳೂರಿನ 68+ ತಾಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ | ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      descEn: "Search, filter, and discover all 68+ verified Bengaluru landmarks across heritage, nature, spiritual temples, food streets, and technology parks.",
      descKa: "ಪಾರಂಪರಿಕ ತಾಣಗಳು, ಉದ್ಯಾನಗಳು, ದೇವಾಲಯಗಳು, ತಿಂಡಿ ಬೀದಿಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪಾರ್ಕ್‌ಗಳ ಸಮಗ್ರ ಶೋಧನೆ."
    },
    "/categories": {
      titleEn: "Explore by Theme & Category | Bangalore Explorer",
      titleKa: "ವಿಷಯವಾರು ವಿಭಾಗಗಳು | ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      descEn: "Browse Bengaluru across 9 curated themes: Royal Heritage, Nature & Green Lungs, Temples & Spirituality, Food & Dining, Technology, and Silk Bazaars.",
      descKa: "ರಾಜ ಪರಂಪರೆ, ಪ್ರಕೃತಿ, ಪುರಾತನ ದೇವಾಲಯಗಳು, ಊಟೋಪಹಾರ ಹಾಗೂ ಸಿಲ್ಕ್ ಬಜಾರ್‌ಗಳ 9 ವಿಶಿಷ್ಟ ವಿಭಾಗಗಳು."
    },
    "/map": {
      titleEn: "Interactive Bengaluru City Map (68+ Destinations) | Bangalore Explorer",
      titleKa: "ಸಂವಾದಾತ್ಮಕ ಬೆಂಗಳೂರು ನಗರ ನಕ್ಷೆ (68+ ತಾಣಗಳು) | ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      descEn: "Browse all 68+ Bengaluru destinations on an interactive split-screen map with dynamic CartoDB dark/light tiles, category filters, and live directions.",
      descKa: "ವಿಭಾಗವಾರು ಫಿಲ್ಟರ್‌ಗಳು ಹಾಗೂ ನೇರ ದಿಕ್ಕುಗಳೊಂದಿಗೆ 68+ ಬೆಂಗಳೂರು ತಾಣಗಳ ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ."
    },
    "/itineraries": {
      titleEn: "Curated Bengaluru Day Trails & Itineraries | Bangalore Explorer",
      titleKa: "ಕ್ಯುರೇಟೆಡ್ ಬೆಂಗಳೂರು ದಿನಚರಿ ಪ್ರವಾಸಗಳು | ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      descEn: "Expertly planned walking and transit itineraries covering royal palaces, historic pete bazaars, green lungs, and tech circuits with step-by-step schedules.",
      descKa: "ಅರಮನೆಗಳು, ಪೇಟೆ ಬಜಾರ್‌ಗಳು, ಉದ್ಯಾನಗಳು ಹಾಗೂ ಐಟಿ ಕಾರಿಡಾರ್‌ಗಳ 6 ಕ್ಯುರೇಟೆಡ್ ದಿನದ ಪ್ರವಾಸಗಳು."
    },
    "/stories": {
      titleEn: "Bengaluru Chronicles & Heritage Stories | Bangalore Explorer",
      titleKa: "ಬೆಂಗಳೂರು ಇತಿಹಾಸ ಮತ್ತು ಪರಂಪರೆಯ ಕಥೆಗಳು | ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      descEn: "Deep editorial long-reads exploring Kempe Gowda's watchtowers, colonial botanical gardens, pete silk weavers, and the Silicon Plateau transformation.",
      descKa: "ಕೆಂಪೇಗೌಡರ ಕಾವಲು ಗೋಪುರಗಳು, ಲಾಲ್‌ಬಾಗ್, ಪೇಟೆ ನೇಕಾರರು ಹಾಗೂ ಸಿಲಿಕಾನ್ ಸಿಟಿಯ ಉದಯದ ರೋಚಕ ಕಥೆಗಳು."
    },
    "/about": {
      titleEn: "About Namma Bengaluru & The Platform | Bangalore Explorer",
      titleKa: "ನಮ್ಮ ಬೆಂಗಳೂರು ಮತ್ತು ವೇದಿಕೆಯ ಪರಿಚಯ | ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      descEn: "Learn about Bangalore Explorer 2.0: an open, serverless, bilingual digital city platform built for Bengaluru with zero tracking and zero paid API keys.",
      descKa: "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ 2.0: ಸಂಪೂರ್ಣ ಮುಕ್ತ, ದ್ವಿಭಾಷಿಕ, ವೇಗದ ಮತ್ತು ಗೌಪ್ಯತೆ-ಸ್ನೇಹಿ ಡಿಜಿಟಲ್ ನಗರ ವೇದಿಕೆ."
    },
    "/favorites": {
      titleEn: "Saved Landmarks & Personal Favorites | Bangalore Explorer",
      titleKa: "ಮೆಚ್ಚಿನ ತಾಣಗಳು | ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      descEn: "View and manage your saved Bengaluru destinations stored privately and locally in your browser.",
      descKa: "ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಲಾದ ನಿಮ್ಮ ನೆಚ್ಚಿನ ಬೆಂಗಳೂರು ತಾಣಗಳು."
    }
  };

  function updatePageMeta(path, params = {}) {
    if (typeof document === "undefined") return;
    const isKa = typeof StorageService !== "undefined" && StorageService.getLanguage() === "ka";
    const descMeta = document.querySelector('meta[name="description"]');
    
    // Check if route matches fixed meta
    if (ROUTE_METADATA[path]) {
      const meta = ROUTE_METADATA[path];
      document.title = isKa ? meta.titleKa : meta.titleEn;
      if (descMeta) descMeta.setAttribute("content", isKa ? meta.descKa : meta.descEn);
      return;
    }

    // Dynamic destination route: /destination/:id
    if (path.startsWith("/destination/") && params.id && typeof PLACES !== "undefined") {
      const place = PLACES.find((p) => p.id === params.id);
      if (place) {
        const placeName = isKa ? (place.kannadaName || place.name) : place.name;
        document.title = `${placeName} | Bengaluru City Guide | Bangalore Explorer`;
        if (descMeta) {
          const desc = isKa ? (place.shortDescriptionKn || place.shortDescription) : place.shortDescription;
          descMeta.setAttribute("content", desc || "Bengaluru landmark details and guide.");
        }
        return;
      }
    }

    // Dynamic category route: /category/:id
    if (path.startsWith("/category/") && params.id && typeof CATEGORIES !== "undefined") {
      const cat = CATEGORIES.find((c) => c.id === params.id);
      if (cat) {
        const catName = isKa ? (cat.kannadaName || cat.name) : cat.name;
        document.title = `${catName} in Bengaluru | Bangalore Explorer`;
        return;
      }
    }

    // Dynamic story route: /story/:id
    if (path.startsWith("/story/") && params.id && typeof STORIES !== "undefined") {
      const story = STORIES.find((s) => s.id === params.id);
      if (story) {
        const storyTitle = isKa ? (story.title.ka || story.title.en) : story.title.en;
        document.title = `${storyTitle} | Bengaluru Chronicles`;
        return;
      }
    }

    // Default fallback
    document.title = isKa ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ | ನಗರ ಮಾರ್ಗದರ್ಶಿ" : "Bangalore Explorer | Discover Bengaluru's Places, Culture & Heritage";
  }

  function handleRouteChange() {
    const path = parseHash();
    currentRoute = path;

    const matched = matchRoute(path);
    if (matched) {
      currentParams = matched.params;
      matched.handler(matched.params);
    } else {
      // Fallback to home
      if (routes["/home"]) {
        routes["/home"]({});
      }
    }

    // Update active state on nav links
    updateActiveNav(path);

    // Update dynamic document title & description
    updatePageMeta(path, currentParams);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateActiveNav(path) {
    const mainSection = path.split("/")[1] || "home";
    document.querySelectorAll(".nav-link, .bottom-nav-item").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.includes(mainSection)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function navigate(path) {
    window.location.hash = path;
  }

  function init() {
    window.addEventListener("hashchange", handleRouteChange);
    // Initial dispatch
    handleRouteChange();
  }

  return {
    register,
    navigate,
    init,
    updatePageMeta,
    getCurrentRoute: () => currentRoute,
    getParams: () => currentParams
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Router;
}

