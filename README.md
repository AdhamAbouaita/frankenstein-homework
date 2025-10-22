# Romanticism × Frankenstein Portfolio

A multi-page React experience inspired by the Apple design language that fulfils the Learner Portfolio assignment on Romanticism and Mary Shelley’s *Frankenstein*. The site is ready to deploy to Vercel and delivers:

- a historical timeline translating key Romantic milestones into interactive storytelling
- textual analysis cards that map Romantic ideals directly onto the novel
- a reflective studio page documenting creative process and personal insights

## Getting Started

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default. Hot Module Replacement is enabled for rapid iteration.

## Production Build

```bash
npm run build
npm run preview   # optional: serve the production build locally
```

The optimized output is emitted to the `dist` directory, ready for Vercel or any static hosting platform.

## Project Structure

- `src/components/RootLayout.jsx` &mdash; global navigation, footer, and scroll-to-top behavior
- `src/pages/Home.jsx` &mdash; hero overview and assignment framing
- `src/pages/Timeline.jsx` &mdash; Romanticism milestones and throughlines
- `src/pages/Connections.jsx` &mdash; close readings that bridge the novel and the movement
- `src/pages/Reflection.jsx` &mdash; creative reflection and portfolio-ready insights

Global styling lives in `src/index.css`, which provides gradients, glassmorphism, and hover animations for a polished UI/UX reminiscent of Apple product reveals.
