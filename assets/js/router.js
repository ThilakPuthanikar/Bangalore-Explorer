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
    getCurrentRoute: () => currentRoute,
    getParams: () => currentParams
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Router;
}

