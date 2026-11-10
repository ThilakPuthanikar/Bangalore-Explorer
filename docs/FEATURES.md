# Feature Catalog & Landmark Inventory: Bangalore Explorer

---

## 1. Feature Status Summary

| Feature | Category | Implementation Status | Description |
| :--- | :--- | :---: | :--- |
| **Bilingual Language Toggle** | Internationalization | **Implemented** | Instant switching between English and Kannada with `localStorage` persistence. |
| **Dark / Light Theme Switcher** | Appearance | **Implemented** | Toggle switch with Moon (`🌙`) / Sun (`☀️`) icons and `localStorage` persistence. |
| **Responsive Navigation Bar** | Navigation | **Implemented** | Sticky desktop navbar with active tab indicator; collapsible mobile drawer on small screens. |
| **Home Landing Experience** | Content Presentation | **Implemented** | Hero banner, interest highlights (`home1.jpg`–`home3.jpg`), and quick category pills. |
| **About History Section** | Content Presentation | **Implemented** | Comprehensive multi-century Bengaluru history article with archival photos (`ab.jpg`, `ab2.jpg`). |
| **Sector Card Grids** | Content Presentation | **Implemented** | Responsive cards (`repeat(auto-fill, minmax(280px, 1fr))`) for 8 categories. |
| **Landmark Detail Modal** | Content Exploration | **Implemented** | Accessible modal dialog with `Escape` close, click-outside close, and background scroll lock. |
| **Interactive Google Map** | Geospatial / Mapping | **Implemented** | Embedded Google My Maps layer with custom landmark pins and layer controls. |
| **URL Hash Routing** | Navigation | **Implemented** | Supports browser back/forward history and direct linking via `#temples`, `#it`, etc. |
| **Live Landmark Search Bar** | Discovery | **Future Opportunity** | Client-side input filter to search landmarks by title or description. |
| **User Bookmarks / Favorites** | Personalization | **Future Opportunity** | Browser `localStorage` place bookmarking. |

---

## 2. Complete Landmark Catalog (48 Curated Places)

### 2.1 Temples (`temples`)
| # | Landmark (EN) | Landmark (KA) | Image Asset Path | Short Description (EN) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **ISKCON Temple** | ಇಸ್ಕಾನ್ ದೇವಸ್ಥಾನ | `assets/images/landmarks/temples/tem1.jpg` | Large Krishna temple and cultural centre. |
| 2 | **Bull Temple** | ಬುಲ್ ದೇವಾಲಯ | `assets/images/landmarks/temples/tem2.jpg` | Historic Nandi statue at Basavanagudi. |
| 3 | **Banashankari Temple** | ಬನಶಂಕರಿ ದೇವಾಲಯ | `assets/images/landmarks/temples/tem6.jpg` | Temple dedicated to Goddess Banashankari. |
| 4 | **Dodda Ganapathi Temple** | ದೊಡ್ಡ ಗಣಪತಿ ದೇವಾಲಯ | `assets/images/landmarks/temples/tem3.jpg` | Home to a huge Ganesha idol. |
| 5 | **Gavi Gangadhareshwara** | ಗವಿ ಗಂಗಾಧರೇಶ್ವರ | `assets/images/landmarks/temples/tem5.jpg` | Rock-cut cave temple with ancient sculptures. |
| 6 | **Kote Venkataramana** | ಕೋಟೆ ವೆಂಕಟರಮಣ | `assets/images/landmarks/temples/tem4.jpg` | Historic temple near Bangalore Fort. |

### 2.2 Information Technology Campuses (`it`)
| # | Landmark (EN) | Landmark (KA) | Image Asset Path | Short Description (EN) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **Infosys** | ಇನ್ಫೋಸಿಸ್ | `assets/images/landmarks/it/it1.jpg` | Major IT services company. |
| 2 | **Wipro** | ವಿಪ್ರೊ | `assets/images/landmarks/it/it2.jpg` | IT services and consulting. |
| 3 | **TCS** | ಟಿಸಿಎಸ್ | `assets/images/landmarks/it/it3.jpg` | Tata Consultancy Services centre. |
| 4 | **IBM** | ಐಬಿಎಂ | `assets/images/landmarks/it/it4.jpg` | Research and technology offices. |
| 5 | **Google** | ಗೂಗಲ್ | `assets/images/landmarks/it/it5.jpg` | Engineering and product teams. |
| 6 | **Microsoft** | ಮೈಕ್ರೋಸಾಫ್ಟ್ | `assets/images/landmarks/it/it6.jpg` | Software, cloud and research teams. |

