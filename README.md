# Burning Blooms — Portfolio Site

A static, no-backend portfolio site for **Burning Blooms** — a studio for
Shortfilms, VFX & CGI, 3D Modelling, Graphic Design, and Commercials.

Everything on the site is driven by **one data file** and **five thumbnail
images**. No database, no CMS, no code changes needed for day-to-day updates.

---

## 1. What each section shows

| Section        | Where it comes from                                              |
| -------------- | ---------------------------------------------------------------- |
| Hero video     | `public/reel.mp4` (background reel behind the "Burning Blooms" title) |
| Our Work tiles | `categoryThumbnails` in `src/data/projects.ts`                   |
| Project modal  | `projects` array in `src/data/projects.ts` (opens on tile click) |
| Socials strip  | `socials` array in `src/components/HeroSection.tsx`              |
| Contact / mail | `src/components/AboutContact.tsx`                                |

---

## 2. The two things you'll actually edit

### A. The data file — `src/data/projects.ts`
Add / edit / remove projects here. Each entry looks like:

```ts
{
  id: "colors-of-what-was",              // unique, lowercase-kebab-case
  title: "The Colors of What Was",       // shown in the project modal
  category: "Shortfilms",                 // MUST be one of the 5 categories
  thumbnail_url: shortfilmThumb.url,      // image shown inside the modal
  video_embed_url: "https://www.youtube.com/embed/XXXX", // "" if none
  description: "…",                       // any length, plain text
  date: "2024",
  tools: ["DaVinci Resolve", "Premiere Pro"], // optional
}
```

Valid categories (exact spelling, case-sensitive):

```
"Shortfilms" | "VFX & CGI" | "3D Modelling" | "Graphic Design" | "Commercials"
```

Clicking a tile in the "Our Work" grid opens the **first project in that
category**. So to feature something new under, say, "VFX & CGI", put it at the
top of the array.

### B. The 5 tile thumbnails — `src/assets/`
The big tiles in the "Our Work" section use these files:

| Tile           | File to replace                                    |
| -------------- | -------------------------------------------------- |
| Shortfilms     | `src/assets/shortfilm.jpeg.asset.json`             |
| VFX & CGI      | `src/assets/vfx_cgi.jpeg.asset.json`               |
| 3D Modelling   | `src/assets/3d_modeling.jpeg.asset.json`           |
| Graphic Design | `src/assets/graphic_designing.jpeg.asset.json`     |
| Commercials    | `src/assets/videoediting_showreel.jpeg.asset.json` |

**The tiles have no text overlay** — the site displays the image as-is, so
bake the category title into the image itself (as the current thumbnails do).

To swap a thumbnail: upload a new image via the Lovable UI at the same file
path — the URL in the `.asset.json` pointer will update automatically. You do
not need to edit any code.

---

## 3. Common tasks

### Add a new project
Open `src/data/projects.ts` and add a new object to the `projects` array.
Copy an existing entry as a template. Save the file — the site updates.

### Change the featured project for a tile
Move the project you want featured to the **top** of the `projects` array
(within its category). The tile always opens the first match.

### Change a tile image
Replace the image file at the path listed in the table above.

### Change the hero background video
Replace `public/reel.mp4` with your own MP4 (same filename).

### Change social links
Edit the `socials` array at the top of `src/components/HeroSection.tsx`.

### Change the contact email
Edit `src/components/AboutContact.tsx` — search for `mailto:` and update.

---

## 4. Categories cheat-sheet

If you ever need to add / rename a category, three files must agree:

1. `src/data/projects.ts` → the `Category` union type
2. `src/data/projects.ts` → the `categories` array (drives the tile order)
3. `src/data/projects.ts` → the `categoryThumbnails` object (image per tile)

Also update the bento layout spans in
`src/components/PortfolioGrid.tsx` if the number of tiles changes from 5.

---

## 5. Running locally (optional)

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```

That's it. Edit the data file → the site updates. No backend, ever.
