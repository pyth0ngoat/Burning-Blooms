import { motion } from "framer-motion";
import { Behance, Instagram, Linkedin, Youtube } from "./SocialIcons";

const socials = [
  { label: "Behance", url: "https://behance.net", Icon: Behance },
  { label: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", url: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", url: "https://youtube.com", Icon: Youtube },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-32 md:pb-24 bg-background">
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
          <div className="relative z-10 flex items-start justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="thin text-xs md:text-sm uppercase tracking-[0.35em] text-foreground/80">
                Welcome to
              </p>
              <h1 className="mt-3 display-xl text-[13vw] md:text-[8.5vw] lg:text-[7vw] text-foreground leading-[0.85]">
                Burning<br />Blooms
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden md:block max-w-sm text-right pt-4"
            >
              <p className="font-display font-medium text-primary text-2xl lg:text-3xl leading-[1.15] tracking-tight">
                Cinematic storytelling,<br />
                driven by <span className="text-foreground">burning passion.</span>
              </p>
            </motion.div>
          </div>

          {/* Mobile tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:hidden relative z-10 font-display font-medium text-primary text-xl mt-8 tracking-tight"
          >
            Cinematic storytelling, driven by <span className="text-foreground">burning passion.</span>
          </motion.p>
        </div>

        {/* Socials strip — inspired by "trusted by" row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 md:mt-10 rounded-2xl bg-card border border-border/60 px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
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
