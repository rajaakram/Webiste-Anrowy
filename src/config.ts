// =============================================================================
// FELIX DREAM - Paestum Holidays Configuration
// =============================================================================
// Luxury curated travel experiences in Cilento, Italy
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "FELIX DREAM | Paestum Holidays - Curated Travel Experiences in Cilento, Italy",
  description: "Discover the authentic Cilento with personalized travel experiences. Heritage tours, culinary journeys, and roots holidays curated by Teresa with over 20 years of expertise.",
  language: "en",
  keywords: "Cilento travel, Paestum holidays, Italy tours, heritage travel, culinary experiences, roots holidays, Amalfi Coast, Italian vacation",
  ogImage: "/images/hero-cilento-coast.jpg",
  canonical: "https://paestumholidays.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "FELIX DREAM",
  brandSubname: "by PAESTUM HOLIDAYS",
  tagline: "Curated Travel Experiences",
  navLinks: [
    { name: "nav.home", href: "#home", icon: "Home" },
    {
      name: "nav.experiences",
      href: "#experiences",
      icon: "Grape",
      dropdown: [
        { name: "nav.foodWine", href: "#food-wine" },
        { name: "nav.culturalTours", href: "#cultural" },
        { name: "nav.rootsHolidays", href: "#roots" },
      ]
    },
    { name: "nav.dayTours", href: "#tours", icon: "BookOpen" },
    { name: "nav.about", href: "#about", icon: "Users" },
    { name: "nav.stories", href: "#stories", icon: "Newspaper" },
    { name: "nav.contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "nav.bookNow",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "FELIX DREAM",
  brandSubname: "by PAESTUM HOLIDAYS",
  yearText: "Est. 2004",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "La dolce vita del Cilento",
  mainTitle: "The Cilento\nYou've Never Seen",
  ctaButtonText: "Explore Experiences",
  ctaTarget: "#experiences",
  stats: [
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Happy Travelers" },
    { value: 4, suffix: "", label: "Languages Spoken" },
    { value: 4.9, suffix: "★", label: "Google Rating" },
  ],
  decorativeText: "CURATED TRAVEL",
  backgroundImage: "/images/hero-cilento-coast.jpg",
};

// -----------------------------------------------------------------------------
// Experience Showcase Config (WineShowcase adapted)
// -----------------------------------------------------------------------------
export interface Experience {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface ExperienceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface ExperienceShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  experiences: Experience[];
  features: ExperienceFeature[];
  quote: ExperienceQuote;
}

export const experienceShowcaseConfig: ExperienceShowcaseConfig = {
  scriptText: "Curated Experiences",
  subtitle: "PERSONALIZED JOURNEYS",
  mainTitle: "Discover Your Perfect\nCilento Experience",
  experiences: [
    {
      id: "food-wine",
      name: "Med(eat)erranean",
      subtitle: "Culinary Journey",
      year: "5 Days",
      image: "/images/experience-food-wine.jpg",
      filter: "brightness(1.1) sepia(0.2) saturate(1.2)",
      glowColor: "bg-amber-600/20",
      description: "Sun-ripened tomatoes, hand-pulled mozzarella, ancient vineyards, and sunsets over the Mediterranean. An immersive culinary journey through the authentic flavors of Cilento.",
      tastingNotes: "Farm-to-table experiences with local producers",
      alcohol: "Wine tastings at 3 boutique vineyards",
      temperature: "Cooking classes with Nonnas",
      aging: "From €890 per person",
    },
    {
      id: "cultural",
      name: "Heritage Explorer",
      subtitle: "Cultural Immersion",
      year: "7 Days",
      image: "/images/experience-cultural.jpg",
      filter: "brightness(1.05) sepia(0.15) saturate(1.1)",
      glowColor: "bg-emerald-700/20",
      description: "Walk among ancient Greek temples at Paestum, explore medieval hilltop villages, and discover the rich tapestry of history that makes Cilento unique.",
      tastingNotes: "Private guided tours of archaeological sites",
      alcohol: "UNESCO World Heritage experiences",
      temperature: "Local artisan workshops",
      aging: "From €1,290 per person",
    },
    {
      id: "roots",
      name: "Roots Holiday",
      subtitle: "Heritage Journey",
      year: "10 Days",
      image: "/images/experience-roots.jpg",
      filter: "brightness(1.08) sepia(0.25) saturate(1.0)",
      glowColor: "bg-rose-700/20",
      description: "Reconnect with your Italian heritage. Walk the streets your ancestors walked, meet distant relatives, and discover the village that holds your family's story.",
      tastingNotes: "Genealogy research assistance",
      alcohol: "Village visits and family connections",
      temperature: "Document retrieval services",
      aging: "From €2,500 per person",
    },
  ],
  features: [
    {
      icon: "Wine",
      title: "Local Expertise",
      description: "Over 20 years of intimate knowledge of Cilento's hidden gems and authentic experiences.",
    },
    {
      icon: "Thermometer",
      title: "Personal Touch",
      description: "Every journey is personally curated by Teresa to match your interests and pace.",
    },
    {
      icon: "Clock",
      title: "Flexible Pacing",
      description: "No rushed tours. Time to savor moments, connect with locals, and truly experience Cilento.",
    },
    {
      icon: "Sparkles",
      title: "Authentic Access",
      description: "Exclusive access to family farms, private vineyards, and local homes off the tourist path.",
    },
  ],
  quote: {
    text: "Teresa didn't just show us Campania — she made us feel like we belonged there.",
    attribution: "Sarah M., New York",
    prefix: "★★★★★",
  },
};

// -----------------------------------------------------------------------------
// Destinations Carousel Config (WineryCarousel adapted)
// -----------------------------------------------------------------------------
export interface DestinationSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface DestinationsCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: DestinationSlide[];
}

