// ============================================================
// 👥 TEAM — shown in the "About Us" section.
// Swap the imageUrl to a real headshot when available.
// ============================================================
import placeholder from "@/assets/bb_logo.png.asset.json";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl: string;
}

const team: TeamMember[] = [
  {
    id: "tm-1",
    name: "Founder Name",
    role: "Founder · Director",
    bio: "Leads creative direction across films and campaigns.",
    imageUrl: placeholder.url,
  },
  {
    id: "tm-2",
    name: "Team Member",
    role: "VFX Supervisor",
    bio: "Runs the compositing and CG pipeline.",
    imageUrl: placeholder.url,
  },
  {
    id: "tm-3",
    name: "Team Member",
    role: "3D Artist",
    bio: "Modeling, texturing and lighting lead.",
    imageUrl: placeholder.url,
  },
  {
    id: "tm-4",
    name: "Team Member",
    role: "Editor",
    bio: "Cuts the story — shorts, commercials and reels.",
    imageUrl: placeholder.url,
  },
  {
    id: "tm-5",
    name: "Team Member",
    role: "Graphic Designer",
    bio: "Posters, key art, and brand systems.",
    imageUrl: placeholder.url,
  },
];

export default team;