### 2.3 Shopping & Lifestyle Malls (`shopping`)
| # | Landmark (EN) | Landmark (KA) | Image Asset Path | Short Description (EN) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **UB City** | ಯುಬಿ ಸಿಟಿ | `assets/images/landmarks/shopping/mall3.jpg` | Luxury retail and dining complex. |
| 2 | **Phoenix Marketcity** | ಫೀನಿಕ್ಸ್ ಮಾರ್ಕೆಟ್‌ಸಿಟಿ | `assets/images/landmarks/shopping/mall2.jpg` | Large mall with entertainment. |
| 3 | **Orion Mall** | ಓರಿಯನ್ ಮಾಲ್ | `assets/images/landmarks/shopping/mall1.jpg` | Lakeside shopping and leisure. |
| 4 | **Church Street** | ಚರ್ಚ್ ಸ್ಟ್ರೀಟ್ | `assets/images/landmarks/shopping/mall4.jpg` | Bookstores, cafes and street life. |
| 5 | **Garuda Mall** | ಗರೂಡಾ ಮಾಲ್ | `assets/images/landmarks/shopping/mall5.jpg` | City-center shopping mall. |
| 6 | **Mantri Mall** | ಮಂತ್ರಿ ಮಾಲ್ | `assets/images/landmarks/shopping/mall6.jpg` | Neighborhood retail destination. |

### 2.4 Sports & Athletics Arenas (`sports`)
| # | Landmark (EN) | Landmark (KA) | Image Asset Path | Short Description (EN) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **M Chinnaswamy Stadium** | ಎಂ ಚಿನ್ನಸ್ವಾಮಿ ಸ್ಟೇಡಿಯಂ | `assets/images/landmarks/sports/sp1.jpg` | International cricket stadium. |
| 2 | **Kanteerava Stadium** | ಕಾಂತೀರವ ಸ್ಟೇಡಿಯಂ | `assets/images/landmarks/sports/sp2.jpg` | Athletics and multi-sport venue. |
| 3 | **Padukone-Dravid Centre** | ಪಡುಕೋಣೆ-ದ್ರಾವಿಡ್ ಕೇಂದ್ರ | `assets/images/landmarks/sports/sp3.jpg` | Badminton training centre. |
| 4 | **Bangalore Football Club** | ಬೆಂಗಳೂರು ಫುಟ್ಬಾಲ್ ಕ್ಲಬ್ | `assets/images/landmarks/sports/sp4.jpg` | Local football club and academy. |
| 5 | **Bangalore Golf Club** | ಬೆಂಗಳೂರು ಗಾಲ್ಫ್ ಕ್ಲಬ್ | `assets/images/landmarks/sports/sp5.jpg` | Historic golf course. |
| 6 | **Decathlon** | ಡೆಕಾಥ್ಲಾನ್ | `assets/images/landmarks/sports/sp6.jpg` | Sports goods and demo area. |

### 2.5 Entertainment & Botanical Parks (`entertainment`)
| # | Landmark (EN) | Landmark (KA) | Image Asset Path | Short Description (EN) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **Wonderla** | ವಂಡರ್‌ಲಾ | `assets/images/landmarks/entertainment/ent5.jpg` | Amusement park with rides. |
| 2 | **PVR Cinemas** | ಪಿವಿಆರ್ ಸಿನೆಮಾಸ್ | `assets/images/landmarks/entertainment/ent2.jpg` | Modern multiplex chain. |
| 3 | **Innovative Film City** | ಇನ್ನೋವೇಟಿವ್ ಫಿಲ್ಮ್ ಸಿಟಿ | `assets/images/landmarks/entertainment/ent1.jpg` | Theme park and attractions. |
| 4 | **Lalbagh Botanical Garden** | ಲಾಲ್‌ಬಾಗ್ ಉದ್ಯಾನ | `assets/images/landmarks/entertainment/ent7.jpg` | Historic botanical gardens. |
| 5 | **Visvesvaraya Museum** | ವಿಶ್ವೇಶ್ವರಯ್ಯ ಮ್ಯೂಸಿಯಂ | `assets/images/landmarks/entertainment/ent8.jpg` | Science and technology exhibits. |
| 6 | **Snow City** | ಸ್ನೋ ಸಿಟಿ | `assets/images/landmarks/entertainment/ent6.jpg` | Indoor snow-themed attraction. |