export const destinationsCarouselConfig: DestinationsCarouselConfig = {
  scriptText: "Explore",
  subtitle: "DESTINATIONS",
  mainTitle: "Discover Campania's\nHidden Treasures",
  locationTag: "Cilento, Campania, Italy",
  slides: [
    {
      image: "/images/dest-castellabate.jpg",
      title: "Castellabate",
      subtitle: "Medieval Hilltop Village",
      area: "UNESCO",
      unit: "Heritage Site",
      description: "Wander through narrow cobblestone streets, admire panoramic Mediterranean views, and experience authentic village life in this perfectly preserved medieval gem.",
    },
    {
      image: "/images/dest-cove.jpg",
      title: "Marina di Camerota",
      subtitle: "Coastal Paradise",
      area: "30+",
      unit: "Hidden Coves",
      description: "Crystal-clear turquoise waters, dramatic sea caves, and pristine beaches make this the crown jewel of the Cilento coastline.",
    },
    {
      image: "/images/tour-paestum.jpg",
      title: "Paestum Temples",
      subtitle: "Ancient Greek Ruins",
      area: "2,500",
      unit: "Years of History",
      description: "Stand in awe before three of the world's best-preserved ancient Greek temples, surrounded by wildflowers and timeless beauty.",
    },
    {
      image: "/images/weekend-amalfi.jpg",
      title: "Amalfi Coast",
      subtitle: "Coastal Beauty",
      area: "50km",
      unit: "Scenic Drive",
      description: "Dramatic cliffs, colorful villages perched on hillsides, and the legendary beauty of Italy's most famous coastline.",
    },
  ],
};

// -----------------------------------------------------------------------------
// About/Museum Config (Museum adapted)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface AboutTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface AboutTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: AboutTabContent;
}

export interface AboutQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface AboutConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: AboutTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: AboutQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const aboutConfig: AboutConfig = {
  scriptText: "Meet Teresa",
  subtitle: "YOUR CURATOR",
  mainTitle: "The Heart Behind\nYour Journey",
  introText: "For over 20 years, Teresa has been sharing her beloved Cilento with travelers from around the world. Her deep connections, local knowledge, and genuine passion create experiences that transform visitors into family.",
  timeline: [
    { year: "2004", event: "Paestum Holidays founded" },
    { year: "2010", event: "First Roots Holiday organized" },
    { year: "2015", event: "Expanded to full Campania region" },
    { year: "2020", event: "500th happy traveler celebration" },
    { year: "2024", event: "FELIX DREAM brand launched" },
  ],
  tabs: [
    {
      id: "story",
      name: "Teresa's Story",
      icon: "History",
      image: "/images/teresa-portrait.jpg",
      content: {
        title: "Born and Raised in Cilento",
        description: "Teresa grew up among the olive groves and vineyards of Cilento. Her childhood was filled with the flavors of her grandmother's cooking, the stories of village elders, and the ancient rhythms of Mediterranean life.",
        highlight: "Every journey I create is personal — because Cilento isn't just where I work, it's where my heart lives.",
      },
    },
    {
      id: "philosophy",
      name: "Philosophy",
      icon: "BookOpen",
      image: "/images/experience-roots.jpg",
      content: {
        title: "Travel That Transforms",
        description: "Teresa believes that the best travel experiences come from genuine human connection. Her approach combines deep local knowledge with intuitive understanding of what each traveler seeks.",
        highlight: "I don't plan itineraries — I craft journeys that touch the soul.",
      },
    },
    {
      id: "expertise",
      name: "Expertise",
      icon: "Award",
      image: "/images/dest-castellabate.jpg",
      content: {
        title: "20+ Years of Local Knowledge",
        description: "Fluent in four languages, Teresa has built relationships with local farmers, artisans, chefs, and families across Campania. This network opens doors that remain closed to typical tourists.",
        highlight: "My connections are your passport to authentic Italy.",
      },
    },
  ],
  openingHours: "Available 7 days a week",
  openingHoursLabel: "Availability",
  ctaButtonText: "Meet Teresa",
  yearBadge: "20+",
  yearBadgeLabel: "Years",
  quote: {
    prefix: "★★★★★",
    text: "Teresa's knowledge of Cilento is encyclopedic, but it's her warmth and genuine care that made our trip unforgettable.",
    attribution: "The Martinez Family, Buenos Aires",
  },
  founderPhotoAlt: "Teresa - Your Cilento Curator",
  founderPhoto: "/images/teresa-portrait.jpg",
};

