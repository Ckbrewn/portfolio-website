# Notes: my audit method, SEO checklist, and how this site is built

## 1. How I audit a site

This is the method I used for the audit work at Los Alamos National Laboratory, where I helped resolve 150+ content, usability, and accessibility issues.

1. **Audit**: Review pages and log each finding with its location, type, and user impact. One row per finding: page, issue, category, severity.
2. **Categorize**: Group findings into content, usability, and accessibility:
   - **Content:** outdated, duplicated, unclear, or missing information.
   - **Usability:** navigation, headings, page structure, and wording that make a task harder.
   - **Accessibility:** pages or elements that don't meet accessibility checks: contrast, headings, link text, keyboard access, alt text.
3. **Prioritize**: Order by user impact and severity first, not by page order. Blockers before polish.
4. **Fix**: Update content and pages in the CMS. Rewrite complex technical information in plain, user-friendly language. Correct accessibility issues at the source.
5. **Retest**: Re-check each fixed page and document what changed, so the fix can be verified later.

### The audit demo on this site

The filterable table in Case Study 1 runs on a 16-item sample dataset in `script.js`. I wrote it for the demo to show how an audit log works: same columns, same severity scale, same prioritization, without using any employer's internal data. The page labels it as a sample dataset.

The donut chart in Case Study 1 (Content 62 / Usability 48 / Accessibility 40) adds to 150. The total is real; the split is an illustration of how findings were grouped, and the page says so.

### The before / after rewrite sample

The rewrite toggle shows one short paragraph in dense technical language and the same paragraph in plain language. It's a writing sample, labeled as such on the page. Not a quote from any employer document.

## 2. How I build landing pages and SEO

This is the approach I used at Scholly, where SEO raised traffic 20% and campaigns raised engagement 25%.

1. **Keyword research**: Find the search terms and topics the audience was already looking for.
2. **Landing pages**: Build pages with a clear heading, relevant content, and one clear next step.
3. **On-page SEO**: Metadata, heading structure, internal linking, descriptive copy, and alt text.
4. **Workflow**: Track intake, page status, and campaign work in Airtable, so nothing is lost between request and publish.
5. **Measure**: Check traffic and engagement, keep what worked, change what did not.

### The Scholly Google scholarship page

I built the landing page for the Scholly Women of Color in Tech $10,000 Scholarship, sponsored by Google, at myscholly.com/google. Applications ran Mar 1–31, 2022; twenty winners each received $10,000, from more than 2,000 applications. The page invited high school seniors and undergraduate women who are Black, Latina, and/or Native American, pursuing a computer science degree, to apply through a two-round application: a short first application taking less than 60 seconds, then 100 semi-finalists invited to answer an essay question.

The original page is no longer live, so the portfolio links to the archived capture from Mar 15, 2022 on the Wayback Machine, where you can see the page design as it was. The campaign ended Mar 31, 2022.

### The doula websites

After LANL, I built websites for small businesses, including two doula practices. I also did on-page SEO on those sites to help them rank higher in search.

- **Noelle's Touch**: noellestouch.com, live. A Los Angeles birth doula, support through pregnancy, labor, and postpartum. Home, Services, Meet Your Doula, and Contact pages; a Services page presenting the Amethyst, Pearl, and Diamond birth packages; plain-language copy; a clear contact flow; mobile-friendly, with SEO basics.
- **Nourishing Mommies**: nourishingmommies.com, no longer live. A doula with a practice going back to 2011; headline "POWERFUL MOMS / POWERFUL SUPPORT / POWERFUL FAMILIES." Same kind of build: site structure, plain-language copy, services pages, contact flow, mobile-friendly, SEO basics. It's linked only to the archived homepage from Feb 9, 2025, never to the dead domain as if it were live.

I don't claim metrics, dates, or results for either doula site. The header image in Case Study 4 is the header image from the archived Nourishing Mommies homepage, saved locally as `assets/nourishing-mommies-hero.webp`.

## 3. How this portfolio site is built

Plain HTML, CSS, and JavaScript. No framework, no build step. Warm cream background, dark walnut header and footer, deep teal and jewel plum accents, serif headings with a clean sans body. System fonts only, so it works offline and on GitHub Pages.

- **SEO:** descriptive titles and meta descriptions, canonical links, Open Graph and Twitter cards, JSON-LD Person schema, `sitemap.xml` and `robots.txt`. 
- **Accessibility:** semantic HTML5, skip link, visible focus, keyboard navigation, `prefers-reduced-motion` respected, charts with text legends, and filter controls built from real radio inputs with the result count announced.
