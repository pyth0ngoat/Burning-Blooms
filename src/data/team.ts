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
    name: "Advik Thokal",
    role: "Founder · Director",
    bio: "Leads creative direction across films and campaigns.",
    imageUrl: "/members/advik.jpeg",
  },
  {
    id: "tm-2",
    name: "Russel Miranda",
    role: "3D Artist",
    bio: "Modeling, texturing and lighting lead.",
    imageUrl: "/members/3d_guy.jpeg",
  },
  {
    id: "tm-3",
    name: "Varsha Sharma",
    role: "VFX SUPERVISOR",
    bio: "Runs the compositing and CG pipeline.",
    imageUrl: "/members/vfx.jpeg",
  },
  {
    id: "tm-4",
    name: "Ketki Mahakal",
    role: "Editor",
    bio: "Cuts the story — shorts, commercials and reels.",
    imageUrl: "/members/editor.jpeg",
  },
  {
    id: "tm-5",
    name: "Team Member",
    role: "Cinematographer",
    bio: "Translates the script — from written word to moving images",
    imageUrl: "/members/cinema.jpeg",
  },
];

export default team;
