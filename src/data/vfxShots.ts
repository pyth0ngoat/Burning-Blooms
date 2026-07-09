// ============================================================
// 🎬 VFX / CGI BEFORE-AFTER SHOTS
// ============================================================
// Each entry becomes one before/after comparison slide inside
// the "VFX & CGI" modal. Add or remove entries freely.
//
// For each shot provide:
//   - title, description
//   - beforeUrl : the raw / plate image
//   - afterUrl  : the final composited / CG image
//   - tools     : optional list of software used
// ============================================================

import before1 from "@/assets/vfx_before_1.jpg.asset.json";
import after1 from "@/assets/vfx_after_1.jpg.asset.json";

export interface VfxShot {
  id: string;
  title: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
  tools?: string[];
}

const vfxShots: VfxShot[] = [
  //    Add more before/after shots below by duplicating this block.
  //    Upload new images through Lovable Assets and import them at the top.
  {
    id: "Keying",
    title: "Chroma Keying",
    description:
      "Studio green screen plate of an embracing couple transformed into a warm, detailed interior — clean chroma key extraction, tracking marker removal, background integration, and precise edge light wrapping.",
    beforeUrl: "/vfx_images/Keying_before.jpeg",
    afterUrl: "/vfx_images/Keying_after.jpeg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },

    {
    id: "Spaceship",
    title: "CG Spaceship Compositing",
    description:
      "Live aerial plate of a barren desert transformed into an otherworldly sci-fi outpost at sunset — full CG spaceship and architecture integration, dramatic sky replacement, and heavy environmental color grading.",
    beforeUrl: "/vfx_images/spaceship_before.jpeg",
    afterUrl: "/vfx_images/spaceship_after.jpeg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },


  {
    id: "field-of-fire",
    title: "CG Fire Integration",
    description:
      "Live plate of an empty field transformed into a burning inferno at dusk — full CG fire simulation, sky replacement, ember particles and atmospheric relight.",
    beforeUrl: "/vfx_images/before_1.jpg",
    afterUrl: "/vfx_images/after_1.jpg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },



  {
    id: "CG-Character-Compositing",
    title: "CG Character Compositing",
    description:
      "Studio green screen plate transformed into a cinematic jungle encounter — full CG creature integration, complete environment replacement, and atmospheric relight",
    beforeUrl: "/vfx_images/gorilla_before.jpg",
    afterUrl: "/vfx_images/gorilla_after.jpg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },

  {
    id: "CG-Character-Integration",
    title: "CG Character Integration",
    description:
      "Live plate of an empty pathway at night transformed into a moody creature encounter — CG character integration, 3D ground cracking simulation, atmospheric particle effects, and cinematic color grading.",
    beforeUrl: "/vfx_images/character_int_before.jpeg",
    afterUrl: "/vfx_images/character_int_after.jpeg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },

  {
    id: "CG-Live-Action",
    title: "CGI + Live Action Integration",
    description:
      "Daylight forest plate transformed into a surreal, golden-hour dreamscape — dramatic sky replacement, glowing magical particle simulations, and atmospheric color relighting.",
    beforeUrl: "/vfx_images/sky_before.jpg",
    afterUrl: "/vfx_images/sky_after.jpg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },

  {
    id: "Screen-Replacement",
    title: "Screen Replacement",
    description:
      "Live plate of a smartphone green screen transformed into an active social media interface — precision planar tracking, digital screen insertion, and seamless thumb occlusion.",
    beforeUrl: "/vfx_images/screen_replacement_before.jpeg",
    afterUrl: "/vfx_images/screen_replacement_after.jpeg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },
  



];

export default vfxShots;
