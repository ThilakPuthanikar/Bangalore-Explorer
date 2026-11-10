# Project Overview: Bangalore Explorer

---

## 1. Project Introduction

**Bangalore Explorer** (*ಬೆಂಗಳೂರು ಎಕ್ಸ್‌ಪ್ಲೋರರ್*) is a client-side static web application that acts as a digital travel and civic guide to the metropolis of Bengaluru, Karnataka, India. 

The application provides an accessible, ad-free directory of 48 curated landmarks spanning 8 key sectors: heritage temples, major IT campuses, luxury and high-street shopping, premier sports stadiums, entertainment parks, leading commercial banks, luxury hotels, and tertiary care hospitals. It also features a comprehensive bilingual historical overview and an interactive Google My Maps integration.

---

## 2. Objectives

1. **Curated Civic Discovery:** Provide quick, organized access to key attractions, infrastructure hubs, and institutions across Bangalore.
2. **First-Class Bilingual Accessibility:** Deliver full language parity in both English and Kannada, allowing local citizens and international visitors to access the same quality of information.
3. **Zero-Friction Static Delivery:** Ensure the platform runs without backends, databases, npm dependencies, or build tools, making it accessible even on modest hardware or offline environments.
4. **Clean Engineering Standards:** Maintain a clean separation of concerns among markup (`index.html`), presentation (`styles.css`), data (`data.js`), and logic (`app.js`, `modal.js`).

---

## 3. Target Audience

- **Tourists & Visitors:** Individuals seeking historical landmarks, botanical gardens, and leisure attractions.
- **Relocating Professionals:** Tech workers exploring major technology parks, banking facilities, and hospitality services.
- **Local Kannada-Speaking Citizens:** Residents seeking civic information in their mother tongue.
- **Students & Researchers:** Learners interested in Bengaluru's historical progression from the Ganga and Chola dynasties to Kempe Gowda I, the British Cantonment, and modern industrial hubs.

---

## 4. Main Application Functionality

1. **Bilingual Engine:** Complete, instant switching between English and Kannada for all navigation items, descriptions, and historical essays. Language preference is persisted in `localStorage`.
2. **Dark / Light Theme Switcher:** Theme toggle using CSS variables, updating body classes (`theme-on` vs `light`), knob position, and moon (`🌙`) / sun (`☀️`) iconography. Theme preference is persisted in `localStorage`.
3. **Sector Card Grids:** 8 category grids displaying 6 cards each. Cards feature photographs, titles, and summaries, and adapt responsively using CSS Grid.
4. **Detail Modal Dialog:** Overlay dialog displaying full-resolution imagery, titles, and 2–3 paragraph comprehensive descriptions. Fully accessible with keyboard `Escape` dismissal, click-outside dismissal, and background scroll locking.
5. **Interactive Google Map:** Embedded custom Google My Maps layer displaying landmark markers and city transit lines.
6. **Chronological History:** In-depth article detailing Bengaluru's chronology from 350 CE to the post-independence IT revolution.
7. **Civic Landing Experience:** Engaging Home section with hero banner, categorized highlights, and quick navigation pills.

---

## 5. Technology Stack

- **Markup:** HTML5 Living Standard
- **Styles:** Custom CSS3 with CSS Variables, Flexbox, and CSS Grid
- **Scripts:** Vanilla ECMAScript 2015+ (ES6+)
- **External Embeds:** Google My Maps Embed iframe
- **Runtime Dependencies:** None
- **Build / Packaging Tools:** None

---

## 6. High-Level Architecture

The application is structured as a **Client-Side Single Page Application (SPA)**:

```
┌─────────────────────────────────────────────────────────────┐
│                          Browser                            │
│                                                             │
│   ┌──────────────┐   ┌──────────────┐   ┌───────────────┐   │
│   │  index.html  │──▶│  styles.css  │   │  Google Maps  │   │
│   │ (HTML Shell) │   │ (Appearance) │   │  (Embed API)  │   │
│   └──────┬───────┘   └──────────────┘   └───────▲───────┘   │
│          │                                      │           │
│          ▼                                      │           │
│   ┌──────────────┐   ┌──────────────┐           │           │
│   │   data.js    │──▶│    app.js    │───────────┘           │
│   │ (Data Store) │   │ (Controller) │                       │
│   └──────────────┘   └──────┬───────┘                       │
│                             │                               │
│                             ▼                               │
│                      ┌──────────────┐                       │
│                      │   modal.js   │                       │
│                      │(Dialog logic)│                       │
│                      └──────────────┘                       │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
        ┌──────────────────────────────────────────────┐
        │        assets/images/ (Organized Media)      │
        │   - logo/     - home/     - about/           │
        │   - landmarks/{temples, it, shopping, ...}   │
        └──────────────────────────────────────────────┘
```

- **Execution Flow:** `index.html` loads scripts sequentially. `data.js` initializes global datasets. `modal.js` prepares dialog event listeners. `app.js` initializes state from `localStorage`, builds navigation, renders all sections, activates the active page, and binds event listeners.
- **DOM Rendering Strategy:** Sections are pre-rendered into `<section class="page" id="page-<id>">` elements. Navigation toggles the `.active` class (`display: none` vs `display: block`).

---

## 7. Important Technical Decisions

| Decision | Context | Rationale |
| :--- | :--- | :--- |
| **Vanilla Architecture** | Static college project. | Zero build configuration, instant startup, no `node_modules` overhead, and maximum long-term stability. |
| **Script Tag Ordering** | Alternative to ES modules. | Avoids browser CORS restrictions when opened directly via `file:///` URLs while maintaining clean code separation. |
| **In-Memory Bilingual Data** | Paired EN/KA records in `data.js`. | Allows instantaneous language switching with zero network roundtrips. |
| **CSS Custom Properties** | Light/dark mode implementation. | Instantaneous theme toggling without stylesheet swaps or CSS-in-JS libraries. |
| **LocalStorage State Persistence** | Preserving user selections. | Remembers language and theme choices across browser visits without requiring user accounts or cookies. |

---

## 8. Current Project Scope & Architectural Constraints

- **Scope:** Read-only civic information directory. The application does not collect user data, process payments, or support user-generated reviews.
- **Constraints:**
  - **No Dynamic Backend:** Adding or editing places requires updating `assets/js/data.js` and adding images to `assets/images/landmarks/`.
  - **Google Maps Decoupling:** The Google My Maps embed is managed via an external Google account and rendered in a sandboxed iframe. Clicking a landmark card cannot programmatically move pins on the embedded map.
  - **Local Static Storage:** Place bookmarks and favorites are not implemented in the current scope.

