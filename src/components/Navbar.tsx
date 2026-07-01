import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const links = [
    { label: "Home", id: "home" },
    { label: "Work", id: "portfolio" },
    { label: "About", id: "about" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-x h-20 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-display font-extrabold tracking-tight text-sm uppercase text-foreground">
            Burning Blooms
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="relative text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide hover-fill pb-1"
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="mailto:hello@burningblooms.com"
          className="group hidden md:inline-flex items-center gap-2 text-sm font-medium pl-5 pr-1 py-1 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
        >
          Get in touch
          <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-foreground transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
