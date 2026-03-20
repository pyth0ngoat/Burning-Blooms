# 🎬 Visual Artist Portfolio

A dark-themed, cyberpunk-inspired portfolio website built for Animation, VFX, and Video Editing artists. Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion** — no backend required.

---

## ✨ What This Site Provides

- **Fullscreen Hero Section** — A cinematic landing page with bold typography, a scan-line animation effect, and a placeholder for a looping background showreel video.
- **Filterable Portfolio Grid** — A responsive grid of project thumbnails with category filters ("All", "Animation", "VFX Modeling", "Video Edits"). Hover over any card to reveal its title and category.
- **Project Detail Modal** — Click any project to open a smooth, animated modal showing an embedded video (YouTube/Vimeo), full description, tools used, and an optional image gallery.
- **About & Contact Section** — A brief bio, email link, and social media links (ArtStation, Instagram, LinkedIn).
- **Responsive Navigation** — A sticky navbar with smooth-scroll links to each section, plus a mobile hamburger menu.
- **Dark Mode Design** — Deep blacks with neon cyan accents, grid-line backgrounds, and glow effects for a premium cyberpunk aesthetic.
- **Buttery Animations** — Scroll-triggered reveals, layout transitions on filtering, and choreographed hero entrance — all powered by Framer Motion.

---

## 🗂️ Project Structure

```
src/
├── data/
│   └── projects.ts        ← 🔑 THE ONLY FILE YOU NEED TO EDIT
├── components/
│   ├── Navbar.tsx          ← Sticky navigation bar
│   ├── HeroSection.tsx     ← Fullscreen landing area
│   ├── PortfolioGrid.tsx   ← Filterable project grid
│   ├── ProjectModal.tsx    ← Project detail overlay
│   └── AboutContact.tsx    ← Bio, email, socials, footer
├── pages/
│   └── Index.tsx           ← Main page layout
└── index.css               ← Theme variables & custom styles
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Install & Run

```bash
# Clone the repo
git clone <your-repo-url>
cd <your-repo-folder>

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

---

## ✏️ How to Manage Your Projects

All project data lives in **one file**: `src/data/projects.ts`. You never need to touch the UI code.

### Adding a New Project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  id: "my-new-project",          // Unique, lowercase-kebab-case
  title: "My New Project",       // Display name
  category: "Animation",         // Must be: "Animation" | "VFX Modeling" | "Video Edits"
  thumbnail_url: "/thumbnails/my-project.jpg",  // Path or external URL
  video_embed_url: "https://www.youtube.com/embed/VIDEO_ID",  // YouTube/Vimeo embed URL, or "" for none
  description: "A detailed description of the project...",
  date: "2025",
  tools: ["Blender", "After Effects"],   // Optional
  gallery: ["/gallery/img1.jpg", "/gallery/img2.jpg"],  // Optional
}
```

Save the file — the site updates instantly in dev mode.

### Editing a Project

Find the project by its `id` in the array and change any field.

### Removing a Project

Delete the entire object (including the surrounding `{ }` and trailing comma) from the array.

### Data Schema Reference

| Field             | Type       | Required | Description                                                                 |
|-------------------|------------|----------|-----------------------------------------------------------------------------|
| `id`              | `string`   | ✅       | Unique identifier in `lowercase-kebab-case`                                |
| `title`           | `string`   | ✅       | Display title shown on cards and in the modal                              |
| `category`        | `Category` | ✅       | One of `"Animation"`, `"VFX Modeling"`, or `"Video Edits"`                 |
| `thumbnail_url`   | `string`   | ✅       | URL or path to the thumbnail image                                         |
| `video_embed_url` | `string`   | ✅       | YouTube/Vimeo **embed** URL (e.g., `https://www.youtube.com/embed/ID`). Use `""` if no video. |
| `description`     | `string`   | ✅       | Project description (can be multiple sentences)                            |
| `date`            | `string`   | ✅       | Display date (e.g., `"2024"` or `"Jan 2024"`)                             |
| `tools`           | `string[]` | ❌       | List of software/tools used                                                |
| `gallery`         | `string[]` | ❌       | Additional image URLs for the gallery section in the modal                 |

---

## 🖼️ Using Local Images

1. Place your thumbnail images in `public/thumbnails/`
2. Place gallery images in `public/gallery/`
3. Reference them with a leading `/`:

```ts
thumbnail_url: "/thumbnails/my-project.jpg",
gallery: ["/gallery/shot1.jpg", "/gallery/shot2.jpg"],
```

You can also use external URLs (Unsplash, Imgur, your own CDN, etc.).

---

## 🎥 Adding a Background Showreel

The hero section has a placeholder for a looping background video. To enable it:

1. Place your video file in the `public/` folder (e.g., `public/reel.mp4`)
2. Open `src/components/HeroSection.tsx`
3. Find the commented-out `<video>` tag and uncomment it:

```tsx
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
  <source src="/reel.mp4" type="video/mp4" />
</video>
```

Keep the video short (15–30s), compressed, and ideally under 10 MB for fast loading.

---

## 🎨 Customizing the Theme

### Accent Color

The neon accent color is defined in `src/index.css` as the `--primary` CSS variable. Change it to any HSL value:

```css
--primary: 180 100% 50%;   /* Cyan (default) */
--primary: 270 100% 60%;   /* Purple */
--primary: 120 100% 45%;   /* Green */
--primary: 35 100% 55%;    /* Orange */
```

### Fonts

Fonts are loaded via Google Fonts in `index.html`. The site uses three font families configured in `tailwind.config.ts`:

- `font-display` — Headings (default: **Orbitron**)
- `font-body` — Body text (default: **Inter**)
- `font-mono` — Labels & tags (default: **JetBrains Mono**)

To change a font, update the `<link>` in `index.html` and the font family in `tailwind.config.ts`.

---

## 📱 Responsive Design

The site is fully responsive:

- **Desktop** — 3-column portfolio grid, side-by-side About/Contact layout
- **Tablet** — 2-column grid, stacked sections
- **Mobile** — Single-column grid, hamburger nav menu, touch-friendly modal

---

## 🔧 Adding a New Category

1. Open `src/data/projects.ts`
2. Add your new category to the `Category` type:

```ts
export type Category = "Animation" | "VFX Modeling" | "Video Edits" | "Motion Graphics";
```

3. Add it to the `categories` array at the bottom of the file:

```ts
export const categories: Category[] = ["Animation", "VFX Modeling", "Video Edits", "Motion Graphics"];
```

4. Use the new category in any project. The filter button appears automatically.

---

## 🌐 Deployment

This is a static site — deploy anywhere that serves HTML:

| Platform      | Command / Notes                                           |
|---------------|-----------------------------------------------------------|
| **Netlify**   | Connect repo → auto-deploys on push. Build: `npm run build`, dir: `dist` |
| **Vercel**    | Connect repo → auto-deploys. Framework: Vite              |
| **GitHub Pages** | Use `gh-pages` package or GitHub Actions to deploy `dist/` |
| **Any server** | Upload the contents of `dist/` to your web root           |

---

## 🛠️ Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| React 18         | UI framework                     |
| Vite             | Build tool & dev server          |
| Tailwind CSS     | Utility-first styling            |
| Framer Motion    | Animations & transitions         |
| TypeScript       | Type safety                      |
| Lucide React     | Icons                            |
| React Router     | Client-side routing              |

---

## 📄 License

This project is yours to use and customize freely. No attribution required.
