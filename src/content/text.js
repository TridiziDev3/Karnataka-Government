// src/content/text.js
export const TEXT = {

projects: {
  filters: {
      ongoing: { en: "Ongoing", kn: "ಪ್ರಗತಿಯಲ್ಲಿದೆ" },
      active: { en: "Active", kn: "ಸಕ್ರಿಯ" },
      completed: { en: "Completed", kn: "ಪೂರ್ಣಗೊಂಡಿದೆ" },
      knowMore: { en: "Know More", kn: "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ" },
      viewDetails: { en: "View Details", kn: "ವಿವರಗಳನ್ನು ನೋಡಿ" },
      progressLabel: { en: "Project Progress", kn: "ಯೋಜನೆಯ ಪ್ರಗತಿ" },
      subheading: { en: "Our Projects", kn: "ನಮ್ಮ ಯೋಜನೆಗಳು" },
      mainHeading: { en: "Get detailed information about Our Projects", kn: "ನಮ್ಮ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ವಿವರವಾದ ಮಾಹಿತಿ ಪಡೆಯಿರಿ" },
  },
  pillars: [
      // --- PILLARS FOR ONGOING STATUS (ID 1, 2, 3) ---
      { 
          id: 1,
          en: "Building transformative software that impacts users.", 
          kn: "ಬಳಕೆದಾರರ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಪರಿವರ್ತಕ ಸಾಫ್ಟ್‌ವೇರ್ ನಿರ್ಮಿಸುವುದು.",
      },
      { 
          id: 2,
          en: "Transforming payments into a stressless and fun activity.", 
          kn: "ಪಾವತಿಗಳನ್ನು ಒತ್ತಡರಹಿತ ಮತ್ತು ಮೋಜಿನ ಚಟುವಟಿಕೆಯಾಗಿ ಪರಿವರ್ತಿಸುವುದು.",
      },
      { 
          id: 3,
          en: "Join us in shaping the future of online payment systems.", 
          kn: "ಆನ್‌ಲೈನ್ ಪಾವತಿ ವ್ಯವಸ್ಥೆಗಳ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಲು ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ.",
      },
      // --- PILLARS FOR ACTIVE STATUS (ID 4, 5, 6) ---
      { 
          id: 4,
          en: "Actively monitoring new projects and mobilizing resources.", 
          kn: "ಹೊಸ ಯೋಜನೆಗಳನ್ನು ಸಕ್ರಿಯವಾಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುವುದು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳನ್ನು ಕ್ರೋಢೀಕರಿಸುವುದು.",
      },
      { 
          id: 5,
          en: "Accelerating execution of high-priority initiatives globally.", 
          kn: "ಹೆಚ್ಚಿನ ಆದ್ಯತೆಯ ಉಪಕ್ರಮಗಳ ಜಾಗತಿಕ ಅನುಷ್ಠಾನವನ್ನು ತ್ವರಿತಗೊಳಿಸುವುದು.",
      },
      { 
          id: 6,
          en: "Seeking new technology partners for deployment innovation.", 
          kn: "ನಿಯೋಜನೆ ನಾವೀನ್ಯತೆಗಾಗಿ ಹೊಸ ತಂತ್ರಜ್ಞಾನ ಪಾಲುದಾರರನ್ನು ಹುಡುಕುವುದು.",
      },
      // --- PILLARS FOR COMPLETED STATUS (ID 7, 8, 9) ---
      { 
          id: 7,
          en: "Successfully completed projects deliver significant user impact.", 
          kn: "ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡ ಯೋಜನೆಗಳು ಗಣನೀಯ ಬಳಕೆದಾರ ಪರಿಣಾಮವನ್ನು ನೀಡುತ್ತವೆ.",
      },
      { 
          id: 8,
          en: "Documenting achievements and scaling proven methodologies.", 
          kn: "ಸಾಧನೆಗಳನ್ನು ದಾಖಲಿಸುವುದು ಮತ್ತು ಸಾಬೀತಾದ ವಿಧಾನಗಳನ್ನು ಅಳೆಯುವುದು.",
      },
      { 
          id: 9,
          en: "Reviewing metrics to identify areas for future optimization.", 
          kn: "ಭವಿಷ್ಯದ ಆಪ್ಟಿಮೈಸೇಶನ್‌ಗಾಗಿ ಪ್ರದೇಶಗಳನ್ನು ಗುರುತಿಸಲು ಮೆಟ್ರಿಕ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು.",
      },
  ],
  cards: [
    // --- ONGOING (IDs 1-3) ---
    { id: 1, title: { en: "Smart City Waste Management - Delhi NCR", kn: "ಸ್ಮಾರ್ಟ್ ಸಿಟಿ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ - ದೆಹಲಿ ಎನ್‌ಸಿಆರ್" }, location: { en: "New Delhi", kn: "ನವ ದೆಹಲಿ" }, progress: 75, status: "Ongoing", image: "path-to-assets/project-image-1.jpg", },
    { id: 2, title: { en: "Waste-to-Energy Plant - Mumbai", kn: "ತ್ಯಾಜ್ಯದಿಂದ ಶಕ್ತಿ ಘಟಕ - ಮುಂಬೈ" }, location: { en: "Mumbai, Maharashtra", kn: "ಮುಂಬೈ, ಮಹಾರಾಷ್ಟ್ರ" }, progress: 60, status: "Ongoing", image: "path-to-assets/project-image-2.jpg" },
    { id: 3, title: { en: "E-Waste Recycling Hub - Bangalore", kn: "ಇ-ತ್ಯಾಜ್ಯ ಮರುಬಳಕೆ ಕೇಂದ್ರ - ಬೆಂಗಳೂರು" }, location: { en: "Bangalore, Karnataka", kn: "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ" }, progress: 45, status: "Ongoing", image: "path-to-assets/project-image-3.jpg" },
    
    // --- ACTIVE (IDs 4-6) ---
    { id: 4, title: { en: "Bio-Gas Plant - Chennai", kn: "ಬಯೋ-ಗ್ಯಾಸ್ ಘಟಕ - ಚೆನ್ನೈ" }, location: { en: "Chennai, Tamil Nadu", kn: "ಚೆನ್ನೈ, ತಮಿಳುನಾಡು" }, progress: 20, status: "Active", image: "path-to-assets/project-image-4.jpg" },
    { id: 5, title: { en: "New Recycling Project - Pune", kn: "ಹೊಸ ಮರುಬಳಕೆ ಯೋಜನೆ - ಪುಣೆ" }, location: { en: "Pune, Maharashtra", kn: "ಪುಣೆ, ಮಹಾರಾಷ್ಟ್ರ" }, progress: 10, status: "Active", image: "path-to-assets/project-image-5.jpg" },
    { id: 6, title: { en: "Composting Unit Expansion - Mysore", kn: "ಗೊಬ್ಬರ ಘಟಕ ವಿಸ್ತರಣೆ - ಮೈಸೂರು" }, location: { en: "Mysore, Karnataka", kn: "ಮೈಸೂರು, ಕರ್ನಾಟಕ" }, progress: 30, status: "Active", image: "path-to-assets/project-image-6.jpg" },

    // --- COMPLETED (IDs 7-9) ---
    { id: 7, title: { en: "Landfill Cleanup - Hyderabad", kn: "ಕಸ ತುಂಬುವ ಸ್ಥಳ ಸ್ವಚ್ಛತೆ - ಹೈದರಾಬಾದ್" }, location: { en: "Hyderabad, Telangana", kn: "ಹೈದರಾಬಾದ್, ತೆಲಂಗಾಣ" }, progress: 100, status: "Completed", image: "path-to-assets/project-image-7.jpg" },
    { id: 8, title: { en: "Plastic Ban Campaign - Goa", kn: "ಪ್ಲಾಸ್ಟಿಕ್ ನಿಷೇಧ ಅಭಿಯಾನ - ಗೋವಾ" }, location: { en: "Goa", kn: "ಗೋವಾ" }, progress: 100, status: "Completed", image: "path-to-assets/project-image-8.jpg" },
    { id: 9, title: { en: "Pilot Dry Waste Center - Hubli", kn: "ಪೈಲಟ್ ಒಣ ತ್ಯಾಜ್ಯ ಕೇಂದ್ರ - ಹುಬ್ಬಳ್ಳಿ" }, location: { en: "Hubli, Karnataka", kn: "ಹುಬ್ಬಳ್ಳಿ, ಕರ್ನಾಟಕ" }, progress: 100, status: "Completed", image: "path-to-assets/project-image-9.jpg" },
  ]
},
  header: {
    top: {
      visuallyChallenged: {
        en: "Visually Challenged",
        kn: "ದೃಷ್ಟಿ ಬಾಧಿತರಿಗಾಗಿ",
      },
      screenReader: {
        en: "Screen Reader Access",
        kn: "ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಪ್ರವೇಶ",
      },
      textSize: {
        en: "Text Size",
        kn: "ಪಠ್ಯದ ಗಾತ್ರ",
      },
      login: {
        en: "Login",
        kn: "ಲಾಗಿನ್",
      },
      // Button label changes based on current language
      langButton: {
        en: "ಕನ್ನಡ",
        kn: "English",
      },
    },
    center: {
      orgName: {
        en: "Bengaluru Solid Waste Management Limited",
        kn: "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್",
      },
      orgTagline: {
        en: "(Government of Karnataka)",
        kn: "(ಕರ್ನಾಟಕ ಸರ್ಕಾರ)",
      },
      logoAlt: {
        en: "Bengaluru Solid Waste Management Limited",
        kn: "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್",
      },
    },
    people: {
      cmAlt: {
        en: "Hon'ble Chief Minister",
        kn: "ಮಾನ್ಯ ಮುಖ್ಯಮಂತ್ರಿ",
      },
      ministerAlt: {
        en: "Deputy Chief Minister",
        kn: "ಉಪಮುಖ್ಯಮಂತ್ರಿ",
      },
    },
  },

  navbar: {
    links: {
      en: [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#projects", label: "Projects" },
        { href: "#tenders", label: "Tenders" },
        { href: "#downloads", label: "Downloads" },
        { href: "#media", label: "Media" },
        { href: "#rti", label: "RTI Dashboard" },
        { href: "#contact", label: "Contact Numbers" },
      ],
      kn: [
        { href: "#home", label: "ಮನೆ" },
        { href: "#about", label: "ನಮ್ಮ ಬಗ್ಗೆ" },
        { href: "#projects", label: "ಯೋಜನೆಗಳು" },
        { href: "#tenders", label: "ಟೆಂಡರ್‌ಗಳು" },
        { href: "#downloads", label: "ಡೌನ್‌ಲೋಡ್‌ಗಳು" },
        { href: "#media", label: "ಮಾಧ್ಯಮ" },
        { href: "#rti", label: "ಮಾಹಿತಿ ಹಕ್ಕು ಇಲಾಖೆ" },
        { href: "#contact", label: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳು" },
      ],
    },
  },

  hero: {
    title: {
      en: "Building a futuristic Waste Management System in Karanataka.",
      kn: "ಕರ್ನಾಟಕದಲ್ಲಿ ಭವಿಷ್ಯನಿಷ್ಠ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ನಿರ್ಮಿಸುತ್ತಿದೆ.",
    },
    text: {
      en: "We handle waste responsibly, ensuring a sustainable and healthier environment for everyone",
      kn: "ನಾವು ಕಸದ ನಿರ್ವಹಣೆಯನ್ನು ಹೊಣೆಗಾರಿಕೆಯಿಂದ ನಡೆಸುತ್ತೇವೆ, ಆರೋಗ್ಯಕರ ಪರಿಸರವನ್ನು ಎಲ್ಲರಿಗಾಗಿ ತಲುಪಿಸುತ್ತೇವೆ",
    },
    button: {
      en: "Know More",
      kn: "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ",
    },
    ticker: {
      en: "Call 1902 to register your grievance (if any) regarding any scheme / service delivery of Government of Karnataka",
      kn: "ಯಾವುದೇ ಯೋಜನೆ / ಸೇವಾ ವಿತರಣೆ ಕುರಿತು ನಿಮ್ಮ ಅಹವಾಲನ್ನು (ಇದ್ದಲ್ಲಿ) ನೋಂದಾಯಿಸಲು 1902 ಗೆ ಕರೆ ಮಾಡಿ — ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
    },
  },


  wastePlants: {
    heading: { en: "Waste Treatment Plants", kn: "ತ್ಯಾಜ್ಯ ಸಂಸ್ಕರಣಾ ಘಟಕಗಳು" },
    subheading: { en: "Modern facilities across India", kn: "ಭಾರತದಾದ್ಯಂತ ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳು" },
    viewAll: { en: "View All Plants →", kn: "ಎಲ್ಲಾ ಘಟಕಗಳನ್ನು ನೋಡಿ →" },
    cards: [
        {
            title: { en: "Pune Organic Waste Treatment Plant", kn: "ಪುಣೆ ಸಾವಯವ ತ್ಯಾಜ್ಯ ಸಂಸ್ಕರಣಾ ಘಟಕ" },
            location: { en: "Uruli Devachi, Pune", kn: "ಉರುಳಿ ದೇವಾಚಿ, ಪುಣೆ" },
            type: { en: "Composting", kn: "ಗೊಬ್ಬರ ತಯಾರಿಕೆ" },
            capacity: { en: "800 tons/day", kn: "800 ಟನ್‌/ದಿನ" },
            output: { en: "250 tons/day", kn: "250 ಟನ್‌/ದಿನ" },
        },
        // Duplicating cards for the scrolling effect as seen in the image:
        { 
            title: { en: "Pune Organic Waste Treatment Plant", kn: "ಪುಣೆ ಸಾವಯವ ತ್ಯಾಜ್ಯ ಸಂಸ್ಕರಣಾ ಘಟಕ" },
            location: { en: "Uruli Devachi, Pune", kn: "ಉರುಳಿ ದೇವಾಚಿ, ಪುಣೆ" },
            type: { en: "Composting", kn: "ಗೊಬ್ಬರ ತಯಾರಿಕೆ" },
            capacity: { en: "800 tons/day", kn: "800 ಟನ್‌/ದಿನ" },
            output: { en: "250 tons/day", kn: "250 ಟನ್‌/ದಿನ" },
        },
        { 
            title: { en: "Pune Organic Waste Treatment Plant", kn: "ಪುಣೆ ಸಾವಯವ ತ್ಯಾಜ್ಯ ಸಂಸ್ಕರಣಾ ಘಟಕ" },
            location: { en: "Uruli Devachi, Pune", kn: "ಉರುಳಿ ದೇವಾಚಿ, ಪುಣೆ" },
            type: { en: "Composting", kn: "ಗೊಬ್ಬರ ತಯಾರಿಕೆ" },
            capacity: { en: "800 tons/day", kn: "800 ಟನ್‌/ದಿನ" },
            output: { en: "250 tons/day", kn: "250 ಟನ್‌/ದಿನ" },
        },
    ],
},

  md: {
    heading: {
      en: "Managing Director Desk",
      kn: "ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರ ಮನವಿ",
    },
    p1: {
      en: "Bengaluru Solid Waste Management Limited (BSWML) is a Government of Karnataka undertaking incorporated on 22nd May 2021, based in Bengaluru, Karnataka, India. It focuses on innovation in the environmental sector, specifically solid waste management.",
      kn: "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್ (BSWML) ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧೀನದಲ್ಲಿರುವ ಕಂಪನಿಯಾಗಿದ್ದು, 22 ಮೇ 2021 ರಂದು ಸ್ಥಾಪನೆಯಾಗಿದೆ. ಈ ಸಂಸ್ಥೆ ಕರ್ನಾಟಕದ ಬೆಂಗಳೂರಿನ ನಗರದಲ್ಲಿ ನವೀನ ಮತ್ತು ಪರಿಸರ ಸ್ನೇಹಿ ಕ್ಷೇತ್ರದ ಆವಿಷ್ಕಾರಗಳಿಗೆ, ವಿಶೇಷವಾಗಿ ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
    },
    p2: {
      en: "The company has an authorized and paid-up capital of ₹0.50 million (INR 5,00,000). The registered office is located at #30/1, 1st and 2nd Floor, UNI Building, Thimmaiah Road, Vasanth Nagar, Bengaluru, Karnataka, 560051. The company is led by a board of seven directors.",
      kn: "ಕಂಪನಿಯ ಅನುಮೋದಿತ ಮತ್ತು ಪಾವತಿಸಲ್ಪಟ್ಟ ಬಂಡವಾಳವು ₹0.50 ಮಿಲಿಯನ್ (ಭಾರತೀಯ ರೂಪಾಯಿ 5,00,000) ಆಗಿದೆ. ಇದರ ನೋಂದಾಯಿತ ಕಛೇರಿ ವಿಳಾಸ: #30/1, 1ನೇ ಮತ್ತು 2ನೇ ಮಹಡಿ, ಯುನಿವರ್ಸಲ್ ಬಿಲ್ಡಿಂಗ್, ತಿಮ್ಮಯ್ಯ ರಸ್ತೆ, ವಸಂತ ನಗರ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ – 560051. ಈ ಸಂಸ್ಥೆಯನ್ನು ಏಳು ನಿರ್ದೇಶಕರ ಮಂಡಳಿ ಮುನ್ನಡೆಸುತ್ತಿದೆ.",
    },
    button: {
      en: "Know More",
      kn: "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ",
    },
    photoAlt: {
      en: "Managing Director",
      kn: "ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು",
    },
    name: {
      en: "M Maheshwar Rao, IAS",
      kn: "M ಮಹೇಶ್ವರ್ ರಾವ್, IAS",
    },
    role: {
      en: "Managing Director",
      kn: "ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು",
    },
  },

 wings: {
    heading: {
        en: "Wings",
        kn: "ವಿಭಾಗಗಳು",
    },
    // ADDED: Localized headings for the Wings section (Hardcoded in JSX previously)
    mainHeading: { 
        en: "Organizational Wings",
        kn: "ಸಂಸ್ಥೆಯ ವಿಭಾಗಗಳು",
    },
    subheading: { 
        en: "Specialized departments driving our mission",
        kn: "ನಮ್ಮ ಧ್ಯೇಯವನ್ನು ನಡೆಸುವ ವಿಶೇಷ ವಿಭಾಗಗಳು",
    },
    // The 'items' now hold objects containing both the title and the full description, localized.
    items: {
        en: [
            { 
                title: "IT Cell",
                description: "Digital infrastructure, technology implementation, and IT systems management for efficient waste tracking and monitoring.",
            },
            { 
                title: "Technical Wing",
                description: "Project planning, engineering design, technical implementation, and quality assurance of waste management facilities.",
            },
            { 
                title: "Administration",
                description: "Administrative operations, human resources, policy coordination, and overall organizational management.",
            },
        ],
        kn: [
            { 
                title: "ಐಟಿ ಸೆಲ್",
                description: "ಪರಿಣಾಮಕಾರಿ ತ್ಯಾಜ್ಯ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆಗಾಗಿ ಡಿಜಿಟಲ್ ಮೂಲಸೌಕರ್ಯ, ತಂತ್ರಜ್ಞಾನ ಅನುಷ್ಠಾನ ಮತ್ತು ಐಟಿ ಸಿಸ್ಟಮ್‌ಗಳ ನಿರ್ವಹಣೆ.",
            },
            { 
                title: "ತಾಂತ್ರಿಕ ವಿಭಾಗ",
                description: "ಯೋಜನಾ ಯೋಜನೆ, ಎಂಜಿನಿಯರಿಂಗ್ ವಿನ್ಯಾಸ, ತಾಂತ್ರಿಕ ಅನುಷ್ಠಾನ ಮತ್ತು ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ಸೌಲಭ್ಯಗಳ ಗುಣಮಟ್ಟದ ಭರವಸೆ.",
            },
            { 
                title: "ನಿರ್ವಹಣಾ ವಿಭಾಗ",
                description: "ಆಡಳಿತಾತ್ಮಕ ಕಾರ್ಯಾಚರಣೆಗಳು, ಮಾನವ ಸಂಪನ್ಮೂಲಗಳು, ನೀತಿ ಸಮನ್ವಯ ಮತ್ತು ಒಟ್ಟಾರೆ ಸಾಂಸ್ಥಿಕ ನಿರ್ವಹಣೆ.",
            },
        ],
    },
},
  /* --- Conceptual Media Center Data to be added to TEXT.js --- */

mediaCenter: {
    heading: { en: "Media Center", kn: "ಮಾಧ್ಯಮ ಕೇಂದ್ರ" },
    subheading: { en: "Breaking news, press releases, and achievements in waste management", kn: "ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಯಲ್ಲಿನ ಪ್ರಮುಖ ಸುದ್ದಿ, ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ ಮತ್ತು ಸಾಧನೆಗಳು" },
    latestUpdateBadge: { en: "Latest Updates", kn: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳು" },
    viewAllButton: { en: "View All Media Updates", kn: "ಎಲ್ಲಾ ಮಾಧ್ಯಮ ನವೀಕರಣಗಳನ್ನು ವೀಕ್ಷಿಸಿ" },
    cards: [
        {
            category: { en: "Press Release", kn: "ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ" },
            categoryColor: 'blue',
            title: { en: "NWMA Launches National Zero Waste Campaign", kn: "NWMA ರಾಷ್ಟ್ರೀಯ ಶೂನ್ಯ ತ್ಯಾಜ್ಯ ಅಭಿಯಾನ ಪ್ರಾರಂಭಿಸಿದೆ" },
            date: { en: "Dec 1, 2024", kn: "ಡಿಸೆಂ 1, 2024" },
            desc: { en: "National Waste Management Authority today launched an ambitious campaign to achieve zero waste across 100 smart cities by 2030, marking a historic milestone in India’s environmental journey.", kn: "ರಾಷ್ಟ್ರೀಯ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ಪ್ರಾಧಿಕಾರವು 2030 ರೊಳಗೆ 100 ಸ್ಮಾರ್ಟ್ ಸಿಟಿಗಳಲ್ಲಿ ಶೂನ್ಯ ತ್ಯಾಜ್ಯ ಸಾಧಿಸಲು ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಅಭಿಯಾನವನ್ನು ಪ್ರಾರಂಭಿಸಿತು." },
            button: { en: "Read Full Story", kn: "ಪೂರ್ಣ ಕಥೆಯನ್ನು ಓದಿ" },
        },
        {
            category: { en: "Achievement", kn: "ಸಾಧನೆ" },
            categoryColor: 'green',
            title: { en: "India Wins UN Environment Award", kn: "ಭಾರತವು ವಿಶ್ವಸಂಸ್ಥೆಯ ಪರಿಸರ ಪ್ರಶಸ್ತಿ ಗೆದ್ದಿದೆ" },
            date: { en: "Nov 20, 2024", kn: "ನವೆಂ 20, 2024" },
            desc: { en: "NWMA's innovative approach to integrated waste management has been recognized by the United Nations Environment Programme with the prestigious Environment Leadership Award.", kn: "NWMA ಯ ಸಮಗ್ರ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ವಿಧಾನವು ವಿಶ್ವಸಂಸ್ಥೆಯ ಪರಿಸರ ಕಾರ್ಯಕ್ರಮದಿಂದ ಪ್ರತಿಷ್ಠಿತ ಪರಿಸರ ನಾಯಕತ್ವ ಪ್ರಶಸ್ತಿಯೊಂದಿಗೆ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ." },
            button: { en: "Read Full Story", kn: "ಪೂರ್ಣ ಕಥೆಯನ್ನು ಓದಿ" },
        },
    ]
},

  notifications: {
    heading: {
      en: "Notifications",
      kn: "ಅಧಿಸೂಚನೆಗಳು",
    },
    latest: {
      en: "Latest",
      kn: "ಇತ್ತೀಚಿನವು",
    },
    date: {
      en: "Date",
      kn: "ದಿನಾಂಕ",
    },
    rowTitleKn: "ಲೋರಮ್ ಇಪ್ಸಮ್ ವಿಷಯ ಡಮ್ಮಿ ಪಠ್ಯವಾಗಿದೆ",
  },

  highlights: {
    subText: {
      en: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
      kn: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    },
    relatedHeading: {
      en: "Related Websites",
      kn: "ಸಂಬಂಧಿತ ವೆಬ್‌ಸೈಟ್‌ಗಳು",
    },
    inFocusHeading: {
      en: "In Focus",
      kn: "ಗಮನಾರ್ಹ ವಿಭಾಗ",
    },
    button: {
      en: "Know More →",
      kn: "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ →",
    },
    related: {
      en: [
        {
          id: "related-1",
          title: "Karnataka Government",
          desc: "Get the latest updates. Click ‘Know More’ to explore this section.",
        },
        {
          id: "related-2",
          title: "Food and Civil Supplies",
          desc: "Get the latest updates. Click ‘Know More’ to explore this section.",
        },
        {
          id: "related-3",
          title: "BBMP Website",
          desc: "Get the latest updates. Click ‘Know More’ to explore this section.",
        },
        {
          id: "related-4",
          title: "Karnataka Government",
          desc: "Get the latest updates. Click ‘Know More’ to explore this section.",
        },
      ],
      kn: [
        {
          id: "related-1",
          title: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
          desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        },
        {
          id: "related-2",
          title: "ಆಹಾರ ಮತ್ತು ನಾಗರಿಕ ಸರಬರಾಜು ಇಲಾಖೆ",
          desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        },
        {
          id: "related-3",
          title: "ಬಿಬಿಎಂಪಿ ವೆಬ್‌ಸೈಟ್",
          desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        },
        {
          id: "related-4",
          title: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
          desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        },
      ],
    },
    inFocus: {
      en: [
        {
          id: "focus-1",
          title: "Door to Door Collection",
          desc: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
        },
        {
          id: "focus-2",
          title: "Swachh Certification",
          desc: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
        },
        {
          id: "focus-3",
          title: "Processing of MSW",
          desc: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
        },
        {
          id: "focus-4",
          title: "Land fill",
          desc: "Stay updated! Click ‘Know More’ for the latest insights in this section.",
        },
      ],
      kn: [
        {
          id: "focus-1",
          title: "ಮನೆ ಮನೆ ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹ",
          desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        },
        {
          id: "focus-2",
          title: "ಸ್ವಚ್ಚತಾ ಪ್ರಮಾಣ ಪತ್ರ",
          desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        },
        {
          id: "focus-3",
          title: "ಎಂ.ಎಸ್.ಡಬ್ಲ್ಯೂ ಪ್ರಕ್ರಿಯೆ",
          desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        },
        {
          id: "focus-4",
          title: "ಲ್ಯಾಂಡ್‌ಫಿಲ್",
          desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
        },
      ],
    },
  },

  gallery: {
    bswml: {
      title: {
        en: "BSWML",
        kn: "ಬಿ.ಎಸ್.ಡಬ್ಲ್ಯೂ.ಎಂ.ಎಲ್",
      },
      cards: {
        en: [
          {
            title: "Sramadan",
            desc: "This is a dummy text. Click 'Know More' to learn more.",
          },
          {
            title: "Plastic Awareness Program",
            desc: "This is a dummy text. Click 'Know More' to learn more.",
          },
          {
            title: "Inspection to Dry Waste Center",
            desc: "This is a dummy text. Click 'Know More' to learn more.",
          },
        ],
        kn: [
          {
            title: "ಶ್ರಮದಾನ",
            desc: "ಇದು ತಾತ್ಕಾಲಿಕ ಪಠ್ಯ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ 'ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ' ಕ್ಲಿಕ್ ಮಾಡಿ.",
          },
          {
            title: "ಪ್ಲಾಸ್ಟಿಕ್ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮ",
            desc: "ಇದು ತಾತ್ಕಾಲಿಕ ಪಠ್ಯ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ 'ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ' ಕ್ಲಿಕ್ ಮಾಡಿ.",
          },
          {
            title: "ಒಣ ತ್ಯಾಜ್ಯ ಕೇಂದ್ರ ಪರಿಶೀಲನೆ",
            desc: "ಇದು ತಾತ್ಕಾಲಿಕ ಪಠ್ಯ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ 'ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ' ಕ್ಲಿಕ್ ಮಾಡಿ.",
          },
        ],
      },
      button: {
        en: "Know More",
        kn: "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ",
      },
    },
    gallery: {
      title: {
        en: "Gallery",
        kn: "ಗ್ಯಾಲರಿ",
      },
      tabs: {
        en: ["Photos", "Videos"],
        kn: ["ಚಿತ್ರಗಳು", "ವೀಡಿಯೊಗಳು"],
      },
      items: {
        en: [
          { title: "Event Photos" },
          { title: "Transfer Station" },
          { title: "Landfill" },
        ],
        kn: [
          { title: "ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರಗಳು" },
          { title: "ಟ್ರಾನ್ಸ್‌ಫರ್ ಸ್ಟೇಷನ್" },
          { title: "ಲ್ಯಾಂಡ್‌ಫಿಲ್" },
        ],
      },
    },
  },

   footer: {
    orgLine: {
      en: "Bengaluru Solid Waste Management Limited",
      kn: "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್",
    },

    tagline: {
      en: "Leading Karnataka’s waste management initiatives towards a sustainable and cleaner future for all citizens.",
      kn: "ಎಲ್ಲಾ ನಾಗರಿಕರಿಗಾಗಿ ಸ್ಥಿರ ಮತ್ತು ಸ್ವಚ್ಛ ಭವಿಷ್ಯದತ್ತ ಕರ್ನಾಟಕದ ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ಉಪಕ್ರಮಗಳನ್ನು ಮುನ್ನಡೆಸುತ್ತಿದೆ.",
    },

    quickLinksHeading: { en: "Quick Links", kn: "ತ್ವರಿತ ಕೊಂಡಿಗಳು" },

    quickLinks: {
      en: ["About Us", "Tenders", "Projects", "Gallery"],
      kn: ["ನಮ್ಮ ಬಗ್ಗೆ", "ಟೆಂಡರ್‌ಗಳು", "ಯೋಜನೆಗಳು", "ಗ್ಯಾಲರಿ"],
    },

    policiesHeading: { en: "Important Links", kn: "ಮುಖ್ಯ ಕೊಂಡಿಗಳು" },

    policies: {
      en: ["Copyright Policy", "Hyperlinking Policy", "Security Policy", "Terms & Conditions", "Privacy Policy"],
      kn: ["ಕಾಪಿರೈಟ್ ನೀತಿ", "ಹೈಪರ್ ಲಿಂಕಿಂಗ್ ನೀತಿ", "ಭದ್ರತಾ ನೀತಿ", "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು", "ಗೌಪ್ಯತಾ ನೀತಿ"],
    },

    contactHeading: { en: "Contact Us", kn: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ" },

    contact: {
      address: {
        en: "Bengaluru Solid Waste Management Limited, Vasanth Nagar, Bengaluru",
        kn: "ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್, ವಸಂತ ನಗರ, ಬೆಂಗಳೂರು",
      },
      phone: { en: "+91-11-2436-0721", kn: "+91-11-2436-0721" },
      email: { en: "info@bswml.net", kn: "info@bswml.net" },
    },

    copyrightLine: {
      en: "© 2025 Bengaluru Solid Waste Management Limited. All rights reserved.",
      kn: "© 2025 ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    },
  },
};