### 2.6 Banks & Financial Services (`banks`)
| # | Landmark (EN) | Landmark (KA) | Image Asset Path | Short Description (EN) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **State Bank of India** | ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂದಿಯಾ | `assets/images/landmarks/banks/ban1.jpg` | National public sector bank. |
| 2 | **HDFC Bank** | ಎಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್ | `assets/images/landmarks/banks/ban3.jpg` | Major private bank. |
| 3 | **ICICI Bank** | ಐಸಿಐಸಿಐ ಬ್ಯಾಂಕ್ | `assets/images/landmarks/banks/ban4.jpg` | Private sector banking. |
| 4 | **Bank of America** | ಬ್ಯಾಂಕ್ ಆಫ್ ಅಮೆರಿಕ | `assets/images/landmarks/banks/ban5.jpg` | International bank branch. |
| 5 | **Canara Bank** | ಕನರಾ ಬ್ಯಾಂಕ್ | `assets/images/landmarks/banks/ban2.jpg` | Public sector bank. |
| 6 | **Citibank** | ಸಿಟಿಬ್ಯಾಂಕ್ | `assets/images/landmarks/banks/ban6.jpg` | Global banking & wealth services. |

### 2.7 Hotels & Hospitality (`hotels`)
| # | Landmark (EN) | Landmark (KA) | Image Asset Path | Short Description (EN) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **Leela Palace** | ಲೀಲಾ ಪ್ಯಾಲೆಸ್ | `assets/images/landmarks/hotels/hot2.jpg` | Luxury five-star hotel. |
| 2 | **Taj Hotel** | ತಾಜ್ ಹೋಟೆಲ್ | `assets/images/landmarks/hotels/hot1.jpg` | Heritage luxury brand. |
| 3 | **ITC Gardenia** | ಐಟಿಸಿ ಗಾರ್ಡೀನಿಯಾ | `assets/images/landmarks/hotels/hot3.jpg` | Premium business hotel. |
| 4 | **The Oberoi** | ದಿ ಓಬೆರಾಯ್ | `assets/images/landmarks/hotels/hot4.jpg` | Luxury hospitality chain. |
| 5 | **RCB Cafe** | ಆರ್ ಸಿ ಬಿ ಕಾಫೆ | `assets/images/landmarks/hotels/hot5.jpg` | Cricket-themed cafe & lounge. |
| 6 | **Sheraton Grand** | ಶೆರೇಟನ್ ಗ್ರ್ಯಾಂಡ್ | `assets/images/landmarks/hotels/hot6.jpg` | International luxury hotel. |

### 2.8 Hospitals & Healthcare (`hospitals`)
| # | Landmark (EN) | Landmark (KA) | Image Asset Path | Short Description (EN) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **Manipal Hospital** | ಮಣಿಪಾಲ್ ಆಸ್ಪತ್ರೆ | `assets/images/landmarks/hospitals/hos2.jpg` | Multi-specialty tertiary care. |
| 2 | **Apollo Hospital** | ಅಪೋಲೊ ಆಸ್ಪತ್ರೆ | `assets/images/landmarks/hospitals/hos1.jpg` | Leading private healthcare network. |
| 3 | **BGS Hospital** | ಬಿಜಿಎಸ್ ಆಸ್ಪತ್ರೆ | `assets/images/landmarks/hospitals/hos6.jpg` | Comprehensive care & specialties. |
| 4 | **Narayana Health** | ನಾರಾಯಣ ಆಸ್ಪತ್ರೆ | `assets/images/landmarks/hospitals/hos3.jpg` | Cardiac & specialized services. |
| 5 | **Victoria Hospital** | ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆಗೆ | `assets/images/landmarks/hospitals/hos4.jpg` | Historic government hospital. |
| 6 | **Bangalore Hospital** | ಬೆಂಗಳೂರು ಆಸ್ಪತ್ರೆ | `assets/images/landmarks/hospitals/hos5.jpg` | City multi-specialty centre. |

---

## 3. Known Limitations

1. **Static In-Memory Data:** New places cannot be added via a graphical interface; they must be appended to `assets/js/data.js`.
2. **Decoupled Map Integration:** The Google My Maps embed is self-contained; clicking a landmark card does not dynamically center or highlight a pin on the embedded map.
3. **No Direct Visit Logistics:** Landmark cards do not currently store structured operating hours, admission ticket prices, contact phone numbers, or nearest Namma Metro stations.

---

## 4. Sensible Future Opportunities

1. **Client-Side Live Search:** Add an instant search filter in the header that filters landmark cards across all 8 sectors as the user types.
2. **Transit & Metro Badges:** Tag each landmark with its nearest Namma Metro station (e.g. Purple Line, Green Line).
3. **Favorites / Itinerary Planner:** Allow users to star/bookmark places to create a custom visit list saved in `localStorage`.
