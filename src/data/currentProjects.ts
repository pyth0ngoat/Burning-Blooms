// ============================================================
// 🔥 CURRENT PROJECTS — auto-rotating banner on the home page.
// Edit / add / remove entries; the banner auto-cycles every 3s.
// ============================================================
import shortfilmThumb from "@/assets/shortfilm.jpeg.asset.json";
import vfxThumb from "@/assets/vfx_cgi.jpeg.asset.json";
import modelingThumb from "@/assets/3d_modeling.jpeg.asset.json";
import commercialsThumb from "@/assets/videoediting_showreel.jpeg.asset.json";

export interface CurrentProject {
  id: string;
  title: string;
  tag: string;
  blurb: string;
  imageUrl: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

const currentProjects: CurrentProject[] = [
  {
    id: "cp-1",
    title: "Untitled Feature — In Post",
    tag: "Now shooting",
    blurb: "A slow-burn drama exploring memory and place. Currently in the color suite.",
    imageUrl: shortfilmThumb.url,
    ctaLabel: "Follow the journey",
    ctaUrl: "https://www.instagram.com/the_burning_blooms",
  },
  {
    id: "cp-2",
    title: "Ember Forest — CG Sequence",
    tag: "In production",
    blurb: "A hybrid live-action / CGI piece — full compositing pipeline underway.",
    imageUrl: vfxThumb.url,
  },
  {
    id: "cp-3",
    title: "Poppy Cottage — Environment",
    tag: "Modeling",
    blurb: "Stylized story-book environment built in Blender with hand-textured materials.",
    imageUrl: modelingThumb.url,
  },
  {
    id: "cp-4",
    title: "Brand Showreel 2026",
    tag: "Editing",
    blurb: "Rhythm-cut commercial reel of the past year's brand & product work.",
    imageUrl: commercialsThumb.url,
  },
];

export default currentProjects;
