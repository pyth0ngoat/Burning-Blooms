import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CurrentProjects from "@/components/CurrentProjects";
import PortfolioGrid from "@/components/PortfolioGrid";
import TeamSection from "@/components/TeamSection";
import AboutContact from "@/components/AboutContact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CurrentProjects />
      <PortfolioGrid />
      <TeamSection />
      <AboutContact />
    </main>
  );
};

export default Index;
