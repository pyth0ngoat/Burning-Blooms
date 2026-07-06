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
    id: "CG-Live-Action",
    title: "CGI + Live Action Integration",
    description:
      "Daylight forest plate transformed into a surreal, golden-hour dreamscape — dramatic sky replacement, glowing magical particle simulations, and atmospheric color relighting.",
    beforeUrl: "/vfx_images/sky_before.jpg",
    afterUrl: "/vfx_images/sky_after.jpg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },

  {
    id: "Frame-Replacement",
    title: "Frame Replacement",
    description:
      "Live plate of a moody ballerina painting transformed into a child's family drawing — seamless planar tracking, digital artwork replacement, and precise lighting integration.",
    beforeUrl: "/vfx_images/frame_before.jpg",
    afterUrl: "/vfx_images/frame_after.jpg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },

  {
    id: "Roto-Paint",
    title: "Roto Paint",
    description:
      "Live plate of a graffiti-covered wall transformed into a pristine concrete surface — precision roto paint, seamless texture reconstruction, and accurate planar tracking.",
    beforeUrl: "/vfx_images/paint_before.jpg",
    afterUrl: "/vfx_images/paint_after.jpg",
    tools: ["Houdini", "Nuke", "After Effects"],
  },


];

export default vfxShots;
