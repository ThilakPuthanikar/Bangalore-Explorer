# Maintenance & Developer Guide: Bangalore Explorer

---

## 1. Project Directory Structure

```text
Bangalore-Explorer/
├── index.html                   # Semantic HTML5 application shell & navigation
├── manifest.json                # PWA manifest for installability & mobile icons
├── sw.js                        # Cache-first service worker for offline support
├── README.md                    # Main project presentation & documentation
├── docs/                        # Consolidated developer & product documentation
│   ├── PROJECT_OVERVIEW.md      # Purpose, scope, architecture & stack
│   ├── FEATURES.md              # Feature matrix, mapping, planner & data schema
│   └── MAINTENANCE.md           # Maintenance procedures, adding places & testing
└── assets/
    ├── css/
    │   ├── styles.css           # Core reset, tokens, layout & typography
    │   └── components.css       # Magazine cards, hero, map, planner & modal
    ├── js/
    │   ├── data.js              # Centralized bilingual database (68+ places, 9 categories)
    │   ├── geo.js               # Geolocation API, Haversine formula & directions URLs
    │   ├── storage.js           # LocalStorage state management (favorites, planner, recent)
    │   ├── search.js            # In-memory bilingual search & multi-facet engine
    │   ├── map.js               # Leaflet.js interactive map coordinator & SVG pins
    │   ├── planner.js           # Curated itineraries & Personal Trip Planner controller
    │   ├── router.js            # Client-side hash router with deep-linking
    │   ├── modal.js             # Accessible focus-trapped Modal 2.0 controller
    │   └── app.js               # Master application bootstrapper & view renderer
    └── images/
        ├── logo/                # Project logo & PWA icons
        ├── backgrounds/         # Editorial patterns and banner imagery
        ├── home/                # Hero banners
        ├── about/               # About page photography
        ├── stories/             # Cultural chronicles illustrations
        └── landmarks/           # Categorized destination photography
            ├── heritage/        # Vidhana Soudha, Palaces, Fort
            ├── nature/          # Cubbon Park, Bannerghatta, Lakes
            ├── food/            # Street food, legendary tiffin rooms
            ├── shopping/        # KR Market, Commercial St, Chickpet
            ├── tech/            # IISc, ITPB, Manyata, Infosys
            ├── temples/         # ISKCON, Bull Temple, Gavi Gangadhareshwara
            ├── sports/          # Chinnaswamy, Kanteerava, Wonderla
            ├── hotels/          # Leela Palace, Taj West End, Oberoi
            └── essential/       # Kempegowda Airport T2, Majestic, Hospitals
```

---

## 2. Adding or Editing a Destination

All destinations are maintained in `assets/js/data.js` inside the `PLACES` array.

To add a new destination:

```javascript
{
  id: "new-destination-slug",
  name: "English Landmark Name",
  kannadaName: "ಕನ್ನಡ ಹೆಗ್ಗುರುತಿನ ಹೆಸರು",
  category: "heritage-culture", // Must match one of the 9 canonical category IDs
  tags: ["Heritage", "Architecture", "Central Bengaluru"],
  neighbourhood: "Vasanth Nagar",
  neighbourhoodKn: "ವಸಂತ ನಗರ",
  coordinates: { lat: 12.998845, lng: 77.592106 },
  shortDesc: "1-2 sentence English summary for cards.",
  shortDescKn: "1-2 ವಾಕ್ಯದ ಕನ್ನಡ ಸಂಕ್ಷಿಪ್ತ ವಿವರ.",
  fullDesc: "Comprehensive 2-3 paragraph architectural and historical profile.",
  fullDescKn: "ಸಮಗ್ರ 2-3 ಪ್ಯಾರಾಗ್ರಾಫ್ ಕನ್ನಡ ವಿವರ.",
  history: "Verified historical origins, commissioning year, and significance.",
  historyKn: "ಐತಿಹಾಸಿಕ ಹಿನ್ನೆಲೆ ಮತ್ತು ಮಹತ್ವ.",
  image: "assets/images/landmarks/heritage/new-destination.jpg",
  visitorInfo: {
    timing: "10:00 AM - 5:30 PM (Open daily)",
    timingKn: "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ಸಂಜೆ 5:30 (ಪ್ರತಿದಿನ)",
    fee: "₹250 for adults; free for children below 5",
    feeKn: "ವಯಸ್ಕರಿಗೆ ₹250; 5 ವರ್ಷದೊಳಗಿನ ಮಕ್ಕಳಿಗೆ ಉಚಿತ",
    bestTime: "Morning hours for outdoor photography",
    bestTimeKn: "ಮುಂಜಾನೆಯ ವೇಳೆ ಛಾಯಾಗ್ರಹಣಕ್ಕೆ ಸೂಕ್ತ",
    nearestMetro: "Cubbon Park Metro (Purple Line) - 1.2 km",
    nearestMetroKn: "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 1.2 ಕಿ.ಮೀ",
    duration: "1.5 - 2 hours",
    durationKn: "1.5 - 2 ಗಂಟೆಗಳು"
  },
  rating: 4.8,
  featured: true // Set true to feature on Home page spotlight
}
```

---

## 3. Image Optimization Standards

1. **Resolution:** Recommended 1200x800 or 1000x667 pixels.
2. **Format:** Progressive JPEG (`.jpg`) or WebP (`.webp`).
3. **File Size:** Target under 350 KB per image for instant mobile delivery.
4. **Naming:** Kebab-case naming reflecting the slug (`assets/images/landmarks/<category>/<slug>.jpg`).

---

## 4. Code Quality & Syntax Validation

To verify the syntax of all JavaScript files across the application:

```powershell
Get-ChildItem -Path "assets\js" -Filter *.js | ForEach-Object {
  node -c $_.FullName
}
```

To verify that all image paths referenced in `data.js` exist on disk:

```powershell
node -e "
const fs = require('fs');
const { PLACES } = require('./assets/js/data.js');
let missing = 0;
PLACES.forEach(p => {
  if (!fs.existsSync(p.image)) {
    console.warn('Missing image for:', p.id, p.image);
    missing++;
  }
});
if (missing === 0) console.log('All image references verified successfully!');
"
```

---

## 5. Local Testing

Bangalore Explorer runs in any modern browser without a backend or build step:
- **VS Code Live Server (Recommended):** Right-click `index.html` > "Open with Live Server" (`http://127.0.0.1:5500`).
- **Python Static Server:**
  ```bash
  python -m http.server 5500
  ```

---

## 6. Deployment Guidelines & Automated CI/CD

Bangalore Explorer is 100% static:
- **GitHub Pages (Automated):** The repository includes `.github/workflows/deploy.yml`. Pushes to `main` automatically validate all JS syntax and deploy to GitHub Pages without manual intervention.
- **GitHub Pages (Manual Setting):** Go to Settings > Pages, select source `Deploy from a branch`, branch `main`, folder `/ (root)`.
- **Custom 404 Route Recovery:** `404.html` handles any non-root direct accesses under GitHub Pages subpaths and seamlessly routes the browser back to `index.html#/<route>`.
- **Search Engine Discovery:** Whenever adding new routes or chronicles, ensure `sitemap.xml` is updated with canonical URLs and bilingual hreflangs.
- **Netlify:** Drag and drop the repository folder or link the git repository with publish directory `.`.
- **Vercel:** Import project as "Other" static framework with output directory `.`.
- **Apache / Nginx:** Copy all files directly to the web root (`/var/www/html/`). No server runtime or PHP required.
