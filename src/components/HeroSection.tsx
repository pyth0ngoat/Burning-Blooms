import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video placeholder */}
      <div className="absolute inset-0 bg-background">
        {/* Replace this div with a <video> tag for your showreel:
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
              <source src="/reel.mp4" type="video/mp4" />
            </video>
        */}
        <div className="absolute inset-0 grid-line opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-px bg-primary/20 animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-6"
        >
          Animation · VFX · Video
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.9]"
        >
          Crafting
          <br />
          <span className="neon-text">Visual</span>{" "}
          Realities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-muted-foreground text-lg max-w-xl mx-auto font-body"
        >
          Bringing imagination to life through motion, light, and pixels.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          onClick={scrollToWork}
          className="mt-12 px-8 py-3 border border-primary/50 text-primary font-display text-sm tracking-widest uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border"
        >
          View Work
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
