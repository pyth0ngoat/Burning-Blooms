// ============================================================
// 📁 PROJECTS DATA FILE
// ============================================================
// This is the ONLY file you need to edit to manage your portfolio.
// Add, edit, or remove projects below. The website will
// automatically update to reflect your changes.
//
// See README.md for detailed instructions on how to use this file.
// ============================================================

export type Category = "Animation" | "VFX Modeling" | "Video Edits";

export interface Project {
  /** Unique identifier — use lowercase-kebab-case (e.g., "my-project") */
  id: string;
  /** Display title shown on the card and detail page */
  title: string;
  /** Must be one of: "Animation" | "VFX Modeling" | "Video Edits" */
  category: Category;
  /** Path to thumbnail image (place images in public/thumbnails/) */
  thumbnail_url: string;
  /** YouTube or Vimeo embed URL (use the /embed/ format). Leave empty string if none. */
  video_embed_url: string;
  /** Project description — supports multiple paragraphs as a single string */
  description: string;
  /** Date string shown on the project detail (e.g., "2024") */
  date: string;
  /** Optional list of tools/software used */
  tools?: string[];
  /** Optional additional gallery image URLs */
  gallery?: string[];
}

// ============================================================
// ✏️  EDIT YOUR PROJECTS BELOW
// ============================================================

const projects: Project[] = [
  {
    id: "neon-genesis",
    title: "Neon Genesis",
    category: "Animation",
    thumbnail_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    video_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A futuristic short animation exploring neon-lit cityscapes and the boundary between the organic and the synthetic. Created entirely in Blender with post-processing in After Effects. The project pushed the limits of real-time rendering and volumetric lighting to achieve a cinematic cyberpunk atmosphere.",
    date: "2024",
    tools: ["Blender", "After Effects", "DaVinci Resolve"],
  },
  {
    id: "fractured-realms",
    title: "Fractured Realms",
    category: "VFX Modeling",
    thumbnail_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    video_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A VFX breakdown showcasing photorealistic environment modeling for a fantasy short film. The project involved creating detailed digital matte paintings, integrating 3D assets into live-action footage, and simulating realistic destruction effects using Houdini.",
    date: "2024",
    tools: ["Houdini", "Maya", "Nuke", "Substance Painter"],
  },
  {
    id: "pulse-montage",
    title: "Pulse Montage",
    category: "Video Edits",
    thumbnail_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    video_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A high-energy music video edit combining rapid cuts, dynamic transitions, and color grading to match the rhythm and mood of an electronic music track. Every beat is synced to a visual event, creating a hypnotic viewing experience.",
    date: "2023",
    tools: ["Premiere Pro", "After Effects"],
  },
  {
    id: "chrome-horizon",
    title: "Chrome Horizon",
    category: "Animation",
    thumbnail_url: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80",
    video_embed_url: "",
    description:
      "A looping 3D animation of a surreal chrome landscape that morphs and shifts endlessly. Inspired by liquid metal aesthetics and retro-futurism. This piece was exhibited at a digital art gallery and rendered using Cinema 4D with Octane Renderer.",
    date: "2023",
    tools: ["Cinema 4D", "Octane Render", "After Effects"],
  },
];

export default projects;

// ============================================================
// 💡 CATEGORIES — used for the filter buttons
// ============================================================
export const categories: Category[] = ["Animation", "VFX Modeling", "Video Edits"];
