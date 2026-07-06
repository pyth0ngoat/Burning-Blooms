import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Behance, Instagram, Linkedin, Youtube } from "./SocialIcons";

const socials = [
  { label: "Behance", url: "https://behance.net", Icon: Behance },
  { label: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", url: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", url: "https://youtube.com", Icon: Youtube },
];

const HeroSection = () => {
  const openShowreel = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
    // Give the smooth-scroll a beat, then ask PortfolioGrid to open the Commercials showreel.
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("bb:open-category", { detail: "Commercials" }));
    }, 500);
  };

  return (
    <section id="home" className="relative pt-28 pb-10 md:pt-32 md:pb-14 bg-background">
      <div className="container-x">
        {/* Hero frame */}
        <div className="hero-frame min-h-[78vh] md:min-h-[86vh] flex flex-col justify-between p-6 md:p-10 lg:p-14">
          {/* Background video */}
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/reel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 hero-vignette" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-display font-semibold text-sm md:text-base lg:text-lg uppercase tracking-[0.28em] text-foreground/90">
                Welcome to
              </p>
              <h1 className="mt-4 display-xl text-[15vw] md:text-[10vw] lg:text-[8.5vw] text-foreground leading-[0.85]">
                Burning Blooms
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-6 md:mt-8 font-display font-semibold italic text-primary text-xl md:text-2xl lg:text-3xl max-w-2xl leading-[1.25]"
              >
                Cinematic storytelling,<br className="hidden md:block" />
                {" "}driven by <span className="text-foreground">burning passion.</span>
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom-right explore CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative z-10 flex justify-end"
          >
            <button
              onClick={openShowreel}
              className="group inline-flex items-center gap-2 md:gap-3 pl-4 md:pl-6 pr-1 py-1 rounded-full bg-foreground/95 text-background hover:bg-primary transition-colors text-xs md:text-sm font-medium"
            >
              <span className="uppercase tracking-[0.2em]">See the showreel</span>
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-foreground transition-colors">
                <Play className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Socials strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 md:mt-8 rounded-2xl bg-card border border-border/60 px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
        >
          <p className="thin text-xs uppercase tracking-[0.3em] text-foreground/60 max-w-[10rem] shrink-0">
            Find us<br />across the web
          </p>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {socials.map(({ label, url, Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="font-display font-semibold tracking-tight text-lg group-hover:translate-x-0.5 transition-transform">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
