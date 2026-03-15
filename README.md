# Ishtiaq Ahmad — Portfolio

Personal portfolio website for **Ishtiaq Ahmad**, Custom Website & WordPress Developer. Built with Next.js 15, React, and Tailwind CSS.

🔗 **Live:** [Add your Vercel/Netlify URL here]

---

## Features

- **About** — Bio, services (WordPress, Web Design, WooCommerce, PHP & JavaScript), and testimonials
- **Resume** — Education, experience, and skills (WordPress, HTML/CSS, JavaScript, PHP)
- **Portfolio** — WordPress project showcase with category filter and project details
- **Contact** — Contact form and info
- **Sticky WhatsApp** — Quick contact via WhatsApp
- **Dark/Light theme** — Toggle with persisted preference
- **Responsive** — Mobile-first layout

---

## Tech Stack

| Category    | Tech |
|------------|------|
| Framework  | [Next.js 15](https://nextjs.org/) (App Router) |
| UI         | React 18, Tailwind CSS |
| Icons      | React Icons (Fa, Md) |
| Animation  | Framer Motion |
| Forms      | Formik, Yup |

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ishtiaqwpdev/Ishtiaq-ahmad.git
cd Ishtiaq-ahmad

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout, metadata
│   ├── page.js            # Home (PersonalPortfolio)
│   ├── metadata.js        # Site config (name, links)
│   ├── personal-portfolio/
│   │   └── page.jsx       # Main portfolio layout & nav
│   └── projects/
│       └── [slug]/        # Dynamic project detail page
├── components/
│   ├── About.jsx          # About, services, testimonials
│   ├── Aside.jsx          # Sidebar (profile, contact, social)
│   ├── Contact.jsx        # Contact form
│   ├── Portfolio.jsx      # Portfolio grid & modal
│   ├── Resume.jsx         # Education, experience, skills
│   └── WhatsAppFloat.jsx  # Sticky WhatsApp button
├── public/
│   └── assets/
│       ├── Data.js        # Portfolio data & project list
│       └── images/        # Profile image, icons, project images
└── package.json
```

---

## Configuration

- **Site name & links:** `app/metadata.js`
- **Profile & contact:** `components/Aside.jsx`
- **Portfolio projects:** `public/assets/Data.js`
- **WhatsApp number:** `components/WhatsAppFloat.jsx`

---

## SEO

- **Metadata:** `app/metadata.js` — title, description, keywords, Open Graph, Twitter cards.
- **Sitemap:** Auto-generated at `/sitemap.xml` (see `app/sitemap.js`).
- **Robots:** Auto-generated at `/robots.txt` (see `app/robots.js`).
- **Structured data:** JSON-LD for Person in `app/layout.js`.

After going live, set `siteConfig.url` in `app/metadata.js` to your live URL and submit the sitemap in Google Search Console.

---

## Deployment

Deploy on [Vercel](https://vercel.com) (recommended for Next.js):

1. Push this repo to GitHub.
2. Import project on [Vercel](https://vercel.com/new).
3. Deploy; Vercel will detect Next.js and set the build command.

---

## License

This project is for personal/portfolio use.

---

## Contact

**Ishtiaq Ahmad**  
Custom Website & WordPress Developer  

- 📧 Email: ig020888@gmail.com  
- 📱 Phone: 03220541903  
- 💼 [LinkedIn](https://www.linkedin.com/in/ishtiaq-ahmad-418373295)  
- 📷 [Instagram](https://www.instagram.com/ishtiaq_ahmad13/)
