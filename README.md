# Brayan Oduor — Data Analyst Portfolio

A modern, dark-themed personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Showcases live analytics dashboards, data projects, and business intelligence work.

🌐 **Live Site:** [portfolio-brayan.vercel.app](https://portfolio-brayan.vercel.app)

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated intro with live mock dashboard card and typing role effect |
| **About** | Background, expertise pillars, and domain knowledge |
| **Projects** | Filterable project cards with impact metrics and live demo links |
| **Dashboards** | Showcase of live Vercel-hosted analytics dashboards |
| **Skills** | Animated skill bars across Data Analysis, Visualization, Dev, and Tools |
| **Experience** | Core expertise areas with detailed bullet points |
| **Contact** | Contact form, social links, WhatsApp, and resume download |

---

## Live Dashboards

| Dashboard | Link |
|-----------|------|
| RFM Customer Analytics | [rfm-analytics.vercel.app](https://rfm-analytics.vercel.app/) |
| Customer Retention | [customer-retention-dashboard-eosin.vercel.app](https://customer-retention-dashboard-eosin.vercel.app/) |
| Customer Journey Analytics | [customer-journey-analytics-pi.vercel.app](https://customer-journey-analytics-pi.vercel.app/) |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Language:** TypeScript
- **Deployment:** Vercel

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles & Tailwind
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Dashboards.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── projects.json     # Project data — edit here to add/update projects
├── public/
│   └── resume.pdf
└── next.config.js
```

---

## Adding a New Project

Edit `data/projects.json` and add a new entry:

```json
{
  "id": 7,
  "title": "Your Project Title",
  "description": "What the project does and the problem it solves.",
  "technologies": ["Python", "Plotly", "Vercel"],
  "impact": "Measurable outcome.",
  "liveDemo": "https://your-dashboard.vercel.app",
  "github": "https://github.com/oduor254/your-repo",
  "category": "Dashboard"
}
```

---

## Contact

- **Email:** oduoromondi6@gmail.com
- **LinkedIn:** [linkedin.com/in/brayan-omondi-b5ab05227](https://www.linkedin.com/in/brayan-omondi-b5ab05227/)
- **GitHub:** [github.com/oduor254](https://github.com/oduor254)
- **WhatsApp:** +254 706 080 322

---

© 2026 Brayan Oduor
