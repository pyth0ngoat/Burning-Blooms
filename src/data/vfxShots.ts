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
  {
    id: "field-of-fire",
    title: "Field of Fire",
    description:
      "Live plate of an empty field transformed into a burning inferno at dusk — full CG fire simulation, sky replacement, ember particles and atmospheric relight.",
    beforeUrl: before1.url,
    afterUrl: after1.url,
    tools: ["Houdini", "Nuke", "After Effects"],
  },
  // 👉 Add more before/after shots below by duplicating this block.
  //    Upload new images through Lovable Assets and import them at the top.
];

export default vfxShots;
