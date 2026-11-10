# Bangalore Explorer (ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್)

An elegant, lightweight, zero-dependency static web application showcasing the cultural heritage, technology hubs, healthcare excellence, and vibrant urban lifestyle of Bangalore (Bengaluru), India.

Features complete bilingual support in **English** and **Kannada**, dark/light mode theming, an interactive Google Map, and a curated catalog of 48 prominent landmarks across 8 civic sectors.

---

## Key Features

- **Bilingual Experience:** Seamless, instant language switching between English and Kannada with 100% content parity and persistent preference storage (`localStorage`).
- **Curated Sector Directory:** 48 landmark cards spanning 8 civic categories:
  - 🛕 **Temples:** ISKCON, Bull Temple, Banashankari, Dodda Ganapathi, Gavi Gangadhareshwara, Kote Venkataramana.
  - 💻 **IT Campuses:** Infosys, Wipro, TCS, IBM, Google, Microsoft.
  - 🛍️ **Shopping & Lifestyle:** UB City, Phoenix Marketcity, Orion Mall, Church Street, Garuda Mall, Mantri Mall.
  - 🏏 **Sports & Athletics:** M Chinnaswamy Stadium, Kanteerava Stadium, Padukone-Dravid Centre, Bangalore FC, Bangalore Golf Club, Decathlon.
  - 🎡 **Entertainment & Parks:** Wonderla, PVR Cinemas, Innovative Film City, Lalbagh Botanical Garden, Visvesvaraya Museum, Snow City.
  - 🏦 **Banks & Financial Services:** State Bank of India, HDFC Bank, ICICI Bank, Bank of America, Canara Bank, Citibank.
  - 🏨 **Hotels & Hospitality:** Leela Palace, Taj Hotel, ITC Gardenia, The Oberoi, RCB Cafe, Sheraton Grand.
  - 🏥 **Hospitals & Healthcare:** Manipal Hospital, Apollo Hospital, BGS Hospital, Narayana Health, Victoria Hospital, Bangalore Hospital.
- **Landmark Detail Modal:** Accessible popup dialog presenting full landmark descriptions and high-resolution imagery. Supports keyboard `Escape` dismissal and prevents background scroll.
- **Rich Historical Overview:** Comprehensive narrative detailing Bengaluru's heritage from ancient dynasties (Ganga, Chola), Kempe Gowda I (1537 CE), Hyder Ali, Tipu Sultan, and the British Cantonment, to the modern IT revolution.
- **Interactive Geospatial Map:** Custom Google My Maps layer with landmark markers, transit information, and area highlights.
- **Theme Switching:** Dark Mode and Light Mode with smooth CSS variable transitions and remembered preferences.
- **Fully Responsive:** Fluid layouts adapting seamlessly from desktop widescreen down to mobile devices with a slide-down navigation drawer.

---

## Technology Stack

- **Markup:** HTML5 (Semantic, accessible landmarks)
- **Styling:** Vanilla CSS3 (CSS Custom Properties, CSS Grid, Flexbox, Glassmorphism)
- **Scripting:** Vanilla ECMAScript 2015+ (ES6+)
- **Mapping:** Google My Maps Embed API
- **Dependencies:** **Zero external dependencies** (No frameworks, bundlers, or npm packages required)

---

## Project Structure

```text
Bangalore-Explorer/
├── index.html                           # Main entry point (semantic HTML shell)
├── README.md                            # Project overview and instructions
│
├── assets/
│   ├── css/
│   │   └── styles.css                   # Responsive, themable stylesheet
│   │
│   ├── js/
│   │   ├── data.js                      # Bilingual datasets (SECTIONS, DATA, HOME, ABOUT)
│   │   ├── modal.js                     # Accessible landmark detail modal controller
│   │   └── app.js                       # Navigation, i18n, theme, and page controller
│   │
│   └── images/
│       ├── logo/                        # Brand logo asset (optimized)
│       ├── home/                        # Home section highlight imagery
│       ├── about/                       # Historical overview illustrations
│       └── landmarks/                   # Categorized landmark photographs
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
    ├── PROJECT_OVERVIEW.md              # Project purpose, architecture, and scope
    ├── FEATURES.md                      # Feature inventory, 48-place catalog & future scope
    └── MAINTENANCE.md                   # Developer maintenance and deployment guide
```

---

## Local Setup & Execution

Because Bangalore Explorer has zero build steps or package dependencies, running it locally is instant:

### Option 1: Direct File Execution (Simplest)
Double-click `index.html` or open it in any web browser (`file:///path/to/index.html`).

### Option 2: Local HTTP Server (Recommended)
Using Python (pre-installed on most systems):
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Using Node.js:
```bash
npx serve .
```

---

## Static Deployment

The project is ready for one-click deployment to any static web hosting platform:

- **GitHub Pages:** Go to your repository **Settings** → **Pages** → Source: **Deploy from a branch** (`main` / root).
- **Vercel / Netlify / Cloudflare Pages:** Connect your GitHub repository and deploy directly with root directory defaults.

---

## Repository Information

- **Author:** Thilak Puthanikar
- **Repository:** [https://github.com/ThilakPuthanikar/Bangalore-Explorer](https://github.com/ThilakPuthanikar/Bangalore-Explorer)
- **License:** Open educational and civic exploration resource.

