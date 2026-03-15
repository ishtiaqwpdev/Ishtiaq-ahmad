# Google Search Console — Complete Guide (Site Google par kaise dikhe)

Is guide mein step-by-step bataya gaya hai ke apni portfolio site ko Google Search Console se kaise connect karein taake website Google search mein nazar aaye.

---

## Step 1: Google Search Console open karein

1. Browser mein jao: **https://search.google.com/search-console**
2. **Google account** se sign in karein (wohi account jis par site deploy hai ya jiska access hai).
3. Agar pehli dafa ho to **"Get started"** / **"Start now"** par click karein.

---

## Step 2: Property (website) add karein

1. **"Add property"** par click karein.
2. **Property type** choose karein:
   - **URL prefix** select karein (recommended).
   - Box mein apna **exact live URL** likhein, jaise:
     - `https://ishtiaq-ahmad.vercel.app`
     - Ya custom domain: `https://ishtiaqahmad.com`
   - URL ke end par **slash (/) na likhein** — sirf `https://ishtiaq-ahmad.vercel.app`
3. **"Continue"** par click karein.

---

## Step 3: Ownership verify karein

Verification ke liye **ek method** choose karein. Sabse aam options:

### Option A: HTML tag (Sabse aasaan — recommended)

1. **"HTML tag"** method select karein.
2. Screen par ek line dikhegi, jaise:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXX" />
   ```
3. Is **content="..."** wali value copy karein (sirf quotes ke andar wala code).
4. Apne project mein:
   - File open karein: **`app/layout.js`**
   - `<head>` ke andar koi bhi jagah (e.g. theme-color ke upar) ye line add karein:
     ```html
     <meta name="google-site-verification" content="YAHAN_WOH_CODE_PASTE_KAREIN" />
     ```
   - Example:
     ```jsx
     <head>
       <meta name="google-site-verification" content="abc123xyz..." />
       <link rel="canonical" href={siteConfig.url} />
       ...
     </head>
     ```
5. **Save** karein, repo **push** karein, aur site **deploy** hone dein (Vercel 1–2 min).
6. Wapas Search Console mein jao → **"Verify"** par click karein.
7. Agar sab theek ho to **"Ownership verified"** aa jayega.

### Option B: DNS (Agar custom domain use kar rahe ho)

1. **"Domain name provider"** / DNS method select karein.
2. Google jo **TXT record** de (copy karein).
3. Apne domain provider (Namecheap, GoDaddy, Cloudflare, etc.) mein jao → DNS settings → **TXT record add** karein (name aur value wahi jo Google ne di).
4. Save karein, 5–10 min wait karein, phir Search Console mein **"Verify"** karein.

---

## Step 4: Sitemap submit karein

Verification ke baad:

1. Left side menu mein **"Sitemaps"** par click karein.
2. **"Add a new sitemap"** section mein sirf ye likhein:
   ```
   sitemap.xml
   ```
   (Purra URL mat likhein — sirf `sitemap.xml`.)
3. **"Submit"** par click karein.
4. Thodi der baad status **"Success"** ya **"Sitemap could not be read"** — agar success ho to theek, agar error aaye to check karein ke live site par `https://YOUR-URL/sitemap.xml` open ho raha hai ya nahi.

---

## Step 5: URL Inspection se home page bhejein (optional lekin useful)

1. Left side **"URL inspection"** (ya top search bar) par jao.
2. Box mein apna home page URL daalein: `https://ishtiaq-ahmad.vercel.app`
3. **"Request indexing"** par click karein (agar option ho).
4. Is se Google ko signal jata hai ke is URL ko jaldi crawl karein.

---

## Step 6: Kya expect karein

- **Pehle 1–2 din:** Search Console mein data slow aata hai.
- **1 hafte tak:** Google site ko crawl karta hai; **Coverage** / **Pages** section mein URLs dikhna shuru ho sakti hain.
- **2–4 hafte:** Google search mein "Ishtiaq Ahmad" ya "Ishtiaq Ahmad WordPress" search karne par site nazar aana shuru ho sakti hai (timing site aur competition par depend karti hai).

---

## Checklist (Ek nazar mein)

| Step | Kaam | Done? |
|------|------|--------|
| 1 | search.google.com/search-console open karein | ☐ |
| 2 | Add property → URL prefix → apna live URL | ☐ |
| 3 | HTML tag copy karein | ☐ |
| 4 | `app/layout.js` mein verification meta tag add karein | ☐ |
| 5 | Push + deploy karein | ☐ |
| 6 | Search Console mein "Verify" karein | ☐ |
| 7 | Sitemaps → `sitemap.xml` submit karein | ☐ |
| 8 | (Optional) URL inspection se "Request indexing" | ☐ |

---

## Agar verification fail ho jaye

- **"We couldn't find the verification token"**  
  - Check: `layout.js` mein meta tag sahi paste hua hai?  
  - Site deploy ho chuki hai? Browser mein site open karke **View Page Source** (Ctrl+U) karein aur `<meta name="google-site-verification"` search karein — ye line dikhni chahiye.

- **Sitemap error**  
  - Check: `https://YOUR-URL/sitemap.xml` browser mein open ho raha hai?  
  - `app/metadata.js` mein `url` apni **live URL** se set hai?

---

## Short summary

1. **Search Console** → Add property (apna live URL).  
2. **Verify** → HTML tag method se `layout.js` mein meta tag add karo → deploy → Verify.  
3. **Sitemaps** → `sitemap.xml` submit karo.  
4. Thodi patience — 1–2 hafte mein indexing shuru hogi, uske baad Google par site dikhna shuru ho sakti hai.

Agar kisi step par atko to exact error message ya screenshot bhej dena, us hisaab se next step bata sakte hain.
