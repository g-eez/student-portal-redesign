# JKUAT Student Portal Redesign

A Human-Computer Interaction (HCI) course project exploring a clearer, student-focused experience for common university portal tasks. The repository contains a project presentation site, a detailed HCI/design document, and two standalone portal implementations at different stages of the redesign.

> This is an educational prototype. It is not an official JKUAT service and does not connect to university accounts, systems, or records.

## Contents

| Path | Description |
| --- | --- |
| `codehive.html` | CodeHive project/team presentation website, including an overview of the work and interactive HCI project slides. |
| `documentation.html` | Project documentation covering the problem statement, HCI principles, system design, implementation, evaluation, and team. |
| `styles.css` | Shared styling for the presentation and documentation pages. |
| `script.js` | Navigation, scroll effects, animations, and interactive project slides for the root-level pages. |
| `jkuat student portal/` | More complete standalone student-portal implementation. |
| `prototype/` | Earlier, simpler portal prototype. |

## Get Started

No build step or package installation is required. Open the HTML files directly in a modern browser, or serve the repository locally if you prefer.

### Open the portal

Open `jkuat student portal/index.html` to register or sign in, then use the portal dashboard. Registration data is stored in the browser for demonstration purposes. Since the directory name contains spaces, quote the path in shell commands.

### Open the project presentation and documentation

- Open `codehive.html` for the project/team presentation.
- Open `documentation.html` for the design and implementation notes.

### Run a local static server (optional)

From the repository root, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Choose a page from the repository listing, or open a direct path such as `/jkuat%20student%20portal/index.html`.

## Portal Features

The `jkuat student portal/` implementation presents these student workflows:

- Registration and sign-in screens
- Dashboard with academic and fee summaries
- Timetable and unit registration
- Results and GPA display
- Fee statement
- Library and e-learning sections
- Student profile
- Messages and notifications
- Responsive layout and theme controls

The `prototype/` folder is a separate, earlier implementation of the portal experience. Its interface and behavior may differ from the more complete version; open its own `index.html` to explore it.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Browser storage for demo state
- Google Fonts are loaded remotely by the root-level pages and the more complete portal, so those fonts require an internet connection; the pages themselves are static files.

## Demo Data and Limitations

- There is no server, database, or connection to JKUAT services.
- Registration, authentication, fees, grades, library items, messages, and other displayed records are for demonstration only.
- Browser storage is not secure authentication or durable data storage. Do not enter real passwords, personal information, or financial details.
- The content and interactions should not be treated as official academic, financial, or administrative records.

## Project Documentation

See [`documentation.html`](documentation.html) for the longer project write-up. The portal folders also contain their own README files with version-specific usage details.