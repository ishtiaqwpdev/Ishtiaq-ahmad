import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, defaultMetadata } from "./metadata";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    jobTitle: "Custom Website & WordPress Developer",
    url: siteConfig.url,
    image: siteConfig.url + siteConfig.ogImage,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.instagram,
    ],
    description: siteConfig.description,
  };

  return (
    <html lang="en">
      <head>
        {/* Google Search Console: verification code yahan paste karein (content="...") */}
        <meta name="google-site-verification" content="4FGwTy5yt99Vk0gQlxktQFBUYi1DLWjkgSQxdpjfjgE" />
        <link rel="canonical" href={siteConfig.url} />
        <meta name="theme-color" content="#ffd60a" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffd60a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
