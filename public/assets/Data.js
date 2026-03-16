import mnnan from "@/public/assets/images/645857333_17937379284170033_6606440308988618914_n.jpg";
import icondesgin from "@/public/assets/images/icon-design.svg";
import webIcon from "@/public/assets/images/icon-dev.svg";
import mobIcon from "@/public/assets/images/icon-app.svg";
import iconphoto from "@/public/assets/images/icon-photo.svg";
import iconquote from "@/public/assets/images/icon-quote.svg";

// Use profile image for avatar placeholders (my-avatar.png, avatar-1.png, project-1.jpg were missing)
const avtar = mnnan;
const avatar1 = mnnan;
const project1 = mnnan;

export {
  avtar,
  mnnan,
  icondesgin,
  webIcon,
  mobIcon,
  avatar1,
  iconphoto,
  iconquote,
  project1,
  projectcategories,
};

const projectcategories = [
  {
    category: "All",
  },
  {
    category: "Wordpress",
    projectDetail: [
      {
        src: "/assets/images/synergylandpartners.png",
        name: "synergylandpartners",
        link: "https://synergylandpartners.com",
        description: "A professional real estate website built with WordPress, featuring property listings and agent profiles.",
        features: [
          "Property search and filtering",
          "Agent profiles and contact forms",
          "Blog section for real estate news",
          "Mobile responsive design",
          "SEO optimization",
        ],
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
        date: "February 2024",
        gallery: ["/assets/images/synergylandpartners.png"],
      },
      {
        src: "/assets/images/nylihomebuyers.png",
        name: "Nyli Home Buyers",
        link: "https://nylihomebuyers.com/",
      },
      {
        src: "/assets/images/thepuppyposeyoga.png",
        name: "The Puppy Pose Yoga",
        link: "https://thepuppyposeyoga.com/",
      },
      {
        src: "/assets/images/maidsbygrace.png",
        name: "Maids by Grace",
        link: "https://maidsbygrace.com/",
      },
      {
        src: "/assets/images/smilebigdreambigger.png",
        name: "Smilebigdreambigger",
        link: "https://smilebigdreambigger.org",
      },
      {
        src: "/assets/images/medconnectstaffing.png",
        name: "MedConnect Staffing",
        link: "#",
      },
      {
        src: "/assets/images/proservicesus.png",
        name: "Pro Services US",
        link: "#",
      },
      {
        src: "/assets/images/screencapture-homeswithwalquiria-investors-page-2026-03-16-11_18_47.png",
        name: "Homes With Walquiria",
        link: "https://homeswithwalquiria.com/",
        description:
          "North Shore Boston real estate website for buyers, sellers and investors, built around lead generation, trust signals and bilingual content.",
        features: [
          "Hero section with property-focused headline, background imagery and a prominent lead capture form above the fold",
          "Lead form with fields for name, email, phone, city/area of interest, budget range and custom message to pre-qualify leads",
          "Dedicated sections for Buyers, Sellers and Investors with clear value propositions and calls to action",
          "Google reviews integration via Trustindex showing Spanish and English testimonials with verified badges",
          "Language switcher in the header for English and Spanish audiences to reach a broader local market",
          "Service cards highlighting home buying guidance, pricing and selling strategy, investment analysis and local expertise",
          "About section positioning the agent as a North Shore specialist with years of experience and community focus",
          "Contact information and call-to-action blocks (phone, email, working hours) repeated in strategic locations",
          "Footer with branding, brokerage info, social media links and copyright details to build credibility",
        ],
        technologies: [
          "WordPress",
          "PHP",
          "JavaScript",
          "CSS3",
          "Responsive Design",
          "Trustindex Reviews Integration",
          "Contact Form Plugin",
          "Multilingual / Language Switcher",
        ],
        date: "March 2026",
        gallery: [
          "/assets/images/screencapture-homeswithwalquiria-investors-page-2026-03-16-11_18_47.png",
        ],
      },
      {
        src: "/assets/images/tradng-website-mockup.png",
        name: "Ichi's Trading Place",
        link: "https://ichistradingplace.com/",
        description:
          "Trading SaaS landing for Ichi's Indicator with WooCommerce checkout, invite-only TradingView access, affiliate system and detailed referral analytics.",
        features: [
          "Hero section presenting Ichi's Indicator as a real-time, no-repaint TradingView tool for all markets",
          "WooCommerce product setup with lifetime and monthly pricing tiers, secure checkout and clear benefit breakdown",
          "Custom WooCommerce product page styled for SaaS (indicator) rather than physical goods",
          "Full affiliate system: registration, login, dedicated affiliate account pages and password reset flow",
          "Affiliate dashboard showing unique referral link, click and conversion tracking and earning summaries",
          "Referral tracking tightly integrated with WooCommerce orders, including reward amount per sale, status and referral history list",
          "Graph and stats sections for affiliates to monitor performance, payouts, top referrers and time-based earnings trends",
          "Automatic commission calculations based on WooCommerce order value and configured affiliate rates",
          "Withdrawal / payout requests handled from the affiliate dashboard with status indicators",
          "Customer account flows for indicator buyers, including quick setup instructions, FAQs and access guidance for TradingView",
          "Discord community and trust bars to highlight social proof and ongoing product support",
          "Responsive design optimized for desktop, tablet and mobile trading audiences",
        ],
        technologies: [
          "WordPress",
          "WooCommerce",
          "PHP",
          "JavaScript",
          "CSS3",
          "Affiliate Plugin Integration",
          "Custom Referral Tracking (WooCommerce-based)",
          "WooCommerce Checkout Customization",
          "Analytics / Charts",
          "Responsive Design",
        ],
        date: "March 2026",
        gallery: [
          "/assets/images/tradng-website-mockup.png",
          "/assets/images/screencapture-ichistradingplace-2026-03-16-21_00_01.png",
        ],
      },
      {
        src: "/assets/images/screencapture-survivetheonset-2026-03-16-21_25_23.png",
        name: "Survive The Onset",
        link: "https://survivetheonset.com/",
        description:
          "Apocalypse storytelling platform with weekly chapters, Survivor’s Network community, immersive lore and a structure ready for merch and future expansions.",
        features: [
          "Hero section themed as breaking-news outbreak with marquee-style alerts and calls to action",
          "Chapter system that lists episodes with title, audience tag, author, date and comment count, similar to a blog",
          "Survivor’s Network community concept encouraging users to join, receive updates and influence the direction of the story",
          "About and Survivor’s Network sections explaining the world, main characters and how readers become part of the narrative",
          "Latest Chapter area with cards for recent chapters and quick links to read more",
          "Emergency Alerts email signup form for sending outbreak updates and chapter notifications",
          "Navigation structure for chapters, Survivor’s Network, shop, gaming, about and contact pages to support future content and monetization",
          "Footer with quick links, partners area and contact info, all styled in apocalypse branding",
        ],
        technologies: [
          "WordPress",
          "PHP",
          "JavaScript",
          "CSS3",
          "Blog / Chapter System",
          "Email Form Integration",
          "WooCommerce-ready Shop Structure",
          "Responsive Design",
        ],
        date: "March 2026",
        gallery: [
          "/assets/images/screencapture-survivetheonset-2026-03-16-21_25_23.png",
        ],
      },
    ],
  },
];
