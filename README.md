# Briefly Docs - Next.js Version

This is the Next.js version of the Briefly Docs landing page.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - React components
- `/public` - Static assets (images, favicons, etc.)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Migration Notes

This is a Next.js migration of the React Router version (V1). Key changes:

- Uses Next.js App Router instead of React Router
- Components marked with `'use client'` for client-side interactivity (GSAP, useState, etc.)
- Routes are file-based in the `/app` directory
- Uses Next.js `Link` component instead of React Router `Link`
- Uses Next.js `Image` component for optimized images (can be implemented)

