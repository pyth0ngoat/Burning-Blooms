// ============================================================
// 📁 PROJECTS DATA FILE
// ============================================================
// This is the ONLY file you need to edit to manage your portfolio.
// Add, edit, or remove projects below. The website will
// automatically update to reflect your changes.
//
// See README.md for detailed instructions on how to use this file.
// ============================================================

import shortfilmThumb from "@/assets/shortfilm.jpeg.asset.json";
import vfxThumb from "@/assets/vfx_cgi.jpeg.asset.json";
import modelingThumb from "@/assets/3d_modeling.jpeg.asset.json";
import graphicThumb from "@/assets/graphic_designing.jpeg.asset.json";
import commercialsThumb from "@/assets/videoediting_showreel.jpeg.asset.json";

export type Category =
  | "Shortfilms"
  | "VFX & CGI"
  | "3D Modelling"
  | "Graphic Design"
  | "Commercials";

export interface Project {
  id: string;
  title: string;
  category: Category;
  thumbnail_url: string;
  video_embed_url: string;
  description: string;
  date: string;
  tools?: string[];
  gallery?: string[];
}

// ============================================================
// 🎨 CATEGORY THUMBNAILS — shown on the "Our Work" bento grid.
// Edit these to replace the big tile images.
// ============================================================
export const categories: Category[] = [
  "Shortfilms",
  "VFX & CGI",
  "3D Modelling",
  "Graphic Design",
  "Commercials",
];

export const categoryThumbnails: Record<Category, string> = {
  Shortfilms: shortfilmThumb.url,
  "VFX & CGI": vfxThumb.url,
  "3D Modelling": modelingThumb.url,
  "Graphic Design": graphicThumb.url,
  // Commercials — swap thumbnail in src/assets/videoediting_showreel.jpeg.asset.json
  Commercials: commercialsThumb.url,
};

// ============================================================
// ✏️  EDIT YOUR PROJECTS BELOW
// ============================================================

const projects: Project[] = [
  {
    id: "colors-of-what-was",
    title: "The Colors of What Was",
    category: "Shortfilms",
    thumbnail_url: shortfilmThumb.url,
    video_embed_url: "https://www.youtube.com/embed/rireWI_baDM",
    description:
      "A meditative short film about memory, place, and the quiet weight of what we leave behind. Shot on location over four days with a small ensemble cast.",
    date: "2026",
    tools: ["DaVinci Resolve", "Premiere Pro"],
  },
  {
      id: "wada-raha",
      title: "Wada Raha",
      category: "Shortfilms",
      thumbnail_url: shortfilmThumb.url,
      video_embed_url: "https://www.youtube.com/embed/FgYaYyaL3-U",
      description:
        "",
      date: "2026",
      tools: ["DaVinci Resolve", "Premiere Pro"],
  },

  {
      id: "Relocation",
      title: "Relocation No 396",
      category: "Shortfilms",
      thumbnail_url: shortfilmThumb.url,
      video_embed_url: "https://www.youtube.com/embed/IfM7Gu_X2s8",
      description:
        "",
      date: "2025",
      tools: ["DaVinci Resolve", "Premiere Pro"],
  },

  {
      id: "the-last-photograph",
      title: "The Last Photograph | Horror Shortfilm",
      category: "Shortfilms",
      thumbnail_url: shortfilmThumb.url,
      video_embed_url: "https://www.youtube.com/embed/G7wzZq8q4yw",
      description:
        "",
      date: "2025",
      tools: ["DaVinci Resolve", "Premiere Pro"],
  },

  {
      id: "final-render",
      title: "Final Render",
      category: "Shortfilms",
      thumbnail_url: shortfilmThumb.url,
      video_embed_url: "https://www.youtube.com/embed/5i8OVDuyu3k",
      description:
        "",
      date: "2025",
      tools: ["DaVinci Resolve", "Premiere Pro"],
  },

  {
    id: "showreel-2024",
    title: "Video Editing Showreel",
    category: "Commercials",
    thumbnail_url: categoryThumbnails.Commercials,
    video_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A high-energy commercial showreel — rhythm-cut brand spots, product films, and lifestyle stories crafted for scroll-stopping social delivery.",
    date: "2024",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
];

export default projects;
