# Bangalore Explorer (ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್)

[![Bengaluru](https://img.shields.io/badge/City-Bengaluru-047857?style=for-the-badge)](https://en.wikipedia.org/wiki/Bangalore)
[![Bilingual](https://img.shields.io/badge/Language-English%20%7C%20%E0%B2%95%E0%B2%A8%E0%B3%8D%E0%B2%A8%E0%B2%A1-b45309?style=for-the-badge)](#bilingual-experience)
[![Leaflet](https://img.shields.io/badge/Mapping-Leaflet%20%2B%20OSM-2563eb?style=for-the-badge)](#interactive-map)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)

A modern, high-performance, client-side bilingual city discovery platform celebrating the royal heritage, botanical gardens, historic silk bazaars, street food culture, and technological innovation of **Namma Bengaluru**.

Designed with an editorial travel-magazine aesthetic, Bangalore Explorer connects tourists, newcomers, and proud residents to **68+ verified destinations** across **9 discovery sectors** with zero mandatory backend, zero tracking, and zero paid API keys.

---

## Key Highlights

- **68+ Verified Destinations:** Spanning palaces, forts, botanical lungs, century-old tiffin houses, high streets, silk petes, tech campuses, stadiums, and transit junctions.
- **Custom High-Resolution Photography:** Pristine, magazine-grade travel photography generated specifically for iconic Bengaluru landmarks (Vidhana Soudha, Bangalore Palace, Tipu Sultan's Summer Palace, Bengaluru Fort, Cubbon Park, Bannerghatta National Park, Sankey Tank, Ulsoor Lake, KR Market, Commercial Street, Chickpet, Gandhi Bazaar).
- **Zero-Key Dual-Mode Mapping:** Built on Leaflet.js with CartoDB Voyager (Light) and CartoDB Dark Matter (Dark) dynamic tile switching for 68+ landmark pins, paired with the fully restored, published **Google My Maps** curated embed. Zero API keys, zero credentials, and zero billing required.
- **Split-Screen Interactive Map Layout:** A synchronized split view pairing an interactive sidebar list with the Leaflet map canvas for desktop and mobile discovery.
- **Lucide SVG Icon System:** Zero-dependency inline vector icon registry replacing all emojis across navigation, categories, actions, and metadata grids.
- **Real-Time State Synchronization:** Instant cross-component synchronization across cards, detail modals, badge counters, and the personal trip planner.
- **100% Serverless & GitHub Pages Ready:** Pure client-side static web architecture. Deploys directly to GitHub Pages with zero build step, zero backend, and zero database.
- **Turn-by-Turn Navigation:** Instant Google Maps driving, walking, and transit directions from the user's location via official URL routing schemes.
- **Privacy-First Geolocation:** Requests location strictly upon explicit user interaction ("Near Me" / "Get Directions"), computing real-time distances via the Haversine formula without ever probing location on page load.
- **6 Curated Day Itineraries:** Ready-to-explore walking and transit trails (Royal Heritage Trail, Green Heart Walk, South Bengaluru Culture & Tiffin Circuit, Silk Bazaars & Street Food, Silicon Plateau Circuit, Wildlife & Lakes Escape).
- **Personal Trip Planner:** Build, customize, and reorder custom routes with one-click multi-stop route export directly into Google Maps.
- **4 Bengaluru Chronicles:** Rich, long-form historical narratives on Kempe Gowda's Four Watchtowers, the Garden City botanical legacy (from Hyder Ali to Krumbiegel), the 500-year history of Chickpet weavers, and the Silicon Plateau revolution.
- **100% Bilingual Parity:** Flawless English and authentic Kannada (*ಕನ್ನಡ*) parity across all navigation, titles, descriptions, and visitor guidelines.
- **Client-Side SPA Architecture:** Lightweight hash-based router supporting deep linking (`#/destination/:id`, `#/itineraries`, `#/map`, `#/explore`) with zero page reloads.
- **Accessible Light & Dark Theming:** High-contrast design tokens with smooth CSS transitions and remembered user preference.
- **PWA & Offline Ready:** Web App Manifest and Service Worker providing cache-first offline capability and installability on mobile devices.

---

## Discovery Sectors

| Sector | Icon | Description | Featured Places |
|---|---|---|---|
| **Heritage & Culture** | 🏛️ | Palaces, historic forts & colonial monuments | Vidhana Soudha, Bangalore Palace, Tipu Summer Palace, Bengaluru Fort, Attara Kacheri |
| **Nature & Outdoors** | 🌿 | Sprawling botanical gardens & serene lakes | Cubbon Park, Lalbagh Botanical Garden, Bannerghatta Park, Sankey Tank, Ulsoor Lake |
| **Food & Dining** | ☕ | Legendary tiffin rooms & street food alleys | VV Puram Food Street, MTR Lalbagh, Vidyarthi Bhavan, CTR Malleswaram, Brahmin's Coffee |
| **Shopping & Bazaars** | 🛍️ | Asia's flower hub, pure silk lanes & malls | KR Market, Commercial Street, Chickpet Silk Market, Gandhi Bazaar, UB City, Orion Mall |
| **Tech & Innovation** | 💻 | World-renowned software campuses & science | IISc Bangalore, ITPB Whitefield, Infosys Electronic City, Wipro, TCS, Manyata Park |
| **Temples & Spirituality** | 🕉️ | Ancient stone monoliths, caves & gopurams | ISKCON Temple, Bull Temple, Banashankari, Gavi Gangadhareshwara, Dodda Ganapathi |
| **Sports & Recreation** | 🏏 | Cricket grounds, stadiums & theme parks | Chinnaswamy Stadium, Kanteerava, Padukone-Dravid Centre, Wonderla, Visvesvaraya Museum |
| **Hotels & Stays** | 🏨 | Regal heritage hospitality & 5-star suites | The Leela Palace, Taj West End, ITC Gardenia, The Oberoi, Sheraton Grand |
| **Essential Services** | 🏥 | Transit hubs, international airport & healthcare | Kempegowda Airport T2, Majestic Railway Hub, Manipal Hospital, Apollo, Victoria Hospital |

---

## Quick Start & Local Development

Bangalore Explorer requires **no build step, no npm install, and no backend server**.

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder in VS Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.
3. The application will open automatically at `http://127.0.0.1:5500`.

### Option 2: Python Static Server
```bash
python -m http.server 5500
```
Then navigate to `http://localhost:5500` in your browser.

---

## GitHub Pages Deployment

Bangalore Explorer is engineered specifically for direct static deployment:

1. Push this repository to GitHub.
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Select the `main` branch and `/ (root)` folder, then click **Save**.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
6. Hash-based routing ensures all deep links (`#/explore`, `#/map`, `#/destination/:id`) work without 404 errors on refresh.

---

## Technology Stack

- **Markup:** HTML5 Semantic Living Standard
- **Presentation:** CSS3 Custom Properties, CSS Grid, Flexbox, Editorial Typography
- **Scripting:** Pure Vanilla ECMAScript 2015+ (ES6+)
- **Mapping (Dual Mode):**
  - Mode 1: Leaflet.js with CartoDB Voyager & Dark Matter tiles (zero API key)
  - Mode 2: Published Google My Maps curated iframe embed (zero API key)
- **Directions:** Official Google Maps Navigation & Multi-Stop Waypoint URL scheme (zero API key)
- **Storage:** Browser `localStorage` (Favorites, trip planner, recent items, theme, language)
- **Offline / PWA:** Web App Manifest (`manifest.json`) + Service Worker (`sw.js`)

---

## Project Structure

```text
Bangalore-Explorer/
├── index.html                   # Semantic HTML5 application shell & navigation
├── manifest.json                # PWA manifest
├── sw.js                        # Service worker for offline caching
├── README.md                    # Main project overview & documentation
├── docs/                        # Consolidated documentation
│   ├── PROJECT_OVERVIEW.md      # Architecture, objectives & scope
│   ├── FEATURES.md              # Complete feature matrix & data schema
│   └── MAINTENANCE.md           # Developer & maintenance guidelines
└── assets/
    ├── css/
    │   ├── styles.css           # Core styling, variables & layout
    │   └── components.css       # Magazine cards, hero, map, planner & modal
    ├── js/
    │   ├── icons.js             # Lucide SVG icon registry
    │   ├── data.js              # 68+ places, 9 categories, 6 trails, 4 chronicles
    │   ├── geo.js               # Geolocation, Haversine formula & routing URLs
    │   ├── storage.js           # LocalStorage state management
    │   ├── search.js            # Instant bilingual search & filter engine
    │   ├── map.js               # Dual-mode map coordinator (Leaflet + Google My Maps)
    │   ├── planner.js           # Curated itineraries & custom trip planner
    │   ├── router.js            # Client-side hash router
    │   ├── modal.js             # Accessible focus-trapped Modal 2.0
    │   └── app.js               # Master application bootstrapper
    └── images/
        ├── logo/                # Project logo & PWA icons
        ├── backgrounds/         # Editorial backgrounds & patterns
        ├── home/                # Hero banners
        ├── about/               # About page photography
        ├── stories/             # Cultural chronicles illustrations
        └── landmarks/           # Categorized landmark photography
```

---

## Documentation Links

- [Project Overview & Architecture](docs/PROJECT_OVERVIEW.md)
- [Complete Feature Matrix & Data Contracts](docs/FEATURES.md)
- [Maintenance, Testing & Adding Destinations](docs/MAINTENANCE.md)

---

## License

Crafted with ❤️ for Namma Bengaluru. Free and open source for educational and community exploration under the MIT License.
