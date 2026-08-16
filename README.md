# Little Lemon — Table Reservations

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Testing Library](https://img.shields.io/badge/Tested_with-React_Testing_Library-E33332?style=flat-square&logo=testinglibrary&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

Capstone for the **Meta Front-End Developer Certificate**: the website for Little Lemon, a family-run Mediterranean restaurant, with a working **table-reservation flow** as the core feature.

## What It Does

* **Book a table** — a reservation form for date, time, and party details, driven by the course's booking API
* **Validated inputs** — client-side validation keeps the submit button honest until the form is complete and sensible
* **Multi-page navigation** — React Router 6 routes across the site, including the booking flow
* **Responsive layout** — built from the capstone's design spec, working across desktop and mobile

## Tech

React 18 (Create React App), React Router 6, and unit tests with **React Testing Library + Jest** covering the booking flow.

## Run It

```bash
git clone https://github.com/Jameshunter1/Little-Lemon.git
cd Little-Lemon
npm install
npm start        # dev server on :3000
npm test         # run the test suite
```

## Credit

Built as the capstone of the [Meta Front-End Developer Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) — brand and design spec are the course's; implementation and tests are my own. MIT licensed.
