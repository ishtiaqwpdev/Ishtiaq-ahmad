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
    ],
  },
];
