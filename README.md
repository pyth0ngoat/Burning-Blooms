# Burning Blooms — Portfolio Site

A static, no-backend portfolio site for **Burning Blooms** — a studio for
Shortfilms, VFX & CGI, 3D Modelling, Graphic Design, and Commercials.

Everything on the site is driven by **two data files** and a handful of
images. No database, no CMS, no code changes needed for day-to-day updates.

---

## 1. What each section shows

| Section          | Where it comes from                                                     |
| ---------------- | ----------------------------------------------------------------------- |
| Site logo / tab  | `src/assets/bb_logo.png.asset.json` (nav) + `public/favicon.png` (tab)  |
| Hero video       | `public/reel.mp4` (background reel behind the "Burning Blooms" title)   |
| Our Work tiles   | `categoryThumbnails` in `src/data/projects.ts` (2-up grid on desktop)   |
| Project modal    | `projects` array in `src/data/projects.ts` (opens on tile click)        |
| 3D Modelling     | `src/data/models.ts` — horizontal-swipe 3D showcase (see §3)            |
| Socials strip    | `socials` array in `src/components/HeroSection.tsx`                     |
| Contact / mail   | `src/components/AboutContact.tsx`                                       |

---

## 2. Projects — `src/data/projects.ts`

Add / edit / remove projects here. Each entry:

```ts
{
  id: "colors-of-what-was",              // unique, lowercase-kebab-case
  title: "The Colors of What Was",       // shown in the project modal
  category: "Shortfilms",                 // MUST be one of the 5 categories
  thumbnail_url: shortfilmThumb.url,      // image shown inside the modal
  video_embed_url: "https://www.youtube.com/embed/XXXX", // "" if none
  description: "…",
  date: "2024",
  tools: ["DaVinci Resolve", "Premiere Pro"], // optional
}
```

Valid categories (exact spelling, case-sensitive):

```
"Shortfilms" | "VFX & CGI" | "3D Modelling" | "Graphic Design" | "Commercials"
```

Clicking a tile opens the **first project in that category** — except
**"3D Modelling"**, which opens the 3D showcase modal (see §3). To feature
something new under, say, "VFX & CGI", put it at the top of the array.

### Tile thumbnails — `src/assets/`

| Tile           | File to replace                                    |
| -------------- | -------------------------------------------------- |
| Shortfilms     | `src/assets/shortfilm.jpeg.asset.json`             |
| VFX & CGI      | `src/assets/vfx_cgi.jpeg.asset.json`               |
| 3D Modelling   | `src/assets/3d_modeling.jpeg.asset.json`           |
| Graphic Design | `src/assets/graphic_designing.jpeg.asset.json`     |
| Commercials    | `src/assets/videoediting_showreel.jpeg.asset.json` |

**Tiles have no text overlay** — bake the category title into the image
itself. To swap: upload a new image via the Lovable UI at the same file
path; the URL updates automatically.

---

## 3. 3D Modelling showcase — `src/data/models.ts`

Clicking the **3D Modelling** tile opens a full-screen modal with a
horizontally-swipeable carousel. Each slide has:

- an **interactive 3D model** (drag to orbit, scroll to zoom) on the left
- **4 static high-quality render images** stacked on the right
- title + description
- navigation via arrow buttons, ← / → keys, swipe, or dot indicators

Add / remove slides freely — the carousel updates automatically.

```ts
{
  id: "poppy-cottage",
  title: "Poppy Cottage",
  description: "…",
  modelUrl: "/models/poppy-cottage.glb", // "" => stylised placeholder mesh
  modelScale: 1,                          // optional
  renders: [                              // EXACTLY 4 images
    "/renders/poppy-1.png",
    "/renders/poppy-2.png",
    "/renders/poppy-3.png",
    "/renders/poppy-4.png",
  ],
}
```

### Where to put the files

- **3D models**: drop `.glb` / `.gltf` files into `public/models/` and set
  `modelUrl: "/models/yourfile.glb"`. `.glb` is strongly recommended
  (smaller, single-file, materials + textures embedded).
- **Render images**: drop PNG/JPGs into `public/renders/` and reference as
  `"/renders/yourfile.png"`. High-res is fine — they're lazy-loaded.
- **No model yet?** Leave `modelUrl: ""` and a placeholder mesh renders in
  its place so the slide still works.

### Add a new 3D slide
Open `src/data/models.ts`, copy any entry in the `modelShowcases` array,
change the `id`, `title`, `modelUrl`, and the 4 `renders`. Save.

### Remove a slide
Delete its object from the `modelShowcases` array.

### Reorder slides
Reorder the objects in the array — that's the order in the carousel.

---

## 4. Common tasks

### Add a new project
Edit `src/data/projects.ts` and add to the `projects` array.

### Change the featured project for a tile
Move the project to the **top** of the array (within its category).

### Change a tile image
Replace the file at the path listed in the table in §2.

### Change the hero background video
Replace `public/reel.mp4` with your own MP4 (same filename).

### Change the logo / favicon
- Nav logo: replace `src/assets/bb_logo.png.asset.json` (upload via UI).
- Browser tab icon: replace `public/favicon.png`.

### Change social links
Edit the `socials` array at the top of `src/components/HeroSection.tsx`.

### Change the contact email
Edit `src/components/AboutContact.tsx` — search for `mailto:`.

---

## 5. Categories cheat-sheet

If you ever add / rename a category, three spots in
`src/data/projects.ts` must agree:

1. the `Category` union type
2. the `categories` array (drives tile order)
3. the `categoryThumbnails` object (image per tile)

The "Our Work" grid is 2 columns on desktop, 1 on mobile — no layout
changes needed when the number of tiles changes.

---

## 6. Running locally (optional)

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```

That's it. Edit the data files → the site updates. No backend, ever.
