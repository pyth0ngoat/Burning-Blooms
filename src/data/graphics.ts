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
    imageUrl: "/graphic_posters/1.jpeg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-2",
    title: "Poster Two",
    imageUrl: "/graphic_posters/2.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-3",
    title: "Poster Three",
    imageUrl: "/graphic_posters/3.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-4",
    title: "Poster Four",
    imageUrl: "/graphic_posters/4.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-5",
    title: "Poster Five",
    imageUrl: "/graphic_posters/5.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-6",
    title: "Poster Six",
    imageUrl: "/graphic_posters/6.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-7",
    title: "Poster Seven",
    imageUrl: "/graphic_posters/7.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-8",
    title: "Poster Eight",
    imageUrl: "/graphic_posters/8.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-9",
    title: "Poster Nine",
    imageUrl: "/graphic_posters/9.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-10",
    title: "Poster 10",
    imageUrl: "/graphic_posters/10.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
  {
    id: "poster-11",
    title: "Poster Eleven",
    imageUrl: "/graphic_posters/11.jpg",
    description: "Replace with your poster description.",
    year: "2024",
  },
];

export default graphics;
