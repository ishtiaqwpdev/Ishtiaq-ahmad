# SEO Guide — Ishtiaq Ahmad Portfolio

## ✅ Jo code mein already add ho chuka hai

1. **Meta tags**
   - Title, description, keywords
   - Open Graph (Facebook, LinkedIn share)
   - Twitter cards
   - Canonical URL
   - Robots (index, follow)

2. **Sitemap**
   - Auto-generated at: `https://YOUR-LIVE-URL/sitemap.xml`
   - Main pages include ho chuki hain

3. **robots.txt**
   - Auto-generated at: `https://YOUR-LIVE-URL/robots.txt`
   - Crawlers ko allow + sitemap ka link diya hai

4. **Structured data (JSON-LD)**
   - Person schema (name, job title, links) — Google ke liye

---

## 🔧 Tumhe kya karna hai

### 1. Live URL set karo

Site deploy (e.g. Vercel) ke baad:

- Open: `app/metadata.js`
- Line: `url: "https://ishtiaqahmad.vercel.app"`
- Isko apni **actual live URL** se replace karo (e.g. `https://ishtiaqahmad.vercel.app` ya custom domain).
- Save karke repo push karo taake next deploy par sahi URL use ho.

### 2. Google Search Console

1. Browser mein jao: [Google Search Console](https://search.google.com/search-console)
2. **Add property** → **URL prefix** → apna live URL daalo (e.g. `https://ishtiaqahmad.vercel.app`)
3. Verification: **HTML tag** ya **DNS** method se verify karo (jo option tum use kar sakte ho)
4. Verification ke baad:
   - Left side: **Sitemaps**
   - New sitemap add karo: `https://YOUR-LIVE-URL/sitemap.xml`
   - Submit karo

Isse Google tumhari site ko index karega.

### 3. Bing Webmaster Tools (optional)

1. [Bing Webmaster Tools](https://www.bing.com/webmasters) par jao
2. Site add karo, verify karo
3. Sitemap submit karo: `https://YOUR-LIVE-URL/sitemap.xml`

### 4. Social share image (optional)

- Agar LinkedIn/Facebook par link share karte waqt image sahi na aaye to check karo:
  - `app/metadata.js` mein `ogImage` sahi path hai (e.g. `/assets/images/...`)
  - Image size 1200x630 px ke qareeb better hoti hai (optional, lekin recommended)

---

## Short checklist

| Step | Done? |
|------|--------|
| Deploy site (Vercel/Netlify) | ☐ |
| `metadata.js` mein `url` = live URL | ☐ |
| Google Search Console — property add + verify | ☐ |
| Sitemap submit: `YOUR-URL/sitemap.xml` | ☐ |
| (Optional) Bing — site add + sitemap | ☐ |

In sab ke baad Google time ke sath pages index karega; 1–2 hafte mein search mein dikhna shuru ho sakta hai.
