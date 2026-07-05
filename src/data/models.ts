// ============================================================
// 🗿 3D MODEL SHOWCASE DATA
// ============================================================
// Each entry becomes one horizontally-swipeable slide inside the
// "3D Modelling" modal. Add/remove entries freely — the carousel
// updates automatically.
//
// For each showcase you provide:
//  - title / description
//  - modelUrl:  a .glb / .gltf file URL (leave "" to use a stylised
//               placeholder mesh so the slide still works)
//  - renders:   exactly 4 high-quality image URLs shown stacked
//               on the right side (static PNG/JPG)
// ============================================================

export interface ModelShowcase {
  id: string;
  title: string;
  description: string;
  modelUrl: string;         // "" => procedural placeholder
  modelScale?: number;      // optional scale multiplier
  renders: [string, string, string, string]; // exactly 4 images
}

// Placeholder render — swap with your actual high-res PNGs.
const ph = (seed: string) =>
  `https://picsum.photos/seed/${seed}/900/900`;

const modelShowcases: ModelShowcase[] = [
  {
    id: "poppy-cottage",
    title: "Futuristic Rifle",
    description:
      "A stylised story-book cottage. Hand-textured materials, painterly lighting, and a fully modular kit-bash build in Blender.",
    modelUrl: "/3d_models/Futuristic_Rifle.gltf",
    renders: [ph("cottage1"), ph("cottage2"), ph("cottage3"), ph("cottage4")],
  },
  {
    id: "ember-armor",
    title: "Turtle",
    description:
      "Hero prop for a short film — hard-surface modelling with substance-painted PBR materials and animated ember shader passes.",
    modelUrl: "/3d_models/Turtle.glb",
    renders: [
      "/renders/turtle/Turtle_4K_01.jpg",
      "/renders/turtle/Turtle_4K_02.jpg",
      "/renders/turtle/Turtle_4K_03.jpg",
      "/renders/turtle/Turtle_4K_04.jpg",
    ],
  },
  {
    id: "night-market",
    title: "Night Market Stall",
    description:
      "Environment vignette built for a moody nighttime lighting test. Modular signage, hand-painted textures, volumetric fog.",
    modelUrl: "",
    renders: [ph("market1"), ph("market2"), ph("market3"), ph("market4")],
  },
  {
    id: "ceramic-still-life",
    title: "Ceramic Still Life",
    description:
      "Studio product-style render of hand-sculpted ceramics. Focused on subsurface, glaze breakup, and micro-scratch detail.",
    modelUrl: "",
    renders: [ph("ceramic1"), ph("ceramic2"), ph("ceramic3"), ph("ceramic4")],
  },
  {
    id: "forest-shrine",
    title: "Forest Shrine",
    description:
      "Overgrown shrine environment — sculpted stone, scattered foliage, and a full lighting pass in Cycles.",
    modelUrl: "",
    renders: [ph("shrine1"), ph("shrine2"), ph("shrine3"), ph("shrine4")],
  },
];

export default modelShowcases;
