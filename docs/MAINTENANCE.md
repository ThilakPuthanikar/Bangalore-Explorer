# Developer Maintenance & Operations Guide

---

## 1. Directory Structure Reference

```text
Bangalore-Explorer/
├── index.html                   # HTML shell (markup, metadata, header, containers)
├── README.md                    # Primary repository overview
│
├── assets/
│   ├── css/
│   │   └── styles.css           # Central stylesheet with CSS custom properties
│   │
│   ├── js/
│   │   ├── data.js              # Centralized datasets (SECTIONS, DATA, HOME, ABOUT)
│   │   ├── modal.js             # Detail modal dialog controller
│   │   └── app.js               # Navigation, i18n, theming, and section renderers
│   │
│   └── images/
│       ├── logo/                # Brand identity logo
│       ├── home/                # Images used on the Home landing page
│       ├── about/               # Archival images used in About history page
│       └── landmarks/           # Categorized subfolders for each sector
│           ├── temples/
│           ├── it/
│           ├── shopping/
│           ├── sports/
│           ├── entertainment/
│           ├── banks/
│           ├── hotels/
│           └── hospitals/
│
└── docs/
    ├── PROJECT_OVERVIEW.md      # Purpose, audience, architecture, and tech decisions
    ├── FEATURES.md              # Feature inventory and catalog of all 48 places
    └── MAINTENANCE.md           # This maintenance guide
```

---

## 2. Managing Landmark Data

All landmark data is centralized inside `assets/js/data.js`.

### 2.1 How to Add a New Landmark
1. Place the optimized photograph in the appropriate category folder:
   `assets/images/landmarks/<category>/<filename>.jpg`
2. Open `assets/js/data.js` and locate the target category key inside `DATA` (e.g. `temples`, `it`, `hotels`).
3. Append a new landmark object:
   ```javascript
   {
     en: {
       title: "New Landmark Name",
       short: "One-sentence summary displayed on the card front.",
       long: "Comprehensive 2–3 paragraph historical or contextual description displayed inside the detail modal."
     },
     ka: {
       title: "ಹೊಸ ಸ್ಥಳದ ಹೆಸರು",
       short: "ಕಾರ್ಡ್ ಮೇಲೆ ಪ್ರದರ್ಶಿಸಲಾಗುವ ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ.",
       long: "ಮೋಡಲ್ ಒಳಗೆ ಪ್ರದರ್ಶಿಸಲಾಗುವ ವಿವರವಾದ ಲೇಖನ."
     },
     img: "assets/images/landmarks/<category>/<filename>.jpg"
   }
   ```
4. Refresh the browser. The card will automatically render in the sector's grid and modal viewer.

### 2.2 How to Update Content (English or Kannada)
1. Open `assets/js/data.js`.
2. Locate the place under `DATA[category]`.
3. Update `en.title`, `en.short`, or `en.long` for English changes.
4. Update `ka.title`, `ka.short`, or `ka.long` for Kannada changes.
5. Save the file. Changes take effect on the next browser refresh.

---

## 3. Managing Images & Static Assets

### 3.1 Adding or Replacing an Image
- **Image Specifications:**
  - Recommended Card Dimensions: **600×400px** to **800×500px** (3:2 or 16:9 aspect ratio).
  - Recommended Format: **JPEG** or **WebP** at 80–85% compression quality.
  - File Size Target: Keep under **100 KB** per landmark photo for rapid mobile loading.
- **Replacement Step:**
  - Save the new image with the existing filename in `assets/images/landmarks/<category>/` to overwrite it, or update the `img` path in `assets/js/data.js`.

### 3.2 Updating the Logo
- Place the new logo at `assets/images/logo/logo.png`.
- Recommended dimensions: **192×192px** PNG (supports high-DPI displays while keeping file size under 50 KB).

---

## 4. Managing Categories & Navigation

### 4.1 Adding a New Category
1. Open `assets/js/data.js`.
2. In the `SECTIONS` array, append a new section definition:
   ```javascript
   { id: "parks", label: { en: "Parks", ka: "ಉದ್ಯಾನಗಳು" } }
   ```
3. In the `DATA` object, create the corresponding array:
   ```javascript
   DATA.parks = [
     // Array of landmark objects
   ];
   ```
4. Create the corresponding image folder: `assets/images/landmarks/parks/`.
5. Refresh the browser. The navigation bar and new category page will build automatically.

---

## 5. Modifying Styles & Themes

All styling resides in `assets/css/styles.css`.

### 5.1 Adjusting Theme Colors
Modify the CSS custom properties in section 2 of `styles.css`:
```css
:root {
  /* Dark Mode Variables */
  --bg-primary: #0b0d13;
  --card-bg: rgba(255, 255, 255, 0.035);
  --accent: #3b82f6;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
}

body.light {
  /* Light Mode Variables */
  --bg-primary: #f8fafc;
  --card-bg: #ffffff;
  --accent: #2563eb;
  --text-primary: #0f172a;
  --text-secondary: #475569;
}
```

### 5.2 Card Grid Layout
To adjust card sizing across devices, update:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--gap);
}
```

---

## 6. JavaScript Architecture Reference

- **`assets/js/data.js`:** Pure data file defining global constants (`SECTIONS`, `DATA`, `ABOUT_CONTENT`, `HOME_CONTENT`).
- **`assets/js/modal.js`:** Encapsulated `ModalController` module managing dialog states, keyboard `Escape` handling, and body scroll locking (`body.modal-open`).
- **`assets/js/app.js`:** Application entry point managing navigation, language switching, theme toggling, DOM generation, and `localStorage` preference synchronization.

---

## 7. Local Testing & Verification

1. **Syntax Check:**
   Verify JavaScript syntax without errors:
   ```bash
   node -c assets/js/data.js
   node -c assets/js/modal.js
   node -c assets/js/app.js
   ```
2. **Local HTTP Server Test:**
   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000` and verify:
   - All 11 navigation links work and toggle views.
   - Switching language preserves the currently active page.
   - Detail modal opens on card click and closes on `Escape` keypress.
   - Theme toggle remembers preference after page reload.
   - Mobile menu opens on screens $\le 768\text{px}$.

---

## 8. Deployment Guide

### Deploying to GitHub Pages
1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Refactor codebase and update documentation"
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Click **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**.
   - Click **Save**.
3. Your site will be live at `https://<username>.github.io/Bangalore-Explorer/` within 1–2 minutes.

