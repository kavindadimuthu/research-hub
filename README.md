# Sri Lanka Transit Demand Forecasting — Research Hub

A Docusaurus-based knowledge hub for the IS4101 Final Year Research Project at the University of Colombo School of Computing (UCSC).

**Live site:** [kavindadimuthu.github.io/research-hub](https://kavindadimuthu.github.io/research-hub/)

## About the research

This project develops and evaluates a data-driven passenger demand forecasting framework for Sri Lankan public transport. It combines AFC ticketing records, GPS/AVL vehicle traces, weather data, calendar events, and socio-demographic context to produce accurate short- and long-term demand forecasts at the route and stop level.

## Local development

**Prerequisites:** Node.js 20+

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build
npm run serve    # preview the production build locally
```

## Project structure

```
docs/
├── intro.md                        # Project overview
├── research/
│   ├── background.md               # Literature review & theory
│   ├── research-gap.md             # Research gap & problem statement
│   ├── questions.md                # Research questions & objectives
│   └── methodology/                # Phase 1–4 methodology pages
├── data/
│   └── overview.md                 # Data sources & integration
├── methods/
│   ├── overview.md                 # Candidate methods comparison
│   ├── baselines.md
│   ├── machine-learning.md
│   ├── deep-learning.md
│   └── evaluation.md               # Evaluation protocol
└── progress.md                     # Timeline & current status
blog/                               # Progress update posts
.github/workflows/deploy.yml        # GitHub Actions deploy to GitHub Pages
```

## Deployment

Pushing to `main` automatically deploys to GitHub Pages via GitHub Actions. See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
