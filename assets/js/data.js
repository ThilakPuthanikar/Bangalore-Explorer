/**
 * Bangalore Explorer - Core Application Data
 * Centralized bilingual datasets for landmarks, sections, and informational pages.
 */

const SECTIONS = [
        { id: "home", label: { en: "Home", ka: "ಮುಖಪುಟ" } },
        { id: "about", label: { en: "About", ka: "ಬಗ್ಗೆ" } },
        { id: "temples", label: { en: "Temples", ka: "ದೇವಾಲಯಗಳು" } },
        { id: "it", label: { en: "IT", ka: "ಐಟಿ" } },
        { id: "shopping", label: { en: "Shopping", ka: "ಶಾಪಿಂಗ್" } },
        { id: "sports", label: { en: "Sports", ka: "ಕ್ರೀಡೆ" } },
        { id: "entertainment", label: { en: "Entertainment", ka: "ಮನರಂಜನೆ" } },
        { id: "banks", label: { en: "Banks", ka: "ಬ್ಯಾಂಕುಗಳು" } },
        { id: "hotels", label: { en: "Hotels", ka: "ಹೋಟೆಲು" } },
        { id: "hospitals", label: { en: "Hospitals", ka: "ಆಸ್ಪತ್ರೆಗಳು" } },
        { id: "map", label: { en: "Map", ka: "ನಕ್ಷೆ" } },
      ];

