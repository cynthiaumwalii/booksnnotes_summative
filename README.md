# Books&Notes

A vanilla HTML, CSS and JavaScript website for saving books, summaries and notes. Records are stored locally in the browser, can be searched through, sorted, edited, imported and exported as JSON.

- **Author:** Cynthia Umwali
- **Contact:** c.umwali@alustudent.com
- **GitHub repo:** https://github.com/cynthiaumwalii/booknnotesvault_summative
- **Live site:** `
- **Demo video:** 

## Pages

| Page | File | Purpose |
|---|---|---|
| Home & About | `index.html` | What the app is for, home page sections like mission, vision, testimonials, plus my contact details |
| Dashboard | `dashboard.html` | Stats cards, Added last 7-days chart, search, records table that can be sorted by date, rating and summary, add/edit form, delete button, import/export buttons |
| Settings | `settings.html` | Page cap, reading speed and time units (minutes/hours) |
| Tests | `tests.html` |Rgex rules test cases and helpers |

## Features

- Add, edit and delete records, with a confirmation before deleting any record
- Form validation with 4+ regex rules and an error message in the form
- Live regex search with a case-insensitive toggle, and `<mark>` for highlighting matches
- Sorting by date added, summary (A to Z) and rating (descending)
- Stats: total records, total pages, top genre, and books added in the last 7 days
- A bar chart representing books added the last seven days
- Page cap with a live message
- Settings for reading speed (pages per hour) and time units, with pages to minutes/hours conversion
- Data saved automatically to `localStorage`
- JSON import (validated, invalid records reported) and JSON export
- Responsive layout with a collapsible menu on mobile and card-styled rows on small screens
- The Seed data that's loaded the first time the app opens (`seed.json`)

## Localstorage Keys

`localStorage` keys: `booksnnotes_records` (records), `booksnnotes_cap` (page cap), `booksnnotes_pph` (reading speed), `booksnnotes_unit` (minutes or hours).

## Project structure

```
index.html
dashboard.html
settings.html
tests.html
seed.json
styles/
  main.css
assets/
  hero.jpg
  mission.png
  vision.png
scripts/
  main.js            dashboard entry point: wires most events together
  home.js            landing page entry point
  settings.js        settings page logic (cap, speed, units, conversion)
  storage.js         read/save records and cap in localStorage, seed loading
  validators.js      validateRecord and importsRecordValidator
  regexPatterns.js   every regex used by the app
  search.js          debounce, row values, regex matching helpers
  sortRecords.js     sorting by summary, date or ratings and title[in SortRecords general function]
  displayRecords.js  builds table rows, escapes HTML like tags, and highlights matches
  dashboardCards.js  stat cards, cap message and the 7-day chart
  importExport.js    JSON import (validated) and export
  toggleNavbar.js    menu toggle on mobile
```

## Keyboard map

| Key | Action |
|---|---|
| `Tab` / `Shift + Tab` | Move to the next / previous element |
| `Enter` | Press the focused link or button, or submit the form |
| `Space` | Press the focused button, or tick the case-insensitive checkbox |
| `Esc` | Close the add/edit dialog |
| Skip link | Jumps to the main content |
| Menu button (small screens) | `Enter` or `Space` opens and closes the menu |

## Running the app locally

1. Clone the repo: `git clone https://github.com/cynthiaumwalii/booknnotesvault_summative`
2. Open the folder in VS Code and install the **Live Server** extension
3. Right-click `index.html` and choose **Open with Live Server**

## Running the tests

1. Serve the project as above
2. Open `tests.html` (for example `http://127.0.0.1:5500/tests.html`)
3. The page lists each test as PASS or FAIL and shows a summary

## Import and export

- **Export** downloads all saved records as `booksnnotes_records.json`.
- **Import** reads a JSON file that must contain an array of records. Each record is validated with the same rules as the form. Valid records are added with new ids, invalid records are skipped.

## Responsive design
 
Layouts are checked at roughly 360px, 768px and 1024px widths. On small screens the nav collapses behind a menu button and the table turns into card-styled rows, with each value labelled.

## AI assistance disclosure

I used AI help to debug pages: settings.js, tests.html and bookChart.js. I have gone through the generated fixes and I can explain them well.

## Author
 
Cynthia Umwali, c.umwali@alustudent.com