// -----------------------------------------------------------------------------
// Stories/News Config (News adapted)
// -----------------------------------------------------------------------------
export interface StoryArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface StoriesConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: StoryArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const storiesConfig: StoriesConfig = {
  scriptText: "Stories",
  subtitle: "TRAVEL INSPIRATION",
  mainTitle: "Tales from\nCilento",
  viewAllText: "View All Stories",
  readMoreText: "Read More →",
  articles: [
    {
      id: 1,
      image: "/images/blog-vineyard.jpg",
      title: "The Art of Cilento Wine",
      excerpt: "Discover the ancient winemaking traditions that have shaped this region for millennia, from indigenous grape varieties to family cellars.",
      date: "February 2026",
      category: "Food & Wine",
    },
    {
      id: 2,
      image: "/images/tour-hiking.jpg",
      title: "Hidden Trails of Cilento National Park",
      excerpt: "Explore the secret paths that wind through Europe's largest national park, from coastal cliffs to mountain peaks.",
      date: "January 2026",
      category: "Adventure",
    },
    {
      id: 3,
      image: "/images/roots-familytree.jpg",
      title: "Finding Family: A Roots Holiday Story",
      excerpt: "Follow one family's emotional journey as they reconnect with their ancestral village and discover living relatives.",
      date: "December 2025",
      category: "Heritage",
    },
    {
      id: 4,
      image: "/images/experience-food-wine.jpg",
      title: "The Mozzarella Trail",
      excerpt: "From buffalo farms to your table, experience the journey of Italy's most beloved cheese in its authentic home.",
      date: "November 2025",
      category: "Food & Wine",
    },
  ],
  testimonialsScriptText: "Testimonials",
  testimonialsSubtitle: "TRAVELER STORIES",
  testimonialsMainTitle: "Words from\nOur Guests",
  testimonials: [
    {
      name: "Sarah Mitchell",
      role: "New York, USA",
      text: "Teresa didn't just show us Campania — she made us feel like we belonged there. Every meal, every conversation, every view was carefully chosen.",
      rating: 5,
    },
    {
      name: "Giovanni Rossi",
      role: "Buenos Aires, Argentina",
      text: "After 40 years of wondering about my grandfather's village, Teresa helped me walk those same streets and meet family I never knew I had.",
      rating: 5,
    },
    {
      name: "Emma & James Chen",
      role: "London, UK",
      text: "We've traveled extensively in Italy, but Cilento with Teresa showed us a side of the country we never knew existed. Authentic, warm, unforgettable.",
      rating: 5,
    },
  ],
  storyScriptText: "Our Story",
  storySubtitle: "THE JOURNEY",
  storyTitle: "Two Decades\nof Memories",
  storyParagraphs: [
    "What began as sharing my beloved Cilento with curious friends has grown into a life's work of crafting transformative travel experiences. Every journey is infused with the same passion and personal touch that defined those early days.",
    "Over 20 years, I've had the privilege of introducing hundreds of travelers to the authentic soul of Southern Italy — not the tourist trails, but the hidden corners where traditions live and stories breathe.",
  ],
  storyTimeline: [
    { value: "500+", label: "Happy Travelers" },
    { value: "20+", label: "Years Experience" },
    { value: "50+", label: "Local Partners" },
    { value: "4.9★", label: "Average Rating" },
  ],
  storyQuote: {
    prefix: "",
    text: "The best journeys don't just show you new places — they reveal new parts of yourself.",
    attribution: "Teresa",
  },
  storyImage: "/images/testimonials-dinner.jpg",
  storyImageCaption: "An evening of authentic Cilento hospitality",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get in Touch",
  subtitle: "START YOUR JOURNEY",
  mainTitle: "Let's Plan Your\nPerfect Trip",
  introText: "Every great journey begins with a conversation. Share your dreams, and Teresa will craft an experience that exceeds them.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Location",
      value: "Via Cesare Pavese 27, Capaccio Paestum",
      subtext: "84047 Salerno, Italy",
    },
    {
      icon: "Phone",
      label: "WhatsApp",
      value: "+39 328 123 4567",
      subtext: "Available 7 days a week",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "hello@paestumholidays.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: "Clock",
      label: "Languages",
      value: "Italian, English, Spanish, German",
      subtext: "Fluent communication",
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "+1 234 567 8900",
    visitDateLabel: "Preferred Travel Date",
    visitorsLabel: "Number of Travelers",
    visitorsOptions: ["1", "2", "3-5", "6-10", "10+"],
    messageLabel: "Tell Us About Your Dream Trip",
    messagePlaceholder: "What experiences are you looking for? Any special interests or requests?",
    submitText: "Send Inquiry →",
    submittingText: "Sending...",
    successMessage: "Thank you! Teresa will contact you within 24 hours.",
    errorMessage: "Something went wrong. Please try again or contact us directly.",
  },
  privacyNotice: "Your information is kept confidential and used only to plan your journey with us.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "FELIX DREAM",
  tagline: "by PAESTUM HOLIDAYS",
  description: "Curated travel experiences in Cilento, Italy. Authentic journeys crafted with passion and 20+ years of local expertise.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/paestumholidays" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/paestumholidays" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/paestumholidays" },
  ],
  linkGroups: [
    {
      title: "Discover",
      links: [
        { name: "Home", href: "#home" },
        { name: "Experiences", href: "#experiences" },
        { name: "Day Tours", href: "#tours" },
        { name: "About", href: "#about" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Food & Wine", href: "#food-wine" },
        { name: "Cultural Tours", href: "#cultural" },
        { name: "Roots Holidays", href: "#roots" },
        { name: "Transfers", href: "#transfers" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", href: "#contact" },
        { name: "Stories", href: "#stories" },
        { name: "WhatsApp", href: "https://wa.me/393281234567" },
        { name: "Email", href: "mailto:hello@paestumholidays.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms & Conditions", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "Via Cesare Pavese 27, Capaccio Paestum, 84047 SA, Italy" },
    { icon: "Phone", text: "+39 328 123 4567" },
    { icon: "Mail", text: "hello@paestumholidays.com" },
  ],
  newsletterLabel: "Subscribe to our newsletter",
  newsletterPlaceholder: "Your email address",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  newsletterErrorText: "Something went wrong. Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© 2026 FELIX DREAM by Paestum Holidays. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
  icpText: "",
  backToTopText: "Back to top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};

// -----------------------------------------------------------------------------
// Day Tours Config (Additional section)
// -----------------------------------------------------------------------------
export interface DayTour {
  id: string;
  name: string;
  duration: string;
  price: string;
  image: string;
  description: string;
}

export interface DayToursConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  tours: DayTour[];
}

export const dayToursConfig: DayToursConfig = {
  scriptText: "Day Tours",
  subtitle: "SINGLE DAY ADVENTURES",
  mainTitle: "Explore Cilento\nin a Day",
  introText: "Perfect for those with limited time or as additions to your longer stay. Each tour is carefully crafted to maximize your experience.",
  tours: [
    {
      id: "paestum",
      name: "Paestum Temples & Museum",
      duration: "6 hours",
      price: "From €89",
      image: "/images/tour-paestum.jpg",
      description: "Walk among ancient Greek temples and explore the fascinating archaeological museum.",
    },
    {
      id: "amalfi",
      name: "Amalfi Coast Scenic Drive",
      duration: "8 hours",
      price: "From €149",
      image: "/images/tour-amalfi.jpg",
      description: "Experience the dramatic beauty of the world's most famous coastline.",
    },
    {
      id: "ebike",
      name: "E-Bike Vineyard Tour",
      duration: "5 hours",
      price: "From €119",
      image: "/images/tour-ebike.jpg",
      description: "Pedal through rolling vineyards and enjoy wine tastings at family estates.",
    },
    {
      id: "hiking",
      name: "Cilento National Park Hike",
      duration: "7 hours",
      price: "From €99",
      image: "/images/tour-hiking.jpg",
      description: "Discover hidden trails, ancient ruins, and breathtaking mountain views.",
    },
  ],
};
