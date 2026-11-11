# Project Overview: Bangalore Explorer (ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್)

---

## 1. Project Introduction

**Bangalore Explorer** (*ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್*) is a high-performance, client-side bilingual city-discovery platform that serves as a premier digital travel and cultural guide to the metropolis of Bengaluru, Karnataka, India.

Evolved from an earlier college project into a modern travel-magazine platform, Bangalore Explorer showcases **68+ verified destinations** across **9 thematic discovery sectors**: Heritage & Culture, Nature & Outdoors, Food & Heritage Dining, Shopping & Bazaars, Technology & Innovation, Temples & Spirituality, Sports & Recreation, Hotels & Stays, and Essential Services & Transit.

The platform provides verified GPS coordinates, zero-key interactive mapping via Leaflet.js and OpenStreetMap, turn-by-turn driving and transit routing via Google Maps, 6 curated day itineraries, an interactive Personal Trip Planner with multi-waypoint route export, 4 historical/cultural chronicles, and 100% authentic bilingual language parity in English and Kannada.

---

## 2. Objectives

1. **Curated City Discovery:** Provide tourists, newcomers, residents, and students with rich, verified insights into Bengaluru's landmarks, heritage monuments, botanical gardens, street food hubs, and technology parks.
2. **First-Class Bilingual Parity:** Deliver 100% authentic language parity in both English and Kannada (*ಕನ್ನಡ*), honouring the cultural roots of Karnataka with zero machine-translated or Hindi text.
3. **Privacy-First Geolocation:** Respect user privacy by requesting browser location *only* upon explicit user action ("Near Me" / "Get Directions"), calculating real-time distances via the Haversine formula, and never probing location automatically on page load.
4. **Zero-Key, Zero-Cost Architecture:** Eliminate third-party API billing, developer accounts, SQL backends, and server costs by combining client-side Leaflet.js + OpenStreetMap with standard Google Maps URL navigation schemes.
5. **Modern Magazine UI/UX:** Elevate the visual identity to a responsive, editorial travel-magazine aesthetic with custom high-resolution photography, card hover elevation, category color palettes, and accessible dark/light theming.
6. **Robust Offline Support:** Deliver Progressive Web App (PWA) readiness with `manifest.json` and `sw.js` for seamless offline exploration.

---

## 3. Target Audience

- **Tourists & Global Visitors:** Travelers seeking verified visiting hours, entry fees, metro connectivity, and royal history.
- **Residents & Weekend Explorers:** Bengaluru citizens exploring walking trails, flower markets, street food streets, and botanical gardens.
- **Relocating Professionals & Students:** Tech newcomers navigating IT corridors, hospitals, transit junctions, and commercial districts.
- **Heritage & Culture Enthusiasts:** Learners interested in the 500-year evolution from Kempe Gowda's four watchtowers to the Silicon Valley of Asia.

---

## 4. Architectural Summary

| Layer | Technology | Details |
|---|---|---|
| **Structure** | Semantic HTML5 | Clean, single-page application shell (`index.html`) |
| **Presentation** | CSS3 Custom Properties | Editorial design system (`styles.css` & `components.css`) |
| **Data Engine** | Vanilla ES6 JavaScript | Centralized bilingual data store (`data.js`) |
| **Geolocation** | Web Geolocation API | Haversine formula & directions URL builder (`geo.js`) |
| **Storage** | Web Storage API | Favorites, custom trip planner, and user state (`storage.js`) |
| **Search** | Client-Side In-Memory | Instant bilingual search & filter engine (`search.js`) |
| **Mapping** | Leaflet.js & Google My Maps | Dual-mode zero-key maps: 68+ landmark pins with Dark Matter / Voyager & curated embed (`map.js`) |
| **Trip Planning** | Custom Controller | 6 curated trails & multi-stop Google Maps exporter (`planner.js`) |
| **Routing** | Client-Side Hash Router | Deep-linking, history, and view rendering (`router.js`) |
| **Dialogs** | Accessible Modal 2.0 | Focus trapping, escape listener, and visitor info (`modal.js`) |
| **PWA & Offline** | Web App Manifest & Service Worker | Cache-first offline shell (`manifest.json` & `sw.js`) |

---

## 5. Information Architecture & Discovery Categories

1. **Heritage & Culture (`heritage-culture`):** Vidhana Soudha, Bangalore Palace, Tipu Sultan's Summer Palace, Bengaluru Fort, Attara Kacheri.
2. **Nature & Outdoors (`nature-outdoors`):** Lalbagh Botanical Garden, Cubbon Park, Bannerghatta Biological Park, Sankey Tank, Ulsoor Lake.
3. **Food & Heritage Dining (`food-dining`):** VV Puram Food Street, Mavalli Tiffin Room (MTR), Vidyarthi Bhavan, CTR Malleswaram, RCB Cafe.
4. **Shopping & Bazaars (`shopping-markets`):** KR Flower Market, Commercial Street, Chickpet Silk Market, Gandhi Bazaar, UB City, Orion Mall, Phoenix Marketcity.
5. **Technology & Innovation (`technology-innovation`):** IISc, ITPB Whitefield, Infosys Electronic City, Wipro, TCS, Manyata Tech Park.
6. **Temples & Spirituality (`temples-spirituality`):** ISKCON Temple, Bull Temple, Banashankari Temple, Gavi Gangadhareshwara, Dodda Ganapathi.
7. **Sports & Recreation (`sports-recreation`):** M. Chinnaswamy Stadium, Kanteerava Stadium, Padukone-Dravid Centre, Wonderla, Visvesvaraya Museum.
8. **Hotels & Stays (`stay-accommodation`):** The Leela Palace, Taj West End, ITC Gardenia, The Oberoi, Sheraton Grand.
9. **Essential Services & Transit (`essential-services`):** Kempegowda International Airport (T2), KSR Bengaluru Majestic Hub, Manipal Hospital, Apollo Hospital, Victoria Hospital, State Bank of India.
