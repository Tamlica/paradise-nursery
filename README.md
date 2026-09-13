# Paradise Nursery

A frontend shopping app for browsing houseplants and managing a shopping cart, built as the Coursera/IBM "Paradise Nursery" capstone project.

## Features

- **Landing page** — background image, company blurb, and a "Get Started" button into the store
- **Product listing page** — 18 plants across three categories (Succulents, Air-Purifying, Aromatic), each with a thumbnail, name, price, and an Add to Cart button that disables once added
- **Shopping cart page** — per-item quantity controls, delete, running totals, a "Coming Soon" checkout, and a link back to the product listing
- A header with live navigation and a cart icon that updates its item count in real time

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) for cart state
- [React Router](https://reactrouter.com/) (`HashRouter`, for static hosting on GitHub Pages)
- Plain CSS

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically http://localhost:5173).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production into `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint

## Deployment

The app is configured with a relative Vite `base` and uses `HashRouter`, so the production build in `dist/` can be deployed as-is to GitHub Pages or any static host without extra rewrite rules.
