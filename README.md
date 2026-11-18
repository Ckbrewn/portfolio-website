# Chanel Naylor

Hi, I'm Chanel Naylor, a Web Content Specialist in Los Angeles, CA. I publish and fix websites so people can actually use them: clear content, working navigation, and pages that pass accessibility checks.

**Live site:** https://ckbrewn.github.io/portfolio-website/

## What I do

- Content management and publishing: WordPress, Cascade CMS, HTML / CSS / JavaScript
- Site audits: content, usability, and accessibility, with fixes in the CMS and documentation of what changed
- Landing pages and SEO: keyword research, on-page SEO, metadata, and heading structure
- Technical documentation and plain-language rewrites
- Data and reporting: Google Analytics / GA4, Google Sheets and Excel, Airtable workflows, reporting usage data and findings to stakeholders

At Los Alamos National Laboratory I helped resolve 150+ content, usability, and accessibility issues found in site audits. At Scholly I built landing pages in WordPress, talked with stakeholders and translated what they needed to the team, managed projects to launch on time, and set up the application forms so every submission was captured and tracked, with the numbers reported back to the team; SEO raised traffic 20% and campaigns raised engagement 25%. Earlier, at PSX Digital, I built dealer websites and tested them with Lighthouse, answered and closed tickets, and checked pages for accessibility, including a Harley-Davidson dealership site serving Greensboro, NC; QA work there contributed to a 30% reduction in bugs.

## Selected work

**1. Site audit: 150+ issues resolved, Los Alamos National Laboratory**
A summary of audit work on internal pages: what I found, how I grouped and prioritized it, and how I fixed and retested it. The page includes a filterable sample audit log and a before / after rewrite sample, so you can see the method in action.

**2. Scholly x Google scholarship landing page**
I built the landing page for the Scholly Women of Color in Tech $10,000 Scholarship, sponsored by Google. Applications ran Mar 1-31, 2022, 20 winners at $10,000 each, from more than 2,000 applications. The original page is no longer live, so it is linked here as an archived capture from Mar 15, 2022 on the Wayback Machine.

**3. Noelle's Touch: website for a Los Angeles birth doula**
A complete website for a small business: Home, Services, Meet Your Doula, and Contact pages, with the Amethyst, Pearl, and Diamond birth packages, plain-language copy, and a clear contact flow. Live at https://www.noellestouch.com/

**4. Nourishing Mommies: website for a doula**
A complete website for a doula practice, built end to end. The site is no longer live, so it's shown here as an archived case study, with its header image and a link to the archived homepage from Feb 9, 2025.

**5. Harley-Davidson dealership pages, PSX Digital**
Built dealer websites and tested them with Lighthouse, answered and closed tickets, and checked pages for accessibility. That included a Harley-Davidson dealership site serving Greensboro, NC (Harley-Davidson of Greensboro, in High Point): testing pages across browsers and screen sizes, checking inventory and contact pages, logging bugs, and re-testing after fixes. The dealership's site has been rebuilt since 2023, so the live site today is not the version I worked on.

## This site

I built this portfolio by hand with plain HTML, CSS, and JavaScript. No framework, no build step, no template. It includes:

- Semantic HTML, a skip link, visible focus states, and keyboard navigation
- A filterable audit demo and a before / after rewrite toggle, both in vanilla JavaScript
- SVG charts with text legends, so the numbers are readable without the picture
- SEO basics: descriptive titles and meta descriptions, Open Graph, JSON-LD, a sitemap, and robots.txt

## Run it locally

```bash
cd portfolio-website
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Files

```text
portfolio-website/
├── index.html        # The portfolio: About, Skills, Selected Work, View Project, Contact
├── styles.css        # Styles, responsive, accessible
├── script.js         # Vanilla JS: nav, audit demo, rewrite toggle
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── nourishing-mommies-hero.webp  # Header image from the archived Nourishing Mommies homepage
│   ├── lanl-audit-banner.png         # Title card for the LANL audit case study (pages were internal)
│   ├── scholly-hero.webp             # Hero image from the Scholly scholarship page as it appeared when live
│   ├── noelles-touch-homepage.webp   # Screenshot of the Noelle's Touch homepage
│   └── hdofgreensboro-homepage.webp  # Screenshot of the Harley-Davidson of Greensboro homepage
└── docs/
    └── notes.md      # My audit method, SEO checklist, and notes on the work
```

## Contact

- Email: chanelk52@gmail.com
- LinkedIn: https://www.linkedin.com/in/chanel-naylor/
