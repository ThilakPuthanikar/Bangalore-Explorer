/**
 * Bangalore Explorer - Application Controller
 * Handles navigation, bilingual rendering, theming, and responsive interactions.
 */

(function () {
  // Application State
  let lang = localStorage.getItem("bangalore_explorer_lang") || "en";
  let currentTheme = localStorage.getItem("bangalore_explorer_theme") || "dark";
  let activeSectionId = getHashSection() || "home";

  // DOM Elements
  const body = document.body;
  const navMenu = document.getElementById("navMenu");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const sectionsEl = document.getElementById("sections");
  const langBtn = document.getElementById("langBtn");
  const langLabel = document.getElementById("langLabel");
  const langDropdown = document.getElementById("langDropdown");
  const langList = document.getElementById("langList");
  const themeSwitch = document.getElementById("themeSwitch");
  const themeEmoji = document.getElementById("themeEmoji");

  function getHashSection() {
    const hash = window.location.hash.replace("#", "").trim();
    if (hash && SECTIONS.some((s) => s.id === hash)) {
      return hash;
    }
    return null;
  }

  // Navigation Builder
  function buildNav() {
    navMenu.innerHTML = "";
    SECTIONS.forEach((s) => {
      const a = document.createElement("a");
      a.href = "#" + s.id;
      a.textContent = s.label[lang];
      a.dataset.id = s.id;
      if (s.id === activeSectionId) {
        a.classList.add("active");
      }
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(s.id);
        closeMobileMenu();
      });
      navMenu.appendChild(a);
    });
  }

  // Page View Switcher
  function showPage(id) {
    if (!SECTIONS.some((s) => s.id === id)) {
      id = "home";
    }
    activeSectionId = id;

    // Toggle .active on section containers
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    const activePage = document.getElementById("page-" + id);
    if (activePage) {
      activePage.classList.add("active");
    }

    // Update active class on nav links
    navMenu.querySelectorAll("a").forEach((a) => {
      if (a.dataset.id === id) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });

    // Sync URL hash without triggering full reload
    if (window.location.hash !== "#" + id) {
      history.replaceState(null, "", "#" + id);
    }

    // Scroll to top of content smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Section Renderers
  function renderHomeSection() {
    const page = document.createElement("section");
    page.className = "page";
    page.id = "page-home";

    const title = HOME_CONTENT.heroTitle[lang];
    const subtitle = HOME_CONTENT.heroSubtitle[lang];

    let html = `
      <div class="home-hero">
        <div class="home-hero-content">
          <span class="badge">${lang === "en" ? "Welcome to Bengaluru" : "ಬೆಂಗಳೂರಿಗೆ ಸುಸ್ವಾಗತ"}</span>
          <h2 class="home-title">${title}</h2>
          <p class="home-subtitle">${subtitle}</p>
        </div>
      </div>

      <div class="home-highlights">
        <h3 class="section-title">${lang === "en" ? "Explore by Interest" : "ಆಸಕ್ತಿಯ ಅನುಸಾರ ಅನ್ವೇಷಿಸಿ"}</h3>
        <div class="highlights-grid">
    `;

    HOME_CONTENT.highlights.forEach((h) => {
      html += `
        <div class="highlight-card" data-section="${h.sectionId}" tabindex="0" role="button">
          <div class="highlight-media">
            <img src="${h.img}" alt="${h.title[lang]}" loading="lazy">
          </div>
          <div class="highlight-body">
            <h4>${h.title[lang]}</h4>
            <p>${h.desc[lang]}</p>
            <span class="highlight-link">${lang === "en" ? "Explore →" : "ವೀಕ್ಷಿಸಿ →"}</span>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>

      <div class="home-quick-nav">
        <h3 class="section-title">${lang === "en" ? "Civic Sectors Directory" : "ನಗರ ವಿಭಾಗಗಳ ಮಾಹಿತಿ"}</h3>
        <div class="quick-nav-pills">
    `;

    SECTIONS.filter((s) => s.id !== "home").forEach((s) => {
      html += `
        <button class="pill-btn" data-id="${s.id}">
          ${s.label[lang]}
        </button>
      `;
    });

    html += `
        </div>
      </div>
    `;

    page.innerHTML = html;

    // Attach listeners to highlight cards
    page.querySelectorAll(".highlight-card").forEach((card) => {
      card.addEventListener("click", () => {
        showPage(card.dataset.section);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showPage(card.dataset.section);
        }
      });
    });

    // Attach listeners to quick nav pills
    page.querySelectorAll(".pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        showPage(btn.dataset.id);
      });
    });

    return page;
  }

  function renderAboutSection() {
    const page = document.createElement("section");
    page.className = "page";
    page.id = "page-about";

    const title = ABOUT_CONTENT.title[lang];
    const text = ABOUT_CONTENT.text[lang];

    // Split text into paragraphs based on sentence clusters
    const paragraphs = text
      .split(/(?<=[.!?])\s+(?=[A-Z\u0C80-\u0CFF])/)
      .reduce((acc, sentence, idx) => {
        const pIdx = Math.floor(idx / 3);
        acc[pIdx] = (acc[pIdx] || "") + " " + sentence;
        return acc;
      }, []);

    let html = `
      <div class="about-container">
        <div class="about-header">
          <h2 class="section-title">${title}</h2>
        </div>
        
        <div class="about-gallery">
    `;

    ABOUT_CONTENT.images.forEach((img) => {
      html += `
        <figure class="about-image-card">
          <img src="${img.src}" alt="${img.alt[lang]}" loading="lazy">
          <figcaption>${img.alt[lang]}</figcaption>
        </figure>
      `;
    });

    html += `
        </div>

        <div class="about-text-content">
    `;

    paragraphs.forEach((p) => {
      if (p.trim()) {
        html += `<p>${p.trim()}</p>`;
      }
    });

    html += `
        </div>
      </div>
    `;

    page.innerHTML = html;
    return page;
  }

  function renderMapSection(s) {
    const page = document.createElement("section");
    page.className = "page";
    page.id = "page-map";
    page.innerHTML = `
      <div class="map-container">
        <h3 class="section-title">${s.label[lang]}</h3>
        <p class="map-subtitle">${lang === "en" ? "Explore key landmarks, transit centers, and cultural hubs on the interactive map." : "ಪರಸ್ಪರ ಸಂವಹನಾತ್ಮಕ ನಕ್ಷೆಯಲ್ಲಿ ಪ್ರಮುಖ ಸ್ಥಳಗಳು, ನಿಲ್ದಾಣಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರಗಳನ್ನು ವೀಕ್ಷಿಸಿ."}</p>
        <div class="map-wrapper">
          <iframe 
            class="mapframe" 
            src="https://www.google.com/maps/d/u/0/embed?mid=1pXvLrRbetLahyrEdzNnfaCJoM25uvXg&ehbc=2E312F" 
            title="Bangalore City Interactive Map" 
            loading="lazy" 
            sandbox="allow-scripts allow-same-origin allow-popups">
          </iframe>
        </div>
      </div>
    `;
    return page;
  }

  function renderCategorySection(s) {
    const items = DATA[s.id] || [];
    const page = document.createElement("section");
    page.className = "page";
    page.id = "page-" + s.id;

    let html = `
      <div class="category-header">
        <h3 class="section-title">${s.label[lang]}</h3>
        <span class="count-badge">${items.length} ${lang === "en" ? "Places" : "ಸ್ಥಳಗಳು"}</span>
      </div>
      <div class="grid">
    `;

    items.forEach((it, idx) => {
      html += `
        <article class="card" data-section="${s.id}" data-idx="${idx}" tabindex="0" role="button" aria-label="${it[lang].title}">
          <div class="media">
            <img src="${it.img}" alt="${it[lang].title}" loading="lazy">
          </div>
          <div class="body">
            <h4 class="title-small">${it[lang].title}</h4>
            <p class="desc">${it[lang].short}</p>
          </div>
        </article>
      `;
    });

    html += `</div>`;
    page.innerHTML = html;

    // Attach card event listeners
    page.querySelectorAll(".card").forEach((card) => {
      const onCardActivate = () => {
        const sec = card.dataset.section;
        const idx = +card.dataset.idx;
        const item = (DATA[sec] || [])[idx];
        if (item) {
          ModalController.open(item, lang);
        }
      };

      card.addEventListener("click", onCardActivate);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCardActivate();
        }
      });
    });

    return page;
  }

  function buildSections() {
    sectionsEl.innerHTML = "";

    SECTIONS.forEach((s) => {
      let pageEl;
      if (s.id === "home") {
        pageEl = renderHomeSection();
      } else if (s.id === "about") {
        pageEl = renderAboutSection();
      } else if (s.id === "map") {
        pageEl = renderMapSection(s);
      } else {
        pageEl = renderCategorySection(s);
      }
      sectionsEl.appendChild(pageEl);
    });
  }

  // Theme Management
  function applyTheme() {
    if (currentTheme === "dark") {
      body.classList.remove("light");
      body.classList.add("theme-on");
      themeEmoji.textContent = "🌙";
      themeSwitch.setAttribute("aria-checked", "true");
    } else {
      body.classList.remove("theme-on");
      body.classList.add("light");
      themeEmoji.textContent = "☀️";
      themeSwitch.setAttribute("aria-checked", "false");
    }
    localStorage.setItem("bangalore_explorer_theme", currentTheme);
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme();
  }

  // Mobile Menu Controls
  function toggleMobileMenu() {
    const isOpen = navMenu.classList.toggle("mobile-open");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  function closeMobileMenu() {
    navMenu.classList.remove("mobile-open");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Theme Switch
    themeSwitch.addEventListener("click", toggleTheme);
    themeSwitch.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTheme();
      }
    });

    // Mobile Menu Button
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMobileMenu();
      });
    }

    // Language Dropdown
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });

    langList.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        lang = b.dataset.lang;
        localStorage.setItem("bangalore_explorer_lang", lang);
        langLabel.textContent = lang === "en" ? "English" : "ಕನ್ನಡ";
        langDropdown.classList.remove("open");

        // Rebuild while preserving currently active section
        const preservedSection = activeSectionId;
        buildNav();
        buildSections();
        showPage(preservedSection);
      });
    });

    // Document click to close open menus
    document.addEventListener("click", (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove("open");
      }
      if (mobileMenuBtn && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Browser back/forward navigation support
    window.addEventListener("hashchange", () => {
      const hashSection = getHashSection();
      if (hashSection && hashSection !== activeSectionId) {
        showPage(hashSection);
      }
    });
  }

  // App Initialization
  function init() {
    ModalController.init();
    langLabel.textContent = lang === "en" ? "English" : "ಕನ್ನಡ";
    applyTheme();
    buildNav();
    buildSections();
    showPage(activeSectionId);
    setupEventListeners();
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

