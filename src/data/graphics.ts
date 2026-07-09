// ============================================================
// 🎨 GRAPHIC DESIGN POSTERS
// ============================================================
// Add / remove / reorder posters here. The Graphic Design
// showcase (a curved, scrollable poster gallery) reads from
// this list.
//
// To add a poster:
//   1. Upload the image (via Lovable assets or /public).
//   2. Import the asset JSON pointer below.
//   3. Add an entry to the `graphics` array.
// ============================================================

export interface GraphicPoster {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  year?: string;
}

// Using existing category thumbnail as a placeholder so the
// gallery renders out of the box. Replace with real posters.
import placeholder from "@/assets/graphic_designing.jpeg.asset.json";

const graphics: GraphicPoster[] = [
{
    id: "poster-1",
    title: "The Final Render - Shortfilm Poster",
    imageUrl: "/graphic_posters/1.jpg",
    description: "An official promotional poster for the award-winning short film The Final Render, featuring a striking, high-contrast red lit portrait that captures the dark, psychological tone of the project..",
    year: "2025",
  },
  {
    id: "poster-2",
    title: "The Last Photograph - Shortfilm Poster",
    imageUrl: "/graphic_posters/2.jpg",
    description: "An official promotional poster for the short film The Last Photograph, featuring a compelling vertical slice distortion effect across a warm, grain-textured portrait to convey a fractured, psychological mystery aesthetic.",
    year: "2025",
  },
  {
    id: "poster-3",
    title: "Relocation No. 396 - Shortfilm Poster A",
    imageUrl: "/graphic_posters/3.jpg",
    description: "An official theatrical poster for the short film Relocation No. 396, featuring a dramatic keyhole cutout effect that seamlessly integrates a tense, close-up character portrait with an isolated landscape to emphasize a thriller aesthetic.",
    year: "2025",
  },
  {
    id: "poster-4",
    title: "Relocation No. 396 - Shortfilm Poster B",
    imageUrl: "/graphic_posters/4.jpg",
    description: "A promotional poster variant for the short film Relocation No. 396, utilizing a striking double-exposure effect that blends character portraiture with architectural elements to evoke a cold, high-concept Sci-Fi mystery aesthetic.",
    year: "2025",
  },
  {
    id: "poster-5",
    title: "The Colors of What Was - Shortfilm Poster",
    imageUrl: "/graphic_posters/5.jpg",
    description: "An official promotional poster for the short film The Colors of What Was, featuring a creative watercolor-on-canvas effect that blends an artist at work with a nostalgic, warm portrait to evoke a heartfelt romantic drama aesthetic.",
    year: "2026",
  },
  {
    id: "poster-6",
    title: "The Colors of What Was - Shortfilm Thumbnail",
    imageUrl: "/graphic_posters/6.jpg",
    description: "An official YouTube thumbnail design for the short film The Colors of What Was, featuring a dynamic character portrait grid bathed in warm, cinematic golden hour lighting to establish an emotional, narrative-driven tone.",
    year: "2026",
  },
  {
    id: "poster-7",
    title: "Magazine Cover Design",
    imageUrl: "/graphic_posters/7.jpg",
    description: "A conceptual entertainment magazine cover design titled Invincible, utilizing a textured, torn-paper layout and high-contrast red accents to celebrate the cinematic legacy of Robert Downey Jr.",
    year: "2026",
  },
  {
    id: "poster-8",
    title: "Retro Vintage Style Poster",
    imageUrl: "/graphic_posters/8.jpeg",
    description: "The use of the grainy green texture, desaturated black-and-white photography, and distinct borders gives it a strong analog print aesthetic. It mimics the look of old-school magazine cutouts, screen prints, or risograph posters brought into the digital world.",
    year: "2025",
  },
  {
    id: "poster-9",
    title: "Burger King Instagram Post A",
    imageUrl: "/graphic_posters/9.jpg",
    description: "A commercial fast-food advertisement poster for Burger King, featuring a vibrant, high-detail product composite paired with bold typography and a warm color scheme to drive casual consumer engagement.",
    year: "2026",
  },
  {
    id: "poster-10",
    title: "Burger King Instagram Post B",
    imageUrl: "/graphic_posters/10.jpg",
    description: "A commercial promotional advertisement poster for Burger King India, featuring a crisp product shot of French fries on a rustic wooden board, dynamic repeating typography, and a textured orange background designed for social media marketing.",
    year: "2026",
  },
  {
    id: "poster-11",
    title: "Nike Air Force 1 '07 Commercial Poster",
    imageUrl: "/graphic_posters/11.jpg",
    description: "A commercial product advertisement poster for the Nike Air Force 1, featuring a clean product render layered with bold, high-contrast typography to capture a modern streetwear aesthetic.",
    year: "2024",
  }
];

export default graphics;
