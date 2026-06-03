# RAMTEJA Constructions

RAMTEJA Constructions is a React and Vite website for a construction and integrated development company. The site includes company information, services, projects, pricing, products, blogs, and contact pages.

## Features

- Responsive React single-page application
- Client-side routing with React Router
- Home, About, Services, Projects, Pricing, Blogs, Products, and Contact pages
- Reusable layout and section components
- Webflow-inspired styling and bundled static assets

## Tech Stack

- React
- Vite
- React Router DOM
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
public/          Static images, fonts, scripts, and media
src/
  components/   Shared UI sections and layout components
  pages/        Route-level pages
  hooks/        Custom React hooks
  css/          Imported site styling
```

## Routes

- `/` - Home
- `/about` - About
- `/service` - Services
- `/project` - Projects
- `/pricing` - Pricing
- `/blogs` - Blogs
- `/contact` - Contact
- `/product-page` - Products
- `/product/:id` - Product detail

## Deployment

This project can be deployed to any static hosting provider that supports Vite builds. Build output is generated in the `dist/` folder.
