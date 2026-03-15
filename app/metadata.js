/**
 * Site config for SEO and metadata.
 * Replace siteConfig.url with your live site URL (e.g. https://ishtiaqahmad.vercel.app)
 */
export const siteConfig = {
  name: "Ishtiaq Ahmad - Portfolio",
  title: "Ishtiaq Ahmad | Custom Website & WordPress Developer",
  description:
    "Custom Website & WordPress Developer with 5+ years experience. WordPress, Elementor, WooCommerce, theme and plugin customization. 100+ projects delivered. Based in Vehari, Pakistan.",
  url: "https://ishtiaqahmad.vercel.app", // Replace with your actual live URL
  ogImage: "/assets/images/645857333_17937379284170033_6606440308988618914_n.jpg",
  links: {
    github: "https://github.com/ishtiaqwpdev",
    linkedin: "https://www.linkedin.com/in/ishtiaq-ahmad-418373295",
    instagram: "https://www.instagram.com/ishtiaq_ahmad13/",
  },
  author: "Ishtiaq Ahmad",
  keywords: [
    "Ishtiaq Ahmad",
    "Ishtiaq Ahmad WordPress",
    "Ishtiaq Ahmad Developer",
    "WordPress Developer",
    "Custom Website Developer",
    "WooCommerce",
    "Elementor",
    "Theme Customization",
    "Plugin Customization",
    "Web Developer Pakistan",
    "Vehari",
    "Freelance WordPress",
  ],
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.links.linkedin }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
