import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Home, Briefcase, User } from "lucide-react";
import bbLogo from "@/assets/bb_logo.png.asset.json";

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
    { label: "Home", id: "home", Icon: Home },
    { label: "Work", id: "portfolio", Icon: Briefcase },
    { label: "About", id: "about", Icon: User },
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
      <div className="container-x h-20 flex items-center justify-between gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 shrink-0"
          aria-label="Burning Blooms — Home"
        >
          <img
            src={bbLogo.url}
            alt="Burning Blooms"
            className="h-12 w-12 md:h-14 md:w-14 rounded-md"
          />
        </button>

        {/* Desktop nav */}
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

        {/* Mobile nav — icon-only */}
        <div className="flex md:hidden items-center gap-1">
          {links.map(({ label, id, Icon }) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full text-foreground/80 hover:text-primary hover:bg-foreground/5 transition-colors"
            >
              <Icon className="w-[18px] h-[18px]" />
            </button>
          ))}
        </div>

        {/* Get in touch — full on desktop, compact icon-pill on mobile */}
        <a
          href="mailto:hello@burningblooms.com"
          aria-label="Get in touch"
          className="group hidden md:inline-flex items-center gap-2 text-sm font-medium pl-5 pr-1 py-1 rounded-full bg-foreground text-background hover:bg-primary transition-colors shrink-0"
        >
          Get in touch
          <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-foreground transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </a>

        <a
          href="mailto:hello@burningblooms.com"
          aria-label="Get in touch"
          className="md:hidden inline-flex items-center gap-1.5 shrink-0 text-[11px] font-medium pl-2.5 pr-1 py-1 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
        >
          <span className="hidden xs:inline">Contact</span>
          <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
