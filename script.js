// Chanel Naylor, portfolio
// Vanilla JS only. No frameworks, no network calls.
// Features: mobile nav toggle, smooth scroll (reduced-motion aware),
// active nav highlighting, footer year,
// interactive audit demo (sample dataset, filters), before/after rewrite
// toggle.

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close the menu after choosing a link (mobile)
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll, respecting reduced motion (in-page anchors only)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var id = link.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      if (prefersReducedMotion) {
        target.scrollIntoView();
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      // Move keyboard focus to the section target for screen readers
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  // Active nav highlighting (IntersectionObserver, with fallback)
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (link) {
    var section = document.querySelector(link.getAttribute('href'));
    if (section) sections.push({ link: link, section: section });
  });
  function setActive(id) {
    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + id) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(function (item) { observer.observe(item.section); });
  }


  // ------------------------------------------------------------------
  // Interactive audit demo, SAMPLE dataset, not LANL internal data.
  // 16 findings written for this demo to show how an audit log works:
  // one row per finding, with page, category, severity, and fix.
  // ------------------------------------------------------------------
  var SAMPLE_FINDINGS = [
    { page: '/programs', finding: 'Outdated program dates still listed for last year', category: 'Content', severity: 'Serious', fix: 'Update dates in the CMS; add a review date.' },
    { page: '/apply', finding: 'Required-field errors do not name the field', category: 'Usability', severity: 'Critical', fix: 'Name the missing field in the error message.' },
    { page: '/about', finding: 'Team photo has no alt text', category: 'Accessibility', severity: 'Serious', fix: 'Add descriptive alt text in the CMS.' },
    { page: '/news', finding: 'Two news items repeat the same story with different dates', category: 'Content', severity: 'Moderate', fix: 'Remove the duplicate; keep the newer version.' },
    { page: '/contact', finding: 'Phone number is an image, not text', category: 'Accessibility', severity: 'Critical', fix: 'Replace the image with real text.' },
    { page: '/programs', finding: 'Navigation label says “Resources” but leads to forms', category: 'Usability', severity: 'Serious', fix: 'Rename the link to match the destination.' },
    { page: '/faq', finding: 'Answer contradicts the answer on /apply', category: 'Content', severity: 'Serious', fix: 'Rewrite one answer; link to the other page.' },
    { page: '/apply', finding: 'Color alone shows which fields are required', category: 'Accessibility', severity: 'Critical', fix: 'Add “(required)” text to each required field.' },
    { page: '/home', finding: 'Hero heading is an image with no text alternative', category: 'Accessibility', severity: 'Critical', fix: 'Use a real heading; keep the image decorative.' },
    { page: '/news', finding: 'Headings skip from H1 to H3', category: 'Accessibility', severity: 'Moderate', fix: 'Fix the heading order in the CMS template.' },
    { page: '/programs', finding: 'Page title is the same on every program page', category: 'Content', severity: 'Moderate', fix: 'Give each page a unique, descriptive title.' },
    { page: '/faq', finding: 'Long answer hides the next step at the bottom', category: 'Usability', severity: 'Moderate', fix: 'Move the next step to the top; shorten the answer.' },
    { page: '/contact', finding: 'Form success message is not announced to screen readers', category: 'Accessibility', severity: 'Serious', fix: 'Add role="status" to the success message.' },
    { page: '/home', finding: 'Link text reads “click here” in three places', category: 'Accessibility', severity: 'Moderate', fix: 'Rewrite link text to name the destination.' },
    { page: '/about', finding: 'Staff list includes someone who left last year', category: 'Content', severity: 'Moderate', fix: 'Remove the entry; confirm the rest of the list.' },
    { page: '/apply', finding: 'Submit button is hard to find on a small screen', category: 'Usability', severity: 'Serious', fix: 'Move the button above the fold on mobile.' }
  ];

  var auditBody = document.getElementById('audit-table-body');
  var auditCount = document.getElementById('audit-count');
  if (auditBody) {
    var pillClass = {
      Content: 'pill-content', Usability: 'pill-usability', Accessibility: 'pill-accessibility',
      Critical: 'pill-critical', Serious: 'pill-serious', Moderate: 'pill-moderate'
    };
    function renderAudit(category, severity) {
      var shown = SAMPLE_FINDINGS.filter(function (f) {
        var okCategory = category === 'all' || f.category === category;
        var okSeverity = severity === 'all' || f.severity === severity;
        return okCategory && okSeverity;
      });
      auditBody.textContent = '';
      if (!shown.length) {
        var empty = document.createElement('tr');
        var cell = document.createElement('td');
        cell.colSpan = 5;
        cell.textContent = 'No sample findings match those filters. Try widening the category or severity.';
        empty.appendChild(cell);
        auditBody.appendChild(empty);
      } else {
        shown.forEach(function (f) {
          var row = document.createElement('tr');
          var cells = [
            { text: f.page, pill: null },
            { text: f.finding, pill: null },
            { text: f.category, pill: pillClass[f.category] },
            { text: f.severity, pill: pillClass[f.severity] },
            { text: f.fix, pill: null }
          ];
          cells.forEach(function (c) {
            var td = document.createElement('td');
            if (c.pill) {
              var pill = document.createElement('span');
              pill.className = 'pill ' + c.pill;
              pill.textContent = c.text;
              td.appendChild(pill);
            } else {
              td.textContent = c.text;
            }
            row.appendChild(td);
          });
          auditBody.appendChild(row);
        });
      }
      if (auditCount) {
        auditCount.textContent = 'Showing ' + shown.length + ' of ' + SAMPLE_FINDINGS.length + ' sample findings.';
      }
    }
    function currentFilter(name) {
      var checked = document.querySelector('input[name="' + name + '"]:checked');
      return checked ? checked.value : 'all';
    }
    function rerenderAudit() {
      renderAudit(currentFilter('audit-category'), currentFilter('audit-severity'));
    }
    document.querySelectorAll('input[name="audit-category"], input[name="audit-severity"]').forEach(function (input) {
      input.addEventListener('change', rerenderAudit);
    });
    renderAudit('all', 'all');
  }

  // ------------------------------------------------------------------
  // Before / After rewrite toggle.
  // Default: show both side-by-side (stacked on mobile).
  // "Before only" / "After only" hide the other panel.
  // ------------------------------------------------------------------
  var rewriteButtons = document.querySelectorAll('[data-rewrite-view]');
  var beforePanel = document.getElementById('rewrite-before');
  var afterPanel = document.getElementById('rewrite-after');
  if (rewriteButtons.length && beforePanel && afterPanel) {
    rewriteButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var view = button.getAttribute('data-rewrite-view');
        rewriteButtons.forEach(function (b) {
          b.setAttribute('aria-pressed', b === button ? 'true' : 'false');
        });
        beforePanel.hidden = view === 'after';
        afterPanel.hidden = view === 'before';
      });
    });
  }
})();
