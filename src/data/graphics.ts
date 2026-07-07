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
    title: "Poster One",
    imageUrl: placeholder.url,
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-2",
    title: "Poster Two",
    imageUrl: placeholder.url,
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-3",
    title: "Poster Three",
    imageUrl: placeholder.url,
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-4",
    title: "Poster Four",
    imageUrl: placeholder.url,
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-5",
    title: "Poster Five",
    imageUrl: placeholder.url,
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-6",
    title: "Poster Six",
    imageUrl: placeholder.url,
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-7",
    title: "Poster Seven",
    imageUrl: placeholder.url,
    description: "Replace with your poster description.",
    year: "2024",
  },
];

export default graphics;