const DATA = {
  "temples": [
    {
      "en": {
        "title": "ISKCON Temple",
        "short": "Large Krishna temple and cultural centre.",
        "long": "Located in Rajajinagar, ISKCON Sri Radha Krishna Temple is a grand Dravidian-style structure with golden towers. The temple complex has six shrines including Radha-Krishna and Krishna-Balarama. Devotees can witness daily prayers, bhajans, and cultural activities. The temple also has a museum, a Vedic library, and a large food court serving prasadam. It is one of the most visited spiritual landmarks in Bangalore."
      },
      "ka": {
        "title": "ಇಸ್ಕಾನ್ ದೇವಸ್ಥಾನ",
        "short": "ದೊಡ್ಡ ಕೃಷ್ಣ ದೇವಾಲಯ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ.",
        "long": "ರಾಜಾಜಿನಗರದಲ್ಲಿರುವ ಇಸ್ಕಾನ್ ಶ್ರೀ ರಾಧಾ-ಕೃಷ್ಣ ದೇವಸ್ಥಾನವು ಡ್ರಾವಿಡ ಶೈಲಿಯ ಅದ್ಭುತ ಕಟ್ಟಡವಾಗಿದೆ. ಇಲ್ಲಿ ಚಿನ್ನದ ಗೋಪುರಗಳು ಮತ್ತು ಆರು ದೇವರ ಸನ್ನಿಧಿಗಳು ಇವೆ. ಪ್ರತಿದಿನ ಪೂಜೆ, ಭಜನೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ದೇವಸ್ಥಾನದಲ್ಲಿ ಸಂಗ್ರಹಾಲಯ, ವೇದ ಗ್ರಂಥಾಲಯ ಮತ್ತು ಪ್ರಸಾದವನ್ನು ನೀಡುವ ದೊಡ್ಡ ಆಹಾರ ಮಂದಿರವಿದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ಆಧ್ಯಾತ್ಮಿಕ ಸ್ಥಳಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/temples/tem1.jpg"
    },
    {
      "en": {
        "title": "Bull Temple",
        "short": "Historic Nandi statue at Basavanagudi.",
        "long": "Built by Kempe Gowda, the Bull Temple in Basavanagudi is dedicated to Nandi, the vehicle of Lord Shiva. The temple houses a 15-foot-high monolithic Nandi idol carved out of a single rock. It is one of the largest Nandi statues in the world. Every year, the famous Kadalekai Parishe (Groundnut Festival) attracts thousands of devotees. The temple is both a religious and cultural landmark of Bangalore."
      },
      "ka": {
        "title": "ಬುಲ್ ದೇವಾಲಯ",
        "short": "ಬಸವನಗುಡಿ ನಂದಿ ಪ್ರತಿಮೆ.",
        "long": "ಬಸವನಗುಡಿಯಲ್ಲಿ ಕೆಂಪೇಗೌಡರು ಕಟ್ಟಿಸಿದ ಬುಲ್ ದೇವಾಲಯವು ಶಿವನ ವಾಹನ ನಂದಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇಲ್ಲಿ 15 ಅಡಿ ಎತ್ತರದ ಏಕಶಿಲಾ ನಂದಿ ಮೂರ್ತಿಯಿದೆ. ಇದು ಜಗತ್ತಿನ ಅತಿ ದೊಡ್ಡ ನಂದಿ ಪ್ರತಿಮೆಗಳಲ್ಲೊಂದು. ಪ್ರತಿವರ್ಷ ನಡೆಯುವ ಕಡಲೆಕಾಯಿ ಪರಿಷೆಯ ಸಮಯದಲ್ಲಿ ಸಾವಿರಾರು ಭಕ್ತರು ಇಲ್ಲಿ ಸೇರುತ್ತಾರೆ. ಇದು ಧಾರ್ಮಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಮಹತ್ವವನ್ನು ಹೊಂದಿದ ಸ್ಥಳವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/temples/tem2.jpg"
    },
    {
      "en": {
        "title": "Banashankari Temple",
        "short": "Temple dedicated to Goddess Banashankari.",
        "long": "Banashankari Temple is a historic shrine located on Kanakapura Road in Bangalore. It is dedicated to Goddess Banashankari, an incarnation of Goddess Parvati. The temple is unique because special rituals and poojas are performed during Rahukala time, unlike most temples. Thousands of devotees gather here during the Banashankari Jatre festival. It is one of the most powerful Shakti temples in Bangalore."
      },
      "ka": {
        "title": "ಬನಶಂಕರಿ ದೇವಾಲಯ",
        "short": "ಬನಶಂಕರಿ ದೇವಿಗೆ ಸಮರ್ಪಿತ ದೇವಸ್ಥಾನ.",
        "long": "ಕನಕಪುರ ರಸ್ತೆಯಲ್ಲಿರುವ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನವು ಪಾರ್ವತಿಯ ಅವತಾರವಾದ ಬನಶಂಕರಿ ದೇವಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇಲ್ಲಿ ವಿಶೇಷವಾಗಿ ರಾಹುಕಾಲದ ಸಮಯದಲ್ಲಿ ಪೂಜೆ ನಡೆಯುವುದು ಇದರ ವೈಶಿಷ್ಟ್ಯವಾಗಿದೆ. ಪ್ರತಿವರ್ಷ ಬನಶಂಕರಿ ಜಾತ್ರೆಯಲ್ಲಿ ಸಾವಿರಾರು ಭಕ್ತರು ಭಾಗವಹಿಸುತ್ತಾರೆ. ಈ ದೇವಸ್ಥಾನವು ಶಕ್ತಿ ಪೂಜೆಯ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಆಧ್ಯಾತ್ಮಿಕ ತಾಣವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/temples/tem6.jpg"
    },
    {
      "en": {
        "title": "Dodda Ganapathi Temple",
        "short": "Home to a huge Ganesha idol.",
        "long": "Dodda Ganapathi Temple, located in Basavanagudi, is dedicated to Lord Ganesha. The temple is famous for its giant idol of Ganesha that is about 18 feet high and 16 feet wide. The idol is decorated with butter (Benne Alankara) during special occasions, attracting thousands of devotees. The temple becomes a hub of celebrations during Ganesh Chaturthi. It is one of the most visited Ganesha temples in Bangalore."
      },
      "ka": {
        "title": "ದೊಡ್ಡ ಗಣಪತಿ ದೇವಾಲಯ",
        "short": "ದೊಡ್ಡ ಗಣೇಶ ವಿಗ್ರಹದ ಸ್ಥಳ.",
        "long": "ಬಸವನಗುಡಿಯಲ್ಲಿ ಇರುವ ದೊಡ್ಡ ಗಣಪತಿ ದೇವಾಲಯವು ಗಣೇಶನಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇಲ್ಲಿ 18 ಅಡಿ ಎತ್ತರ ಮತ್ತು 16 ಅಡಿ ಅಗಲದ ಭವ್ಯ ಗಣೇಶನ ವಿಗ್ರಹವಿದೆ. ವಿಶೇಷ ದಿನಗಳಲ್ಲಿ ಈ ವಿಗ್ರಹವನ್ನು ಬೆಣ್ಣೆಯಿಂದ ಅಲಂಕರಿಸಲಾಗುತ್ತದೆ. ಗಣೇಶ ಚತುರ್ಥಿಯ ಸಂದರ್ಭದಲ್ಲಿ ಇಲ್ಲಿ ಭಕ್ತರ ದೊಡ್ಡ ಗುಂಪು ಸೇರುತ್ತದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಗಣೇಶ ದೇವಸ್ಥಾನಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/temples/tem3.jpg"
    },
    {
      "en": {
        "title": "Gavi Gangadhareshwara",
        "short": "Rock-cut cave temple with ancient sculptures.",
        "long": "Gavi Gangadhareshwara Temple in Gavipuram is a unique rock-cut cave temple dedicated to Lord Shiva. The temple is known for its monolithic stone pillars and ancient sculptures. On Makar Sankranti, sunlight passes exactly through the temple arch to illuminate the deity, showing the brilliance of ancient architecture. Devotees and history lovers visit in large numbers. It is one of the oldest temples in Bangalore."
      },
      "ka": {
        "title": "ಗವಿ ಗಂಗಾಧರೇಶ್ವರ",
        "short": "ಗುಹಾ ದೇವಾಲಯ ಮತ್ತು ಶಿಲ್ಪಗಳು.",
        "long": "ಗವಿಪುರದಲ್ಲಿರುವ ಗವಿ ಗಂಗಾಧರೇಶ್ವರ ದೇವಸ್ಥಾನವು ಶಿವನಿಗೆ ಸಮರ್ಪಿತವಾದ ಗುಹಾ ದೇವಾಲಯವಾಗಿದೆ. ಇದು ಏಕಶಿಲಾ ಸ್ತಂಭಗಳು ಮತ್ತು ಪುರಾತನ ಶಿಲ್ಪಗಳಿಂದ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಪ್ರತಿವರ್ಷ ಮಕರ ಸಂಕ್ರಾಂತಿಯಂದು ಸೂರ್ಯನ ಬೆಳಕು ದೇವರ ವಿಗ್ರಹದ ಮೇಲೆ ಬೀಳುವ ಅದ್ಭುತ ಇಲ್ಲಿ ಕಾಣಬಹುದು. ಅನೇಕ ಭಕ್ತರು ಮತ್ತು ಇತಿಹಾಸ ಪ್ರಿಯರು ಇಲ್ಲಿ ಭೇಟಿ ನೀಡುತ್ತಾರೆ. ಇದು ಬೆಂಗಳೂರಿನ ಪುರಾತನ ದೇವಾಲಯಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/temples/tem5.jpg"
    },
    {
      "en": {
        "title": "Kote Venkataramana",
        "short": "Historic temple near Bangalore Fort.",
        "long": "Kote Venkataramana Temple is an old shrine located near the Bangalore Fort. It is dedicated to Lord Venkataramana, a form of Vishnu. The temple reflects Vijayanagara-style architecture with intricate carvings and a tall gopuram. It is closely connected to the history of Kempe Gowda and old Bangalore. Devotees visit regularly for prayers and religious ceremonies. It stands as a symbol of Bangalore’s rich heritage."
      },
      "ka": {
        "title": "ಕೋಟೆ ವೆಂಕಟರಮಣ",
        "short": "ಬೆಂಗಳೂರು ಕೋಟೆಯ ಹತ್ತಿರದ ದೇವಾಲಯ.",
        "long": "ಬೆಂಗಳೂರು ಕೋಟೆಯ ಹತ್ತಿರ ಇರುವ ಕೋಟೆ ವೆಂಕಟರಮಣ ದೇವಸ್ಥಾನವು ವಿಷ್ಣುವಿನ ರೂಪವಾದ ವೆಂಕಟರಮಣನಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇದು ವಿಜಯನಗರ ಶೈಲಿಯ ವಾಸ್ತುಶಿಲ್ಪವನ್ನು ಹೊಂದಿದ್ದು, ಅದ್ಭುತ ಶಿಲ್ಪಕಲೆ ಮತ್ತು ಗೋಪುರವನ್ನು ಒಳಗೊಂಡಿದೆ. ಕೆಂಪೇಗೌಡರ ಕಾಲದ ಇತಿಹಾಸದೊಂದಿಗೆ ಇದು ಆಳವಾಗಿ ಸಂಪರ್ಕ ಹೊಂದಿದೆ. ಪ್ರತಿದಿನ ಭಕ್ತರು ಪೂಜೆಗಾಗಿ ಇಲ್ಲಿ ಬರುತ್ತಾರೆ. ಇದು ಬೆಂಗಳೂರಿನ ಹೆರಿಟೇಜ್ ಚಿಹ್ನೆಯಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/temples/tem4.jpg"
    }
  ],
  "it": [
    {
      "en": {
        "title": "Infosys",
        "short": "Major IT services company.",
        "long": "Infosys is a global leader in IT services with deep roots in Bangalore. Its campuses host large teams focused on software development, consulting, and technology services for clients worldwide. The company runs training programs and innovation labs that help upskill fresh graduates and employees. Infosys works across digital transformation, automation, and enterprise solutions. Thousands of professionals are employed here, making it a major part of the city’s tech ecosystem."
      },
      "ka": {
        "title": "ಇನ್ಫೋಸಿಸ್",
        "short": "ಪ್ರಮುಖ ಐಟಿ ಸಂಸ್ಥೆ.",
        "long": "ಇನ್ಫೋಸಿಸ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಮೂಲಹೊಂದಿದ ಜಾಗತಿಕ ಮಟ್ಟದ ಐಟಿ ಸೇವಾ ಸಂಸ್ಥೆಯಾಗಿದೆ. ಇದರ ಕ್ಯಾಂಪಸ್‌ಗಳಲ್ಲಿ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ, ಸಲಹಾ ಸೇವೆಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ತಂಡಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಹೊಸ ಪದವೀಧರರು ಮತ್ತು ಸಿಬ್ಬಂದಿಗೆ ತರಬೇತಿ ಮತ್ತು ನವೀನತೆ ಲ್ಯಾಬ್‌ಗಳು ದೊರೆಯುತ್ತವೆ. ಕಂಪನಿ ಡಿಜಿಟಲ್ ಪರಿವರ್ತನೆ, ಸ್ವಯಂಚಾಲನೆ ಮತ್ತು ಎಂಟರ್‌ಪ್ರೈಸ್ ಪರಿಹಾರಗಳಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಬೆಂಗಳೂರಿನ ಪ್ರವೃತ್ತಿ ತಂತ್ರಜ್ಞಾನ ಪರಿಸರದಲ್ಲಿ ಇದು ಪ್ರಮುಖ ಉದ್ಯೋಗದಾಯಕವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/it/it1.jpg"
    },
    {
      "en": {
        "title": "Wipro",
        "short": "IT services and consulting.",
        "long": "Wipro is a major IT and consulting firm with a strong presence in Bangalore. It delivers services in cloud, engineering, IT consulting and business process solutions for global clients. The company runs sizable development centers that focus on product engineering and enterprise projects. Wipro also invests in sustainability programs, skill development and collaborations with academia. Many local professionals join Wipro for diverse project experience and career growth."
      },
      "ka": {
        "title": "ವಿಪ್ರೊ",
        "short": "ಐಟಿ ಸೇವೆಗಳು ಮತ್ತು ಸಲಹೆ.",
        "long": "ವಿಪ್ರೊ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಬಲವಾದ ನೆಲೆ ಹೊಂದಿರುವ ಪ್ರಮುಖ ಐಟಿ ಹಾಗೂ ಸಲಹಾ ಸಂಸ್ಥೆ. ಇದು ಕ್ಲೌಡ್, ಎಂಜಿನಿಯರಿಂಗ್, ಐಟಿ ಸಲಹೆ ಮತ್ತು ವ್ಯವಹಾರ ಪ್ರಕ್ರಿಯೆ ಪರಿಹಾರಗಳನ್ನು ಜಾಗತಿಕ ಗ್ರಾಹಕರಿಗೆ ನೀಡುತ್ತದೆ. ದೊಡ್ಡ ಡೆವಲಪ್‌ಮೆಂಟ್ ಕೇಂದ್ರಗಳಲ್ಲಿ ಉತ್ಪನ್ನ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಎಂಟರ್‌ಪ್ರೈಸ್ ಯೋಜನೆಗಳ ಮೇಲೆ ಕೆಲಸ ನಡೆಯುತ್ತದೆ. ವಿಪ್ರೊ ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ, ಪರಿಸರ ಪದক্ষেপ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಸಹಯೋಗಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತದೆ. ಹಲವು ವೃತ್ತಿಪರರು ವೈವಿಧ್ಯಮಯ ಪ್ರಾಜೆಕ್ಟ್ ಅನುಭವಕ್ಕಾಗಿ ವಿಪ್ರೊವನ್ನು ಆಯ್ಕೆಮಾಡುತ್ತಾರೆ."
      },
      "img": "assets/images/landmarks/it/it2.jpg"
    },
    {
      "en": {
        "title": "TCS",
        "short": "Tata Consultancy Services centre.",
        "long": "TCS is one of India’s largest IT services companies with multiple centres across Bangalore. The company builds enterprise software, operates delivery centres and supports sectors such as banking, healthcare and retail. TCS runs extensive hiring and training programs to integrate fresh graduates into client projects. Its large workforce and delivery network contribute significantly to the city’s IT economy. The firm is also active in research collaborations and campus initiatives."
      },
      "ka": {
        "title": "ಟಿಸಿಎಸ್",
        "short": "ಟಾಟಾ ಕನ್ಸಲ್ಟನ್ಸಿ ಸೆಂಟರ್.",
        "long": "ಟಿಸಿಎಸ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅನೇಕ ಕೇಂದ್ರಗಳನ್ನು ಹೊಂದಿರುವ ಭಾರತದ ಅತಿ ದೊಡ್ಡ ಐಟಿ ಸೇವಾ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಕಂಪನಿ ಎಂಟರ್‌ಪ್ರೈಸ್ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ, ಡೆಲಿವರಿ ಕೇಂದ್ರಗಳು ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್, ಆರೋಗ್ಯ ಹಾಗೂ ಚಿಲ್ಲರೆ ಕ್ಷೇತ್ರಗಳಿಗೆ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತದೆ. ಟಿಸಿಎಸ್ ಹೊಸ ಪದವೀಧರರನ್ನು ಪ್ರಾಜೆಕ್ಟ್ ತಂಡಗಳಿಗೆ ಸೇರಿಸಲು ವ್ಯಾಪಕ ನೇಮಕ ಮತ್ತು ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸುತ್ತದೆ. ಇದರ ದೊಡ್ಡ ಉದ್ಯೋಗ ಶಕ್ತಿ ಮತ್ತು ಡೆಲಿವರಿ ಜಾಲ ಬೆಂಗಳೂರು ಐಟಿ ಆರ್ಥಿಕತೆಗೆ ದೊಡ್ಡ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ. ಸಂಸ್ಥೆಯು ಸಂಶೋಧನಾ ಮತ್ತು ಕಾಲೇಜು ಸಹಕಾರಗಳಲ್ಲಿ ಸಹ ಸಕ್ರಿಯವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/it/it3.jpg"
    },
    {
      "en": {
        "title": "IBM",
        "short": "Research and technology offices.",
        "long": "IBM maintains research labs and technology teams in Bangalore that work on cloud, AI, hybrid platforms and enterprise solutions. The local centres are involved in R&D, product engineering and large client engagements. IBM often partners with startups, universities and industry to pilot new technologies and solutions. The offices host global product teams as well as support and services functions. IBM’s long-term presence has helped shape Bangalore’s research and enterprise landscape."
      },
      "ka": {
        "title": "ಐಬಿಎಂ",
        "short": "ಸಂಶೋಧನೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಕಚೇರಿ.",
        "long": "ಐಬಿಎಂ ಬೆಂಗಳೂರಿನ ಸಂಶೋಧನಾ ಪ್ರಯೋಗಾಲಯಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ತಂಡಗಳನ್ನು ಪಾಲಿಸುತ್ತದೆ, ಇಲ್ಲಿ ಕ್ಲೌಡ್, ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ, ಹೈಬ್ರಿಡ್ ವೇದಿಕೆಗಳು ಮತ್ತು ಎಂಟರ್‌ಪ್ರೈಸ್ ಪರಿಹಾರಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡಲಾಗುತ್ತದೆ. ಸ್ಥಳೀಯ ಕೇಂದ್ರಗಳು ಸಂಶೋಧನೆ, ಉತ್ಪನ್ನ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ದೊಡ್ಡ ಗ್ರಾಹಕ ಯೋಜನೆಗಳಲ್ಲಿ ತೊಡಗಿವೆ. ಐಬಿಎಂ ಸ್ಟಾರ್ಟಪ್‌ಗಳು, ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ಮತ್ತು ಕೈಗಾರಿಕೆಯೊಂದಿಗೆ ಹೊಸ ತಂತ್ರಜ್ಞಾನಗಳ ಪ್ರಯೋಗಗಳಿಗೆ ಸಹಕಾರ ನೀಡುತ್ತದೆ. ಈ ಕಚೇರಿಗಳು ಜಾಗತಿಕ ಉತ್ಪನ್ನ ತಂಡಗಳು ಮತ್ತು ಬೆಂಬಲ ಕಾರ್ಯಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ. ಐಬಿಎಂನ ದೀರ್ಘಕಾಲೀನ ನೆಲೆ ಬೆಂಗಳೂರು ಸಂಶೋಧನಾ ಮತ್ತು ಉದ್ಯಮ ಪ್ರವೇಶಕ್ಕೆ ಸಹಕಾರ ನೀಡಿದೆ."
      },
      "img": "assets/images/landmarks/it/it4.jpg"
    },
    {
      "en": {
        "title": "Google",
        "short": "Engineering and product teams.",
        "long": "Google’s engineering and product teams in Bangalore work on cloud, search, maps, ads and India-specific products. The offices bring together engineers, product managers and researchers building scalable systems and localized features. Google invests in developer outreach, language tools and programs that serve Indian users. The campuses host labs, workshops and community initiatives to support innovation. Many engineers are drawn to Google for its challenging projects and collaborative culture."
      },
      "ka": {
        "title": "ಗೂಗಲ್",
        "short": "ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಉತ್ಪನ್ನ ತಂಡಗಳು.",
        "long": "ಗೂಗಲ್‌ನ ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಉತ್ಪನ್ನ ತಂಡಗಳು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಕ್ಲೌಡ್, ಸರ್ಚ್, ಮ್ಯಾಪ್ಸ್, ಜಾಹಿರಾತು ಮತ್ತು ಭಾರತ-ನಿರ್ದೇಶಿತ ಉತ್ಪನ್ನಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ. ಇಲ್ಲಿ ಎಂಜಿನಿಯರ್‌ಗಳು, ಉತ್ಪನ್ನ ನಿರ್ವಹಕರು ಮತ್ತು ಸಂಶೋಧಕರು ತಳೆಯುವ ವ್ಯವಸ್ಥೆಗಳ ಮತ್ತು ಸ್ಥಳೀಕೃತ ಫೀಚರ್‌ಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತಾರೆ. ಗೂಗಲ್ ಭಾರತೀಯ ಬಳಕೆದಾರರಿಗೆ ಭಾಷಾ ಉಪಕರಣಗಳು ಮತ್ತು ಡೆವಲಪರ್ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುತ್ತದೆ. ಕ್ಯಾಂಪಸ್‌ಗಳಲ್ಲಿ ಲ್ಯಾಬ್‌ಗಳು, ವರ್ಕ್‌ಶಾಪ್‌ಗಳು ಮತ್ತು ಸಮುದಾಯ ಉಪಕ್ರಮಗಳಿವೆ. ಅನೇಕ ಎಂಜಿನಿಯರ್‌ಗಳು ಹಠಾತ್ ಸವಾಲಿನ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು ಮತ್ತು ಸೇರಿಕೊಂಡ ಕಾರ್ಯಸಂಸ್ಕೃತಿಗಾಗಿ ಗೂಗಲ್ ಅನ್ನು ಆಯ್ಕೆಮಾಡುತ್ತಾರೆ."
      },
      "img": "assets/images/landmarks/it/it5.jpg"
    },
    {
      "en": {
        "title": "Microsoft",
        "short": "Software, cloud and research teams.",
        "long": "Microsoft has development centres in Bangalore focused on Azure cloud, productivity tools, developer platforms and AI services. Teams here work on cloud infrastructure, enterprise software and tools used by developers worldwide. Microsoft collaborates with startups, universities and customers for product development and research. The offices host product engineering, support and business teams with global responsibilities. Microsoft is a major employer and contributor to Bangalore’s technology ecosystem."
      },
      "ka": {
        "title": "ಮೈಕ್ರೋಸಾಫ್ಟ್",
        "short": "ಸಾಫ್ಟ್‌ವೇರ್, ಕ್ಲೌಡ್ ಮತ್ತು ಸಂಶೋಧನಾ ತಂಡಗಳು.",
        "long": "ಮೈಕ್ರೋಸಾಫ್ಟ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಅಭಿವೃದ್ಧಿ ಕೇಂದ್ರಗಳನ್ನು ನಡೆಸುತ್ತದೆ, ಇಲ್ಲಿ Azure ಕ್ಲೌಡ್, ಉತ್ಪಾದಕತೆ ಸಾಧನಗಳು, ಡೆವಲಪರ್ ವೇದಿಕೆಗಳು ಮತ್ತು AI ಸೇವೆಗಳ ಮೇಲೆಯೂ ಕೆಲಸವಿರುತ್ತದೆ. ಇಲ್ಲಿ ತಂಡಗಳು ಕ್ಲೌಡ್ ಮೂಲಸೌಕರ್ಯ, ಎಂಟರ್‌ಪ್ರೈಸ್ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಜಾಗತಿಕವಾಗಿ ಬಳಸಲಾಗುವ ಉಪಕರಣಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುತ್ತವೆ. ಮೈಕ್ರೋಸಾಫ್ಟ್ ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳು, ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ಮತ್ತು ಗ್ರಾಹಕರೊಂದಿಗೆ ಉತ್ಪನ್ನ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸಂಶೋಧನೆಗಾಗಿ ಸಹಕಾರ ಮಾಡುತ್ತದೆ. ಕಚೇರಿಗಳಲ್ಲಿ ಉತ್ಪನ್ನ ಎಂಜಿನಿಯರಿಂಗ್, ಬೆಂಬಲ ಮತ್ತು ವ್ಯವಹಾರ ತಂಡಗಳಿರುವುದರಿಂದ ಜಾಗತಿಕ ಹೊಣೆಗಾರಿಕೆಗಳು ಕವುತ್ತವೆ. ಮೈಕ್ರೋಸಾಫ್ಟ್ ಬೆಂಗಳೂರಿನ ತಂತ್ರಜ್ಞಾನ ಪರಿಸರಕ್ಕೆ ಪ್ರಮುಖ ಕೊಡುಗೆ ನೀಡುವ ನೌಕರರೊಂದಿಗಿನ ಸಂಸ್ಥೆಯಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/it/it6.jpg"
    }
  ],
  "shopping": [
    {
      "en": {
        "title": "UB City",
        "short": "Luxury retail and dining complex.",
        "long": "UB City is one of Bangalore’s most premium shopping destinations. It houses luxury international brands, fine-dining restaurants, and exclusive boutiques. The open plazas often host cultural and lifestyle events. It is also a hub for nightlife and weekend gatherings. Many visitors come here for leisure, shopping, and gourmet experiences."
      },
      "ka": {
        "title": "ಯುಬಿ ಸಿಟಿ",
        "short": "ಐಷಾರಾಮಿ ಖರೀದಿ ಮತ್ತು ಊಟ.",
        "long": "ಯುಬಿ ಸಿಟಿ ಬೆಂಗಳೂರಿನ ಅತ್ಯಂತ ಐಷಾರಾಮಿ ಶಾಪಿಂಗ್ ಸ್ಥಳಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ಅಂತರರಾಷ್ಟ್ರೀಯ ಬ್ರ್ಯಾಂಡ್‌ಗಳು, ಸುಸಜ್ಜಿತ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು ಮತ್ತು ವಿಶಿಷ್ಟ ಅಂಗಡಿಗಳು ಇವೆ. ಮುಕ್ತಾಂಗಣದಲ್ಲಿ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಜೀವನ ಶೈಲಿ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ಇದು ರಾತ್ರಿ ಜೀವನ ಮತ್ತು ವಾರಾಂತ್ಯದ ಕೂಟಗಳಿಗೂ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಶಾಪಿಂಗ್ ಮತ್ತು ಮನರಂಜನೆಗಾಗಿ ಅನೇಕರು ಇಲ್ಲಿ ಭೇಟಿ ನೀಡುತ್ತಾರೆ."
      },
      "img": "assets/images/landmarks/shopping/mall3.jpg"
    },
    {
      "en": {
        "title": "Phoenix Marketcity",
        "short": "Large mall with entertainment.",
        "long": "Phoenix Marketcity is among the largest malls in Bangalore. It offers a wide range of fashion brands, electronics, and lifestyle stores. The mall features a multiplex cinema and food courts. Seasonal events and concerts are frequently organized here. Families and youngsters visit often for shopping, movies, and dining."
      },
      "ka": {
        "title": "ಫೀನಿಕ್ಸ್ ಮಾರ್ಕೆಟ್‌ಸಿಟಿ",
        "short": "ಮನರಂಜನೆ ಮತ್ತು ಖರೀದಿ ಕೇಂದ್ರ.",
        "long": "ಫೀನಿಕ್ಸ್ ಮಾರ್ಕೆಟ್‌ಸಿಟಿ ಬೆಂಗಳೂರಿನ ಅತಿ ದೊಡ್ಡ ಮಾಲ್‌ಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ಫ್ಯಾಷನ್ ಬ್ರ್ಯಾಂಡ್‌ಗಳು, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಜೀವನ ಶೈಲಿ ಅಂಗಡಿಗಳು ಲಭ್ಯ. ಮಲ್ಟಿಪ್ಲೆಕ್ಸ್ ಮತ್ತು ಆಹಾರ ಮಳಿಗೆಗಳೂ ಇವೆ. ಹಂಗಾಮಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಂಗೀತ ಕಛೇರಿಗಳು ನಡೆಯುತ್ತವೆ. ಕುಟುಂಬಗಳು ಮತ್ತು ಯುವಕರು ಶಾಪಿಂಗ್, ಚಿತ್ರಗಳು ಮತ್ತು ಊಟಕ್ಕಾಗಿ ಆಗಾಗ್ಗೆ ಭೇಟಿ ನೀಡುತ್ತಾರೆ."
      },
      "img": "assets/images/landmarks/shopping/mall2.jpg"
    },
    {
      "en": {
        "title": "Orion Mall",
        "short": "Lakeside shopping and leisure.",
        "long": "Orion Mall is a popular shopping and entertainment hub located beside a scenic lake. It has international brands, restaurants, and gaming zones. The lakeside view adds to the charm of the mall. Many festivals and special exhibitions are hosted here. It is a favorite destination for families and youngsters alike."
      },
      "ka": {
        "title": "ಓರಿಯನ್ ಮಾಲ್",
        "short": "ಸರೋವರ ಬಳಿಯ ಖರೀದಿ.",
        "long": "ಓರಿಯನ್ ಮಾಲ್ ಒಂದು ಪ್ರಸಿದ್ಧ ಶಾಪಿಂಗ್ ಮತ್ತು ಮನರಂಜನೆ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ಸುಂದರ ಸರೋವರದ ತೀರದಲ್ಲಿ ಇರುವುದರಿಂದ ವಿಶಿಷ್ಟ ಆಕರ್ಷಣೆ ಹೊಂದಿದೆ. ಅಂತರರಾಷ್ಟ್ರೀಯ ಬ್ರ್ಯಾಂಡ್‌ಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು ಮತ್ತು ಗೇಮಿಂಗ್ ವಲಯಗಳಿವೆ. ಇಲ್ಲಿ ಹಬ್ಬಗಳು ಮತ್ತು ವಿಶೇಷ ಪ್ರದರ್ಶನಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಕುಟುಂಬಗಳು ಮತ್ತು ಯುವಕರು ಭೇಟಿ ನೀಡಲು ಇಷ್ಟಪಡುವ ಸ್ಥಳವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/shopping/mall1.jpg"
    },
    {
      "en": {
        "title": "Church Street",
        "short": "Bookstores, cafes and street life.",
        "long": "Church Street is a vibrant stretch in central Bangalore. It is lined with bookstores, cafes, and restaurants offering global cuisines. The street is popular for nightlife, live music, and street art. On weekends, it becomes a lively hangout for youngsters. It is also a cultural hub connecting people of all backgrounds."
      },
      "ka": {
        "title": "ಚರ್ಚ್ ಸ್ಟ್ರೀಟ್",
        "short": "ಪುಸ್ತಕ ಅಂಗಡಿಗಳು ಮತ್ತು ಕಾಫೇಗಳು.",
        "long": "ಚರ್ಚ್ ಸ್ಟ್ರೀಟ್ ಬೆಂಗಳೂರಿನ ಜೀವಂತ ಬೀದಿಗಳಲ್ಲಿ ಒಂದು. ಇಲ್ಲಿ ಪುಸ್ತಕ ಅಂಗಡಿಗಳು, ಕಾಫೇಗಳು ಮತ್ತು ವಿವಿಧ ಆಹಾರ ಮಳಿಗೆಗಳಿವೆ. ರಾತ್ರಿ ಜೀವನ, ಲೈವ್ ಸಂಗೀತ ಮತ್ತು ಬೀದಿ ಕಲೆಗಾಗಿ ಇದು ಪ್ರಸಿದ್ಧ. ವಾರಾಂತ್ಯದಲ್ಲಿ ಯುವಕರ ನೆಚ್ಚಿನ ತಾಣವಾಗುತ್ತದೆ. ಸಾಂಸ್ಕೃತಿಕವಾಗಿ ಇದು ಜನರನ್ನು ಒಗ್ಗೂಡಿಸುವ ಪ್ರಮುಖ ಸ್ಥಳವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/shopping/mall4.jpg"
    },
    {
      "en": {
        "title": "Garuda Mall",
        "short": "City-center shopping mall.",
        "long": "Garuda Mall is located in the heart of Bangalore city. It features multiple retail outlets, restaurants, and a cinema multiplex. The mall is easy to access due to its central location. It attracts families, students, and professionals alike. Festivals and special sales draw large crowds throughout the year."
      },
      "ka": {
        "title": "ಗರೂಡಾ ಮಾಲ್",
        "short": "ನಗರದ ಕೇಂದ್ರದ ಮಾಲ್.",
        "long": "ಗರೂಡಾ ಮಾಲ್ ಬೆಂಗಳೂರಿನ ಮಧ್ಯಭಾಗದಲ್ಲಿದೆ. ಇಲ್ಲಿ ಅನೇಕ ಅಂಗಡಿಗಳು, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು ಮತ್ತು ಮಲ್ಟಿಪ್ಲೆಕ್ಸ್ ಚಿತ್ರಮಂದಿರವಿದೆ. ಕೇಂದ್ರದಲ್ಲಿರುವುದರಿಂದ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು. ಇದು ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಉದ್ಯೋಗಿಗಳಿಗೆ ಆಕರ್ಷಕವಾಗಿದೆ. ಹಬ್ಬಗಳು ಮತ್ತು ವಿಶೇಷ ಮಾರಾಟದ ಸಮಯದಲ್ಲಿ ಹೆಚ್ಚಿನ ಜನರು ಭೇಟಿ ನೀಡುತ್ತಾರೆ."
      },
      "img": "assets/images/landmarks/shopping/mall5.jpg"
    },
    {
      "en": {
        "title": "Mantri Mall",
        "short": "Neighborhood retail destination.",
        "long": "Mantri Mall is one of the largest malls in the Malleswaram area. It offers common fashion brands, household items, and dining options. The mall is always buzzing with shoppers during weekends. It has entertainment areas for kids and families. It is a convenient stop for everyday shopping and leisure."
      },
      "ka": {
        "title": "ಮಂತ್ರಿ ಮಾಲ್",
        "short": "ಪ್ರದೇಶೀಯ ಶಾಪಿಂಗ್ ಕೇಂದ್ರ.",
        "long": "ಮಂತ್ರಿ ಮಾಲ್ ಮಲ್ಲೇಶ್ವರಂ ಭಾಗದಲ್ಲಿರುವ ದೊಡ್ಡ ಮಾಲ್‌ಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ಫ್ಯಾಷನ್ ಬ್ರ್ಯಾಂಡ್‌ಗಳು, ಗೃಹೋಪಯೋಗಿ ವಸ್ತುಗಳು ಮತ್ತು ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಿವೆ. ವಾರಾಂತ್ಯದಲ್ಲಿ ಇದು ಖರೀದಿದಾರರಿಂದ ತುಂಬಿರುತ್ತದೆ. ಮಕ್ಕಳಿಗೆ ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ಮನರಂಜನೆ ವಲಯಗಳಿವೆ. ಪ್ರತಿದಿನದ ಶಾಪಿಂಗ್ ಮತ್ತು ಮನರಂಜನೆಗೆ ಇದು ಸೂಕ್ತ ಸ್ಥಳವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/shopping/mall6.jpg"
    }
  ],
  "sports": [
    {
      "en": {
        "title": "M Chinnaswamy Stadium",
        "short": "International cricket stadium.",
        "long": "M Chinnaswamy Stadium is one of India’s premier cricket venues, located in the heart of Bangalore. It regularly hosts international Test matches, One-Day Internationals and high-profile IPL games, including many Royal Challengers Bangalore fixtures. The ground seats over 30,000 spectators and features modern floodlights, player facilities and hospitality suites. It has witnessed numerous memorable matches and individual performances over the years. The stadium also stages domestic tournaments, concerts and occasional civic events."
      },
      "ka": {
        "title": "ಎಂ ಚಿನ್ನಸ್ವಾಮಿ ಸ್ಟೇಡಿಯಂ",
        "short": "ಆಂತರರಾಷ್ಟ್ರೀಯ ಕ್ರಿಕೆಟ್ ಮೈದಾನ.",
        "long": "ಎಂ ಚಿನ್ನಸ್ವಾಮಿ ಸ್ಟೇಡಿಯಂ ಬೆಂಗಳೂರು ಹೃದಯಭಾಗದಲ್ಲಿರುವ ಭಾರತದ ಪ್ರಮುಖ ಕ್ರಿಕೆಟ್ ಮೈದಾನಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇಲ್ಲಿ ನಿಯಮಿತವಾಗಿ ಅಂತರರಾಷ್ಟ್ರೀಯ ಟೆಸ್ಟ್ ಪಂದ್ಯಗಳು, ಏಕದಿನ ಮತ್ತು ಐಪಿಎಲ್ ಪಂದ್ಯಗಳು ನಡೆಯುತ್ತವೆ ಮತ್ತು ರಾಯಲ್ ಚಾಲೆಂಜರ್ಸ್ ಬೆಂಗಳೂರು ತಂಡದ ಗೃಹ ಪಂದ್ಯಗಳಿಗಾಗಿ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಮೈದಾನವು 30,000ಕ್ಕೂ ಹೆಚ್ಚು ಪ್ರೇಕ್ಷಕರಿಗೆ ಆಸನ ಮತ್ತು ಆಧುನಿಕ ಫ್ಲಡ್‌ಲೈಟ್ಸ್, ಆಟಗಾರರ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಅತಿಥಿ ಸ್ಥಳಗಳನ್ನು ಹೊಂದಿದೆ. ಇತ್ತೀಚಿನ ವರ್ಷಗಳಲ್ಲಿ ಅನೇಕ ನೆನಪಿನೀಯ ಪಂದ್ಯಗಳು ಇಲ್ಲಿ ನಡೆದಿವೆ. ದೇಶೀಯ ಟೂರ್ನಿಗಳು, ಸಂಗೀತ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕೆಲವು ಸಾರ್ವಜನಿಕ ಆಚರಣೆಗಳಿಗೂ ಇದು ವೇದಿಕೆ ಆಗಿದೆ."
      },
      "img": "assets/images/landmarks/sports/sp1.jpg"
    },
    {
      "en": {
        "title": "Kanteerava Stadium",
        "short": "Athletics and multi-sport venue.",
        "long": "Kanteerava Stadium is a major multi-sport complex that supports athletics, football and other field sports in Bangalore. It has hosted state and national level competitions as well as school and college tournaments. The venue includes practice grounds, athlete-training facilities and basic gym infrastructure. It also doubles as a site for cultural programs and public functions on occasion. Local clubs and community events frequently use the stadium for matches and training."
      },
      "ka": {
        "title": "ಕಾಂತೀರವ ಸ್ಟೇಡಿಯಂ",
        "short": "ಬಹು-ಕ್ರೀಡೆ ಮೈದಾನ.",
        "long": "ಕಾಂತೀರವ ಸ್ಟೇಡಿಯಂ ಬೆಂಗಳೂರಿನ ಅತಿ ದೊಡ್ಡ ಬಹು-ಕ್ರೀಡೆ ಕ್ಯಾಂಪಸ್ ಆಗಿದ್ದು ಅഥ್ಲೆಟಿಕ್ಸ್, ಫುಟ್ಬಾಲ್ ಮತ್ತು ಇತರ ಮೈದಾನ ಕ್ರೀಡೆಗಳಿಗೆ ಸಹಾಯಕವಾಗಿದೆ. ಇದು ರಾಜ್ಯ ಹಾಗೂ ರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದ ಸ್ಪರ್ಧೆಗಳಿಗೆ ಮತ್ತು ಶಾಲಾ/ಕಾಲೇಜು ಟೂರ್ನಾಮೆಂಟ್‌ಗಳಿಗೆ ಆತಿಥ್ಯ ವಹಿಸಿದೆ. ಮೈದಾನದಲ್ಲಿ ಅಭ್ಯಾಸ ಸ್ಥಳಗಳು, ಆಟಗಾರರ ತರಬೇತಿ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಮೂಲ ಜಿಮ್ ವ್ಯವಸ್ಥೆಗಳಿವೆ. ಕೆಲವೊಮ್ಮೆ ಇದು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಭೆಗಳಿಗೂ ವೇದಿಕೆ ಆಗುತ್ತದೆ. ಸ್ಥಳೀಯ კლუბ್‌ಗಳು ಮತ್ತು ಸಮುದಾಯ ಇವೆಂಟ್‌ಗಳು ನಿಯಮಿತವಾಗಿ ಇದನ್ನು ಬಳಸುತ್ತವೆ."
      },
      "img": "assets/images/landmarks/sports/sp2.jpg"
    },
    {
      "en": {
        "title": "Padukone-Dravid Centre",
        "short": "Badminton training centre.",
        "long": "Padukone-Dravid Centre for Sports Excellence is a high-performance training academy established to nurture sporting talent. It provides specialized coaching, sports science support, physiotherapy and rehab facilities across disciplines such as badminton, cricket and swimming. The centre runs residential and non-residential programs, talent identification camps and youth outreach initiatives. With experienced coaches and modern infrastructure, it aims to prepare athletes for national and international competition. It has become a key pillar of Bangalore’s sporting ecosystem."
      },
      "ka": {
        "title": "ಪಡುಕೋಣೆ-ದ್ರಾವಿಡ್ ಕೇಂದ್ರ",
        "short": "ಬ್ಯಾಡ್ಮಿಂಟನ್ ತರಬೇತಿ ಕೇಂದ್ರ.",
        "long": "ಪಡುಕೋಣೆ-ದ್ರಾವಿಡ್ ಕ್ರೀಡಾ ಕೇಂದ್ರವು ಪ್ರತಿಭಾವಂತ ಆಟಗಾರರನ್ನು ಬೆಳೆಸಲು ಸ್ಥಾಪಿತವಾದ ಉನ್ನತ ಮಟ್ಟದ ತರಬೇತಿ ಅಕಾಡೆಮಿಯಾಗಿದೆ. ಬ್ಯಾಡ್ಮಿಂಟನ್, ಕ್ರಿಕೆಟ್ ಮತ್ತು ಈಜು ಮುಂತಾದ ವಿಭಾಗಗಳಲ್ಲಿ ವಿಶೇಷ ತರಬೇತಿ, ಕ್ರೀಡಾ ವಿಜ್ಞಾನ ಬೆಂಬಲ, ಫಿಸಿಯೋಥೆರಪಿ ಮತ್ತು ಪುನಶ್ಚೇತನ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕೇಂದ್ರವು ನೌಕಾಪ್ರವೇಶ ಮತ್ತು ಅನ್-ನೌಕಾ ಕಾರ್ಯಕ್ರಮಗಳು, ಪ್ರತಿಭಾ ಗುರುತಿಸುವ ಶಿಬಿರಗಳು ಮತ್ತು ಯುವಕರಿಗೆ yönelik ಅಭಿಯಾನಗಳನ್ನು ನಡೆಸುತ್ತದೆ. ಅನುಭವಿಗಳ ತರಬೇತುದಾರರು ಮತ್ತು ಆಧುನಿಕ ಮೂಲಸೌಕರ್ಯದಿಂದ ಇದು ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಸ್ಪರ್ಧಿಗಳಿಗೆ ಆಟಗಾರರನ್ನು ಸಿದ್ಧಪಡಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ. ಇದು ಬೆಂಗಳೂರಿನ ಕ್ರೀಡಾ ಪರಿಕಲ್ಪನೆಗೆ ಒಂದು ಪ್ರಮುಖ ಅಂಶವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/sports/sp3.jpg"
    },
    {
      "en": {
        "title": "Bangalore Football Club",
        "short": "Local football club and academy.",
        "long": "Bangalore Football Club runs youth development programs and competes in regional and local leagues across Karnataka. The club focuses on grassroots coaching, structured age-group teams and regular match fixtures to develop players. It organizes coaching camps, scouting initiatives and school partnerships to identify and train young talent. Community outreach and regular competitions give local players exposure and match experience. The club plays an important role in promoting football culture and pathways for progression in the city."
      },
      "ka": {
        "title": "ಬೆಂಗಳೂರು ಫುಟ್ಬಾಲ್ ಕ್ಲಬ್",
        "short": "ಸ್ಥಳೀಯ ಫುಟ್ಬಾಲ್ ಕ್ಲಬ್.",
        "long": "ಬೆಂಗಳೂರು ಫುಟ್ಬಾಲ್ ಕ್ಲಬ್ ಯುವ ಅಭಿವೃದ್ದಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸುತ್ತದೆ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಹಾಗೂ ಸ್ಥಳೀಯ ಲೀಗ್‌ಗಳಲ್ಲಿ ಸ್ಪರ್ಧಿಸುತ್ತದೆ. ಕ್ಲಬ್ ಜಮೀನಿನ ಮಟ್ಟದ ತರಬೇತಿ, ವಯೋಮಿತಿ ತಂಡಗಳು ಮತ್ತು ನಿಯಮಿತ ಪಂದ್ಯಗಳ ಮೂಲಕ ಆಟಗಾರರನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಗಮನಹರಿಸುತ್ತದೆ. ತರಬೇತಿ ಶಿಬಿರಗಳು, ಪ್ರತಿಭಾ ಹುಡುಕಾಟ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಶಾಲಾ ಸಹಕಾರಗಳ ಮೂಲಕ ಯುವ ಪ್ರತಿಭೆಯನ್ನು ಗುರುತಿಸಿ ತರಬೇತು ಮಾಡುತ್ತದೆ. ಸಮುದಾಯ ಸಂಪರ್ಕ ಮತ್ತು ನಿಯಮಿತ ಪಂದ್ಯಗಳ ಮೂಲಕ ಸ್ಥಳೀಯ ಆಟಗಾರರಿಗೆ ಅನುಭವ ದೊರಕುತ್ತದೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಫುಟ್ಬಾಲಿನ ಸಂಸ್ಕೃತಿಯನ್ನು ಉತ್ತೇಜಿಸಲು ಈ ಕ್ಲಬ್ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/sports/sp4.jpg"
    },
    {
      "en": {
        "title": "Bangalore Golf Club",
        "short": "Historic golf course.",
        "long": "Bangalore Golf Club is a historic and prestigious golf course offering well-maintained fairways and greens. It provides membership play, practice ranges and coaching for amateur and experienced golfers. The club hosts amateur tournaments and social golf events that attract members and visiting players. Surrounded by mature trees and landscaped lawns, it offers a calm and scenic setting for the sport. The club has been part of Bangalore’s leisure and sporting identity for decades."
      },
      "ka": {
        "title": "ಬೆಂಗಳೂರು  ಗಾಲ್ಫ್ ಕ್ಲಬ್",
        "short": "ಐತಿಹಾಸಿಕ ಗಾಲ್ಫ್ ಕೋರ್ಸ್.",
        "long": "ಬೆಂಗಳೂರು ಗಾಲ್ಫ್ ಕ್ಲಬ್ ಐತಿಹಾಸಿಕ ಮತ್ತು ಗಣನೀಯ ಗಾಲ್ಫ್ ಕೋರ್ಸ್ ಆಗಿದ್ದು ಉತ್ತಮವಾಗಿ ನಿರ್ವಹಿಸಿದ ಫೇರ್ವೇ ಮತ್ತು ಗ್ರೀನ್‌ಗಳನ್ನು ಹೊಂದಿದೆ. ಇದು ಸದಸ್ಯತ್ವ ಆಧಾರಿತ ಆಟ, ಅಭ್ಯಾಸ ರೇಂಜ್ ಮತ್ತು ಪ್ರಾಥಮಿಕದ ಆರಂಬದಿನಿಂದ ಅನುಭವಿ ಗಾಲ್ಫರ್‌ಗಳಿಗಾಗಿ ತರಬೇತಿಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕ್ಲಬ್ ಅಮೇಟಿಯರ್ ಟೂರ್ನಿಗಳು ಮತ್ತು ಸಾಮಾಜಿಕ ಗಾಲ್ಫ್ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಿ ಸದಸ್ಯರು ಮತ್ತು ಭೇಟಿ ಮಾಡುವವರನ್ನು ಆಹ್ವಾನಿಸುತ್ತದೆ. ಹಿರಿಯ ಮರಗಳು ಮತ್ತು ಸೌಂದರ್ಯಯುತ ಲಾನ್‌ಗಳಿಂದ ನಿಕಟ ಪರಿಸರವು ಕ್ರೀಡೆಗೆ ಶಾಂತ ವಾತಾವರಣ ನೀಡುತ್ತದೆ. ದೀರ್ಘಕಾಲದಿಂದ ಇದು ಬೆಂಗಳೂರಿನ ಮನರಂಜನೆ ಮತ್ತು ಕ್ರೀಡಾ ಜೀವನದ ಭಾಗವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/sports/sp5.jpg"
    },
    {
      "en": {
        "title": "Decathlon",
        "short": "Sports goods and demo area.",
        "long": "Decathlon is a large sports retailer that combines shopping with hands-on sports experiences. The store stocks equipment across dozens of sports and typically provides demo zones where customers can try gear before buying. Workshops, beginner coaching sessions and community events are often held to encourage active lifestyles. Families and hobbyists visit to test products, learn new skills and discover sports. Decathlon plays a role in making sports accessible to a wide audience."
      },
      "ka": {
        "title": "ಡೆಕಾಥ್ಲಾನ್",
        "short": "ಕ್ರೀಡಾ ಉತ್ಪನ್ನಗಳು.",
        "long": "ಡೆಕಾಥ್ಲಾನ್ ಒಂದು ದೊಡ್ಡ ಕ್ರೀಡಾ ಚಿಲ್ಲರೆ ಅಂಗಡಿ ಆಗಿದ್ದು ಖರೀದಿ ಜೊತೆಗೆ ಕ್ರೀಡಾ ಅನುಭವಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಅಂಗಡಿಯಲ್ಲಿ ಹಲವಾರು ಕ್ರೀಡೆಗಳಿಗೆ ಉಪಕರಣಗಳಿರುವ අතර ಗ್ರಾಹಕರು ಖರೀದಿಗೆ ಮೊದಲು ಉಪಕರಣಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ಡೆಮೊ ಜೋನ್‌ಗಳು ದೊರೆಯುತ್ತವೆ. ಕಾರ್ಯಾಗಾರಗಳು, ಪ್ರಾಥಮಿಕ ತರಬೇತಿ ಸೆಷನ್‌ಗಳು ಮತ್ತು ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳು ಸಕ್ರಿಯ ಜೀವನಶೈಲಿಯನ್ನು ಉತ್ತೇಜಿಸಲು ನಿಯಮಿತವಾಗಿಯೇ ನಡೆಯುತ್ತವೆ. ಕುಟುಂಬಗಳು ಮತ್ತು ಹವ್ಯಾಸಿಗಳು here ಉತ್ಪನ್ನಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ ಹೊಸ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯುತ್ತಾರೆ. ಡೆಕಾಥ್ಲಾನ್ ಕ್ರೀಡೆಗಳನ್ನು ಜನಸಾಮಾನ್ಯರಿಗೆ ತಲುಪಿಸುವಲ್ಲಿ ಪಾತ್ರ ವಹಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/sports/sp6.jpg"
    }
  ],
  "entertainment": [
    {
      "en": {
        "title": "Wonderla",
        "short": "Amusement park with rides.",
        "long": "Wonderla is one of the most popular amusement parks near Bangalore, offering a variety of thrill rides and water attractions. It has dedicated sections for children and families, ensuring a safe and enjoyable experience. Seasonal events and live performances are organized throughout the year. The park also has restaurants, souvenir shops, and picnic areas. Visitors can spend an entire day exploring rides, enjoying shows, and relaxing in recreational zones."
      },
      "ka": {
        "title": "ವಂಡರ್‌ಲಾ",
        "short": "ಮನರಂಜನಾ ಉದ್ಯಾನ.",
        "long": "ವಂಡರ್‌ಲಾ ಬೆಂಗಳೂರಿನ ಹತ್ತಿರದ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಮನರಂಜನಾ ಉದ್ಯಾನಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ, ಇಲ್ಲಿ ವಿವಿಧ ರೋಮಾಂಚಕ ರೈಡ್‌ಗಳು ಮತ್ತು ಜಲ ಆಕರ್ಷಣೆಗಳಿವೆ. ಮಕ್ಕಳ ಮತ್ತು ಕುಟುಂಬದವರಿಗಾಗಿ ವಿಶೇಷ ವಿಭಾಗಗಳಿವೆ, ಇದು ಸುರಕ್ಷಿತ ಮತ್ತು ಆನಂದಕರ ಅನುಭವವನ್ನು ಒದಗಿಸುತ್ತದೆ. ವರ್ಷಾವರೆಗೂ ಹಬ್ಬದ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ನೇರ ಪ್ರದರ್ಶನಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಉದ್ಯಾನದಲ್ಲಿ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು, ಸ್ಮಾರಕ ಅಂಗಡಿಗಳು ಮತ್ತು ಪಿಕ್ನಿಕ್ ಪ್ರದೇಶಗಳಿವೆ. ವೀಕ್ಷಕರು ದಿನವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ರೈಡ್‌ಗಳನ್ನು ಅನುಭವಿಸುವುದು, ಪ್ರದರ್ಶನಗಳನ್ನು ಆನಂದಿಸುವುದು ಮತ್ತು ವಿಶ್ರಾಂತ ಸ್ಥಳಗಳಲ್ಲಿ ವಿಶ್ರಾಂತಿಯಾಗಿರುವುದು ಕಳೆಯಬಹುದು."
      },
      "img": "assets/images/landmarks/entertainment/ent5.jpg"
    },
    {
      "en": {
        "title": "PVR Cinemas",
        "short": "Modern multiplex chain.",
        "long": "PVR Cinemas provides a premium movie-watching experience with multiple screens and comfortable seating. It showcases the latest films with high-quality sound and projection systems. Concessions and food courts are available within the multiplex. Special screenings and film festivals are hosted periodically. PVR attracts families, students, and cinephiles from across Bangalore for entertainment and leisure."
      },
      "ka": {
        "title": "ಪಿವಿಆರ್ ಸಿನೆಮಾಸ್",
        "short": "ಮಲ್ಟಿಪ್ಲೆಕ್ಸ ಚೈನ್.",
        "long": "ಪಿವಿಆರ್ ಸಿನೆಮಾಸ್ ಹಲವಾರು ಪರದೆಗಳೊಂದಿಗೆ ಮತ್ತು ಆರಾಮದಾಯಕ ಆಸನಗಳೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ ಚಿತ್ರ ವೀಕ್ಷಣಾ ಅನುಭವವನ್ನು ನೀಡುತ್ತದೆ. ಇದು ನವೀಕೃತ ಚಿತ್ರಗಳನ್ನು ಉನ್ನತ ಗುಣಮಟ್ಟದ ಧ್ವನಿ ಮತ್ತು ಪ್ರೋಜೆಕ್ಷನ್ ವ್ಯವಸ್ಥೆಗಳಿಂದ ತೋರಿಸುತ್ತದೆ. ಮಲ್ಟಿಪ್ಲೆಕ್ಸ್‌ನಲ್ಲಿ ಆಹಾರ ಕೋರ್ಸ್‌ಗಳು ಮತ್ತು ತಿಂಡಿ ಅಂಗಡಿಗಳು ಲಭ್ಯವಿವೆ. ವಿಶೇಷ ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಚಲನಚಿತ್ರೋತ್ಸವಗಳು ನಿಯಮಿತವಾಗಿ ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಪಿವಿಆರ್ ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಚಿತ್ರಪ್ರಿಯರನ್ನು ಮನರಂಜನೆಗಾಗಿ ಆಕರ್ಷಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/entertainment/ent2.jpg"
    },
    {
      "en": {
        "title": "Innovative Film City",
        "short": "Theme park and attractions.",
        "long": "Innovative Film City is a unique entertainment complex located near Bangalore, combining theme park rides with film-related attractions. It features a wax museum, dinosaur park, adventure activities, and live shows. Visitors can explore multiple zones catering to children and adults. Seasonal events and festivals are organized throughout the year. The center offers opportunities for education, photography, and interactive experiences."
      },
      "ka": {
        "title": "ಇನ್ನೋವೇಟಿವ್ ಫಿಲ್ಮ್ ಸಿಟಿ",
        "short": "ಥೀಮ್ ಉದ್ಯಾನ.",
        "long": "ಇನ್ನೋವೇಟಿವ್ ಫಿಲ್ಮ್ ಸಿಟಿ ಬೆಂಗಳೂರಿನ ಹತ್ತಿರದ ವಿಶಿಷ್ಟ ಮನರಂಜನಾ ಕೇಂದ್ರವಾಗಿದೆ, ಇದು ಥೀಮ್ ಪಾರ್ಕ್ ರೈಡ್‌ಗಳು ಮತ್ತು ಚಿತ್ರ ಸಂಬಂಧಿತ ಆಕರ್ಷಣೆಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ. ಇಲ್ಲಿ ಮೇಣದ ಸಂಗೃಹಾಲಯ, ಡೈನೋಸಾರ್ ಪಾರ್ಕ್, ಸಾಹಸ ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ನೇರ ಪ್ರದರ್ಶನಗಳಿವೆ. ವೀಕ್ಷಕರು ಮಕ್ಕಳ ಮತ್ತು ವಯಸ್ಕರಿಗಾಗಿ ವಿಭಿನ್ನ ವಲಯಗಳನ್ನು ಅನ್ವೇಷಿಸಬಹುದು. ವರ್ಷಾವರೆಗೂ ಹಬ್ಬ ಮತ್ತು ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ಈ ಕೇಂದ್ರವು ಶಿಕ್ಷಣ, ಫೋಟೋಗ್ರಫಿ ಮತ್ತು ಸಂವಹನಾತ್ಮಕ ಅನುಭವಗಳ ಅವಕಾಶವನ್ನು ಒದಗಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/entertainment/ent1.jpg"
    },
    {
      "en": {
        "title": "Lalbagh Botanical Garden",
        "short": "Historic botanical gardens.",
        "long": "Lalbagh Botanical Garden is a famous historic garden in Bangalore, known for its rare plants and glasshouse. It hosts flower shows, educational tours, and guided walks for nature enthusiasts. The sprawling grounds include lakes, fountains, and centuries-old trees. Botanical research and conservation projects are conducted here. Visitors enjoy picnics, photography, and learning about plant diversity throughout the year."
      },
      "ka": {
        "title": "ಲಾಲ್‌ಬಾಗ್ ಉದ್ಯಾನ",
        "short": "ಐತಿಹಾಸಿಕ ಸಸ್ಯೋದ್ಯಾನ.",
        "long": "ಲಾಲ್‌ಬಾಗ್ ಉದ್ಯಾನ ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಐತಿಹಾಸಿಕ ಉದ್ಯಾನವಾಗಿದೆ, ಇದು ಅಪರೂಪದ ಸಸ್ಯಗಳು ಮತ್ತು ಗ್ಲಾಸ್‌ಹೌಸ್‌ನಿಂದ ಖ್ಯಾತಿಯಾಗಿದೆ. ಹೂವು ಪ್ರದರ್ಶನಗಳು, ಶೈಕ್ಷಣಿಕ ಪ್ರವಾಸಗಳು ಮತ್ತು ನೇರ ನಡಿಗೆಗಳೊಂದಿಗೆ ಪ್ರಕೃತಿ ಪ್ರಿಯರಿಗೆ ಅನುಕೂಲವಾಗಿದೆ. ವ್ಯಾಪಕ ಭೂಮಿಯಲ್ಲಿ ಸರೋವರಗಳು, ಜಲಪಾತಗಳು ಮತ್ತು ಶತಮಾನಗಳ ಹಳೆಯ ಮರಗಳಿವೆ. ಇಲ್ಲಿ ಸಸ್ಯೋದ್ಯಾನ ಸಂಶೋಧನೆ ಮತ್ತು ಸಂರಕ್ಷಣಾ ಯೋಜನೆಗಳು ನಡೆಯುತ್ತವೆ. ವೀಕ್ಷಕರು ವರ್ಷಾವರೆಗೂ ಪಿಕ್ನಿಕ್, ಫೋಟೋಗ್ರಫಿ ಮತ್ತು ಸಸ್ಯ ವೈವಿಧ್ಯವನ್ನು ತಿಳಿಯಲು ಬರುವರು."
      },
      "img": "assets/images/landmarks/entertainment/ent7.jpg"
    },
    {
      "en": {
        "title": "Visvesvaraya Museum",
        "short": "Science and technology exhibits.",
        "long": "Visvesvaraya Museum showcases a variety of engineering and technology exhibits, including models, instruments, and interactive displays. It is named after Sir M. Visvesvaraya, an eminent engineer and statesman. The museum offers educational programs and workshops for students and enthusiasts. Visitors can learn about historical inventions and scientific principles. The museum is a valuable resource for knowledge, research, and inspiration."
      },
      "ka": {
        "title": "ವಿಶ್ವೇಶ್ವರಯ್ಯ ಮ್ಯೂಸಿಯಂ",
        "short": "ವಿಜ್ಞಾನ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪ್ರದರ್ಶನಗಳು.",
        "long": "ವಿಶ್ವೇಶ್ವರಯ್ಯ ಮ್ಯೂಸಿಯಂ ವಿವಿಧ ಇಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪ್ರದರ್ಶನಗಳನ್ನು ತೋರಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ಮಾದರಿಗಳು, ಉಪಕರಣಗಳು ಮತ್ತು ಸಂವಹನಾತ್ಮಕ ಪ್ರದರ್ಶನಗಳಿವೆ. ಇದು ಪ್ರಖ್ಯಾತ ಎಂಜಿನಿಯರ್ ಮತ್ತು ರಾಜಕಾರಣಿ ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯನ ಹೆಸರಿನಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾಗಿದೆ. ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಮನರಂಜನೆ ಆಸಕ್ತರು ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳಲ್ಲಿ ಭಾಗವಹಿಸಬಹುದು. ವೀಕ್ಷಕರು ಐತಿಹಾಸಿಕ ಆವಿಷ್ಕಾರಗಳು ಮತ್ತು ವೈಜ್ಞಾನಿಕ ತತ್ತ್ವಗಳನ್ನು ತಿಳಿಯಬಹುದು. ಮ್ಯೂಸಿಯಂ ಜ್ಞಾನ, ಸಂಶೋಧನೆ ಮತ್ತು ಪ್ರೇರಣೆಗೆ ಅಮೂಲ್ಯ ಸಂಪನ್ಮೂಲವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/entertainment/ent8.jpg"
    },
    {
      "en": {
        "title": "Snow City",
        "short": "Indoor snow-themed attraction.",
        "long": "Snow City is an indoor park offering snow-based entertainment in Bangalore. Visitors can experience artificial snowfall, snow slides, ice skating, and snowball fights. The park is designed for families and children, providing safe play areas. Seasonal events and winter-themed shows are conducted. Snow City creates a unique cold-weather experience in a tropical city, attracting locals and tourists alike."
      },
      "ka": {
        "title": "ಸ್ನೋ  ಸಿಟಿ",
        "short": "ಒಳಾಂಗಣ ಹಿಮ ಉದ್ಯಾನ.",
        "long": "ಸ್ನೋ ಸಿಟಿ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಒಳಾಂಗಣ ಹಿಮ ಆಧಾರಿತ ಮನರಂಜನೆ ಒದಗಿಸುತ್ತದೆ. ವೀಕ್ಷಕರು ಕೃತಕ ಹಿಮ, ಹಿಮದ ಸ್ಲೈಡ್‌ಗಳು, ಐಸ್ ಸ್ಕೇಟಿಂಗ್ ಮತ್ತು ಹಿಮದ ಗುಂಡಿ ಯುದ್ಧವನ್ನು ಅನುಭವಿಸಬಹುದು. ಉದ್ಯಾನವು ಕುಟುಂಬ ಮತ್ತು ಮಕ್ಕಳಿಗಾಗಿ ಸುರಕ್ಷಿತ ಆಟದ ಸ್ಥಳಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಹಬ್ಬದ ಸಮಯದಲ್ಲಿ ಮತ್ತು ಚಳಿಗಾಲದ ಥೀಮ್ ಪ್ರದರ್ಶನಗಳು ನಡೆಯುತ್ತವೆ. ಟ್ರಾಪಿಕಲ್ ನಗರದಲ್ಲಿ ಹಿಮದ ವಿಶಿಷ್ಟ ಅನುಭವವನ್ನು ನೀಡುವ Snow City ಸ್ಥಳೀಯರು ಮತ್ತು ಪ್ರವಾಸಿಗರನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/entertainment/ent6.jpg"
    }
  ],
  "banks": [
    {
      "en": {
        "title": "State Bank of India",
        "short": "National public sector bank.",
        "long": "State Bank of India (SBI) is one of the largest public sector banks in India. It provides a wide range of banking services, including savings accounts, loans, and investment solutions. SBI has an extensive branch and ATM network across Bangalore and the country. The bank is known for its reliable customer service and financial products. SBI also offers digital banking services, mobile banking apps, and online transactions for convenience. It caters to both individual and corporate customers, supporting financial growth and security."
      },
      "ka": {
        "title": "ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂದಿಯಾ",
        "short": "ರಾಷ್ಟ್ರೀಯ ಸರ್ಕಾರಿ ಬ್ಯಾಂಕ್.",
        "long": "ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ (ಎಸ್‌ಬಿಐ) ಭಾರತದ ಅತಿದೊಡ್ಡ ಸಾರ್ವಜನಿಕ ವಲಯದ ಬ್ಯಾಂಕ್‌ಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇದು ಸೇವಿಂಗ್ಸ್ ಖಾತೆ, ಸಾಲಗಳು ಮತ್ತು ಹೂಡಿಕೆ ಪರಿಹಾರಗಳನ್ನು ಒಳಗೊಂಡ ವಿವಿಧ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಬೆಂಗಳೂರು ಮತ್ತು ದೇಶಾದ್ಯಾಂತ ಎಸ್‌ಬಿಐ ಶಾಖೆ ಮತ್ತು ಎಟಿಎಂ ಜಾಲವು ವ್ಯಾಪಕವಾಗಿದೆ. ಬ್ಯಾಂಕ್ ತನ್ನ ನಂಬಿಗಸ್ತ ಗ್ರಾಹಕ ಸೇವೆ ಮತ್ತು ಆರ್ಥಿಕ ಉತ್ಪನ್ನಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಎಸ್‌ಬಿಐ ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್, ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ಆನ್‌ಲೈನ್ ಲೆನ್ದೆನೆಯನ್ನು ಸಹ ಒದಗಿಸುತ್ತದೆ. ಇದು ವೈಯಕ್ತಿಕ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಗ್ರಾಹಕರಿಗೂ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಭದ್ರತೆಗಾಗಿ ಸೇವೆ ನೀಡುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/banks/ban1.jpg"
    },
    {
      "en": {
        "title": "HDFC Bank",
        "short": "Major private bank.",
        "long": "HDFC Bank is a leading private sector bank in India providing retail and corporate banking services. It offers personal loans, credit cards, savings accounts, and wealth management solutions. HDFC Bank has multiple branches and ATMs across Bangalore, ensuring convenient access to banking. It is known for its customer-friendly services and digital banking platforms. The bank also runs financial literacy programs and community initiatives. HDFC Bank continues to expand its offerings with innovative products and technology solutions."
      },
      "ka": {
        "title": "ಎಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್",
        "short": "ಪ್ರಮುಖ ಖಾಸಗಿ ಬ್ಯಾಂಕ್.",
        "long": "ಎಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್ ಭಾರತದಲ್ಲಿ ಪ್ರಮುಖ ಖಾಸಗಿ ವಲಯದ ಬ್ಯಾಂಕ್ ಆಗಿದ್ದು, ರಿಟೇಲ್ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಪರ್ಸನಲ್ ಲೋನ್‌ಗಳು, ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗಳು, ಸೇವಿಂಗ್‌ ಖಾತೆಗಳು ಮತ್ತು ಸಂಪತ್ತು ನಿರ್ವಹಣಾ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತದೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಹಲವಾರು ಶಾಖೆಗಳು ಮತ್ತು ಎಟಿಎಂಗಳು ಲಭ್ಯವಿವೆ, ಇದು ಸುಲಭವಾದ ಬ್ಯಾಂಕಿಂಗ್ ಅನುಭವವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಬ್ಯಾಂಕ್ ತನ್ನ ಗ್ರಾಹಕ ಸ್ನೇಹಿ ಸೇವೆಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಿಗಾಗಿ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಹೂಡಿಕೆ ಮತ್ತು ಸಮುದಾಯ ಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಸಹ ನಡೆಸುತ್ತದೆ. ಎಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್ ನವೀನ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಪರಿಹಾರಗಳೊಂದಿಗೆ ತನ್ನ ಸೇವೆಗಳನ್ನು ವಿಸ್ತರಿಸುತ್ತಿದೆ."
      },
      "img": "assets/images/landmarks/banks/ban3.jpg"
    },
    {
      "en": {
        "title": "ICICI Bank",
        "short": "Private sector banking.",
        "long": "ICICI Bank offers a wide range of financial services including retail banking, corporate banking, and digital banking solutions. It provides loans, insurance, credit cards, and investment opportunities. ICICI has multiple branches and ATMs in Bangalore for easy access. The bank focuses on customer satisfaction, innovative services, and modern banking technologies. Regular financial workshops and advisory services are provided for individuals and businesses. ICICI Bank plays a key role in supporting economic development and financial inclusion."
      },
      "ka": {
        "title": "ಐಸಿಐಸಿಐ ಬ್ಯಾಂಕ್",
        "short": "ಖಾಸಗಿ ವಲಯದ ಬ್ಯಾಂಕ್.",
        "long": "ಐಸಿಐಸಿಐ ಬ್ಯಾಂಕ್ ವೈಯಕ್ತಿಕ ಬ್ಯಾಂಕಿಂಗ್, ಕಾರ್ಪೊರೇಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್ ಪರಿಹಾರಗಳನ್ನು ಒಳಗೊಂಡ ವ್ಯಾಪಕ ಹಣಕಾಸು ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಸಾಲಗಳು, ವಿಮೆ, ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗಳು ಮತ್ತು ಹೂಡಿಕೆ ಅವಕಾಶಗಳನ್ನು ನೀಡುತ್ತದೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಹಲವಾರು ಶಾಖೆಗಳು ಮತ್ತು ಎಟಿಎಂಗಳು ಸುಲಭ ಲಭ್ಯತೆಯನ್ನು ಒದಗಿಸುತ್ತವೆ. ಬ್ಯಾಂಕ್ ಗ್ರಾಹಕ ತೃಪ್ತಿಯ, ನವೀನ ಸೇವೆಗಳು ಮತ್ತು ಆಧುನಿಕ ಬ್ಯಾಂಕಿಂಗ್ ತಂತ್ರಜ್ಞಾನಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ವೈಯಕ್ತಿಕರು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ನಿಯಮಿತ ಹಣಕಾಸು ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಸಲಹೆ ಸೇವೆಗಳು ಲಭ್ಯವಿವೆ. ಐಸಿಐಸಿಐ ಬ್ಯಾಂಕ್ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಹಣಕಾಸು ಒಳಗೊಂಡಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/banks/ban4.jpg"
    },
    {
      "en": {
        "title": "Bank of America",
        "short": "International bank branch.",
        "long": "Bank of America provides corporate and international banking services to clients in Bangalore. It offers solutions for investments, trade finance, treasury management, and wealth advisory. The bank has experienced staff to guide multinational clients and businesses. Bank of America focuses on compliance, risk management, and innovative financial products. Regular training and workshops are conducted for clients. It plays a significant role in global banking operations and cross-border financial services."
      },
      "ka": {
        "title": "ಬ್ಯಾಂಕ್ ಆಫ್ ಅಮೆರಿಕ",
        "short": "ಅಂತರರಾಷ್ಟ್ರೀಯ ಬ್ಯಾಂಕ್ ಶಾಖೆ.",
        "long": "ಬ್ಯಾಂಕ್ ಆಫ್ ಅಮೆರಿಕ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಕಾರ್ಪೊರೇಟ್ ಮತ್ತು ಅಂತಾರಾಷ್ಟ್ರೀಯ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಹೂಡಿಕೆ, ವ್ಯಾಪಾರ ಹಣಕಾಸು, ಟ್ರೆಜರಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂಪತ್ತು ಸಲಹೆಗಳಿಗೆ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತದೆ. ಬಹುರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕರು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ಅನುಭವಸಂಪನ್ನ ಸಿಬ್ಬಂದಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ. ಬ್ಯಾಂಕ್ ಆಫ್ ಅಮೆರಿಕ ಪಾಲನಾ, ರಿಸ್ಕ್ ನಿರ್ವಹಣೆ ಮತ್ತು ನವೀನ ಹಣಕಾಸು ಉತ್ಪನ್ನಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಗ್ರಾಹಕರಿಗೆ ನಿಯಮಿತ ತರಬೇತಿ ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಇದು ಜಾಗತಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಕಾರ್ಯಾಚರಣೆಗಳು ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಹಣಕಾಸು ಸೇವೆಗಳಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/banks/ban5.jpg"
    },
    {
      "en": {
        "title": "Canara Bank",
        "short": "Public sector bank.",
        "long": "Canara Bank is a nationalized bank offering retail and corporate banking services. It supports government schemes, agricultural loans, and financial inclusion initiatives. The bank has branches and ATMs across Bangalore for easy customer access. Canara Bank provides savings accounts, fixed deposits, and digital banking platforms. Regular financial awareness programs are conducted for communities and businesses. It is known for its reliability, strong presence, and customer-focused services."
      },
      "ka": {
        "title": "ಕನರಾ ಬ್ಯಾಂಕ್",
        "short": "ಸಾರ್ವಜನಿಕ ವಲಯದ ಬ್ಯಾಂಕ್.",
        "long": "ಕನರಾ ಬ್ಯಾಂಕ್ ರಾಷ್ಟ್ರೀಕೃತ ಬ್ಯಾಂಕ್ ಆಗಿದ್ದು, ವೈಯಕ್ತಿಕ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಸರಕಾರದ ಯೋಜನೆಗಳು, ಕೃಷಿ ಸಾಲಗಳು ಮತ್ತು ಹಣಕಾಸು ಒಳಗೊಂಡಿಕೆ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಶಾಖೆಗಳು ಮತ್ತು ಎಟಿಎಂಗಳಿವೆ, ಇದು ಗ್ರಾಹಕರಿಗೆ ಸುಲಭ ಲಭ್ಯತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕನರಾ ಬ್ಯಾಂಕ್ ಸೇವಿಂಗ್ ಖಾತೆ, ಸ್ಥಿರ ಠೇವಣಿ ಮತ್ತು ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸಮುದಾಯಗಳು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ನಿಯಮಿತ ಹಣಕಾಸು ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ಬ್ಯಾಂಕ್ ವಿಶ್ವಾಸಾರ್ಹತೆ, ಬಲವಾದ ಹಾಜರಿ ಮತ್ತು ಗ್ರಾಹಕ ಕೇಂದ್ರಿತ ಸೇವೆಗಾಗಿ ಪ್ರಸಿದ್ಧವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/banks/ban2.jpg"
    },
    {
      "en": {
        "title": "Citibank",
        "short": "Global banking & wealth services.",
        "long": "Citibank focuses on providing global banking solutions, wealth management, and corporate services in Bangalore. It offers investment advisory, loans, credit cards, and digital platforms for seamless banking. Citibank has experienced teams to assist international clients and high-net-worth individuals. Regular seminars and financial workshops are conducted for awareness. The bank emphasizes customer satisfaction, security, and innovative financial products. It continues to play a key role in international and domestic banking operations."
      },
      "ka": {
        "title": "ಸಿಟಿಬ್ಯಾಂಕ್",
        "short": "ಜಾಗತಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು.",
        "long": "ಸಿಟಿಬ್ಯಾಂಕ್ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಜಾಗತಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಪರಿಹಾರಗಳು, ಸಂಪತ್ತು ನಿರ್ವಹಣೆ ಮತ್ತು ಕಾರ್ಪೊರೇಟ್ ಸೇವೆಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಸುಗಮ ಬ್ಯಾಂಕಿಂಗ್‌ಗಾಗಿ ಹೂಡಿಕೆ ಸಲಹೆ, ಸಾಲಗಳು, ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸಿಟಿಬ್ಯಾಂಕ್ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕರು ಮತ್ತು ಉನ್ನತ ನೆಟ್ ಮೌಲ್ಯದ ವ್ಯಕ್ತಿಗಳಿಗೆ ಸಹಾಯ ಮಾಡಲು ಅನುಭವಸಂಪನ್ನ ತಂಡಗಳನ್ನು ಹೊಂದಿದೆ. ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಹಣಕಾಸು ಕಾರ್ಯಾಗಾರಗಳು ನಿಯಮಿತವಾಗಿ ಆಯೋಜಿಸಲಾಗುತ್ತವೆ. ಬ್ಯಾಂಕ್ ಗ್ರಾಹಕ ತೃಪ್ತಿ, ಭದ್ರತೆ ಮತ್ತು ನವೀನ ಹಣಕಾಸು ಉತ್ಪನ್ನಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಇದು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮತ್ತು ದೇಶೀಯ ಬ್ಯಾಂಕಿಂಗ್ ಕಾರ್ಯಾಚರಣೆಗಳಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/banks/ban6.jpg"
    }
  ],
  "hotels": [
    {
      "en": {
        "title": "Leela Palace",
        "short": "Luxury five-star hotel.",
        "long": "Leela Palace is a luxurious five-star hotel in Bangalore, offering world-class hospitality. It features elegantly designed rooms, suites, and villas for a comfortable stay. Guests can enjoy fine dining at multiple restaurants serving international and Indian cuisines. The hotel provides spa and wellness facilities, meeting and event spaces, and personalized services. Beautiful landscaped gardens and swimming pools enhance the experience. Leela Palace is ideal for leisure, business travelers, and special occasions."
      },
      "ka": {
        "title": "ಲೀಲಾ ಪ್ಯಾಲೆಸ್",
        "short": "ಐಷಾರಾಮಿ ಐದು-ತಾರೆ ಹೋಟೆಲ್.",
        "long": "ಲೀಲಾ ಪ್ಯಾಲೆಸ್ ಬೆಂಗಳೂರು ನಗರದ ಐಷಾರಾಮಿ ಐದು-ತಾರೆ ಹೋಟೆಲ್ ಆಗಿದ್ದು, ವಿಶ್ವ ಮಟ್ಟದ ಆತಿಥ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಸೌಕರ್ಯಸಂಪನ್ನವಾದ ಕೋಠಡಿಗಳು, ಸೂಟ್‌ಗಳು ಮತ್ತು ವಿಲ್ಲಾಗಳೊಂದಿಗೆ ಆರಾಮದಾಯಕ ವಾಸಸ್ಥಳವನ್ನು ನೀಡುತ್ತದೆ. ಅತಿಥಿಗಳು ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಭಾರತೀಯ ಪಾಕಶಾಲೆಗಳಲ್ಲಿ ಉತ್ತಮ ಆಹಾರವನ್ನು ಆನಂದಿಸಬಹುದು. ಹೋಟೆಲ್ ಸ್ಪಾ ಮತ್ತು ವೆಲ್‍ನೆಸ್, ಸಭಾಂಗಣಗಳು, ಕಾರ್ಯಕ್ರಮ ಸ್ಥಳಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸುಂದರವಾದ ಉದ್ಯಾನಗಳು ಮತ್ತು ಈಜುಕೋಠಡಿಗಳು ಅನುಭವವನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ. ಲೀಲಾ ಪ್ಯಾಲೆಸ್ ವಿಶ್ರಾಂತಿ, ವ್ಯವಹಾರ ಪ್ರಯಾಣಿಕರು ಮತ್ತು ವಿಶೇಷ ಸಂದರ್ಭಗಳಿಗೆ ಅತ್ಯುತ್ತಮವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/hotels/hot2.jpg"
    },
    {
      "en": {
        "title": "Taj Hotel",
        "short": "Heritage luxury brand.",
        "long": "Taj Hotel is a renowned heritage luxury hotel in Bangalore, offering exceptional service and comfort. Elegant rooms and suites are designed with classic décor and modern amenities. Guests can enjoy curated dining experiences at signature restaurants. The hotel also features event spaces for weddings, conferences, and celebrations. Wellness facilities and concierge services ensure a memorable stay. Taj Hotel is ideal for travelers seeking heritage charm combined with contemporary luxury."
      },
      "ka": {
        "title": "ತಾಜ್ ಹೋಟೆಲ್",
        "short": "ಪರಂಪರಾ ಐಷಾರಾಮಿ ಬ್ರ್ಯಾಂಡ್.",
        "long": "ತಾಜ್ ಹೋಟೆಲ್ ಬೆಂಗಳೂರಿನ ಪ್ರಸಿದ್ಧ ಪರಂಪರೆಯ ಐಷಾರಾಮಿ ಹೋಟೆಲ್ ಆಗಿದ್ದು, ಉತ್ತಮ ಸೇವೆ ಮತ್ತು ಆರಾಮವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಶೈಲಿಪೂರ್ಣ ಶೈಲಿ ಮತ್ತು ಆಧುನಿಕ ಸೌಕರ್ಯಗಳೊಂದಿಗೆ ಕೋಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಅತಿಥಿಗಳು ವಿಶೇಷ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಲ್ಲಿ ಆಹಾರ ಅನುಭವವನ್ನು ಆನಂದಿಸಬಹುದು. ಹೋಟೆಲ್ ಮದುವೆ, ಸಭೆ ಮತ್ತು ಹಬ್ಬದ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸ್ಥಳಗಳನ್ನು ಹೊಂದಿದೆ. ವೆಲ್‍ನೆಸ್ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಕನ್ಸಿಯರ್ಜ್ ಸೇವೆಗಳು ಸ್ಮರಣೀಯ ವಾಸವನ್ನು ಖಾತ್ರಿಗೊಳಿಸುತ್ತವೆ. ತಾಜ್ ಹೋಟೆಲ್ ಪರಂಪರೆಯ ಆಕರ್ಷಣೆ ಮತ್ತು ಆಧುನಿಕ ಐಷಾರಾಮಿ ಅನುಭವವನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/hotels/hot1.jpg"
    },
    {
      "en": {
        "title": "ITC Gardenia",
        "short": "Premium business hotel.",
        "long": "ITC Gardenia is a premium business hotel in Bangalore, offering eco-conscious luxury and modern facilities. The hotel has spacious rooms, suites, and meeting spaces for corporate and leisure travelers. Multiple dining options provide international and Indian cuisine in elegant settings. Guests can enjoy spa, fitness, and recreational amenities. ITC Gardenia emphasizes sustainability, service excellence, and guest satisfaction. It is ideal for business conferences, events, and comfortable urban stays."
      },
      "ka": {
        "title": "ಐಟಿಸಿ ಗಾರ್ಡೀನಿಯಾ",
        "short": "ಪ್ರಿಮಿಯಂ ವ್ಯಾಪಾರ ಹೋಟೆಲ್.",
        "long": "ಐಟಿಸಿ ಗಾರ್ಡೀನಿಯಾ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಪರಿಸರ ಸ್ನೇಹಿ ಐಷಾರಾಮಿ ಮತ್ತು ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳನ್ನು ಒದಗಿಸುವ ಪ್ರೀಮಿಯಂ ವ್ಯಾಪಾರ ಹೋಟೆಲ್ ಆಗಿದೆ. ಹೋಟೆಲ್‌ನಲ್ಲಿ ವ್ಯಾಪಕ ಕೋಠಡಿಗಳು, ಸೂಟ್‌ಗಳು ಮತ್ತು ಸಭಾಂಗಣಗಳಿವೆ, ಇದು ಕಾರ್ಪೊರೇಟ್ ಮತ್ತು ವಿಶ್ರಾಂತಿ ಪ್ರಯಾಣಿಕರಿಗೆ ಅನುಕೂಲವಾಗಿದೆ. ಹಲವಾರು ಆಹಾರ ಆಯ್ಕೆಗಳು ಐಷಾರಾಮಿ ಪರಿಸರದಲ್ಲಿ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಭಾರತೀಯ ಪಾಕಶಾಲೆಯನ್ನು ಒದಗಿಸುತ್ತವೆ. ಅತಿಥಿಗಳು ಸ್ಪಾ, ಫಿಟ್ನೆಸ್ ಮತ್ತು ಮನರಂಜನಾ ಸೌಲಭ್ಯಗಳನ್ನು ಆನಂದಿಸಬಹುದು. ಐಟಿಸಿ ಗಾರ್ಡೀನಿಯಾ ಸ್ಥಿರತೆಯನ್ನು, ಸೇವಾ ಶ್ರೇಷ್ಠತೆಯನ್ನು ಮತ್ತು ಅತಿಥಿ ತೃಪ್ತಿಯನ್ನು ಪ್ರಾಶಸ್ತ್ಯ ನೀಡುತ್ತದೆ. ವ್ಯವಹಾರ ಸಭೆಗಳು, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಆರಾಮದಾಯಕ ನಗರ ವಾಸಕ್ಕೆ ಇದು ಪರಿಪೂರ್ಣವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/hotels/hot3.jpg"
    },
    {
      "en": {
        "title": "The Oberoi",
        "short": "Luxury hospitality chain.",
        "long": "The Oberoi is a luxury hospitality chain in Bangalore, offering refined service and tranquil settings. Rooms and suites are elegantly furnished with modern amenities. Guests can enjoy gourmet dining at signature restaurants and unwind at the spa and wellness centers. The hotel provides personalized concierge services, event management, and recreational activities. Lush gardens and serene surroundings enhance the guest experience. The Oberoi is perfect for both leisure and business travelers seeking comfort and elegance."
      },
      "ka": {
        "title": "ದಿ ಓಬೆರಾಯ್",
        "short": "ಐಷಾರಾಮಿ ಆತಿಥ್ಯ ಸರಣಿ.",
        "long": "ದಿ ಓಬೆರಾಯ್ ಬೆಂಗಳೂರಿನ ಐಷಾರಾಮಿ ಆತಿಥ್ಯ ಸರಣಿ ಆಗಿದ್ದು, ಶ್ರೇಷ್ಟ ಸೇವೆ ಮತ್ತು ಶಾಂತ ವಾತಾವರಣವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಕೋಠಡಿಗಳು ಮತ್ತು ಸೂಟ್‌ಗಳು ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ಸೊಬಗುಮಯವಾಗಿ ಅಲಂಕೃತಗೊಳಿಸಲಾಗಿದೆ. ಅತಿಥಿಗಳು ಸಿಗ್ನೇಚರ್ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಲ್ಲಿ ಉನ್ನತ ಮಟ್ಟದ ಆಹಾರವನ್ನು ಅನುಭವಿಸಬಹುದು ಮತ್ತು ಸ್ಪಾ ಮತ್ತು ವೆಲ್‍ನೆಸ್ ಕೇಂದ್ರಗಳಲ್ಲಿ ವಿಶ್ರಾಂತಿಯಾಗಬಹುದು. ಹೋಟೆಲ್ ವೈಯಕ್ತಿಕ ಕನ್ಸಿಯರ್ಜ್ ಸೇವೆ, ಕಾರ್ಯಕ್ರಮ ನಿರ್ವಹಣೆ ಮತ್ತು ಮನರಂಜನಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಹಸಿರಿನ ಉದ್ಯಾನಗಳು ಮತ್ತು ಶಾಂತ ಪರಿಸರಗಳು ಅತಿಥಿ ಅನುಭವವನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ. ಲೀಜರ್ ಮತ್ತು ವ್ಯವಹಾರ ಪ್ರಯಾಣಿಕರಿಗೆ ಸುಖ ಹಾಗೂ ಐಷಾರಾಮಿ ಅನುಭವಕ್ಕಾಗಿ ದಿ ಓಬೆರಾಯ್ ಪರಿಪೂರ್ಣವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/hotels/hot4.jpg"
    },
    {
      "en": {
        "title": "RCB Cafe",
        "short": "Cricket-themed cafe & lounge.",
        "long": "RCB Cafe is a popular cricket-themed café and lounge in Bangalore. It offers a vibrant atmosphere with cricket décor, large screens, and live match screenings. Guests can enjoy themed food, beverages, and snacks while socializing. The café hosts events, contests, and fan activities related to cricket. It is a favorite spot for sports enthusiasts and families. RCB Cafe provides casual and lively spaces for entertainment and leisure."
      },
      "ka": {
        "title": "ಆರ್ ಸಿ ಬಿ ಕಾಫೆ",
        "short": "ಕ್ರಿಕೆಟ್ ಥೀಮ್ ಕಫೆ.",
        "long": "ಆರ್ ಸಿ ಬಿ ಕಾಫೆ ಬೆಂಗಳೂರಿನ ಜನಪ್ರಿಯ ಕ್ರಿಕೆಟ್ ಥೀಮ್ ಕಫೆ ಮತ್ತು ಲೌಂಜ್ ಆಗಿದೆ. ಇದು ಕ್ರಿಕೆಟ್ ಅಲಂಕಾರ, ದೊಡ್ಡ ಪರದೆಗಳು ಮತ್ತು ನೇರ ಪಂದ್ಯ ಪ್ರದರ್ಶನಗಳೊಂದಿಗೆ ಉಲ್ಲಾಸಕರ ವಾತಾವರಣವನ್ನು ನೀಡುತ್ತದೆ. ಅತಿಥಿಗಳು ಥೀಮ್ ಆಹಾರ, ಪಾನೀಯಗಳು ಮತ್ತು ತಿಂಡಿಗಳನ್ನು ಆನಂದಿಸಬಹುದು ಮತ್ತು ಸಾಮಾಜಿಕ ಸಂವಹನ ನಡೆಸಬಹುದು. ಕಫೆ ಕ್ರಿಕೆಟ್ ಸಂಬಂಧಿತ ಕಾರ್ಯಕ್ರಮಗಳು, ಸ್ಪರ್ಧೆಗಳು ಮತ್ತು ಅಭಿಮಾನಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಆಯೋಜಿಸುತ್ತದೆ. ಕ್ರೀಡೆ ಪ್ರಿಯರು ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ಇದು ಮೆಚ್ಚಿನ ಸ್ಥಳವಾಗಿದೆ. ಆರ್ ಸಿ ಬಿ ಕಾಫೆ ಮನರಂಜನೆ ಮತ್ತು ವಿಶ್ರಾಂತಿಯುಳ್ಳ ಸುಲಭವಾದ ಸ್ಥಳಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/hotels/hot5.jpg"
    },
    {
      "en": {
        "title": "Sheraton Grand",
        "short": "International luxury hotel.",
        "long": "Sheraton Grand is an international luxury hotel in Bangalore with contemporary rooms and world-class facilities. It offers conference halls, banquet spaces, and high-end dining options. Guests can enjoy fitness centers, spa treatments, and recreational activities. The hotel emphasizes exceptional service, comfort, and attention to detail. It is suitable for both business and leisure travelers. Sheraton Grand provides a refined urban experience with global standards of hospitality."
      },
      "ka": {
        "title": "ಶೆರೇಟನ್ ಗ್ರ್ಯಾಂಡ್",
        "short": "ಅಂತಾರಾಷ್ಟ್ರೀಯ ಐಷಾರಾಮಿ ಹೋಟೆಲ್.",
        "long": "ಶೆರೇಟನ್ ಗ್ರ್ಯಾಂಡ್ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ನವೀನ ಕೊಠಡಿಗಳು ಮತ್ತು ವಿಶ್ವಮಟ್ಟದ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಐಷಾರಾಮಿ ಹೋಟೆಲ್ ಆಗಿದೆ. ಇದು ಸಭಾಂಗಣಗಳು, ಭೋಜನಾಲಯಗಳು ಮತ್ತು ಉನ್ನತ ಮಟ್ಟದ ಆಹಾರ ಆಯ್ಕೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಅತಿಥಿಗಳು ಫಿಟ್ನೆಸ್ ಕೇಂದ್ರಗಳು, ಸ್ಪಾ ಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಮನರಂಜನಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಅನುಭವಿಸಬಹುದು. ಹೋಟೆಲ್ ಅತ್ಯುತ್ತಮ ಸೇವೆ, ಆರಾಮ ಮತ್ತು ವಿವರಗಳಿಗೆ ಗಮನ ನೀಡುತ್ತದೆ. ಇದು ವ್ಯವಹಾರ ಮತ್ತು ವಿಶ್ರಾಂತಿ ಪ್ರಯಾಣಿಕರಿಗೆ ತಕ್ಕಂತೆ ಉಚಿತವಾಗಿದೆ. ಶೆರೇಟನ್ ಗ್ರ್ಯಾಂಡ್ ಪ್ರೀಮಿಯಂ ನಗರ ಅನುಭವವನ್ನು ಜಾಗತಿಕ ಆತಿಥ್ಯ ಮಾನದಂಡಗಳೊಂದಿಗೆ ಒದಗಿಸುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/hotels/hot6.jpg"
    }
  ],
  "hospitals": [
    {
      "en": {
        "title": "Manipal Hospital",
        "short": "Multi-specialty tertiary care.",
        "long": "Manipal Hospital in Bangalore is a leading multi-specialty tertiary care center. It offers advanced medical services including emergency care, surgeries, and specialized departments. The hospital is equipped with modern diagnostic tools and technology for accurate treatment. Expert doctors and trained staff provide high-quality patient care. Manipal Hospital emphasizes patient safety, comfort, and holistic healthcare solutions. It serves both local and international patients with comprehensive medical support."
      },
      "ka": {
        "title": "ಮಣಿಪಾಲ್ ಆಸ್ಪತ್ರೆ",
        "short": "ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ.",
        "long": "ಮಣಿಪಾಲ್ ಆಸ್ಪತ್ರೆ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಪ್ರಮುಖ ಬಹು-ವಿಶೇಷ ತೃತೀಯ ಕಾಳಜಿ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ತುರ್ತು ಚಿಕಿತ್ಸೆ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಶೇಷ ವಿಭಾಗಗಳನ್ನು ಒಳಗೊಂಡ ಉನ್ನತ ಮಟ್ಟದ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಆಸ್ಪತ್ರೆ ನಿಖರ ಚಿಕಿತ್ಸೆಗಾಗಿ ಆಧುನಿಕ ನಿರ್ಧಾರಾತ್ಮಕ ಸಾಧನಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿದೆ. ಪರಿಣಿತ ವೈದ್ಯರು ಮತ್ತು ತರಬೇತಿಪ್ರಾಪ್ತ ಸಿಬ್ಬಂದಿ ಉತ್ತಮ ರೋಗಿ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುತ್ತಾರೆ. ಮಣಿಪಾಲ್ ಆಸ್ಪತ್ರೆ ರೋಗಿಗಳ ಸುರಕ್ಷತೆ, ಆರಾಮ ಮತ್ತು ಸಂಪೂರ್ಣ ಆರೋಗ್ಯ ಪರಿಹಾರಗಳನ್ನು ಗಮನಿಸುತ್ತದೆ. ಸ್ಥಳೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ರೋಗಿಗಳಿಗೆ ವ್ಯಾಪಕ ವೈದ್ಯಕೀಯ ಸಹಾಯವನ್ನು ನೀಡುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/hospitals/hos2.jpg"
    },
    {
      "en": {
        "title": "Apollo Hospital",
        "short": "Leading private healthcare network.",
        "long": "Apollo Hospital in Bangalore is a premier private healthcare institution offering multi-specialty treatments. It provides advanced diagnostics, emergency services, and specialized medical care. Experienced doctors and staff ensure personalized attention and high-quality care. Apollo Hospital emphasizes modern technology, patient safety, and comfort. It also offers wellness programs and health awareness initiatives. The hospital caters to both local residents and international patients seeking reliable healthcare."
      },
      "ka": {
        "title": "ಅಪೋಲೊ ಆಸ್ಪತ್ರೆ",
        "short": "ಪ್ರಮುಖ ಖಾಸಗಿ ಆರೋಗ್ಯ ಜಾಲ.",
        "long": "ಅಪೋಲೊ ಆಸ್ಪತ್ರೆ ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ಖಾಸಗಿ ಆರೋಗ್ಯ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಬಹು-ವಿಶೇಷ ಚಿಕಿತ್ಸೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಉನ್ನತ ಮಟ್ಟದ ನಿರ್ಧಾರಾತ್ಮಕ ಸೇವೆಗಳು, ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಶೇಷ ವೈದ್ಯಕೀಯ ಆರೈಕೆಯನ್ನು ನೀಡುತ್ತದೆ. ಅನುಭವಸಂಪನ್ನ ವೈದ್ಯರು ಮತ್ತು ಸಿಬ್ಬಂದಿ ವೈಯಕ್ತಿಕ ಗಮನ ಮತ್ತು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಆರೈಕೆಯನ್ನು ಖಾತ್ರಿಗೊಳಿಸುತ್ತಾರೆ. ಅಪೋಲೊ ಆಸ್ಪತ್ರೆ ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ, ರೋಗಿ ಸುರಕ್ಷತೆ ಮತ್ತು ಆರಾಮಕ್ಕೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಇದು ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಜಾಗೃತಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಸಹ ಒದಗಿಸುತ್ತದೆ. ಸ್ಥಳೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ರೋಗಿಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಆರೈಕೆಯನ್ನು ನೀಡುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/hospitals/hos1.jpg"
    },
    {
      "en": {
        "title": "BGS Hospital",
        "short": "Comprehensive care & specialties.",
        "long": "BGS Hospital provides comprehensive healthcare services including cardiac, orthopedic, and general medicine. It is equipped with modern diagnostic and treatment facilities. Skilled doctors and staff offer personalized care and continuous monitoring. The hospital emphasizes patient safety, comfort, and holistic treatment approaches. Specialized departments cater to various medical needs. BGS Hospital serves both inpatients and outpatients with advanced healthcare solutions."
      },
      "ka": {
        "title": "ಬಿಜಿಎಸ್ ಆಸ್ಪತ್ರೆ",
        "short": "ವಿಸ್ತೃತ ಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಶೇಷ ವಿಭಾಗಗಳು.",
        "long": "ಬಿಜಿಎಸ್ ಆಸ್ಪತ್ರೆ ಹೃದಯ, ಅಸ್ಥಿ ಮತ್ತು ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳನ್ನು ಒಳಗೊಂಡ ವ್ಯಾಪಕ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಆಧುನಿಕ ನಿರ್ಧಾರಾತ್ಮಕ ಮತ್ತು ಚಿಕಿತ್ಸೆ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿದೆ. ಪರಿಣಿತ ವೈದ್ಯರು ಮತ್ತು ಸಿಬ್ಬಂದಿ ವೈಯಕ್ತಿಕ ಆರೈಕೆಯನ್ನು ಮತ್ತು ನಿರಂತರ ಪರಿಶೀಲನೆ ನೀಡುತ್ತಾರೆ. ಆಸ್ಪತ್ರೆ ರೋಗಿ ಸುರಕ್ಷತೆ, ಆರಾಮ ಮತ್ತು ಸಂಪೂರ್ಣ ಚಿಕಿತ್ಸೆ ವಿಧಾನಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ವಿಭಿನ್ನ ವೈದ್ಯಕೀಯ ಅಗತ್ಯಗಳಿಗೆ ವಿಶೇಷ ವಿಭಾಗಗಳು ಲಭ್ಯವಿವೆ. ಬಿಜಿಎಸ್ ಆಸ್ಪತ್ರೆ ಇನ್ಪೇಷೆಂಟ್ ಮತ್ತು ಔಟ್‌ಪೇಷೆಂಟ್ ಎರಡಕ್ಕೂ ಆಧುನಿಕ ಆರೋಗ್ಯ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/hospitals/hos6.jpg"
    },
    {
      "en": {
        "title": "Narayana Health",
        "short": "Cardiac & specialized services.",
        "long": "Narayana Health in Bangalore specializes in cardiac care and other specialized medical services. It provides surgeries, diagnostics, and emergency treatments with advanced technology. Experienced medical teams ensure accurate and timely care for patients. Narayana Health emphasizes patient safety, comfort, and affordability. The hospital also offers preventive health programs and wellness initiatives. It serves a wide community of patients, including international visitors."
      },
      "ka": {
        "title": "ನಾರಾಯಣ ಆಸ್ಪತ್ರೆ",
        "short": "ಹೃದಯ ಚಿಕಿತ್ಸಾ ಮತ್ತು ವಿಶೇಷ ಸೇವೆಗಳು.",
        "long": "ನಾರಾಯಣ ಆಸ್ಪತ್ರೆ ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಹೃದಯ ಚಿಕಿತ್ಸಾ ಮತ್ತು ಇತರ ವಿಶೇಷ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳಲ್ಲಿ ಪರಿಣತವಾಗಿದೆ. ಇದು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ, ನಿರ್ಧಾರಾತ್ಮಕ ಸೇವೆಗಳು ಮತ್ತು ತುರ್ತು ಚಿಕಿತ್ಸೆಗಳನ್ನು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಒದಗಿಸುತ್ತದೆ. ಅನುಭವಸಂಪನ್ನ ವೈದ್ಯಕೀಯ ತಂಡಗಳು ರೋಗಿಗಳಿಗೆ ನಿಖರ ಮತ್ತು ಸಮಯೋಚಿತ ಆರೈಕೆಯನ್ನು ಖಾತ್ರಿಗೊಳಿಸುತ್ತವೆ. ನಾರಾಯಣ ಆಸ್ಪತ್ರೆ ರೋಗಿ ಸುರಕ್ಷತೆ, ಆರಾಮ ಮತ್ತು ಸೌಲಭ್ಯಕ್ಕೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಆಸ್ಪತ್ರೆ ತಡೆಯುವ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ವೆಲ್‍ನೆಸ್ ಚಟುವಟಿಕೆಗಳನ್ನು ಸಹ ಒದಗಿಸುತ್ತದೆ. ಇದು ಸ್ಥಳೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ರೋಗಿಗಳಿಗೆ ಸೇವೆ ನೀಡುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/hospitals/hos3.jpg"
    },
    {
      "en": {
        "title": "Victoria Hospital",
        "short": "Historic government hospital.",
        "long": "Victoria Hospital is a historic government hospital in Bangalore providing a wide range of public health services. It offers outpatient and inpatient care, emergency treatments, and specialty departments. The hospital has experienced medical staff and modern diagnostic tools. Victoria Hospital emphasizes public health, patient safety, and affordable care. Training programs for medical students and healthcare professionals are also conducted. It serves a diverse population and contributes to community health initiatives."
      },
      "ka": {
        "title": "ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆಗೆ",
        "short": "ಐತಿಹಾಸಿಕ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ.",
        "long": "ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆ ಬೆಂಗಳೂರು ನಗರದ ಐತಿಹಾಸಿಕ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯಾಗಿದೆ ಮತ್ತು ವ್ಯಾಪಕ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಔಟ್‌ಪೇಷೆಂಟ್ ಮತ್ತು ಇನ್ಪೇಷೆಂಟ್ ಆರೈಕೆ, ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮತ್ತು ವಿಶೇಷ ವಿಭಾಗಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಅನುಭವಸಂಪನ್ನ ವೈದ್ಯಕೀಯ ಸಿಬ್ಬಂದಿ ಮತ್ತು ಆಧುನಿಕ ನಿರ್ಧಾರಾತ್ಮಕ ಸಾಧನಗಳಿವೆ. ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ, ರೋಗಿ ಸುರಕ್ಷತೆ ಮತ್ತು ಆರ್ಥಿಕವಾಗಿ ಲಭ್ಯವಿರುವ ಆರೈಕೆಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ವೈದ್ಯಕೀಯ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಆರೋಗ್ಯ ವೃತ್ತಿಪರರಿಗಾಗಿ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಲಾಗುತ್ತದೆ. ಇದು ವೈವಿಧ್ಯಮಯ ಜನಸಂಖ್ಯೆಗೆ ಸೇವೆ ನೀಡುತ್ತದೆ ಮತ್ತು ಸಮುದಾಯ ಆರೋಗ್ಯ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳಿಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ."
      },
      "img": "assets/images/landmarks/hospitals/hos4.jpg"
    },
    {
      "en": {
        "title": "Bangalore Hospital",
        "short": "City multi-specialty centre.",
        "long": "Bangalore Hospital offers multi-specialty healthcare services including emergency, inpatient, and outpatient care. It has advanced diagnostic and treatment facilities for various medical conditions. Expert doctors and trained staff provide high-quality, patient-focused care. The hospital emphasizes safety, comfort, and personalized treatment plans. It serves both local and international patients seeking reliable healthcare. Bangalore Hospital is known for its modern infrastructure and professional medical services."
      },
      "ka": {
        "title": "ಬೆಂಗಳೂರು ಆಸ್ಪತ್ರೆ",
        "short": "ನಗರದ ಬಹು-ವಿಶೇಷ ಕೇಂದ್ರ.",
        "long": "ಬೆಂಗಳೂರು ಆಸ್ಪತ್ರೆ ಬಹು-ವಿಶೇಷ ಆರೋಗ್ಯ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ತುರ್ತು, ಇನ್ಪೇಷೆಂಟ್ ಮತ್ತು ಔಟ್‌ಪೇಷೆಂಟ್ ಆರೈಕೆ ಸೇರಿದೆ. ಇದು ವಿವಿಧ ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿಗಳಿಗಾಗಿ ಆಧುನಿಕ ನಿರ್ಧಾರಾತ್ಮಕ ಮತ್ತು ಚಿಕಿತ್ಸೆ ಸೌಲಭ್ಯಗಳನ್ನು ಹೊಂದಿದೆ. ಪರಿಣಿತ ವೈದ್ಯರು ಮತ್ತು ತರಬೇತಿಪ್ರಾಪ್ತ ಸಿಬ್ಬಂದಿ ಉನ್ನತ ಗುಣಮಟ್ಟದ, ರೋಗಿ-ಕೇಂದ್ರಿತ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುತ್ತಾರೆ. ಆಸ್ಪತ್ರೆ ಸುರಕ್ಷತೆ, ಆರಾಮ ಮತ್ತು ವೈಯಕ್ತಿಕ ಚಿಕಿತ್ಸಾ ಯೋಜನೆಗಳಿಗೆ ಒತ್ತು ನೀಡುತ್ತದೆ. ಇದು ಸ್ಥಳೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ರೋಗಿಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಬೆಂಗಳೂರು ಆಸ್ಪತ್ರೆ ಆಧುನಿಕ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ."
      },
      "img": "assets/images/landmarks/hospitals/hos5.jpg"
    }
  ]
};

const ABOUT_CONTENT = {
  title: {
    en: "About Bengaluru",
    ka: "ಬೆಂಗಳೂರಿನ ಬಗ್ಗೆ"
  },
  images: [
    {
      src: "assets/images/about/ab.jpg",
      alt: { en: "Historic Bangalore view", ka: "ಐತಿಹಾಸಿಕ ಬೆಂಗಳೂರಿನ ನೋಟ" }
    },
    {
      src: "assets/images/about/ab2.jpg",
      alt: { en: "Bengaluru Heritage and Culture", ka: "ಬೆಂಗಳೂರು ಪರಂಪರೆ ಮತ್ತು ಸಂಸ್ಕೃತಿ" }
    }
  ],
  text: {
    en: "Bangalore, officially known as Bengaluru, has a history that spans several centuries. The earliest references to the region date back to the Ganga Dynasty (350–1000 CE), when small settlements and temples existed around present-day Bangalore. In the 11th century, the Chola Dynasty ruled the area, bringing in their administrative and cultural influence. The name “Bengaluru” is believed to have originated from “Benda Kaalu Ooru,” meaning “Town of Boiled Beans,” linked to a legend of King Veera Ballala II being served boiled beans by a humble woman.In the 16th century, Kempe Gowda I, a chieftain under the Vijayanagara Empire, founded the modern city of Bangalore in 1537 CE by building a mud fort with four watchtowers marking the city’s limits. This period saw the establishment of markets, temples, and lakes, some of which still exist today. Later, Bangalore came under the rule of the Marathas, the Mughals, and finally Hyder Ali and Tipu Sultan in the late 18th century, who developed gardens, trade routes, and military garrisons.After Tipu Sultan’s death in 1799, the British took control and developed Bangalore as a cantonment town, introducing English education, railways, and public infrastructure. This led to the coexistence of the Cantonment area and the Pete (native town), each with distinct cultures. In 1947, Bangalore became part of independent India and later the capital of Karnataka in 1956. The late 20th century brought the IT revolution, transforming Bangalore into the Silicon Valley of India. Today, it is a cosmopolitan hub known for its technology, education, gardens, and vibrant lifestyle.Bangalore’s history is a vibrant tapestry of different rulers and cultures. After the British established the cantonment, the city grew rapidly in the 19th century. The British brought administrative buildings, schools, and hospitals, making Bangalore an important center for the British Indian Army. The cantonment area developed with tree-lined avenues, clubs, and churches, contrasting with the old native town, known as the Pete.In the early 20th century, Bangalore became a hub for freedom fighters and reformers. The city played a key role in the Indian independence movement with notable figures like Kengal Hanumanthaiah and H.C. Dasappa. Post-independence, Bangalore’s strategic location made it the capital of the newly formed Mysore State (later renamed Karnataka).The establishment of public sector industries like Hindustan Aeronautics Limited (HAL) and Bharat Electronics Limited (BEL) in the mid-20th century laid the foundation for Bangalore’s industrial growth. The city also became a major center for education with institutions like IISc, Indian Institute of Management Bangalore (IIMB), and many universities.From the 1980s onwards, Bangalore witnessed a tech boom with the growth of software companies, IT parks, and multinational corporations. Today, it’s known as the “Silicon Valley of India,” attracting professionals and entrepreneurs worldwide. Despite rapid urbanization, Bangalore retains its green spaces, lakes, and a multicultural spirit that reflects its rich heritage.",
    ka: "ಬೆಂಗಳೂರು, ಅಧಿಕೃತವಾಗಿ ಬೆಂಗಳೂರಾಗಿ ಪರಿಚಿತವಾಗಿದ್ದು, ಶತಮಾನಗಳಷ್ಟು ಹಳೆಯ ಇತಿಹಾಸವನ್ನು ಹೊಂದಿದೆ. ಈ ಪ್ರದೇಶದ ಪ್ರಾಚೀನ ಉಲ್ಲೇಖಗಳು ಗಂಗ ವಂಶದ (ಕ್ರಿ.ಶ. 350–1000) ಕಾಲಕ್ಕೆ ಸೇರಿದವು. ಆ ಕಾಲದಲ್ಲಿ ಇಂದಿನ ಬೆಂಗಳೂರಿನ ಸುತ್ತಮುತ್ತ ಸಣ್ಣ ಹಳ್ಳಿಗಳು ಮತ್ತು ದೇವಾಲಯಗಳು ಇದ್ದವು. 11ನೇ ಶತಮಾನದಲ್ಲಿ ಚೋಳ ವಂಶ ಇಲ್ಲಿ ಆಳಿಕೆ ನಡೆಸಿ ಆಡಳಿತ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ಬೆಳಸಿತು. “ಬೆಂಗಳೂರು” ಎಂಬ ಹೆಸರು “ಬೆಂದಕಾಳೂರಿನಿಂದ” ಬಂದಿದ್ದು, ಇದು ವೀರ ಬಲ್ಲಾಳ II ಅವರಿಗೆ ಒಬ್ಬ ಮಹಿಳೆ ನೀಡಿದ ಬೆಂದ ಕಾಳುಗಳಿಂದ ಉಂಟಾದ ಕತೆ ಎಂದು ನಂಬಲಾಗುತ್ತದೆ.16ನೇ ಶತಮಾನದಲ್ಲಿ, ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಪಾಳೆಯಗಾರನಾದ ಕೆಂಪೇಗೌಡ I ಅವರು ಕ್ರಿ.ಶ. 1537ರಲ್ಲಿ ಮಣ್ಣಿನ ಕೋಟೆಯನ್ನು ನಿರ್ಮಿಸಿ ನಾಲ್ಕು ಗೋಪುರಗಳನ್ನು ಕಟ್ಟುವ ಮೂಲಕ ಆಧುನಿಕ ಬೆಂಗಳೂರನ್ನು ಸ್ಥಾಪಿಸಿದರು. ಈ ಅವಧಿಯಲ್ಲಿ ಮಾರುಕಟ್ಟೆಗಳು, ದೇವಾಲಯಗಳು, ಕೆರೆಗಳು ನಿರ್ಮಿಸಲ್ಪಟ್ಟವು. ನಂತರ ಬೆಂಗಳೂರು ಮರಾಠರು, ಮೊಘಲರು, ಮತ್ತು 18ನೇ ಶತಮಾನದ ಕೊನೆಯಲ್ಲಿ ಹೈದರ್ ಅಲಿ ಹಾಗೂ ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಆಳ್ವಿಕೆಗೆ ಒಳಪಟ್ಟಿತು. ಅವರು ತೋಟಗಳು, ವ್ಯಾಪಾರ ಮಾರ್ಗಗಳು ಮತ್ತು ಸೇನಾ ತಾಣಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದರು.1799ರಲ್ಲಿ ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಮರಣದ ನಂತರ, ಬ್ರಿಟಿಷರು ಅಧಿಕಾರ ಹಿಡಿದು ಬೆಂಗಳೂರನ್ನು ಕ್ಯಾಂಟೋನ್ಮೆಂಟ್ ಪಟ್ಟಣವನ್ನಾಗಿ ರೂಪಿಸಿದರು. ಅವರು ಇಂಗ್ಲೀಷ್ ಶಿಕ್ಷಣ, ರೈಲು ಮಾರ್ಗಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಮೂಲಸೌಕರ್ಯಗಳನ್ನು ಪರಿಚಯಿಸಿದರು. ಇದರಿಂದ ಕ್ಯಾಂಟೋನ್ಮೆಂಟ್ ಪ್ರದೇಶ ಮತ್ತು ಪೇಟೆ ಪ್ರದೇಶ ವಿಭಿನ್ನ ಸಂಸ್ಕೃತಿಗಳೊಂದಿಗೆ ಬೆಳೆದವು. 1947ರಲ್ಲಿ ಸ್ವತಂತ್ರ ಭಾರತದ ಭಾಗವಾದ ಬೆಂಗಳೂರು, 1956ರಲ್ಲಿ ಕರ್ನಾಟಕದ ರಾಜಧಾನಿಯಾಯಿತು. 20ನೇ ಶತಮಾನದ ಅಂತ್ಯದಲ್ಲಿ ಐಟಿ ಕ್ರಾಂತಿಯಿಂದ ಬೆಂಗಳೂರು ಭಾರತದ ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿಯಾಗಿ ಮಾರ್ಪಟ್ಟಿತು. ಇಂದಿನ ದಿನಗಳಲ್ಲಿ ಇದು ತಂತ್ರಜ್ಞಾನ, ಶಿಕ್ಷಣ, ತೋಟಗಳು ಮತ್ತು ಚೈತನ್ಯಮಯ ಜೀವನಶೈಲಿಗೆ ಪ್ರಸಿದ್ಧವಾದ ನಗರವಾಗಿದೆ.ಬೆಂಗಳೂರು ಇತಿಹಾಸವು ವಿಭಿನ್ನ ಆಳ್ವಿಕೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಗಳ ಸಂಯೋಜನೆಯಾಗಿದೆ. ಬ್ರಿಟಿಷರು ಕ್ಯಾಂಟೋನ್ಮೆಂಟ್ ಸ್ಥಾಪಿಸಿದ ನಂತರ, 19ನೇ ಶತಮಾನದಲ್ಲಿ ನಗರವು ವೇಗವಾಗಿ ಬೆಳೆದಿತು. ಬ್ರಿಟಿಷರು ಆಡಳಿತ ಭವನಗಳು, ಶಾಲೆಗಳು, ಮತ್ತು ಆಸ್ಪತ್ರೆಗೆ ಪರಿಚಯಿಸಿದ್ದರು, ಇದರಿಂದ ಬೆಂಗಳೂರು ಬ್ರಿಟಿಷ್ ಇಂಡಿಯನ್ ಸೇನೆಯ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಯಿತು. ಕ್ಯಾಂಟೋನ್ಮೆಂಟ್ ಪ್ರದೇಶವು ಮರದ ದಾರಿಗಳ, ಕ್ಲಬ್‌ಗಳು, ಚರ್ಚ್‌ಗಳು ಇರುವ ಸ್ಥಳವಾಗಿ ಬೆಳೆದಿದ್ದು, ಹಳೆಯ ಪೇಟೆಯ ಪ್ರದೇಶದೊಂದಿಗೆ ವಿಭಿನ್ನವಾಗಿತ್ತು.20ನೇ ಶತಮಾನದ ಆರಂಭದಲ್ಲಿ ಬೆಂಗಳೂರು ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರರು ಮತ್ತು ಸುಧಾರಕರ ಕೇಂದ್ರವಾಗಿ ಬೆಳೆಯಿತು. ಕೆಂಗಲ್ ಹನುಮಂತಯ್ಯ, ಎಚ್.ಸಿ. ದಾಸಪ್ಪ ಸೇರಿದಂತೆ ಹಲವರು ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದರು. ಸ್ವಾತಂತ್ರ್ಯ ನಂತರ, ಬೆಂಗಳೂರಿನ ಪ್ರಾದೇಶಿಕ ಸ್ಥಾನ Mysore ರಾಜ್ಯದ ರಾಜಧಾನಿಯಾಗಿ ಆಯಿತು (ನಂತರ ಕರ್ನಾಟಕ ಎಂದು ಹೆಸರು ಬದಲಾಗಿದೆ).ಮಧ್ಯ 20ನೇ ಶತಮಾನದಲ್ಲಿ, ಹಿಂದುಸ್ತಾನ ಏರೋನಾಟಿಕ್ಸ್ ಲಿಮಿಟೆಡ್ (HAL), ಭಾರತ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಲಿಮಿಟೆಡ್ (BEL) ಸೇರಿದಂತೆ ಸಾರ್ವಜನಿಕ ಉದ್ಯಮಗಳ ಸ್ಥಾಪನೆಯಿಂದ ಬೆಂಗಳೂರು ಕೈಗಾರಿಕಾ ಅಭಿವೃದ್ಧಿಗೆ ತುದಿಗಟ್ಟಿತು. ವಿಜ್ಞಾನ ಸಂಸ್ಥೆಗಳು, IISc, ಐಐಎಂಬಿ ಮತ್ತು ಅನೇಕ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ನಗರವನ್ನು ಶಿಕ್ಷಣ ಕೇಂದ್ರವನ್ನಾಗಿ ಮಾಡಿದರು.1980ರ ನಂತರ, ಸಾಫ್ಟ್‌ವೇರ್ ಕಂಪನಿಗಳು, ಐಟಿ ಪಾರ್ಕ್‌ಗಳು ಮತ್ತು ಬಹುಜಾತಿ ಸಂಸ್ಥೆಗಳ ಬೆಳವಣಿಗೆಯಿಂದ ಬೆಂಗಳೂರು ತಂತ್ರಜ್ಞಾನ ಕ್ಷೇತ್ರದಲ್ಲಿ ವೇಗವಾಗಿ ಬೆಳೆದಿತು. ಇಂದಿನ ದಿನಗಳಲ್ಲಿ, ‘ಭಾರತದ ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿ’ ಎಂದು ಪರಿಚಿತರಾಗಿದ್ದು, ವಿಶ್ವದ ಹಲವು ಸ್ಥಳಗಳಿಂದ ವೃತ್ತಿಪರರು ಮತ್ತು ಉದ್ಯಮಿಗಳು ಬೆಂಗಳೂರಿಗೆ ಬರುತ್ತಾರೆ. ನಗರವು ತ್ವರಿತ ನಗರೀಕರಣದ ನಡುವೆಯೂ ಹಸಿರು ಪ್ರದೇಶಗಳು, ಕೆರೆಗಳು ಮತ್ತು ಬಹುಸಂಸ್ಕೃತಿಯ ಆತ್ಮವನ್ನು ಉಳಿಸಿಕೊಂಡಿದೆ."
  }
};

const HOME_CONTENT = {
  heroTitle: {
    en: "Discover the Garden City & Silicon Valley of India",
    ka: "ಭಾರತದ ಉದ್ಯಾನ ನಗರಿ ಮತ್ತು ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿಯನ್ನು ಅನ್ವೇಷಿಸಿ"
  },
  heroSubtitle: {
    en: "From historic temples and peaceful botanical gardens to global tech campuses and bustling shopping districts — explore the vibrant spirit of Bangalore.",
    ka: "ಐತಿಹಾಸಿಕ ದೇವಾಲಯಗಳು ಮತ್ತು ಶಾಂತಿಯುತ ಸಸ್ಯೋದ್ಯಾನಗಳಿಂದ ಹಿಡಿದು ಜಾಗತಿಕ ಐಟಿ ಸಂಸ್ಥೆಗಳು ಹಾಗೂ ರೋಮಾಂಚಕ ಶಾಪಿಂಗ್ ಕೇಂದ್ರಗಳವರೆಗೆ — ಬೆಂಗಳೂರನ್ನು ಅನ್ವೇಷಿಸಿ."
  },
  highlights: [
    {
      img: "assets/images/home/home1.jpg",
      title: { en: "Heritage & Architecture", ka: "ಪರಂಪರೆ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ" },
      desc: { en: "Marvel at ancient temples and majestic heritage monuments.", ka: "ಪುರಾತನ ದೇವಾಲಯಗಳು ಮತ್ತು ಭವ್ಯ ಸ್ಮಾರಕಗಳನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ." },
      sectionId: "temples"
    },
    {
      img: "assets/images/home/home2.jpg",
      title: { en: "Silicon Capital", ka: "ಸಿಲಿಕಾನ್ ರಾಜಧಾನಿ" },
      desc: { en: "Explore world-renowned technology hubs and modern campuses.", ka: "ವಿಶ್ವಪ್ರಸಿದ್ಧ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಕ್ಯಾಂಪಸ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ." },
      sectionId: "it"
    },
    {
      img: "assets/images/home/home3.jpg",
      title: { en: "Urban Lifestyle & Parks", ka: "ನಗರ ಜೀವನಶೈಲಿ ಮತ್ತು ಉದ್ಯಾನಗಳು" },
      desc: { en: "Experience premier shopping malls, sports grounds, and lush gardens.", ka: "ವಿಶ್ವದರ್ಜೆಯ ಮಾಲ್‌ಗಳು, ಕ್ರೀಡಾಂಗಣಗಳು ಮತ್ತು ಸುಂದರ ಉದ್ಯಾನಗಳನ್ನು ಅನುಭವಿಸಿ." },
      sectionId: "shopping"
    }
  ]
};
