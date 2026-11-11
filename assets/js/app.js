/**
 * Bangalore Explorer (ಬೆಂಗಳೂರು ಎಕ್ಸ್ಪ್ಲೋರರ್)
 * Master Application Coordinator & View Renderer 2.0
 * 100% Client-Side Vanilla JS | Zero paid APIs | High-Performance Static App
 * Features Lucide SVG Icon System, Dynamic CartoDB Dark Matter / Voyager Maps,
 * Responsive Split-Screen Map View, and Real-Time State Synchronization.
 */

const App = (function () {
  let currentLang = StorageService.getLanguage() || "en";
  let currentTheme = StorageService.getTheme() || "light";
  let activeSearchCategory = "all";
  let activeSearchQuery = "";
  let activeSortBy = "featured";
  let isPlannerDrawerOpen = false;

  // Split-Screen Map State
  let activeMapSearch = "";
  let activeMapCategory = "all";
  let activeMapSelectedId = null;

  // UI Strings Dictionary
  const I18N = {
    en: {
      siteTitle: "Bangalore Explorer",
      tagline: "Discover, Explore & Experience the Garden City of India",
      navHome: "Home",
      navExplore: "Explore",
      navCategories: "Categories",
      navMap: "Interactive Map",
      navItineraries: "Itineraries",
      navStories: "City Stories",
      navAbout: "About",
      navPlanner: "Trip Planner",
      searchPlaceholder: "Search 68+ places, temples, street food, parks, tech...",
      allCategories: "All Categories",
      allPlaces: "All Destinations",
      featuredSpots: "Featured Curated Spots",
      sortBy: "Sort By",
      sortFeatured: "Curated / Featured",
      sortRating: "Highest Rated",
      sortName: "Alphabetical (A-Z)",
      sortDistance: "Nearest to Me",
      getDirections: "Get Directions",
      viewDetails: "View Details",
      addToTrip: "Add to Trip",
      inTrip: "In Trip Planner",
      exploreMore: "Explore All Destinations",
      curatedTrails: "Curated Day Itineraries",
      storiesTitle: "Bengaluru Heritage & Culture Chronicles",
      storiesSubtitle: "Immerse yourself in 500 years of royal dynasties, botanical masters, silk weavers, and IT pioneers.",
      readStory: "Read Full Chronicle",
      nearMe: "Near Me",
      locating: "Locating...",
      noResults: "No matching destinations found. Try searching for something else or clearing filters.",
      clearFilters: "Clear Filters",
      savedFavorites: "Saved Favorites",
      noFavorites: "You have not saved any favorite destinations yet. Click the heart icon on any landmark to save it!",
      backToExplore: "← Back to Explore",
      metroNear: "Nearest Metro:",
      timingLabel: "Timings:",
      feeLabel: "Entry Fee:",
      durationLabel: "Duration:",
      openInMaps: "Open in Google Maps",
      quickFilterTags: ["All", "Heritage", "Gardens", "Street Food", "Silk Bazaars", "Tech Campuses", "Temples", "Cricket"],
      statsPlaces: "Verified Destinations",
      statsCategories: "Curated Themes",
      statsTrails: "Ready Day Trails",
      statsParity: "Bilingual Parity"
    },
    ka: {
      siteTitle: "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
      tagline: "ಉದ್ಯಾನ ನಗರಿ ಬೆಂಗಳೂರನ್ನು ಅನ್ವೇಷಿಸಿ, ಅರಿಯಿರಿ ಮತ್ತು ಆನಂದಿಸಿ",
      navHome: "ಮುಖಪುಟ",
      navExplore: "ಅನ್ವೇಷಿಸಿ",
      navCategories: "ವರ್ಗಗಳು",
      navMap: "ನಕ್ಷೆ",
      navItineraries: "ದಿನಚರಿ ಪ್ರವಾಸ",
      navStories: "ನಗರದ ಕಥೆಗಳು",
      navAbout: "ಬಗ್ಗೆ",
      navPlanner: "ಪ್ರವಾಸ ಯೋಜನೆ",
      searchPlaceholder: "68+ ಸ್ಥಳಗಳು, ದೇವಾಲಯಗಳು, ತಿಂಡಿ ಬೀದಿ, ಉದ್ಯಾನ, ಐಟಿ ಹುಡುಕಿ...",
      allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
      allPlaces: "ಎಲ್ಲಾ ತಾಣಗಳು",
      featuredSpots: "ಆಯ್ದ ಪ್ರಮುಖ ಸ್ಥಳಗಳು",
      sortBy: "ವಿಂಗಡಿಸಿ",
      sortFeatured: "ವಿಶೇಷ / ಪ್ರಮುಖ",
      sortRating: "ಉತ್ತಮ ರೇಟಿಂಗ್",
      sortName: "ವರ್ಣಮಾಲೆ (ಅ-ಹ)",
      sortDistance: "ನನ್ನ ಸಮೀಪದ ಸ್ಥಳಗಳು",
      getDirections: "ದಿಕ್ಕುಗಳು ಪಡೆಯಿರಿ",
      viewDetails: "ವಿವರ ನೋಡಿ",
      addToTrip: "ಟ್ರಿಪ್‌ಗೆ ಸೇರಿಸಿ",
      inTrip: "ಟ್ರಿಪ್ ಪ್ಲಾನರ್‌ನಲ್ಲಿದೆ",
      exploreMore: "ಎಲ್ಲಾ ತಾಣಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      curatedTrails: "ಕ್ಯುರೇಟೆಡ್ ದಿನದ ಪ್ರವಾಸಗಳು",
      storiesTitle: "ಬೆಂಗಳೂರು ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ಐತಿಹಾಸಿಕ ಕಥನಗಳು",
      storiesSubtitle: "500 ವರ್ಷಗಳ ರಾಜವಂಶಗಳು, ಉದ್ಯಾನ ನಗರಿಯ ಸೃಷ್ಟಿ, ರೇಷ್ಮೆ ನೇಯ್ಗೆ ಮತ್ತು ಐಟಿ ಕ್ರಾಂತಿಯ ಸತ್ಯಕಥೆಗಳು.",
      readStory: "ಪೂರ್ಣ ಲೇಖನ ಓದಿ",
      nearMe: "ನನ್ನ ಸಮೀಪ",
      locating: "ಸ್ಥಳ ಹುಡುಕಲಾಗುತ್ತಿದೆ...",
      noResults: "ಯಾವುದೇ ಸ್ಥಳ ಕಂಡುಬಂದಿಲ್ಲ. ಬೇರೆ ಪದಗಳನ್ನು ಬಳಸಿ ಹುಡುಕಿ ಅಥವಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ.",
      clearFilters: "ಫಿಲ್ಟರ್ ತೆರವುಗೊಳಿಸಿ",
      savedFavorites: "ಮೆಚ್ಚಿನ ಸ್ಥಳಗಳು",
      noFavorites: "ನೀವು ಇನ್ನು ಯಾವುದೇ ನೆಚ್ಚಿನ ಸ್ಥಳಗಳನ್ನು ಸೇರಿಸಿಲ್ಲ. ಯಾವುದೇ ಕಾರ್ಡ್‌ನಲ್ಲಿರುವ ಹೃದಯ ಚಿಹ್ನೆಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ!",
      backToExplore: "← ಅನ್ವೇಷಣೆಗೆ ಹಿಂತಿರುಗಿ",
      metroNear: "ಸಮೀಪದ ಮೆಟ್ರೋ:",
      timingLabel: "ಸಮಯ:",
      feeLabel: "ಪ್ರವೇಶ ಶುಲ್ಕ:",
      durationLabel: "ಅವಧಿ:",
      openInMaps: "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ",
      quickFilterTags: ["ಎಲ್ಲಾ", "ಪರಂಪರೆ", "ಉದ್ಯಾನ", "ತಿಂಡಿ ಬೀದಿ", "ರೇಷ್ಮೆ ಮಾರುಕಟ್ಟೆ", "ತಂತ್ರಜ್ಞಾನ", "ದೇವಾಲಯಗಳು", "ಕ್ರೀಡೆ"],
      statsPlaces: "ಪರಿಶೀಲಿತ ತಾಣಗಳು",
      statsCategories: "ಕ್ಯುರೇಟೆಡ್ ವಿಭಾಗಗಳು",
      statsTrails: "ಸಿದ್ಧ ದಿನದ ಪ್ರವಾಸಗಳು",
      statsParity: "ದ್ವಿಭಾಷಾ ಸಂಪೂರ್ಣತೆ"
    }
  };

  function t(key) {
    return I18N[currentLang][key] || I18N["en"][key] || key;
  }

  /**
   * Initialize Application
   */
  function init() {
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    ModalController.init();
    setupEventListeners();
    setupRoutes();

    // Start Router
    Router.init();
    PlannerController.renderPersonalPlanner();

    // Subscribe to storage changes for instant real-time synchronization
    StorageService.subscribe((event, data) => {
      if (event === "favorites_changed" || event === "planner_changed") {
        updateBadges();

        // Reactively update matching landmark cards
        if (data && data.placeId) {
          const place = PLACES.find((p) => p.id === data.placeId);
          if (place) {
            document.querySelectorAll(`.landmark-magazine-card[data-id="${data.placeId}"]`).forEach((card) => {
              card.outerHTML = renderLandmarkCard(place);
            });
          }
        } else {
          document.querySelectorAll(".landmark-magazine-card").forEach((card) => {
            const pid = card.getAttribute("data-id");
            const place = PLACES.find((p) => p.id === pid);
            if (place) card.outerHTML = renderLandmarkCard(place);
          });
        }
      }
    });

    updateBadges();
  }

  function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const nextTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(nextTheme);
      });
    }

    // Language switcher
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = currentLang;
      langSelect.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
      });
    }

    // Planner Drawer toggles
    document.querySelectorAll(".planner-drawer-trigger").forEach((el) => {
      el.addEventListener("click", togglePlannerDrawer);
    });

    // Mobile nav toggle
    const navToggle = document.getElementById("mobileNavToggle");
    const navMenu = document.getElementById("primaryNavMenu");
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("is-open");
        navToggle.classList.toggle("is-active");
      });
      // Close menu when a link is clicked
      navMenu.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          navMenu.classList.remove("is-open");
          navToggle.classList.remove("is-active");
        }
      });
    }
  }

  function applyTheme(theme) {
    currentTheme = theme;
    StorageService.setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      const isDark = theme === "dark";
      themeBtn.innerHTML = `${Icons.get(isDark ? "sun" : "moon", { size: 15 })} <span>${isDark ? "Light" : "Dark"}</span>`;
      themeBtn.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    }

    if (typeof MapController !== "undefined" && typeof MapController.switchTileTheme === "function") {
      MapController.switchTileTheme(theme);
    }
  }

  function applyLanguage(lang) {
    currentLang = lang;
    StorageService.setLanguage(lang);
    document.documentElement.setAttribute("lang", lang === "ka" ? "kn" : "en");

    const langSelect = document.getElementById("langSelect");
    if (langSelect) langSelect.value = lang;

    // Update static nav elements
    updateNavLabels();

    // Update Map & Planner controllers
    MapController.setLanguage(lang);
    PlannerController.setLanguage(lang);

    // Refresh current view
    const currentRoute = Router.getCurrentRoute();
    const params = Router.getParams();
    if (currentRoute.startsWith("/destination/")) {
      renderDestinationDetail(params.id);
    } else if (currentRoute.startsWith("/story/")) {
      renderStoryDetail(params.storyId);
    } else if (currentRoute.startsWith("/category/")) {
      renderExploreView(params.catId);
    } else if (currentRoute === "/explore") {
      renderExploreView(activeSearchCategory);
    } else if (currentRoute === "/categories") {
      renderCategoriesView();
    } else if (currentRoute === "/map") {
      renderMapView();
    } else if (currentRoute === "/stories") {
      renderStoriesView();
    } else if (currentRoute === "/itineraries") {
      renderItinerariesView();
    } else if (currentRoute === "/about") {
      renderAboutView();
    } else if (currentRoute === "/favorites") {
      renderFavoritesView();
    } else {
      renderHomeView();
    }
  }

  function updateNavLabels() {
    const map = {
      "nav-link-home": "navHome",
      "nav-link-explore": "navExplore",
      "nav-link-categories": "navCategories",
      "nav-link-map": "navMap",
      "nav-link-itineraries": "navItineraries",
      "nav-link-stories": "navStories",
      "nav-link-about": "navAbout"
    };
    for (const id in map) {
      const el = document.getElementById(id);
      if (el) el.textContent = t(map[id]);
    }
  }

  function updateBadges() {
    const plannerCount = StorageService.getPlannerStops().length;
    const favCount = StorageService.getFavorites().length;

    const plannerBadges = document.querySelectorAll(".planner-count-badge");
    plannerBadges.forEach((b) => {
      b.textContent = plannerCount;
      b.style.display = plannerCount > 0 ? "inline-block" : "none";
    });

    const favBadges = document.querySelectorAll(".fav-count-badge");
    favBadges.forEach((b) => {
      b.textContent = favCount;
      b.style.display = favCount > 0 ? "inline-block" : "none";
    });
  }

  function togglePlannerDrawer() {
    const drawer = document.getElementById("plannerDrawer");
    const backdrop = document.getElementById("plannerBackdrop");
    if (!drawer) return;
    isPlannerDrawerOpen = !isPlannerDrawerOpen;
    drawer.classList.toggle("is-open", isPlannerDrawerOpen);
    if (backdrop) backdrop.classList.toggle("is-open", isPlannerDrawerOpen);
    if (isPlannerDrawerOpen) {
      PlannerController.renderPersonalPlanner("planner-drawer-content");
    }
  }

  /**
   * Router Route Definitions
   */
  function setupRoutes() {
    Router.register("/", () => renderHomeView());
    Router.register("/home", () => renderHomeView());
    Router.register("/explore", () => renderExploreView());
    Router.register("/categories", () => renderCategoriesView());
    Router.register("/category/:catId", (params) => renderExploreView(params.catId));
    Router.register("/map", () => renderMapView());
    Router.register("/itineraries", () => renderItinerariesView());
    Router.register("/stories", () => renderStoriesView());
    Router.register("/story/:storyId", (params) => renderStoryDetail(params.storyId));
    Router.register("/destination/:id", (params) => renderDestinationDetail(params.id));
    Router.register("/about", () => renderAboutView());
    Router.register("/favorites", () => renderFavoritesView());

    // Legacy backwards compatibility redirects
    const legacyMap = {
      temples: "temples-spirituality",
      it: "technology-innovation",
      shopping: "shopping-markets",
      sports: "sports-recreation",
      entertainment: "sports-recreation",
      banks: "essential-services"
    };

    for (const oldKey in legacyMap) {
      Router.register(`/${oldKey}`, () => renderExploreView(legacyMap[oldKey]));
    }
  }

  /**
   * Home View
   */
  function renderHomeView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const featuredPlaces = PLACES.filter((p) => p.featured || (p.rating && p.rating >= 4.7)).slice(0, 6);

    const categoriesCardsHtml = CATEGORIES.map((cat) => {
      const label = currentLang === "ka" ? cat.label.ka : cat.label.en;
      const tagline = currentLang === "ka" ? cat.tagline.ka : cat.tagline.en;
      const count = PLACES.filter((p) => p.category === cat.id).length;
      const iconSvg = typeof Icons !== "undefined" ? Icons.get(cat.icon, { size: 26 }) : "";

      return `
        <a href="#/category/${cat.id}" class="category-grid-card text-decoration-none">
          <div class="category-icon-wrapper" style="background-color: ${cat.color}18; color: ${cat.color};">
            <span class="category-icon">${iconSvg}</span>
          </div>
          <h4 class="category-name">${label}</h4>
          <p class="category-tagline">${tagline}</p>
          <span class="category-count">${count} ${currentLang === "ka" ? "ತಾಣಗಳು" : "Places"} →</span>
        </a>
      `;
    }).join("");

    const featuredCardsHtml = featuredPlaces.map((p) => renderLandmarkCard(p)).join("");

    const storiesSnippetHtml = STORIES.slice(0, 3).map((story) => {
      const title = currentLang === "ka" ? story.title.ka : story.title.en;
      const sub = currentLang === "ka" ? story.subtitle.ka : story.subtitle.en;
      return `
        <article class="story-preview-card card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-secondary text-white d-inline-flex align-items-center gap-1">${Icons.get("book-open", { size: 12 })} ${story.era}</span>
              <span class="text-muted fs-xs d-inline-flex align-items-center gap-1">${Icons.get("clock", { size: 12 })} ${story.readingTime}</span>
            </div>
            <h4 class="story-preview-title mb-2">
              <a href="#/story/${story.id}" class="text-decoration-none text-heading">${title}</a>
            </h4>
            <p class="story-preview-sub text-muted fs-sm mb-3">${sub}</p>
            <a href="#/story/${story.id}" class="btn btn-sm btn-outline-primary">
              ${t("readStory")} →
            </a>
          </div>
        </article>
      `;
    }).join("");

    mainEl.innerHTML = `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-backdrop-overlay"></div>
        <div class="container hero-container">
          <div class="hero-content text-center">
            <span class="hero-pill-badge mb-3 d-inline-flex align-items-center gap-2">
              ${Icons.get("sparkles", { size: 14 })} 
              <span>${currentLang === "ka" ? "ಅಧಿಕೃತ ದ್ವಿಭಾಷಾ ನಗರ ಮಾರ್ಗದರ್ಶಿ" : "Official Bilingual City Discovery Platform"}</span>
            </span>
            <h1 class="hero-title display-heading mb-3">${t("siteTitle")}</h1>
            <p class="hero-subtitle lead mb-4">${t("tagline")}</p>

            <!-- Hero Search Bar -->
            <div class="hero-search-wrapper mb-4">
              <div class="hero-search-input-group">
                <span class="search-input-icon">${Icons.get("search", { size: 18 })}</span>
                <input
                  type="text"
                  id="heroSearchInput"
                  class="hero-search-input"
                  placeholder="${t("searchPlaceholder")}"
                  autocomplete="off"
                />
                <button class="btn btn-primary hero-search-btn" id="heroSearchBtn">
                  ${t("navExplore")}
                </button>
              </div>
            </div>

            <!-- Quick Action Links -->
            <div class="hero-quick-links d-flex justify-content-center gap-2 flex-wrap">
              <a href="#/explore" class="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-1">
                ${Icons.get("landmark", { size: 14 })} <span>${currentLang === "ka" ? "ಎಲ್ಲಾ ತಾಣಗಳು" : "Explore Places"}</span>
              </a>
              <a href="#/map" class="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-1">
                ${Icons.get("map", { size: 14 })} <span>${t("navMap")}</span>
              </a>
              <a href="#/itineraries" class="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-1">
                ${Icons.get("route", { size: 14 })} <span>${t("navItineraries")}</span>
              </a>
              <button class="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-1" id="heroNearMeBtn">
                ${Icons.get("navigation", { size: 14 })} <span>${t("nearMe")}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Stats Bar -->
      <section class="stats-bar bg-surface border-bottom py-3">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">68+</span>
              <span class="stat-label">${t("statsPlaces")}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">9</span>
              <span class="stat-label">${t("statsCategories")}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">6</span>
              <span class="stat-label">${t("statsTrails")}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">${t("statsParity")} (EN / ಕನ್ನಡ)</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Curated Categories Section -->
      <section class="section py-5">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2 class="section-title">${t("navCategories")}</h2>
            <p class="section-lead text-muted">${currentLang === "ka" ? "ನಿಮ್ಮ ಆಸಕ್ತಿಗೆ ತಕ್ಕಂತೆ ಬೆಂಗಳೂರನ್ನು 9 ವಿಶಿಷ್ಟ ವಿಭಾಗಗಳಲ್ಲಿ ಅನ್ವೇಷಿಸಿ." : "Explore Bengaluru across 9 curated themes: from ancient stone temples to royal palaces and high-tech parks."}</p>
          </div>
          <div class="categories-grid">
            ${categoriesCardsHtml}
          </div>
        </div>
      </section>

      <!-- Featured Landmark Highlights -->
      <section class="section py-5 bg-surface-variant">
        <div class="container">
          <div class="section-header d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2">
            <div>
              <h2 class="section-title mb-1">${t("featuredSpots")}</h2>
              <p class="section-lead text-muted mb-0">${currentLang === "ka" ? "ಬೆಂಗಳೂರಿಗೆ ಭೇಟಿ ನೀಡುವ ಪ್ರತಿಯೊಬ್ಬರೂ ನೋಡಲೇಬೇಕಾದ ಪ್ರಸಿದ್ಧ ಹೆಗ್ಗುರುತುಗಳು." : "Essential must-see architectural, botanical, and cultural landmarks."}</p>
            </div>
            <a href="#/explore" class="btn btn-outline-primary">${t("exploreMore")} →</a>
          </div>
          <div class="landmark-cards-grid">
            ${featuredCardsHtml}
          </div>
        </div>
      </section>

      <!-- Stories Snippet Section -->
      <section class="section py-5">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2 class="section-title">${t("storiesTitle")}</h2>
            <p class="section-lead text-muted">${t("storiesSubtitle")}</p>
          </div>
          <div class="stories-grid-3">
            ${storiesSnippetHtml}
          </div>
          <div class="text-center mt-4">
            <a href="#/stories" class="btn btn-primary">${currentLang === "ka" ? "ಎಲ್ಲಾ ಕಥೆಗಳನ್ನು ಓದಿ" : "Explore All Chronicles"} →</a>
          </div>
        </div>
      </section>
    `;

    // Hook up hero search events
    const searchInput = document.getElementById("heroSearchInput");
    const searchBtn = document.getElementById("heroSearchBtn");
    if (searchInput && searchBtn) {
      const doSearch = () => {
        const q = searchInput.value.trim();
        if (q) {
          activeSearchQuery = q;
          Router.navigate("/explore");
        }
      };
      searchBtn.addEventListener("click", doSearch);
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") doSearch();
      });
    }

    // Hero Near Me button
    const nearMeBtn = document.getElementById("heroNearMeBtn");
    if (nearMeBtn) {
      nearMeBtn.addEventListener("click", async () => {
        nearMeBtn.textContent = t("locating");
        try {
          await GeoService.getUserLocation();
          activeSortBy = "distance";
          Router.navigate("/explore");
        } catch (err) {
          alert(err.message || "Location access was denied.");
          nearMeBtn.innerHTML = `${Icons.get("navigation", { size: 14 })} <span>${t("nearMe")}</span>`;
        }
      });
    }
  }

  /**
   * Explore View with Live Search, Filter Pills, and Sort
   */
  function renderExploreView(presetCategory = "all") {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    if (presetCategory) {
      activeSearchCategory = presetCategory;
    }

    const categoriesPills = [
      { id: "all", label: t("allCategories"), icon: "sparkles" },
      ...CATEGORIES.map((c) => ({
        id: c.id,
        label: currentLang === "ka" ? c.label.ka : c.label.en,
        icon: c.icon
      }))
    ];

    const pillsHtml = categoriesPills
      .map(
        (c) => `
        <button
          class="filter-pill ${activeSearchCategory === c.id ? "active" : ""}"
          data-category="${c.id}"
          onclick="App.setCategoryFilter('${c.id}')"
        >
          <span>${Icons.get(c.icon, { size: 14 })}</span> ${c.label}
        </button>
      `
      )
      .join("");

    mainEl.innerHTML = `
      <section class="explore-page py-4">
        <div class="container">
          <div class="explore-header mb-4">
            <h1 class="display-title mb-2">${t("navExplore")}</h1>
            <p class="text-muted">${currentLang === "ka" ? "ಬೆಂಗಳೂರಿನ ಎಲ್ಲಾ 68+ ಪ್ರಸಿದ್ಧ ಸ್ಥಳಗಳನ್ನು ಶೋಧಿಸಿ ಮತ್ತು ಅನ್ವೇಷಿಸಿ." : "Search, discover, and filter all 68+ iconic Bengaluru destinations."}</p>
          </div>

          <!-- Search & Filter Controls -->
          <div class="search-filter-card card mb-4 p-3 bg-surface border">
            <div class="row g-2 align-items-center">
              <div class="col-md-7">
                <div class="input-group">
                  <span class="input-group-text bg-transparent border-end-0">${Icons.get("search", { size: 16 })}</span>
                  <input
                    type="text"
                    id="exploreSearchInput"
                    class="form-control border-start-0"
                    placeholder="${t("searchPlaceholder")}"
                    value="${activeSearchQuery}"
                    autocomplete="off"
                  />
                  ${
                    activeSearchQuery
                      ? `<button class="btn btn-outline-secondary" onclick="App.clearSearchQuery()">${Icons.get("x", { size: 14 })}</button>`
                      : ""
                  }
                </div>
              </div>
              <div class="col-md-3">
                <select id="sortSelect" class="form-select" onchange="App.setSortFilter(this.value)">
                  <option value="featured" ${activeSortBy === "featured" ? "selected" : ""}>${t("sortFeatured")}</option>
                  <option value="rating" ${activeSortBy === "rating" ? "selected" : ""}>${t("sortRating")}</option>
                  <option value="name" ${activeSortBy === "name" ? "selected" : ""}>${t("sortName")}</option>
                  <option value="distance" ${activeSortBy === "distance" ? "selected" : ""}>${t("sortDistance")}</option>
                </select>
              </div>
              <div class="col-md-2">
                <button class="btn btn-outline-primary w-100 d-inline-flex align-items-center justify-content-center gap-1" id="exploreNearMeBtn">
                  ${Icons.get("navigation", { size: 14 })} <span>${t("nearMe")}</span>
                </button>
              </div>
            </div>

            <!-- Category Pills Bar -->
            <div class="category-pills-bar mt-3 d-flex gap-2 flex-wrap">
              ${pillsHtml}
            </div>
          </div>

          <!-- Results Header & Counter -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div id="results-count-text" class="text-muted fs-sm font-weight-medium"></div>
            ${
              activeSearchQuery || activeSearchCategory !== "all"
                ? `<button class="btn btn-link btn-sm text-decoration-none text-danger p-0 d-inline-flex align-items-center gap-1" onclick="App.resetAllFilters()">${Icons.get("x", { size: 12 })} ${t("clearFilters")}</button>`
                : ""
            }
          </div>

          <!-- Places Grid Container -->
          <div id="explore-places-grid" class="landmark-cards-grid">
            <!-- Dynamic items rendered via executeSearch() -->
          </div>
        </div>
      </section>
    `;

    // Hook up instant live search
    const searchInput = document.getElementById("exploreSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        activeSearchQuery = e.target.value;
        executeSearch();
      });
    }

    // Near me button
    const nearMeBtn = document.getElementById("exploreNearMeBtn");
    if (nearMeBtn) {
      nearMeBtn.addEventListener("click", async () => {
        nearMeBtn.textContent = t("locating");
        try {
          await GeoService.getUserLocation();
          activeSortBy = "distance";
          const sortSelect = document.getElementById("sortSelect");
          if (sortSelect) sortSelect.value = "distance";
          executeSearch();
          nearMeBtn.innerHTML = `${Icons.get("navigation", { size: 14 })} <span>${t("nearMe")}</span>`;
        } catch (err) {
          alert(err.message || "Could not retrieve location.");
          nearMeBtn.innerHTML = `${Icons.get("navigation", { size: 14 })} <span>${t("nearMe")}</span>`;
        }
      });
    }

    executeSearch();
  }

  function executeSearch() {
    const gridEl = document.getElementById("explore-places-grid");
    const countEl = document.getElementById("results-count-text");
    if (!gridEl) return;

    const userLoc = GeoService.getCachedLocation();

    const results = SearchEngine.search(PLACES, {
      query: activeSearchQuery,
      category: activeSearchCategory,
      sortBy: activeSortBy,
      userLocation: userLoc,
      lang: currentLang
    });

    if (countEl) {
      countEl.textContent = `${results.length} ${currentLang === "ka" ? "ತಾಣಗಳು ಕಂಡುಬಂದಿವೆ" : "destinations found"}`;
    }

    if (results.length === 0) {
      gridEl.innerHTML = `
        <div class="no-results-state col-12 text-center py-5">
          <div class="mb-3 opacity-50">${Icons.get("search", { size: 40 })}</div>
          <h4>${t("noResults")}</h4>
          <button class="btn btn-primary mt-3" onclick="App.resetAllFilters()">${t("clearFilters")}</button>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = results.map((p) => renderLandmarkCard(p)).join("");
  }

  function setCategoryFilter(catId) {
    activeSearchCategory = catId;
    document.querySelectorAll(".filter-pill").forEach((pill) => {
      pill.classList.toggle("active", pill.getAttribute("data-category") === catId);
    });
    executeSearch();
  }

  function setSortFilter(sortValue) {
    activeSortBy = sortValue;
    executeSearch();
  }

  function clearSearchQuery() {
    activeSearchQuery = "";
    const input = document.getElementById("exploreSearchInput");
    if (input) input.value = "";
    executeSearch();
  }

  function resetAllFilters() {
    activeSearchCategory = "all";
    activeSearchQuery = "";
    activeSortBy = "featured";
    renderExploreView("all");
  }

  /**
   * Render individual Destination Card with Lucide Icons
   */
  function renderLandmarkCard(place) {
    const isFav = StorageService.isFavorite(place.id);
    const inPlan = StorageService.isInPlanner(place.id);

    const title = currentLang === "ka" ? place.kannadaName : place.name;
    const subTitle = currentLang === "ka" ? place.name : place.kannadaName;
    const nb = currentLang === "ka" ? place.neighbourhoodKn : place.neighbourhood;
    const desc = currentLang === "ka" ? place.shortDescKn : place.shortDesc;

    const userLoc = GeoService.getCachedLocation();
    let distanceStr = "";
    if (userLoc && place.coordinates) {
      const dist = GeoService.calculateDistance(
        userLoc.lat,
        userLoc.lng,
        place.coordinates.lat,
        place.coordinates.lng
      );
      distanceStr = `<span class="card-distance-badge d-inline-flex align-items-center gap-1">${Icons.get("navigation", { size: 11 })} ${GeoService.formatDistance(dist, currentLang)}</span>`;
    }

    return `
      <article class="landmark-magazine-card" data-id="${place.id}">
        <div class="card-thumb-wrap">
          <img
            src="${place.image}"
            alt="${title}"
            class="card-thumb-img"
            loading="lazy"
            onerror="this.src='assets/images/placeholder.jpg'"
          />
          <div class="card-top-badges">
            <span class="badge badge-category">${(place.category || "").replace("-", " ").toUpperCase()}</span>
            ${distanceStr}
          </div>
          <button
            class="card-fav-btn ${isFav ? "is-fav" : ""}"
            onclick="event.stopPropagation(); App.toggleFavorite('${place.id}')"
            aria-label="Save to favorites"
          >
            ${Icons.get(isFav ? "heart-filled" : "heart", { size: 16, class: isFav ? "text-danger" : "" })}
          </button>
        </div>

        <div class="card-info-wrap">
          <div class="card-meta-row d-flex justify-content-between align-items-center mb-1">
            <span class="card-neighbourhood text-muted fs-xs d-inline-flex align-items-center gap-1">
              ${Icons.get("map-pin", { size: 12 })} <span>${nb || "Bengaluru"}</span>
            </span>
            ${place.rating ? `<span class="card-rating-badge fs-xs d-inline-flex align-items-center gap-1">${Icons.get("star-filled", { size: 11, class: "text-amber" })} ${place.rating}</span>` : ""}
          </div>
          <h3 class="card-title h5 mb-1">
            <a href="#/destination/${place.id}" class="text-decoration-none text-heading">${title}</a>
          </h3>
          ${subTitle ? `<p class="card-subtitle text-muted fs-xs mb-2">${subTitle}</p>` : ""}
          <p class="card-summary text-body-secondary fs-sm mb-3">${desc}</p>

          <div class="card-actions-row d-flex gap-2">
            <button
              class="btn btn-sm btn-outline-primary flex-grow-1 d-inline-flex align-items-center justify-content-center gap-1"
              onclick="ModalController.openModalById('${place.id}', '${currentLang}')"
            >
              ${Icons.get("info", { size: 13 })} <span>${t("viewDetails")}</span>
            </button>
            <button
              class="btn btn-sm btn-primary d-inline-flex align-items-center justify-content-center"
              onclick="GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')"
              title="${t("getDirections")}"
            >
              ${Icons.get("navigation", { size: 14 })}
            </button>
            <button
              class="btn btn-sm ${inPlan ? "btn-secondary is-in-plan" : "btn-outline-secondary"} d-inline-flex align-items-center justify-content-center"
              onclick="App.togglePlanner('${place.id}')"
              title="${inPlan ? t("inTrip") : t("addToTrip")}"
            >
              ${Icons.get(inPlan ? "check" : "plus", { size: 14 })}
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function toggleFavorite(placeId) {
    StorageService.toggleFavorite(placeId);
    updateBadges();
    document.querySelectorAll(`.landmark-magazine-card[data-id="${placeId}"]`).forEach((card) => {
      const place = PLACES.find((p) => p.id === placeId);
      if (place) card.outerHTML = renderLandmarkCard(place);
    });
  }

  function togglePlanner(placeId) {
    if (StorageService.isInPlanner(placeId)) {
      StorageService.removeFromPlanner(placeId);
    } else {
      StorageService.addToPlanner(placeId);
    }
    updateBadges();
    document.querySelectorAll(`.landmark-magazine-card[data-id="${placeId}"]`).forEach((card) => {
      const place = PLACES.find((p) => p.id === placeId);
      if (place) card.outerHTML = renderLandmarkCard(place);
    });
  }

  /**
   * Categories Showcase View
   */
  function renderCategoriesView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const cardsHtml = CATEGORIES.map((cat) => {
      const label = currentLang === "ka" ? cat.label.ka : cat.label.en;
      const tagline = currentLang === "ka" ? cat.tagline.ka : cat.tagline.en;
      const placesInCat = PLACES.filter((p) => p.category === cat.id);
      const iconSvg = typeof Icons !== "undefined" ? Icons.get(cat.icon, { size: 28 }) : "";

      return `
        <div class="category-showcase-card card mb-4 border-0 shadow-sm overflow-hidden">
          <div class="card-header d-flex justify-content-between align-items-center p-3" style="background-color: ${cat.color}15; border-bottom: 2px solid ${cat.color}40;">
            <div class="d-flex align-items-center gap-2">
              <span class="fs-3" style="color: ${cat.color};">${iconSvg}</span>
              <div>
                <h3 class="m-0 h4" style="color: ${cat.color};">${label}</h3>
                <small class="text-muted">${tagline}</small>
              </div>
            </div>
            <a href="#/category/${cat.id}" class="btn btn-sm btn-outline-primary">
              ${currentLang === "ka" ? "ಎಲ್ಲಾ ನೋಡಿ" : "View All"} (${placesInCat.length}) →
            </a>
          </div>
          <div class="card-body p-3">
            <div class="row g-3">
              ${placesInCat
                .slice(0, 4)
                .map((p) => {
                  const title = currentLang === "ka" ? p.kannadaName : p.name;
                  return `
                  <div class="col-md-3 col-6">
                    <div class="category-mini-card" onclick="Router.navigate('/destination/${p.id}')">
                      <div class="category-mini-card-thumb-wrap">
                        <img src="${p.image}" alt="${title}" class="category-mini-card-thumb" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
                      </div>
                      <h6 class="fs-sm mb-1 text-truncate font-weight-bold">${title}</h6>
                      <small class="text-muted fs-xs d-inline-flex align-items-center gap-1">${Icons.get("map-pin", { size: 10 })} ${currentLang === "ka" ? p.neighbourhoodKn : p.neighbourhood}</small>
                    </div>
                  </div>
                `;
                })
                .join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");

    mainEl.innerHTML = `
      <section class="categories-page py-4">
        <div class="container">
          <div class="section-intro text-center mb-5">
            <h1 class="display-title mb-2">${t("navCategories")}</h1>
            <p class="section-lead text-muted">${currentLang === "ka" ? "ಬೆಂಗಳೂರಿನ ಎಲ್ಲಾ ತಾಣಗಳನ್ನು 9 ವಿಶಿಷ್ಟ ವಿಷಯಾಧಾರಿತ ವಿಭಾಗಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಿ." : "Discover Bangalore through 9 distinct experiential lenses."}</p>
          </div>
          <div class="categories-list">
            ${cardsHtml}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Split-Screen Interactive Landmarks Map View (All 68+ Destinations)
   */
  function renderMapView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const mapHeaderHtml = `
      <div class="map-controls-header bg-surface border-bottom px-3 py-2 d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div class="d-flex align-items-center gap-2">
          <div class="d-inline-flex align-items-center gap-2 text-primary font-weight-bold fs-sm">
            ${Icons.get("map-pin", { size: 16 })}
            <span>${currentLang === "ka" ? "ಬೆಂಗಳೂರು ಸ್ಥಳಗಳ ನಕ್ಷೆ (68+ ತಾಣಗಳು)" : "Landmarks Map (68+ Destinations)"}</span>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1" onclick="MapController.locateUser()">
            ${Icons.get("navigation", { size: 13 })} <span>${t("nearMe")}</span>
          </button>
          <button class="btn btn-sm btn-outline-secondary d-md-none d-inline-flex align-items-center gap-1" id="mapMobileToggleBtn" onclick="App.toggleMapMobileMode()">
            ${Icons.get("list", { size: 13 })} <span id="mapToggleBtnLabel">${currentLang === "ka" ? "ಪಟ್ಟಿ" : "List"}</span>
          </button>
        </div>
      </div>
    `;

    // Default: Interactive Split-Screen Map View
    mainEl.innerHTML = `
      <section class="map-page-wrapper">
        ${mapHeaderHtml}
        <div class="map-split-layout" id="mapSplitLayout">
          <!-- Left Sidebar Places List -->
          <aside class="map-sidebar-list" id="mapSidebarList">
            <div class="map-sidebar-header">
              <div class="map-sidebar-search-box">
                <span class="search-icon">${Icons.get("search", { size: 14 })}</span>
                <input
                  type="text"
                  id="mapSearchInput"
                  placeholder="${currentLang === "ka" ? "ನಕ್ಷೆಯಲ್ಲಿ ಸ್ಥಳ ಹುಡುಕಿ..." : "Filter places on map..."}"
                  value="${activeMapSearch}"
                  autocomplete="off"
                />
                <button
                  class="map-search-clear-btn"
                  id="mapSearchClearBtn"
                  onclick="App.clearMapSearch()"
                  style="${activeMapSearch ? 'display: flex;' : 'display: none;'}"
                  title="Clear search"
                >
                  ${Icons.get("x", { size: 13 })}
                </button>
              </div>

              <div class="d-flex justify-content-between align-items-center mb-2 px-1">
                <span class="fs-xs text-uppercase text-muted fw-bold d-inline-flex align-items-center gap-1">
                  ${Icons.get("layers", { size: 12 })} <span>${currentLang === "ka" ? "ವರ್ಗಗಳು" : "Categories"}</span>
                </span>
                <button
                  class="btn-reset-map-filter fs-xs text-primary bg-transparent border-0 p-0 ${activeMapCategory !== "all" || activeMapSearch ? "" : "d-none"}"
                  id="mapFilterResetBtn"
                  onclick="App.resetMapFilters()"
                >
                  ${Icons.get("x", { size: 11 })} ${currentLang === "ka" ? "ಎಲ್ಲಾ ತಾಣಗಳು" : "Reset Filter"}
                </button>
              </div>

              <div class="map-sidebar-pills" id="mapSidebarPills">
                ${renderMapCategoryPills()}
              </div>
            </div>
            <div class="map-sidebar-meta" id="mapSidebarMeta"></div>
            <div class="map-places-scroll-list" id="mapPlacesScrollList">
              <!-- Injected by renderMapPlacesList -->
            </div>
          </aside>

          <!-- Right Leaflet Map Canvas Pane -->
          <div class="map-canvas-pane">
            <div id="map-container" class="map-leaflet-canvas"></div>
          </div>
        </div>
      </section>
    `;

    // Hook up search input
    const mapSearchInput = document.getElementById("mapSearchInput");
    if (mapSearchInput) {
      mapSearchInput.addEventListener("input", (e) => {
        activeMapSearch = e.target.value.trim().toLowerCase();
        const clearBtn = document.getElementById("mapSearchClearBtn");
        if (clearBtn) {
          clearBtn.style.display = activeMapSearch ? "flex" : "none";
        }
        const resetBtn = document.getElementById("mapFilterResetBtn");
        if (resetBtn) {
          resetBtn.classList.toggle("d-none", activeMapCategory === "all" && !activeMapSearch);
        }
        renderMapPlacesList();
      });
    }

    renderMapPlacesList();

    // Initialize Leaflet Map
    setTimeout(() => {
      MapController.init("map-container", currentLang);
      MapController.onSelect((placeId) => {
        highlightMapPlace(placeId, true);
      });
    }, 120);
  }

  function renderMapCategoryPills() {
    const list = [
      { id: "all", label: t("allCategories"), icon: "sparkles" },
      ...CATEGORIES.map((c) => ({
        id: c.id,
        label: currentLang === "ka" ? c.label.ka : c.label.en,
        icon: c.icon
      }))
    ];
    return list
      .map(
        (c) => `
      <button
        class="map-filter-pill ${activeMapCategory === c.id ? "active" : ""}"
        onclick="App.setMapCategory('${c.id}')"
        title="${c.label}"
      >
        ${Icons.get(c.icon, { size: 12 })} <span>${c.label}</span>
      </button>
    `
      )
      .join("");
  }

  function renderMapPlacesList() {
    const listEl = document.getElementById("mapPlacesScrollList");
    const metaEl = document.getElementById("mapSidebarMeta");
    if (!listEl) return;

    let filtered = PLACES;
    if (activeMapCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeMapCategory);
    }
    if (activeMapSearch) {
      filtered = filtered.filter((p) => {
        const nameEn = (p.name || "").toLowerCase();
        const nameKa = (p.kannadaName || "").toLowerCase();
        const nbEn = (p.neighbourhood || "").toLowerCase();
        const nbKa = (p.neighbourhoodKn || "").toLowerCase();
        return (
          nameEn.includes(activeMapSearch) ||
          nameKa.includes(activeMapSearch) ||
          nbEn.includes(activeMapSearch) ||
          nbKa.includes(activeMapSearch)
        );
      });
    }

    if (metaEl) {
      metaEl.textContent = `${filtered.length} ${currentLang === "ka" ? "ತಾಣಗಳು ಕಂಡುಬಂದಿವೆ" : "places found"}`;
    }

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="p-4 text-center text-muted fs-sm">${t("noResults")}</div>`;
      return;
    }

    listEl.innerHTML = filtered
      .map((place) => {
        const isSelected = activeMapSelectedId === place.id;
        const title = currentLang === "ka" ? place.kannadaName : place.name;
        const nb = currentLang === "ka" ? place.neighbourhoodKn : place.neighbourhood;
        const catStyle = CATEGORIES.find((c) => c.id === place.category) || {};

        return `
          <div
            class="map-place-item-card ${isSelected ? "is-active" : ""}"
            data-id="${place.id}"
            onclick="App.selectMapPlace('${place.id}')"
          >
            <img
              src="${place.image}"
              alt="${title}"
              class="map-place-item-thumb"
              loading="lazy"
              onerror="this.src='assets/images/placeholder.jpg'"
            />
            <div class="map-place-item-info">
              <div>
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <span class="badge" style="background-color: ${catStyle.color || "#2563eb"}18; color: ${catStyle.color || "#2563eb"}; font-size: 0.65rem; font-weight: 700;">
                    ${(place.category || "").replace("-", " ").toUpperCase()}
                  </span>
                  ${place.rating ? `<span class="fs-xs font-weight-bold d-inline-flex align-items-center gap-1 text-amber">${Icons.get("star-filled", { size: 10 })} ${place.rating}</span>` : ""}
                </div>
                <h4 class="map-place-item-title">${title}</h4>
                <p class="map-place-item-nb">${Icons.get("map-pin", { size: 11 })} <span>${nb || "Bengaluru"}</span></p>
              </div>
              <div class="map-place-item-actions">
                <button
                  class="btn btn-xs btn-outline-primary d-inline-flex align-items-center gap-1"
                  onclick="event.stopPropagation(); ModalController.openModalById('${place.id}', '${currentLang}')"
                >
                  ${Icons.get("info", { size: 11 })} <span>${t("viewDetails")}</span>
                </button>
                <button
                  class="btn btn-xs btn-primary d-inline-flex align-items-center gap-1"
                  onclick="event.stopPropagation(); GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')"
                >
                  ${Icons.get("navigation", { size: 11 })} <span>${t("getDirections")}</span>
                </button>
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function setMapCategory(catId) {
    activeMapCategory = catId;
    const pillsContainer = document.getElementById("mapSidebarPills") || document.querySelector(".map-sidebar-pills");
    if (pillsContainer) {
      pillsContainer.innerHTML = renderMapCategoryPills();
    }
    const resetBtn = document.getElementById("mapFilterResetBtn");
    if (resetBtn) {
      resetBtn.classList.toggle("d-none", activeMapCategory === "all" && !activeMapSearch);
    }
    renderMapPlacesList();
    MapController.renderMarkers(catId);
  }

  function clearMapSearch() {
    activeMapSearch = "";
    const input = document.getElementById("mapSearchInput");
    if (input) input.value = "";
    const clearBtn = document.getElementById("mapSearchClearBtn");
    if (clearBtn) clearBtn.style.display = "none";
    const resetBtn = document.getElementById("mapFilterResetBtn");
    if (resetBtn) {
      resetBtn.classList.toggle("d-none", activeMapCategory === "all");
    }
    renderMapPlacesList();
  }

  function resetMapFilters() {
    activeMapSearch = "";
    activeMapCategory = "all";
    const input = document.getElementById("mapSearchInput");
    if (input) input.value = "";
    const clearBtn = document.getElementById("mapSearchClearBtn");
    if (clearBtn) clearBtn.style.display = "none";
    const resetBtn = document.getElementById("mapFilterResetBtn");
    if (resetBtn) resetBtn.classList.add("d-none");
    const pillsContainer = document.getElementById("mapSidebarPills") || document.querySelector(".map-sidebar-pills");
    if (pillsContainer) {
      pillsContainer.innerHTML = renderMapCategoryPills();
    }
    renderMapPlacesList();
    MapController.renderMarkers("all");
  }

  function selectMapPlace(placeId) {
    activeMapSelectedId = placeId;
    highlightMapPlace(placeId, true);
    MapController.focusPlace(placeId);

    const layout = document.getElementById("mapSplitLayout");
    if (layout && window.innerWidth <= 768 && layout.classList.contains("mobile-list-only")) {
      toggleMapMobileMode();
    }
  }

  function highlightMapPlace(placeId, shouldScroll = true) {
    activeMapSelectedId = placeId;
    document.querySelectorAll(".map-place-item-card").forEach((card) => {
      const match = card.getAttribute("data-id") === placeId;
      card.classList.toggle("is-active", match);
      if (match && shouldScroll) {
        card.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  function toggleMapMobileMode() {
    const layout = document.getElementById("mapSplitLayout");
    const label = document.getElementById("mapToggleBtnLabel");
    if (!layout) return;

    if (layout.classList.contains("mobile-list-only")) {
      layout.classList.remove("mobile-list-only");
      layout.classList.add("mobile-map-only");
      if (label) label.textContent = currentLang === "ka" ? "ಪಟ್ಟಿ" : "List";
    } else {
      layout.classList.remove("mobile-map-only");
      layout.classList.add("mobile-list-only");
      if (label) label.textContent = currentLang === "ka" ? "ನಕ್ಷೆ" : "Map";
    }
  }

  /**
   * Itineraries View
   */
  function renderItinerariesView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;
    mainEl.innerHTML = `<div id="itineraries-view"></div>`;
    PlannerController.renderItinerariesView("itineraries-view");
  }

  /**
   * Stories View - Editorial Magazine Grid
   */
  function renderStoriesView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    // High-resolution heritage cover images for each story
    const storyCovers = {
      "kempegowda-four-towers": "assets/images/destinations/nature-outdoors/lalbagh-botanical-garden.jpg",
      "garden-city-legacy": "assets/images/destinations/nature-outdoors/cubbon-park.jpg",
      "pete-silk-lanes": "assets/images/destinations/shopping-markets/chickpet-market.jpg",
      "silicon-plateau-revolution": "assets/images/destinations/technology-innovation/iisc-bangalore.jpg"
    };

    const cardsHtml = STORIES.map((story) => {
      const title = currentLang === "ka" ? story.title.ka : story.title.en;
      const sub = currentLang === "ka" ? story.subtitle.ka : story.subtitle.en;
      const coverImg = storyCovers[story.id] || "assets/images/destinations/nature-outdoors/cubbon-park.jpg";

      // Render up to 3 landmark tags with avatars
      const relatedPills = (story.relatedPlaces || []).slice(0, 3).map((pId) => {
        const p = PLACES.find((item) => item.id === pId);
        if (!p) return "";
        const name = currentLang === "ka" ? p.kannadaName : p.name;
        return `
          <a href="#/destination/${p.id}" class="story-related-pill" title="${name}">
            <img src="${p.image}" alt="${name}" class="story-related-avatar" loading="lazy">
            <span>${name}</span>
          </a>
        `;
      }).filter(Boolean).join("");

      return `
        <article class="story-magazine-card">
          <div class="story-cover-wrap">
            <img src="${coverImg}" alt="${title}" class="story-cover-img" loading="lazy">
            <div class="story-cover-overlay"></div>
            <div class="story-cover-badges">
              <span class="story-era-badge">${Icons.get("book-open", { size: 12 })} ${story.era}</span>
              <span class="story-time-badge">${Icons.get("clock", { size: 12 })} ${story.readingTime} ${currentLang === "ka" ? "ಓದು" : "read"}</span>
            </div>
          </div>
          <div class="story-magazine-body">
            <div class="story-tags-strip mb-2">
              ${(story.tags || []).slice(0, 2).map((tg) => `<span class="badge bg-surface-variant text-muted border">${tg}</span>`).join(" ")}
            </div>
            <h2 class="story-headline">
              <a href="#/story/${story.id}">${title}</a>
            </h2>
            <p class="story-synopsis">${sub}</p>
            ${relatedPills ? `
              <div class="story-related-strip">
                <span class="story-related-label">${Icons.get("map-pin", { size: 12 })} ${currentLang === "ka" ? "ಸಂಬಂಧಿತ ತಾಣಗಳು:" : "Featured Places:"}</span>
                <div class="story-related-list">${relatedPills}</div>
              </div>
            ` : ""}
            <div class="story-magazine-footer">
              <a href="#/story/${story.id}" class="btn btn-primary btn-sm d-inline-flex align-items-center gap-2">
                <span>${t("readStory")}</span>
                ${Icons.get("arrow-right", { size: 15 })}
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    mainEl.innerHTML = `
      <section class="stories-page py-4">
        <div class="container">
          <div class="section-intro text-center mb-5">
            <span class="badge bg-secondary-soft text-secondary px-3 py-1 rounded-full mb-2 fw-semibold">
              ${Icons.get("book-open", { size: 14 })} ${currentLang === "ka" ? "ಬೆಂಗಳೂರು ಸಾಂಸ್ಕೃತಿಕ ಕಥನಗಳು" : "Bengaluru Historical Chronicles"}
            </span>
            <h1 class="display-title mb-2">${t("storiesTitle")}</h1>
            <p class="section-lead text-muted">${t("storiesSubtitle")}</p>
          </div>
          <div class="story-magazine-grid">
            ${cardsHtml}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Story Reader Detail View
   */
  function renderStoryDetail(storyId) {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const story = STORIES.find((s) => s.id === storyId);
    if (!story) {
      renderStoriesView();
      return;
    }

    const title = currentLang === "ka" ? story.title.ka : story.title.en;
    const sub = currentLang === "ka" ? story.subtitle.ka : story.subtitle.en;
    const content = currentLang === "ka" ? story.content.ka : story.content.en;

    const paragraphs = content
      .split("\n\n")
      .map((p) => `<p class="story-paragraph mb-3">${p.replace(/\n/g, "<br>")}</p>`)
      .join("");

    const relatedPlacesHtml = (story.relatedPlaces || [])
      .map((pId) => PLACES.find((p) => p.id === pId))
      .filter(Boolean)
      .map((p) => `
        <div class="col-md-3 col-6">
          <div class="category-mini-card" onclick="Router.navigate('/destination/${p.id}')">
            <div class="category-mini-card-thumb-wrap">
              <img src="${p.image}" class="category-mini-card-thumb" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'">
            </div>
            <h6 class="fs-xs font-weight-bold mb-0 text-truncate text-center">${currentLang === "ka" ? p.kannadaName : p.name}</h6>
          </div>
        </div>
      `)
      .join("");

    mainEl.innerHTML = `
      <article class="story-detail-page py-5">
        <div class="container max-w-prose mx-auto">
          <a href="#/stories" class="btn btn-sm btn-link text-decoration-none mb-3">← ${currentLang === "ka" ? "ಎಲ್ಲಾ ಕಥೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ" : "Back to City Stories"}</a>
          <header class="story-detail-header mb-4 border-bottom pb-4">
            <span class="badge bg-secondary text-white mb-2 d-inline-flex align-items-center gap-1">${Icons.get("book-open", { size: 12 })} ${story.era} • ${Icons.get("clock", { size: 12 })} ${story.readingTime}</span>
            <h1 class="story-detail-heading display-title mb-2">${title}</h1>
            <p class="story-detail-sub lead text-muted">${sub}</p>
          </header>
          <div class="story-detail-body lead-sm">
            ${paragraphs}
          </div>

          ${
            relatedPlacesHtml
              ? `
            <div class="related-places-section mt-5 pt-4 border-top">
              <h4 class="mb-3 d-flex align-items-center gap-2">${Icons.get("map-pin", { size: 16 })} <span>${currentLang === "ka" ? "ಸಂಬಂಧಿತ ಸ್ಥಳಗಳು" : "Related Landmark Destinations"}</span></h4>
              <div class="row g-2">${relatedPlacesHtml}</div>
            </div>
          `
              : ""
          }
        </div>
      </article>
    `;
  }

  /**
   * Full Page Destination Detail View
   */
  function renderDestinationDetail(placeId) {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const place = PLACES.find((p) => p.id === placeId);
    if (!place) {
      renderExploreView();
      return;
    }

    StorageService.addRecentlyViewed(place.id);

    const isFav = StorageService.isFavorite(place.id);
    const inPlan = StorageService.isInPlanner(place.id);

    const title = currentLang === "ka" ? place.kannadaName : place.name;
    const subTitle = currentLang === "ka" ? place.name : place.kannadaName;
    const nb = currentLang === "ka" ? place.neighbourhoodKn : place.neighbourhood;
    const desc = currentLang === "ka" ? place.fullDescKn : place.fullDesc;
    const historyText = currentLang === "ka" ? place.historyKn : place.history;

    const info = place.visitorInfo || {};
    const timing = currentLang === "ka" ? info.timingKn || info.timing : info.timing || "Check local hours";
    const fee = currentLang === "ka" ? info.feeKn || info.fee : info.fee || "Free / Standard";
    const metro = currentLang === "ka" ? info.nearestMetroKn || info.nearestMetro : info.nearestMetro || "BMTC Bus / Auto";
    const duration = currentLang === "ka" ? info.durationKn || info.duration : info.duration || "1 - 2 hours";

    const related = PLACES.filter((p) => p.category === place.category && p.id !== place.id).slice(0, 3);
    const relatedHtml = related.map((p) => renderLandmarkCard(p)).join("");

    mainEl.innerHTML = `
      <section class="destination-detail-page py-4">
        <div class="container">
          <a href="#/explore" class="btn btn-sm btn-link text-decoration-none mb-3">${t("backToExplore")}</a>

          <div class="card overflow-hidden border-0 shadow-sm mb-5">
            <div class="destination-hero-frame position-relative" style="max-height: 480px; overflow: hidden;">
              <img src="${place.image}" alt="${title}" class="w-100" style="object-fit: cover; max-height: 480px;" onerror="this.src='assets/images/placeholder.jpg'">
              <div class="position-absolute bottom-0 start-0 w-100 p-4 text-white" style="background: linear-gradient(transparent, rgba(0,0,0,0.85));">
                <span class="badge bg-primary mb-2">${(place.category || "").replace("-", " ").toUpperCase()}</span>
                <h1 class="display-title m-0 text-white">${title}</h1>
                ${subTitle ? `<p class="fs-md opacity-75 m-0">${subTitle}</p>` : ""}
                <p class="fs-sm opacity-90 mt-1 mb-0 d-flex align-items-center gap-1">${Icons.get("map-pin", { size: 14 })} <span>${nb || "Bengaluru"}</span></p>
              </div>
            </div>

            <div class="card-body p-4">
              <div class="row g-4">
                <div class="col-lg-8">
                  <h3 class="h4 mb-3">${currentLang === "ka" ? "ಸ್ಥಳದ ವಿವರ" : "About this Destination"}</h3>
                  <p class="lead-sm text-body-secondary mb-4">${desc}</p>

                  ${
                    historyText
                      ? `
                    <div class="history-banner p-3 rounded bg-surface-variant border-start border-4 border-primary mb-4">
                      <h4 class="h6 text-primary text-uppercase mb-2 d-flex align-items-center gap-1">${Icons.get("book-open", { size: 14 })} <span>${currentLang === "ka" ? "ಐತಿಹಾಸಿಕ ಹಿನ್ನೆಲೆ" : "Heritage & History"}</span></h4>
                      <p class="m-0 fs-sm">${historyText}</p>
                    </div>
                  `
                      : ""
                  }

                  <div class="d-flex gap-2 flex-wrap mt-4">
                    <button class="btn btn-primary d-inline-flex align-items-center gap-2" onclick="GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')">
                      ${Icons.get("navigation", { size: 15 })} <span>${t("getDirections")}</span>
                    </button>
                    <button class="btn ${inPlan ? "btn-secondary is-in-plan" : "btn-outline-primary"} d-inline-flex align-items-center gap-2" onclick="App.togglePlanner('${place.id}'); App.renderDestinationDetail('${place.id}');">
                      ${Icons.get(inPlan ? "check" : "plus", { size: 15 })} <span>${inPlan ? t("inTrip") : t("addToTrip")}</span>
                    </button>
                    <button class="btn ${isFav ? "btn-danger" : "btn-outline-secondary"} d-inline-flex align-items-center gap-2" onclick="App.toggleFavorite('${place.id}'); App.renderDestinationDetail('${place.id}');">
                      ${Icons.get(isFav ? "heart-filled" : "heart", { size: 15 })} <span>${isFav ? t("savedFavorites") : "Save to Favorites"}</span>
                    </button>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="visitor-guidelines-card card bg-surface-variant p-3 border">
                    <h4 class="h5 border-bottom pb-2 mb-3">${currentLang === "ka" ? "ಸಂದರ್ಶಕರ ಮಾರ್ಗದರ್ಶಿ" : "Visitor Guidelines"}</h4>
                    <ul class="list-unstyled mb-0">
                      <li class="mb-3">
                        <strong class="d-block fs-xs text-uppercase text-muted d-flex align-items-center gap-1">${Icons.get("clock", { size: 12 })} ${t("timingLabel")}</strong>
                        <span class="fs-sm">${timing}</span>
                      </li>
                      <li class="mb-3">
                        <strong class="d-block fs-xs text-uppercase text-muted d-flex align-items-center gap-1">${Icons.get("ticket", { size: 12 })} ${t("feeLabel")}</strong>
                        <span class="fs-sm">${fee}</span>
                      </li>
                      <li class="mb-3">
                        <strong class="d-block fs-xs text-uppercase text-muted d-flex align-items-center gap-1">${Icons.get("train", { size: 12 })} ${t("metroNear")}</strong>
                        <span class="fs-sm">${metro}</span>
                      </li>
                      <li class="mb-0">
                        <strong class="d-block fs-xs text-uppercase text-muted d-flex align-items-center gap-1">${Icons.get("timer", { size: 12 })} ${t("durationLabel")}</strong>
                        <span class="fs-sm">${duration}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Similar places -->
          ${
            related.length > 0
              ? `
            <div class="similar-places-section mt-5">
              <h3 class="h4 mb-4">${currentLang === "ka" ? "ಇದೇ ವಿಭಾಗದ ಇತರ ತಾಣಗಳು" : "More in this Category"}</h3>
              <div class="landmark-cards-grid">${relatedHtml}</div>
            </div>
          `
              : ""
          }
        </div>
      </section>
    `;
  }

  /**
   * Favorites View
   */
  function renderFavoritesView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const favIds = StorageService.getFavorites();
    const favPlaces = favIds.map((id) => PLACES.find((p) => p.id === id)).filter(Boolean);

    mainEl.innerHTML = `
      <section class="favorites-page py-4">
        <div class="container">
          <div class="section-intro text-center mb-5">
            <h1 class="display-title mb-2 d-flex align-items-center justify-content-center gap-2">
              ${Icons.get("heart-filled", { size: 28, class: "text-danger" })} 
              <span>${t("savedFavorites")} (${favPlaces.length})</span>
            </h1>
            <p class="section-lead text-muted">${favPlaces.length === 0 ? t("noFavorites") : (currentLang === "ka" ? "ನಿಮ್ಮ ಮೆಚ್ಚಿನ ತಾಣಗಳ ಸಂಗ್ರಹ." : "Your bookmarked Bengaluru places ready for exploration.")}</p>
          </div>
          <div class="landmark-cards-grid">
            ${favPlaces.map((p) => renderLandmarkCard(p)).join("")}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * About View - Rich Illustrated Editorial & City History
   */
  function renderAboutView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const isKa = currentLang === "ka";

    // Fast facts data
    const fastFacts = [
      {
        icon: "landmark",
        value: isKa ? "1537 ಕ್ರಿ.ಶ." : "1537 CE",
        label: isKa ? "ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡರಿಂದ ಸ್ಥಾಪನೆ" : "Founded by Kempe Gowda I",
        sub: isKa ? "ಮಣ್ಣಿನ ಕೋಟೆ & ನಾಲ್ಕು ಗೋಪುರಗಳು" : "Mud fort & 4 boundary towers"
      },
      {
        icon: "trees",
        value: isKa ? "920 ಮೀ." : "920 m",
        label: isKa ? "ಸಮುದ್ರ ಮಟ್ಟದಿಂದ ಎತ್ತರ" : "High Elevation Plateau",
        sub: isKa ? "ವರ್ಷವಿಡೀ ಆಹ್ಲಾದಕರ ಹವಾಮಾನ" : "Pleasant year-round weather"
      },
      {
        icon: "sparkles",
        value: isKa ? "13.5M+" : "13.5M+",
        label: isKa ? "ಕಾಸ್ಮೋಪಾಲಿಟನ್ ಜನಸಂಖ್ಯೆ" : "Cosmopolitan Population",
        sub: isKa ? "ವಿಶ್ವದ ಪ್ರಮುಖ ತಂತ್ರಜ್ಞಾನ ಕೇಂದ್ರ" : "India's premier tech hub"
      },
      {
        icon: "compass",
        value: isKa ? "1000+" : "1000+",
        label: isKa ? "ಉದ್ಯಾನಗಳು & ಹಸಿರು ತಾಣಗಳು" : "Parks & Green Lungs",
        sub: isKa ? "ಲಾಲ್‌ಬಾಗ್ & ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಪರಂಪರೆ" : "Lalbagh & Cubbon Park legacy"
      }
    ];

    const fastFactsHtml = fastFacts.map((fact) => `
      <div class="about-fact-card">
        <div class="about-fact-icon">${Icons.get(fact.icon, { size: 24 })}</div>
        <div class="about-fact-value">${fact.value}</div>
        <div class="about-fact-label">${fact.label}</div>
        <div class="about-fact-sub text-muted">${fact.sub}</div>
      </div>
    `).join("");

    // 4 Detailed Historical & Cultural Chapters
    const chapters = [
      {
        chapterNum: isKa ? "ಅಧ್ಯಾಯ 1" : "Chapter 1",
        era: isKa ? "1537 ಕ್ರಿ.ಶ. • ಆರಂಭ & ಪೇಟೆ ಸ್ಥಾಪನೆ" : "1537 CE • Origin & The Mud Fort",
        title: isKa ? "ಬೆಂದಕಾಳೂರು ಮತ್ತು ಕೆಂಪೇಗೌಡರ ಕಾವಲು ಗೋಪುರಗಳು" : "The Legend of Boiled Beans & Kempe Gowda's Mud Fort",
        img: "assets/images/about/ab.jpg",
        content: isKa
          ? "ಬೆಂಗಳೂರು ಎಂಬ ಹೆಸರು 'ಬೆಂದ ಕಾಳು ಊರು' (ಬೇಯಿಸಿದ ಕಾಳುಗಳ ಊರು) ಎಂಬ ಪದದಿಂದ ಬಂದಿದೆ ಎಂದು ಐತಿಹ್ಯ ಹೇಳುತ್ತದೆ. ಹೊಯ್ಸಳ ರಾಜ ವೀರ ಬಲ್ಲಾಳ II ಬೇಟೆಯಾಡಲು ಹೋಗಿ ದಾರಿತಪ್ಪಿದಾಗ, ಒಬ್ಬ ವೃದ್ಧೆ ನೀಡಿದ ಬೇಯಿಸಿದ ಅವರೆಕಾಳುಗಳನ್ನು ತಿಂದು ಹಸಿವು ತಣಿಸಿಕೊಂಡು ಈ ಊರಿಗೆ 'ಬೆಂದ ಕಾಳೂರು' ಎಂದು ಹೆಸರಿಟ್ಟನೆಂಬುದು ಜನಪ್ರಿಯ ನಂಬಿಕೆ. 1537ರಲ್ಲಿ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಯಳಹಂಕ ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡ I ಅವರು ಮಣ್ಣಿನ ಕೋಟೆ ನಿರ್ಮಿಸಿ ಆಧುನಿಕ ಬೆಂಗಳೂರು ಪೇಟೆಗೆ ಶಂಕುಸ್ಥಾಪನೆ ಮಾಡಿದರು. ಅವರ ಕಾಲದಲ್ಲಿ ಚಿಕ್ಕಪೇಟೆ, ಬಳೇಪೇಟೆ, ಅಕ್ಕಿಪೇಟೆ ಮೊದಲಾದ ವ್ಯಾಪಾರ ಬೀದಿಗಳು ಹಾಗೂ ಕೆರೆ-ಕಟ್ಟೆಗಳು ನಿರ್ಮಾಣಗೊಂಡವು."
          : "The legend of Bengaluru traces back to 'Benda Kaalu Ooru' (The Town of Boiled Beans), when Hoysala King Veera Ballala II lost his way in the dense forest and was offered boiled beans by a humble elderly woman. In 1537 CE, Nadaprabhu Kempe Gowda I, a chieftain under the Vijayanagara Empire, laid the foundation of modern Bengaluru by constructing a mud fort and four cardinal stone watchtowers. He planned thriving commercial petes (bazaars) specialized in silk, rice, and grain, surrounded by interconnecting lakes and water tanks."
      },
      {
        chapterNum: isKa ? "ಅಧ್ಯಾಯ 2" : "Chapter 2",
        era: isKa ? "1760 – 1947 • ರಾಜ ಪರಂಪರೆ & ಕಂಟೋನ್ಮೆಂಟ್" : "1760 – 1947 • Royal Heritage & The Cantonment",
        title: isKa ? "ಒಡೆಯರ್, ಟಿಪ್ಪು ಸುಲ್ತಾನ್ ಮತ್ತು ಬ್ರಿಟಿಷ್ ಕಂಟೋನ್ಮೆಂಟ್" : "Tipu's Retreat, Wadiyar Grandeur & British Cantonment",
        img: "assets/images/destinations/heritage-culture/bangalore-palace.jpg",
        content: isKa
          ? "18ನೇ ಶತಮಾನದಲ್ಲಿ ಹೈದರಾಲಿ ಮತ್ತು ಟಿಪ್ಪು ಸುಲ್ತಾನ್ ಬೆಂಗಳೂರನ್ನು ಬಲವರ್ಧಿತ ಕೋಟೆ ಮತ್ತು ಲಾಲ್‌ಬಾಗ್ ತೋಟದ ಮೂಲಕ ವೈಭವೀಕರಿಸಿದರು. 1799ರಲ್ಲಿ ಶ್ರೀರಂಗಪಟ್ಟಣ ಪತನದ ನಂತರ, ಒಡೆಯರ್ ರಾಜವಂಶವು ಮೈಸೂರು ಸಂಸ್ಥಾನದ ಅಧಿಕಾರವನ್ನು ಮರಳಿ ಪಡೆಯಿತು ಮತ್ತು ಟ್ಯೂಡರ್ ಶೈಲಿಯ ಭವ್ಯ ಬೆಂಗಳೂರು ಅರಮನೆಯನ್ನು ನಿರ್ಮಿಸಿತು. 1809ರಲ್ಲಿ ಬ್ರಿಟಿಷರು ನಗರದ ಪೂರ್ವದಲ್ಲಿ ಕಂಟೋನ್ಮೆಂಟ್ ಸ್ಥಾಪಿಸಿದರು. ಇದರಿಂದ ಪಾರಂಪರಿಕ ಪೇಟೆ ಹಾಗೂ ಪಾಶ್ಚಾತ್ಯ ಶೈಲಿಯ ಕಂಟೋನ್ಮೆಂಟ್ ಎಂಬ ವಿಭಿನ್ನ ಸಂಸ್ಕೃತಿಗಳು ಜೊತೆಜೊತೆಯಾಗಿ ಬೆಳೆದವು."
          : "In the 18th century, Hyder Ali and his son Tipu Sultan enriched Bengaluru with their summer retreat and the royal botanical gardens of Lalbagh. Following Tipu's fall in 1799, the Wadiyar dynasty reclaimed sovereignty under British protection and constructed the opulent Tudor-revival Bangalore Palace. In 1809, the British established their vast military Cantonment, bringing European boulevards, colonial bungalows, and Gothic cathedrals that developed in fascinating tandem with the indigenous Pete bazaar culture."
      },
      {
        chapterNum: isKa ? "ಅಧ್ಯಾಯ 3" : "Chapter 3",
        era: isKa ? "1909 – ಇಂದಿನವರೆಗೆ • ವಿಜ್ಞಾನ & ಐಟಿ ಕ್ರಾಂತಿ" : "1909 – Present • Science Citadel & Silicon Valley",
        title: isKa ? "ಸರ್ ಎಂ.ವಿ., ಐಐಎಸ್‌ಸಿ ಹಾಗೂ ಭಾರತದ ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿ" : "Sir M.V., IISc & The Silicon Plateau Revolution",
        img: "assets/images/destinations/technology-innovation/iisc-bangalore.jpg",
        content: isKa
          ? "ಮೈಸೂರಿನ ದಿವಾನರಾಗಿದ್ದ ಭಾರತ ರತ್ನ ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ ಅವರ ಮುನ್ನೋಟ ಮತ್ತು ಜೆ.ಎನ್. ಟಾಟಾ ಅವರ ಸಹಯೋಗದಿಂದ 1909ರಲ್ಲಿ ಭಾರತೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (IISc) ಸ್ಥಾಪನೆಯಾಯಿತು. ಸ್ವಾತಂತ್ರ್ಯಾನಂತರ ಹೆಚ್.ಎ.ಎಲ್. (HAL), ಬಿ.ಇ.ಎಲ್. (BEL), ಇಸ್ರೋ (ISRO) ಮೊದಲಾದ ರಾಷ್ಟ್ರೀಯ ಹೆಗ್ಗುರುತು ಸಂಸ್ಥೆಗಳು ಬೆಂಗಳೂರನ್ನು ಭಾರತದ ವೈಮಾನಿಕ ಹಾಗೂ ವೈಜ್ಞಾನಿಕ ರಾಜಧಾನಿಯಾಗಿ ರೂಪಿಸಿದವು. 1980ರ ದಶಕದ ನಂತರ ಆರಂಭವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಕ್ರಾಂತಿ ನಗರವನ್ನು ಜಾಗತಿಕ ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿಯಾಗಿ ರೂಪಿಸಿತು."
          : "Under the forward-thinking vision of Bharat Ratna Sir M. Visvesvaraya and visionary industrialist Jamsetji Tata, the Indian Institute of Science (IISc) was chartered in 1909, cementing Bengaluru as India's intellectual capital. Following independence, public sector titans including HAL, ISRO, and BEL anchored aerospace and defense here. From the 1980s onwards, pioneering software companies and world-class tech campuses propelled Bengaluru onto the world stage as the Silicon Valley of India."
      },
      {
        chapterNum: isKa ? "ಅಧ್ಯಾಯ 4" : "Chapter 4",
        era: isKa ? "ಸಂಸ್ಕೃತಿ & ಜೀವನಶೈಲಿ • ಪರಂಪರೆ" : "Culture & Lifestyle • Living Soul",
        title: isKa ? "ಕನ್ನಡ ಸಾಹಿತ್ಯ, ಫಿಲ್ಟರ್ ಕಾಫಿ & ಹಬ್ಬಗಳ ಸಂಭ್ರಮ" : "Kannada Literary Soul, Tiffin Heritage & Filter Coffee",
        img: "assets/images/about/ab2.jpg",
        content: isKa
          ? "ಬೆಂಗಳೂರು ಕೇವಲ ತಂತ್ರಜ್ಞಾನವಲ್ಲ, ಅಪಾರ ಸಾಂಸ್ಕೃತಿಕ ಶ್ರೀಮಂತಿಕೆಯನ್ನು ಹೊಂದಿದೆ. ಕನ್ನಡ ಭಾಷೆಯ 8 ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ಪುರಸ್ಕೃತರ ಚಿಂತನೆಗಳು, ಬೆಂಗಳೂರು ಕರಗ ಶಕ್ತ್ಯುತ್ಸವ, ಕಡಲೆಕಾಯಿ ಪರಿಷೆಯ ಸಂಭ್ರಮ ನಗರದ ಆತ್ಮವಾಗಿದೆ. ಗಾಂಧಿ ಬಜಾರ್, ಮಲ್ಲೇಶ್ವರಂ ಮತ್ತು ವಿ.ವಿ. ಪುರಂನ ಬಿಸಿಬಿಸಿ ರವಾ ಇಡ್ಲಿ, ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ ಹಾಗೂ ಘಮಘಮಿಸುವ ಫಿಲ್ಟರ್ ಕಾಫಿ ಸಂಸ್ಕೃತಿ ಬೆಂಗಳೂರಿನ ದಿನಚರಿಯ ಜೀವನಾಡಿಯಾಗಿದೆ."
          : "Beyond algorithms, Bengaluru possesses an authentic, warm soul. It is celebrated for 8 Jnanpith literary laureates, the 800-year-old Bengaluru Karaga Shaktiotsava, and the lively Kadalekai Parishe (groundnut fair) in Basavanagudi. Century-old legendary tiffin institutions like MTR, Vidyarthi Bhavan, and CTR serve crispy golden benne masala dosas and frothy brass-davara filter coffee that form the timeless morning ritual of the city."
      }
    ];

    const chaptersHtml = chapters.map((chap, idx) => {
      const isReverse = idx % 2 !== 0;
      return `
        <article class="about-chapter-card ${isReverse ? "row-reverse" : ""}">
          <div class="about-chapter-img-wrap">
            <img src="${chap.img}" alt="${chap.title}" class="about-chapter-img" loading="lazy">
          </div>
          <div class="about-chapter-body">
            <div class="about-chapter-meta mb-2">
              <span class="badge bg-primary-soft text-primary fw-semibold">${chap.chapterNum}</span>
              <span class="text-muted fs-xs">${chap.era}</span>
            </div>
            <h3 class="about-chapter-title mb-3">${chap.title}</h3>
            <p class="about-chapter-text">${chap.content}</p>
          </div>
        </article>
      `;
    }).join("");

    mainEl.innerHTML = `
      <section class="about-page py-5">
        <div class="container">
          <!-- Hero Header -->
          <div class="text-center mb-5 max-w-prose mx-auto">
            <img src="assets/images/logo/logo.png" alt="Bangalore Explorer" class="mb-3 rounded-circle shadow-sm" width="84" height="84">
            <div class="mb-2">
              <span class="badge bg-primary-soft text-primary px-3 py-1 rounded-full fw-semibold d-inline-flex align-items-center gap-1">
                ${Icons.get("landmark", { size: 14 })} ${isKa ? "ಅಧಿಕೃತ ನಗರ ಮಾರ್ಗದರ್ಶಿ" : "Official Bengaluru City Guide"}
              </span>
            </div>
            <h1 class="display-title mb-2">${isKa ? "ಬೆಂಗಳೂರು ಮಹಾನಗರದ ಚರಿತ್ರೆ & ಪರಿಚಯ" : "About Bengaluru: The Garden City & Silicon Plateau"}</h1>
            <p class="section-lead text-muted">${isKa ? "500+ ವರ್ಷಗಳ ರಾಜ ಪರಂಪರೆ, ಹಸಿರು ಉದ್ಯಾನಗಳು, ವೈಜ್ಞಾನಿಕ ಸಾಧನೆಗಳು ಹಾಗೂ ಮುಕ್ತ ದ್ವಿಭಾಷಾ ನಗರ ಮಾರ್ಗದರ್ಶಿ." : "A living chronicle spanning 500+ years of royal petes, verdant tree-lined boulevards, scientific breakthroughs, and open digital culture."}</p>
          </div>

          <!-- Fast Facts Grid -->
          <div class="about-fast-facts-grid mb-5">
            ${fastFactsHtml}
          </div>

          <!-- Illustrated Historical Chapters -->
          <div class="about-chapters-container mb-5">
            <div class="text-center mb-4">
              <h2 class="h3 fw-bold text-heading">${isKa ? "ಬೆಂಗಳೂರಿನ ಐತಿಹಾಸಿಕ ಪಯಣ" : "The Chronological Journey"}</h2>
              <p class="text-muted fs-sm">${isKa ? "ಪ್ರಾಚೀನ ಬೆಂದಕಾಳೂರಿನಿಂದ ಇಂದಿನ ಜಾಗತಿಕ ತಂತ್ರಜ್ಞಾನ ರಾಜಧಾನಿಯವರೆಗೆ" : "From 16th-century mud fort to India's premier global tech metropolis"}</p>
            </div>
            ${chaptersHtml}
          </div>

          <!-- Open Platform Architecture -->
          <div class="card p-4 p-md-5 border-0 shadow-sm bg-surface rounded-xl">
            <div class="d-flex align-items-center gap-2 mb-3 text-primary">
              ${Icons.get("sparkles", { size: 22 })}
              <h3 class="h4 mb-0 fw-bold">${isKa ? "ಮುಕ್ತ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ನೈತಿಕ ವಿನ್ಯಾಸ" : "Open Architecture & Ethical Static Design"}</h3>
            </div>
            <p class="lead-sm text-body-secondary mb-3">
              ${
                isKa
                  ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ ಒಂದು ಮುಕ್ತ, ಸಂಪೂರ್ಣ ಕ್ಲೈಂಟ್ ಸೈಡ್ ದ್ವಿಭಾಷಾ ನಗರ ಮಾರ್ಗದರ್ಶಿಯಾಗಿದೆ. ಯಾವುದೇ ರನ್‌ಟೈಮ್ ಸರ್ವರ್, ಟ್ರ್ಯಾಕಿಂಗ್ ಅಥವಾ ಪಾವತಿಸಿದ ಮ್ಯಾಪ್ ಎಪಿಐ ಅಗತ್ಯವಿಲ್ಲದೆ ಗಿಟ್‌ಹಬ್ ಪೇಜಸ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಲೀಫ್‌ಲೆಟ್ ಓಪನ್‌ಸ್ಟ್ರೀಟ್‌ಮ್ಯಾಪ್, ಡಾರ್ಕ್ ಮ್ಯಾಟರ್ ಸಿಎಸ್‌ಎಸ್ ಫಿಲ್ಟರ್ ಮತ್ತು ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಡೈರೆಕ್ಷನ್ ರೂಟಿಂಗ್ ಮೂಲಕ 68+ ನೈಜ ತಾಣಗಳ ನಿಖರ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ."
                  : "Bangalore Explorer 2.0 is an open, high-performance, bilingual digital city platform engineered exclusively with browser-native HTML5, CSS3, and modern JavaScript modules. Deployed frictionlessly to GitHub Pages with zero mandatory Node servers, zero tracking, and zero paid API keys, it couples Leaflet OpenStreetMap tiles with dark matter styling and multi-stop Google Maps URL navigation to offer instant, reliable access to 68+ verified Bengaluru landmarks."
              }
            </p>
            <div class="d-flex flex-wrap gap-2 pt-2 border-top">
              <span class="badge bg-surface-variant text-muted border">${Icons.get("check", { size: 12 })} 100% Serverless Static</span>
              <span class="badge bg-surface-variant text-muted border">${Icons.get("check", { size: 12 })} 68+ Verified Landmarks</span>
              <span class="badge bg-surface-variant text-muted border">${Icons.get("check", { size: 12 })} Zero Paid API Keys</span>
              <span class="badge bg-surface-variant text-muted border">${Icons.get("check", { size: 12 })} Kannada & English Parity</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  return {
    init,
    t,
    getLang: () => currentLang,
    setCategoryFilter,
    setSortFilter,
    clearSearchQuery,
    resetAllFilters,
    setMapCategory,
    clearMapSearch,
    resetMapFilters,
    selectMapPlace,
    highlightMapPlace,
    toggleMapMobileMode,
    toggleFavorite,
    togglePlanner,
    togglePlannerDrawer,
    renderDestinationDetail
  };
})();

// Auto-boot on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();

  // Register service worker for offline support
  if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = App;
}
