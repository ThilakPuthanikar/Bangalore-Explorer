/**
 * Bangalore Explorer (ಬೆಂಗಳೂರು ಎಕ್ಸ್ಪ್ಲೋರರ್)
 * Master Application Coordinator & View Renderer
 * 100% Client-Side Vanilla JS | Zero paid APIs | High-Performance Static App
 */

const App = (function () {
  let currentLang = StorageService.getLanguage() || "en";
  let currentTheme = StorageService.getTheme() || "light";
  let activeSearchCategory = "all";
  let activeSearchQuery = "";
  let activeSortBy = "featured";
  let isPlannerDrawerOpen = false;

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

    // Subscribe to storage changes
    StorageService.subscribe((event) => {
      if (event === "favorites_changed" || event === "planner_changed") {
        updateBadges();
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
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
      themeBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
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
    const brandSub = document.querySelector(".brand-sub");
    if (brandSub) brandSub.textContent = currentLang === "ka" ? "ಬೆಂಗಳೂರು ಗೈಡ್" : "Bengaluru City Guide";
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

  /* ==========================================================================
     ROUTE DEFINITIONS
     ========================================================================== */
  function setupRoutes() {
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

    // Legacy section backwards compatibility
    const legacyMap = {
      temples: "temples-spirituality",
      it: "technology-innovation",
      shopping: "shopping-markets",
      sports: "sports-recreation",
      entertainment: "sports-recreation",
      banks: "essential-services",
      hotels: "stay-accommodation",
      hospitals: "essential-services"
    };
    for (const legacy in legacyMap) {
      Router.register(`/${legacy}`, () => renderExploreView(legacyMap[legacy]));
    }
  }

  /* ==========================================================================
     VIEW RENDERERS
     ========================================================================== */

  /**
   * Home View
   */
  function renderHomeView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const featuredPlaces = PLACES.filter((p) => p.featured).slice(0, 6);

    const categoriesCardsHtml = CATEGORIES.map((cat) => {
      const label = currentLang === "ka" ? cat.label.ka : cat.label.en;
      const tagline = currentLang === "ka" ? cat.tagline.ka : cat.tagline.en;
      const count = PLACES.filter((p) => p.category === cat.id).length;
      return `
        <a href="#/category/${cat.id}" class="category-grid-card text-decoration-none">
          <div class="category-icon-wrapper" style="background-color: ${cat.color}15; color: ${cat.color};">
            <span class="category-icon">${cat.icon}</span>
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
            <span class="badge bg-secondary text-white mb-2">📜 ${story.era}</span>
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
            <span class="hero-pill-badge mb-3">✨ ${currentLang === "ka" ? "ಅಧಿಕೃತ ದ್ವಿಭಾಷಾ ನಗರ ಮಾರ್ಗದರ್ಶಿ" : "Official Bilingual City Discovery Platform"}</span>
            <h1 class="hero-title display-heading mb-3">${t("siteTitle")}</h1>
            <p class="hero-subtitle lead mb-4">${t("tagline")}</p>

            <!-- Hero Search Bar -->
            <div class="hero-search-wrapper mb-4">
              <div class="hero-search-input-group">
                <span class="search-input-icon">🔍</span>
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
              <a href="#/explore" class="btn btn-outline-light btn-sm">🏛️ ${currentLang === "ka" ? "ಎಲ್ಲಾ ತಾಣಗಳು" : "Explore All Places"}</a>
              <a href="#/map" class="btn btn-outline-light btn-sm">🗺️ ${t("navMap")}</a>
              <a href="#/itineraries" class="btn btn-outline-light btn-sm">🚶 ${t("navItineraries")}</a>
              <button class="btn btn-outline-light btn-sm" id="heroNearMeBtn">📍 ${t("nearMe")}</button>
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

    // Hook up search input
    const heroInput = document.getElementById("heroSearchInput");
    const heroBtn = document.getElementById("heroSearchBtn");
    const nearMeBtn = document.getElementById("heroNearMeBtn");

    if (heroBtn && heroInput) {
      const doSearch = () => {
        const val = heroInput.value.trim();
        if (val) {
          activeSearchQuery = val;
          Router.navigate("/explore");
        }
      };
      heroBtn.addEventListener("click", doSearch);
      heroInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") doSearch();
      });
    }

    if (nearMeBtn) {
      nearMeBtn.addEventListener("click", async () => {
        nearMeBtn.textContent = t("locating");
        try {
          await GeoService.getUserLocation();
          activeSortBy = "distance";
          Router.navigate("/explore");
        } catch (err) {
          alert(err.message || "Location access was denied.");
          nearMeBtn.textContent = `📍 ${t("nearMe")}`;
        }
      });
    }
  }

  /**
   * Explore View with Search, Category Pills, and Filters
   */
  function renderExploreView(presetCategory = "all") {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    if (presetCategory) {
      activeSearchCategory = presetCategory;
    }

    const categoriesPills = [
      { id: "all", label: t("allCategories"), icon: "✨" },
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
          <span>${c.icon}</span> ${c.label}
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
                  <span class="input-group-text bg-transparent border-end-0">🔍</span>
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
                      ? `<button class="btn btn-outline-secondary" onclick="App.clearSearchQuery()">✕</button>`
                      : ""
                  }
                </div>
              </div>
              <div class="col-md-3">
                <select id="sortSelect" class="form-select" onchange="App.setSortFilter(this.value)">
                  <option value="featured" ${activeSortBy === "featured" ? "selected" : ""}>🌟 ${t("sortFeatured")}</option>
                  <option value="rating" ${activeSortBy === "rating" ? "selected" : ""}>⭐ ${t("sortRating")}</option>
                  <option value="name" ${activeSortBy === "name" ? "selected" : ""}>🔤 ${t("sortName")}</option>
                  <option value="distance" ${activeSortBy === "distance" ? "selected" : ""}>📍 ${t("sortDistance")}</option>
                </select>
              </div>
              <div class="col-md-2">
                <button class="btn btn-outline-primary w-100" id="exploreNearMeBtn">
                  📍 ${t("nearMe")}
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
                ? `<button class="btn btn-link btn-sm text-decoration-none text-danger p-0" onclick="App.resetAllFilters()">${t("clearFilters")}</button>`
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
          nearMeBtn.textContent = `📍 ${t("nearMe")}`;
        } catch (err) {
          alert(err.message || "Could not retrieve location.");
          nearMeBtn.textContent = `📍 ${t("nearMe")}`;
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
          <span class="fs-1 d-block mb-3">🔍</span>
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
   * Render individual Destination Card
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
      distanceStr = `<span class="card-distance-badge">🚗 ${GeoService.formatDistance(dist, currentLang)}</span>`;
    }

    return `
      <article class="landmark-magazine-card" data-id="${place.id}">
        <div class="card-thumb-wrap">
          <img
            src="${place.image}"
            alt="${title}"
            class="card-thumb-img"
            loading="lazy"
            onerror="this.src='assets/images/logo/logo.png'"
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
            ${isFav ? "❤️" : "🤍"}
          </button>
        </div>

        <div class="card-info-wrap">
          <div class="card-meta-row d-flex justify-content-between align-items-center mb-1">
            <span class="card-neighbourhood text-muted fs-xs">📍 ${nb || "Bengaluru"}</span>
            ${place.rating ? `<span class="card-rating-badge fs-xs">⭐ ${place.rating}</span>` : ""}
          </div>
          <h3 class="card-title h5 mb-1">
            <a href="#/destination/${place.id}" class="text-decoration-none text-heading">${title}</a>
          </h3>
          ${subTitle ? `<p class="card-subtitle text-muted fs-xs mb-2">${subTitle}</p>` : ""}
          <p class="card-summary text-body-secondary fs-sm mb-3">${desc}</p>

          <div class="card-actions-row d-flex gap-2">
            <button
              class="btn btn-sm btn-outline-primary flex-grow-1"
              onclick="ModalController.openModalById('${place.id}', '${currentLang}')"
            >
              ${t("viewDetails")}
            </button>
            <button
              class="btn btn-sm btn-primary"
              onclick="GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')"
              title="${t("getDirections")}"
            >
              🚗
            </button>
            <button
              class="btn btn-sm ${inPlan ? "btn-secondary" : "btn-outline-secondary"}"
              onclick="App.togglePlanner('${place.id}')"
              title="${inPlan ? t("inTrip") : t("addToTrip")}"
            >
              ${inPlan ? "✓" : "➕"}
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function toggleFavorite(placeId) {
    StorageService.toggleFavorite(placeId);
    updateBadges();
    // Re-render card
    const card = document.querySelector(`.landmark-magazine-card[data-id="${placeId}"]`);
    if (card) {
      const place = PLACES.find((p) => p.id === placeId);
      if (place) card.outerHTML = renderLandmarkCard(place);
    }
  }

  function togglePlanner(placeId) {
    if (StorageService.isInPlanner(placeId)) {
      StorageService.removeFromPlanner(placeId);
    } else {
      StorageService.addToPlanner(placeId);
    }
    updateBadges();
    // Re-render card
    const card = document.querySelector(`.landmark-magazine-card[data-id="${placeId}"]`);
    if (card) {
      const place = PLACES.find((p) => p.id === placeId);
      if (place) card.outerHTML = renderLandmarkCard(place);
    }
  }

  /**
   * Categories View
   */
  function renderCategoriesView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const cardsHtml = CATEGORIES.map((cat) => {
      const label = currentLang === "ka" ? cat.label.ka : cat.label.en;
      const tagline = currentLang === "ka" ? cat.tagline.ka : cat.tagline.en;
      const placesInCat = PLACES.filter((p) => p.category === cat.id);

      return `
        <div class="category-showcase-card card mb-4 border-0 shadow-sm overflow-hidden">
          <div class="card-header d-flex justify-content-between align-items-center p-3" style="background-color: ${cat.color}15; border-bottom: 2px solid ${cat.color}40;">
            <div class="d-flex align-items-center gap-2">
              <span class="fs-3">${cat.icon}</span>
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
                      <img src="${p.image}" alt="${title}" class="img-fluid rounded mb-1" style="height: 120px; width: 100%; object-fit: cover;">
                      <h6 class="fs-sm mb-0 text-truncate font-weight-bold">${title}</h6>
                      <small class="text-muted fs-xs">📍 ${currentLang === "ka" ? p.neighbourhoodKn : p.neighbourhood}</small>
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
   * Interactive Map View
   */
  function renderMapView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const categoriesPills = [
      { id: "all", label: t("allCategories"), icon: "✨" },
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
          onclick="App.setMapCategory('${c.id}')"
        >
          <span>${c.icon}</span> ${c.label}
        </button>
      `
      )
      .join("");

    mainEl.innerHTML = `
      <section class="map-page-section">
        <div class="map-controls-bar bg-surface border-bottom p-3">
          <div class="container d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <h2 class="h5 m-0">🗺️ ${t("navMap")}</h2>
              <small class="text-muted">${currentLang === "ka" ? "68+ ಪರಿಶೀಲಿತ ತಾಣಗಳ ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ" : "68+ verified landmarks with instant Google Maps routing"}</small>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-primary" onclick="MapController.locateUser()">
                📍 ${t("nearMe")}
              </button>
            </div>
          </div>
          <div class="container mt-2">
            <div class="category-pills-bar d-flex gap-2 flex-wrap">
              ${pillsHtml}
            </div>
          </div>
        </div>
        <div id="map-container" class="interactive-map-frame" style="height: calc(100vh - 200px); min-height: 500px; width: 100%;"></div>
      </section>
    `;

    // Initialize Leaflet Map
    setTimeout(() => {
      MapController.init("map-container", currentLang);
    }, 100);
  }

  function setMapCategory(catId) {
    activeSearchCategory = catId;
    document.querySelectorAll(".map-controls-bar .filter-pill").forEach((pill) => {
      pill.classList.toggle("active", pill.textContent.includes(catId));
    });
    MapController.renderMarkers(catId);
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
   * Stories View
   */
  function renderStoriesView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const cardsHtml = STORIES.map((story) => {
      const title = currentLang === "ka" ? story.title.ka : story.title.en;
      const sub = currentLang === "ka" ? story.subtitle.ka : story.subtitle.en;
      return `
        <article class="story-card card mb-4 shadow-sm border-0 overflow-hidden">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-secondary text-white">📜 ${story.era}</span>
              <span class="text-muted fs-xs">⏱️ ${story.readingTime} read</span>
            </div>
            <h2 class="story-title h3 mb-2">
              <a href="#/story/${story.id}" class="text-decoration-none text-heading">${title}</a>
            </h2>
            <p class="story-subtitle lead-sm text-muted mb-4">${sub}</p>
            <a href="#/story/${story.id}" class="btn btn-primary">
              ${t("readStory")} →
            </a>
          </div>
        </article>
      `;
    }).join("");

    mainEl.innerHTML = `
      <section class="stories-page py-4">
        <div class="container">
          <div class="section-intro text-center mb-5">
            <h1 class="display-title mb-2">${t("storiesTitle")}</h1>
            <p class="section-lead text-muted">${t("storiesSubtitle")}</p>
          </div>
          <div class="stories-container max-w-prose mx-auto">
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
          <div class="card p-2 text-center h-100" onclick="Router.navigate('/destination/${p.id}')" style="cursor: pointer;">
            <img src="${p.image}" class="rounded mb-2" style="height: 100px; object-fit: cover;">
            <h6 class="fs-xs font-weight-bold mb-0">${currentLang === "ka" ? p.kannadaName : p.name}</h6>
          </div>
        </div>
      `)
      .join("");

    mainEl.innerHTML = `
      <article class="story-detail-page py-5">
        <div class="container max-w-prose mx-auto">
          <a href="#/stories" class="btn btn-sm btn-link text-decoration-none mb-3">← ${currentLang === "ka" ? "ಎಲ್ಲಾ ಕಥೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ" : "Back to City Stories"}</a>
          <header class="story-detail-header mb-4 border-bottom pb-4">
            <span class="badge bg-secondary text-white mb-2">📜 ${story.era} • ⏱️ ${story.readingTime}</span>
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
              <h4 class="mb-3">📍 ${currentLang === "ka" ? "ಸಂಬಂಧಿತ ಸ್ಥಳಗಳು" : "Related Landmark Destinations"}</h4>
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

    // Add to recently viewed
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

    // Related places in same category
    const related = PLACES.filter((p) => p.category === place.category && p.id !== place.id).slice(0, 3);
    const relatedHtml = related.map((p) => renderLandmarkCard(p)).join("");

    mainEl.innerHTML = `
      <section class="destination-detail-page py-4">
        <div class="container">
          <a href="#/explore" class="btn btn-sm btn-link text-decoration-none mb-3">${t("backToExplore")}</a>

          <div class="card overflow-hidden border-0 shadow-sm mb-5">
            <div class="destination-hero-frame position-relative" style="max-height: 480px; overflow: hidden;">
              <img src="${place.image}" alt="${title}" class="w-100" style="object-fit: cover; max-height: 480px;" onerror="this.src='assets/images/logo/logo.png'">
              <div class="position-absolute bottom-0 start-0 w-100 p-4 text-white" style="background: linear-gradient(transparent, rgba(0,0,0,0.85));">
                <span class="badge bg-primary mb-2">${(place.category || "").replace("-", " ").toUpperCase()}</span>
                <h1 class="display-title m-0 text-white">${title}</h1>
                ${subTitle ? `<p class="fs-md opacity-75 m-0">${subTitle}</p>` : ""}
                <p class="fs-sm opacity-90 mt-1 mb-0">📍 ${nb || "Bengaluru"}</p>
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
                      <h4 class="h6 text-primary text-uppercase mb-2">📜 ${currentLang === "ka" ? "ಐತಿಹಾಸಿಕ ಹಿನ್ನೆಲೆ" : "Heritage & History"}</h4>
                      <p class="m-0 fs-sm">${historyText}</p>
                    </div>
                  `
                      : ""
                  }

                  <div class="d-flex gap-2 flex-wrap mt-4">
                    <button class="btn btn-primary" onclick="GeoService.openDirections(${place.coordinates.lat}, ${place.coordinates.lng}, '${encodeURIComponent(place.name)}')">
                      🚗 ${t("getDirections")}
                    </button>
                    <button class="btn ${inPlan ? "btn-secondary" : "btn-outline-primary"}" onclick="App.togglePlanner('${place.id}'); App.renderDestinationDetail('${place.id}');">
                      ${inPlan ? "✓ " + t("inTrip") : "➕ " + t("addToTrip")}
                    </button>
                    <button class="btn ${isFav ? "btn-danger" : "btn-outline-secondary"}" onclick="App.toggleFavorite('${place.id}'); App.renderDestinationDetail('${place.id}');">
                      ${isFav ? "❤️ " + t("savedFavorites") : "🤍 Save"}
                    </button>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="visitor-guidelines-card card bg-surface-variant p-3 border">
                    <h4 class="h5 border-bottom pb-2 mb-3">📋 ${currentLang === "ka" ? "ಸಂದರ್ಶಕರ ಮಾರ್ಗದರ್ಶಿ" : "Visitor Guidelines"}</h4>
                    <ul class="list-unstyled mb-0">
                      <li class="mb-3">
                        <strong class="d-block fs-xs text-uppercase text-muted">🕒 ${t("timingLabel")}</strong>
                        <span class="fs-sm">${timing}</span>
                      </li>
                      <li class="mb-3">
                        <strong class="d-block fs-xs text-uppercase text-muted">🎟️ ${t("feeLabel")}</strong>
                        <span class="fs-sm">${fee}</span>
                      </li>
                      <li class="mb-3">
                        <strong class="d-block fs-xs text-uppercase text-muted">🚇 ${t("metroNear")}</strong>
                        <span class="fs-sm">${metro}</span>
                      </li>
                      <li class="mb-0">
                        <strong class="d-block fs-xs text-uppercase text-muted">⏱️ ${t("durationLabel")}</strong>
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
            <h1 class="display-title mb-2">❤️ ${t("savedFavorites")} (${favPlaces.length})</h1>
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
   * About View
   */
  function renderAboutView() {
    const mainEl = document.getElementById("main-app-content");
    if (!mainEl) return;

    const aboutData = ABOUT_CONTENT || {};
    const title = currentLang === "ka" ? aboutData.title?.ka || "ಬೆಂಗಳೂರು ಬಗ್ಗೆ" : aboutData.title?.en || "About Bangalore";
    const text = currentLang === "ka" ? aboutData.content?.ka || "" : aboutData.content?.en || "";

    mainEl.innerHTML = `
      <section class="about-page py-5">
        <div class="container max-w-prose mx-auto">
          <div class="text-center mb-5">
            <img src="assets/images/logo/logo.png" alt="Bangalore Explorer" class="mb-3" width="90" height="90">
            <h1 class="display-title mb-2">${title}</h1>
            <p class="lead text-muted">${t("tagline")}</p>
          </div>

          <div class="card p-4 mb-4 border-0 shadow-sm bg-surface">
            <h3 class="h4 mb-3 text-primary">🌿 ${currentLang === "ka" ? "ನಗರದ ಪರಿಚಯ" : "The City Overview"}</h3>
            <p class="lead-sm text-body-secondary mb-3">${text}</p>
          </div>

          <div class="card p-4 mb-4 border-0 shadow-sm bg-surface">
            <h3 class="h4 mb-3 text-primary">🎯 ${currentLang === "ka" ? "ಯೋಜನೆಯ ಧ್ಯೇಯ" : "Mission & Architecture"}</h3>
            <p class="fs-sm text-body-secondary">
              ${
                currentLang === "ka"
                  ? "ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್ ಒಂದು ಮುಕ್ತ, ದ್ವಿಭಾಷಾ ನಗರ ಮಾರ್ಗದರ್ಶಿಯಾಗಿದೆ. ಇದು ಯಾವುದೇ ಪಾವತಿಸಿದ ಎಪಿಐಗಳು ಅಥವಾ ಸರ್ವರ್ ಅಗತ್ಯವಿಲ್ಲದೆ, ಸಂಪೂರ್ಣ ಕ್ಲೈಂಟ್ ಸೈಡ್ ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಓಪನ್‌ಸ್ಟ್ರೀಟ್‌ಮ್ಯಾಪ್, ಲೀಫ್‌ಲೆಟ್ ಹಾಗೂ ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಡೈರೆಕ್ಷನ್ ಲಿಂಕ್‌ಗಳ ಮೂಲಕ ಬಳಕೆದಾರರಿಗೆ ನಿಖರ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ."
                  : "Bangalore Explorer is an open, high-performance, bilingual digital city guide. Built with zero mandatory backend, zero tracking, and zero paid API keys, it couples Leaflet OpenStreetMap with Google Maps URL routing to deliver a premium discovery experience across 68+ verified landmarks."
              }
            </p>
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}
