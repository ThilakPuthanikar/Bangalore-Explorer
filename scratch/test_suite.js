/**
 * Bangalore Explorer 2.1 - Static Architecture & Map Restoration Test Suite
 */

const fs = require("fs");
const path = require("path");

console.log("=== RUNNING BANGALORE EXPLORER STATIC ARCHITECTURE TEST SUITE ===\n");

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}`);
    failed++;
  }
}

// 1. Verify server.js is completely removed
const serverExists = fs.existsSync(path.join(__dirname, "../server.js"));
assert(!serverExists, "server.js does NOT exist (Zero Node runtime requirement)");

// 2. Verify Icons module
const Icons = require("../assets/js/icons.js");
assert(typeof Icons === "object", "Icons module loaded");
assert(typeof Icons.get === "function", "Icons.get function exists");

// 3. Verify Data categories & places
const { CATEGORIES, PLACES } = require("../assets/js/data.js");
assert(Array.isArray(CATEGORIES) && CATEGORIES.length === 9, "9 curated categories exist in data.js");
assert(Array.isArray(PLACES) && PLACES.length >= 68, `PLACES array contains ${PLACES.length} places (>= 68 verified)`);

let validPlaces = true;
PLACES.forEach(p => {
  if (!p.id || !p.name || !p.kannadaName || !p.coordinates || !p.coordinates.lat || !p.coordinates.lng) {
    validPlaces = false;
  }
});
assert(validPlaces, "All places have valid IDs, bilingual names, and GPS coordinates");

// 4. Verify index.html requirements
const indexHtml = fs.readFileSync(path.join(__dirname, "../index.html"), "utf-8");

assert(indexHtml.includes('src="assets/js/icons.js"'), "index.html loads assets/js/icons.js");
assert(indexHtml.includes('class="app-footer-minimal'), "index.html contains sleek minimal footer");
assert(!indexHtml.includes('class="footer-links"'), "index.html has completely removed all footer quick links");
assert(!indexHtml.includes('href="#/explore" class="text-muted text-decoration-none">Destinations</a>'), "No quick links in footer text");

// Verify all asset paths in index.html are relative (no root /assets or /favicon)
const nonRelativeAssets = (indexHtml.match(/(href|src)="\/(?!\/)/g) || []);
assert(nonRelativeAssets.length === 0, "All asset paths in index.html are relative (GitHub Pages subpath safe)");

// 5. Verify Map Controller
const mapContent = fs.readFileSync(path.join(__dirname, "../assets/js/map.js"), "utf-8");
assert(mapContent.includes("1pXvLrRbetLahyrEdzNnfaCJoM25uvXg"), "map.js contains recovered Google My Maps embed ID");
assert(mapContent.includes("renderGoogleMyMaps"), "map.js exports renderGoogleMyMaps helper");

// 6. Verify App Coordinator Map Switcher
const appContent = fs.readFileSync(path.join(__dirname, "../assets/js/app.js"), "utf-8");
assert(appContent.includes("setMapEngine"), "app.js supports dual-mode map engine switcher");
assert(appContent.includes("activeMapEngine"), "app.js manages activeMapEngine state");

// 7. Verify Zero API Keys in entire repository
const allCodeFiles = [
  "index.html",
  "assets/js/data.js",
  "assets/js/geo.js",
  "assets/js/storage.js",
  "assets/js/search.js",
  "assets/js/map.js",
  "assets/js/planner.js",
  "assets/js/router.js",
  "assets/js/modal.js",
  "assets/js/app.js"
];

let hasApiKey = false;
allCodeFiles.forEach(f => {
  const code = fs.readFileSync(path.join(__dirname, "..", f), "utf-8");
  if (/maps\.googleapis\.com\/maps\/api\/js\?key=/i.test(code) || /google_maps_api_key/i.test(code)) {
    hasApiKey = true;
    console.error(`API Key reference found in ${f}`);
  }
});
assert(!hasApiKey, "Zero Google Maps API keys or credentials across all JavaScript files");

// 8. Verify CSS
const cssContent = fs.readFileSync(path.join(__dirname, "../assets/css/components.css"), "utf-8");
assert(cssContent.includes(".mymaps-frame-card"), "components.css contains .mymaps-frame-card for responsive iframe");
assert(cssContent.includes(".map-view-switcher"), "components.css contains .map-view-switcher for mode toggling");
assert(cssContent.includes(".app-footer-minimal"), "components.css contains .app-footer-minimal");

const stylesContent = fs.readFileSync(path.join(__dirname, "../assets/css/styles.css"), "utf-8");
assert(stylesContent.includes("scrollbar-width: none !important"), "styles.css suppresses scrollbars globally");

console.log(`\n========================================`);
console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}
