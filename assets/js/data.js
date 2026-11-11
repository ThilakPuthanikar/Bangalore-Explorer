/**
 * Bangalore Explorer (ಬೆಂಗಳೂರು ಎಕ್ಸ್ಪ್ಲೋರರ್)
 * Master Destination Data, Categories, Curated Itineraries, and Cultural Stories.
 * Zero-key, offline-friendly, high-fidelity bilingual city guide.
 */

const CATEGORIES = [
  {
    "id": "heritage-culture",
    "icon": "landmark",
    "label": {
      "en": "Heritage & Culture",
      "ka": "ಪರಂಪರೆ ಮತ್ತು ಸಂಸ್ಕೃತಿ"
    },
    "tagline": {
      "en": "Palaces, historic forts, grand public monuments and colonial corridors",
      "ka": "ಅರಮನೆಗಳು, ಕೋಟೆಗಳು, ಭವ್ಯ ಸ್ಮಾರಕಗಳು ಹಾಗೂ ಐತಿಹಾಸಿಕ ಕಟ್ಟಡಗಳು"
    },
    "color": "#b45309"
  },
  {
    "id": "nature-outdoors",
    "icon": "trees",
    "label": {
      "en": "Nature & Outdoors",
      "ka": "ಪ್ರಕೃತಿ ಮತ್ತು ಉದ್ಯಾನಗಳು"
    },
    "tagline": {
      "en": "Botanical gardens, sprawling canopy parks, tranquil lakes and reserves",
      "ka": "ಸಸ್ಯತೋಟಗಳು, ಹಚ್ಚಹಸಿರಿನ ಉದ್ಯಾನವನಗಳು, ಸುಂದರ ಕೆರೆಗಳು"
    },
    "color": "#047857"
  },
  {
    "id": "food-dining",
    "icon": "utensils",
    "label": {
      "en": "Food & Heritage Dining",
      "ka": "ಆಹಾರ ಮತ್ತು ಊಟೋಪಚಾರ"
    },
    "tagline": {
      "en": "Historic tiffin rooms, legendary filter coffee, dosas and bustling street foods",
      "ka": "ಪಾರಂಪರಿಕ ಉಪಾಹಾರ ಗೃಹಗಳು, ಫಿಲ್ಟರ್ ಕಾಫಿ, ಮಸಾಲೆ ದೋಸೆ ಮತ್ತು ತಿಂಡಿ ಬೀದಿಗಳು"
    },
    "color": "#c2410c"
  },
  {
    "id": "shopping-markets",
    "icon": "shopping-bag",
    "label": {
      "en": "Shopping & Bazaars",
      "ka": "ಶಾಪಿಂಗ್ ಮತ್ತು ಮಾರುಕಟ್ಟೆಗಳು"
    },
    "tagline": {
      "en": "Vibrant flower markets, pure silk bazaars, bustling high streets and malls",
      "ka": "ಹೂವಿನ ಮಾರುಕಟ್ಟೆಗಳು, ರೇಷ್ಮೆ ಬಜಾರ್‌ಗಳು, ಶಾಪಿಂಗ್ ಬೀದಿಗಳು ಮತ್ತು ಮಾಲ್‌ಗಳು"
    },
    "color": "#9333ea"
  },
  {
    "id": "technology-innovation",
    "icon": "cpu",
    "label": {
      "en": "Technology & Innovation",
      "ka": "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ನಾವೀನ್ಯತೆ"
    },
    "tagline": {
      "en": "World-leading tech parks, iconic software campuses and science institutes",
      "ka": "ಜಾಗತಿಕ ತಂತ್ರಜ್ಞಾನ ಪಾರ್ಕ್‌ಗಳು, ಸಾಫ್ಟ್‌ವೇರ್ ಕ್ಯಾಂಪಸ್‌ಗಳು ಹಾಗೂ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆಗಳು"
    },
    "color": "#0369a1"
  },
  {
    "id": "temples-spirituality",
    "icon": "sparkles",
    "label": {
      "en": "Temples & Spirituality",
      "ka": "ದೇವಾಲಯಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸ್ಥಳಗಳು"
    },
    "tagline": {
      "en": "Centuries-old stone temples, sacred caves, gopurams and serene spaces",
      "ka": "ಪುರಾತನ ಶಿಲಾ ದೇವಾಲಯಗಳು, ಪವಿತ್ರ ಗುಹೆಗಳು, ಭವ್ಯ ಗೋಪುರಗಳು"
    },
    "color": "#ea580c"
  },
  {
    "id": "sports-recreation",
    "icon": "trophy",
    "label": {
      "en": "Sports & Recreation",
      "ka": "ಕ್ರೀಡೆ ಮತ್ತು ಮನರಂಜನೆ"
    },
    "tagline": {
      "en": "Championship cricket grounds, stadiums, theme parks and planetariums",
      "ka": "ಕ್ರಿಕೆಟ್ ಮೈದಾನಗಳು, ಕ್ರೀಡಾಂಗಣಗಳು, ಮನರಂಜನಾ ಪಾರ್ಕ್‌ಗಳು ಮತ್ತು ತಾರಾಲಯ"
    },
    "color": "#15803d"
  },
  {
    "id": "stay-accommodation",
    "icon": "hotel",
    "label": {
      "en": "Hotels & Stays",
      "ka": "ಹೋಟೆಲು ಮತ್ತು ವಾಸ್ತವ್ಯ"
    },
    "tagline": {
      "en": "Regal heritage hotels, luxury five-star suites and hospitality landmarks",
      "ka": "ಐತಿಹಾಸಿಕ ಹೆರಿಟೇಜ್ ಹೋಟೆಲ್‌ಗಳು ಹಾಗೂ ಪಂಚತಾರಾ ಆತಿಥ್ಯ ಕೇಂದ್ರಗಳು"
    },
    "color": "#4f46e5"
  },
  {
    "id": "essential-services",
    "icon": "cross",
    "label": {
      "en": "Essential Services & Transit",
      "ka": "ಅಗತ್ಯ ಸೇವೆಗಳು ಮತ್ತು ಸಾರಿಗೆ"
    },
    "tagline": {
      "en": "Premier healthcare institutes, transit junctions, airport and banks",
      "ka": "ಪ್ರಮುಖ ಆಸ್ಪತ್ರೆಗಳು, ವಿಮಾನ ನಿಲ್ದಾಣ, ರೈಲ್ವೆ ಜಂಕ್ಷನ್ ಹಾಗೂ ಬ್ಯಾಂಕ್‌ಗಳು"
    },
    "color": "#0284c7"
  }
];

const PLACES = [
  {
    "id": "vidhana-soudha",
    "name": "Vidhana Soudha",
    "kannadaName": "ವಿಧಾನ ಸೌಧ",
    "category": "heritage-culture",
    "tags": [
      "Heritage",
      "Architecture",
      "Government",
      "Central Bengaluru"
    ],
    "neighbourhood": "Sampangi Rama Nagara",
    "neighbourhoodKn": "ಸಂಪಂಗಿ ರಾಮ ನಗರ",
    "coordinates": {
      "lat": 12.979693,
      "lng": 77.590658
    },
    "shortDesc": "The monumental seat of Karnataka's state legislature, built in striking Neo-Dravidian granite architecture.",
    "shortDescKn": "ಕರ್ನಾಟಕ ರಾಜ್ಯ ವಿಧಾನಮಂಡಲದ ಭವ್ಯ ಸೌಧ, ನವ-ದ್ರಾವಿಡ ವಾಸ್ತುಶಿಲ್ಪದ ಬಿಳಿ ಗ್ರಾನೈಟ್ ಶಿಲ್ಪಕಲೆ.",
    "fullDesc": "Conceived by Kengal Hanumanthaiah and completed in 1956, Vidhana Soudha is the largest legislative building in India. Constructed almost entirely from Bangalore granite quarried from Mallasandra and Hessaraghatta, it features massive carved pillars, floral cornices, a central dome topped with the four-headed Ashoka Lion emblem, and the Kannada inscription 'ಸರ್ಕಾರದ ಕೆಲಸ ದೇವರ ಕೆಲಸ' (Government's Work is God's Work).",
    "fullDescKn": "ಕೆಂಗಲ್ ಹನುಮಂತಯ್ಯನವರ ಸಂಕಲ್ಪದಿಂದ 1956ರಲ್ಲಿ ನಿರ್ಮಾಣಗೊಂಡ ವಿಧಾನ ಸೌಧವು ಭಾರತದ ಅತಿ ದೊಡ್ಡ ಶಾಸನ ಸಭೆಯ ಕಟ್ಟಡವಾಗಿದೆ. ಮಲ್ಲಸಂದ್ರ ಹಾಗೂ ಹೆಸರಘಟ್ಟದಿಂದ ತರಲಾದ ಶುದ್ಧ ಗ್ರಾನೈಟ್ ಶಿಲೆಗಳಿಂದ ನಿರ್ಮಿತವಾದ ಈ ಮಹಾಸೌಧದಲ್ಲಿ ನವ-ದ್ರಾವಿಡ ಕೆತ್ತನೆಗಳು, ಬೃಹತ್ ಕಂಬಗಳು ಹಾಗೂ ನಾಲ್ಕು ಮುಖದ ಸಿಂಹ ಲಾಂಛನವಿರುವ ಕೇಂದ್ರ ಗುಮ್ಮಟವಿದೆ.",
    "history": "Inaugurated on 10 October 1956 as a monument of democratic self-rule and architectural mastery.",
    "historyKn": "1956ರ ಅಕ್ಟೋಬರ್ 10 ರಂದು ಪ್ರಜಾಪ್ರಭುತ್ವದ ಸಂಕೇತವಾಗಿ ಮತ್ತು ಸ್ಥಳೀಯ ಶಿಲ್ಪಕಲೆಯ ಗೌರವವಾಗಿ ಲೋಕಾರ್ಪಣೆಗೊಂಡಿತು.",
    "image": "assets/images/landmarks/heritage/vidhana-soudha.jpg",
    "visitorInfo": {
      "timing": "Exterior viewing anytime; Sunday & Holiday illumination 6:00 PM - 8:30 PM",
      "timingKn": "ಹೊರಗಿನಿಂದ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ವೀಕ್ಷಿಸಬಹುದು; ಭಾನುವಾರ/ರಜಾದಿನ ಸಂಜೆ 6:00 - 8:30 ದೀಪಾಲಂಕಾರ",
      "fee": "Free outside view",
      "feeKn": "ಹೊರಗಿನ ವೀಕ್ಷಣೆಗೆ ಉಚಿತ",
      "bestTime": "Evening at sunset or during festive illumination",
      "bestTimeKn": "ಸಂಜೆ ಸೂರ್ಯಾಸ್ತದ ವೇಳೆ ಅಥವಾ ದೀಪಾಲಂಕಾರದ ಸಮಯದಲ್ಲಿ",
      "nearestMetro": "Dr. B.R. Ambedkar Vidhana Soudha Metro (Purple Line) - 100m",
      "nearestMetroKn": "ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ವಿಧಾನ ಸೌಧ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 100 ಮೀ",
      "duration": "45 mins",
      "durationKn": "45 ನಿಮಿಷ"
    },
    "rating": 4.9,
    "featured": true
  },
  {
    "id": "bangalore-palace",
    "name": "Bangalore Palace",
    "kannadaName": "ಬೆಂಗಳೂರು ಅರಮನೆ",
    "category": "heritage-culture",
    "tags": [
      "Heritage",
      "Royal",
      "Tudor Architecture",
      "Palace Grounds"
    ],
    "neighbourhood": "Vasanth Nagar",
    "neighbourhoodKn": "ವಸಂತ ನಗರ",
    "coordinates": {
      "lat": 12.998845,
      "lng": 77.592106
    },
    "shortDesc": "Tudor-style royal estate of the Wadiyar dynasty featuring fortified towers, woodcarvings, and vintage paintings.",
    "shortDescKn": "ಒಡೆಯರ್ ರಾಜಮನೆತನದ ಟ್ಯೂಡರ್ ಶೈಲಿಯ ಭವ್ಯ ಅರಮನೆ, ಕೋಟೆ ಬುರುಜುಗಳು ಮತ್ತು ಪುರಾತನ ವರ್ಣಚಿತ್ರಗಳ ಸಂಗ್ರಹ.",
    "fullDesc": "Purchased by Chamarajendra Wadiyar X in 1884, Bangalore Palace was designed inspired by Windsor Castle in England. It features crenellated parapets, fortified towers, Tudor arches, rich wooden floral carvings, and a Spanish bench covered in hand-painted ceramic tiles. The interior showcases period furniture, Victorian artifacts, and rare oil paintings by Raja Ravi Varma.",
    "fullDescKn": "1884ರಲ್ಲಿ ಚಾಮರಾಜೇಂದ್ರ ಒಡೆಯರ್ ಅವರಿಂದ ಖರೀದಿಸಲ್ಪಟ್ಟ ಬೆಂಗಳೂರು ಅರಮನೆಯು ಇಂಗ್ಲೆಂಡಿನ ವಿಂಡ್ಸರ್ ಕ್ಯಾಸಲ್ ಮಾದರಿಯಲ್ಲಿ ನಿರ್ಮಿತವಾಗಿದೆ. ಮರದ ಕೆತ್ತನೆಗಳು, ಟ್ಯೂಡರ್ ಕಮಾನುಗಳು, ರಾಜಾ ರವಿವರ್ಮರ ಅಪರೂಪದ ತೈಲವರ್ಣ ಚಿತ್ರಗಳು ಮತ್ತು ರಾಜಮನೆತನದ ಆಯುಧಗಳು ಇಲ್ಲಿ ವೀಕ್ಷಣೆಗೆ ಲಭ್ಯವಿದೆ.",
    "history": "Built originally by Rev. J. Garrett in 1878 and acquired by the Royal House of Mysore in 1884.",
    "historyKn": "ರೆವ್. ಜೆ. ಗ್ಯಾರೆಟ್ ಅವರಿಂದ 1878 ರಲ್ಲಿ ಪ್ರಾರಂಭವಾಗಿ, ನಂತರ ಮೈಸೂರು ಸಂಸ್ಥಾನದ ಒಡೆಯರ್ ಒಡೆತನಕ್ಕೆ ಸೇರಿತು.",
    "image": "assets/images/landmarks/heritage/bangalore-palace.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 5:30 PM (Open daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ಸಂಜೆ 5:30 (ಪ್ರತಿದಿನ)",
      "fee": "₹250 (Indian citizens), ₹400 (Foreign tourists)",
      "feeKn": "₹250 (ಭಾರತೀಯರಿಗೆ), ₹400 (ವಿದೇಶಿಯರಿಗೆ)",
      "bestTime": "Morning 10:30 AM - 1:00 PM for photography",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 10:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 1:00 ಛಾಯಾಗ್ರಹಣಕ್ಕೆ ಉತ್ತಮ",
      "nearestMetro": "Cubbon Park Metro (Purple Line) - 2.5 km (Auto/Taxi available)",
      "nearestMetroKn": "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಮೆಟ್ರೋ - 2.5 ಕಿ.ಮೀ",
      "duration": "1.5 - 2 hours",
      "durationKn": "1.5 - 2 ಗಂಟೆಗಳು"
    },
    "rating": 4.7,
    "featured": true
  },
  {
    "id": "tipu-summer-palace",
    "name": "Tipu Sultan's Summer Palace",
    "kannadaName": "ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಬೇಸಿಗೆ ಅರಮನೆ",
    "category": "heritage-culture",
    "tags": [
      "Heritage",
      "Indo-Islamic",
      "Historic",
      "Chamrajpet"
    ],
    "neighbourhood": "Chamrajpet",
    "neighbourhoodKn": "ಚಾಮರಾಜಪೇಟೆ",
    "coordinates": {
      "lat": 12.959357,
      "lng": 77.573752
    },
    "shortDesc": "Exquisite two-story summer palace built completely out of carved French teakwood, fluted pillars, and cusped arches.",
    "shortDescKn": "ಸಂಪೂರ್ಣ ತೇಗದ ಮರದಿಂದ ನಿರ್ಮಿತವಾದ ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಎರಡು ಅಂತಸ್ತಿನ ಸುಂದರ ಬೇಸಿಗೆ ಅರಮನೆ ಮತ್ತು ಉದ್ಯಾನ.",
    "fullDesc": "Started by Nawab Hyder Ali and completed by Tipu Sultan in 1791, this two-story royal residence is a prime example of Indo-Islamic wooden architecture. The structure stands on a stone plinth with intricately carved teak pillars, fluted cusped arches, and floral wall frescoes. Tipu Sultan called it 'Rashk-e-Jannat' (Envy of Heaven). The ground floor houses an archaeological museum.",
    "fullDescKn": "ಹೈದರ್ ಅಲಿಯವರ ಕಾಲದಲ್ಲಿ ಪ್ರಾರಂಭವಾಗಿ 1791ರಲ್ಲಿ ಟಿಪ್ಪು ಸುಲ್ತಾನರಿಂದ ಪೂರ್ಣಗೊಂಡ ಈ ಕಟ್ಟಡವು ಸಂಪೂರ್ಣ ಕೆತ್ತನೆಯ ತೇಗದ ಮರದಿಂದ ನಿರ್ಮಾಣವಾಗಿದೆ. ಆಕರ್ಷಕ ಕಮಾನುಗಳು, ಬಣ್ಣದ ಮರದ ಕಂಬಗಳು ಹಾಗೂ ಮ್ಯೂಸಿಯಂನಲ್ಲಿ ಹಳೆಯ ದಾಖಲೆಗಳು ಮತ್ತು ಟಿಪ್ಪುವಿನ ಸಿಂಹಾಸನದ ಪ್ರತಿಕೃತಿ ಇವೆ.",
    "history": "Served as Tipu Sultan's summer retreat until his death in the Fourth Anglo-Mysore War in 1799.",
    "historyKn": "1791 ರಿಂದ 1799 ರವರೆಗೆ ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಆಡಳಿತ ಹಾಗೂ ಬೇಸಿಗೆಯ ಬಿಡಾರವಾಗಿ ಬಳಕೆಯಾಗಿತ್ತು.",
    "image": "assets/images/landmarks/heritage/tipu-summer-palace.jpg",
    "visitorInfo": {
      "timing": "8:30 AM - 5:30 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 8:30 ರಿಂದ ಸಂಜೆ 5:30 (ಪ್ರತಿದಿನ)",
      "fee": "₹20 (Indians), ₹250 (Foreigners)",
      "feeKn": "₹20 (ಭಾರತೀಯರಿಗೆ), ₹250 (ವಿದೇಶಿಯರಿಗೆ)",
      "bestTime": "Morning hours between 9:00 AM and 11:30 AM",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 9:00 ರಿಂದ 11:30 ರವರೆಗೆ",
      "nearestMetro": "Krishna Rajendra Market Metro (Green Line) - 400m",
      "nearestMetroKn": "ಕೆ.ಆರ್. ಮಾರ್ಕೆಟ್ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 400 ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": true
  },
  {
    "id": "bengaluru-fort",
    "name": "Bengaluru Fort (Delhi Gate)",
    "kannadaName": "ಬೆಂಗಳೂರು ಕೋಟೆ (ದೆಹಲಿ ಬಾಗಿಲು)",
    "category": "heritage-culture",
    "tags": [
      "Heritage",
      "Fort",
      "Kempe Gowda",
      "Kalasipalya"
    ],
    "neighbourhood": "Kalasipalya",
    "neighbourhoodKn": "ಕಲಾಸಿಪಾಳ್ಯ",
    "coordinates": {
      "lat": 12.962635,
      "lng": 77.575822
    },
    "shortDesc": "Granite bastion of the historic fort originally founded in 1537 by Kempe Gowda I, rebuilt in stone by Hyder Ali.",
    "shortDescKn": "1537ರಲ್ಲಿ ಕೆಂಪೇಗೌಡರು ಮಣ್ಣಿನಿಂದ ನಿರ್ಮಿಸಿ, ನಂತರ ಹೈದರ್ ಅಲಿ ಕಲ್ಲಿನಿಂದ ಪುನರ್ನಿರ್ಮಿಸಿದ ಐತಿಹಾಸಿಕ ಕೋಟೆ.",
    "fullDesc": "Bengaluru Fort marks the birthplace of urban Bangalore. Built as a mud fortress by Magadi Kempe Gowda I in 1537, it was transformed into a formidable oval granite fortification in 1761 by Hyder Ali. The remaining Delhi Gate bastion features monumental granite masonry, carved motifs of Sri Krishna and Ganesha, and arched guardrooms overlooking KR Market.",
    "fullDescKn": "ಬೆಂಗಳೂರು ನಗರದ ಉಗಮ ಸ್ಥಾನವಾದ ಈ ಕೋಟೆಯನ್ನು 1537ರಲ್ಲಿ ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡರು ಮಣ್ಣಿನಿಂದ ಕಟ್ಟಿಸಿದರು. ನಂತರ 1761ರಲ್ಲಿ ಹೈದರ್ ಅಲಿ ಗ್ರಾನೈಟ್ ಶಿಲೆಗಳಿಂದ ಭದ್ರಪಡಿಸಿದರು. ಇಲ್ಲಿರುವ ದೆಹಲಿ ಬಾಗಿಲಿನ ಕೆತ್ತನೆಗಳು, ಕಾವಲುಗಾರರ ಕೊಠಡಿಗಳು ನಗರದ ವೀರ ಇತಿಹಾಸವನ್ನು ಸಾರುತ್ತವೆ.",
    "history": "Site of the intense Siege of Bangalore during the Third Anglo-Mysore War in March 1791.",
    "historyKn": "1791ರ ಮೂರನೇ ಆಂಗ್ಲೋ-ಮೈಸೂರು ಯುದ್ಧದ ಪ್ರಮುಖ ಕದನ ನಡೆದ ಐತಿಹಾಸಿಕ ಸ್ಥಳ.",
    "image": "assets/images/landmarks/heritage/bengaluru-fort.jpg",
    "visitorInfo": {
      "timing": "8:30 AM - 5:30 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 8:30 ರಿಂದ ಸಂಜೆ 5:30 (ಪ್ರತಿದಿನ)",
      "fee": "₹25 (Indians), ₹300 (Foreigners)",
      "feeKn": "₹25 (ಭಾರತೀಯರಿಗೆ), ₹300 (ವಿದೇಶಿಯರಿಗೆ)",
      "bestTime": "Morning hours before market traffic peaks",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ ಮಾರುಕಟ್ಟೆ ದಟ್ಟಣೆ ಆರಂಭವಾಗುವ ಮುನ್ನ",
      "nearestMetro": "Krishna Rajendra Market Metro (Green Line) - 200m",
      "nearestMetroKn": "ಕೆ.ಆರ್. ಮಾರ್ಕೆಟ್ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 200 ಮೀ",
      "duration": "45 mins",
      "durationKn": "45 ನಿಮಿಷ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "cubbon-park",
    "name": "Cubbon Park (Sri Chamarajendra Park)",
    "kannadaName": "ಕಬ್ಬನ್ ಪಾರ್ಕ್ (ಶ್ರೀ ಚಾಮರಾಜೇಂದ್ರ ಒಡೆಯರ್ ಉದ್ಯಾನ)",
    "category": "nature-outdoors",
    "tags": [
      "Nature",
      "Park",
      "Walkway",
      "Heritage Trees",
      "Central Bengaluru"
    ],
    "neighbourhood": "Kasturba Road",
    "neighbourhoodKn": "ಕಸ್ತೂರಬಾ ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.976378,
      "lng": 77.592928
    },
    "shortDesc": "Bengaluru's green lung spread across 300 acres with over 6,000 trees, bamboo groves, and heritage colonial buildings.",
    "shortDescKn": "ಬೆಂಗಳೂರಿನ ಹಸಿರು ಶ್ವಾಸಕೋಶ, 300 ಎಕರೆ ವಿಸ್ತೀರ್ಣದ 6000ಕ್ಕೂ ಹೆಚ್ಚು ಮರಗಳಿರುವ ಸುಂದರ ಉದ್ಯಾನವನ.",
    "fullDesc": "Created in 1870 by Sir John Meade and named after Sir Mark Cubbon, this 300-acre park is the serene sanctuary in the heart of Bengaluru. Home to indigenous and exotic botanical species, bamboo avenues, lotus ponds, and sweeping lawns, it also houses heritage buildings like the red-brick State Central Library (Seshadri Iyer Memorial Hall) and High Court.",
    "fullDescKn": "1870ರಲ್ಲಿ ನಿರ್ಮಾಣಗೊಂಡ ಕಬ್ಬನ್ ಪಾರ್ಕ್ ನಗರದ ಹೃದಯಭಾಗದಲ್ಲಿದೆ. ಸಾವಿರಾರು ಬೃಹತ್ ಮರಗಳು, ಬಿದಿರಿನ ಪೊದೆಗಳು, ವಾಕಿಂಗ್ ಟ್ರ್ಯಾಕ್‌ಗಳು ಹಾಗೂ ಕೆಂಪು ಬಣ್ಣದ ಐತಿಹಾಸಿಕ ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯ (ಶೇಷಾದ್ರಿ ಅಯ್ಯರ್ ಭವನ) ಇಲ್ಲಿನ ಮುಖ್ಯ ಆಕರ್ಷಣೆ.",
    "history": "Originally established in 1870 under the Mysore State Administration; officially renamed Sri Chamarajendra Park in 1927.",
    "historyKn": "1870ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾಗಿ, 1927ರಲ್ಲಿ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಆಡಳಿತದಲ್ಲಿ ಶ್ರೀ ಚಾಮರಾಜೇಂದ್ರ ಒಡೆಯರ್ ಪಾರ್ಕ್ ಎಂದು ಮರುನಾಮಕರಣವಾಯಿತು.",
    "image": "assets/images/landmarks/nature/cubbon-park.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 7:00 PM (Walking open from 5:00 AM; Traffic closed on Sundays)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ ಸಂಜೆ 7:00 (ಭಾನುವಾರ ಸಂಪೂರ್ಣ ವಾಹನ ಮುಕ್ತ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Early morning 6:00 AM - 9:00 AM or peaceful evenings",
      "bestTimeKn": "ಮುಂಜಾನೆ 6:00 ರಿಂದ 9:00 ರ ವಾಕಿಂಗ್ ಅಥವಾ ಸಂಜೆಯ ವೇಳೆ",
      "nearestMetro": "Cubbon Park Metro / Vidhana Soudha Metro (Purple Line) - 50m",
      "nearestMetroKn": "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಮೆಟ್ರೋ / ವಿಧಾನ ಸೌಧ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 50 ಮೀ",
      "duration": "1.5 - 2.5 hours",
      "durationKn": "1.5 - 2.5 ಗಂಟೆಗಳು"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "bannerghatta-national-park",
    "name": "Bannerghatta Biological Park",
    "kannadaName": "ಬನ್ನೇರುಘಟ್ಟ ಜೈವಿಕ ಉದ್ಯಾನ",
    "category": "nature-outdoors",
    "tags": [
      "Nature",
      "Wildlife",
      "Safari",
      "Zoo",
      "Butterfly Park"
    ],
    "neighbourhood": "Bannerghatta",
    "neighbourhoodKn": "ಬನ್ನೇರುಘಟ್ಟ",
    "coordinates": {
      "lat": 12.800927,
      "lng": 77.577663
    },
    "shortDesc": "Premier wildlife sanctuary featuring open-vehicle tiger and lion safaris, butterfly conservatory, and zoo.",
    "shortDescKn": "ಹುಲಿ-ಸಿಂಹಗಳ ಜಂಗಲ್ ಸಫಾರಿ, ಚಿಟ್ಟೆಗಳ ಪಾರ್ಕ್ ಹಾಗೂ ಪ್ರಾಣಿಸಂಗ್ರಹಾಲಯ ಹೊಂದಿರುವ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನ.",
    "fullDesc": "Spread across southern Bangalore's forested hills, Bannerghatta Biological Park was founded in 1971. It features a thrilling Grand Safari where Bengal tigers, lions, bears, and Indian gaur roam in natural habitats, a dedicated circular Butterfly Park with 48 species, an elephant sanctuary, and a comprehensive zoo bordering the forests of Anekal.",
    "fullDescKn": "1971ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ಬನ್ನೇರುಘಟ್ಟ ಜೈವಿಕ ಉದ್ಯಾನವು ದಕ್ಷಿಣ ಬೆಂಗಳೂರಿನಲ್ಲಿದೆ. ಇಲ್ಲಿ ವನ್ಯಜೀವಿಗಳ ತೆರೆದ ವಾಹನ ಸಫಾರಿ, ದೇಶದ ಮೊದಲ ವರ್ಣರಂಜಿತ ಚಿಟ್ಟೆ ಪಾರ್ಕ್, ಆನೆಗಳ ಶಿಬಿರ ಹಾಗೂ ನೈಸರ್ಗಿಕ ಪ್ರಾಣಿಸಂಗ್ರಹಾಲಯವಿದೆ.",
    "history": "Declared a National Park in 1974; later designated as a biological park for wildlife conservation and education in 2002.",
    "historyKn": "1974ರಲ್ಲಿ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವೆಂದು ಘೋಷಿಸಲ್ಪಟ್ಟು, 2002ರಲ್ಲಿ ಜೈವಿಕ ಉದ್ಯಾನವಾಗಿ ಪುನರ್ವ್ಯವಸ್ಥೆಗೊಂಡಿತು.",
    "image": "assets/images/landmarks/nature/bannerghatta-national-park.jpg",
    "visitorInfo": {
      "timing": "9:30 AM - 5:00 PM (Closed on Tuesdays)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:30 ರಿಂದ ಸಂಜೆ 5:00 (ಮಂಗಳವಾರ ರಜೆ)",
      "fee": "₹80 (Zoo only); ₹350 (Zoo + Non-AC Safari); ₹550 (AC Safari)",
      "feeKn": "₹80 (ಪ್ರಾಣಿಸಂಗ್ರಹಾಲಯ); ₹350 (ಸಫಾರಿ ಸಹಿತ); ₹550 (ಎಸಿ ಸಫಾರಿ)",
      "bestTime": "Morning hours around 9:30 AM for active safari animal sightings",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 9:30ಕ್ಕೆ ಪ್ರಾಣಿಗಳ ಚುರುಕುತನವನ್ನು ವೀಕ್ಷಿಸಲು ಸೂಕ್ತ",
      "nearestMetro": "Jayadeva Metro / Silk Board (BMTC direct buses available from Majestic/Banashankari)",
      "nearestMetroKn": "ಮೆಜೆಸ್ಟಿಕ್/ಬನಶಂಕರಿಯಿಂದ ನೇರ ಬಿಎಂಟಿಸಿ ಬಸ್ ಸೌಲಭ್ಯವಿದೆ",
      "duration": "3 - 4 hours",
      "durationKn": "3 - 4 ಗಂಟೆಗಳು"
    },
    "rating": 4.6,
    "featured": true
  },
  {
    "id": "sankey-tank",
    "name": "Sankey Tank",
    "kannadaName": "ಸ್ಯಾಂಕಿ ಕೆರೆ",
    "category": "nature-outdoors",
    "tags": [
      "Nature",
      "Lake",
      "Promenade",
      "Sadashivanagar",
      "Bird Watching"
    ],
    "neighbourhood": "Sadashivanagar / Malleswaram",
    "neighbourhoodKn": "ಸದಾಶಿವನಗರ / ಮಲ್ಲೇಶ್ವರಂ",
    "coordinates": {
      "lat": 13.007623,
      "lng": 77.574675
    },
    "shortDesc": "Man-made lake constructed in 1882 featuring paved walking promenades, landscaped gardens, and calm sunset views.",
    "shortDescKn": "1882ರಲ್ಲಿ ನಿರ್ಮಾಣವಾದ ಮಾನವ ನಿರ್ಮಿತ ಕೆರೆ, ಸುಂದರ ವಾಕಿಂಗ್ ಪಾತ್ ಹಾಗೂ ಶಾಂತಿಯುತ ಸೂರ್ಯಾಸ್ತದ ನೋಟ.",
    "fullDesc": "Engineered in 1882 by Col. Richard Hieram Sankey of the Madras Sappers to secure Bangalore's water supply after the Great Famine of 1876, Sankey Tank covers 37 acres between Malleswaram and Sadashivanagar. Today it is a beloved green refuge with a 2-kilometer paved jogger's track, illuminated gardens, an island bird sanctuary, and pedal boating facilities.",
    "fullDescKn": "1876ರ ಬರಗಾಲದ ನಂತರ ಬೆಂಗಳೂರಿಗೆ ಕುಡಿಯುವ ನೀರು ಪೂರೈಸಲು ಬ್ರಿಟಿಷ್ ಇಂಜಿನಿಯರ್ ಕರ್ನಲ್ ರಿಚರ್ಡ್ ಹೈರಮ್ ಸ್ಯಾಂಕಿ 1882ರಲ್ಲಿ ಈ ಕೆರೆಯನ್ನು ನಿರ್ಮಿಸಿದರು. ಪ್ರಸ್ತುತ ಇದು ಮಲ್ಲೇಶ್ವರಂ ಹಾಗೂ ಸದಾಶಿವನಗರದ ಮಧ್ಯೆ ವಾಕಿಂಗ್, ಪಕ್ಷಿ ವೀಕ್ಷಣೆ ಹಾಗೂ ಬೋಟಿಂಗ್‌ಗೆ ಜನಪ್ರಿಯ ಸ್ಥಳವಾಗಿದೆ.",
    "history": "Constructed in 1882 as Gandhadhakoti Kere; designed to interconnect with Dharmambudhi and Millers tanks.",
    "historyKn": "1882ರಲ್ಲಿ ನಿರ್ಮಿತವಾದ ಈ ಕೆರೆಯು ನಗರದ ಪ್ರಾಚೀನ ಕೆರೆ ಜಾಲದ ಅವಿಭಾಜ್ಯ ಅಂಗವಾಗಿತ್ತು.",
    "image": "assets/images/landmarks/nature/sankey-tank.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 10:00 AM & 4:00 PM - 8:00 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 - 10:00 ಮತ್ತು ಸಂಜೆ 4:00 - 8:00 (ಪ್ರತಿದಿನ)",
      "fee": "Free Entry (Boating optional ₹40-₹60)",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ (ಬೋಟಿಂಗ್ ₹40-₹60)",
      "bestTime": "Sunset 5:30 PM - 6:45 PM for golden lake reflections",
      "bestTimeKn": "ಸಂಜೆ 5:30 ರಿಂದ 6:45 ರ ಸೂರ್ಯಾಸ್ತದ ಸಮಯ",
      "nearestMetro": "Sampige Road Metro / Sandal Soap Factory Metro (Green Line) - 1.2 km",
      "nearestMetroKn": "ಸಂಪಿಗೆ ರೋಡ್ ಮೆಟ್ರೋ / ಸ್ಯಾಂಡಲ್ ಸೋಪ್ ಫ್ಯಾಕ್ಟರಿ ಮೆಟ್ರೋ - 1.2 ಕಿ.ಮೀ",
      "duration": "1 - 1.5 hours",
      "durationKn": "1 - 1.5 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "ulsoor-lake",
    "name": "Ulsoor Lake (Halasuru Kere)",
    "kannadaName": "ಹಲಸೂರು ಕೆರೆ",
    "category": "nature-outdoors",
    "tags": [
      "Nature",
      "Historic Lake",
      "Halasuru",
      "Boating",
      "Jogging"
    ],
    "neighbourhood": "Halasuru",
    "neighbourhoodKn": "ಹಲಸೂರು",
    "coordinates": {
      "lat": 12.981845,
      "lng": 77.620215
    },
    "shortDesc": "Vast historic lake spanning 120 acres with lush wooded islands, constructed originally by Kempe Gowda II.",
    "shortDescKn": "ಕೆಂಪೇಗೌಡರ ಕಾಲದ 120 ಎಕರೆ ವಿಸ್ತಾರವಾದ ಐತಿಹಾಸಿಕ ಕೆರೆ, ನಡುಗಡ್ಡೆಗಳು ಮತ್ತು ಬೋಟಿಂಗ್ ಕೇಂದ್ರ.",
    "fullDesc": "Ulsoor Lake is one of Bengaluru's oldest and largest surviving water bodies, spanning over 120 acres. First excavated by Kempe Gowda II in the late 16th century and later expanded under Sir Lewin Bentham Bowring, the lake features picturesque forested islands, an open recreational walkway, and boating services operated by the Meg Centre and military authorities.",
    "fullDescKn": "16ನೇ ಶತಮಾನದಲ್ಲಿ ಎರಡನೇ ಕೆಂಪೇಗೌಡರಿಂದ ನಿರ್ಮಿಸಲ್ಪಟ್ಟ ಹಲಸೂರು ಕೆರೆ 120 ಎಕರೆ ವಿಸ್ತಾರವಾಗಿದೆ. ಈ ಕೆರೆಯಲ್ಲಿ ಹಚ್ಚಹಸಿರಿನ ನಡುಗಡ್ಡೆಗಳಿದ್ದು, ವಾಕಿಂಗ್, ಬೋಟಿಂಗ್ ಹಾಗೂ ವಿಶ್ರಾಂತಿಗೆ ಪೂರ್ವ ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿದೆ.",
    "history": "Excavated in the late 16th century by Kempe Gowda II; served as the water lifeline for Halasuru village and British cantonment.",
    "historyKn": "16ನೇ ಶತಮಾನದಲ್ಲಿ ನಿರ್ಮಾಣವಾಗಿ ನಂತರ ಬ್ರಿಟಿಷ್ ಕಂಟೋನ್ಮೆಂಟ್ ಅವಧಿಯಲ್ಲಿ ವಿಸ್ತರಣೆಗೊಂಡಿತು.",
    "image": "assets/images/landmarks/nature/ulsoor-lake.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 10:00 AM & 4:00 PM - 7:30 PM (Closed Wednesdays)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 - 10:00 ಮತ್ತು ಸಂಜೆ 4:00 - 7:30 (ಬುಧವಾರ ರಜೆ)",
      "fee": "Free Entry (Boating tickets extra)",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ (ಬೋಟಿಂಗ್ ಪ್ರತ್ಯೇಕ ಶುಲ್ಕ)",
      "bestTime": "Morning walk 6:30 AM - 8:30 AM",
      "bestTimeKn": "ಮುಂಜಾನೆ 6:30 ರಿಂದ 8:30 ರ ಸಮಯ",
      "nearestMetro": "Halasuru Metro / Trinity Metro (Purple Line) - 700m",
      "nearestMetroKn": "ಹಲಸೂರು ಮೆಟ್ರೋ / ಟ್ರಿನಿಟಿ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 700 ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "kr-market",
    "name": "Krishna Rajendra (KR) Market",
    "kannadaName": "ಕೃಷ್ಣ ರಾಜೇಂದ್ರ (ಸಿಟಿ) ಮಾರುಕಟ್ಟೆ",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Heritage Market",
      "Flower Market",
      "Wholesale",
      "Pete"
    ],
    "neighbourhood": "Kalasipalya / Pete",
    "neighbourhoodKn": "ಕಲಾಸಿಪಾಳ್ಯ / ಪೇಟೆ",
    "coordinates": {
      "lat": 12.963245,
      "lng": 77.576892
    },
    "shortDesc": "Asia's largest flower market and Bengaluru's legendary sensory bazaar brimming with marigolds, roses, and spices.",
    "shortDescKn": "ಏಷ್ಯಾದ ಅತಿ ದೊಡ್ಡ ಹೂವಿನ ಮಾರುಕಟ್ಟೆ, ಬೆಳಗಿನ ಸೂರ್ಯೋದಯದ ವೇಳೆಯ ಬಣ್ಣಬಣ್ಣದ ಹೂವುಗಳು ಮತ್ತು ಸಂಬಾರ ಪದಾರ್ಥಗಳ ತಾಣ.",
    "fullDesc": "Established in 1928 and named after Maharaja Krishna Raja Wadiyar IV, KR Market is an unmissable sensory phenomenon. Early every morning between 4:00 AM and 8:00 AM, farmers from across Karnataka pour into the lower circular atrium laden with gigantic baskets of orange marigolds, tuberoses, jasmine strings, and Dutch roses, alongside fresh vegetables, brassware, and dry spices.",
    "fullDescKn": "1928ರಲ್ಲಿ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಹೆಸರಿನಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆಯು ಏಷ್ಯಾದ ಪ್ರಸಿದ್ಧ ಹೂವಿನ ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಮುಂಜಾನೆ 4 ರಿಂದ 8 ಗಂಟೆಯವರೆಗೆ ಇಲ್ಲಿ ನಡೆಯುವ ಹೂವಿನ ವ್ಯಾಪಾರ, ಬಣ್ಣಬಣ್ಣದ ಸೇವಂತಿಗೆ, ಮಲ್ಲಿಗೆ, ಗುಲಾಬಿಗಳ ರಾಶಿ ಪ್ರವಾಸಿಗರಿಗೆ ಕಣ್ಮನ ಸೆಳೆಯುವ ಅನುಭವ ನೀಡುತ್ತದೆ.",
    "history": "Constructed on the battlefield of the 1791 Anglo-Mysore War; inaugurated as a modern municipal market in 1928.",
    "historyKn": "1791ರ ಕೋಟೆಯ ಯುದ್ಧಭೂಮಿ ಪ್ರದೇಶದಲ್ಲಿ 1928ರಲ್ಲಿ ಆಧುನಿಕ ಮಾರುಕಟ್ಟೆಯಾಗಿ ಸ್ಥಾಪನೆಯಾಯಿತು.",
    "image": "assets/images/landmarks/shopping/kr-market.jpg",
    "visitorInfo": {
      "timing": "4:00 AM - 10:00 PM (Flower auction peaks 5:00 AM - 8:00 AM)",
      "timingKn": "ಮುಂಜಾನೆ 4:00 ರಿಂದ ರಾತ್ರಿ 10:00 (ಹೂವಿನ ವ್ಯಾಪಾರ 5:00 - 8:00ಕ್ಕೆ ಉತ್ತುಂಗ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Dawn 5:30 AM - 7:30 AM for the flower market spectacle and photography",
      "bestTimeKn": "ಮುಂಜಾನೆ 5:30 ರಿಂದ 7:30 ರ ಸಮಯ ಛಾಯಾಗ್ರಹಣಕ್ಕೆ ಅತ್ಯುತ್ತಮ",
      "nearestMetro": "Krishna Rajendra Market Metro (Green Line) - 100m",
      "nearestMetroKn": "ಕೆ.ಆರ್. ಮಾರ್ಕೆಟ್ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 100 ಮೀ",
      "duration": "1.5 hours",
      "durationKn": "1.5 ಗಂಟೆ"
    },
    "rating": 4.7,
    "featured": true
  },
  {
    "id": "commercial-street",
    "name": "Commercial Street",
    "kannadaName": "ಕಮರ್ಷಿಯಲ್ ಸ್ಟ್ರೀಟ್",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Fashion",
      "Boutiques",
      "Tasker Town",
      "Cantonment"
    ],
    "neighbourhood": "Tasker Town / Shivajinagar",
    "neighbourhoodKn": "ಟಾಸ್ಕರ್ ಟೌನ್ / ಶಿವಾಜಿನಗರ",
    "coordinates": {
      "lat": 12.982314,
      "lng": 77.608712
    },
    "shortDesc": "Vibrant shopping destination renowned for ethnic fashion, fabrics, jewelry, shoes, and street bargains.",
    "shortDescKn": "ಫ್ಯಾಷನ್ ಉಡುಪುಗಳು, ಆಭರಣಗಳು, ಬಟ್ಟೆಗಳು ಹಾಗೂ ಪಾದರಕ್ಷೆಗಳಿಗೆ ಹೆಸರಾದ ಬೆಂಗಳೂರಿನ ಅತಿ ಜನಪ್ರಿಯ ಶಾಪಿಂಗ್ ರಸ್ತೆ.",
    "fullDesc": "Dating back to the British Cantonment era in the 1800s, Commercial Street in Tasker Town is one of Bangalore's most bustling pedestrian shopping districts. Intersected by labyrinthine alleys like Jeweller's Street and Narayana Pillai Street, it offers everything from ready-to-wear salwar suits, handcrafted silver jewelry, embroidered pashminas, to international fashion brands.",
    "fullDescKn": "ಬ್ರಿಟಿಷ್ ಕಂಟೋನ್ಮೆಂಟ್ ಕಾಲದಿಂದಲೂ ಪ್ರಸಿದ್ಧವಾಗಿರುವ ಕಮರ್ಷಿಯಲ್ ಸ್ಟ್ರೀಟ್ ಬೆಂಗಳೂರಿನ ಶಾಪಿಂಗ್ ಪ್ರಿಯರ ಸ್ವರ್ಗ. ಇಲ್ಲಿ ಬಟ್ಟೆಗಳು, ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪುಗಳು, ಬೆಳ್ಳಿಯ ಆಭರಣಗಳು, ಆಕರ್ಷಕ ಪಾದರಕ್ಷೆಗಳು ಮತ್ತು ಬೀದಿ ಬದಿಯ ತಿಂಡಿಗಳು ಲಭ್ಯವಿದೆ.",
    "history": "Developed during the early 19th century as the commercial spine serving the British Civil & Military Station.",
    "historyKn": "19ನೇ ಶತಮಾನದ ಆರಂಭದಲ್ಲಿ ಬ್ರಿಟಿಷ್ ಕಂಟೋನ್ಮೆಂಟ್ ನಾಗರಿಕರಿಗಾಗಿ ಪ್ರಮುಖ ವ್ಯಾಪಾರ ರಸ್ತೆಯಾಗಿ ಅಭಿವೃದ್ಧಿಗೊಂಡಿತು.",
    "image": "assets/images/landmarks/shopping/commercial-street.jpg",
    "visitorInfo": {
      "timing": "10:30 AM - 9:30 PM (All days)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:30 ರಿಂದ ರಾತ್ರಿ 9:30 (ಎಲ್ಲಾ ದಿನ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Afternoon 2:00 PM - 5:00 PM for comfortable browsing before evening crowds",
      "bestTimeKn": "ಮಧ್ಯಾಹ್ನ 2:00 ರಿಂದ 5:00 ರವರೆಗೆ ನಿರಾಳವಾಗಿ ಶಾಪಿಂಗ್ ಮಾಡಲು ಸೂಕ್ತ",
      "nearestMetro": "MG Road Metro / Cubbon Park Metro (Purple Line) - 1 km",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 1 ಕಿ.ಮೀ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.6,
    "featured": true
  },
  {
    "id": "chickpet-market",
    "name": "Chickpet Silk & Saree Market",
    "kannadaName": "ಚಿಕ್ಕಪೇಟೆ ರೇಷ್ಮೆ ಮಾರುಕಟ್ಟೆ",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Silk Sarees",
      "Historic Pete",
      "Wholesale",
      "Textiles"
    ],
    "neighbourhood": "Chickpet",
    "neighbourhoodKn": "ಚಿಕ್ಕಪೇಟೆ",
    "coordinates": {
      "lat": 12.968124,
      "lng": 77.575214
    },
    "shortDesc": "Bengaluru's 400-year-old historic textile hub famous for pure Mysore silk, Kanjivaram sarees, and wedding trousseaus.",
    "shortDescKn": "400 ವರ್ಷಗಳ ಇತಿಹಾಸವಿರುವ ರೇಷ್ಮೆ ಸೀರೆಗಳ ಸಗಟು ಮಾರುಕಟ್ಟೆ, ಮೈಸೂರು ಸಿಲ್ಕ್ ಮತ್ತು ಕಾಂಜೀವರಂ ಸೀರೆಗಳ ಖಜಾನೆ.",
    "fullDesc": "Founded in the 16th century under Kempe Gowda as one of the original market petes, Chickpet has been Bangalore's premier textile destination for centuries. Home to generations of master silk weavers and merchants, its historic lanes house thousands of saree shops selling genuine Mysore silks, bridal lehengas, gold zari textiles, and wholesale tailoring fabrics at unbeatable prices.",
    "fullDescKn": "ಕೆಂಪೇಗೌಡರ ಕಾಲದಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ಚಿಕ್ಕಪೇಟೆಯು 400ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳಿಂದ ರೇಷ್ಮೆ ವ್ಯಾಪಾರದ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿದೆ. ಅಸಲಿ ಮೈಸೂರು ರೇಷ್ಮೆ, ಬನಾರಸ್, ಕಾಂಜೀವರಂ ಸೀರೆಗಳು ಹಾಗೂ ಮದುವೆ ಶಾಪಿಂಗ್‌ಗೆ ಈ ಇತಿಹಾಸ ಪ್ರಸಿದ್ಧ ಮಾರುಕಟ್ಟೆ ಜನಪ್ರಿಯವಾಗಿದೆ.",
    "history": "One of the original designated commercial quarters established by Kempe Gowda I during the founding of Bangalore in 1537.",
    "historyKn": "1537ರಲ್ಲಿ ಕೆಂಪೇಗೌಡರು ಬೆಂಗಳೂರನ್ನು ಕಟ್ಟಿದಾಗ ವ್ಯಾಪಾರಕ್ಕಾಗಿ ರೂಪಿಸಿದ ಮೂಲ ಪೇಟೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
    "image": "assets/images/landmarks/shopping/chickpet-market.jpg",
    "visitorInfo": {
      "timing": "10:30 AM - 9:00 PM (Most stores closed on Sunday afternoons)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:30 ರಿಂದ ರಾತ್ರಿ 9:00 (ಭಾನುವಾರ ಮಧ್ಯಾಹ್ನ ಕೆಲವು ಅಂಗಡಿಗಳು ಮುಚ್ಚಿರುತ್ತವೆ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Weekdays 11:30 AM - 3:00 PM to avoid heavy street congestion",
      "bestTimeKn": "ವಾರದ ದಿನಗಳಲ್ಲಿ ಬೆಳಗ್ಗೆ 11:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 3:00 ರವರೆಗೆ",
      "nearestMetro": "Chickpete Metro (Green Line) - 150m",
      "nearestMetroKn": "ಚಿಕ್ಕಪೇಟೆ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 150 ಮೀ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "gandhi-bazaar-market",
    "name": "Gandhi Bazaar Traditional Market",
    "kannadaName": "ಗಾಂಧಿ ಬಜಾರ್ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರುಕಟ್ಟೆ",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Heritage",
      "Basavanagudi",
      "Flowers",
      "Culture"
    ],
    "neighbourhood": "Basavanagudi",
    "neighbourhoodKn": "ಬಸವನಗುಡಿ",
    "coordinates": {
      "lat": 12.944812,
      "lng": 77.571923
    },
    "shortDesc": "The quintessential old-Bangalore heritage high street lined with jasmine flowers, plantain leaves, spices, and coffee.",
    "shortDescKn": "ಹಳೆ ಬೆಂಗಳೂರಿನ ಸೊಗಡನ್ನು ಉಳಿಸಿಕೊಂಡಿರುವ ಪ್ರಸಿದ್ಧ ಮಾರುಕಟ್ಟೆ ಬೀದಿ, ಹೂವು, ಹಣ್ಣು, ವೀಳ್ಯದೆಲೆ ಹಾಗೂ ಫಿಲ್ಟರ್ ಕಾಫಿಯ ತಾಣ.",
    "fullDesc": "Gandhi Bazaar in Basavanagudi is the beating cultural heart of old Bengaluru. Under the shade of sprawling rain trees, traditional vendor stalls overflow with fresh flowers, betel leaves, sandalwood items, puja brass, and local snacks. It is also home to legendary South Indian literary haunts, heritage bookstores, and the iconic Vidyarthi Bhavan eatery.",
    "fullDescKn": "ಬಸವನಗುಡಿಯ ಗಾಂಧಿ ಬಜಾರ್ ಹಳೆ ಬೆಂಗಳೂರಿನ ಸಾಂಸ್ಕೃತಿಕ ಹೆಗ್ಗುರುತಾಗಿದೆ. ಮರಗಳ ನೆರಳಿನಲ್ಲಿ ಹೂವಿನ ಅಂಗಡಿಗಳು, ಪೂಜಾ ಸಾಮಗ್ರಿಗಳು, ಸಾಹಿತ್ಯಿಕ ಚರ್ಚೆಗಳು ಹಾಗೂ ಸಮೀಪದ ವಿದ್ಯಾರ್ಥಿ ಭವನದ ಮಸಾಲೆ ದೋಸೆಯ ಪರಿಮಳ ಇಲ್ಲಿನ ವೈಶಿಷ್ಟ್ಯ.",
    "history": "Developed during the early 1900s as the primary marketplace of the historic Basavanagudi residential extension.",
    "historyKn": "20ನೇ ಶತಮಾನದ ಆರಂಭದಲ್ಲಿ ಬಸವನಗುಡಿ ಬಡಾವಣೆಯ ಪ್ರಮುಖ ವಾಣಿಜ್ಯ ಕೇಂದ್ರವಾಗಿ ರೂಪುಗೊಂಡಿತು.",
    "image": "assets/images/landmarks/shopping/gandhi-bazaar.jpg",
    "visitorInfo": {
      "timing": "6:30 AM - 9:30 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:30 ರಿಂದ ರಾತ್ರಿ 9:30 (ಪ್ರತಿದಿನ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Morning 7:30 AM - 10:00 AM combined with breakfast at Vidyarthi Bhavan",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 7:30 ರಿಂದ 10:00, ತಿಂಡಿಯೊಂದಿಗೆ ಮಾರುಕಟ್ಟೆ ವೀಕ್ಷಣೆ",
      "nearestMetro": "National College Metro / Lalbagh Metro (Green Line) - 900m",
      "nearestMetroKn": "ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್ ಮೆಟ್ರೋ / ಲಾಲ್‌ಬಾಗ್ ಮೆಟ್ರೋ - 900 ಮೀ",
      "duration": "1 - 2 hours",
      "durationKn": "1 - 2 ಗಂಟೆ"
    },
    "rating": 4.7,
    "featured": true
  },
  {
    "id": "iskcon-temple",
    "name": "ISKCON Temple",
    "kannadaName": "ಇಸ್ಕಾನ್ ದೇವಸ್ಥಾನ",
    "category": "temples-spirituality",
    "tags": [
      "Temple",
      "Spiritual",
      "Rajajinagar",
      "Krishna",
      "Architecture"
    ],
    "neighbourhood": "Rajajinagar",
    "neighbourhoodKn": "ರಾಜಾಜಿನಗರ",
    "coordinates": {
      "lat": 13.009814,
      "lng": 77.551097
    },
    "shortDesc": "Large Krishna temple and cultural centre.",
    "shortDescKn": "ದೊಡ್ಡ ಕೃಷ್ಣ ದೇವಾಲಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ.",
    "fullDesc": "Located in Rajajinagar, ISKCON Sri Radha Krishna Temple is a grand Dravidian-style structure with golden towers. The temple complex has six shrines including Radha-Krishna and Krishna-Balarama. Devotees can witness daily prayers, bhajans, and cultural activities. The temple also has a museum, a Vedic library, and a large food court serving prasadam. It is one of the most visited spiritual landmarks in Bangalore.",
    "fullDescKn": "ರಾಜಾಜಿನಗರದಲ್ಲಿರುವ ಇಸ್ಕಾನ್ ಶ್ರೀ ರಾಧಾ-ಕೃಷ್ಣ ದೇವಸ್ಥಾನವು ಡ್ರಾವಿಡ ಶೈಲಿಯ ಅದ್ಭುತ ಕಟ್ಟಡವಾಗಿದೆ. ಇಲ್ಲಿ ಚಿನ್ನದ ಗೋಪುರಗಳು ಮತ್ತು ಆರು ದೇವರ ಸನ್ನಿಧಿಗಳು ಇವೆ. ಪ್ರತಿದಿನ ಪೂಜೆ, ಭಜನೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ದೇವಸ್ಥಾನದಲ್ಲಿ ಸಂಗ್ರಹಾಲಯ, ವೇದ ಗ್ರಂಥಾಲಯ ಮತ್ತು ಪ್ರಸಾದವನ್ನು ನೀಡುವ ದೊಡ್ಡ ಆಹಾರ ಮಂದಿರವಿದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ಆಧ್ಯಾತ್ಮಿಕ ಸ್ಥಳಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/temples/tem1.jpg",
    "visitorInfo": {
      "timing": "4:15 AM - 5:00 AM & 7:15 AM - 1:00 PM & 4:15 PM - 8:20 PM",
      "timingKn": "ಮುಂಜಾನೆ 4:15 - 5:00, ಬೆಳಗ್ಗೆ 7:15 - ಮಧ್ಯಾಹ್ನ 1:00, ಸಂಜೆ 4:15 - ರಾತ್ರಿ 8:20",
      "fee": "Free Entry (Special Darshan passes available)",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ (ವಿಶೇಷ ದರ್ಶನ ಪಾಸ್ ಲಭ್ಯ)",
      "bestTime": "Morning Mangala Aarti (4:15 AM) or evening Aarti",
      "bestTimeKn": "ಮುಂಜಾನೆ ಮಂಗಳಾರತಿ ಅಥವಾ ಸಂಜೆಯ ದೀಪೋತ್ಸವ",
      "nearestMetro": "Mahalakshmi Metro / Sandal Soap Factory Metro (Green Line) - 500m",
      "nearestMetroKn": "ಮಹಾಲಕ್ಷ್ಮಿ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 500 ಮೀ",
      "duration": "1.5 - 2 hours",
      "durationKn": "1.5 - 2 ಗಂಟೆಗಳು"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "bull-temple",
    "name": "Bull Temple",
    "kannadaName": "ಬುಲ್ ದೇವಾಲಯ",
    "category": "temples-spirituality",
    "tags": [
      "Temple",
      "Historic",
      "Basavanagudi",
      "Kempe Gowda",
      "Nandi"
    ],
    "neighbourhood": "Basavanagudi",
    "neighbourhoodKn": "ಬಸವನಗುಡಿ",
    "coordinates": {
      "lat": 12.942361,
      "lng": 77.567824
    },
    "shortDesc": "Historic Nandi statue at Basavanagudi.",
    "shortDescKn": "ಬಸವನಗುಡಿ ನಂದಿ ಪ್ರತಿಮೆ.",
    "fullDesc": "Built by Kempe Gowda, the Bull Temple in Basavanagudi is dedicated to Nandi, the vehicle of Lord Shiva. The temple houses a 15-foot-high monolithic Nandi idol carved out of a single rock. It is one of the largest Nandi statues in the world. Every year, the famous Kadalekai Parishe (Groundnut Festival) attracts thousands of devotees. The temple is both a religious and cultural landmark of Bangalore.",
    "fullDescKn": "ಬಸವನಗುಡಿಯಲ್ಲಿ ಕೆಂಪೇಗೌಡರು ಕಟ್ಟಿಸಿದ ಬುಲ್ ದೇವಾಲಯವು ಶಿವನ ವಾಹನ ನಂದಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇಲ್ಲಿ 15 ಅಡಿ ಎತ್ತರದ ಏಕಶಿಲಾ ನಂದಿ ಮೂರ್ತಿಯಿದೆ. ಇದು ಜಗತ್ತಿನ ಅತಿ ದೊಡ್ಡ ನಂದಿ ಪ್ರತಿಮೆಗಳಲ್ಲೊಂದು. ಪ್ರತಿವರ್ಷ ನಡೆಯುವ ಕಡಲೆಕಾಯಿ ಪರಿಷೆಯ ಸಮಯದಲ್ಲಿ ಸಾವಿರಾರು ಭಕ್ತರು ಇಲ್ಲಿ ಸೇರುತ್ತಾರೆ. ಇದು ಧಾರ್ಮಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಮಹತ್ವವನ್ನು ಹೊಂದಿದ ಸ್ಥಳವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/temples/tem2.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 1:30 PM & 3:30 PM - 8:30 PM",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 - ಮಧ್ಯಾಹ್ನ 1:30 ಮತ್ತು ಮಧ್ಯಾಹ್ನ 3:30 - ರಾತ್ರಿ 8:30",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Morning hours, or during the annual Kadalekai Parishe festival",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ ಅಥವಾ ವಾರ್ಷಿಕ ಕಡಲೆಕಾಯಿ ಪರಿಷೆಯ ಸಮಯದಲ್ಲಿ",
      "nearestMetro": "National College Metro (Green Line) - 1.2 km",
      "nearestMetroKn": "ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 1.2 ಕಿ.ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.7,
    "featured": true
  },
  {
    "id": "banashankari-temple",
    "name": "Banashankari Temple",
    "kannadaName": "ಬನಶಂಕರಿ ದೇವಾಲಯ",
    "category": "temples-spirituality",
    "tags": [
      "Temple",
      "Historic",
      "Banashankari",
      "Goddess"
    ],
    "neighbourhood": "Banashankari",
    "neighbourhoodKn": "ಬನಶಂಕರಿ",
    "coordinates": {
      "lat": 12.915234,
      "lng": 77.573612
    },
    "shortDesc": "Temple dedicated to Goddess Banashankari.",
    "shortDescKn": "ಬನಶಂಕರಿ ದೇವಿಗೆ ಸಮರ್ಪಿತ ದೇವಸ್ಥಾನ.",
    "fullDesc": "Banashankari Temple is a historic shrine located on Kanakapura Road in Bangalore. It is dedicated to Goddess Banashankari, an incarnation of Goddess Parvati. The temple is unique because special rituals and poojas are performed during Rahukala time, unlike most temples. Thousands of devotees gather here during the Banashankari Jatre festival. It is one of the most powerful Shakti temples in Bangalore.",
    "fullDescKn": "ಕನಕಪುರ ರಸ್ತೆಯಲ್ಲಿರುವ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನವು ಪಾರ್ವತಿಯ ಅವತಾರವಾದ ಬನಶಂಕರಿ ದೇವಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇಲ್ಲಿ ವಿಶೇಷವಾಗಿ ರಾಹುಕಾಲದ ಸಮಯದಲ್ಲಿ ಪೂಜೆ ನಡೆಯುವುದು ಇದರ ವೈಶಿಷ್ಟ್ಯವಾಗಿದೆ. ಪ್ರತಿವರ್ಷ ಬನಶಂಕರಿ ಜಾತ್ರೆಯಲ್ಲಿ ಸಾವಿರಾರು ಭಕ್ತರು ಭಾಗವಹಿಸುತ್ತಾರೆ. ಈ ದೇವಸ್ಥಾನವು ಶಕ್ತಿ ಪೂಜೆಯ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಆಧ್ಯಾತ್ಮಿಕ ತಾಣವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/temples/tem6.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 1:00 PM & 4:30 PM - 8:30 PM (Special Rahukala pooja on Tuesdays/Fridays)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 - ಮಧ್ಯಾಹ್ನ 1:00 ಮತ್ತು ಸಂಜೆ 4:30 - ರಾತ್ರಿ 8:30",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Tuesday and Friday Rahukala for special lamp offerings",
      "bestTimeKn": "ಮಂಗಳವಾರ ಮತ್ತು ಶುಕ್ರವಾರದ ರಾಹುಕಾಲದ ಪೂಜೆ",
      "nearestMetro": "Banashankari Metro (Green Line) - 100m",
      "nearestMetroKn": "ಬನಶಂಕರಿ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 100 ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "dodda-ganapathi-temple",
    "name": "Dodda Ganapathi Temple",
    "kannadaName": "ದೊಡ್ಡ ಗಣಪತಿ ದೇವಾಲಯ",
    "category": "temples-spirituality",
    "tags": [
      "Temple",
      "Historic",
      "Basavanagudi",
      "Ganesha",
      "Kempe Gowda"
    ],
    "neighbourhood": "Basavanagudi",
    "neighbourhoodKn": "ಬಸವನಗುಡಿ",
    "coordinates": {
      "lat": 12.942912,
      "lng": 77.567945
    },
    "shortDesc": "Home to a huge Ganesha idol.",
    "shortDescKn": "ದೊಡ್ಡ ಗಣೇಶ ವಿಗ್ರಹದ ಸ್ಥಳ.",
    "fullDesc": "Dodda Ganapathi Temple, located in Basavanagudi, is dedicated to Lord Ganesha. The temple is famous for its giant idol of Ganesha that is about 18 feet high and 16 feet wide. The idol is decorated with butter (Benne Alankara) during special occasions, attracting thousands of devotees. The temple becomes a hub of celebrations during Ganesh Chaturthi. It is one of the most visited Ganesha temples in Bangalore.",
    "fullDescKn": "ಬಸವನಗುಡಿಯಲ್ಲಿ ಇರುವ ದೊಡ್ಡ ಗಣಪತಿ ದೇವಾಲಯವು ಗಣೇಶನಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇಲ್ಲಿ 18 ಅಡಿ ಎತ್ತರ ಮತ್ತು 16 ಅಡಿ ಅಗಲದ ಭವ್ಯ ಗಣೇಶನ ವಿಗ್ರಹವಿದೆ. ವಿಶೇಷ ದಿನಗಳಲ್ಲಿ ಈ ವಿಗ್ರಹವನ್ನು ಬೆಣ್ಣೆಯಿಂದ ಅಲಂಕರಿಸಲಾಗುತ್ತದೆ. ಗಣೇಶ ಚತುರ್ಥಿಯ ಸಂದರ್ಭದಲ್ಲಿ ಇಲ್ಲಿ ಭಕ್ತರ ದೊಡ್ಡ ಗುಂಪು ಸೇರುತ್ತದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಗಣೇಶ ದೇವಸ್ಥಾನಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/temples/tem3.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 12:30 PM & 5:30 PM - 9:00 PM",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 - ಮಧ್ಯಾಹ್ನ 12:30 ಮತ್ತು ಸಂಜೆ 5:30 - ರಾತ್ರಿ 9:00",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Morning during butter decoration (Benne Alankara)",
      "bestTimeKn": "ಬೆಣ್ಣೆ ಅಲಂಕಾರದ ಸಮಯದಲ್ಲಿ ಬೆಳಗ್ಗೆ",
      "nearestMetro": "National College Metro (Green Line) - 1.2 km",
      "nearestMetroKn": "ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್ ಮೆಟ್ರೋ - 1.2 ಕಿ.ಮೀ",
      "duration": "45 mins",
      "durationKn": "45 ನಿಮಿಷ"
    },
    "rating": 4.8,
    "featured": false
  },
  {
    "id": "gavi-gangadhareshwara-temple",
    "name": "Gavi Gangadhareshwara",
    "kannadaName": "ಗವಿ ಗಂಗಾಧರೇಶ್ವರ",
    "category": "temples-spirituality",
    "tags": [
      "Temple",
      "Cave Temple",
      "Solstice Phenomenon",
      "Kempe Gowda",
      "Heritage"
    ],
    "neighbourhood": "Gavipuram / Kempegowda Nagar",
    "neighbourhoodKn": "ಗವಿಪುರಂ / ಕೆಂಪೇಗೌಡ ನಗರ",
    "coordinates": {
      "lat": 12.949823,
      "lng": 77.560124
    },
    "shortDesc": "Rock-cut cave temple with ancient sculptures.",
    "shortDescKn": "ಗುಹಾ ದೇವಾಲಯ ಮತ್ತು ಶಿಲ್ಪಗಳು.",
    "fullDesc": "Gavi Gangadhareshwara Temple in Gavipuram is a unique rock-cut cave temple dedicated to Lord Shiva. The temple is known for its monolithic stone pillars and ancient sculptures. On Makar Sankranti, sunlight passes exactly through the temple arch to illuminate the deity, showing the brilliance of ancient architecture. Devotees and history lovers visit in large numbers. It is one of the oldest temples in Bangalore.",
    "fullDescKn": "ಗವಿಪುರದಲ್ಲಿರುವ ಗವಿ ಗಂಗಾಧರೇಶ್ವರ ದೇವಸ್ಥಾನವು ಶಿವನಿಗೆ ಸಮರ್ಪಿತವಾದ ಗುಹಾ ದೇವಾಲಯವಾಗಿದೆ. ಇದು ಏಕಶಿಲಾ ಸ್ತಂಭಗಳು ಮತ್ತು ಪುರಾತನ ಶಿಲ್ಪಗಳಿಂದ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಪ್ರತಿವರ್ಷ ಮಕರ ಸಂಕ್ರಾಂತಿಯಂದು ಸೂರ್ಯನ ಬೆಳಕು ದೇವರ ವಿಗ್ರಹದ ಮೇಲೆ ಬೀಳುವ ಅದ್ಭುತ ಇಲ್ಲಿ ಕಾಣಬಹುದು. ಅನೇಕ ಭಕ್ತರು ಮತ್ತು ಇತಿಹಾಸ ಪ್ರಿಯರು ಇಲ್ಲಿ ಭೇಟಿ ನೀಡುತ್ತಾರೆ. ಇದು ಬೆಂಗಳೂರಿನ ಪುರಾತನ ದೇವಾಲಯಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/temples/tem5.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 12:30 PM & 6:00 PM - 8:30 PM",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 - ಮಧ್ಯಾಹ್ನ 12:30 ಮತ್ತು ಸಂಜೆ 6:00 - ರಾತ್ರಿ 8:30",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Makara Sankranti (Jan 14/15) for the miraculous solar phenomenon",
      "bestTimeKn": "ಮಕರ ಸಂಕ್ರಾಂತಿಯ ದಿನ ಸೂರ್ಯರಶ್ಮಿ ಸ್ಪರ್ಶದ ಅದ್ಭುತ ವೀಕ್ಷಣೆ",
      "nearestMetro": "South End Circle Metro (Green Line) - 2 km",
      "nearestMetroKn": "ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್ ಮೆಟ್ರೋ - 2 ಕಿ.ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "kote-venkataramana-temple",
    "name": "Kote Venkataramana",
    "kannadaName": "ಕೋಟೆ ವೆಂಕಟರಮಣ",
    "category": "temples-spirituality",
    "tags": [
      "Temple",
      "17th Century",
      "Dravidian",
      "Chikkadevaraja Wadiyar",
      "Fort"
    ],
    "neighbourhood": "Kalasipalya / Pete",
    "neighbourhoodKn": "ಕಲಾಸಿಪಾಳ್ಯ / ಪೇಟೆ",
    "coordinates": {
      "lat": 12.960234,
      "lng": 77.574123
    },
    "shortDesc": "Historic temple near Bangalore Fort.",
    "shortDescKn": "ಬೆಂಗಳೂರು ಕೋಟೆಯ ಹತ್ತಿರದ ದೇವಾಲಯ.",
    "fullDesc": "Kote Venkataramana Temple is an old shrine located near the Bangalore Fort. It is dedicated to Lord Venkataramana, a form of Vishnu. The temple reflects Vijayanagara-style architecture with intricate carvings and a tall gopuram. It is closely connected to the history of Kempe Gowda and old Bangalore. Devotees visit regularly for prayers and religious ceremonies. It stands as a symbol of Bangalore’s rich heritage.",
    "fullDescKn": "ಬೆಂಗಳೂರು ಕೋಟೆಯ ಹತ್ತಿರ ಇರುವ ಕೋಟೆ ವೆಂಕಟರಮಣ ದೇವಸ್ಥಾನವು ವಿಷ್ಣುವಿನ ರೂಪವಾದ ವೆಂಕಟರಮಣನಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇದು ವಿಜಯನಗರ ಶೈಲಿಯ ವಾಸ್ತುಶಿಲ್ಪವನ್ನು ಹೊಂದಿದ್ದು, ಅದ್ಭುತ ಶಿಲ್ಪಕಲೆ ಮತ್ತು ಗೋಪುರವನ್ನು ಒಳಗೊಂಡಿದೆ. ಕೆಂಪೇಗೌಡರ ಕಾಲದ ಇತಿಹಾಸದೊಂದಿಗೆ ಇದು ಆಳವಾಗಿ ಸಂಪರ್ಕ ಹೊಂದಿದೆ. ಪ್ರತಿದಿನ ಭಕ್ತರು ಪೂಜೆಗಾಗಿ ಇಲ್ಲಿ ಬರುತ್ತಾರೆ. ಇದು ಬೆಂಗಳೂರಿನ ಹೆರಿಟೇಜ್ ಚಿಹ್ನೆಯಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/temples/tem4.jpg",
    "visitorInfo": {
      "timing": "8:00 AM - 12:00 PM & 6:00 PM - 8:30 PM",
      "timingKn": "ಬೆಳಗ್ಗೆ 8:00 - ಮಧ್ಯಾಹ್ನ 12:00 ಮತ್ತು ಸಂಜೆ 6:00 - ರಾತ್ರಿ 8:30",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Vaikunta Ekadashi and morning pujas",
      "bestTimeKn": "ವೈಕುಂಠ ಏಕಾದಶಿ ಹಾಗೂ ಮುಂಜಾನೆಯ ಪೂಜೆಗಳು",
      "nearestMetro": "Krishna Rajendra Market Metro (Green Line) - 350m",
      "nearestMetroKn": "ಕೆ.ಆರ್. ಮಾರ್ಕೆಟ್ ಮೆಟ್ರೋ - 350 ಮೀ",
      "duration": "45 mins",
      "durationKn": "45 ನಿಮಿಷ"
    },
    "rating": 4.7,
    "featured": false
  },
  {
    "id": "infosys-electronic-city",
    "name": "Infosys",
    "kannadaName": "ಇನ್ಫೋಸಿಸ್",
    "category": "technology-innovation",
    "tags": [
      "Tech",
      "IT Campus",
      "Electronic City",
      "Global Leader"
    ],
    "neighbourhood": "Electronic City Phase 1",
    "neighbourhoodKn": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ ಹಂತ 1",
    "coordinates": {
      "lat": 12.849123,
      "lng": 77.663412
    },
    "shortDesc": "Major IT services company.",
    "shortDescKn": "ಪ್ರಮುಖ ಐಟಿ ಸಂಸ್ಥೆ.",
    "fullDesc": "Infosys is a global leader in IT services with deep roots in Bangalore. Its campuses host large teams focused on software development, consulting, and technology services for clients worldwide. The company runs training programs and innovation labs that help upskill fresh graduates and employees. Infosys works across digital transformation, automation, and enterprise solutions. Thousands of professionals are employed here, making it a major part of the city’s tech ecosystem.",
    "fullDescKn": "ಇನ್ಫೋಸಿಸ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಮೂಲಹೊಂದಿದ ಜಾಗತಿಕ ಮಟ್ಟದ ಐಟಿ ಸೇವಾ ಸಂಸ್ಥೆಯಾಗಿದೆ. ಇದರ ಕ್ಯಾಂಪಸ್‌ಗಳಲ್ಲಿ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ, ಸಲಹಾ ಸೇವೆಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ತಂಡಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಹೊಸ ಪದವೀಧರರು ಮತ್ತು ಸಿಬ್ಬಂದಿಗೆ ತರಬೇತಿ ಮತ್ತು ನವೀನತೆ ಲ್ಯಾಬ್‌ಗಳು ದೊರೆಯುತ್ತವೆ. ಕಂಪನಿ ಡಿಜಿಟಲ್ ಪರಿವರ್ತನೆ, ಸ್ವಯಂಚಾಲನೆ ಮತ್ತು ಎಂಟರ್‌ಪ್ರೈಸ್ ಪರಿಹಾರಗಳಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಬೆಂಗಳೂರಿನ ಪ್ರವೃತ್ತಿ ತಂತ್ರಜ್ಞಾನ ಪರಿಸರದಲ್ಲಿ ಇದು ಪ್ರಮುಖ ಉದ್ಯೋಗದಾಯಕವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/it/it1.jpg",
    "visitorInfo": {
      "timing": "9:00 AM - 6:00 PM (Authorized visitors & employees only)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00 (ಅಧಿಕೃತ ಸಂದರ್ಶಕರಿಗೆ ಮಾತ್ರ)",
      "fee": "Prior corporate registration required",
      "feeKn": "ಕಾರ್ಪೊರೇಟ್ ನೋಂದಣಿ ಅಗತ್ಯ",
      "bestTime": "Weekdays during business hours",
      "bestTimeKn": "ವಾರದ ದಿನಗಳಲ್ಲಿ ಕಚೇರಿ ವೇಳೆಯಲ್ಲಿ",
      "nearestMetro": "Electronic City Metro (Yellow Line)",
      "nearestMetroKn": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ ಮೆಟ್ರೋ (ಯೆಲ್ಲೋ ಲೈನ್)",
      "duration": "1 - 2 hours",
      "durationKn": "1 - 2 ಗಂಟೆ"
    },
    "rating": 4.7,
    "featured": true
  },
  {
    "id": "wipro-sarjapur",
    "name": "Wipro",
    "kannadaName": "ವಿಪ್ರೊ",
    "category": "technology-innovation",
    "tags": [
      "Tech",
      "IT Campus",
      "Sarjapur",
      "Innovation"
    ],
    "neighbourhood": "Sarjapur Road / Doddakannelli",
    "neighbourhoodKn": "ಸರ್ಜಾಪುರ ರಸ್ತೆ / ದೊಡ್ಡಕನ್ನಹಳ್ಳಿ",
    "coordinates": {
      "lat": 12.912412,
      "lng": 77.685912
    },
    "shortDesc": "IT services and consulting.",
    "shortDescKn": "ಐಟಿ ಸೇವೆಗಳು ಮತ್ತು ಸಲಹೆ.",
    "fullDesc": "Wipro is a major IT and consulting firm with a strong presence in Bangalore. It delivers services in cloud, engineering, IT consulting and business process solutions for global clients. The company runs sizable development centers that focus on product engineering and enterprise projects. Wipro also invests in sustainability programs, skill development and collaborations with academia. Many local professionals join Wipro for diverse project experience and career growth.",
    "fullDescKn": "ವಿಪ್ರೊ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಬಲವಾದ ನೆಲೆ ಹೊಂದಿರುವ ಪ್ರಮುಖ ಐಟಿ ಹಾಗೂ ಸಲಹಾ ಸಂಸ್ಥೆ. ಇದು ಕ್ಲೌಡ್, ಎಂಜಿನಿಯರಿಂಗ್, ಐಟಿ ಸಲಹೆ ಮತ್ತು ವ್ಯವಹಾರ ಪ್ರಕ್ರಿಯೆ ಪರಿಹಾರಗಳನ್ನು ಜಾಗತಿಕ ಗ್ರಾಹಕರಿಗೆ ನೀಡುತ್ತದೆ. ದೊಡ್ಡ ಡೆವಲಪ್‌ಮೆಂಟ್ ಕೇಂದ್ರಗಳಲ್ಲಿ ಉತ್ಪನ್ನ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಎಂಟರ್‌ಪ್ರೈಸ್ ಯೋಜನೆಗಳ ಮೇಲೆ ಕೆಲಸ ನಡೆಯುತ್ತದೆ. ವಿಪ್ರೊ ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ, ಪರಿಸರ ಪದক্ষেপ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಸಹಯೋಗಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತದೆ. ಹಲವು ವೃತ್ತಿಪರರು ವೈವಿಧ್ಯಮಯ ಪ್ರಾಜೆಕ್ಟ್ ಅನುಭವಕ್ಕಾಗಿ ವಿಪ್ರೊವನ್ನು ಆಯ್ಕೆಮಾಡುತ್ತಾರೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/it/it2.jpg",
    "visitorInfo": {
      "timing": "9:00 AM - 6:00 PM (Official entry only)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00 (ಅಧಿಕೃತ ಪ್ರವೇಶ)",
      "fee": "Corporate visitor badge required",
      "feeKn": "ಕಾರ್ಪೊರೇಟ್ ಪಾಸ್ ಅಗತ್ಯ",
      "bestTime": "Business hours",
      "bestTimeKn": "ಕಚೇರಿ ಸಮಯ",
      "nearestMetro": "Bellandur Outer Ring Road corridor",
      "nearestMetroKn": "ಬೆಳ್ಳಂದೂರು ರಿಂಗ್ ರೋಡ್ ಕಾರಿಡಾರ್",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "tcs-whitefield",
    "name": "TCS",
    "kannadaName": "ಟಿಸಿಎಸ್",
    "category": "technology-innovation",
    "tags": [
      "Tech",
      "IT Campus",
      "Whitefield",
      "Consulting"
    ],
    "neighbourhood": "Whitefield EPIP Zone",
    "neighbourhoodKn": "ವೈಟ್‌ಫೀಲ್ಡ್ ಇಪಿಐಪಿ ವಲಯ",
    "coordinates": {
      "lat": 12.983412,
      "lng": 77.734123
    },
    "shortDesc": "Tata Consultancy Services centre.",
    "shortDescKn": "ಟಾಟಾ ಕನ್ಸಲ್ಟನ್ಸಿ ಸೆಂಟರ್.",
    "fullDesc": "TCS is one of India’s largest IT services companies with multiple centres across Bangalore. The company builds enterprise software, operates delivery centres and supports sectors such as banking, healthcare and retail. TCS runs extensive hiring and training programs to integrate fresh graduates into client projects. Its large workforce and delivery network contribute significantly to the city’s IT economy. The firm is also active in research collaborations and campus initiatives.",
    "fullDescKn": "ಟಿಸಿಎಸ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅನೇಕ ಕೇಂದ್ರಗಳನ್ನು ಹೊಂದಿರುವ ಭಾರತದ ಅತಿ ದೊಡ್ಡ ಐಟಿ ಸೇವಾ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಕಂಪನಿ ಎಂಟರ್‌ಪ್ರೈಸ್ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ, ಡೆಲಿವರಿ ಕೇಂದ್ರಗಳು ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್, ಆರೋಗ್ಯ ಹಾಗೂ ಚಿಲ್ಲರೆ ಕ್ಷೇತ್ರಗಳಿಗೆ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತದೆ. ಟಿಸಿಎಸ್ ಹೊಸ ಪದವೀಧರರನ್ನು ಪ್ರಾಜೆಕ್ಟ್ ತಂಡಗಳಿಗೆ ಸೇರಿಸಲು ವ್ಯಾಪಕ ನೇಮಕ ಮತ್ತು ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸುತ್ತದೆ. ಇದರ ದೊಡ್ಡ ಉದ್ಯೋಗ ಶಕ್ತಿ ಮತ್ತು ಡೆಲಿವರಿ ಜಾಲ ಬೆಂಗಳೂರು ಐಟಿ ಆರ್ಥಿಕತೆಗೆ ದೊಡ್ಡ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ. ಸಂಸ್ಥೆಯು ಸಂಶೋಧನಾ ಮತ್ತು ಕಾಲೇಜು ಸಹಕಾರಗಳಲ್ಲಿ ಸಹ ಸಕ್ರಿಯವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/it/it3.jpg",
    "visitorInfo": {
      "timing": "9:00 AM - 6:00 PM (Authorized entry)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00 (ಅಧಿಕೃತ ಪ್ರವೇಶ)",
      "fee": "Security clearance needed",
      "feeKn": "ಭದ್ರತಾ ಕ್ಲಿಯರೆನ್ಸ್ ಅಗತ್ಯ",
      "bestTime": "Business hours",
      "bestTimeKn": "ಕಚೇರಿ ಸಮಯ",
      "nearestMetro": "Pattandur Agrahara / ITPL Metro (Purple Line) - 400m",
      "nearestMetroKn": "ಐಟಿಪಿಎಲ್ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 400 ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "ibm-manyata",
    "name": "IBM",
    "kannadaName": "ಐಬಿಎಂ",
    "category": "technology-innovation",
    "tags": [
      "Tech",
      "IT Hub",
      "Manyata Tech Park",
      "Cloud"
    ],
    "neighbourhood": "Hebbal Outer Ring Road",
    "neighbourhoodKn": "ಹೆಬ್ಬಾಳ ರಿಂಗ್ ರಸ್ತೆ",
    "coordinates": {
      "lat": 13.048123,
      "lng": 77.621234
    },
    "shortDesc": "Research and technology offices.",
    "shortDescKn": "ಸಂಶೋಧನೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಕಚೇರಿ.",
    "fullDesc": "IBM maintains research labs and technology teams in Bangalore that work on cloud, AI, hybrid platforms and enterprise solutions. The local centres are involved in R&D, product engineering and large client engagements. IBM often partners with startups, universities and industry to pilot new technologies and solutions. The offices host global product teams as well as support and services functions. IBM’s long-term presence has helped shape Bangalore’s research and enterprise landscape.",
    "fullDescKn": "ಐಬಿಎಂ ಬೆಂಗಳೂರಿನ ಸಂಶೋಧನಾ ಪ್ರಯೋಗಾಲಯಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ತಂಡಗಳನ್ನು ಪಾಲಿಸುತ್ತದೆ, ಇಲ್ಲಿ ಕ್ಲೌಡ್, ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ, ಹೈಬ್ರಿಡ್ ವೇದಿಕೆಗಳು ಮತ್ತು ಎಂಟರ್‌ಪ್ರೈಸ್ ಪರಿಹಾರಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡಲಾಗುತ್ತದೆ. ಸ್ಥಳೀಯ ಕೇಂದ್ರಗಳು ಸಂಶೋಧನೆ, ಉತ್ಪನ್ನ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ದೊಡ್ಡ ಗ್ರಾಹಕ ಯೋಜನೆಗಳಲ್ಲಿ ತೊಡಗಿವೆ. ಐಬಿಎಂ ಸ್ಟಾರ್ಟಪ್‌ಗಳು, ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ಮತ್ತು ಕೈಗಾರಿಕೆಯೊಂದಿಗೆ ಹೊಸ ತಂತ್ರಜ್ಞಾನಗಳ ಪ್ರಯೋಗಗಳಿಗೆ ಸಹಕಾರ ನೀಡುತ್ತದೆ. ಈ ಕಚೇರಿಗಳು ಜಾಗತಿಕ ಉತ್ಪನ್ನ ತಂಡಗಳು ಮತ್ತು ಬೆಂಬಲ ಕಾರ್ಯಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ. ಐಬಿಎಂನ ದೀರ್ಘಕಾಲೀನ ನೆಲೆ ಬೆಂಗಳೂರು ಸಂಶೋಧನಾ ಮತ್ತು ಉದ್ಯಮ ಪ್ರವೇಶಕ್ಕೆ ಸಹಕಾರ ನೀಡಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/it/it4.jpg",
    "visitorInfo": {
      "timing": "9:00 AM - 6:00 PM (Authorized)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00",
      "fee": "Campus security pass required",
      "feeKn": "ಕ್ಯಾಂಪಸ್ ಪಾಸ್ ಅಗತ್ಯ",
      "bestTime": "Weekdays",
      "bestTimeKn": "ವಾರದ ದಿನಗಳಲ್ಲಿ",
      "nearestMetro": "Hebbal / Nagavara Blue Line Corridor",
      "nearestMetroKn": "ನಾಗವಾರ ಮೆಟ್ರೋ ಕಾರಿಡಾರ್",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "google-bagmane-constellation",
    "name": "Google",
    "kannadaName": "ಗೂಗಲ್",
    "category": "technology-innovation",
    "tags": [
      "Tech",
      "Global Tech",
      "Bagmane",
      "AI"
    ],
    "neighbourhood": "Mahadevapura / Outer Ring Road",
    "neighbourhoodKn": "ಮಹದೇವಪುರ / ಹೊರ ವರ್ತುಲ ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.992412,
      "lng": 77.698123
    },
    "shortDesc": "Engineering and product teams.",
    "shortDescKn": "ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಉತ್ಪನ್ನ ತಂಡಗಳು.",
    "fullDesc": "Google’s engineering and product teams in Bangalore work on cloud, search, maps, ads and India-specific products. The offices bring together engineers, product managers and researchers building scalable systems and localized features. Google invests in developer outreach, language tools and programs that serve Indian users. The campuses host labs, workshops and community initiatives to support innovation. Many engineers are drawn to Google for its challenging projects and collaborative culture.",
    "fullDescKn": "ಗೂಗಲ್‌ನ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಉತ್ಪನ್ನ ತಂಡಗಳು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಕ್ಲೌಡ್, ಸರ್ಚ್, ಮ್ಯಾಪ್ಸ್, ಜಾಹಿರಾತು ಮತ್ತು ಭಾರತ-ನಿರ್ದೇಶಿತ ಉತ್ಪನ್ನಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ. ಇಲ್ಲಿ ಎಂಜಿನಿಯರ್‌ಗಳು, ಉತ್ಪನ್ನ ನಿರ್ವಹಕರು ಮತ್ತು ಸಂಶೋಧಕರು ತಳೆಯುವ ವ್ಯವಸ್ಥೆಗಳ ಮತ್ತು ಸ್ಥಳೀಕೃತ ಫೀಚರ್‌ಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತಾರೆ. ಗೂಗಲ್ ಭಾರತೀಯ ಬಳಕೆದಾರರಿಗೆ ಭಾಷಾ ಉಪಕರಣಗಳು ಮತ್ತು ಡೆವಲಪರ್ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತದೆ. ಕ್ಯಾಂಪಸ್‌ಗಳಲ್ಲಿ ಲ್ಯಾಬ್‌ಗಳು, ವರ್ಕ್‌ಶಾಪ್‌ಗಳು ಮತ್ತು ಸಮುದಾಯ ಉಪಕ್ರಮಗಳಿವೆ. ಅನೇಕ ಎಂಜಿನಿಯರ್‌ಗಳು ಹಠಾತ್ ಸವಾಲಿನ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮತ್ತು ಸೇರಿಕೊಂಡ ಕಾರ್ಯಸಂಸ್ಕೃತಿಗಾಗಿ ಗೂಗಲ್ ಅನ್ನು ಆಯ್ಕೆಮಾಡುತ್ತಾರೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/it/it5.jpg",
    "visitorInfo": {
      "timing": "9:00 AM - 6:00 PM (Employees and invited guests only)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00 (ಆಹ್ವಾನಿತರಿಗೆ ಮಾತ್ರ)",
      "fee": "Private Corporate Facility",
      "feeKn": "ಖಾಸಗಿ ಸಂಸ್ಥೆ",
      "bestTime": "Scheduled visits only",
      "bestTimeKn": "ಪೂರ್ವ ನಿಗದಿತ ಭೇಟಿ",
      "nearestMetro": "Singayyanapalya Metro (Purple Line) - 1.5 km",
      "nearestMetroKn": "ಸಿಂಗಯ್ಯನಪಾಳ್ಯ ಮೆಟ್ರೋ - 1.5 ಕಿ.ಮೀ",
      "duration": "1 - 2 hours",
      "durationKn": "1 - 2 ಗಂಟೆ"
    },
    "rating": 4.8,
    "featured": false
  },
  {
    "id": "microsoft-prestige-fern",
    "name": "Microsoft",
    "kannadaName": "ಮೈಕ್ರೋಸಾಫ್ಟ್",
    "category": "technology-innovation",
    "tags": [
      "Tech",
      "Software",
      "Bellandur",
      "Cloud & AI"
    ],
    "neighbourhood": "Bellandur Outer Ring Road",
    "neighbourhoodKn": "ಬೆಳ್ಳಂದೂರು ರಿಂಗ್ ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.931234,
      "lng": 77.684123
    },
    "shortDesc": "Software, cloud and research teams.",
    "shortDescKn": "ಸಾಫ್ಟ್‌ವೇರ್, ಕ್ಲೌಡ್ ಮತ್ತು ಸಂಶೋಧನಾ ತಂಡಗಳು.",
    "fullDesc": "Microsoft has development centres in Bangalore focused on Azure cloud, productivity tools, developer platforms and AI services. Teams here work on cloud infrastructure, enterprise software and tools used by developers worldwide. Microsoft collaborates with startups, universities and customers for product development and research. The offices host product engineering, support and business teams with global responsibilities. Microsoft is a major employer and contributor to Bangalore’s technology ecosystem.",
    "fullDescKn": "ಮೈಕ್ರೋಸಾಫ್ಟ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅಭಿವೃದ್ಧಿ ಕೇಂದ್ರಗಳನ್ನು ನಡೆಸುತ್ತದೆ, ಇಲ್ಲಿ Azure ಕ್ಲೌಡ್, ಉತ್ಪಾದಕತೆ ಸಾಧನಗಳು, ಡೆವಲಪರ್ ವೇದಿಕೆಗಳು ಮತ್ತು AI ಸೇವೆಗಳ ಮೇಲೆಯೂ ಕೆಲಸವಿರುತ್ತದೆ. ಇಲ್ಲಿ ತಂಡಗಳು ಕ್ಲೌಡ್ ಮೂಲಸೌಕರ್ಯ, ಎಂಟರ್‌ಪ್ರೈಸ್ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಜಾಗತಿಕವಾಗಿ ಬಳಸಲಾಗುವ ಉಪಕರಣಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುತ್ತವೆ. ಮೈಕ್ರೋಸಾಫ್ಟ್ ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳು, ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ಮತ್ತು ಗ್ರಾಹಕರೊಂದಿಗೆ ಉತ್ಪನ್ನ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸಂಶೋಧನೆಗಾಗಿ ಸಹಕಾರ ಮಾಡುತ್ತದೆ. ಕಚೇರಿಗಳಲ್ಲಿ ಉತ್ಪನ್ನ ಎಂಜಿನಿಯರಿಂಗ್, ಬೆಂಬಲ ಮತ್ತು ವ್ಯವಹಾರ ತಂಡಗಳಿರುವುದರಿಂದ ಜಾಗತಿಕ ಹೊಣೆಗಾರಿಕೆಗಳು ಕವುತ್ತವೆ. ಮೈಕ್ರೋಸಾಫ್ಟ್ ಬೆಂಗಳೂರಿನ ತಂತ್ರಜ್ಞಾನ ಪರಿಸರಕ್ಕೆ ಪ್ರಮುಖ ಕೊಡುಗೆ ನೀಡುವ ನೌಕರರೊಂದಿಗಿನ ಸಂಸ್ಥೆಯಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/it/it6.jpg",
    "visitorInfo": {
      "timing": "9:00 AM - 6:00 PM (Official)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00 (ಅಧಿಕೃತ)",
      "fee": "Official visitor pass",
      "feeKn": "ಅಧಿಕೃತ ಪಾಸ್ ಅಗತ್ಯ",
      "bestTime": "Weekdays",
      "bestTimeKn": "ವಾರದ ದಿನಗಳಲ್ಲಿ",
      "nearestMetro": "Bellandur Metro Corridor",
      "nearestMetroKn": "ಬೆಳ್ಳಂದೂರು ಮೆಟ್ರೋ ಕಾರಿಡಾರ್",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.7,
    "featured": false
  },
  {
    "id": "ub-city",
    "name": "UB City",
    "kannadaName": "ಯುಬಿ ಸಿಟಿ",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Luxury",
      "Dining",
      "CBD",
      "Skyline"
    ],
    "neighbourhood": "Vittal Mallya Road",
    "neighbourhoodKn": "ವಿಠ್ಠಲ್ ಮಲ್ಯ ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.971945,
      "lng": 77.595812
    },
    "shortDesc": "Luxury retail and dining complex.",
    "shortDescKn": "ಐಷಾರಾಮಿ ಖರೀದಿ ಮತ್ತು ಊಟ.",
    "fullDesc": "UB City is one of Bangalore’s most premium shopping destinations. It houses luxury international brands, fine-dining restaurants, and exclusive boutiques. The open plazas often host cultural and lifestyle events. It is also a hub for nightlife and weekend gatherings. Many visitors come here for leisure, shopping, and gourmet experiences.",
    "fullDescKn": "ಯುಬಿ ಸಿಟಿ ಬೆಂಗಳೂರಿನ ಅತ್ಯಂತ ಐಷಾರಾಮಿ ಶಾಪಿಂಗ್ ಸ್ಥಳಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ಅಂತರರಾಷ್ಟ್ರೀಯ ಬ್ರ್ಯಾಂಡ್‌ಗಳು, ಸುಸಜ್ಜಿತ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು ಮತ್ತು ವಿಶಿಷ್ಟ ಅಂಗಡಿಗಳು ಇವೆ. ಮುಕ್ತಾಂಗಣದಲ್ಲಿ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಜೀವನ ಶೈಲಿ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ಇದು ರಾತ್ರಿ ಜೀವನ ಮತ್ತು ವಾರಾಂತ್ಯದ ಕೂಟಗಳಿಗೂ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಶಾಪಿಂಗ್ ಮತ್ತು ಮನರಂಜನೆಗಾಗಿ ಅನೇಕರು ಇಲ್ಲಿ ಭೇಟಿ ನೀಡುತ್ತಾರೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/shopping/mall3.jpg",
    "visitorInfo": {
      "timing": "11:00 AM - 11:30 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 11:00 ರಿಂದ ರಾತ್ರಿ 11:30 (ಪ್ರತಿದಿನ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Evening for the illuminated piazza and rooftop dining",
      "bestTimeKn": "ಸಂಜೆ ವೇಳೆ ವಿದ್ಯುತ್ ದೀಪಾಲಂಕಾರ ಹಾಗೂ ರೂಫ್‌ಟಾಪ್ ಡೈನಿಂಗ್",
      "nearestMetro": "Cubbon Park Metro / MG Road Metro (Purple Line) - 800m",
      "nearestMetroKn": "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 800 ಮೀ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.7,
    "featured": true
  },
  {
    "id": "phoenix-marketcity",
    "name": "Phoenix Marketcity",
    "kannadaName": "ಫೀನಿಕ್ಸ್ ಮಾರ್ಕೆಟ್‌ಸಿಟಿ",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Mall",
      "Entertainment",
      "Whitefield"
    ],
    "neighbourhood": "Whitefield Main Road, Mahadevapura",
    "neighbourhoodKn": "ವೈಟ್‌ಫೀಲ್ಡ್ ಮುಖ್ಯ ರಸ್ತೆ, ಮಹದೇವಪುರ",
    "coordinates": {
      "lat": 12.995912,
      "lng": 77.696712
    },
    "shortDesc": "Large mall with entertainment.",
    "shortDescKn": "ಮನರಂಜನೆ ಮತ್ತು ಖರೀದಿ ಕೇಂದ್ರ.",
    "fullDesc": "Phoenix Marketcity is among the largest malls in Bangalore. It offers a wide range of fashion brands, electronics, and lifestyle stores. The mall features a multiplex cinema and food courts. Seasonal events and concerts are frequently organized here. Families and youngsters visit often for shopping, movies, and dining.",
    "fullDescKn": "ಫೀನಿಕ್ಸ್ ಮಾರ್ಕೆಟ್‌ಸಿಟಿ ಬೆಂಗಳೂರಿನ ಅತಿ ದೊಡ್ಡ ಮಾಲ್‌ಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ಫ್ಯಾಷನ್ ಬ್ರ್ಯಾಂಡ್‌ಗಳು, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಜೀವನ ಶೈಲಿ ಅಂಗಡಿಗಳು ಲಭ್ಯ. ಮಲ್ಟಿಪ್ಲೆಕ್ಸ್ ಮತ್ತು ಆಹಾರ ಮಳಿಗೆಗಳೂ ಇವೆ. ಹಂಗಾಮಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಂಗೀತ ಕಛೇರಿಗಳು ನಡೆಯುತ್ತವೆ. ಕುಟುಂಬಗಳು ಮತ್ತು ಯುವಕರು ಶಾಪಿಂಗ್, ಚಿತ್ರಗಳು ಮತ್ತು ಊಟಕ್ಕಾಗಿ ಆಗಾಗ್ಗೆ ಭೇಟಿ ನೀಡುತ್ತಾರೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/shopping/mall2.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 10:00 PM (Open daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ರಾತ್ರಿ 10:00 (ಪ್ರತಿದಿನ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Afternoons and festive weekends",
      "bestTimeKn": "ಮಧ್ಯಾಹ್ನ ಹಾಗೂ ಹಬ್ಬದ ವಾರಾಂತ್ಯಗಳಲ್ಲಿ",
      "nearestMetro": "Singayyanapalya Metro (Purple Line) - 400m",
      "nearestMetroKn": "ಸಿಂಗಯ್ಯನಪಾಳ್ಯ ಮೆಟ್ರೋ - 400 ಮೀ",
      "duration": "2.5 - 4 hours",
      "durationKn": "2.5 - 4 ಗಂಟೆಗಳು"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "orion-mall",
    "name": "Orion Mall",
    "kannadaName": "ಓರಿಯನ್ ಮಾಲ್",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Mall",
      "Lakeside",
      "Brigade Gateway",
      "Rajajinagar"
    ],
    "neighbourhood": "Malleshwaram West / Rajajinagar",
    "neighbourhoodKn": "ಮಲ್ಲೇಶ್ವರಂ ಪಶ್ಚಿಮ / ರಾಜಾಜಿನಗರ",
    "coordinates": {
      "lat": 13.011234,
      "lng": 77.555123
    },
    "shortDesc": "Lakeside shopping and leisure.",
    "shortDescKn": "ಸರೋವರ ಬಳಿಯ ಖರೀದಿ.",
    "fullDesc": "Orion Mall is a popular shopping and entertainment hub located beside a scenic lake. It has international brands, restaurants, and gaming zones. The lakeside view adds to the charm of the mall. Many festivals and special exhibitions are hosted here. It is a favorite destination for families and youngsters alike.",
    "fullDescKn": "ಓರಿಯನ್ ಮಾಲ್ ಒಂದು ಪ್ರಸಿದ್ಧ ಶಾಪಿಂಗ್ ಮತ್ತು ಮನರಂಜನೆ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ಸುಂದರ ಸರೋವರದ ತೀರದಲ್ಲಿ ಇರುವುದರಿಂದ ವಿಶಿಷ್ಟ ಆಕರ್ಷಣೆ ಹೊಂದಿದೆ. ಅಂತರರಾಷ್ಟ್ರೀಯ ಬ್ರ್ಯಾಂಡ್‌ಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು ಮತ್ತು ಗೇಮಿಂಗ್ ವಲಯಗಳಿವೆ. ಇಲ್ಲಿ ಹಬ್ಬಗಳು ಮತ್ತು ವಿಶೇಷ ಪ್ರದರ್ಶನಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಕುಟುಂಬಗಳು ಮತ್ತು ಯುವಕರು ಭೇಟಿ ನೀಡಲು ಇಷ್ಟಪಡುವ ಸ್ಥಳವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/shopping/mall1.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 10:00 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ರಾತ್ರಿ 10:00 (ಪ್ರತಿದಿನ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Evening stroll along the artificial lake promenade",
      "bestTimeKn": "ಸಂಜೆ ಕೆರೆಯ ದಂಡೆಯ ಮೇಲಿನ ವಾಕಿಂಗ್ ಸಮಯ",
      "nearestMetro": "Sandal Soap Factory Metro (Green Line) - 300m",
      "nearestMetroKn": "ಸ್ಯಾಂಡಲ್ ಸೋಪ್ ಫ್ಯಾಕ್ಟರಿ ಮೆಟ್ರೋ - 300 ಮೀ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.7,
    "featured": false
  },
  {
    "id": "church-street",
    "name": "Church Street",
    "kannadaName": "ಚರ್ಚ್ ಸ್ಟ್ರೀಟ್",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "High Street",
      "Bookstores",
      "Cafes",
      "Cobblestone"
    ],
    "neighbourhood": "Central Bengaluru / Off MG Road",
    "neighbourhoodKn": "ಕೇಂದ್ರ ಬೆಂಗಳೂರು / ಎಂ.ಜಿ. ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.974812,
      "lng": 77.605912
    },
    "shortDesc": "Bookstores, cafes and street life.",
    "shortDescKn": "ಪುಸ್ತಕ ಅಂಗಡಿಗಳು ಮತ್ತು ಕಾಫೇಗಳು.",
    "fullDesc": "Church Street is a vibrant stretch in central Bangalore. It is lined with bookstores, cafes, and restaurants offering global cuisines. The street is popular for nightlife, live music, and street art. On weekends, it becomes a lively hangout for youngsters. It is also a cultural hub connecting people of all backgrounds.",
    "fullDescKn": "ಚರ್ಚ್ ಸ್ಟ್ರೀಟ್ ಬೆಂಗಳೂರಿನ ಜೀವಂತ ಬೀದಿಗಳಲ್ಲಿ ಒಂದು. ಇಲ್ಲಿ ಪುಸ್ತಕ ಅಂಗಡಿಗಳು, ಕಾಫೇಗಳು ಮತ್ತು ವಿವಿಧ ಆಹಾರ ಮಳಿಗೆಗಳಿವೆ. ರಾತ್ರಿ ಜೀವನ, ಲೈವ್ ಸಂಗೀತ ಮತ್ತು ಬೀದಿ ಕಲೆಗಾಗಿ ಇದು ಪ್ರಸಿದ್ಧ. ವಾರಾಂತ್ಯದಲ್ಲಿ ಯುವಕರ ನೆಚ್ಚಿನ ತಾಣವಾಗುತ್ತದೆ. ಸಾಂಸ್ಕೃತಿಕವಾಗಿ ಇದು ಜನರನ್ನು ಒಗ್ಗೂಡಿಸುವ ಪ್ರಮುಖ ಸ್ಥಳವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/shopping/mall4.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 11:00 PM (Pedestrianized on weekends)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ರಾತ್ರಿ 11:00 (ವಾರಾಂತ್ಯದಲ್ಲಿ ವಾಹನ ಮುಕ್ತ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Saturday and Sunday evenings for street busking & book browsing",
      "bestTimeKn": "ಶನಿವಾರ ಮತ್ತು ಭಾನುವಾರ ಸಂಜೆ",
      "nearestMetro": "MG Road Metro (Purple Line) - 100m",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 100 ಮೀ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "garuda-mall",
    "name": "Garuda Mall",
    "kannadaName": "ಗರೂಡಾ ಮಾಲ್",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Mall",
      "Cinema",
      "Ashok Nagar"
    ],
    "neighbourhood": "Magrath Road, Ashok Nagar",
    "neighbourhoodKn": "ಮಾಗ್ರತ್ ರಸ್ತೆ, ಅಶೋಕ್ ನಗರ",
    "coordinates": {
      "lat": 12.970123,
      "lng": 77.609123
    },
    "shortDesc": "City-center shopping mall.",
    "shortDescKn": "ನಗರದ ಕೇಂದ್ರದ ಮಾಲ್.",
    "fullDesc": "Garuda Mall is located in the heart of Bangalore city. It features multiple retail outlets, restaurants, and a cinema multiplex. The mall is easy to access due to its central location. It attracts families, students, and professionals alike. Festivals and special sales draw large crowds throughout the year.",
    "fullDescKn": "ಗರೂಡಾ ಮಾಲ್ ಬೆಂಗಳೂರಿನ ಮಧ್ಯಭಾಗದಲ್ಲಿದೆ. ಇಲ್ಲಿ ಅನೇಕ ಅಂಗಡಿಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು ಮತ್ತು ಮಲ್ಟಿಪ್ಲೆಕ್ಸ್ ಚಿತ್ರಮಂದಿರವಿದೆ. ಕೇಂದ್ರದಲ್ಲಿರುವುದರಿಂದ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು. ಇದು ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಉದ್ಯೋಗಿಗಳಿಗೆ ಆಕರ್ಷಕವಾಗಿದೆ. ಹಬ್ಬಗಳು ಮತ್ತು ವಿಶೇಷ ಮಾರಾಟದ ಸಮಯದಲ್ಲಿ ಹೆಚ್ಚಿನ ಜನರು ಭೇಟಿ ನೀಡುತ್ತಾರೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/shopping/mall5.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 10:00 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ರಾತ್ರಿ 10:00 (ಪ್ರತಿದಿನ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Afternoons and evenings",
      "bestTimeKn": "ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಂಜೆ",
      "nearestMetro": "MG Road Metro / Trinity Metro (Purple Line) - 800m",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ - 800 ಮೀ",
      "duration": "2 hours",
      "durationKn": "2 ಗಂಟೆ"
    },
    "rating": 4.4,
    "featured": false
  },
  {
    "id": "mantri-square-mall",
    "name": "Mantri Mall",
    "kannadaName": "ಮಂತ್ರಿ ಮಾಲ್",
    "category": "shopping-markets",
    "tags": [
      "Shopping",
      "Mall",
      "Metro Connected",
      "Malleswaram"
    ],
    "neighbourhood": "Sampige Road, Malleswaram",
    "neighbourhoodKn": "ಸಂಪಿಗೆ ರಸ್ತೆ, ಮಲ್ಲೇಶ್ವರಂ",
    "coordinates": {
      "lat": 12.991823,
      "lng": 77.571412
    },
    "shortDesc": "Neighborhood retail destination.",
    "shortDescKn": "ಪ್ರದೇಶೀಯ ಶಾಪಿಂಗ್ ಕೇಂದ್ರ.",
    "fullDesc": "Mantri Mall is one of the largest malls in the Malleswaram area. It offers common fashion brands, household items, and dining options. The mall is always buzzing with shoppers during weekends. It has entertainment areas for kids and families. It is a convenient stop for everyday shopping and leisure.",
    "fullDescKn": "ಮಂತ್ರಿ ಮಾಲ್ ಮಲ್ಲೇಶ್ವರಂ ಭಾಗದಲ್ಲಿರುವ ದೊಡ್ಡ ಮಾಲ್‌ಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ಫ್ಯಾಷನ್ ಬ್ರ್ಯಾಂಡ್‌ಗಳು, ಗೃಹೋಪಯೋಗಿ ವಸ್ತುಗಳು ಮತ್ತು ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಿವೆ. ವಾರಾಂತ್ಯದಲ್ಲಿ ಇದು ಖರೀದಿದಾರರಿಂದ ತುಂಬಿರುತ್ತದೆ. ಮಕ್ಕಳಿಗೆ ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ಮನರಂಜನೆ ವಲಯಗಳಿವೆ. ಪ್ರತಿದಿನದ ಶಾಪಿಂಗ್ ಮತ್ತು ಮನರಂಜನೆಗೆ ಇದು ಸೂಕ್ತ ಸ್ಥಳವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/shopping/mall6.jpg",
    "visitorInfo": {
      "timing": "9:30 AM - 10:30 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:30 ರಿಂದ ರಾತ್ರಿ 10:30 (ಪ್ರತಿದಿನ)",
      "fee": "Free Entry",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Weekdays for shopping, directly accessible via Metro bridge",
      "bestTimeKn": "ವಾರದ ದಿನಗಳಲ್ಲಿ ಶಾಪಿಂಗ್‌ಗೆ ಉತ್ತಮ, ಮೆಟ್ರೋ ನಿಲ್ದಾಣಕ್ಕೆ ನೇರ ಸಂಪರ್ಕ",
      "nearestMetro": "Mantri Square Sampige Road Metro (Green Line) - Direct bridge",
      "nearestMetroKn": "ಮಂತ್ರಿ ಸ್ಕ್ವೇರ್ ಸಂಪಿಗೆ ರೋಡ್ ಮೆಟ್ರೋ - ನೇರ ಸೇತುವೆ ಸಂಪರ್ಕ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "chinnaswamy-stadium",
    "name": "M Chinnaswamy Stadium",
    "kannadaName": "ಎಂ ಚಿನ್ನಸ್ವಾಮಿ ಸ್ಟೇಡಿಯಂ",
    "category": "sports-recreation",
    "tags": [
      "Sports",
      "Cricket Stadium",
      "IPL",
      "RCB Home Ground",
      "Cubbon Road"
    ],
    "neighbourhood": "Cubbon Road / MG Road",
    "neighbourhoodKn": "ಕಬ್ಬನ್ ರಸ್ತೆ / ಎಂ.ಜಿ. ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.978845,
      "lng": 77.599612
    },
    "shortDesc": "International cricket stadium.",
    "shortDescKn": "ಆಂತರರಾಷ್ಟ್ರೀಯ ಕ್ರಿಕೆಟ್ ಮೈದಾನ.",
    "fullDesc": "M Chinnaswamy Stadium is one of India’s premier cricket venues, located in the heart of Bangalore. It regularly hosts international Test matches, One-Day Internationals and high-profile IPL games, including many Royal Challengers Bangalore fixtures. The ground seats over 30,000 spectators and features modern floodlights, player facilities and hospitality suites. It has witnessed numerous memorable matches and individual performances over the years. The stadium also stages domestic tournaments, concerts and occasional civic events.",
    "fullDescKn": "ಎಂ ಚಿನ್ನಸ್ವಾಮಿ ಸ್ಟೇಡಿಯಂ ಬೆಂಗಳೂರು ಹೃದಯಭಾಗದಲ್ಲಿರುವ ಭಾರತದ ಪ್ರಮುಖ ಕ್ರಿಕೆಟ್ ಮೈದಾನಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ನಿಯಮಿತವಾಗಿ ಅಂತರರಾಷ್ಟ್ರೀಯ ಟೆಸ್ಟ್ ಪಂದ್ಯಗಳು, ಏಕದಿನ ಮತ್ತು ಐಪಿಎಲ್ ಪಂದ್ಯಗಳು ನಡೆಯುತ್ತವೆ ಮತ್ತು ರಾಯಲ್ ಚಾಲೆಂಜರ್ಸ್ ಬೆಂಗಳೂರು ತಂಡದ ಗೃಹ ಪಂದ್ಯಗಳಿಗಾಗಿ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಮೈದಾನವು 30,000ಕ್ಕೂ ಹೆಚ್ಚು ಪ್ರೇಕ್ಷಕರಿಗೆ ಆಸನ ಮತ್ತು ಆಧುನಿಕ ಫ್ಲಡ್‌ಲೈಟ್ಸ್, ಆಟಗಾರರ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಅತಿಥಿ ಸ್ಥಳಗಳನ್ನು ಹೊಂದಿದೆ. ಇತ್ತೀಚಿನ ವರ್ಷಗಳಲ್ಲಿ ಅನೇಕ ನೆನಪಿನೀಯ ಪಂದ್ಯಗಳು ಇಲ್ಲಿ ನಡೆದಿವೆ. ದೇಶೀಯ ಟೂರ್ನಿಗಳು, ಸಂಗೀತ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕೆಲವು ಸಾರ್ವಜನಿಕ ಆಚರಣೆಗಳಿಗೂ ಇದು ವೇದಿಕೆ ಆಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/sports/sp1.jpg",
    "visitorInfo": {
      "timing": "Match days per schedule; KSCA club open to members",
      "timingKn": "ಪಂದ್ಯಗಳ ದಿನದಂದು ನಿಗದಿತ ವೇಳಾಪಟ್ಟಿಯಂತೆ",
      "fee": "Match ticket prices vary (₹500 - ₹10,000+)",
      "feeKn": "ಪಂದ್ಯದ ಟಿಕೆಟ್ ದರಗಳು ಪ್ರತ್ಯೇಕ",
      "bestTime": "During IPL and international cricket matches",
      "bestTimeKn": "ಐಪಿಎಲ್ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಕ್ರಿಕೆಟ್ ಪಂದ್ಯಗಳ ವೇಳೆ",
      "nearestMetro": "Cubbon Park Metro / MG Road Metro (Purple Line) - 200m",
      "nearestMetroKn": "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 200 ಮೀ",
      "duration": "4 - 8 hours (on match days)",
      "durationKn": "4 - 8 ಗಂಟೆಗಳು (ಪಂದ್ಯದ ದಿನಗಳಲ್ಲಿ)"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "kanteerava-stadium",
    "name": "Kanteerava Stadium",
    "kannadaName": "ಕಾಂತೀರವ ಸ್ಟೇಡಿಯಂ",
    "category": "sports-recreation",
    "tags": [
      "Sports",
      "Athletics",
      "Football",
      "Bengaluru FC"
    ],
    "neighbourhood": "Kasturba Road, Sampangi Rama Nagara",
    "neighbourhoodKn": "ಕಸ್ತೂರಬಾ ರಸ್ತೆ, ಸಂಪಂಗಿ ರಾಮ ನಗರ",
    "coordinates": {
      "lat": 12.969812,
      "lng": 77.592912
    },
    "shortDesc": "Athletics and multi-sport venue.",
    "shortDescKn": "ಬಹು-ಕ್ರೀಡೆ ಮೈದಾನ.",
    "fullDesc": "Kanteerava Stadium is a major multi-sport complex that supports athletics, football and other field sports in Bangalore. It has hosted state and national level competitions as well as school and college tournaments. The venue includes practice grounds, athlete-training facilities and basic gym infrastructure. It also doubles as a site for cultural programs and public functions on occasion. Local clubs and community events frequently use the stadium for matches and training.",
    "fullDescKn": "ಕಾಂತೀರವ ಸ್ಟೇಡಿಯಂ ಬೆಂಗಳೂರಿನ ಅತಿ ದೊಡ್ಡ ಬಹು-ಕ್ರೀಡೆ ಕ್ಯಾಂಪಸ್ ಆಗಿದ್ದು ಅഥ್ಲೆಟಿಕ್ಸ್, ಫುಟ್ಬಾಲ್ ಮತ್ತು ಇತರ ಮೈದಾನ ಕ್ರೀಡೆಗಳಿಗೆ ಸಹಾಯಕವಾಗಿದೆ. ಇದು ರಾಜ್ಯ ಹಾಗೂ ರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದ ಸ್ಪರ್ಧೆಗಳಿಗೆ ಮತ್ತು ಶಾಲಾ/ಕಾಲೇಜು ಟೂರ್ನಾಮೆಂಟ್‌ಗಳಿಗೆ ಆತಿಥ್ಯ ವಹಿಸಿದೆ. ಮೈದಾನದಲ್ಲಿ ಅಭ್ಯಾಸ ಸ್ಥಳಗಳು, ಆಟಗಾರರ ತರಬೇತಿ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಮೂಲ ಜಿಮ್ ವ್ಯವಸ್ಥೆಗಳಿವೆ. ಕೆಲವೊಮ್ಮೆ ಇದು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಭೆಗಳಿಗೂ ವೇದಿಕೆ ಆಗುತ್ತದೆ. ಸ್ಥಳೀಯ კლუბ್‌ಗಳು ಮತ್ತು ಸಮುದಾಯ ಇವೆಂಟ್‌ಗಳು ನಿಯಮಿತವಾಗಿ ಇದನ್ನು ಬಳಸುತ್ತವೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/sports/sp2.jpg",
    "visitorInfo": {
      "timing": "5:30 AM - 9:00 AM (Athletes) & Event hours",
      "timingKn": "ಬೆಳಗ್ಗೆ 5:30 - 9:00 (ಕ್ರೀಡಾಪಟುಗಳಿಗೆ) ಹಾಗೂ ಪಂದ್ಯದ ವೇಳೆ",
      "fee": "Free for registered morning athletes; match tickets as per event",
      "feeKn": "ತರಬೇತಿಗೆ ಪ್ರತ್ಯೇಕ ನಿಯಮ; ಪಂದ್ಯಗಳಿಗೆ ಟಿಕೆಟ್",
      "bestTime": "Morning athletic training or during ISL Bengaluru FC matches",
      "bestTimeKn": "ಮುಂಜಾನೆಯ ಅಥ್ಲೆಟಿಕ್ ತರಬೇತಿ ಅಥವಾ ಐಎಸ್‌ಎಲ್ ಪಂದ್ಯಗಳು",
      "nearestMetro": "Cubbon Park Metro / Vidhana Soudha Metro (Purple Line) - 1 km",
      "nearestMetroKn": "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಮೆಟ್ರೋ - 1 ಕಿ.ಮೀ",
      "duration": "1.5 - 2.5 hours",
      "durationKn": "1.5 - 2.5 ಗಂಟೆಗಳು"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "padukone-dravid-centre",
    "name": "Padukone-Dravid Centre",
    "kannadaName": "ಪಡುಕೋಣೆ-ದ್ರಾವಿಡ್ ಕೇಂದ್ರ",
    "category": "sports-recreation",
    "tags": [
      "Sports",
      "Excellence",
      "Badminton",
      "Cricket",
      "World Class"
    ],
    "neighbourhood": "Bettahalasuru, International Airport Road",
    "neighbourhoodKn": "ಬೆಟ್ಟಹಲಸೂರು, ವಿಮಾನ ನಿಲ್ದಾಣ ರಸ್ತೆ",
    "coordinates": {
      "lat": 13.136123,
      "lng": 77.585123
    },
    "shortDesc": "Badminton training centre.",
    "shortDescKn": "ಬ್ಯಾಡ್ಮಿಂಟನ್ ತರಬೇತಿ ಕೇಂದ್ರ.",
    "fullDesc": "Padukone-Dravid Centre for Sports Excellence is a high-performance training academy established to nurture sporting talent. It provides specialized coaching, sports science support, physiotherapy and rehab facilities across disciplines such as badminton, cricket and swimming. The centre runs residential and non-residential programs, talent identification camps and youth outreach initiatives. With experienced coaches and modern infrastructure, it aims to prepare athletes for national and international competition. It has become a key pillar of Bangalore’s sporting ecosystem.",
    "fullDescKn": "ಪಡುಕೋಣೆ-ದ್ರಾವಿಡ್ ಕ್ರೀಡಾ ಕೇಂದ್ರವು ಪ್ರತಿಭಾವಂತ ಆಟಗಾರರನ್ನು ಬೆಳೆಸಲು ಸ್ಥಾಪಿತವಾದ ಉನ್ನತ ಮಟ್ಟದ ತರಬೇತಿ ಅಕಾಡೆಮಿಯಾಗಿದೆ. ಬ್ಯಾಡ್ಮಿಂಟನ್, ಕ್ರಿಕೆಟ್ ಮತ್ತು ಈಜು ಮುಂತಾದ ವಿಭಾಗಗಳಲ್ಲಿ ವಿಶೇಷ ತರಬೇತಿ, ಕ್ರೀಡಾ ವಿಜ್ಞಾನ ಬೆಂಬಲ, ಫಿಸಿಯೋಥೆರಪಿ ಮತ್ತು ಪುನಶ್ಚೇತನ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕೇಂದ್ರವು ನೌಕಾಪ್ರವೇಶ ಮತ್ತು ಅನ್-ನೌಕಾ ಕಾರ್ಯಕ್ರಮಗಳು, ಪ್ರತಿಭಾ ಗುರುತಿಸುವ ಶಿಬಿರಗಳು ಮತ್ತು ಯುವಕರಿಗೆ yönelik ಅಭಿಯಾನಗಳನ್ನು ನಡೆಸುತ್ತದೆ. ಅನುಭವಿಗಳ ತರಬೇತುದಾರರು ಮತ್ತು ಆಧುನಿಕ ಮೂಲಸೌಕರ್ಯದಿಂದ ಇದು ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಸ್ಪರ್ಧಿಗಳಿಗೆ ಆಟಗಾರರನ್ನು ಸಿದ್ಧಪಡಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಕ್ರೀಡಾ ಪರಿಕಲ್ಪನೆಗೆ ಒಂದು ಪ್ರಮುಖ ಅಂಶವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/sports/sp3.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 9:00 PM (Prior membership/booking required)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ ರಾತ್ರಿ 9:00 (ಮುಂಗಡ ನೋಂದಣಿ ಅಗತ್ಯ)",
      "fee": "Facility booking fees apply",
      "feeKn": "ಕ್ರೀಡಾ ಸೌಲಭ್ಯಗಳಿಗೆ ನಿಗದಿತ ಶುಲ್ಕ",
      "bestTime": "Morning or evening training sessions",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ ಅಥವಾ ಸಂಜೆ",
      "nearestMetro": "Airport Highway BMTC Vayu Vajra route",
      "nearestMetroKn": "ಏರ್‌ಪೋರ್ಟ್ ಹೈವೇ ವಾಯುವಜ್ರ ಮಾರ್ಗ",
      "duration": "2 hours",
      "durationKn": "2 ಗಂಟೆ"
    },
    "rating": 4.8,
    "featured": false
  },
  {
    "id": "bangalore-football-stadium",
    "name": "Bangalore Football Club",
    "kannadaName": "ಬೆಂಗಳೂರು ಫುಟ್ಬಾಲ್ ಕ್ಲಬ್",
    "category": "sports-recreation",
    "tags": [
      "Sports",
      "Football Stadium",
      "Ashok Nagar",
      "BFC"
    ],
    "neighbourhood": "Ashok Nagar",
    "neighbourhoodKn": "ಅಶೋಕ್ ನಗರ",
    "coordinates": {
      "lat": 12.967812,
      "lng": 77.613412
    },
    "shortDesc": "Local football club and academy.",
    "shortDescKn": "ಸ್ಥಳೀಯ ಫುಟ್ಬಾಲ್ ಕ್ಲಬ್.",
    "fullDesc": "Bangalore Football Club runs youth development programs and competes in regional and local leagues across Karnataka. The club focuses on grassroots coaching, structured age-group teams and regular match fixtures to develop players. It organizes coaching camps, scouting initiatives and school partnerships to identify and train young talent. Community outreach and regular competitions give local players exposure and match experience. The club plays an important role in promoting football culture and pathways for progression in the city.",
    "fullDescKn": "ಬೆಂಗಳೂರು ಫುಟ್ಬಾಲ್ ಕ್ಲಬ್ ಯುವ ಅಭಿವೃದ್ದಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸುತ್ತದೆ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಹಾಗೂ ಸ್ಥಳೀಯ ಲೀಗ್‌ಗಳಲ್ಲಿ ಸ್ಪರ್ಧಿಸುತ್ತದೆ. ಕ್ಲಬ್ ಜಮೀನಿನ ಮಟ್ಟದ ತರಬೇತಿ, ವಯೋಮಿತಿ ತಂಡಗಳು ಮತ್ತು ನಿಯಮಿತ ಪಂದ್ಯಗಳ ಮೂಲಕ ಆಟಗಾರರನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಗಮನಹರಿಸುತ್ತದೆ. ತರಬೇತಿ ಶಿಬಿರಗಳು, ಪ್ರತಿಭಾ ಹುಡುಕಾಟ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಶಾಲಾ ಸಹಕಾರಗಳ ಮೂಲಕ ಯುವ ಪ್ರತಿಭೆಯನ್ನು ಗುರುತಿಸಿ ತರಬೇತು ಮಾಡುತ್ತದೆ. ಸಮುದಾಯ ಸಂಪರ್ಕ ಮತ್ತು ನಿಯಮಿತ ಪಂದ್ಯಗಳ ಮೂಲಕ ಸ್ಥಳೀಯ ಆಟಗಾರರಿಗೆ ಅನುಭವ ದೊರಕುತ್ತದೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಫುಟ್ಬಾಲಿನ ಸಂಸ್ಕೃತಿಯನ್ನು ಉತ್ತೇಜಿಸಲು ಈ ಕ್ಲಬ್ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/sports/sp4.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 8:00 PM (Match schedules vary)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ ರಾತ್ರಿ 8:00 (ಪಂದ್ಯಗಳ ವೇಳೆ ಬದಲಾವಣೆ)",
      "fee": "Ticketed for BDFA / National league matches",
      "feeKn": "ಲೀಗ್ ಪಂದ್ಯಗಳಿಗೆ ಟಿಕೆಟ್ ನಿಗದಿ",
      "bestTime": "During state league matches",
      "bestTimeKn": "ರಾಜ್ಯ ಲೀಗ್ ಪಂದ್ಯಗಳ ವೇಳೆ",
      "nearestMetro": "Garuda Mall / MG Road Metro - 1.2 km",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ - 1.2 ಕಿ.ಮೀ",
      "duration": "2 hours",
      "durationKn": "2 ಗಂಟೆ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "bangalore-golf-club",
    "name": "Bangalore Golf Club",
    "kannadaName": "ಬೆಂಗಳೂರು  ಗಾಲ್ಫ್ ಕ್ಲಬ್",
    "category": "sports-recreation",
    "tags": [
      "Sports",
      "Golf",
      "Historic 1876",
      "High Grounds"
    ],
    "neighbourhood": "Sankey Road, High Grounds",
    "neighbourhoodKn": "ಸ್ಯಾಂಕಿ ರಸ್ತೆ, ಹೈ ಗ್ರೌಂಡ್ಸ್",
    "coordinates": {
      "lat": 12.990123,
      "lng": 77.584123
    },
    "shortDesc": "Historic golf course.",
    "shortDescKn": "ಐತಿಹಾಸಿಕ ಗಾಲ್ಫ್ ಕೋರ್ಸ್.",
    "fullDesc": "Bangalore Golf Club is a historic and prestigious golf course offering well-maintained fairways and greens. It provides membership play, practice ranges and coaching for amateur and experienced golfers. The club hosts amateur tournaments and social golf events that attract members and visiting players. Surrounded by mature trees and landscaped lawns, it offers a calm and scenic setting for the sport. The club has been part of Bangalore’s leisure and sporting identity for decades.",
    "fullDescKn": "ಬೆಂಗಳೂರು ಗಾಲ್ಫ್ ಕ್ಲಬ್ ಐತಿಹಾಸಿಕ ಮತ್ತು ಗಣನೀಯ ಗಾಲ್ಫ್ ಕೋರ್ಸ್ ಆಗಿದ್ದು ಉತ್ತಮವಾಗಿ ನಿರ್ವಹಿಸಿದ ಫೇರ್ವೇ ಮತ್ತು ಗ್ರೀನ್‌ಗಳನ್ನು ಹೊಂದಿದೆ. ಇದು ಸದಸ್ಯತ್ವ ಆಧಾರಿತ ಆಟ, ಅಭ್ಯಾಸ ರೇಂಜ್ ಮತ್ತು ಪ್ರಾಥಮಿಕದ ಆರಂಬದಿನಿಂದ ಅನುಭವಿ ಗಾಲ್ಫರ್‌ಗಳಿಗಾಗಿ ತರಬೇತಿಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕ್ಲಬ್ ಅಮೇಟಿಯರ್ ಟೂರ್ನಿಗಳು ಮತ್ತು ಸಾಮಾಜಿಕ ಗಾಲ್ಫ್ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಿ ಸದಸ್ಯರು ಮತ್ತು ಭೇಟಿ ಮಾಡುವವರನ್ನು ಆಹ್ವಾನಿಸುತ್ತದೆ. ಹಿರಿಯ ಮರಗಳು ಮತ್ತು ಸೌಂದರ್ಯಯುತ ಲಾನ್‌ಗಳಿಂದ ನಿಕಟ ಪರಿಸರವು ಕ್ರೀಡೆಗೆ ಶಾಂತ ವಾತಾವರಣ ನೀಡುತ್ತದೆ. ದೀರ್ಘಕಾಲದಿಂದ ಇದು ಬೆಂಗಳೂರಿನ ಮನರಂಜನೆ ಮತ್ತು ಕ್ರೀಡಾ ಜೀವನದ ಭಾಗವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/sports/sp5.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 10:00 PM (Members and affiliated club guests)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ ರಾತ್ರಿ 10:00 (ಸದಸ್ಯರಿಗೆ ಮತ್ತು ಅತಿಥಿಗಳಿಗೆ)",
      "fee": "Green fees for affiliated guests",
      "feeKn": "ಅತಿಥಿಗಳಿಗೆ ಗ್ರೀನ್ ಫೀಸ್",
      "bestTime": "Early morning 6:30 AM tee-off",
      "bestTimeKn": "ಮುಂಜಾನೆ 6:30ರ ಗಾಲ್ಫ್ ಆಟ",
      "nearestMetro": "Vidhana Soudha Metro - 1.8 km",
      "nearestMetroKn": "ವಿಧಾನ ಸೌಧ ಮೆಟ್ರೋ - 1.8 ಕಿ.ಮೀ",
      "duration": "3 - 4 hours",
      "durationKn": "3 - 4 ಗಂಟೆಗಳು"
    },
    "rating": 4.7,
    "featured": false
  },
  {
    "id": "decathlon-anphora",
    "name": "Decathlon",
    "kannadaName": "ಡೆಕಾಥ್ಲಾನ್",
    "category": "sports-recreation",
    "tags": [
      "Sports",
      "Store",
      "Recreation",
      "Outdoor Equipment"
    ],
    "neighbourhood": "Bannerghatta / Sarjapur / Whitefield",
    "neighbourhoodKn": "ಬನ್ನೇರುಘಟ್ಟ / ಸರ್ಜಾಪುರ",
    "coordinates": {
      "lat": 12.898412,
      "lng": 77.599123
    },
    "shortDesc": "Sports goods and demo area.",
    "shortDescKn": "ಕ್ರೀಡಾ ಉತ್ಪನ್ನಗಳು.",
    "fullDesc": "Decathlon is a large sports retailer that combines shopping with hands-on sports experiences. The store stocks equipment across dozens of sports and typically provides demo zones where customers can try gear before buying. Workshops, beginner coaching sessions and community events are often held to encourage active lifestyles. Families and hobbyists visit to test products, learn new skills and discover sports. Decathlon plays a role in making sports accessible to a wide audience.",
    "fullDescKn": "ಡೆಕಾಥ್ಲಾನ್ ಒಂದು ದೊಡ್ಡ ಕ್ರೀಡಾ ಚಿಲ್ಲರೆ ಅಂಗಡಿ ಆಗಿದ್ದು ಖರೀದಿ ಜೊತೆಗೆ ಕ್ರೀಡಾ ಅನುಭವಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಅಂಗಡಿಯಲ್ಲಿ ಹಲವಾರು ಕ್ರೀಡೆಗಳಿಗೆ ಉಪಕರಣಗಳಿರುವ අතර ಗ್ರಾಹಕರು ಖರೀದಿಗೆ ಮೊದಲು ಉಪಕರಣಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ಡೆಮೊ ಜೋನ್‌ಗಳು ದೊರೆಯುತ್ತವೆ. ಕಾರ್ಯಾಗಾರಗಳು, ಪ್ರಾಥಮಿಕ ತರಬೇತಿ ಸೆಷನ್‌ಗಳು ಮತ್ತು ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳು ಸಕ್ರಿಯ ಜೀವನಶೈಲಿಯನ್ನು ಉತ್ತೇಜಿಸಲು ನಿಯಮಿತವಾಗಿಯೇ ನಡೆಯುತ್ತವೆ. ಕುಟುಂಬಗಳು ಮತ್ತು ಹವ್ಯಾಸಿಗಳು here ಉತ್ಪನ್ನಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ ಹೊಸ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯುತ್ತಾರೆ. ಡೆಕಾಥ್ಲಾನ್ ಕ್ರೀಡೆಗಳನ್ನು ಜನಸಾಮಾನ್ಯರಿಗೆ ತಲುಪಿಸುವಲ್ಲಿ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/sports/sp6.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 9:30 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ರಾತ್ರಿ 9:30 (ಪ್ರತಿದಿನ)",
      "fee": "Free Entry / Free court play",
      "feeKn": "ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Evenings and weekends for outdoor equipment trials",
      "bestTimeKn": "ಸಂಜೆ ಮತ್ತು ವಾರಾಂತ್ಯದಲ್ಲಿ",
      "nearestMetro": "Jayadeva Metro Corridor",
      "nearestMetroKn": "ಜಯದೇವ ಮೆಟ್ರೋ ಕಾರಿಡಾರ್",
      "duration": "1.5 hours",
      "durationKn": "1.5 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "wonderla-amusement-park",
    "name": "Wonderla",
    "kannadaName": "ವಂಡರ್‌ಲಾ",
    "category": "sports-recreation",
    "tags": [
      "Entertainment",
      "Amusement Park",
      "Rollercoasters",
      "Water Rides"
    ],
    "neighbourhood": "28th km, Mysore Road",
    "neighbourhoodKn": "28ನೇ ಕಿ.ಮೀ, ಮೈಸೂರು ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.834412,
      "lng": 77.401123
    },
    "shortDesc": "Amusement park with rides.",
    "shortDescKn": "ಮನರಂಜನಾ ಉದ್ಯಾನ.",
    "fullDesc": "Wonderla is one of the most popular amusement parks near Bangalore, offering a variety of thrill rides and water attractions. It has dedicated sections for children and families, ensuring a safe and enjoyable experience. Seasonal events and live performances are organized throughout the year. The park also has restaurants, souvenir shops, and picnic areas. Visitors can spend an entire day exploring rides, enjoying shows, and relaxing in recreational zones.",
    "fullDescKn": "ವಂಡರ್‌ಲಾ ಬೆಂಗಳೂರಿನ ಹತ್ತಿರದ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಮನರಂಜನಾ ಉದ್ಯಾನಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ, ಇಲ್ಲಿ ವಿವಿಧ ರೋಮಾಂಚಕ ರೈಡ್‌ಗಳು ಮತ್ತು ಜಲ ಆಕರ್ಷಣೆಗಳಿವೆ. ಮಕ್ಕಳ ಮತ್ತು ಕುಟುಂಬದವರಿಗಾಗಿ ವಿಶೇಷ ವಿಭಾಗಗಳಿವೆ, ಇದು ಸುರಕ್ಷಿತ ಮತ್ತು ಆನಂದಕರ ಅನುಭವವನ್ನು ಒದಗಿಸುತ್ತದೆ. ವರ್ಷಾವರೆಗೂ ಹಬ್ಬದ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ನೇರ ಪ್ರದರ್ಶನಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಉದ್ಯಾನದಲ್ಲಿ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು, ಸ್ಮಾರಕ ಅಂಗಡಿಗಳು ಮತ್ತು ಪಿಕ್ನಿಕ್ ಪ್ರದೇಶಗಳಿವೆ. ವೀಕ್ಷಕರು ದಿನವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ರೈಡ್‌ಗಳನ್ನು ಅನುಭವಿಸುವುದು, ಪ್ರದರ್ಶನಗಳನ್ನು ಆನಂದಿಸುವುದು ಮತ್ತು ವಿಶ್ರಾಂತ ಸ್ಥಳಗಳಲ್ಲಿ ವಿಶ್ರಾಂತಿಯಾಗಿರುವುದು ಕಳೆಯಬಹುದು.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/entertainment/ent5.jpg",
    "visitorInfo": {
      "timing": "11:00 AM - 6:00 PM (Weekdays), 11:00 AM - 7:00 PM (Weekends/Holidays)",
      "timingKn": "ಬೆಳಗ್ಗೆ 11:00 - ಸಂಜೆ 6:00 (ವಾರದ ದಿನ), 11:00 - ಸಂಜೆ 7:00 (ವಾರಾಂತ್ಯ)",
      "fee": "₹1,250 - ₹1,800 approx (Adult day pass)",
      "feeKn": "₹1,250 - ₹1,800 ಅಂದಾಜು (ದಿನದ ಪಾಸ್)",
      "bestTime": "Arrive at 10:30 AM to maximize rides before queues build",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 10:30ಕ್ಕೆ ತಲುಪುವುದು ಸೂಕ್ತ",
      "nearestMetro": "Kengeri Metro (Purple Line) - BMTC feeder buses to Wonderla",
      "nearestMetroKn": "ಕೆಂಗೇರಿ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - ಬಿಎಂಟಿಸಿ ಬಸ್ ಸೌಲಭ್ಯ",
      "duration": "6 - 7 hours (Full Day)",
      "durationKn": "6 - 7 ಗಂಟೆಗಳು (ಪೂರ್ಣ ದಿನ)"
    },
    "rating": 4.7,
    "featured": true
  },
  {
    "id": "pvr-cinemas-forum",
    "name": "PVR Cinemas",
    "kannadaName": "ಪಿವಿಆರ್ ಸಿನೆಮಾಸ್",
    "category": "sports-recreation",
    "tags": [
      "Entertainment",
      "Cinema",
      "IMAX",
      "Movies"
    ],
    "neighbourhood": "Koramangala / Orion / Phoenix",
    "neighbourhoodKn": "ಕೊರಮಂಗಲ / ಓರಿಯನ್",
    "coordinates": {
      "lat": 12.935123,
      "lng": 77.611912
    },
    "shortDesc": "Modern multiplex chain.",
    "shortDescKn": "ಮಲ್ಟಿಪ್ಲೆಕ್ಸ ಚೈನ್.",
    "fullDesc": "PVR Cinemas provides a premium movie-watching experience with multiple screens and comfortable seating. It showcases the latest films with high-quality sound and projection systems. Concessions and food courts are available within the multiplex. Special screenings and film festivals are hosted periodically. PVR attracts families, students, and cinephiles from across Bangalore for entertainment and leisure.",
    "fullDescKn": "ಪಿವಿಆರ್ ಸಿನೆಮಾಸ್ ಹಲವಾರು ಪರದೆಗಳೊಂದಿಗೆ ಮತ್ತು ಆರಾಮದಾಯಕ ಆಸನಗಳೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ ಚಿತ್ರ ವೀಕ್ಷಣಾ ಅನುಭವವನ್ನು ನೀಡುತ್ತದೆ. ಇದು ನವೀಕೃತ ಚಿತ್ರಗಳನ್ನು ಉನ್ನತ ಗುಣಮಟ್ಟದ ಧ್ವನಿ ಮತ್ತು ಪ್ರೋಜೆಕ್ಷನ್ ವ್ಯವಸ್ಥೆಗಳಿಂದ ತೋರಿಸುತ್ತದೆ. ಮಲ್ಟಿಪ್ಲೆಕ್ಸ್‌ನಲ್ಲಿ ಆಹಾರ ಕೋರ್ಸ್‌ಗಳು ಮತ್ತು ತಿಂಡಿ ಅಂಗಡಿಗಳು ಲಭ್ಯವಿವೆ. ವಿಶೇಷ ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಚಲನಚಿತ್ರೋತ್ಸವಗಳು ನಿಯಮಿತವಾಗಿ ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಪಿವಿಆರ್ ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಚಿತ್ರಪ್ರಿಯರನ್ನು ಮನರಂಜನೆಗಾಗಿ ಆಕರ್ಷಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/entertainment/ent2.jpg",
    "visitorInfo": {
      "timing": "9:00 AM - Midnight (Show schedules vary)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:00 ರಿಂದ ಮಧ್ಯರಾತ್ರಿ (ಪ್ರದರ್ಶನದ ಸಮಯಕ್ಕೆ ತಕ್ಕಂತೆ)",
      "fee": "Movie ticket prices vary (₹200 - ₹900)",
      "feeKn": "ಸಿನಿಮಾ ಟಿಕೆಟ್ ದರ ಪ್ರತ್ಯೇಕ",
      "bestTime": "Evening and weekend shows",
      "bestTimeKn": "ಸಂಜೆ ಮತ್ತು ವಾರಾಂತ್ಯದ ಶೋಗಳು",
      "nearestMetro": "Connected to citywide metro stations",
      "nearestMetroKn": "ಮೆಟ್ರೋ ನಿಲ್ದಾಣಗಳ ಸಮೀಪ",
      "duration": "2.5 - 3 hours",
      "durationKn": "2.5 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "innovative-film-city",
    "name": "Innovative Film City",
    "kannadaName": "ಇನ್ನೋವೇಟಿವ್ ಫಿಲ್ಮ್ ಸಿಟಿ",
    "category": "sports-recreation",
    "tags": [
      "Entertainment",
      "Theme Park",
      "Film Sets",
      "Mysore Road"
    ],
    "neighbourhood": "Bidadi, Bengaluru-Mysuru Highway",
    "neighbourhoodKn": "ಬಿದದಿ, ಬೆಂಗಳೂರು-ಮೈಸೂರು ಹೆದ್ದಾರಿ",
    "coordinates": {
      "lat": 12.784123,
      "lng": 77.391234
    },
    "shortDesc": "Theme park and attractions.",
    "shortDescKn": "ಥೀಮ್ ಉದ್ಯಾನ.",
    "fullDesc": "Innovative Film City is a unique entertainment complex located near Bangalore, combining theme park rides with film-related attractions. It features a wax museum, dinosaur park, adventure activities, and live shows. Visitors can explore multiple zones catering to children and adults. Seasonal events and festivals are organized throughout the year. The center offers opportunities for education, photography, and interactive experiences.",
    "fullDescKn": "ಇನ್ನೋವೇಟಿವ್ ಫಿಲ್ಮ್ ಸಿಟಿ ಬೆಂಗಳೂರಿನ ಹತ್ತಿರದ ವಿಶಿಷ್ಟ ಮನರಂಜನಾ ಕೇಂದ್ರವಾಗಿದೆ, ಇದು ಥೀಮ್ ಪಾರ್ಕ್ ರೈಡ್‌ಗಳು ಮತ್ತು ಚಿತ್ರ ಸಂಬಂಧಿತ ಆಕರ್ಷಣೆಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ. ಇಲ್ಲಿ ಮೇಣದ ಸಂಗೃಹಾಲಯ, ಡೈನೋಸಾರ್ ಪಾರ್ಕ್, ಸಾಹಸ ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ನೇರ ಪ್ರದರ್ಶನಗಳಿವೆ. ವೀಕ್ಷಕರು ಮಕ್ಕಳ ಮತ್ತು ವಯಸ್ಕರಿಗಾಗಿ ವಿಭಿನ್ನ ವಲಯಗಳನ್ನು ಅನ್ವೇಷಿಸಬಹುದು. ವರ್ಷಾವರೆಗೂ ಹಬ್ಬ ಮತ್ತು ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ಈ ಕೇಂದ್ರವು ಶಿಕ್ಷಣ, ಫೋಟೋಗ್ರಫಿ ಮತ್ತು ಸಂವಹನಾತ್ಮಕ ಅನುಭವಗಳ ಅವಕಾಶವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/entertainment/ent1.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 7:00 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ಸಂಜೆ 7:00 (ಪ್ರತಿದಿನ)",
      "fee": "₹600 - ₹900 approx per person",
      "feeKn": "₹600 - ₹900 ಅಂದಾಜು ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ",
      "bestTime": "Day outing for families and school groups",
      "bestTimeKn": "ಕುಟುಂಬದೊಂದಿಗೆ ದಿನದ ಪ್ರವಾಸಕ್ಕೆ",
      "nearestMetro": "Bidadi Railway Station / Kengeri Metro connection",
      "nearestMetroKn": "ಕೆಂಗೇರಿ ಮೆಟ್ರೋ / ಬಿದದಿ ರೈಲು ನಿಲ್ದಾಣ",
      "duration": "4 - 5 hours",
      "durationKn": "4 - 5 ಗಂಟೆಗಳು"
    },
    "rating": 4.3,
    "featured": false
  },
  {
    "id": "lalbagh-botanical-garden",
    "name": "Lalbagh Botanical Garden",
    "kannadaName": "ಲಾಲ್‌ಬಾಗ್ ಉದ್ಯಾನ",
    "category": "nature-outdoors",
    "tags": [
      "Nature",
      "Botanical Garden",
      "Glass House",
      "Hyder Ali",
      "Kempe Gowda Tower"
    ],
    "neighbourhood": "Mavalli / Basavanagudi",
    "neighbourhoodKn": "ಮಾವಳ್ಳಿ / ಬಸವನಗುಡಿ",
    "coordinates": {
      "lat": 12.950743,
      "lng": 77.584777
    },
    "shortDesc": "Historic botanical gardens.",
    "shortDescKn": "ಐತಿಹಾಸಿಕ ಸಸ್ಯೋದ್ಯಾನ.",
    "fullDesc": "Lalbagh Botanical Garden is a famous historic garden in Bangalore, known for its rare plants and glasshouse. It hosts flower shows, educational tours, and guided walks for nature enthusiasts. The sprawling grounds include lakes, fountains, and centuries-old trees. Botanical research and conservation projects are conducted here. Visitors enjoy picnics, photography, and learning about plant diversity throughout the year.",
    "fullDescKn": "ಲಾಲ್‌ಬಾಗ್ ಉದ್ಯಾನ ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಐತಿಹಾಸಿಕ ಉದ್ಯಾನವಾಗಿದೆ, ಇದು ಅಪರೂಪದ ಸಸ್ಯಗಳು ಮತ್ತು ಗ್ಲಾಸ್‌ಹೌಸ್‌ನಿಂದ ಖ್ಯಾತಿಯಾಗಿದೆ. ಹೂವು ಪ್ರದರ್ಶನಗಳು, ಶೈಕ್ಷಣಿಕ ಪ್ರವಾಸಗಳು ಮತ್ತು ನೇರ ನಡಿಗೆಗಳೊಂದಿಗೆ ಪ್ರಕೃತಿ ಪ್ರಿಯರಿಗೆ ಅನುಕೂಲವಾಗಿದೆ. ವ್ಯಾಪಕ ಭೂಮಿಯಲ್ಲಿ ಸರೋವರಗಳು, ಜಲಪಾತಗಳು ಮತ್ತು ಶತಮಾನಗಳ ಹಳೆಯ ಮರಗಳಿವೆ. ಇಲ್ಲಿ ಸಸ್ಯೋದ್ಯಾನ ಸಂಶೋಧನೆ ಮತ್ತು ಸಂರಕ್ಷಣಾ ಯೋಜನೆಗಳು ನಡೆಯುತ್ತವೆ. ವೀಕ್ಷಕರು ವರ್ಷಾವರೆಗೂ ಪಿಕ್ನಿಕ್, ಫೋಟೋಗ್ರಫಿ ಮತ್ತು ಸಸ್ಯ ವೈವಿಧ್ಯವನ್ನು ತಿಳಿಯಲು ಬರುವರು.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/entertainment/ent7.jpg",
    "visitorInfo": {
      "timing": "6:00 AM - 7:00 PM (Daily; Free entry 6:00 AM - 9:00 AM and 6:00 PM - 7:00 PM)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ ಸಂಜೆ 7:00 (ಮುಂಜಾನೆ 6-9 ಮತ್ತು ಸಂಜೆ 6-7 ಉಚಿತ ಪ್ರವೇಶ)",
      "fee": "₹25 (Adults between 9:00 AM - 6:00 PM); Free for children",
      "feeKn": "₹25 (ಬೆಳಗ್ಗೆ 9 ರಿಂದ ಸಂಜೆ 6ರವರೆಗೆ); ಮಕ್ಕಳಿಗೆ ಉಚಿತ",
      "bestTime": "Early morning 6:00 AM - 8:30 AM or during Republic/Independence Day Flower Shows",
      "bestTimeKn": "ಮುಂಜಾನೆ 6:00 ರಿಂದ 8:30 ಅಥವಾ ವಾರ್ಷಿಕ ಫಲಪುಷ್ಪ ಪ್ರದರ್ಶನದ ಸಮಯದಲ್ಲಿ",
      "nearestMetro": "Lalbagh Metro (Green Line, West Gate) - 50m",
      "nearestMetroKn": "ಲಾಲ್‌ಬಾಗ್ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್, ಪಶ್ಚಿಮ ದ್ವಾರ) - 50 ಮೀ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "visvesvaraya-museum",
    "name": "Visvesvaraya Museum",
    "kannadaName": "ವಿಶ್ವೇಶ್ವರಯ್ಯ ಮ್ಯೂಸಿಯಂ",
    "category": "sports-recreation",
    "tags": [
      "Entertainment",
      "Science Museum",
      "Sir MV",
      "Interactive",
      "Kasturba Road"
    ],
    "neighbourhood": "Kasturba Road / Cubbon Park",
    "neighbourhoodKn": "ಕಸ್ತೂರಬಾ ರಸ್ತೆ / ಕಬ್ಬನ್ ಪಾರ್ಕ್",
    "coordinates": {
      "lat": 12.975412,
      "lng": 77.596912
    },
    "shortDesc": "Science and technology exhibits.",
    "shortDescKn": "ವಿಜ್ಞಾನ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪ್ರದರ್ಶನಗಳು.",
    "fullDesc": "Visvesvaraya Museum showcases a variety of engineering and technology exhibits, including models, instruments, and interactive displays. It is named after Sir M. Visvesvaraya, an eminent engineer and statesman. The museum offers educational programs and workshops for students and enthusiasts. Visitors can learn about historical inventions and scientific principles. The museum is a valuable resource for knowledge, research, and inspiration.",
    "fullDescKn": "ವಿಶ್ವೇಶ್ವರಯ್ಯ ಮ್ಯೂಸಿಯಂ ವಿವಿಧ ಇಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪ್ರದರ್ಶನಗಳನ್ನು ತೋರಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ಮಾದರಿಗಳು, ಉಪಕರಣಗಳು ಮತ್ತು ಸಂವಹನಾತ್ಮಕ ಪ್ರದರ್ಶನಗಳಿವೆ. ಇದು ಪ್ರಖ್ಯಾತ ಎಂಜಿನಿಯರ್ ಮತ್ತು ರಾಜಕಾರಣಿ ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯನ ಹೆಸರಿನಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾಗಿದೆ. ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಮನರಂಜನೆ ಆಸಕ್ತರು ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳಲ್ಲಿ ಭಾಗವಹಿಸಬಹುದು. ವೀಕ್ಷಕರು ಐತಿಹಾಸಿಕ ಆವಿಷ್ಕಾರಗಳು ಮತ್ತು ವೈಜ್ಞಾನಿಕ ತತ್ತ್ವಗಳನ್ನು ತಿಳಿಯಬಹುದು. ಮ್ಯೂಸಿಯಂ ಜ್ಞಾನ, ಸಂಶೋಧನೆ ಮತ್ತು ಪ್ರೇರಣೆಗೆ ಅಮೂಲ್ಯ ಸಂಪನ್ಮೂಲವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/entertainment/ent8.jpg",
    "visitorInfo": {
      "timing": "9:30 AM - 6:00 PM (Open all days except Deepavali & Ganesha)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:30 ರಿಂದ ಸಂಜೆ 6:00 (ದೀಪಾವಳಿ ಮತ್ತು ಗಣೇಶ ಹಬ್ಬ ಹೊರತುಪಡಿಸಿ ಪ್ರತಿದಿನ)",
      "fee": "₹85 (General entry), 3D theatre show extra ₹30",
      "feeKn": "₹85 (ಸಾಮಾನ್ಯ ಪ್ರವೇಶ), 3D ಪ್ರದರ್ಶನಕ್ಕೆ ಪ್ರತ್ಯೇಕ ₹30",
      "bestTime": "Morning hours 10:00 AM - 1:00 PM",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ಮಧ್ಯಾಹ್ನ 1:00",
      "nearestMetro": "Cubbon Park Metro (Purple Line) - 500m",
      "nearestMetroKn": "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 500 ಮೀ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.7,
    "featured": true
  },
  {
    "id": "snow-city",
    "name": "Snow City",
    "kannadaName": "ಸ್ನೋ  ಸಿಟಿ",
    "category": "sports-recreation",
    "tags": [
      "Entertainment",
      "Indoor Snow",
      "Sub-zero",
      "Jayamahal"
    ],
    "neighbourhood": "Jayamahal, Fun World Complex",
    "neighbourhoodKn": "ಜಯಮಹಲ್, ಫನ್ ವರ್ಲ್ಡ್ ಆವರಣ",
    "coordinates": {
      "lat": 13.006123,
      "lng": 77.592912
    },
    "shortDesc": "Indoor snow-themed attraction.",
    "shortDescKn": "ಒಳಾಂಗಣ ಹಿಮ ಉದ್ಯಾನ.",
    "fullDesc": "Snow City is an indoor park offering snow-based entertainment in Bangalore. Visitors can experience artificial snowfall, snow slides, ice skating, and snowball fights. The park is designed for families and children, providing safe play areas. Seasonal events and winter-themed shows are conducted. Snow City creates a unique cold-weather experience in a tropical city, attracting locals and tourists alike.",
    "fullDescKn": "ಸ್ನೋ ಸಿಟಿ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಒಳಾಂಗಣ ಹಿಮ ಆಧಾರಿತ ಮನರಂಜನೆ ಒದಗಿಸುತ್ತದೆ. ವೀಕ್ಷಕರು ಕೃತಕ ಹಿಮ, ಹಿಮದ ಸ್ಲೈಡ್‌ಗಳು, ಐಸ್ ಸ್ಕೇಟಿಂಗ್ ಮತ್ತು ಹಿಮದ ಗುಂಡಿ ಯುದ್ಧವನ್ನು ಅನುಭವಿಸಬಹುದು. ಉದ್ಯಾನವು ಕುಟುಂಬ ಮತ್ತು ಮಕ್ಕಳಿಗಾಗಿ ಸುರಕ್ಷಿತ ಆಟದ ಸ್ಥಳಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಹಬ್ಬದ ಸಮಯದಲ್ಲಿ ಮತ್ತು ಚಳಿಗಾಲದ ಥೀಮ್ ಪ್ರದರ್ಶನಗಳು ನಡೆಯುತ್ತವೆ. ಟ್ರಾಪಿಕಲ್ ನಗರದಲ್ಲಿ ಹಿಮದ ವಿಶಿಷ್ಟ ಅನುಭವವನ್ನು ನೀಡುವ Snow City ಸ್ಥಳೀಯರು ಮತ್ತು ಪ್ರವಾಸಿಗರನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/entertainment/ent6.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 8:00 PM (45-minute sessions)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ರಾತ್ರಿ 8:00 (45 ನಿಮಿಷಗಳ ಸೆಷನ್‌ಗಳು)",
      "fee": "₹550 - ₹650 per session (Winter gear provided)",
      "feeKn": "₹550 - ₹650 ಪ್ರತಿ ಸೆಷನ್‌ಗೆ (ಉಡುಪುಗಳನ್ನು ಒದಗಿಸಲಾಗುತ್ತದೆ)",
      "bestTime": "Mid-day summer heat escape",
      "bestTimeKn": "ಬೇಸಿಗೆಯ ಮಧ್ಯಾಹ್ನದ ವೇಳೆ",
      "nearestMetro": "Cantonment Railway Station / Cubbon Park Metro - 3 km",
      "nearestMetroKn": "ಕಂಟೋನ್ಮೆಂಟ್ ರೈಲ್ವೆ ನಿಲ್ದಾಣ ಸಮೀಪ",
      "duration": "1 - 1.5 hours",
      "durationKn": "1 - 1.5 ಗಂಟೆ"
    },
    "rating": 4.4,
    "featured": false
  },
  {
    "id": "state-bank-of-india",
    "name": "State Bank of India",
    "kannadaName": "ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂದಿಯಾ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Banking",
      "Public Sector",
      "Heritage LHO"
    ],
    "neighbourhood": "St. Marks Road / K.G. Road LHO",
    "neighbourhoodKn": "ಸೇಂಟ್ ಮಾರ್ಕ್ಸ್ ರಸ್ತೆ / ಕೆ.ಜಿ. ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.974412,
      "lng": 77.593412
    },
    "shortDesc": "National public sector bank.",
    "shortDescKn": "ರಾಷ್ಟ್ರೀಯ ಸರ್ಕಾರಿ ಬ್ಯಾಂಕ್.",
    "fullDesc": "State Bank of India (SBI) is one of the largest public sector banks in India. It provides a wide range of banking services, including savings accounts, loans, and investment solutions. SBI has an extensive branch and ATM network across Bangalore and the country. The bank is known for its reliable customer service and financial products. SBI also offers digital banking services, mobile banking apps, and online transactions for convenience. It caters to both individual and corporate customers, supporting financial growth and security.",
    "fullDescKn": "ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ (ಎಸ್‌ಬಿಐ) ಭಾರತದ ಅತಿದೊಡ್ಡ ಸಾರ್ವಜನಿಕ ವಲಯದ ಬ್ಯಾಂಕ್‌ಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇದು ಸೇವಿಂಗ್ಸ್ ಖಾತೆ, ಸಾಲಗಳು ಮತ್ತು ಹೂಡಿಕೆ ಪರಿಹಾರಗಳನ್ನು ಒಳಗೊಂಡ ವಿವಿಧ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಬೆಂಗಳೂರು ಮತ್ತು ದೇಶಾದ್ಯಾಂತ ಎಸ್‌ಬಿಐ ಶಾಖೆ ಮತ್ತು ಎಟಿಎಂ ಜಾಲವು ವ್ಯಾಪಕವಾಗಿದೆ. ಬ್ಯಾಂಕ್ ತನ್ನ ನಂಬಿಗಸ್ತ ಗ್ರಾಹಕ ಸೇವೆ ಮತ್ತು ಆರ್ಥಿಕ ಉತ್ಪನ್ನಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಎಸ್‌ಬಿಐ ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್, ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ಆನ್‌ಲೈನ್ ಲೆನ್ದೆನೆಯನ್ನು ಸಹ ಒದಗಿಸುತ್ತದೆ. ಇದು ವೈಯಕ್ತಿಕ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಗ್ರಾಹಕರಿಗೂ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಭದ್ರತೆಗಾಗಿ ಸೇವೆ ನೀಡುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/banks/ban1.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 4:00 PM (Monday - Saturday; closed 2nd & 4th Sat)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ಸಂಜೆ 4:00 (2 ಮತ್ತು 4ನೇ ಶನಿವಾರ ರಜೆ)",
      "fee": "Banking Services",
      "feeKn": "ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು",
      "bestTime": "Morning 10:30 AM - 1:00 PM",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 10:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 1:00",
      "nearestMetro": "Dr. B.R. Ambedkar Vidhana Soudha Metro - 400m",
      "nearestMetroKn": "ವಿಧಾನ ಸೌಧ ಮೆಟ್ರೋ - 400 ಮೀ",
      "duration": "30 - 45 mins",
      "durationKn": "30 - 45 ನಿಮಿಷ"
    },
    "rating": 4.4,
    "featured": false
  },
  {
    "id": "hdfc-bank-regional",
    "name": "HDFC Bank",
    "kannadaName": "ಎಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Banking",
      "Private Sector",
      "Forex"
    ],
    "neighbourhood": "Kasturba Road / Richmond Circle",
    "neighbourhoodKn": "ಕಸ್ತೂರಬಾ ರಸ್ತೆ / ರಿಚ್ಮಂಡ್ ಸರ್ಕಲ್",
    "coordinates": {
      "lat": 12.971234,
      "lng": 77.604123
    },
    "shortDesc": "Major private bank.",
    "shortDescKn": "ಪ್ರಮುಖ ಖಾಸಗಿ ಬ್ಯಾಂಕ್.",
    "fullDesc": "HDFC Bank is a leading private sector bank in India providing retail and corporate banking services. It offers personal loans, credit cards, savings accounts, and wealth management solutions. HDFC Bank has multiple branches and ATMs across Bangalore, ensuring convenient access to banking. It is known for its customer-friendly services and digital banking platforms. The bank also runs financial literacy programs and community initiatives. HDFC Bank continues to expand its offerings with innovative products and technology solutions.",
    "fullDescKn": "ಎಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್ ಭಾರತದಲ್ಲಿ ಪ್ರಮುಖ ಖಾಸಗಿ ವಲಯದ ಬ್ಯಾಂಕ್ ಆಗಿದ್ದು, ರಿಟೇಲ್ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಪರ್ಸನಲ್ ಲೋನ್‌ಗಳು, ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗಳು, ಸೇವಿಂಗ್‌ ಖಾತೆಗಳು ಮತ್ತು ಸಂಪತ್ತು ನಿರ್ವಹಣಾ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತದೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಹಲವಾರು ಶಾಖೆಗಳು ಮತ್ತು ಎಟಿಎಂಗಳು ಲಭ್ಯವಿವೆ, ಇದು ಸುಲಭವಾದ ಬ್ಯಾಂಕಿಂಗ್ ಅನುಭವವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಬ್ಯಾಂಕ್ ತನ್ನ ಗ್ರಾಹಕ ಸ್ನೇಹಿ ಸೇವೆಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಿಗಾಗಿ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಹೂಡಿಕೆ ಮತ್ತು ಸಮುದಾಯ ಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಸಹ ನಡೆಸುತ್ತದೆ. ಎಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್ ನವೀನ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪರಿಹಾರಗಳೊಂದಿಗೆ ತನ್ನ ಸೇವೆಗಳನ್ನು ವಿಸ್ತರಿಸುತ್ತಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/banks/ban3.jpg",
    "visitorInfo": {
      "timing": "9:30 AM - 3:30 PM (Mon-Sat, closed 2nd/4th Sat)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 3:30",
      "fee": "Banking & Forex Services",
      "feeKn": "ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಫಾರೆಕ್ಸ್ ಸೇವೆಗಳು",
      "bestTime": "Morning banking hours",
      "bestTimeKn": "ಬೆಳಗ್ಗಿನ ಬ್ಯಾಂಕಿಂಗ್ ಸಮಯ",
      "nearestMetro": "MG Road Metro (Purple Line) - 600m",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ - 600 ಮೀ",
      "duration": "30 mins",
      "durationKn": "30 ನಿಮಿಷ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "icici-bank-towers",
    "name": "ICICI Bank",
    "kannadaName": "ಐಸಿಐಸಿಐ ಬ್ಯಾಂಕ್",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Banking",
      "ATM",
      "Wealth Management"
    ],
    "neighbourhood": "Commissariat Road / MG Road",
    "neighbourhoodKn": "ಕಮಿಷೇರಿಯಟ್ ರಸ್ತೆ / ಎಂ.ಜಿ. ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.970123,
      "lng": 77.608412
    },
    "shortDesc": "Private sector banking.",
    "shortDescKn": "ಖಾಸಗಿ ವಲಯದ ಬ್ಯಾಂಕ್.",
    "fullDesc": "ICICI Bank offers a wide range of financial services including retail banking, corporate banking, and digital banking solutions. It provides loans, insurance, credit cards, and investment opportunities. ICICI has multiple branches and ATMs in Bangalore for easy access. The bank focuses on customer satisfaction, innovative services, and modern banking technologies. Regular financial workshops and advisory services are provided for individuals and businesses. ICICI Bank plays a key role in supporting economic development and financial inclusion.",
    "fullDescKn": "ಐಸಿಐಸಿಐ ಬ್ಯಾಂಕ್ ವೈಯಕ್ತಿಕ ಬ್ಯಾಂಕಿಂಗ್, ಕಾರ್ಪೊರೇಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್ ಪರಿಹಾರಗಳನ್ನು ಒಳಗೊಂಡ ವ್ಯಾಪಕ ಹಣಕಾಸು ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಸಾಲಗಳು, ವಿಮೆ, ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗಳು ಮತ್ತು ಹೂಡಿಕೆ ಅವಕಾಶಗಳನ್ನು ನೀಡುತ್ತದೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಹಲವಾರು ಶಾಖೆಗಳು ಮತ್ತು ಎಟಿಎಂಗಳು ಸುಲಭ ಲಭ್ಯತೆಯನ್ನು ಒದಗಿಸುತ್ತವೆ. ಬ್ಯಾಂಕ್ ಗ್ರಾಹಕ ತೃಪ್ತಿಯ, ನವೀನ ಸೇವೆಗಳು ಮತ್ತು ಆಧುನಿಕ ಬ್ಯಾಂಕಿಂಗ್ ತಂತ್ರಜ್ಞಾನಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ವೈಯಕ್ತಿಕರು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ನಿಯಮಿತ ಹಣಕಾಸು ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಸಲಹೆ ಸೇವೆಗಳು ಲಭ್ಯವಿವೆ. ಐಸಿಐಸಿಐ ಬ್ಯಾಂಕ್ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಹಣಕಾಸು ಒಳಗೊಂಡಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/banks/ban4.jpg",
    "visitorInfo": {
      "timing": "9:30 AM - 3:30 PM (Mon-Sat, closed 2nd/4th Sat)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 3:30",
      "fee": "Banking Services",
      "feeKn": "ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು",
      "bestTime": "Morning hours",
      "bestTimeKn": "ಬೆಳಗ್ಗಿನ ಸಮಯ",
      "nearestMetro": "MG Road Metro (Purple Line) - 500m",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ - 500 ಮೀ",
      "duration": "30 mins",
      "durationKn": "30 ನಿಮಿಷ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "bank-of-america-merrill",
    "name": "Bank of America",
    "kannadaName": "ಬ್ಯಾಂಕ್ ಆಫ್ ಅಮೆರಿಕ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Global Banking",
      "Institutional",
      "Embassy GolfLinks"
    ],
    "neighbourhood": "Embassy GolfLinks Business Park, Domlur",
    "neighbourhoodKn": "ಎಂಬಸಿ ಗಾಲ್ಫ್ ಲಿಂಕ್ಸ್, ದೊಮ್ಲೂರು",
    "coordinates": {
      "lat": 12.949812,
      "lng": 77.648123
    },
    "shortDesc": "International bank branch.",
    "shortDescKn": "ಅಂತರರಾಷ್ಟ್ರೀಯ ಬ್ಯಾಂಕ್ ಶಾಖೆ.",
    "fullDesc": "Bank of America provides corporate and international banking services to clients in Bangalore. It offers solutions for investments, trade finance, treasury management, and wealth advisory. The bank has experienced staff to guide multinational clients and businesses. Bank of America focuses on compliance, risk management, and innovative financial products. Regular training and workshops are conducted for clients. It plays a significant role in global banking operations and cross-border financial services.",
    "fullDescKn": "ಬ್ಯಾಂಕ್ ಆಫ್ ಅಮೆರಿಕ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಕಾರ್ಪೊರೇಟ್ ಮತ್ತು ಅಂತಾರಾಷ್ಟ್ರೀಯ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಹೂಡಿಕೆ, ವ್ಯಾಪಾರ ಹಣಕಾಸು, ಟ್ರೆಜರಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂಪತ್ತು ಸಲಹೆಗಳಿಗೆ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತದೆ. ಬಹುರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕರು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ಅನುಭವಸಂಪನ್ನ ಸಿಬ್ಬಂದಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ. ಬ್ಯಾಂಕ್ ಆಫ್ ಅಮೆರಿಕ ಪಾಲನಾ, ರಿಸ್ಕ್ ನಿರ್ವಹಣೆ ಮತ್ತು ನವೀನ ಹಣಕಾಸು ಉತ್ಪನ್ನಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಗ್ರಾಹಕರಿಗೆ ನಿಯಮಿತ ತರಬೇತಿ ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಇದು ಜಾಗತಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಕಾರ್ಯಾಚರಣೆಗಳು ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಹಣಕಾಸು ಸೇವೆಗಳಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/banks/ban5.jpg",
    "visitorInfo": {
      "timing": "9:00 AM - 5:00 PM (Corporate office)",
      "timingKn": "ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 5:00 (ಕಾರ್ಪೊರೇಟ್ ಕಚೇರಿ)",
      "fee": "Corporate / Institutional",
      "feeKn": "ಸಂಸ್ಥಾಗತ ಸೇವೆಗಳು",
      "bestTime": "Business hours",
      "bestTimeKn": "ಕಚೇರಿ ಸಮಯ",
      "nearestMetro": "Indiranagar Metro (Purple Line) - 3.5 km",
      "nearestMetroKn": "ಇಂದಿರಾನಗರ ಮೆಟ್ರೋ - 3.5 ಕಿ.ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "canara-bank-head-office",
    "name": "Canara Bank",
    "kannadaName": "ಕನರಾ ಬ್ಯಾಂಕ್",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Banking",
      "Karnataka Heritage",
      "JC Road"
    ],
    "neighbourhood": "J.C. Road Head Office",
    "neighbourhoodKn": "ಜೆ.ಸಿ. ರಸ್ತೆ ಮುಖ್ಯ ಕಚೇರಿ",
    "coordinates": {
      "lat": 12.965412,
      "lng": 77.585123
    },
    "shortDesc": "Public sector bank.",
    "shortDescKn": "ಸಾರ್ವಜನಿಕ ವಲಯದ ಬ್ಯಾಂಕ್.",
    "fullDesc": "Canara Bank is a nationalized bank offering retail and corporate banking services. It supports government schemes, agricultural loans, and financial inclusion initiatives. The bank has branches and ATMs across Bangalore for easy customer access. Canara Bank provides savings accounts, fixed deposits, and digital banking platforms. Regular financial awareness programs are conducted for communities and businesses. It is known for its reliability, strong presence, and customer-focused services.",
    "fullDescKn": "ಕನರಾ ಬ್ಯಾಂಕ್ ರಾಷ್ಟ್ರೀಕೃತ ಬ್ಯಾಂಕ್ ಆಗಿದ್ದು, ವೈಯಕ್ತಿಕ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಸರಕಾರದ ಯೋಜನೆಗಳು, ಕೃಷಿ ಸಾಲಗಳು ಮತ್ತು ಹಣಕಾಸು ಒಳಗೊಂಡಿಕೆ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಶಾಖೆಗಳು ಮತ್ತು ಎಟಿಎಂಗಳಿವೆ, ಇದು ಗ್ರಾಹಕರಿಗೆ ಸುಲಭ ಲಭ್ಯತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕನರಾ ಬ್ಯಾಂಕ್ ಸೇವಿಂಗ್ ಖಾತೆ, ಸ್ಥಿರ ಠೇವಣಿ ಮತ್ತು ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸಮುದಾಯಗಳು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ನಿಯಮಿತ ಹಣಕಾಸು ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ಬ್ಯಾಂಕ್ ವಿಶ್ವಾಸಾರ್ಹತೆ, ಬಲವಾದ ಹಾಜರಿ ಮತ್ತು ಗ್ರಾಹಕ ಕೇಂದ್ರಿತ ಸೇವೆಗಾಗಿ ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/banks/ban2.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 4:00 PM (Mon-Sat, closed 2nd/4th Sat)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ಸಂಜೆ 4:00 (2 ಮತ್ತು 4ನೇ ಶನಿವಾರ ರಜೆ)",
      "fee": "Banking Services",
      "feeKn": "ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು",
      "bestTime": "Morning hours",
      "bestTimeKn": "ಬೆಳಗ್ಗಿನ ಸಮಯ",
      "nearestMetro": "Krishna Rajendra Market Metro (Green Line) - 600m",
      "nearestMetroKn": "ಕೆ.ಆರ್. ಮಾರ್ಕೆಟ್ ಮೆಟ್ರೋ - 600 ಮೀ",
      "duration": "30 mins",
      "durationKn": "30 ನಿಮಿಷ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "citibank-axis-mgroad",
    "name": "Citibank",
    "kannadaName": "ಸಿಟಿಬ್ಯಾಂಕ್",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Banking",
      "Private & Wealth",
      "MG Road"
    ],
    "neighbourhood": "M.G. Road",
    "neighbourhoodKn": "ಎಂ.ಜಿ. ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.973912,
      "lng": 77.607123
    },
    "shortDesc": "Global banking & wealth services.",
    "shortDescKn": "ಜಾಗತಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು.",
    "fullDesc": "Citibank focuses on providing global banking solutions, wealth management, and corporate services in Bangalore. It offers investment advisory, loans, credit cards, and digital platforms for seamless banking. Citibank has experienced teams to assist international clients and high-net-worth individuals. Regular seminars and financial workshops are conducted for awareness. The bank emphasizes customer satisfaction, security, and innovative financial products. It continues to play a key role in international and domestic banking operations.",
    "fullDescKn": "ಸಿಟಿಬ್ಯಾಂಕ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಜಾಗತಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಪರಿಹಾರಗಳು, ಸಂಪತ್ತು ನಿರ್ವಹಣೆ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಸೇವೆಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಸುಗಮ ಬ್ಯಾಂಕಿಂಗ್‌ಗಾಗಿ ಹೂಡಿಕೆ ಸಲಹೆ, ಸಾಲಗಳು, ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸಿಟಿಬ್ಯಾಂಕ್ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕರು ಮತ್ತು ಉನ್ನತ ನೆಟ್ ಮೌಲ್ಯದ ವ್ಯಕ್ತಿಗಳಿಗೆ ಸಹಾಯ ಮಾಡಲು ಅನುಭವಸಂಪನ್ನ ತಂಡಗಳನ್ನು ಹೊಂದಿದೆ. ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಹಣಕಾಸು ಕಾರ್ಯಾಗಾರಗಳು ನಿಯಮಿತವಾಗಿ ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಬ್ಯಾಂಕ್ ಗ್ರಾಹಕ ತೃಪ್ತಿ, ಭದ್ರತೆ ಮತ್ತು ನವೀನ ಹಣಕಾಸು ಉತ್ಪನ್ನಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಇದು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮತ್ತು ದೇಶೀಯ ಬ್ಯಾಂಕಿಂಗ್ ಕಾರ್ಯಾಚರಣೆಗಳಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/banks/ban6.jpg",
    "visitorInfo": {
      "timing": "10:00 AM - 3:30 PM (Mon-Sat, closed 2nd/4th Sat)",
      "timingKn": "ಬೆಳಗ್ಗೆ 10:00 ರಿಂದ ಮಧ್ಯಾಹ್ನ 3:30",
      "fee": "Banking Services",
      "feeKn": "ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು",
      "bestTime": "Morning hours",
      "bestTimeKn": "ಬೆಳಗ್ಗಿನ ಸಮಯ",
      "nearestMetro": "MG Road Metro (Purple Line) - 150m",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ - 150 ಮೀ",
      "duration": "30 mins",
      "durationKn": "30 ನಿಮಿಷ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "the-leela-palace",
    "name": "Leela Palace",
    "kannadaName": "ಲೀಲಾ ಪ್ಯಾಲೆಸ್",
    "category": "stay-accommodation",
    "tags": [
      "Stay",
      "Luxury Hotel",
      "Vijayanagara Architecture",
      "Old Airport Road"
    ],
    "neighbourhood": "Old Airport Road, Kodihalli",
    "neighbourhoodKn": "ಹಳೆ ವಿಮಾನ ನಿಲ್ದಾಣ ರಸ್ತೆ, ಕೋಡಿಹಳ್ಳಿ",
    "coordinates": {
      "lat": 12.960812,
      "lng": 77.648412
    },
    "shortDesc": "Luxury five-star hotel.",
    "shortDescKn": "ಐಷಾರಾಮಿ ಐದು-ತಾರೆ ಹೋಟೆಲ್.",
    "fullDesc": "Leela Palace is a luxurious five-star hotel in Bangalore, offering world-class hospitality. It features elegantly designed rooms, suites, and villas for a comfortable stay. Guests can enjoy fine dining at multiple restaurants serving international and Indian cuisines. The hotel provides spa and wellness facilities, meeting and event spaces, and personalized services. Beautiful landscaped gardens and swimming pools enhance the experience. Leela Palace is ideal for leisure, business travelers, and special occasions.",
    "fullDescKn": "ಲೀಲಾ ಪ್ಯಾಲೆಸ್ ಬೆಂಗಳೂರು ನಗರದ ಐಷಾರಾಮಿ ಐದು-ತಾರೆ ಹೋಟೆಲ್ ಆಗಿದ್ದು, ವಿಶ್ವ ಮಟ್ಟದ ಆತಿಥ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಸೌಕರ್ಯಸಂಪನ್ನವಾದ ಕೋಠಡಿಗಳು, ಸೂಟ್‌ಗಳು ಮತ್ತು ವಿಲ್ಲಾಗಳೊಂದಿಗೆ ಆರಾಮದಾಯಕ ವಾಸಸ್ಥಳವನ್ನು ನೀಡುತ್ತದೆ. ಅತಿಥಿಗಳು ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಭಾರತೀಯ ಪಾಕಶಾಲೆಗಳಲ್ಲಿ ಉತ್ತಮ ಆಹಾರವನ್ನು ಆನಂದಿಸಬಹುದು. ಹೋಟೆಲ್ ಸ್ಪಾ ಮತ್ತು ವೆಲ್‍ನೆಸ್, ಸಭಾಂಗಣಗಳು, ಕಾರ್ಯಕ್ರಮ ಸ್ಥಳಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸುಂದರವಾದ ಉದ್ಯಾನಗಳು ಮತ್ತು ಈಜುಕೋಠಡಿಗಳು ಅನುಭವವನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ. ಲೀಲಾ ಪ್ಯಾಲೆಸ್ ವಿಶ್ರಾಂತಿ, ವ್ಯವಹಾರ ಪ್ರಯಾಣಿಕರು ಮತ್ತು ವಿಶೇಷ ಸಂದರ್ಭಗಳಿಗೆ ಅತ್ಯುತ್ತಮವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hotels/hot2.jpg",
    "visitorInfo": {
      "timing": "24 Hours (Check-in 2:00 PM, Check-out 12:00 PM)",
      "timingKn": "24 ಗಂಟೆ (ಚೆಕ್-ಇನ್ ಮಧ್ಯಾಹ್ನ 2:00, ಚೆಕ್-ಔಟ್ ಮಧ್ಯಾಹ್ನ 12:00)",
      "fee": "Rooms from ₹14,000+ / night; Fine dining available to visitors",
      "feeKn": "ಕೊಠಡಿಗಳು ₹14,000+ ರಿಂದ; ಸಂದರ್ಶಕರಿಗೆ ರೆಸ್ಟೋರೆಂಟ್ ಲಭ್ಯ",
      "bestTime": "Evening for high tea or dining at Citrus / Jamavar",
      "bestTimeKn": "ಸಂಜೆಯ ಹೈ ಟೀ ಅಥವಾ ಜಮಾವಾರ್ ರೆಸ್ಟೋರೆಂಟ್",
      "nearestMetro": "Indiranagar Metro (Purple Line) - 2.8 km",
      "nearestMetroKn": "ಇಂದಿರಾನಗರ ಮೆಟ್ರೋ - 2.8 ಕಿ.ಮೀ",
      "duration": "Overnight stay / 2 hours dining",
      "durationKn": "ವಾಸ್ತವ್ಯ ಅಥವಾ 2 ಗಂಟೆ ಊಟ"
    },
    "rating": 4.9,
    "featured": true
  },
  {
    "id": "the-taj-west-end",
    "name": "Taj Hotel",
    "kannadaName": "ತಾಜ್ ಹೋಟೆಲ್",
    "category": "stay-accommodation",
    "tags": [
      "Stay",
      "Heritage Hotel 1887",
      "Colonial Luxury",
      "Race Course Road"
    ],
    "neighbourhood": "Race Course Road, High Grounds",
    "neighbourhoodKn": "ರೇಸ್ ಕೋರ್ಸ್ ರಸ್ತೆ, ಹೈ ಗ್ರೌಂಡ್ಸ್",
    "coordinates": {
      "lat": 12.985912,
      "lng": 77.584912
    },
    "shortDesc": "Heritage luxury brand.",
    "shortDescKn": "ಪರಂಪರಾ ಐಷಾರಾಮಿ ಬ್ರ್ಯಾಂಡ್.",
    "fullDesc": "Taj Hotel is a renowned heritage luxury hotel in Bangalore, offering exceptional service and comfort. Elegant rooms and suites are designed with classic décor and modern amenities. Guests can enjoy curated dining experiences at signature restaurants. The hotel also features event spaces for weddings, conferences, and celebrations. Wellness facilities and concierge services ensure a memorable stay. Taj Hotel is ideal for travelers seeking heritage charm combined with contemporary luxury.",
    "fullDescKn": "ತಾಜ್ ಹೋಟೆಲ್ ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಪರಂಪರೆಯ ಐಷಾರಾಮಿ ಹೋಟೆಲ್ ಆಗಿದ್ದು, ಉತ್ತಮ ಸೇವೆ ಮತ್ತು ಆರಾಮವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಶೈಲಿಪೂರ್ಣ ಶೈಲಿ ಮತ್ತು ಆಧುನಿಕ ಸೌಕರ್ಯಗಳೊಂದಿಗೆ ಕೋಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಅತಿಥಿಗಳು ವಿಶೇಷ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಲ್ಲಿ ಆಹಾರ ಅನುಭವವನ್ನು ಆನಂದಿಸಬಹುದು. ಹೋಟೆಲ್ ಮದುವೆ, ಸಭೆ ಮತ್ತು ಹಬ್ಬದ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸ್ಥಳಗಳನ್ನು ಹೊಂದಿದೆ. ವೆಲ್‍ನೆಸ್ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಕನ್ಸಿಯರ್ಜ್ ಸೇವೆಗಳು ಸ್ಮರಣೀಯ ವಾಸವನ್ನು ಖಾತ್ರಿಗೊಳಿಸುತ್ತವೆ. ತಾಜ್ ಹೋಟೆಲ್ ಪರಂಪರೆಯ ಆಕರ್ಷಣೆ ಮತ್ತು ಆಧುನಿಕ ಐಷಾರಾಮಿ ಅನುಭವವನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hotels/hot1.jpg",
    "visitorInfo": {
      "timing": "24 Hours (Check-in 2:00 PM, Check-out 12:00 PM)",
      "timingKn": "24 ಗಂಟೆ ಲಭ್ಯವಿದೆ",
      "fee": "Rooms from ₹12,000+ / night; Blue Ginger & Machan dining",
      "feeKn": "ಕೊಠಡಿಗಳು ₹12,000+ ರಿಂದ; ಬ್ಲೂ ಜಿಂಜರ್ ರೆಸ್ಟೋರೆಂಟ್ ಲಭ್ಯ",
      "bestTime": "Evening dinner amid 20 acres of 120-year-old heritage trees",
      "bestTimeKn": "ಸಂಜೆಯ ವೇಳೆ ಹೆರಿಟೇಜ್ ಗಾರ್ಡನ್‌ನಲ್ಲಿ ಊಟ",
      "nearestMetro": "Cubbon Park Metro / Vidhana Soudha Metro - 1.5 km",
      "nearestMetroKn": "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಮೆಟ್ರೋ - 1.5 ಕಿ.ಮೀ",
      "duration": "Overnight stay / 2.5 hours dining",
      "durationKn": "ವಾಸ್ತವ್ಯ ಅಥವಾ 2.5 ಗಂಟೆ ಊಟ"
    },
    "rating": 4.9,
    "featured": true
  },
  {
    "id": "itc-gardenia",
    "name": "ITC Gardenia",
    "kannadaName": "ಐಟಿಸಿ ಗಾರ್ಡೀನಿಯಾ",
    "category": "stay-accommodation",
    "tags": [
      "Stay",
      "Luxury",
      "LEED Platinum",
      "Residency Road"
    ],
    "neighbourhood": "Residency Road, Ashok Nagar",
    "neighbourhoodKn": "ರೆಸಿಡೆನ್ಸಿ ರಸ್ತೆ, ಅಶೋಕ್ ನಗರ",
    "coordinates": {
      "lat": 12.966912,
      "lng": 77.597123
    },
    "shortDesc": "Premium business hotel.",
    "shortDescKn": "ಪ್ರಿಮಿಯಂ ವ್ಯಾಪಾರ ಹೋಟೆಲ್.",
    "fullDesc": "ITC Gardenia is a premium business hotel in Bangalore, offering eco-conscious luxury and modern facilities. The hotel has spacious rooms, suites, and meeting spaces for corporate and leisure travelers. Multiple dining options provide international and Indian cuisine in elegant settings. Guests can enjoy spa, fitness, and recreational amenities. ITC Gardenia emphasizes sustainability, service excellence, and guest satisfaction. It is ideal for business conferences, events, and comfortable urban stays.",
    "fullDescKn": "ಐಟಿಸಿ ಗಾರ್ಡೀನಿಯಾ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಪರಿಸರ ಸ್ನೇಹಿ ಐಷಾರಾಮಿ ಮತ್ತು ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುವ ಪ್ರೀಮಿಯಂ ವ್ಯಾಪಾರ ಹೋಟೆಲ್ ಆಗಿದೆ. ಹೋಟೆಲ್‌ನಲ್ಲಿ ವ್ಯಾಪಕ ಕೋಠಡಿಗಳು, ಸೂಟ್‌ಗಳು ಮತ್ತು ಸಭಾಂಗಣಗಳಿವೆ, ಇದು ಕಾರ್ಪೊರೇಟ್ ಮತ್ತು ವಿಶ್ರಾಂತಿ ಪ್ರಯಾಣಿಕರಿಗೆ ಅನುಕೂಲವಾಗಿದೆ. ಹಲವಾರು ಆಹಾರ ಆಯ್ಕೆಗಳು ಐಷಾರಾಮಿ ಪರಿಸರದಲ್ಲಿ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಭಾರತೀಯ ಪಾಕಶಾಲೆಯನ್ನು ಒದಗಿಸುತ್ತವೆ. ಅತಿಥಿಗಳು ಸ್ಪಾ, ಫಿಟ್ನೆಸ್ ಮತ್ತು ಮನರಂಜನಾ ಸೌಲಭ್ಯಗಳನ್ನು ಆನಂದಿಸಬಹುದು. ಐಟಿಸಿ ಗಾರ್ಡೀನಿಯಾ ಸ್ಥಿರತೆಯನ್ನು, ಸೇವಾ ಶ್ರೇಷ್ಠತೆಯನ್ನು ಮತ್ತು ಅತಿಥಿ ತೃಪ್ತಿಯನ್ನು ಪ್ರಾಶಸ್ತ್ಯ ನೀಡುತ್ತದೆ. ವ್ಯವಹಾರ ಸಭೆಗಳು, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಆರಾಮದಾಯಕ ನಗರ ವಾಸಕ್ಕೆ ಇದು ಪರಿಪೂರ್ಣವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hotels/hot3.jpg",
    "visitorInfo": {
      "timing": "24 Hours (Check-in 3:00 PM, Check-out 12:00 PM)",
      "timingKn": "24 ಗಂಟೆ ತೆರೆದಿರುತ್ತದೆ",
      "fee": "Rooms from ₹11,000+ / night",
      "feeKn": "ಕೊಠಡಿಗಳು ₹11,000+ ರಿಂದ",
      "bestTime": "Rooftop dining at Highland Nectar or Kebabs & Kurries",
      "bestTimeKn": "ಸಂಜೆಯ ವೇಳೆ ಕಬಾಬ್ಸ್ ಆಂಡ್ ಕರ್ರಿಸ್ ರೆಸ್ಟೋರೆಂಟ್",
      "nearestMetro": "MG Road Metro (Purple Line) - 1.2 km",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ - 1.2 ಕಿ.ಮೀ",
      "duration": "Overnight stay / 2 hours dining",
      "durationKn": "ವಾಸ್ತವ್ಯ ಅಥವಾ 2 ಗಂಟೆ ಊಟ"
    },
    "rating": 4.8,
    "featured": false
  },
  {
    "id": "the-oberoi-bengaluru",
    "name": "The Oberoi",
    "kannadaName": "ದಿ ಓಬೆರಾಯ್",
    "category": "stay-accommodation",
    "tags": [
      "Stay",
      "Luxury",
      "Centenary Trees",
      "MG Road"
    ],
    "neighbourhood": "M.G. Road",
    "neighbourhoodKn": "ಎಂ.ಜಿ. ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.973412,
      "lng": 77.619812
    },
    "shortDesc": "Luxury hospitality chain.",
    "shortDescKn": "ಐಷಾರಾಮಿ ಆತಿಥ್ಯ ಸರಣಿ.",
    "fullDesc": "The Oberoi is a luxury hospitality chain in Bangalore, offering refined service and tranquil settings. Rooms and suites are elegantly furnished with modern amenities. Guests can enjoy gourmet dining at signature restaurants and unwind at the spa and wellness centers. The hotel provides personalized concierge services, event management, and recreational activities. Lush gardens and serene surroundings enhance the guest experience. The Oberoi is perfect for both leisure and business travelers seeking comfort and elegance.",
    "fullDescKn": "ದಿ ಓಬೆರಾಯ್ ಬೆಂಗಳೂರಿನ ಐಷಾರಾಮಿ ಆತಿಥ್ಯ ಸರಣಿ ಆಗಿದ್ದು, ಶ್ರೇಷ್ಟ ಸೇವೆ ಮತ್ತು ಶಾಂತ ವಾತಾವರಣವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕೋಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳು ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ಸೊಬಗುಮಯವಾಗಿ ಅಲಂಕೃತಗೊಳಿಸಲಾಗಿದೆ. ಅತಿಥಿಗಳು ಸಿಗ್ನೇಚರ್ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಲ್ಲಿ ಉನ್ನತ ಮಟ್ಟದ ಆಹಾರವನ್ನು ಅನುಭವಿಸಬಹುದು ಮತ್ತು ಸ್ಪಾ ಮತ್ತು ವೆಲ್‍ನೆಸ್ ಕೇಂದ್ರಗಳಲ್ಲಿ ವಿಶ್ರಾಂತಿಯಾಗಬಹುದು. ಹೋಟೆಲ್ ವೈಯಕ್ತಿಕ ಕನ್ಸಿಯರ್ಜ್ ಸೇವೆ, ಕಾರ್ಯಕ್ರಮ ನಿರ್ವಹಣೆ ಮತ್ತು ಮನರಂಜನಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಹಸಿರಿನ ಉದ್ಯಾನಗಳು ಮತ್ತು ಶಾಂತ ಪರಿಸರಗಳು ಅತಿಥಿ ಅನುಭವವನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ. ಲೀಜರ್ ಮತ್ತು ವ್ಯವಹಾರ ಪ್ರಯಾಣಿಕರಿಗೆ ಸುಖ ಹಾಗೂ ಐಷಾರಾಮಿ ಅನುಭವಕ್ಕಾಗಿ ದಿ ಓಬೆರಾಯ್ ಪರಿಪೂರ್ಣವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hotels/hot4.jpg",
    "visitorInfo": {
      "timing": "24 Hours",
      "timingKn": "24 ಗಂಟೆ",
      "fee": "Rooms from ₹13,000+ / night; Rim Naam Thai restaurant",
      "feeKn": "ಕೊಠಡಿಗಳು ₹13,000+ ರಿಂದ; ರಿಮ್ ನಾಮ್ ರೆಸ್ಟೋರೆಂಟ್ ಲಭ್ಯ",
      "bestTime": "Alfresco dining under the rain trees",
      "bestTimeKn": "ಮಳೆ ಮರಗಳ ಕೆಳಗೆ ತೆರೆದ ಆವರಣದಲ್ಲಿ ಊಟ",
      "nearestMetro": "Trinity Metro (Purple Line) - 200m",
      "nearestMetroKn": "ಟ್ರಿನಿಟಿ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - 200 ಮೀ",
      "duration": "Overnight stay / 2 hours dining",
      "durationKn": "ವಾಸ್ತವ್ಯ ಅಥವಾ 2 ಗಂಟೆ ಊಟ"
    },
    "rating": 4.8,
    "featured": false
  },
  {
    "id": "rcb-bar-and-cafe",
    "name": "RCB Cafe",
    "kannadaName": "ಆರ್ ಸಿ ಬಿ ಕಾಫೆ",
    "category": "food-dining",
    "tags": [
      "Dining",
      "Cafe",
      "Sports Bar",
      "Museum Road",
      "RCB"
    ],
    "neighbourhood": "Church Street / Museum Road",
    "neighbourhoodKn": "ಚರ್ಚ್ ಸ್ಟ್ರೀಟ್ / ಮ್ಯೂಸಿಯಂ ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.974412,
      "lng": 77.607412
    },
    "shortDesc": "Cricket-themed cafe & lounge.",
    "shortDescKn": "ಕ್ರಿಕೆಟ್ ಥೀಮ್ ಕಫೆ.",
    "fullDesc": "RCB Cafe is a popular cricket-themed café and lounge in Bangalore. It offers a vibrant atmosphere with cricket décor, large screens, and live match screenings. Guests can enjoy themed food, beverages, and snacks while socializing. The café hosts events, contests, and fan activities related to cricket. It is a favorite spot for sports enthusiasts and families. RCB Cafe provides casual and lively spaces for entertainment and leisure.",
    "fullDescKn": "ಆರ್ ಸಿ ಬಿ ಕಾಫೆ ಬೆಂಗಳೂರಿನ ಜನಪ್ರಿಯ ಕ್ರಿಕೆಟ್ ಥೀಮ್ ಕಫೆ ಮತ್ತು ಲೌಂಜ್ ಆಗಿದೆ. ಇದು ಕ್ರಿಕೆಟ್ ಅಲಂಕಾರ, ದೊಡ್ಡ ಪರದೆಗಳು ಮತ್ತು ನೇರ ಪಂದ್ಯ ಪ್ರದರ್ಶನಗಳೊಂದಿಗೆ ಉಲ್ಲಾಸಕರ ವಾತಾವರಣವನ್ನು ನೀಡುತ್ತದೆ. ಅತಿಥಿಗಳು ಥೀಮ್ ಆಹಾರ, ಪಾನೀಯಗಳು ಮತ್ತು ತಿಂಡಿಗಳನ್ನು ಆನಂದಿಸಬಹುದು ಮತ್ತು ಸಾಮಾಜಿಕ ಸಂವಹನ ನಡೆಸಬಹುದು. ಕಫೆ ಕ್ರಿಕೆಟ್ ಸಂಬಂಧಿತ ಕಾರ್ಯಕ್ರಮಗಳು, ಸ್ಪರ್ಧೆಗಳು ಮತ್ತು ಅಭಿಮಾನಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಆಯೋಜಿಸುತ್ತದೆ. ಕ್ರೀಡೆ ಪ್ರಿಯರು ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ಇದು ಮೆಚ್ಚಿನ ಸ್ಥಳವಾಗಿದೆ. ಆರ್ ಸಿ ಬಿ ಕಾಫೆ ಮನರಂಜನೆ ಮತ್ತು ವಿಶ್ರಾಂತಿಯುಳ್ಳ ಸುಲಭವಾದ ಸ್ಥಳಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hotels/hot5.jpg",
    "visitorInfo": {
      "timing": "11:00 AM - 1:00 AM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 11:00 ರಿಂದ ರಾತ್ರಿ 1:00 (ಪ್ರತಿದಿನ)",
      "fee": "₹1,500 - ₹2,500 for two",
      "feeKn": "ಇಬ್ಬರಿಗೆ ₹1,500 - ₹2,500 ಅಂದಾಜು",
      "bestTime": "Match evenings for live sports screening & craft food",
      "bestTimeKn": "ಕ್ರಿಕೆಟ್ ಪಂದ್ಯಗಳ ಸಂಜೆ ಲೈವ್ ಸ್ಕ್ರೀನಿಂಗ್ ವೇಳೆ",
      "nearestMetro": "MG Road Metro (Purple Line) - 200m",
      "nearestMetroKn": "ಎಂ.ಜಿ. ರಸ್ತೆ ಮೆಟ್ರೋ - 200 ಮೀ",
      "duration": "2 hours",
      "durationKn": "2 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "sheraton-grand-brigade-gateway",
    "name": "Sheraton Grand",
    "kannadaName": "ಶೆರೇಟನ್ ಗ್ರ್ಯಾಂಡ್",
    "category": "stay-accommodation",
    "tags": [
      "Stay",
      "Luxury Hotel",
      "Sky Bridge",
      "Rajajinagar"
    ],
    "neighbourhood": "Brigade Gateway, Rajajinagar",
    "neighbourhoodKn": "ಬ್ರಿಗೇಡ್ ಗೇಟ್‌ವೇ, ರಾಜಾಜಿನಗರ",
    "coordinates": {
      "lat": 13.011812,
      "lng": 77.554412
    },
    "shortDesc": "International luxury hotel.",
    "shortDescKn": "ಅಂತಾರಾಷ್ಟ್ರೀಯ ಐಷಾರಾಮಿ ಹೋಟೆಲ್.",
    "fullDesc": "Sheraton Grand is an international luxury hotel in Bangalore with contemporary rooms and world-class facilities. It offers conference halls, banquet spaces, and high-end dining options. Guests can enjoy fitness centers, spa treatments, and recreational activities. The hotel emphasizes exceptional service, comfort, and attention to detail. It is suitable for both business and leisure travelers. Sheraton Grand provides a refined urban experience with global standards of hospitality.",
    "fullDescKn": "ಶೆರೇಟನ್ ಗ್ರ್ಯಾಂಡ್ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ನವೀನ ಕೊಠಡಿಗಳು ಮತ್ತು ವಿಶ್ವಮಟ್ಟದ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಐಷಾರಾಮಿ ಹೋಟೆಲ್ ಆಗಿದೆ. ಇದು ಸಭಾಂಗಣಗಳು, ಭೋಜನಾಲಯಗಳು ಮತ್ತು ಉನ್ನತ ಮಟ್ಟದ ಆಹಾರ ಆಯ್ಕೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಅತಿಥಿಗಳು ಫಿಟ್ನೆಸ್ ಕೇಂದ್ರಗಳು, ಸ್ಪಾ ಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಮನರಂಜನಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಅನುಭವಿಸಬಹುದು. ಹೋಟೆಲ್ ಅತ್ಯುತ್ತಮ ಸೇವೆ, ಆರಾಮ ಮತ್ತು ವಿವರಗಳಿಗೆ ಗಮನ ನೀಡುತ್ತದೆ. ಇದು ವ್ಯವಹಾರ ಮತ್ತು ವಿಶ್ರಾಂತಿ ಪ್ರಯಾಣಿಕರಿಗೆ ತಕ್ಕಂತೆ ಉಚಿತವಾಗಿದೆ. ಶೆರೇಟನ್ ಗ್ರ್ಯಾಂಡ್ ಪ್ರೀಮಿಯಂ ನಗರ ಅನುಭವವನ್ನು ಜಾಗತಿಕ ಆತಿಥ್ಯ ಮಾನದಂಡಗಳೊಂದಿಗೆ ಒದಗಿಸುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hotels/hot6.jpg",
    "visitorInfo": {
      "timing": "24 Hours (Check-in 3:00 PM)",
      "timingKn": "24 ಗಂಟೆ ಸೇವೆ ಲಭ್ಯ",
      "fee": "Rooms from ₹10,000+ / night",
      "feeKn": "ಕೊಠಡಿಗಳು ₹10,000+ ರಿಂದ",
      "bestTime": "Sunset dinner at High Ultra Lounge (421 feet high)",
      "bestTimeKn": "ಸಂಜೆ 421 ಅಡಿ ಎತ್ತರದ ಹೈ ಅಲ್ಟ್ರಾ ಲಾಂಜ್‌ನಲ್ಲಿ ಊಟ",
      "nearestMetro": "Sandal Soap Factory Metro (Green Line) - 250m",
      "nearestMetroKn": "ಸ್ಯಾಂಡಲ್ ಸೋಪ್ ಫ್ಯಾಕ್ಟರಿ ಮೆಟ್ರೋ - 250 ಮೀ",
      "duration": "Overnight stay / 2 hours dining",
      "durationKn": "ವಾಸ್ತವ್ಯ ಅಥವಾ 2 ಗಂಟೆ ಊಟ"
    },
    "rating": 4.7,
    "featured": false
  },
  {
    "id": "manipal-hospital-oldairport",
    "name": "Manipal Hospital",
    "kannadaName": "ಮಣಿಪಾಲ್ ಆಸ್ಪತ್ರೆ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Healthcare",
      "Multi-speciality",
      "Old Airport Road"
    ],
    "neighbourhood": "Old Airport Road, Kodihalli",
    "neighbourhoodKn": "ಹಳೆ ವಿಮಾನ ನಿಲ್ದಾಣ ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.958912,
      "lng": 77.649812
    },
    "shortDesc": "Multi-specialty tertiary care.",
    "shortDescKn": "ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ.",
    "fullDesc": "Manipal Hospital in Bangalore is a leading multi-specialty tertiary care center. It offers advanced medical services including emergency care, surgeries, and specialized departments. The hospital is equipped with modern diagnostic tools and technology for accurate treatment. Expert doctors and trained staff provide high-quality patient care. Manipal Hospital emphasizes patient safety, comfort, and holistic healthcare solutions. It serves both local and international patients with comprehensive medical support.",
    "fullDescKn": "ಮಣಿಪಾಲ್ ಆಸ್ಪತ್ರೆ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಪ್ರಮುಖ ಬಹು-ವಿಶೇಷ ತೃತೀಯ ಕಾಳಜಿ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ತುರ್ತು ಚಿಕಿತ್ಸೆ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಶೇಷ ವಿಭಾಗಗಳನ್ನು ಒಳಗೊಂಡ ಉನ್ನತ ಮಟ್ಟದ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಆಸ್ಪತ್ರೆ ನಿಖರ ಚಿಕಿತ್ಸೆಗಾಗಿ ಆಧುನಿಕ ನಿರ್ಧಾರಾತ್ಮಕ ಸಾಧನಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿದೆ. ಪರಿಣಿತ ವೈದ್ಯರು ಮತ್ತು ತರಬೇತಿಪ್ರಾಪ್ತ ಸಿಬ್ಬಂದಿ ಉತ್ತಮ ರೋಗಿ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುತ್ತಾರೆ. ಮಣಿಪಾಲ್ ಆಸ್ಪತ್ರೆ ರೋಗಿಗಳ ಸುರಕ್ಷತೆ, ಆರಾಮ ಮತ್ತು ಸಂಪೂರ್ಣ ಆರೋಗ್ಯ ಪರಿಹಾರಗಳನ್ನು ಗಮನಿಸುತ್ತದೆ. ಸ್ಥಳೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ರೋಗಿಗಳಿಗೆ ವ್ಯಾಪಕ ವೈದ್ಯಕೀಯ ಸಹಾಯವನ್ನು ನೀಡುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hospitals/hos2.jpg",
    "visitorInfo": {
      "timing": "24/7 Emergency & Inpatient; OPD 8:00 AM - 8:00 PM",
      "timingKn": "24/7 ತುರ್ತು ಸೇವೆ; ಒಪಿಡಿ ಬೆಳಗ್ಗೆ 8:00 ರಿಂದ ರಾತ್ರಿ 8:00",
      "fee": "Doctor consultation fees apply",
      "feeKn": "ವೈದ್ಯರ ಸಮಾಲೋಚನೆ ಶುಲ್ಕ ಅನ್ವಯ",
      "bestTime": "Pre-booked appointments for minimal wait times",
      "bestTimeKn": "ಮುಂಗಡ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಸೂಕ್ತ",
      "nearestMetro": "Indiranagar Metro (Purple Line) - 2.5 km",
      "nearestMetroKn": "ಇಂದಿರಾನಗರ ಮೆಟ್ರೋ - 2.5 ಕಿ.ಮೀ",
      "duration": "1 - 2 hours",
      "durationKn": "1 - 2 ಗಂಟೆ"
    },
    "rating": 4.7,
    "featured": false
  },
  {
    "id": "apollo-hospital-bannerghatta",
    "name": "Apollo Hospital",
    "kannadaName": "ಅಪೋಲೊ ಆಸ್ಪತ್ರೆ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Healthcare",
      "Cardiac & Oncology",
      "Bannerghatta Road"
    ],
    "neighbourhood": "Bannerghatta Road, J.P. Nagar",
    "neighbourhoodKn": "ಬನ್ನೇರುಘಟ್ಟ ರಸ್ತೆ, ಜೆ.ಪಿ. ನಗರ",
    "coordinates": {
      "lat": 12.893412,
      "lng": 77.598123
    },
    "shortDesc": "Leading private healthcare network.",
    "shortDescKn": "ಪ್ರಮುಖ ಖಾಸಗಿ ಆರೋಗ್ಯ ಜಾಲ.",
    "fullDesc": "Apollo Hospital in Bangalore is a premier private healthcare institution offering multi-specialty treatments. It provides advanced diagnostics, emergency services, and specialized medical care. Experienced doctors and staff ensure personalized attention and high-quality care. Apollo Hospital emphasizes modern technology, patient safety, and comfort. It also offers wellness programs and health awareness initiatives. The hospital caters to both local residents and international patients seeking reliable healthcare.",
    "fullDescKn": "ಅಪೋಲೊ ಆಸ್ಪತ್ರೆ ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ಖಾಸಗಿ ಆರೋಗ್ಯ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಬಹು-ವಿಶೇಷ ಚಿಕಿತ್ಸೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಉನ್ನತ ಮಟ್ಟದ ನಿರ್ಧಾರಾತ್ಮಕ ಸೇವೆಗಳು, ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಶೇಷ ವೈದ್ಯಕೀಯ ಆರೈಕೆಯನ್ನು ನೀಡುತ್ತದೆ. ಅನುಭವಸಂಪನ್ನ ವೈದ್ಯರು ಮತ್ತು ಸಿಬ್ಬಂದಿ ವೈಯಕ್ತಿಕ ಗಮನ ಮತ್ತು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಆರೈಕೆಯನ್ನು ಖಾತ್ರಿಗೊಳಿಸುತ್ತಾರೆ. ಅಪೋಲೊ ಆಸ್ಪತ್ರೆ ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ, ರೋಗಿ ಸುರಕ್ಷತೆ ಮತ್ತು ಆರಾಮಕ್ಕೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಇದು ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಜಾಗೃತಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಸಹ ಒದಗಿಸುತ್ತದೆ. ಸ್ಥಳೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ರೋಗಿಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಆರೈಕೆಯನ್ನು ನೀಡುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hospitals/hos1.jpg",
    "visitorInfo": {
      "timing": "24/7 Emergency; OPD 8:30 AM - 7:30 PM",
      "timingKn": "24/7 ತುರ್ತು ಸೇವೆ ಲಭ್ಯವಿದೆ",
      "fee": "Hospital consultation charges",
      "feeKn": "ಆಸ್ಪತ್ರೆ ಶುಲ್ಕಗಳು ಅನ್ವಯಿಸುತ್ತವೆ",
      "bestTime": "Morning appointment slots",
      "bestTimeKn": "ಬೆಳಗ್ಗಿನ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಸಮಯ",
      "nearestMetro": "Jayadeva Metro Junction - 1.5 km",
      "nearestMetroKn": "ಜಯದೇವ ಮೆಟ್ರೋ ಜಂಕ್ಷನ್ - 1.5 ಕಿ.ಮೀ",
      "duration": "1 - 2 hours",
      "durationKn": "1 - 2 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "bgs-gleneagles-hospital",
    "name": "BGS Hospital",
    "kannadaName": "ಬಿಜಿಎಸ್ ಆಸ್ಪತ್ರೆ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Healthcare",
      "Multi-organ Transplant",
      "Kengeri"
    ],
    "neighbourhood": "Kengeri / Uttarahalli Main Road",
    "neighbourhoodKn": "ಕೆಂಗೇರಿ / ಉತ್ತರಹಳ್ಳಿ ರಸ್ತೆ",
    "coordinates": {
      "lat": 12.899412,
      "lng": 77.498123
    },
    "shortDesc": "Comprehensive care & specialties.",
    "shortDescKn": "ವಿಸ್ತೃತ ಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಶೇಷ ವಿಭಾಗಗಳು.",
    "fullDesc": "BGS Hospital provides comprehensive healthcare services including cardiac, orthopedic, and general medicine. It is equipped with modern diagnostic and treatment facilities. Skilled doctors and staff offer personalized care and continuous monitoring. The hospital emphasizes patient safety, comfort, and holistic treatment approaches. Specialized departments cater to various medical needs. BGS Hospital serves both inpatients and outpatients with advanced healthcare solutions.",
    "fullDescKn": "ಬಿಜಿಎಸ್ ಆಸ್ಪತ್ರೆ ಹೃದಯ, ಅಸ್ಥಿ ಮತ್ತು ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳನ್ನು ಒಳಗೊಂಡ ವ್ಯಾಪಕ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಆಧುನಿಕ ನಿರ್ಧಾರಾತ್ಮಕ ಮತ್ತು ಚಿಕಿತ್ಸೆ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿದೆ. ಪರಿಣಿತ ವೈದ್ಯರು ಮತ್ತು ಸಿಬ್ಬಂದಿ ವೈಯಕ್ತಿಕ ಆರೈಕೆಯನ್ನು ಮತ್ತು ನಿರಂತರ ಪರಿಶೀಲನೆ ನೀಡುತ್ತಾರೆ. ಆಸ್ಪತ್ರೆ ರೋಗಿ ಸುರಕ್ಷತೆ, ಆರಾಮ ಮತ್ತು ಸಂಪೂರ್ಣ ಚಿಕಿತ್ಸೆ ವಿಧಾನಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ವಿಭಿನ್ನ ವೈದ್ಯಕೀಯ ಅಗತ್ಯಗಳಿಗೆ ವಿಶೇಷ ವಿಭಾಗಗಳು ಲಭ್ಯವಿವೆ. ಬಿಜಿಎಸ್ ಆಸ್ಪತ್ರೆ ಇನ್ಪೇಷೆಂಟ್ ಮತ್ತು ಔಟ್‌ಪೇಷೆಂಟ್ ಎರಡಕ್ಕೂ ಆಧುನಿಕ ಆರೋಗ್ಯ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hospitals/hos6.jpg",
    "visitorInfo": {
      "timing": "24/7 Emergency; OPD 9:00 AM - 6:00 PM",
      "timingKn": "24/7 ತುರ್ತು ಸೇವೆ; ಒಪಿಡಿ ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00",
      "fee": "Consultation charges apply",
      "feeKn": "ಸಮಾಲೋಚನೆ ಶುಲ್ಕ ಅನ್ವಯ",
      "bestTime": "Morning OPD",
      "bestTimeKn": "ಬೆಳಗ್ಗಿನ ಒಪಿಡಿ",
      "nearestMetro": "Kengeri Metro (Purple Line) - 2 km",
      "nearestMetroKn": "ಕೆಂಗೇರಿ ಮೆಟ್ರೋ - 2 ಕಿ.ಮೀ",
      "duration": "1 - 2 hours",
      "durationKn": "1 - 2 ಗಂಟೆ"
    },
    "rating": 4.6,
    "featured": false
  },
  {
    "id": "narayana-health-city",
    "name": "Narayana Health",
    "kannadaName": "ನಾರಾಯಣ ಆಸ್ಪತ್ರೆ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Healthcare",
      "Cardiac Excellence",
      "Bommasandra"
    ],
    "neighbourhood": "Bommasandra Industrial Area, Anekal Taluk",
    "neighbourhoodKn": "ಬೊಮ್ಮಸಂದ್ರ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ, ಆನೇಕಲ್",
    "coordinates": {
      "lat": 12.812412,
      "lng": 77.693412
    },
    "shortDesc": "Cardiac & specialized services.",
    "shortDescKn": "ಹೃದಯ ಚಿಕಿತ್ಸಾ ಮತ್ತು ವಿಶೇಷ ಸೇವೆಗಳು.",
    "fullDesc": "Narayana Health in Bangalore specializes in cardiac care and other specialized medical services. It provides surgeries, diagnostics, and emergency treatments with advanced technology. Experienced medical teams ensure accurate and timely care for patients. Narayana Health emphasizes patient safety, comfort, and affordability. The hospital also offers preventive health programs and wellness initiatives. It serves a wide community of patients, including international visitors.",
    "fullDescKn": "ನಾರಾಯಣ ಆಸ್ಪತ್ರೆ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಹೃದಯ ಚಿಕಿತ್ಸಾ ಮತ್ತು ಇತರ ವಿಶೇಷ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳಲ್ಲಿ ಪರಿಣತವಾಗಿದೆ. ಇದು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ, ನಿರ್ಧಾರಾತ್ಮಕ ಸೇವೆಗಳು ಮತ್ತು ತುರ್ತು ಚಿಕಿತ್ಸೆಗಳನ್ನು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಒದಗಿಸುತ್ತದೆ. ಅನುಭವಸಂಪನ್ನ ವೈದ್ಯಕೀಯ ತಂಡಗಳು ರೋಗಿಗಳಿಗೆ ನಿಖರ ಮತ್ತು ಸಮಯೋಚಿತ ಆರೈಕೆಯನ್ನು ಖಾತ್ರಿಗೊಳಿಸುತ್ತವೆ. ನಾರಾಯಣ ಆಸ್ಪತ್ರೆ ರೋಗಿ ಸುರಕ್ಷತೆ, ಆರಾಮ ಮತ್ತು ಸೌಲಭ್ಯಕ್ಕೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಆಸ್ಪತ್ರೆ ತಡೆಯುವ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ವೆಲ್‍ನೆಸ್ ಚಟುವಟಿಕೆಗಳನ್ನು ಸಹ ಒದಗಿಸುತ್ತದೆ. ಇದು ಸ್ಥಳೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ರೋಗಿಗಳಿಗೆ ಸೇವೆ ನೀಡುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hospitals/hos3.jpg",
    "visitorInfo": {
      "timing": "24/7 Emergency & Cardiac Trauma; OPD 8:00 AM - 7:00 PM",
      "timingKn": "24/7 ತುರ್ತು ಹೃದ್ರೋಗ ಚಿಕಿತ್ಸೆ; ಒಪಿಡಿ ಬೆಳಗ್ಗೆ 8:00 - ಸಂಜೆ 7:00",
      "fee": "Affordable tertiary care rates",
      "feeKn": "ಕೈಗೆಟುಕುವ ದರದ ತೃತೀಯ ಹಂತದ ಚಿಕಿತ್ಸೆ",
      "bestTime": "Early morning for registrations",
      "bestTimeKn": "ಮುಂಜಾನೆ ನೋಂದಣಿಗೆ ಸೂಕ್ತ",
      "nearestMetro": "Bommasandra Metro (Yellow Line) - 800m",
      "nearestMetroKn": "ಬೊಮ್ಮಸಂದ್ರ ಮೆಟ್ರೋ (ಯೆಲ್ಲೋ ಲೈನ್) - 800 ಮೀ",
      "duration": "2 - 3 hours",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.8,
    "featured": false
  },
  {
    "id": "victoria-hospital-bmc",
    "name": "Victoria Hospital",
    "kannadaName": "ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆಗೆ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Government Healthcare",
      "Heritage 1900",
      "City Market"
    ],
    "neighbourhood": "Kalasipalya / Fort Area",
    "neighbourhoodKn": "ಕಲಾಸಿಪಾಳ್ಯ / ಕೋಟೆ ಆವರಣ",
    "coordinates": {
      "lat": 12.964123,
      "lng": 77.574412
    },
    "shortDesc": "Historic government hospital.",
    "shortDescKn": "ಐತಿಹಾಸಿಕ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ.",
    "fullDesc": "Victoria Hospital is a historic government hospital in Bangalore providing a wide range of public health services. It offers outpatient and inpatient care, emergency treatments, and specialty departments. The hospital has experienced medical staff and modern diagnostic tools. Victoria Hospital emphasizes public health, patient safety, and affordable care. Training programs for medical students and healthcare professionals are also conducted. It serves a diverse population and contributes to community health initiatives.",
    "fullDescKn": "ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆ ಬೆಂಗಳೂರು ನಗರದ ಐತಿಹಾಸಿಕ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯಾಗಿದೆ ಮತ್ತು ವ್ಯಾಪಕ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಔಟ್‌ಪೇಷೆಂಟ್ ಮತ್ತು ಇನ್ಪೇಷೆಂಟ್ ಆರೈಕೆ, ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಶೇಷ ವಿಭಾಗಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಅನುಭವಸಂಪನ್ನ ವೈದ್ಯಕೀಯ ಸಿಬ್ಬಂದಿ ಮತ್ತು ಆಧುನಿಕ ನಿರ್ಧಾರಾತ್ಮಕ ಸಾಧನಗಳಿವೆ. ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ, ರೋಗಿ ಸುರಕ್ಷತೆ ಮತ್ತು ಆರ್ಥಿಕವಾಗಿ ಲಭ್ಯವಿರುವ ಆರೈಕೆಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ವೈದ್ಯಕೀಯ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಆರೋಗ್ಯ ವೃತ್ತಿಪರರಿಗಾಗಿ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಲಾಗುತ್ತದೆ. ಇದು ವೈವಿಧ್ಯಮಯ ಜನಸಂಖ್ಯೆಗೆ ಸೇವೆ ನೀಡುತ್ತದೆ ಮತ್ತು ಸಮುದಾಯ ಆರೋಗ್ಯ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳಿಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hospitals/hos4.jpg",
    "visitorInfo": {
      "timing": "24/7 Emergency & Trauma Centre; OPD 9:00 AM - 1:00 PM",
      "timingKn": "24/7 ತುರ್ತು ಆಘಾತ ಚಿಕಿತ್ಸಾ ಕೇಂದ್ರ; ಒಪಿಡಿ ಬೆಳಗ್ಗೆ 9:00 - ಮಧ್ಯಾಹ್ನ 1:00",
      "fee": "Subsidized government healthcare (Nominal ₹10 OP fee)",
      "feeKn": "ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ಚಿಕಿತ್ಸೆ (ಕೇವಲ ₹10 ನೋಂದಣಿ ಶುಲ್ಕ)",
      "bestTime": "Early morning 8:30 AM for outpatient clinic tokens",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 8:30ಕ್ಕೆ ಟೋಕನ್ ಪಡೆಯಲು ಸೂಕ್ತ",
      "nearestMetro": "Krishna Rajendra Market Metro (Green Line) - 200m",
      "nearestMetroKn": "ಕೆ.ಆರ್. ಮಾರ್ಕೆಟ್ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 200 ಮೀ",
      "duration": "1 - 2 hours",
      "durationKn": "1 - 2 ಗಂಟೆ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "the-bangalore-hospital",
    "name": "Bangalore Hospital",
    "kannadaName": "ಬೆಂಗಳೂರು ಆಸ್ಪತ್ರೆ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Healthcare",
      "Multi-speciality",
      "Basavanagudi"
    ],
    "neighbourhood": "R.V. Road, Basavanagudi",
    "neighbourhoodKn": "ಆರ್.ವಿ. ರಸ್ತೆ, ಬಸವನಗುಡಿ",
    "coordinates": {
      "lat": 12.943412,
      "lng": 77.578123
    },
    "shortDesc": "City multi-specialty centre.",
    "shortDescKn": "ನಗರದ ಬಹು-ವಿಶೇಷ ಕೇಂದ್ರ.",
    "fullDesc": "Bangalore Hospital offers multi-specialty healthcare services including emergency, inpatient, and outpatient care. It has advanced diagnostic and treatment facilities for various medical conditions. Expert doctors and trained staff provide high-quality, patient-focused care. The hospital emphasizes safety, comfort, and personalized treatment plans. It serves both local and international patients seeking reliable healthcare. Bangalore Hospital is known for its modern infrastructure and professional medical services.",
    "fullDescKn": "ಬೆಂಗಳೂರು ಆಸ್ಪತ್ರೆ ಬಹು-ವಿಶೇಷ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ತುರ್ತು, ಇನ್ಪೇಷೆಂಟ್ ಮತ್ತು ಔಟ್‌ಪೇಷೆಂಟ್ ಆರೈಕೆ ಸೇರಿದೆ. ಇದು ವಿವಿಧ ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿಗಳಿಗಾಗಿ ಆಧುನಿಕ ನಿರ್ಧಾರಾತ್ಮಕ ಮತ್ತು ಚಿಕಿತ್ಸೆ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿದೆ. ಪರಿಣಿತ ವೈದ್ಯರು ಮತ್ತು ತರಬೇತಿಪ್ರಾಪ್ತ ಸಿಬ್ಬಂದಿ ಉನ್ನತ ಗುಣಮಟ್ಟದ, ರೋಗಿ-ಕೇಂದ್ರಿತ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುತ್ತಾರೆ. ಆಸ್ಪತ್ರೆ ಸುರಕ್ಷತೆ, ಆರಾಮ ಮತ್ತು ವೈಯಕ್ತಿಕ ಚಿಕಿತ್ಸಾ ಯೋಜನೆಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಇದು ಸ್ಥಳೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ರೋಗಿಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಬೆಂಗಳೂರು ಆಸ್ಪತ್ರೆ ಆಧುನಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
    "history": "An established cultural and urban landmark in Bengaluru.",
    "historyKn": "ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ನಗರ ಹೆಗ್ಗುರುತು.",
    "image": "assets/images/landmarks/hospitals/hos5.jpg",
    "visitorInfo": {
      "timing": "24/7 Emergency; OPD 9:00 AM - 6:00 PM",
      "timingKn": "24/7 ತುರ್ತು ಸೇವೆ; ಒಪಿಡಿ ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00",
      "fee": "Standard consultation fees",
      "feeKn": "ನಿಗದಿತ ಸಮಾಲೋಚನೆ ಶುಲ್ಕ",
      "bestTime": "Morning appointment slots",
      "bestTimeKn": "ಬೆಳಗ್ಗಿನ ಸಮಯ",
      "nearestMetro": "South End Circle Metro / Lalbagh Metro (Green Line) - 400m",
      "nearestMetroKn": "ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್ ಮೆಟ್ರೋ - 400 ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.5,
    "featured": false
  },
  {
    "id": "vv-puram-food-street",
    "name": "VV Puram Food Street (Thindi Beedi)",
    "kannadaName": "ವಿವಿ ಪುರಂ ಆಹಾರ ರಸ್ತೆ (ತಿಂಡಿ ಬೀದಿ)",
    "category": "food-dining",
    "tags": [
      "Food",
      "Street Food",
      "Vegetarian",
      "Night Life",
      "Basavanagudi"
    ],
    "neighbourhood": "Visveswarapuram (VV Puram)",
    "neighbourhoodKn": "ವಿಶ್ವೇಶ್ವರಪುರಂ (ವಿವಿ ಪುರಂ)",
    "coordinates": {
      "lat": 12.953215,
      "lng": 77.578643
    },
    "shortDesc": "Bengaluru's iconic vegetarian food street famed for butter dosas, Congress bun, hot jalebis, and Paddus.",
    "shortDescKn": "ಬೆಂಗಳೂರಿನ ಸುಪ್ರಸಿದ್ಧ ಸಸ್ಯಾಹಾರಿ ತಿಂಡಿ ಬೀದಿ, ಗರಿಗರಿಯಾದ ಬೆಣ್ಣೆ ದೋಸೆ, ಕಾಂಗ್ರೆಸ್ ಬನ್, ಬಿಸಿ ಜಿಲೇಬಿ ಮತ್ತು ಪಡ್ಡುಗಳ ಖಜಾನೆ.",
    "fullDesc": "Thindi Beedi (literally 'Snack Street') in VV Puram comes alive every dusk as over two dozen heritage carts and stalls serve legendary South Indian snacks. Don't miss VB Bakery's famous Congress Kadlekai and Butter Bun, crispy Akki Roti, Ragi Roti, Floating Pani Puri, Davanagere Benne Dosa, and sizzling hot Badam Milk.",
    "fullDescKn": "ವಿವಿ ಪುರಂನ ತಿಂಡಿ ಬೀದಿಯು ಸಂಜೆಯಾಗುತ್ತಿದ್ದಂತೆ ಪರಿಮಳಭರಿತ ರುಚಿಯ ಲೋಕವಾಗಿ ಮಾರ್ಪಡುತ್ತದೆ. ವಿ.ಬಿ. ಬೇಕರಿಯ ಕಾಂಗ್ರೆಸ್ ಬನ್, ಬಿಸಿ ಅಕ್ಕಿ ರೊಟ್ಟಿ, ರಾಗಿ ರೊಟ್ಟಿ, ದಾವಣಗೆರೆ ಬೆಣ್ಣೆ ದೋಸೆ, ಗುಲ್ಕನ್ ಐಸ್‌ಕ್ರೀಮ್ ಮತ್ತು ಬಿಸಿ ಬಾದಾಮಿ ಹಾಲು ಇಲ್ಲಿನ ಜನಪ್ರಿಯ ತಿನಿಸುಗಳು.",
    "history": "Flourished in the mid-20th century as a gathering strip for evening street food near Sajjan Rao Circle.",
    "historyKn": "20ನೇ ಶತಮಾನದ ಮಧ್ಯಭಾಗದಲ್ಲಿ ಸಜ್ಜನ್ ರಾವ್ ಸರ್ಕಲ್ ಬಳಿ ಸಂಜೆಯ ಉಪಾಹಾರ ಪ್ರಿಯರಿಗಾಗಿ ಪ್ರಾರಂಭವಾಯಿತು.",
    "image": "assets/images/landmarks/food/food1.jpg",
    "visitorInfo": {
      "timing": "6:00 PM - 11:30 PM (Daily; most stalls open by 6:30 PM)",
      "timingKn": "ಸಂಜೆ 6:00 ರಿಂದ ರಾತ್ರಿ 11:30 (ಪ್ರತಿದಿನ)",
      "fee": "Food items range from ₹30 to ₹120",
      "feeKn": "ತಿಂಡಿಗಳ ದರ ₹30 ರಿಂದ ₹120",
      "bestTime": "Evening 7:00 PM - 9:30 PM for freshly made hot snacks",
      "bestTimeKn": "ಸಂಜೆ 7:00 ರಿಂದ 9:30 ರ ಸಮಯ",
      "nearestMetro": "National College Metro (Green Line) - 600m",
      "nearestMetroKn": "ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 600 ಮೀ",
      "duration": "1.5 hours",
      "durationKn": "1.5 ಗಂಟೆ"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "mtr-lalbagh",
    "name": "Mavalli Tiffin Room (MTR Lalbagh)",
    "kannadaName": "ಮಾವಳ್ಳಿ ಟಿಫಿನ್ ರೂಮ್ (ಎಂ.ಟಿ.ಆರ್)",
    "category": "food-dining",
    "tags": [
      "Food",
      "Heritage Eatery 1924",
      "Rava Idli",
      "Filter Coffee",
      "Lalbagh"
    ],
    "neighbourhood": "Lalbagh Road, Mavalli",
    "neighbourhoodKn": "ಲಾಲ್‌ಬಾಗ್ ರಸ್ತೆ, ಮಾವಳ್ಳಿ",
    "coordinates": {
      "lat": 12.955412,
      "lng": 77.585912
    },
    "shortDesc": "Legendary heritage restaurant founded in 1924, renowned worldwide for inventing the Rava Idli and authentic silver thali meals.",
    "shortDescKn": "1924ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ಶತಮಾನದ ಇತಿಹಾಸವಿರುವ ಖಾದ್ಯ ಕೇಂದ್ರ, ರವಾ ಇಡ್ಲಿಯ ಜನ್ಮಸ್ಥಾನ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಊಟದ ತಾಣ.",
    "fullDesc": "Founded in 1924 by Parameshwara Maiya and brothers, MTR near Lalbagh Main Gate is an institution of Karnataka culinary tradition. MTR invented the celebrated Rava Idli during World War II when rice was scarce. Served with pure melted ghee, potato saagu, coriander chutney, and steaming froth-topped filter coffee in silver tumblers.",
    "fullDescKn": "1924ರಲ್ಲಿ ಪರಮೇಶ್ವರ ಮಯ್ಯ ಅವರಿಂದ ಪ್ರಾರಂಭವಾದ ಎಂ.ಟಿ.ಆರ್. ಕರ್ನಾಟಕದ ಆಹಾರ ಪರಂಪರೆಯ ಮೈಲಿಗಲ್ಲು. ಎರಡನೇ ಮಹಾಯುದ್ಧದ ಸಮಯದಲ್ಲಿ ಅಕ್ಕಿಯ ಅಭಾವವಿದ್ದಾಗ ರವಾ ಇಡ್ಲಿಯನ್ನು ಸಂಶೋಧಿಸಿದ ಕೀರ್ತಿ ಈ ಸಂಸ್ಥೆಯದ್ದು. ತುಪ್ಪದ ರವಾ ಇಡ್ಲಿ, ಮಸಾಲೆ ದೋಸೆ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಬೆಳ್ಳಿ ತಟ್ಟೆಯ ಊಟ ಇಲ್ಲಿನ ವಿಶೇಷ.",
    "history": "Celebrated its centenary (100 years of culinary service) in 2024; retains original recipes and bronze kettle coffee brewing.",
    "historyKn": "2024ರಲ್ಲಿ 100 ವರ್ಷಗಳ ಸಂಭ್ರಮವನ್ನು ಆಚರಿಸಿಕೊಂಡಿದೆ; ಶತಮಾನದ ಸಾಂಪ್ರದಾಯಿಕ ಪಾಕಪದ್ಧತಿಯನ್ನು ಇಂದಿಗೂ ಉಳಿಸಿಕೊಂಡಿದೆ.",
    "image": "assets/images/landmarks/food/food2.jpg",
    "visitorInfo": {
      "timing": "6:30 AM - 11:00 AM & 12:30 PM - 8:30 PM (Closed Mondays)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:30 - 11:00 ಮತ್ತು ಮಧ್ಯಾಹ್ನ 12:30 - ರಾತ್ರಿ 8:30 (ಸೋಮವಾರ ರಜೆ)",
      "fee": "Breakfast ₹150 - ₹250 / person; Full Meals ₹350",
      "feeKn": "ಉಪಾಹಾರ ₹150 - ₹250; ಸಂಪೂರ್ಣ ಊಟ ₹350",
      "bestTime": "Morning breakfast at 7:00 AM straight after a morning walk in Lalbagh",
      "bestTimeKn": "ಲಾಲ್‌ಬಾಗ್ ಮುಂಜಾನೆಯ ವಾಕಿಂಗ್ ನಂತರ ಬೆಳಗ್ಗೆ 7:00ಕ್ಕೆ",
      "nearestMetro": "Lalbagh Metro (Green Line) - 500m",
      "nearestMetroKn": "ಲಾಲ್‌ಬಾಗ್ ಮೆಟ್ರೋ - 500 ಮೀ",
      "duration": "1 hour",
      "durationKn": "1 ಗಂಟೆ"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "vidyarthi-bhavan",
    "name": "Vidyarthi Bhavan Gandhi Bazaar",
    "kannadaName": "ವಿದ್ಯಾರ್ಥಿ ಭವನ್ ಗಾಂಧಿ ಬಜಾರ್",
    "category": "food-dining",
    "tags": [
      "Food",
      "Crispy Masale Dosa",
      "Heritage 1943",
      "Basavanagudi",
      "Coffee"
    ],
    "neighbourhood": "Gandhi Bazaar, Basavanagudi",
    "neighbourhoodKn": "ಗಾಂಧಿ ಬಜಾರ್, ಬಸವನಗುಡಿ",
    "coordinates": {
      "lat": 12.944312,
      "lng": 77.571245
    },
    "shortDesc": "Historic 1943 South Indian tiffin house famous for signature golden-crisp thick butter masala dosas and heritage literary ambience.",
    "shortDescKn": "1943ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ಐತಿಹಾಸಿಕ ತಿನಿಸು ಕೇಂದ್ರ, ಗರಿಗರಿಯಾದ ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ ಮತ್ತು ಸಾಹಿತ್ಯಿಕ ಪರಿಸರ.",
    "fullDesc": "Founded in 1943 by Venkataramana Ural, Vidyarthi Bhavan started as a modest student canteen and grew into Bengaluru's most celebrated dosa landmark. The dark-wood walls are adorned with portraits of Kannada literary giants, artists, and jurists who frequented its tables. Watch the waiters balance towers of 15 to 20 plates of sizzling ghee dosas.",
    "fullDescKn": "1943ರಲ್ಲಿ ವೆಂಕಟರಮಣ ಉರಾಳರಿಂದ ವಿದ್ಯಾರ್ಥಿ ಭವನ ಪ್ರಾರಂಭವಾಯಿತು. ಕವಿಗಳು, ಸಾಹಿತಿಗಳು, ಕಲಾವಿದರ ನೆಚ್ಚಿನ ತಾಣವಾಗಿದ್ದ ಈ ಹೋಟೆಲ್‌ನ ಗೋಡೆಗಳಲ್ಲಿ ಮಹನೀಯರ ರೇಖಾಚಿತ್ರಗಳಿವೆ. ನುರಿತ ಸರ್ವರ್‌ಗಳು ಒಂದೇ ಬಾರಿಗೆ 15-20 ದೋಸೆಗಳ ತಟ್ಟೆಗಳನ್ನು ಕೈಯಲ್ಲಿ ಹಿಡಿದು ತರುವ ದೃಶ್ಯ ಅತ್ಯಂತ ಆಕರ್ಷಕ.",
    "history": "Founded in 1943; historically patronized by writers like Masti Venkatesha Iyengar, D.V. Gundappa, and G.P. Rajarathnam.",
    "historyKn": "1943ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾಗಿ ಮಾಸ್ತಿ, ಡಿವಿಜಿ, ಜಿ.ಪಿ. ರಾಜರತ್ನಂ ಮುಂತಾದ ಸಾಹಿತ್ಯ ದಿಗ್ಗಜರ ಆಡುಂಬೋಲವಾಗಿತ್ತು.",
    "image": "assets/images/landmarks/food/food3.jpg",
    "visitorInfo": {
      "timing": "6:30 AM - 11:30 AM & 2:00 PM - 8:00 PM (Closed Fridays)",
      "timingKn": "ಬೆಳಗ್ಗೆ 6:30 - 11:30 ಮತ್ತು ಮಧ್ಯಾಹ್ನ 2:00 - ರಾತ್ರಿ 8:00 (ಶುಕ್ರವಾರ ರಜೆ)",
      "fee": "₹70 - ₹120 per dosa / coffee",
      "feeKn": "ದೋಸೆ / ಕಾಫಿ ₹70 - ₹120",
      "bestTime": "Early weekday morning around 7:00 AM to beat long waiting queues",
      "bestTimeKn": "ವಾರದ ದಿನಗಳಲ್ಲಿ ಮುಂಜಾನೆ 7:00ಕ್ಕೆ ಕ್ಯೂ ಕಡಿಮೆ ಇರುವ ವೇಳೆ",
      "nearestMetro": "National College Metro (Green Line) - 1 km",
      "nearestMetroKn": "ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್ ಮೆಟ್ರೋ - 1 ಕಿ.ಮೀ",
      "duration": "45 mins - 1 hour",
      "durationKn": "45 ನಿಮಿಷ - 1 ಗಂಟೆ"
    },
    "rating": 4.8,
    "featured": true
  },
  {
    "id": "ctr-malleswaram",
    "name": "Shri Sagar (Central Tiffin Room - CTR)",
    "kannadaName": "ಶ್ರೀ ಸಾಗರ್ (ಸೆಂಟ್ರಲ್ ಟಿಫಿನ್ ರೂಮ್ - ಸಿ.ಟಿ.ಆರ್)",
    "category": "food-dining",
    "tags": [
      "Food",
      "Benne Masale Dosa",
      "Heritage 1920s",
      "Malleswaram",
      "Coffee"
    ],
    "neighbourhood": "7th Cross, Margosa Road, Malleswaram",
    "neighbourhoodKn": "7ನೇ ಕ್ರಾಸ್, ಮಾರ್ಗೋಸಾ ರಸ್ತೆ, ಮಲ್ಲೇಶ್ವರಂ",
    "coordinates": {
      "lat": 12.998412,
      "lng": 77.570912
    },
    "shortDesc": "Malleswaram's crown jewel of South Indian breakfast, revered for the creamiest, crispiest Benne Masale Dosa.",
    "shortDescKn": "ಮಲ್ಲೇಶ್ವರಂನ ಪ್ರಸಿದ್ಧ ಉಪಾಹಾರ ಮಂದಿರ, ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ ಹಾಗೂ ಫಿಲ್ಟರ್ ಕಾಫಿಗೆ ಹೆಸರುವಾಸಿ.",
    "fullDesc": "Central Tiffin Room (now Shri Sagar) opened in the 1920s on Margosa Road and has maintained its reputation for serving Bengaluru's crispest Benne Masale Dosa. Golden-brown and blistered on the outside, feather-soft on the inside, generously bathed in pure white butter and served with spicy mint and coconut chutneys.",
    "fullDescKn": "1920ರ ದಶಕದಲ್ಲಿ ಪ್ರಾರಂಭವಾದ ಸಿ.ಟಿ.ಆರ್. (ಶ್ರೀ ಸಾಗರ್) ಮಲ್ಲೇಶ್ವರಂನ ಹೆಮ್ಮೆಯಾಗಿದೆ. ಗರಿಗರಿಯಾದ ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ, ಮದ್ದೂರು ವಡೆ, ಕೇಸರಿಬಾತ್ ಹಾಗೂ ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ ಇಲ್ಲಿನ ಖಾಯಂ ಆಕರ್ಷಣೆ.",
    "history": "Founded in the 1920s by Y.V. Subramanyam and brothers; later sustained by Sanjeeva S. Poojari.",
    "historyKn": "1920ರ ದಶಕದಲ್ಲಿ ವೈ.ವಿ. ಸುಬ್ರಹ್ಮಣ್ಯಂ ಅವರಿಂದ ಸ್ಥಾಪಿತವಾಗಿ ಶತಮಾನದ ಸವಿಯನ್ನು ಮುಂದುವರಿಸಿದೆ.",
    "image": "assets/images/landmarks/food/food4.jpg",
    "visitorInfo": {
      "timing": "7:00 AM - 12:30 PM & 4:00 PM - 9:30 PM (Daily)",
      "timingKn": "ಬೆಳಗ್ಗೆ 7:00 - ಮಧ್ಯಾಹ್ನ 12:30 ಮತ್ತು ಸಂಜೆ 4:00 - ರಾತ್ರಿ 9:30 (ಪ್ರತಿದಿನ)",
      "fee": "₹75 - ₹130 per person",
      "feeKn": "₹75 - ₹130 ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ",
      "bestTime": "Morning 7:30 AM or afternoon 4:00 PM for freshly churned dosas",
      "bestTimeKn": "ಬೆಳಗ್ಗೆ 7:30 ಅಥವಾ ಸಂಜೆ 4:00 ರ ಸಮಯ",
      "nearestMetro": "Sampige Road Metro / Sandal Soap Factory Metro - 1.2 km",
      "nearestMetroKn": "ಸಂಪಿಗೆ ರೋಡ್ ಮೆಟ್ರೋ - 1.2 ಕಿ.ಮೀ",
      "duration": "45 mins",
      "durationKn": "45 ನಿಮಿಷ"
    },
    "rating": 4.8,
    "featured": false
  },
  {
    "id": "iisc-bangalore",
    "name": "Indian Institute of Science (IISc)",
    "kannadaName": "ಭಾರತೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (ಐ.ಐ.ಎಸ್ಸಿ)",
    "category": "technology-innovation",
    "tags": [
      "Tech",
      "Research",
      "Jamsetji Tata",
      "Malleswaram",
      "Science"
    ],
    "neighbourhood": "CV Raman Road, Malleswaram",
    "neighbourhoodKn": "ಸಿ.ವಿ. ರಾಮನ್ ರಸ್ತೆ, ಮಲ್ಲೇಶ್ವರಂ",
    "coordinates": {
      "lat": 13.021945,
      "lng": 77.567123
    },
    "shortDesc": "India's premier scientific research and higher education institution, founded in 1909 by Jamsetji Tata and Maharaja Krishnaraja Wadiyar IV.",
    "shortDescKn": "1909ರಲ್ಲಿ ಜೆ.ಎನ್. ಟಾಟಾ ಹಾಗೂ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರಿಂದ ಸ್ಥಾಪಿತವಾದ ಭಾರತದ ಅತ್ಯುನ್ನತ ವಿಜ್ಞಾನ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ.",
    "fullDesc": "Sprawling across 400 canopy-covered acres in northern Bengaluru, the Indian Institute of Science is India's foremost research university. The monumental Main Building features classical stone arches, a 160-foot tower, and a statue of founder Jamsetji Tata. Nobel Laureate Sir C.V. Raman, Homi Bhabha, Vikram Sarabhai, and Satish Dhawan made historic contributions here.",
    "fullDescKn": "400 ಎಕರೆ ವಿಸ್ತಾರವಾದ ಹಸಿರು ಆವರಣದಲ್ಲಿರುವ ಐ.ಐ.ಎಸ್ಸಿ. ಭಾರತದ ಪ್ರಮುಖ ಸಂಶೋಧನಾ ಕೇಂದ್ರವಾಗಿದೆ. 160 ಅಡಿ ಎತ್ತರದ ಗೋಪುರವಿರುವ ಸುಂದರ ಮುಖ್ಯ ಕಟ್ಟಡ, ಸರ್ ಸಿ.ವಿ. ರಾಮನ್, ಹೋಮಿ ಬಾಬಾ, ವಿಕ್ರಮ್ ಸಾರಾಭಾಯಿ ಮುಂತಾದ ಮಹಾನ್ ವಿಜ್ಞಾನಿಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸಿದ ಪವಿತ್ರ ಭೂಮಿ.",
    "history": "Founded in 1909 with land generously donated by the Maharaja of Mysore; Sir C.V. Raman served as its first Indian Director in 1933.",
    "historyKn": "ಮೈಸೂರು ಮಹಾರಾಜರು ಉಚಿತವಾಗಿ ನೀಡಿದ ಜಮೀನಿನಲ್ಲಿ 1909ರಲ್ಲಿ ಪ್ರಾರಂಭವಾಯಿತು; 1933ರಲ್ಲಿ ಸರ್ ಸಿ.ವಿ. ರಾಮನ್ ಮೊದಲ ಭಾರತೀಯ ನಿರ್ದೇಶಕರಾಗಿದ್ದರು.",
    "image": "assets/images/landmarks/tech/it1.jpg",
    "visitorInfo": {
      "timing": "Campus exterior viewable from perimeter; Annual Open Day held every March for public entry",
      "timingKn": "ಪ್ರತಿ ವರ್ಷ ಮಾರ್ಚ್ ತಿಂಗಳಲ್ಲಿ ಸಾರ್ವಜನಿಕರಿಗಾಗಿ ವಾರ್ಷಿಕ ಓಪನ್ ಡೇ ಆಯೋಜಿಸಲಾಗುತ್ತದೆ",
      "fee": "Free on Open Day / Official visit by permit",
      "feeKn": "ಓಪನ್ ಡೇ ದಿನ ಉಚಿತ ಪ್ರವೇಶ",
      "bestTime": "Annual Science Open Day (held on a Saturday in March) or peaceful perimeter drive",
      "bestTimeKn": "ಮಾರ್ಚ್ ತಿಂಗಳ ಸೈನ್ಸ್ ಓಪನ್ ಡೇ ಅತ್ಯುತ್ತಮ",
      "nearestMetro": "Yeshwanthpur Metro / Sandal Soap Factory Metro (Green Line) - 1.2 km",
      "nearestMetroKn": "ಯಶವಂತಪುರ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) - 1.2 ಕಿ.ಮೀ",
      "duration": "2 - 3 hours (on Open Day)",
      "durationKn": "2 - 3 ಗಂಟೆಗಳು"
    },
    "rating": 4.9,
    "featured": true
  },
  {
    "id": "itpb-whitefield",
    "name": "International Tech Park Bangalore (ITPB)",
    "kannadaName": "ಅಂತಾರಾಷ್ಟ್ರೀಯ ಟೆಕ್ ಪಾರ್ಕ್ ಬೆಂಗಳೂರು (ಐಟಿಪಿಬಿ)",
    "category": "technology-innovation",
    "tags": [
      "Tech",
      "IT Park",
      "Whitefield",
      "Silicon Valley",
      "Pioneer"
    ],
    "neighbourhood": "Whitefield",
    "neighbourhoodKn": "ವೈಟ್‌ಫೀಲ್ಡ್",
    "coordinates": {
      "lat": 12.986123,
      "lng": 77.728912
    },
    "shortDesc": "Pioneering 69-acre IT technology park established in 1994, the bedrock landmark that catalyzed Bangalore's software revolution.",
    "shortDescKn": "1994ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ 69 ಎಕರೆ ವಿಸ್ತೀರ್ಣದ ಮೊದಲ ಹೈಟೆಕ್ ಪಾರ್ಕ್, ಬೆಂಗಳೂರಿನ ಸಾಫ್ಟ್‌ವೇರ್ ಕ್ರಾಂತಿಗೆ ಮುನ್ನುಡಿ ಬರೆದ ತಾಣ.",
    "fullDesc": "Inaugurated as a joint venture between India and Singapore in 1998, ITPB in Whitefield was the foundational milestone that solidified Bangalore's identity as the Silicon Valley of Asia. Iconic multi-tenant buildings like Discoverer, Innovator, Creator, and Explorer accommodate hundreds of multinational technology enterprises and over 40,000 professionals.",
    "fullDescKn": "ಭಾರತ ಮತ್ತು ಸಿಂಗಾಪುರ್ ಸಹಯೋಗದಲ್ಲಿ 1998ರಲ್ಲಿ ಉದ್ಘಾಟನೆಗೊಂಡ ಐಟಿಪಿಬಿ, ಬೆಂಗಳೂರನ್ನು ವಿಶ್ವದ ತಂತ್ರಜ್ಞಾನ ನಕ್ಷೆಯಲ್ಲಿ ರಾರಾಜಿಸುವಂತೆ ಮಾಡಿತು. ಡಿಸ್ಕವರರ್ ಮತ್ತು ಇನ್ನೋವೇಟರ್ ಮುಂತಾದ ಬೃಹತ್ ಕಟ್ಟಡಗಳಲ್ಲಿ ನೂರಾರು ಜಾಗತಿಕ ಸಾಫ್ಟ್‌ವೇರ್ ಕಂಪನಿಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿವೆ.",
    "history": "Jointly envisioned by Prime Ministers P.V. Narasimha Rao and Goh Chok Tong in 1992; opened in 1998.",
    "historyKn": "1992ರಲ್ಲಿ ಭಾರತ ಮತ್ತು ಸಿಂಗಾಪುರ ಪ್ರಧಾನಿಗಳ ಒಡಂಬಡಿಕೆಯಂತೆ ರೂಪುಗೊಂಡು 1998ರಲ್ಲಿ ಕಾರ್ಯಾರಂಭ ಮಾಡಿತು.",
    "image": "assets/images/landmarks/tech/it2.jpg",
    "visitorInfo": {
      "timing": "24/7 Operations; Corporate visitors during 9:00 AM - 6:00 PM",
      "timingKn": "24/7 ಕಾರ್ಯಾಚರಣೆ; ಅಧಿಕೃತ ಭೇಟಿ ಬೆಳಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00",
      "fee": "Access with client/visitor badge",
      "feeKn": "ಕ್ಯಾಂಪಸ್ ಪಾಸ್ ಅಗತ್ಯ",
      "bestTime": "Business hours or evening view of Park Square Mall",
      "bestTimeKn": "ಕಚೇರಿ ಸಮಯ ಅಥವಾ ಸಂಜೆ ಪಾರ್ಕ್ ಸ್ಕ್ವೇರ್ ಮಾಲ್ ವೀಕ್ಷಣೆ",
      "nearestMetro": "ITPB Metro / Pattandur Agrahara Metro (Purple Line) - Direct footbridge",
      "nearestMetroKn": "ಐಟಿಪಿಬಿ ಮೆಟ್ರೋ (ಪರ್ಪಲ್ ಲೈನ್) - ನೇರ ಪಾದಚಾರಿ ಸೇತುವೆ",
      "duration": "1.5 hours",
      "durationKn": "1.5 ಗಂಟೆ"
    },
    "rating": 4.7,
    "featured": false
  },
  {
    "id": "kia-terminal2",
    "name": "Kempegowda International Airport (Terminal 2)",
    "kannadaName": "ಕೆಂಪೇಗೌಡ ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ (ಟರ್ಮಿನಲ್ 2)",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Airport",
      "Terminal in a Garden",
      "Bamboo Architecture",
      "Devanahalli"
    ],
    "neighbourhood": "Devanahalli",
    "neighbourhoodKn": "ದೇವನಹಳ್ಳಿ",
    "coordinates": {
      "lat": 13.198889,
      "lng": 77.706111
    },
    "shortDesc": "Award-winning 'Terminal in a Garden' built with engineered bamboo, indoor waterfalls, botanical bells, and lush hanging gardens.",
    "shortDescKn": "ಯುನೆಸ್ಕೋದ ಅತ್ಯಂತ ಸುಂದರ ವಿಮಾನ ನಿಲ್ದಾಣ ಪ್ರಶಸ್ತಿ ಪಡೆದ 'ಉದ್ಯಾನ ನಗರಿಯ ಟರ್ಮಿನಲ್', ಬಿದಿರಿನ ವಾಸ್ತುಶಿಲ್ಪ ಹಾಗೂ ಒಳಾಂಗಣ ಜಲಪಾತ.",
    "fullDesc": "Inaugurated in November 2022, Terminal 2 of Kempegowda International Airport is recognized globally by UNESCO's Prix Versailles as one of the world's most beautiful airports. Designed as a poetic tribute to the Garden City, passenger corridors wind through four-story indoor hanging green walls, engineered bamboo lattices, tranquil reflecting pools, and art installations.",
    "fullDescKn": "2022ರಲ್ಲಿ ಉದ್ಘಾಟನೆಗೊಂಡ ಟರ್ಮಿನಲ್ 2 ಯುನೆಸ್ಕೋ ಸಂಸ್ಥೆಯಿಂದ ಜಗತ್ತಿನ ಅತಿ ಸುಂದರ ವಿಮಾನ ನಿಲ್ದಾಣವೆಂದು ಪುರಸ್ಕೃತವಾಗಿದೆ. ನೈಸರ್ಗಿಕ ಬಿದಿರು, ಒಳಾಂಗಣ ಹಸಿರು ಉದ್ಯಾನಗಳು, ಜಲಪಾತಗಳು ಹಾಗೂ ಅತ್ಯಾಧುನಿಕ ಡಿಜಿಟಲ್ ತಂತ್ರಜ್ಞಾನಗಳು ಪ್ರವಾಸಿಗರಿಗೆ ಮರೆಯಲಾಗದ ಅನುಭವ ನೀಡುತ್ತವೆ.",
    "history": "Bengaluru's greenfield international airport opened in May 2008 in Devanahalli; Terminal 2 began operations in January 2023.",
    "historyKn": "2008ರಲ್ಲಿ ದೇವನಹಳ್ಳಿಯಲ್ಲಿ ಪ್ರಾರಂಭವಾದ ವಿಮಾನ ನಿಲ್ದಾಣದ ಟರ್ಮಿನಲ್ 2 ಜನವರಿ 2023ರಲ್ಲಿ ಕಾರ್ಯಾಚರಣೆಗೆ ಬಂದಿತು.",
    "image": "assets/images/landmarks/essential/kia-terminal2.jpg",
    "visitorInfo": {
      "timing": "24 Hours (Ticketed air passengers; Arrival visitor boulevard open)",
      "timingKn": "24 ಗಂಟೆ ಕಾರ್ಯಾಚರಣೆ",
      "fee": "Air ticket required for terminal gate; Parking/Boulevard public access",
      "feeKn": "ವಿಮಾನ ಪ್ರಯಾಣಿಕರಿಗೆ ಪ್ರವೇಶ; ಹೊರಗಿನ ಪಾರ್ಕಿಂಗ್ ಆವರಣ ಲಭ್ಯ",
      "bestTime": "Night time when illuminated bamboo chandeliers and gardens shine",
      "bestTimeKn": "ರಾತ್ರಿಯ ವೇಳೆ ಬಿದಿರಿನ ದೀಪಾಲಂಕಾರದ ನೋಟ",
      "nearestMetro": "Direct BMTC Vayu Vajra Volvo AC buses from Majestic, Electronic City, Whitefield",
      "nearestMetroKn": "ನಗರದ ಎಲ್ಲಾ ಪ್ರಮುಖ ಭಾಗಗಳಿಂದ ವಾಯುವಜ್ರ ವೋಲ್ವೋ ಎಸಿ ಬಸ್ ಸೌಲಭ್ಯ",
      "duration": "Flight transit / 1 hour boulevard exploration",
      "durationKn": "ವಿಮಾನ ಪ್ರಯಾಣ / 1 ಗಂಟೆ ವೀಕ್ಷಣೆ"
    },
    "rating": 4.9,
    "featured": true
  },
  {
    "id": "ksr-bengaluru-majestic",
    "name": "KSR Bengaluru City Railway Station & Majestic Transit Hub",
    "kannadaName": "ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ ರೈಲು ನಿಲ್ದಾಣ ಮತ್ತು ಮೆಜೆಸ್ಟಿಕ್ ಸಾರಿಗೆ ಕೇಂದ್ರ",
    "category": "essential-services",
    "tags": [
      "Essential",
      "Transit",
      "Railway",
      "Metro Interchange",
      "Majestic"
    ],
    "neighbourhood": "Majestic, Gandhi Nagar",
    "neighbourhoodKn": "ಮೆಜೆಸ್ಟಿಕ್, ಗಾಂಧಿ ನಗರ",
    "coordinates": {
      "lat": 12.978123,
      "lng": 77.569412
    },
    "shortDesc": "The nerve center of Karnataka public transport, connecting intercity rail, metro interchange, and bus networks.",
    "shortDescKn": "ಕರ್ನಾಟಕದ ಸಾರಿಗೆಯ ಮಹಾ ಕೇಂದ್ರ, ರೈಲ್ವೆ, ನಮ್ಮ ಮೆಟ್ರೋ ಇಂಟರ್‌ಚೇಂಜ್ ಹಾಗೂ ನಗರ-ಗ್ರಾಮೀಣ ಬಸ್ ನಿಲ್ದಾಣಗಳ ಸಂಗಮ.",
    "fullDesc": "Named after freedom fighter Krantivira Sangolli Rayanna, KSR Bengaluru is the city's historic primary railway junction. Directly across the pedestrian subways lies Kempegowda Bus Station (Majestic) and the Nadaprabhu Kempegowda Metro Interchange, where Bangalore's Purple and Green Metro lines intersect underground.",
    "fullDescKn": "ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ ರೈಲು ನಿಲ್ದಾಣವು ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ರೈಲ್ವೆ ಕೇಂದ್ರವಾಗಿದೆ. ಇದರ ಸಮೀಪದಲ್ಲೇ ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡ ಮೆಜೆಸ್ಟಿಕ್ ಮೆಟ್ರೋ ಇಂಟರ್‌ಚೇಂಜ್ (ಹಸಿರು ಮತ್ತು ನೇರಳೆ ಮಾರ್ಗಗಳ ಸಂಗಮ) ಹಾಗೂ ಕೆಂಪೇಗೌಡ ಬಸ್ ನಿಲ್ದಾಣವಿದ್ದು, ಲಕ್ಷಾಂತರ ಪ್ರಯಾಣಿಕರಿಗೆ ಸಂಪರ್ಕ ಕಲ್ಪಿಸುತ್ತದೆ.",
    "history": "Opened in 1882 during the British Raj; interconnected with metro and high-speed rail corridors in modern times.",
    "historyKn": "1882ರಲ್ಲಿ ಸ್ಥಾಪಿತವಾಗಿ ನಂತರ ದೇಶದ ಅತ್ಯಂತ ಜನನಿಬಿಡ ಸಾರಿಗೆ ಕೇಂದ್ರಗಳಲ್ಲಿ ಒಂದಾಗಿ ಬೆಳೆದಿದೆ.",
    "image": "assets/images/landmarks/essential/majestic.jpg",
    "visitorInfo": {
      "timing": "24/7 Transit Services",
      "timingKn": "24 ಗಂಟೆ ಸಾರಿಗೆ ಸೇವೆ",
      "fee": "Platform ticket ₹10 / Train fares apply",
      "feeKn": "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಟಿಕೆಟ್ ₹10 / ರೈಲು ಪ್ರಯಾಣ ದರ ಪ್ರತ್ಯೇಕ",
      "bestTime": "Accessible anytime around the clock",
      "bestTimeKn": "ಯಾವುದೇ ಸಮಯದಲ್ಲಿ",
      "nearestMetro": "Nadaprabhu Kempegowda Metro Station (Majestic) - Direct underground connection",
      "nearestMetroKn": "ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡ ಮೆಟ್ರೋ ನಿಲ್ದಾಣ (ಮೆಜೆಸ್ಟಿಕ್) - ನೇರ ಸಂಪರ್ಕ",
      "duration": "30 - 45 mins",
      "durationKn": "30 - 45 ನಿಮಿಷ"
    },
    "rating": 4.6,
    "featured": false
  }
];

const CURATED_ITINERARIES = [
  {
    "id": "royal-heritage-trail",
    "title": {
      "en": "Royal Heritage & Historic Pete Trail",
      "ka": "ರಾಜ ಪರಂಪರೆ ಮತ್ತು ಐತಿಹಾಸಿಕ ಪೇಟೆ ಪ್ರವಾಸ"
    },
    "summary": {
      "en": "Experience 500 years of Bengaluru: from Kempe Gowda's stone fort to Tipu Sultan's wooden palace, flower bazaars, and Tudor royal grounds.",
      "ka": "ಕೆಂಪೇಗೌಡರ ಕೋಟೆ, ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಬೇಸಿಗೆ ಅರಮನೆ, ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆಯ ಹೂವಿನ ರಾಶಿ ಹಾಗೂ ಬೆಂಗಳೂರು ಅರಮನೆಯ ಭವ್ಯತೆಯ 1 ದಿನದ ಪ್ರವಾಸ."
    },
    "duration": {
      "en": "1 Full Day (8 Hours)",
      "ka": "1 ಪೂರ್ಣ ದಿನ (8 ಗಂಟೆ)"
    },
    "pace": {
      "en": "Moderate Walking",
      "ka": "ಮಧ್ಯಮ ನಡಿಗೆ"
    },
    "recommendedTransport": {
      "en": "Metro (Green Line) & Auto-rickshaw",
      "ka": "ನಮ್ಮ ಮೆಟ್ರೋ (ಗ್ರೀನ್ ಲೈನ್) ಮತ್ತು ಆಟೋ"
    },
    "stops": [
      {
        "placeId": "kr-market",
        "timeSlot": "6:00 AM - 7:30 AM",
        "note": {
          "en": "Start at dawn inside the sensory circular flower market hall when truckloads of fresh marigolds and jasmine arrive.",
          "ka": "ಮುಂಜಾನೆ ಹೂವಿನ ಮಾರುಕಟ್ಟೆಯಿಂದ ಪ್ರಾರಂಭಿಸಿ, ತಾಜಾ ಮಲ್ಲಿಗೆ ಮತ್ತು ಚೆಂಡು ಹೂವಿನ ವ್ಯಾಪಾರವನ್ನು ವೀಕ್ಷಿಸಿ."
        }
      },
      {
        "placeId": "bengaluru-fort",
        "timeSlot": "7:45 AM - 8:30 AM",
        "note": {
          "en": "Walk 200m to the Delhi Gate bastion of Bengaluru Fort, founded in 1537 by Kempe Gowda.",
          "ka": "ಕೇವಲ 200 ಮೀಟರ್ ನಡೆದು 1537ರ ಐತಿಹಾಸಿಕ ಬೆಂಗಳೂರು ಕೋಟೆಯ ದೆಹಲಿ ಬಾಗಿಲನ್ನು ವೀಕ್ಷಿಸಿ."
        }
      },
      {
        "placeId": "tipu-summer-palace",
        "timeSlot": "8:45 AM - 9:45 AM",
        "note": {
          "en": "Explore the carved teakwood cusped arches and historical museum of Tipu Sultan's retreat.",
          "ka": "ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಸುಂದರ ತೇಗದ ಮರದ ಅರಮನೆ ಮತ್ತು ಮ್ಯೂಸಿಯಂ ವೀಕ್ಷಣೆ."
        }
      },
      {
        "placeId": "mtr-lalbagh",
        "timeSlot": "10:15 AM - 11:30 AM",
        "note": {
          "en": "Enjoy legendary Rava Idli, butter masala dosa, and pure filter coffee at century-old MTR.",
          "ka": "ಎಂ.ಟಿ.ಆರ್‌ನಲ್ಲಿ ಬಿಸಿ ರವಾ ಇಡ್ಲಿ, ಮಸಾಲೆ ದೋಸೆ ಹಾಗೂ ಫಿಲ್ಟರ್ ಕಾಫಿಯ ಉಪಾಹಾರ."
        }
      },
      {
        "placeId": "lalbagh-botanical-garden",
        "timeSlot": "11:45 AM - 1:30 PM",
        "note": {
          "en": "Stroll beneath century-old trees and see the historic glasshouse inspired by London's Crystal Palace.",
          "ka": "ಲಾಲ್‌ಬಾಗ್‌ನ ಗಾಜಿನ ಮನೆ, ಬೃಹತ್ ಮರಗಳು ಹಾಗೂ ಕೆಂಪೇಗೌಡರ ಕಾವಲು ಗೋಪುರವನ್ನು ನೋಡಿ."
        }
      },
      {
        "placeId": "bangalore-palace",
        "timeSlot": "3:30 PM - 5:30 PM",
        "note": {
          "en": "Tour the Tudor-style royal residence of the Wadiyar dynasty, its stained glass and royal paintings.",
          "ka": "ಒಡೆಯರ್ ರಾಜಮನೆತನದ ಬೆಂಗಳೂರು ಅರಮನೆ ಹಾಗೂ ರಾಜಾ ರವಿವರ್ಮರ ವರ್ಣಚಿತ್ರಗಳ ವೀಕ್ಷಣೆ."
        }
      }
    ]
  },
  {
    "id": "green-heart-colonial",
    "title": {
      "en": "Green Heart & Colonial Avenue Walk",
      "ka": "ಹಸಿರು ಶ್ವಾಸಕೋಶ ಮತ್ತು ಕಬ್ಬನ್ ಪಾರ್ಕ್ ನಡಿಗೆ"
    },
    "summary": {
      "en": "Walk through Bengaluru's tranquil central lung, iconic granite state legislature, scarlet High Court, and art museum.",
      "ka": "ಕಬ್ಬನ್ ಪಾರ್ಕ್‌ನ ನೆರಳಿನ ನಡಿಗೆ, ಭವ್ಯ ವಿಧಾನ ಸೌಧ, ಕೆಂಪು ಅಠಾರಾ ಕಛೇರಿ ಹಾಗೂ ವಿಶ್ವೇಶ್ವರಯ್ಯ ವಿಜ್ಞಾನ ಮ್ಯೂಸಿಯಂನ ಪ್ರವಾಸ."
    },
    "duration": {
      "en": "Half Day (4 - 5 Hours)",
      "ka": "ಅರ್ಧ ದಿನ (4 - 5 ಗಂಟೆ)"
    },
    "pace": {
      "en": "Leisurely Walk",
      "ka": "ವಿರಾಮದ ನಡಿಗೆ"
    },
    "recommendedTransport": {
      "en": "Purple Line Metro & Walking",
      "ka": "ಪರ್ಪಲ್ ಲೈನ್ ಮೆಟ್ರೋ ಮತ್ತು ಪಾದಚಾರಿ ನಡಿಗೆ"
    },
    "stops": [
      {
        "placeId": "cubbon-park",
        "timeSlot": "7:00 AM - 9:00 AM",
        "note": {
          "en": "Breathe the fresh morning air under bamboo canopies, walk by the red State Central Library.",
          "ka": "ಮುಂಜಾನೆ ಕಬ್ಬನ್ ಪಾರ್ಕ್‌ನಲ್ಲಿ ವಾಕಿಂಗ್ ಮತ್ತು ಕೆಂಪು ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯದ ಹೊರನೋಟ."
        }
      },
      {
        "placeId": "vidhana-soudha",
        "timeSlot": "9:15 AM - 10:15 AM",
        "note": {
          "en": "Marvel at India's largest legislative granite monument and the high court opposite it.",
          "ka": "ಬಿಳಿ ಗ್ರಾನೈಟ್ ಶಿಲೆಯ ಭವ್ಯ ವಿಧಾನ ಸೌಧ ಮತ್ತು ಹೈಕೋರ್ಟ್ ಕಟ್ಟಡದ ಫೋಟೋಗ್ರಫಿ."
        }
      },
      {
        "placeId": "visvesvaraya-museum",
        "timeSlot": "10:30 AM - 12:30 PM",
        "note": {
          "en": "Engage with hands-on science exhibits, engine replicas, and dinosaur exhibits on Kasturba Road.",
          "ka": "ವಿಶ್ವೇಶ್ವರಯ್ಯ ಮ್ಯೂಸಿಯಂನಲ್ಲಿ ಸಂವಾದಾತ್ಮಕ ವಿಜ್ಞಾನ ಮಾದರಿಗಳ ವೀಕ್ಷಣೆ."
        }
      },
      {
        "placeId": "church-street",
        "timeSlot": "1:00 PM - 2:30 PM",
        "note": {
          "en": "Walk down cobblestone Church Street for lunch, artisan cafes, and secondhand bookstore browsing.",
          "ka": "ಚರ್ಚ್ ಸ್ಟ್ರೀಟ್‌ನಲ್ಲಿ ಊಟ, ಕೆಫೆಗಳು ಹಾಗೂ ಪ್ರಸಿದ್ಧ ಪುಸ್ತಕ ಮಳಿಗೆಗಳ ಭೇಟಿ."
        }
      }
    ]
  },
  {
    "id": "south-bangalore-culture",
    "title": {
      "en": "South Bengaluru Cultural & Tiffin Circuit",
      "ka": "ದಕ್ಷಿಣ ಬೆಂಗಳೂರಿನ ಸಾಂಸ್ಕೃತಿಕ ಹಾಗೂ ಉಪಾಹಾರ ಯಾತ್ರೆ"
    },
    "summary": {
      "en": "Immerse in the cultural nostalgia of Basavanagudi: sacred monoliths, literary cafes, Gandhi Bazaar flowers, and hot filter coffee.",
      "ka": "ಬಸವನಗುಡಿಯ ದೊಡ್ಡ ಗಣಪತಿ, ಬುಲ್ ದೇವಾಲಯ, ಗಾಂಧಿ ಬಜಾರಿನ ಸಂಸ್ಕೃತಿ ಹಾಗೂ ವಿದ್ಯಾರ್ಥಿ ಭವನದ ಗರಿಗರಿ ಮಸಾಲೆ ದೋಸೆ."
    },
    "duration": {
      "en": "Morning to Afternoon (4 Hours)",
      "ka": "ಮುಂಜಾನೆಯಿಂದ ಮಧ್ಯಾಹ್ನ (4 ಗಂಟೆ)"
    },
    "pace": {
      "en": "Easy Walking",
      "ka": "ಸುಲಭ ನಡಿಗೆ"
    },
    "recommendedTransport": {
      "en": "Green Line Metro (National College) & Walking",
      "ka": "ಗ್ರೀನ್ ಲೈನ್ ಮೆಟ್ರೋ ಮತ್ತು ನಡಿಗೆ"
    },
    "stops": [
      {
        "placeId": "bull-temple",
        "timeSlot": "7:00 AM - 8:00 AM",
        "note": {
          "en": "Receive blessings at the massive monolithic Nandi idol carved out of granite by Kempe Gowda.",
          "ka": "ಏಕಶಿಲಾ ನಂದಿ ಮೂರ್ತಿಯ ದರ್ಶನ ಮತ್ತು ಶಾಂತಿಯುತ ಆವರಣ."
        }
      },
      {
        "placeId": "dodda-ganapathi-temple",
        "timeSlot": "8:00 AM - 8:30 AM",
        "note": {
          "en": "Witness the magnificent Ganesha idol and sacred morning prayers adjacent to Bugle Rock.",
          "ka": "ದೊಡ್ಡ ಗಣಪತಿ ದೇವಸ್ಥಾನದ ದರ್ಶನ ಮತ್ತು ಬ್ಯೂಗಲ್ ರಾಕ್ ವೀಕ್ಷಣೆ."
        }
      },
      {
        "placeId": "vidyarthi-bhavan",
        "timeSlot": "8:45 AM - 9:45 AM",
        "note": {
          "en": "Relish legendary butter masala dosas surrounded by portraits of Kannada literary icons.",
          "ka": "ವಿದ್ಯಾರ್ಥಿ ಭವನದಲ್ಲಿ ಗರಿಗರಿಯಾದ ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ ಮತ್ತು ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ."
        }
      },
      {
        "placeId": "gandhi-bazaar-market",
        "timeSlot": "10:00 AM - 11:30 AM",
        "note": {
          "en": "Stroll under the shade of ancient rain trees, explore fragrant jasmine stalls and traditional shops.",
          "ka": "ಗಾಂಧಿ ಬಜಾರಿನ ಹೂವಿನ ಅಂಗಡಿಗಳು, ಸಾಂಪ್ರದಾಯಿಕ ವಸ್ತುಗಳ ಮಳಿಗೆಗಳಲ್ಲಿ ಸುತ್ತಾಟ."
        }
      }
    ]
  },
  {
    "id": "bazaars-silks-street-food",
    "title": {
      "en": "Silk Bazaars, Shopping & VV Puram Street Food",
      "ka": "ರೇಷ್ಮೆ ಬಜಾರ್, ಶಾಪಿಂಗ್ ಹಾಗೂ ವಿವಿ ಪುರಂ ಆಹಾರ ರಸ್ತೆ"
    },
    "summary": {
      "en": "From heritage silk shops of Chickpet and buzzing Commercial Street to twilight feast on VV Puram Food Street.",
      "ka": "ಚಿಕ್ಕಪೇಟೆಯ ರೇಷ್ಮೆ ಸೀರೆಗಳ ಮಾರುಕಟ್ಟೆ, ಕಮರ್ಷಿಯಲ್ ಸ್ಟ್ರೀಟ್ ಶಾಪಿಂಗ್ ಹಾಗೂ ಸಂಜೆ ವಿವಿ ಪುರಂನ ರುಚಿಕರ ತಿಂಡಿ ಬೀದಿ."
    },
    "duration": {
      "en": "Afternoon to Night (6 Hours)",
      "ka": "ಮಧ್ಯಾಹ್ನದಿಂದ ರಾತ್ರಿ (6 ಗಂಟೆ)"
    },
    "pace": {
      "en": "Active Walking",
      "ka": "ಚುರುಕಾದ ನಡಿಗೆ"
    },
    "recommendedTransport": {
      "en": "Green & Purple Metro + Autos",
      "ka": "ಮೆಟ್ರೋ ಹಾಗೂ ಆಟೋರಿಕ್ಷಾ"
    },
    "stops": [
      {
        "placeId": "chickpet-market",
        "timeSlot": "2:00 PM - 4:00 PM",
        "note": {
          "en": "Browse authentic Mysore silks and heritage bridal sarees in 400-year-old narrow lanes.",
          "ka": "ಚಿಕ್ಕಪೇಟೆಯ ಐತಿಹಾಸಿಕ ರಸ್ತೆಗಳಲ್ಲಿ ಅಸಲಿ ಮೈಸೂರು ಸಿಲ್ಕ್ ಸೀರೆಗಳ ಶಾಪಿಂಗ್."
        }
      },
      {
        "placeId": "commercial-street",
        "timeSlot": "4:30 PM - 6:30 PM",
        "note": {
          "en": "Shop for ethnic dresses, accessories, jewelry, and shoes in the bustling Cantonment precinct.",
          "ka": "ಕಮರ್ಷಿಯಲ್ ಸ್ಟ್ರೀಟ್‌ನಲ್ಲಿ ಉಡುಪುಗಳು ಹಾಗೂ ಆಭರಣಗಳ ಶಾಪಿಂಗ್."
        }
      },
      {
        "placeId": "vv-puram-food-street",
        "timeSlot": "7:00 PM - 9:30 PM",
        "note": {
          "en": "Feast on crispy Akki Roti, Congress Bun, Davanagere dosas, Paddus, and sweet hot Jalebi.",
          "ka": "ವಿವಿ ಪುರಂ ತಿಂಡಿ ಬೀದಿಯಲ್ಲಿ ಅಕ್ಕಿ ರೊಟ್ಟಿ, ಕಾಂಗ್ರೆಸ್ ಬನ್, ಬಿಸಿ ಜಿಲೇಬಿ ಮತ್ತು ಬಾದಾಮಿ ಹಾಲು ಸವಿಯಿರಿ."
        }
      }
    ]
  },
  {
    "id": "tech-science-circuit",
    "title": {
      "en": "Silicon Plateau: Science & Innovation Circuit",
      "ka": "ಸಿಲಿಕಾನ್ ಕಣಿವೆ: ವಿಜ್ಞಾನ ಮತ್ತು ನಾವೀನ್ಯತೆ ಸರ್ಕ್ಯೂಟ್"
    },
    "summary": {
      "en": "Explore the institutions and parks that transformed Bengaluru into the software and science capital of Asia.",
      "ka": "ಬೆಂಗಳೂರನ್ನು ಜಾಗತಿಕ ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿಯನ್ನಾಗಿ ರೂಪಿಸಿದ ಐ.ಐ.ಎಸ್ಸಿ ಹಾಗೂ ವೈಟ್‌ಫೀಲ್ಡ್ ಐಟಿ ಪಾರ್ಕ್‌ಗಳ ಪರಿಚಯ."
    },
    "duration": {
      "en": "1 Full Day (7 Hours)",
      "ka": "1 ಪೂರ್ಣ ದಿನ (7 ಗಂಟೆ)"
    },
    "pace": {
      "en": "Driving & Transit",
      "ka": "ವಾಹನ ಮತ್ತು ಮೆಟ್ರೋ ಪ್ರಯಾಣ"
    },
    "recommendedTransport": {
      "en": "Purple Metro to Whitefield & Cabs",
      "ka": "ಪರ್ಪಲ್ ಲೈನ್ ಮೆಟ್ರೋ ಮತ್ತು ಕ್ಯಾಬ್"
    },
    "stops": [
      {
        "placeId": "iisc-bangalore",
        "timeSlot": "9:30 AM - 11:30 AM",
        "note": {
          "en": "Admire the historic 1909 stone main tower and leafy research campus of India's top scientific university.",
          "ka": "1909ರ ಭಾರತೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆಯ ಸುಂದರ ಶಿಲಾ ಕಟ್ಟಡ ಹಾಗೂ ಸಂಶೋಧನಾ ಕ್ಯಾಂಪಸ್."
        }
      },
      {
        "placeId": "sankey-tank",
        "timeSlot": "12:00 PM - 1:00 PM",
        "note": {
          "en": "Short peaceful promenade stroll and lunch around Sadashivanagar / Malleswaram.",
          "ka": "ಸ್ಯಾಂಕಿ ಕೆರೆಯ ಬಳಿ ವಿಶ್ರಾಂತಿ ಹಾಗೂ ಮಲ್ಲೇಶ್ವರಂನಲ್ಲಿ ಊಟ."
        }
      },
      {
        "placeId": "itpb-whitefield",
        "timeSlot": "2:30 PM - 4:30 PM",
        "note": {
          "en": "Take the direct Purple Line Metro to Whitefield and view the iconic Discoverer building at ITPB.",
          "ka": "ಪರ್ಪಲ್ ಮೆಟ್ರೋ ಮೂಲಕ ವೈಟ್‌ಫೀಲ್ಡ್ ತಲುಪಿ, ಐಟಿಪಿಬಿಯ ಡಿಸ್ಕವರರ್ ಭವನ ಮತ್ತು ಪಾರ್ಕ್ ಸ್ಕ್ವೇರ್ ಮಾಲ್ ವೀಕ್ಷಿಸಿ."
        }
      },
      {
        "placeId": "phoenix-marketcity",
        "timeSlot": "5:00 PM - 7:30 PM",
        "note": {
          "en": "Relax, dine, and experience Whitefield's premier entertainment lifestyle destination.",
          "ka": "ಫೀನಿಕ್ಸ್ ಮಾರ್ಕೆಟ್‌ಸಿಟಿಯಲ್ಲಿ ಶಾಪಿಂಗ್, ಮನರಂಜನೆ ಹಾಗೂ ಭೋಜನ."
        }
      }
    ]
  },
  {
    "id": "nature-wildlife-escape",
    "title": {
      "en": "Nature, Wildlife & Lakes Escape",
      "ka": "ಪ್ರಕೃತಿ, ವನ್ಯಜೀವಿ ಮತ್ತು ಕೆರೆಗಳ ದಿನದ ಪ್ರವಾಸ"
    },
    "summary": {
      "en": "Escape the concrete jungle: open tiger safaris, butterfly conservatories, and golden sunset lake breezes.",
      "ka": "ಬನ್ನೇರುಘಟ್ಟದಲ್ಲಿ ಹುಲಿ-ಸಿಂಹಗಳ ಸಫಾರಿ, ವರ್ಣರಂಜಿತ ಚಿಟ್ಟೆ ಪಾರ್ಕ್ ಹಾಗೂ ಸ್ಯಾಂಕಿ/ಹಲಸೂರು ಕೆರೆಯ ಸೂರ್ಯಾಸ್ತದ ಪ್ರವಾಸ."
    },
    "duration": {
      "en": "Full Day (8 Hours)",
      "ka": "ಪೂರ್ಣ ದಿನ (8 ಗಂಟೆ)"
    },
    "pace": {
      "en": "Active Safari & Leisure",
      "ka": "ಸಫಾರಿ ಮತ್ತು ಕೆರೆ ವೀಕ್ಷಣೆ"
    },
    "recommendedTransport": {
      "en": "Cab / BMTC AC Bus & Walking",
      "ka": "ಕ್ಯಾಬ್ ಅಥವಾ ಬಿಎಂಟಿಸಿ ವಜ್ರ ಬಸ್"
    },
    "stops": [
      {
        "placeId": "bannerghatta-national-park",
        "timeSlot": "9:30 AM - 1:30 PM",
        "note": {
          "en": "Embark on the Grand Safari through tiger and lion reserves, visit the Butterfly Park dome and zoo.",
          "ka": "ಬನ್ನೇರುಘಟ್ಟದಲ್ಲಿ ವನ್ಯಜೀವಿಗಳ ತೆರೆದ ಸಫಾರಿ, ಚಿಟ್ಟೆಗಳ ಪಾರ್ಕ್ ಹಾಗೂ ಪ್ರಾಣಿಸಂಗ್ರಹಾಲಯ ವೀಕ್ಷಣೆ."
        }
      },
      {
        "placeId": "ulsoor-lake",
        "timeSlot": "4:00 PM - 6:00 PM",
        "note": {
          "en": "Enjoy peaceful paddle boating around lush green islands and a cooling walk along the promenade.",
          "ka": "ಹಲಸೂರು ಕೆರೆಯಲ್ಲಿ ಸಂಜೆಯ ತಂಗಾಳಿಯ ನಡಿಗೆ ಹಾಗೂ ಬೋಟಿಂಗ್ ಆನಂದಿಸಿ."
        }
      }
    ]
  }
];

const STORIES = [
  {
    "id": "kempegowda-four-towers",
    "title": {
      "en": "The Four Watchtowers of Kempe Gowda: The Prophecy of a Great City",
      "ka": "ಕೆಂಪೇಗೌಡರ ನಾಲ್ಕು ಕಾವಲು ಗೋಪುರಗಳು: ಮಹಾನಗರದ ಭವಿಷ್ಯ ನುಡಿದ ಐತಿಹಾಸಿಕ ಹೆಗ್ಗುರುತುಗಳು"
    },
    "subtitle": {
      "en": "How a 16th-century feudal chieftain marked the sacred boundaries of future Bengaluru.",
      "ka": "16ನೇ ಶತಮಾನದಲ್ಲಿ ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡರು ನಿಗದಿಪಡಿಸಿದ ಬೆಂಗಳೂರಿನ ಗಡಿಗೋಪುರಗಳ ರೋಚಕ ಇತಿಹಾಸ."
    },
    "era": "1537 - Late 16th Century",
    "readingTime": "4 mins",
    "tags": [
      "History",
      "Kempe Gowda",
      "Heritage",
      "Architecture"
    ],
    "relatedPlaces": [
      "lalbagh-botanical-garden",
      "bull-temple",
      "sankey-tank",
      "ulsoor-lake"
    ],
    "content": {
      "en": "In the year 1537, Nadaprabhu Kempe Gowda I, a visionary chieftain under the Vijayanagara Empire, founded the mud-fortified settlement of 'Bengaluru Pete'. Guided by a divine vision and astronomical calculation, Kempe Gowda II later erected four distinct stone watchtowers atop high rock elevations in the cardinal directions to demarcate the future perimeter of the city.\n\nLegend holds that Kempe Gowda prophesied that when the city expanded beyond these four watchtowers, Bengaluru would face great challenges but achieve world renown. Today, the modern metropolis has expanded ten times past these borders, yet the towers still stand tall:\n\n1. Southern Tower: Perched atop the monolithic granite hillock inside Lalbagh Botanical Garden, overlooking the ancient Peninsular Gneiss rock formation (over 3,000 million years old).\n2. Northern Tower: High on the granite ridges of Mekhri Circle in Bellary Road (Sadashivanagar).\n3. Eastern Tower: Guarding the slopes near the historic Halasuru (Ulsoor) Lake.\n4. Western Tower: Standing proudly atop the Kempegowda Tower hillock in Gavipuram / Kempambudhi lake basin near the historic Gavi Gangadhareshwara cave temple.\n\nThese watchtowers remain the official emblem of the Bruhat Bengaluru Mahanagara Palike (BBMP) and an eternal tribute to the visionary urban planning of Bengaluru's founders.",
      "ka": "1537ರಲ್ಲಿ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಸಾಮಂತರಾಗಿದ್ದ ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡರು ಮಣ್ಣಿನ ಕೋಟೆ ನಿರ್ಮಿಸಿ 'ಬೆಂಗಳೂರು ಪೇಟೆ'ಗೆ ಅಡಿಪಾಯ ಹಾಕಿದರು. ನಂತರ ಎರಡನೇ ಕೆಂಪೇಗೌಡರು ನಗರದ ಭವಿಷ್ಯದ ವಿಸ್ತರಣೆಯನ್ನು ಗುರುತಿಸಲು ನಾಲ್ಕೂ ದಿಕ್ಕುಗಳ ಎತ್ತರದ ಬಂಡೆಗಳ ಮೇಲೆ ನಾಲ್ಕು ವಿಶಿಷ್ಟ ಕಾವಲು ಗೋಪುರಗಳನ್ನು ನಿರ್ಮಿಸಿದರು.\n\nಐತಿಹ್ಯದ ಪ್ರಕಾರ, ಬೆಂಗಳೂರು ನಗರವು ಈ ನಾಲ್ಕು ಗೋಪುರಗಳನ್ನು ಮೀರಿ ಬೆಳೆದಾಗ ಅದು ಜಗತ್ಪ್ರಸಿದ್ಧ ಮಹಾನಗರವಾಗುತ್ತದೆ ಎಂಬ ಭವಿಷ್ಯವಾಣಿಯಿತ್ತು. ಇಂದು ನಗರವು ಈ ಗಡಿಗಳನ್ನು ದಾಟಿ ಹತ್ತಾರು ಪಟ್ಟು ಬೆಳೆದಿದ್ದರೂ, ಆ ನಾಲ್ಕು ಐತಿಹಾಸಿಕ ಗೋಪುರಗಳು ಇಂದಿಗೂ ಗರ್ವದಿಂದ ನಿಂತಿವೆ:\n\n1. ದಕ್ಷಿಣ ಗೋಪುರ: ಲಾಲ್‌ಬಾಗ್‌ನ 3000 ದಶಲಕ್ಷ ವರ್ಷಗಳಷ್ಟು ಹಳೆಯ ಪೆನಿನ್ಸುಲರ್ ನೈಸ್ ಶಿಲೆಯ ಮೇಲಿರುವ ಗೋಪುರ.\n2. ಉತ್ತರ ಗೋಪುರ: ಸದಾಶಿವನಗರ ಹಾಗೂ ಮೇಖ್ರಿ ವೃತ್ತದ ಸಮೀಪದ ಎತ್ತರದ ಬೆಟ್ಟದ ಮೇಲಿರುವ ಗೋಪುರ.\n3. ಪೂರ್ವ ಗೋಪುರ: ಐತಿಹಾಸಿಕ ಹಲಸೂರು ಕೆರೆಯ ದಂಡೆಯ ಮೇಲಿರುವ ಗೋಪುರ.\n4. ಪಶ್ಚಿಮ ಗೋಪುರ: ಗವಿಪುರಂನ ಗವಿ ಗಂಗಾಧರೇಶ್ವರ ದೇವಾಲಯ ಹಾಗೂ ಕೆಂಪಾಂಬುಧಿ ಕೆರೆಯ ಸಮೀಪವಿರುವ ಗೋಪುರ.\n\nಈ ನಾಲ್ಕು ಗೋಪುರಗಳ ವಿನ್ಯಾಸವೇ ಇಂದಿಗೂ ಬೃಹತ್ ಬೆಂಗಳೂರು ಮಹಾನಗರ ಪಾಲಿಕೆಯ (ಬಿಬಿಎಂಪಿ) ಅಧಿಕೃತ ಲಾಂಛನವಾಗಿದೆ."
    }
  },
  {
    "id": "garden-city-legacy",
    "title": {
      "en": "From Hyder Ali to Krumbiegel: How Bengaluru Became the Garden City",
      "ka": "ಹೈದರ್ ಅಲಿಯಿಂದ ಕ್ರುಂಬೀಗಲ್ ತನಕ: ಬೆಂಗಳೂರು 'ಉದ್ಯಾನ ನಗರಿ'ಯಾದ ರೋಚಕ ಕಥೆ"
    },
    "subtitle": {
      "en": "The botanical masters who blanketed the city in perennial floral blooms across all twelve months.",
      "ka": "ವರ್ಷದ ಹನ್ನೆರಡೂ ತಿಂಗಳು ನಗರದಲ್ಲಿ ಹೂವುಗಳು ಅರಳುವಂತೆ ರೂಪಿಸಿದ ತೋಟಗಾರಿಕಾ ತಜ್ಞರ ಅಪೂರ್ವ ಇತಿಹಾಸ."
    },
    "era": "1760 - 1932",
    "readingTime": "5 mins",
    "tags": [
      "Botanical",
      "Nature",
      "Lalbagh",
      "Cubbon Park",
      "History"
    ],
    "relatedPlaces": [
      "lalbagh-botanical-garden",
      "cubbon-park"
    ],
    "content": {
      "en": "Bengaluru did not become the 'Garden City of India' by accident. It was the result of a deliberate, 200-year collaborative botanical design combining the passions of Indian rulers and world-renowned botanists.\n\nIn 1760, Nawab Hyder Ali commissioned a royal 40-acre private orchard south of the fort, inspired by the Mughal charbagh gardens of Delhi and Sira. He named it 'Lalbagh' for its dazzling collection of red roses. His son, Tipu Sultan, expanded it passionately, importing rare trees and fragrant flora from Persia, Mauritius, Turkey, and France through maritime traders.\n\nAfter 1799, the British established the Botanical Gardens department. But the true visionary transformation arrived in 1908 when Maharaja Krishnaraja Wadiyar IV appointed German botanist Gustav Hermann Krumbiegel as Superintendent of Government Gardens.\n\nKrumbiegel introduced 'Serial Blossoming'—a revolutionary urban design principle. He mapped Bengaluru's arterial avenues and lined each street with trees calibrated to flower in succession:\n- Pink Tabebuia rosea burst into cherry blossom-like pink in January and February.\n- Fiery Orange Gulmohar (Delonix regia) blazes across roads in April and May.\n- Purple Jacarandas (Jacaranda mimosifolia) wash the city in soft violet during summer.\n- Yellow Copper Pods (Peltophorum pterocarpum) blanket the pavements in autumn.\n\nKrumbiegel was followed by H.C. Javaraya, the first Indian Superintendent, who designed the iconic Glass House expansion. Together, they bestowed on Bengaluru its enduring identity as India's premier garden metropolis.",
      "ka": "ಬೆಂಗಳೂರು 'ಭಾರತದ ಉದ್ಯಾನ ನಗರಿ'ಯಾಗಿದ್ದು ಆಕಸ್ಮಿಕವಲ್ಲ. ಮೈಸೂರಿನ ಅರಸರು ಹಾಗೂ ವಿಶ್ವಶ್ರೇಷ್ಠ ಸಸ್ಯಶಾಸ್ತ್ರಜ್ಞರ 200 ವರ್ಷಗಳ ಪರಿಶ್ರಮದ ಫಲವಿದು.\n\n1760ರಲ್ಲಿ ಹೈದರ್ ಅಲಿ ಮೊಘಲ್ ಚಾರ್‌ಬಾಗ್ ಶೈಲಿಯಲ್ಲಿ 40 ಎಕರೆ ವಿಸ್ತೀರ್ಣದ ಖಾಸಗಿ ಉದ್ಯಾನವನ್ನು ಪ್ರಾರಂಭಿಸಿ, ಅಲ್ಲಿ ಅರಳುತ್ತಿದ್ದ ಕೆಂಪು ಗುಲಾಬಿಗಳ ಕಾರಣದಿಂದ 'ಲಾಲ್‌ಬಾಗ್' ಎಂದು ಹೆಸರಿಸಿದರು. ನಂತರ ಅವರ ಪುತ್ರ ಟಿಪ್ಪು ಸುಲ್ತಾನರು ಪರ್ಷಿಯಾ, ಮಾರಿಷಸ್, ಟರ್ಕಿ ಹಾಗೂ ಫ್ರಾನ್ಸ್ ದೇಶಗಳಿಂದ ಅಪರೂಪದ ಸಸ್ಯಗಳನ್ನು ತರಿಸಿ ನೆಡಿಸಿದರು.\n\nನಂತರ 1908ರಲ್ಲಿ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರು ಜರ್ಮನ್ ತೋಟಗಾರಿಕಾ ತಜ್ಞ ಗುಸ್ತಾವ್ ಹರ್ಮನ್ ಕ್ರುಂಬೀಗಲ್ ಅವರನ್ನು ಸರ್ಕಾರದ ತೋಟಗಳ ಮುಖ್ಯಸ್ಥರನ್ನಾಗಿ ನೇಮಿಸಿದರು. ಕ್ರುಂಬೀಗಲ್ ಬೆಂಗಳೂರಿಗೆ 'ಸರಣಿ ಪುಷ್ಪೋತ್ಸವ' (Serial Blossoming) ಎಂಬ ಕ್ರಾಂತಿಕಾರಿ ಪರಿಕಲ್ಪನೆಯನ್ನು ಪರಿಚಯಿಸಿದರು. ವರ್ಷದ ಹನ್ನೆರಡೂ ತಿಂಗಳು ನಗರದ ರಸ್ತೆಗಳಲ್ಲಿ ಯಾವುದಾದರೂ ಒಂದು ಜಾತಿಯ ಹೂವುಗಳು ಅರಳುವಂತೆ ಗಿಡಗಳನ್ನು ನೆಡಲಾಯಿತು:\n\n- ಜನವರಿ-ಫೆಬ್ರವರಿಯಲ್ಲಿ ಗುಲಾಬಿ ಬಣ್ಣದ ಟಬೆಬೂಯಿಯಾ ಹೂವುಗಳು ನಗರವನ್ನು ಚೆರ್ರಿ ಬ್ಲಾಸಂನಂತೆ ಕಂಗೊಳಿಸುತ್ತವೆ.\n- ಏಪ್ರಿಲ್-ಮೇ ತಿಂಗಳಲ್ಲಿ ಕೆಂಪು-ಕಿತ್ತಳೆ ಗುಲ್‌ಮೊಹರ್ ಮರಗಳು ಚಿತ್ತಾರ ಮೂಡಿಸುತ್ತವೆ.\n- ಬೇಸಿಗೆಯಲ್ಲಿ ನೇರಳೆ ಬಣ್ಣದ ಜಕರಂಡ ಹೂವುಗಳು ರಸ್ತೆಗಳಿಗೆ ರಂಗು ತುಂಬುತ್ತವೆ.\n- ಮಳೆಗಾಲದ ನಂತರ ಹಳದಿ ಬಣ್ಣದ ತಾಮ್ರದ ಹೂವುಗಳು ಹಾದಿಯನ್ನೆಲ್ಲ ಆವರಿಸುತ್ತವೆ.\n\nಕ್ರುಂಬೀಗಲ್ ನಂತರ ಬಂದ ಮೊದಲ ಭಾರತೀಯ ತೋಟಗಾರಿಕಾ ತಜ್ಞ ಹೆಚ್.ಸಿ. ಜವರಾಯ ಅವರು ಲಾಲ್‌ಬಾಗ್‌ನ ಗಾಜಿನ ಮನೆಯನ್ನು ಮತ್ತಷ್ಟು ವಿಸ್ತರಿಸಿದರು. ಈ ಮಹನೀಯರ ದೂರದೃಷ್ಟಿಯೇ ಇಂದು ಬೆಂಗಳೂರನ್ನು ಹಸಿರ ನಗರಿಯನ್ನಾಗಿಸಿದೆ."
    }
  },
  {
    "id": "pete-silk-lanes",
    "title": {
      "en": "The 500-Year Heritage of Bengaluru Pete & Silk Weavers",
      "ka": "ಬೆಂಗಳೂರು ಪೇಟೆ ಮತ್ತು ರೇಷ್ಮೆ ನೇಯ್ಗೆಯ 500 ವರ್ಷಗಳ ಭವ್ಯ ಪರಂಪರೆ"
    },
    "subtitle": {
      "en": "How Kempe Gowda's commercial petes became India's beating textile and silk heartland.",
      "ka": "ಕೆಂಪೇಗೌಡರ ಕಾಲದ ವಾಣಿಜ್ಯ ಪೇಟೆಗಳು ಭಾರತದ ರೇಷ್ಮೆ ಮತ್ತು ಜವಳಿ ಕೇಂದ್ರವಾಗಿ ಬೆಳೆದುಬಂದ ಹಾದಿ."
    },
    "era": "1537 - Present",
    "readingTime": "4 mins",
    "tags": [
      "Culture",
      "Silk",
      "Chickpet",
      "Commerce",
      "Heritage"
    ],
    "relatedPlaces": [
      "chickpet-market",
      "kr-market",
      "bengaluru-fort"
    ],
    "content": {
      "en": "When Kempe Gowda laid out the boundaries of Bengaluru Pete in 1537, he designed distinct commercial quarters dedicated to specific trades. He established Chickpet (Little Market) for brass, cotton and textiles, Dodda Pete (now Avenue Road) for general commerce, Balepete for glass bangles, Akkipete for rice merchants, and Ragipete for grains.\n\nRecognizing the strategic trade position between the Deccan plateau and the Coromandel coast, Kempe Gowda invited the skilled weaver community—the Devangas, Padmashalis, and Patvegars—to settle within the fortified pete. Handlooms were set up inside traditional two-story mud houses, where weavers crafted fine silk dhotis, turbans, and sarees.\n\nIn the 18th century, Tipu Sultan revolutionized the industry by introducing sericulture to the Kingdom of Mysore, importing mulberry saplings and silkworm eggs from China and Muscat. By the 20th century, Karnataka produced over 60% of India's mulberry raw silk.\n\nToday, walking through the winding gullies of Chickpet, Jumma Masjid Road, and Avenue Road, the rhythmic clatter of looms and the shimmer of pure gold zari (brocade) tell an unbroken 500-year story of craftsmanship, commerce, and community resilience.",
      "ka": "1537ರಲ್ಲಿ ಕೆಂಪೇಗೌಡರು ಬೆಂಗಳೂರನ್ನು ಸ್ಥಾಪಿಸಿದಾಗ, ವಿವಿಧ ವೃತ್ತಿಪರ ವ್ಯಾಪಾರಿಗಳಿಗಾಗಿ ನಿರ್ದಿಷ್ಟ ಪೇಟೆಗಳನ್ನು ನಿರ್ಮಿಸಿದರು. ರೇಷ್ಮೆ ಮತ್ತು ಬಟ್ಟೆಗಳಿಗಾಗಿ ಚಿಕ್ಕಪೇಟೆ, ದೊಡ್ಡಪೇಟೆ (ಇಂದಿನ ಅವೆನ್ಯೂ ರಸ್ತೆ), ಗಾಜಿನ ಬಳೆಗಳಿಗಾಗಿ ಬಳೇಪೇಟೆ, ಅಕ್ಕಿ ವ್ಯಾಪಾರಕ್ಕಾಗಿ ಅಕ್ಕಿಪೇಟೆ ಹಾಗೂ ರಾಗಿಪೇಟೆಗಳು ರೂಪುಗೊಂಡವು.\n\nದಖನ್ ಪ್ರಸ್ಥಭೂಮಿಯ ಪ್ರಮುಖ ವಾಣಿಜ್ಯ ಕೇಂದ್ರವಾಗಿದ್ದ ಈ ಪೇಟೆಗಳಿಗೆ ದೇವಾಂಗ, ಪದ್ಮಶಾಲಿ ಹಾಗೂ ಪಟ್ವೇಗಾರ್ ನೇಕಾರ ಸಮುದಾಯಗಳನ್ನು ಆಹ್ವಾನಿಸಿ ನೆಲೆಸುವಂತೆ ಮಾಡಲಾಯಿತು. ಸಾಂಪ್ರದಾಯಿಕ ಮಣ್ಣಿನ ಮನೆಗಳಲ್ಲಿ ಕೈಮಗ್ಗಗಳನ್ನು ಸ್ಥಾಪಿಸಿ, ಅಂದಿನ ಕಾಲದ ರಾಜವಂಶಸ್ಥರಿಗೆ ರೇಷ್ಮೆ ಧೋತಿ, ಪೇಟ ಮತ್ತು ಸೀರೆಗಳನ್ನು ನೇಯಲಾಗುತ್ತಿತ್ತು.\n\n18ನೇ ಶತಮಾನದಲ್ಲಿ ಟಿಪ್ಪು ಸುಲ್ತಾನರು ಚೀನಾ ಹಾಗೂ ಮಸ್ಕತ್‌ನಿಂದ ಹಿಪ್ಪುನೇರಳೆ ಗಿಡಗಳನ್ನು ಮತ್ತು ರೇಷ್ಮೆ ಹುಳುಗಳನ್ನು ತರಿಸಿ ಕರ್ನಾಟಕದಲ್ಲಿ ರೇಷ್ಮೆ ಕೃಷಿಗೆ (Sericulture) ಬುನಾದಿ ಹಾಕಿದರು. ನಂತರ ಮೈಸೂರು ಸಂಸ್ಥಾನದ ಸಹಕಾರದಿಂದ ಕರ್ನಾಟಕವು ಇಡೀ ಭಾರತದ ಶೇಕಡಾ 60ಕ್ಕೂ ಹೆಚ್ಚು ರೇಷ್ಮೆ ಉತ್ಪಾದಿಸುವ ಕಣಜವಾಯಿತು.\n\nಇಂದಿಗೂ ಚಿಕ್ಕಪೇಟೆ ಹಾಗೂ ಅವೆನ್ಯೂ ರಸ್ತೆಯ ಸಂದಿ-ಗೊಂದಿಗಳಲ್ಲಿ ಮೈಸೂರು ಸಿಲ್ಕ್, ಕಾಂಜೀವರಂ ಮತ್ತು ಬನಾರಸ್ ಸೀರೆಗಳ ಸಗಟು ವ್ಯಾಪಾರವು 500 ವರ್ಷಗಳ ಸಾಂಪ್ರದಾಯಿಕ ಕೌಶಲ್ಯವನ್ನು ಸಾರುತ್ತದೆ."
    }
  },
  {
    "id": "silicon-plateau-revolution",
    "title": {
      "en": "The Silicon Plateau: From Public Sector Undertakings to Global Tech Superpower",
      "ka": "ಸಿಲಿಕಾನ್ ಪ್ರಸ್ಥಭೂಮಿ: ಸಾರ್ವಜನಿಕ ಉದ್ಯಮಗಳಿಂದ ಜಾಗತಿಕ ತಂತ್ರಜ್ಞಾನ ಶಕ್ತಿ ಕೇಂದ್ರದವರೆಗೆ"
    },
    "subtitle": {
      "en": "How climate, scientific temper, and bold engineering transformed Bangalore into the IT capital of the world.",
      "ka": "ಅನುಕೂಲಕರ ಹವಾಮಾನ, ವೈಜ್ಞಾನಿಕ ಪರಿಸರ ಹಾಗೂ ಎಂಜಿನಿಯರಿಂಗ್ ಪ್ರತಿಭೆಗಳು ಬೆಂಗಳೂರನ್ನು ವಿಶ್ವದ ಐಟಿ ರಾಜಧಾನಿಯನ್ನಾಗಿಸಿದ ಯಶೋಗಾಥೆ."
    },
    "era": "1940s - Present",
    "readingTime": "5 mins",
    "tags": [
      "Technology",
      "IT",
      "Innovation",
      "Modern History",
      "Science"
    ],
    "relatedPlaces": [
      "iisc-bangalore",
      "itpb-whitefield",
      "infosys-electronic-city"
    ],
    "content": {
      "en": "Bengaluru's rise as the premier tech capital of the East was neither accidental nor overnight. It rests on a multi-generational foundation of public science, visionary education, and telecommunication infrastructure.\n\nFollowing Indian Independence, Prime Minister Jawaharlal Nehru identified Bangalore as the 'City of the Future' due to its moderate climate, geographical safety from maritime borders, and the presence of the prestigious Indian Institute of Science (IISc). The central government stationed India's strategic heavy engineering and aerospace powerhouses here: Hindustan Aeronautics Limited (HAL), Bharat Electronics Limited (BEL), Indian Space Research Organisation (ISRO), and BHEL.\n\nIn the late 1970s, R.K. Baliga, Chairman of KEONICS, envisioned 'Electronics City' across 330 acres of countryside south of Bangalore. By the 1980s, Texas Instruments set up India's first foreign software engineering centre here, using a dedicated satellite dish for intercontinental data transmission.\n\nHomegrown pioneers Infosys and Wipro soon established global footprints, pioneering the offshore software delivery model. When the Y2K challenge arrived in the late 1990s, Bengaluru engineers resolved critical banking systems globally. Today, the city is home to over 400 Fortune 500 R&D hubs, 40+ unicorns, and India's vibrant aerospace, biotechnology, and artificial intelligence ecosystems.",
      "ka": "ಬೆಂಗಳೂರು ವಿಶ್ವದ ಅಗ್ರಮಾನ್ಯ ತಂತ್ರಜ್ಞಾನ ನಗರಿಯಾಗಿ ಹೊರಹೊಮ್ಮಿದ್ದು ಹಲವು ದಶಕಗಳ ದೂರದೃಷ್ಟಿಯ ಫಲವಾಗಿದೆ.\n\nಸ್ವಾತಂತ್ರ್ಯದ ನಂತರ ಪ್ರಧಾನಿ ಜವಾಹರಲಾಲ್ ನೆಹರೂ ಅವರು ಬೆಂಗಳೂರಿನ ಹಿತಕರ ವಾತಾವರಣ, ಸುರಕ್ಷಿತ ಭೌಗೋಳಿಕ ನೆಲೆ ಹಾಗೂ ಭಾರತೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆಯ (ಐ.ಐ.ಎಸ್ಸಿ) ಉಪಸ್ಥಿತಿಯನ್ನು ಗಮನಿಸಿ, ಇದನ್ನು 'ಭವಿಷ್ಯದ ನಗರ'ವೆಂದು ಕರೆದರು. ದೇಶದ ರಕ್ಷಣಾ ಹಾಗೂ ಬಾಹ್ಯಾಕಾಶ ಸಾರ್ವಜನಿಕ ಸಂಸ್ಥೆಗಳಾದ ಹೆಚ್.ಎ.ಎಲ್ (HAL), ಬಿ.ಇ.ಎಲ್ (BEL), ಇಸ್ರೋ (ISRO) ಮತ್ತು ಬಿ.ಹೆಚ್.ಇ.ಎಲ್ (BHEL) ಸಂಸ್ಥೆಗಳನ್ನು ಇಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾಯಿತು.\n\n1970ರ ದಶಕದ ಕೊನೆಯಲ್ಲಿ ಕಿಯೋನಿಕ್ಸ್ ಸಂಸ್ಥೆಯ ಆರ್.ಕೆ. ಬಾಳಿಗಾ ಅವರು ನಗರದ ದಕ್ಷಿಣಕ್ಕೆ 330 ಎಕರೆಯಲ್ಲಿ 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ'ಯ ಕನಸು ಕಂಡರು. 1980ರ ದಶಕದಲ್ಲಿ ಟೆಕ್ಸಾಸ್ ಇನ್ಸ್ಟ್ರುಮೆಂಟ್ಸ್ ಸಂಸ್ಥೆಯು ದೇಶದ ಮೊದಲ ಸಾಫ್ಟ್‌ವೇರ್ ಕೇಂದ್ರವನ್ನು ಸ್ಯಾಟಲೈಟ್ ಸಂಪರ್ಕದೊಂದಿಗೆ ಇಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿತು.\n\nನಂತರ ಇನ್ಫೋಸಿಸ್ ಮತ್ತು ವಿಪ್ರೋ ಸಂಸ್ಥೆಗಳು ಭಾರತೀಯ ಸಾಫ್ಟ್‌ವೇರ್ ಪ್ರತಿಭೆಯನ್ನು ಜಗತ್ತಿಗೆ ಪರಿಚಯಿಸಿದವು. 1990ರ ವೈ2ಕೆ (Y2K) ಬಿಕ್ಕಟ್ಟನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಿಭಾಯಿಸಿದ ನಂತರ ಬೆಂಗಳೂರಿನ ಖ್ಯಾತಿ ಜಗತ್ತಿನಾದ್ಯಂತ ಹರಡಿತು. ಇಂದು ವಿಶ್ವದ 400ಕ್ಕೂ ಹೆಚ್ಚು ಫಾರ್ಚೂನ್ 500 ಕಂಪನಿಗಳ ಸಂಶೋಧನಾ ಕೇಂದ್ರಗಳು, ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ (AI) ಹಾಗೂ ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳ ಜಾಗತಿಕ ರಾಜಧಾನಿಯಾಗಿ ನಮ್ಮ ಬೆಂಗಳೂರು ರಾರಾಜಿಸುತ್ತಿದೆ."
    }
  }
];

const HOME_CONTENT = {
  "heroTitle": {
    "en": "Discover the Garden City & Silicon Valley of India",
    "ka": "ಭಾರತದ ಉದ್ಯಾನ ನಗರಿ ಮತ್ತು ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿಯನ್ನು ಅನ್ವೇಷಿಸಿ"
  },
  "heroSubtitle": {
    "en": "From historic temples and peaceful botanical gardens to global tech campuses and bustling shopping districts — explore the vibrant spirit of Bangalore.",
    "ka": "ಐತಿಹಾಸಿಕ ದೇವಾಲಯಗಳು ಮತ್ತು ಶಾಂತಿಯುತ ಸಸ್ಯೋದ್ಯಾನಗಳಿಂದ ಹಿಡಿದು ಜಾಗತಿಕ ಐಟಿ ಸಂಸ್ಥೆಗಳು ಹಾಗೂ ರೋಮಾಂಚಕ ಶಾಪಿಂಗ್ ಕೇಂದ್ರಗಳವರೆಗೆ — ಬೆಂಗಳೂರನ್ನು ಅನ್ವೇಷಿಸಿ."
  },
  "highlights": [
    {
      "img": "assets/images/home/home1.jpg",
      "title": {
        "en": "Heritage & Architecture",
        "ka": "ಪರಂಪರೆ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ"
      },
      "desc": {
        "en": "Marvel at ancient temples and majestic heritage monuments.",
        "ka": "ಪುರಾತನ ದೇವಾಲಯಗಳು ಮತ್ತು ಭವ್ಯ ಸ್ಮಾರಕಗಳನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ."
      },
      "sectionId": "temples"
    },
    {
      "img": "assets/images/home/home2.jpg",
      "title": {
        "en": "Silicon Capital",
        "ka": "ಸಿಲಿಕಾನ್ ರಾಜಧಾನಿ"
      },
      "desc": {
        "en": "Explore world-renowned technology hubs and modern campuses.",
        "ka": "ವಿಶ್ವಪ್ರಸಿದ್ಧ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಕ್ಯಾಂಪಸ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ."
      },
      "sectionId": "it"
    },
    {
      "img": "assets/images/home/home3.jpg",
      "title": {
        "en": "Urban Lifestyle & Parks",
        "ka": "ನಗರ ಜೀವನಶೈಲಿ ಮತ್ತು ಉದ್ಯಾನಗಳು"
      },
      "desc": {
        "en": "Experience premier shopping malls, sports grounds, and lush gardens.",
        "ka": "ವಿಶ್ವದರ್ಜೆಯ ಮಾಲ್‌ಗಳು, ಕ್ರೀಡಾಂಗಣಗಳು ಮತ್ತು ಸುಂದರ ಉದ್ಯಾನಗಳನ್ನು ಅನುಭವಿಸಿ."
      },
      "sectionId": "shopping"
    }
  ]
};

const ABOUT_CONTENT = {
  "title": {
    "en": "About Bengaluru",
    "ka": "ಬೆಂಗಳೂರಿನ ಬಗ್ಗೆ"
  },
  "images": [
    {
      "src": "assets/images/about/ab.jpg",
      "alt": {
        "en": "Historic Bangalore view",
        "ka": "ಐತಿಹಾಸಿಕ ಬೆಂಗಳೂರಿನ ನೋಟ"
      }
    },
    {
      "src": "assets/images/about/ab2.jpg",
      "alt": {
        "en": "Bengaluru Heritage and Culture",
        "ka": "ಬೆಂಗಳೂರು ಪರಂಪರೆ ಮತ್ತು ಸಂಸ್ಕೃತಿ"
      }
    }
  ],
  "text": {
    "en": "Bangalore, officially known as Bengaluru, has a history that spans several centuries. The earliest references to the region date back to the Ganga Dynasty (350–1000 CE), when small settlements and temples existed around present-day Bangalore. In the 11th century, the Chola Dynasty ruled the area, bringing in their administrative and cultural influence. The name “Bengaluru” is believed to have originated from “Benda Kaalu Ooru,” meaning “Town of Boiled Beans,” linked to a legend of King Veera Ballala II being served boiled beans by a humble woman.In the 16th century, Kempe Gowda I, a chieftain under the Vijayanagara Empire, founded the modern city of Bangalore in 1537 CE by building a mud fort with four watchtowers marking the city’s limits. This period saw the establishment of markets, temples, and lakes, some of which still exist today. Later, Bangalore came under the rule of the Marathas, the Mughals, and finally Hyder Ali and Tipu Sultan in the late 18th century, who developed gardens, trade routes, and military garrisons.After Tipu Sultan’s death in 1799, the British took control and developed Bangalore as a cantonment town, introducing English education, railways, and public infrastructure. This led to the coexistence of the Cantonment area and the Pete (native town), each with distinct cultures. In 1947, Bangalore became part of independent India and later the capital of Karnataka in 1956. The late 20th century brought the IT revolution, transforming Bangalore into the Silicon Valley of India. Today, it is a cosmopolitan hub known for its technology, education, gardens, and vibrant lifestyle.Bangalore’s history is a vibrant tapestry of different rulers and cultures. After the British established the cantonment, the city grew rapidly in the 19th century. The British brought administrative buildings, schools, and hospitals, making Bangalore an important center for the British Indian Army. The cantonment area developed with tree-lined avenues, clubs, and churches, contrasting with the old native town, known as the Pete.In the early 20th century, Bangalore became a hub for freedom fighters and reformers. The city played a key role in the Indian independence movement with notable figures like Kengal Hanumanthaiah and H.C. Dasappa. Post-independence, Bangalore’s strategic location made it the capital of the newly formed Mysore State (later renamed Karnataka).The establishment of public sector industries like Hindustan Aeronautics Limited (HAL) and Bharat Electronics Limited (BEL) in the mid-20th century laid the foundation for Bangalore’s industrial growth. The city also became a major center for education with institutions like IISc, Indian Institute of Management Bangalore (IIMB), and many universities.From the 1980s onwards, Bangalore witnessed a tech boom with the growth of software companies, IT parks, and multinational corporations. Today, it’s known as the “Silicon Valley of India,” attracting professionals and entrepreneurs worldwide. Despite rapid urbanization, Bangalore retains its green spaces, lakes, and a multicultural spirit that reflects its rich heritage.",
    "ka": "ಬೆಂಗಳೂರು, ಅಧಿಕೃತವಾಗಿ ಬೆಂಗಳೂರಾಗಿ ಪರಿಚಿತವಾಗಿದ್ದು, ಶತಮಾನಗಳಷ್ಟು ಹಳೆಯ ಇತಿಹಾಸವನ್ನು ಹೊಂದಿದೆ. ಈ ಪ್ರದೇಶದ ಪ್ರಾಚೀನ ಉಲ್ಲೇಖಗಳು ಗಂಗ ವಂಶದ (ಕ್ರಿ.ಶ. 350–1000) ಕಾಲಕ್ಕೆ ಸೇರಿದವು. ಆ ಕಾಲದಲ್ಲಿ ಇಂದಿನ ಬೆಂಗಳೂರಿನ ಸುತ್ತಮುತ್ತ ಸಣ್ಣ ಹಳ್ಳಿಗಳು ಮತ್ತು ದೇವಾಲಯಗಳು ಇದ್ದವು. 11ನೇ ಶತಮಾನದಲ್ಲಿ ಚೋಳ ವಂಶ ಇಲ್ಲಿ ಆಳಿಕೆ ನಡೆಸಿ ಆಡಳಿತ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ಬೆಳಸಿತು. “ಬೆಂಗಳೂರು” ಎಂಬ ಹೆಸರು “ಬೆಂದಕಾಳೂರಿನಿಂದ” ಬಂದಿದ್ದು, ಇದು ವೀರ ಬಲ್ಲಾಳ II ಅವರಿಗೆ ಒಬ್ಬ ಮಹಿಳೆ ನೀಡಿದ ಬೆಂದ ಕಾಳುಗಳಿಂದ ಉಂಟಾದ ಕತೆ ಎಂದು ನಂಬಲಾಗುತ್ತದೆ.16ನೇ ಶತಮಾನದಲ್ಲಿ, ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಪಾಳೆಯಗಾರನಾದ ಕೆಂಪೇಗೌಡ I ಅವರು ಕ್ರಿ.ಶ. 1537ರಲ್ಲಿ ಮಣ್ಣಿನ ಕೋಟೆಯನ್ನು ನಿರ್ಮಿಸಿ ನಾಲ್ಕು ಗೋಪುರಗಳನ್ನು ಕಟ್ಟುವ ಮೂಲಕ ಆಧುನಿಕ ಬೆಂಗಳೂರನ್ನು ಸ್ಥಾಪಿಸಿದರು. ಈ ಅವಧಿಯಲ್ಲಿ ಮಾರುಕಟ್ಟೆಗಳು, ದೇವಾಲಯಗಳು, ಕೆರೆಗಳು ನಿರ್ಮಿಸಲ್ಪಟ್ಟವು. ನಂತರ ಬೆಂಗಳೂರು ಮರಾಠರು, ಮೊಘಲರು, ಮತ್ತು 18ನೇ ಶತಮಾನದ ಕೊನೆಯಲ್ಲಿ ಹೈದರ್ ಅಲಿ ಹಾಗೂ ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಆಳ್ವಿಕೆಗೆ ಒಳಪಟ್ಟಿತು. ಅವರು ತೋಟಗಳು, ವ್ಯಾಪಾರ ಮಾರ್ಗಗಳು ಮತ್ತು ಸೇನಾ ತಾಣಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದರು.1799ರಲ್ಲಿ ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಮರಣದ ನಂತರ, ಬ್ರಿಟಿಷರು ಅಧಿಕಾರ ಹಿಡಿದು ಬೆಂಗಳೂರನ್ನು ಕ್ಯಾಂಟೋನ್ಮೆಂಟ್ ಪಟ್ಟಣವನ್ನಾಗಿ ರೂಪಿಸಿದರು. ಅವರು ಇಂಗ್ಲೀಷ್ ಶಿಕ್ಷಣ, ರೈಲು ಮಾರ್ಗಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಮೂಲಸೌಕರ್ಯಗಳನ್ನು ಪರಿಚಯಿಸಿದರು. ಇದರಿಂದ ಕ್ಯಾಂಟೋನ್ಮೆಂಟ್ ಪ್ರದೇಶ ಮತ್ತು ಪೇಟೆ ಪ್ರದೇಶ ವಿಭಿನ್ನ ಸಂಸ್ಕೃತಿಗಳೊಂದಿಗೆ ಬೆಳೆದವು. 1947ರಲ್ಲಿ ಸ್ವತಂತ್ರ ಭಾರತದ ಭಾಗವಾದ ಬೆಂಗಳೂರು, 1956ರಲ್ಲಿ ಕರ್ನಾಟಕದ ರಾಜಧಾನಿಯಾಯಿತು. 20ನೇ ಶತಮಾನದ ಅಂತ್ಯದಲ್ಲಿ ಐಟಿ ಕ್ರಾಂತಿಯಿಂದ ಬೆಂಗಳೂರು ಭಾರತದ ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿಯಾಗಿ ಮಾರ್ಪಟ್ಟಿತು. ಇಂದಿನ ದಿನಗಳಲ್ಲಿ ಇದು ತಂತ್ರಜ್ಞಾನ, ಶಿಕ್ಷಣ, ತೋಟಗಳು ಮತ್ತು ಚೈತನ್ಯಮಯ ಜೀವನಶೈಲಿಗೆ ಪ್ರಸಿದ್ಧವಾದ ನಗರವಾಗಿದೆ.ಬೆಂಗಳೂರು ಇತಿಹಾಸವು ವಿಭಿನ್ನ ಆಳ್ವಿಕೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಗಳ ಸಂಯೋಜನೆಯಾಗಿದೆ. ಬ್ರಿಟಿಷರು ಕ್ಯಾಂಟೋನ್ಮೆಂಟ್ ಸ್ಥಾಪಿಸಿದ ನಂತರ, 19ನೇ ಶತಮಾನದಲ್ಲಿ ನಗರವು ವೇಗವಾಗಿ ಬೆಳೆದಿತು. ಬ್ರಿಟಿಷರು ಆಡಳಿತ ಭವನಗಳು, ಶಾಲೆಗಳು, ಮತ್ತು ಆಸ್ಪತ್ರೆಗೆ ಪರಿಚಯಿಸಿದ್ದರು, ಇದರಿಂದ ಬೆಂಗಳೂರು ಬ್ರಿಟಿಷ್ ಇಂಡಿಯನ್ ಸೇನೆಯ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಯಿತು. ಕ್ಯಾಂಟೋನ್ಮೆಂಟ್ ಪ್ರದೇಶವು ಮರದ ದಾರಿಗಳ, ಕ್ಲಬ್‌ಗಳು, ಚರ್ಚ್‌ಗಳು ಇರುವ ಸ್ಥಳವಾಗಿ ಬೆಳೆದಿದ್ದು, ಹಳೆಯ ಪೇಟೆಯ ಪ್ರದೇಶದೊಂದಿಗೆ ವಿಭಿನ್ನವಾಗಿತ್ತು.20ನೇ ಶತಮಾನದ ಆರಂಭದಲ್ಲಿ ಬೆಂಗಳೂರು ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರರು ಮತ್ತು ಸುಧಾರಕರ ಕೇಂದ್ರವಾಗಿ ಬೆಳೆಯಿತು. ಕೆಂಗಲ್ ಹನುಮಂತಯ್ಯ, ಎಚ್.ಸಿ. ದಾಸಪ್ಪ ಸೇರಿದಂತೆ ಹಲವರು ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದರು. ಸ್ವಾತಂತ್ರ್ಯ ನಂತರ, ಬೆಂಗಳೂರಿನ ಪ್ರಾದೇಶಿಕ ಸ್ಥಾನ Mysore ರಾಜ್ಯದ ರಾಜಧಾನಿಯಾಗಿ ಆಯಿತು (ನಂತರ ಕರ್ನಾಟಕ ಎಂದು ಹೆಸರು ಬದಲಾಗಿದೆ).ಮಧ್ಯ 20ನೇ ಶತಮಾನದಲ್ಲಿ, ಹಿಂದುಸ್ತಾನ ಏರೋನಾಟಿಕ್ಸ್ ಲಿಮಿಟೆಡ್ (HAL), ಭಾರತ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಲಿಮಿಟೆಡ್ (BEL) ಸೇರಿದಂತೆ ಸಾರ್ವಜನಿಕ ಉದ್ಯಮಗಳ ಸ್ಥಾಪನೆಯಿಂದ ಬೆಂಗಳೂರು ಕೈಗಾರಿಕಾ ಅಭಿವೃದ್ಧಿಗೆ ತುದಿಗಟ್ಟಿತು. ವಿಜ್ಞಾನ ಸಂಸ್ಥೆಗಳು, IISc, ಐಐಎಂಬಿ ಮತ್ತು ಅನೇಕ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ನಗರವನ್ನು ಶಿಕ್ಷಣ ಕೇಂದ್ರವನ್ನಾಗಿ ಮಾಡಿದರು.1980ರ ನಂತರ, ಸಾಫ್ಟ್‌ವೇರ್ ಕಂಪನಿಗಳು, ಐಟಿ ಪಾರ್ಕ್‌ಗಳು ಮತ್ತು ಬಹುಜಾತಿ ಸಂಸ್ಥೆಗಳ ಬೆಳವಣಿಗೆಯಿಂದ ಬೆಂಗಳೂರು ತಂತ್ರಜ್ಞಾನ ಕ್ಷೇತ್ರದಲ್ಲಿ ವೇಗವಾಗಿ ಬೆಳೆದಿತು. ಇಂದಿನ ದಿನಗಳಲ್ಲಿ, ‘ಭಾರತದ ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿ’ ಎಂದು ಪರಿಚಿತರಾಗಿದ್ದು, ವಿಶ್ವದ ಹಲವು ಸ್ಥಳಗಳಿಂದ ವೃತ್ತಿಪರರು ಮತ್ತು ಉದ್ಯಮಿಗಳು ಬೆಂಗಳೂರಿಗೆ ಬರುತ್ತಾರೆ. ನಗರವು ತ್ವರಿತ ನಗರೀಕರಣದ ನಡುವೆಯೂ ಹಸಿರು ಪ್ರದೇಶಗಳು, ಕೆರೆಗಳು ಮತ್ತು ಬಹುಸಂಸ್ಕೃತಿಯ ಆತ್ಮವನ್ನು ಉಳಿಸಿಕೊಂಡಿದೆ."
  }
};

const SECTIONS = [
  {
    "id": "home",
    "label": {
      "en": "Home",
      "ka": "ಮುಖಪುಟ"
    }
  },
  {
    "id": "explore",
    "label": {
      "en": "Explore",
      "ka": "ಅನ್ವೇಷಿಸಿ"
    }
  },
  {
    "id": "categories",
    "label": {
      "en": "Categories",
      "ka": "ವರ್ಗಗಳು"
    }
  },
  {
    "id": "map",
    "label": {
      "en": "Interactive Map",
      "ka": "ನಕ್ಷೆ"
    }
  },
  {
    "id": "itineraries",
    "label": {
      "en": "Itineraries",
      "ka": "ದಿನಚರಿ ಪ್ರವಾಸಗಳು"
    }
  },
  {
    "id": "stories",
    "label": {
      "en": "City Stories",
      "ka": "ನಗರದ ಕಥೆಗಳು"
    }
  },
  {
    "id": "about",
    "label": {
      "en": "About",
      "ka": "ಬಗ್ಗೆ"
    }
  }
];

// Legacy Compatibility Shim
const DATA = (function() {
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
  const d = {};
  for (const k in legacyMap) {
    d[k] = PLACES.filter(p => p.category === legacyMap[k]).map(p => ({
      en: { title: p.name, short: p.shortDesc, long: p.fullDesc },
      ka: { title: p.kannadaName, short: p.shortDescKn, long: p.fullDescKn },
      img: p.image,
      id: p.id,
      coordinates: p.coordinates
    }));
  }
  return d;
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, PLACES, CURATED_ITINERARIES, STORIES, HOME_CONTENT, ABOUT_CONTENT, SECTIONS, DATA };
}
