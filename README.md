# TRYONYOU frontend

Peacock + mirror lockup blended on cream. Maison de haute mesure numérique.

**Live source we restyled:** [Tryonme-com/tryonyou-app](https://github.com/Tryonme-com/tryonyou-app)  
**This repo** is the drop-in front (the original `LVT-ENG/tryonyou-app` URL 404s; no write access on Tryonme-com).

## Open the page

Open [`index.html`](index.html) locally, or serve the folder:

```bash
python3 -m http.server 8765
```

## What changed

- White box around the logo removed (true alpha)
- Header uses the horizontal lockup (peacock + mirror + TryOnYou), not the isolated T
- Hero: peacock sits in the scene under the product mirror
- Palette: cream `#F6F1E8` · navy `#0B2233` · peacock `#0E5C7A` · gold `#C4A36A`

## Drop into the Vite app

```
public/brand/logo-header.png
public/brand/logo-mark.png
public/brand/favicon.png
src/components/BrandLogo.tsx
```

```tsx
import { BrandLogo } from "./components/BrandLogo";

<a href="/" aria-label="TryOnYou">
  <BrandLogo variant="header" height={48} />
</a>
```

On navy/dark footers set `mixBlendMode: "normal"`.
