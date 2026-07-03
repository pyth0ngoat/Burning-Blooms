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
  // Commercials — swap to your own "video editing showreel" thumbnail here.
  Commercials:
    "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=1600&q=80",
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
    video_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A meditative short film about memory, place, and the quiet weight of what we leave behind. Shot on location over four days with a small ensemble cast.",
    date: "2024",
    tools: ["DaVinci Resolve", "Premiere Pro"],
  },
  {
    id: "ember-forest",
    title: "Ember Forest",
    category: "VFX & CGI",
    thumbnail_url: vfxThumb.url,
    video_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A live-action / CGI hybrid piece exploring an artist alone in a forest that slowly comes alive around them. Full compositing pipeline in Nuke.",
    date: "2024",
    tools: ["Nuke", "Houdini", "After Effects"],
  },
  {
    id: "poppy-cottage",
    title: "Poppy Cottage",
    category: "3D Modelling",
    thumbnail_url: modelingThumb.url,
    video_embed_url: "",
    description:
      "A stylized cottage environment built in Blender with hand-textured materials and painterly lighting inspired by classic story-book illustration.",
    date: "2024",
    tools: ["Blender", "Substance Painter"],
  },
  {
    id: "king-deals",
    title: "King Deals — Social Campaign",
    category: "Graphic Design",
    thumbnail_url: graphicThumb.url,
    video_embed_url: "",
    description:
      "A social-first campaign of bold typographic posters and product-forward compositions for a quick-service restaurant brand refresh.",
    date: "2023",
    tools: ["Photoshop", "Illustrator"],
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
