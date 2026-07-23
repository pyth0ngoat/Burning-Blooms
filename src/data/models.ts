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
    id: "Futuristic-Rifle",
    title: "Futuristic Rifle",
    description:
      "A stylised story-book cottage. Hand-textured materials, painterly lighting, and a fully modular kit-bash build in Blender.",
    modelUrl: "/3d_models/Futuristic_Rifle.glb",
    renders:  [
      "/renders/rifle/rifle_render_1.jpeg",
      "/renders/rifle/rifle_render_2.jpeg",
      "/renders/rifle/rifle_render_3.jpeg",
      "/renders/rifle/rifle_render_4.jpeg",
    ],
  },
  {
    id: "ember-armor",
    title: "Turtle",
    description:
      "Hero prop for a short film — hard-surface modelling with substance-painted PBR materials and animated ember shader passes.",
    modelUrl: "/3d_models/Turtle.glb",
    renders: [
      "/renders/turtle/Turtle_4K_04.jpg",
      "/renders/turtle/Turtle_4K_02.jpg",
      "/renders/turtle/Turtle_4K_03.jpg",
      "/renders/turtle/Turtle_4K_01.jpg",
    ],
  },
  {
    id: "night-market",
    title: "Goblin",
    description:
      "Environment vignette built for a moody nighttime lighting test. Modular signage, hand-painted textures, volumetric fog.",
    modelUrl: "/3d_models/GOBLIN.glb",
    renders: [
      "/renders/goblin/goblin_1.jpeg", 
      "/renders/goblin/goblin_2.jpeg", 
      "/renders/goblin/goblin_3.jpeg", 
      "/renders/goblin/goblin_4.jpeg"
    ],
  },
  {
    id: "ceramic-still-life",
    title: "Ceramic Still Life",
    description:
      "Studio product-style render of hand-sculpted ceramics. Focused on subsurface, glaze breakup, and micro-scratch detail.",
    modelUrl: "/3d_models/Cabin.glb",
    renders: [
      "/renders/cabin/Wooden_Cabin_1.jpeg", 
      "/renders/cabin/Wooden_Cabin_2.jpeg", 
      "/renders/cabin/Wooden_Cabin_3.jpeg", 
      "/renders/cabin/Wooden_Cabin_4.jpeg" 
    ],
  },
  {
    id: "jetpack",
    title: "JetPack",
    description:
      "Overgrown shrine environment — sculpted stone, scattered foliage, and a full lighting pass in Cycles.",
    modelUrl: "/3d_models/Jetpack.glb",
    renders: [
      "/renders/jetpack/Jetpack_render_1.jpeg", 
      "/renders/jetpack/Jetpack_render_2.jpeg", 
      "/renders/jetpack/Jetpack_render_3.jpeg", 
      "/renders/jetpack/Jetpack_render_4.jpeg" 
    ],
  },
];

export default modelShowcases;
