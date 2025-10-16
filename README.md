# Personal Website

Next.js, Tailwind CSS, and shadcn/ui. Mostly meant to be a portfolio.

Hosted on GitHub Pages.

Permanent domain name is tianchengg.org.

## Images

- The `AspectImage` component (`components/ui/aspect-image.tsx`) to keeps image aspect ratios consistent.
- Props:
  - `ratio`: CSS aspect-ratio string like "16 / 9", "4 / 3", or "1 / 1" (default is "16 / 9").
  - `wrapperClassName` and `imageClassName` for styling.
  - Accepts `children` to render overlays (e.g., captions on hover).
- Pages `app/projects/page.tsx` and `app/cooking/page.tsx` use `AspectImage`; the cooking gallery uses a responsive grid.
