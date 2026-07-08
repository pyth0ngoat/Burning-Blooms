import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import currentProjects from "@/data/currentProjects";

const ROTATE_MS = 3000;

const CurrentProjects = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = currentProjects.length;

  useEffect(() => {
    if (paused || total <= 1) return;
    const t = window.setInterval(() => setI((p) => (p + 1) % total), ROTATE_MS);
    return () => window.clearInterval(t);
  }, [paused, total]);

  if (total === 0) return null;
  const item = currentProjects[i];

  return (
    <section id="current" className="bg-background pt-6 md:pt-10 pb-4 md:pb-6">
      <div className="container-x">
        <div className="flex items-end justify-between mb-4 md:mb-5">
          <div>
            <p className="thin text-xs tracking-[0.3em] uppercase text-primary mb-2">
              001.5 — Current Projects
            </p>
            <h2 className="font-display font-medium tracking-tight text-2xl md:text-3xl text-foreground">
              What we're making right now
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {currentProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show project ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-primary" : "w-3 bg-foreground/25 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative overflow-hidden rounded-2xl border border-border/60 bg-card aspect-[21/9] md:aspect-[24/9]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute inset-0"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 lg:p-14 max-w-2xl">
                <span className="inline-flex self-start items-center gap-2 mono text-[10px] tracking-[0.25em] uppercase text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {item.tag}
                </span>
                <h3 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 md:mt-4 thin text-foreground/75 text-base md:text-lg max-w-xl">
                  {item.blurb}
                </p>
                {item.ctaUrl && (
                  <a
                    href={item.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 md:mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.ctaLabel ?? "Learn more"}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile dots */}
          <div className="md:hidden absolute bottom-3 right-4 flex items-center gap-1.5 z-10">
            {currentProjects.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-6 bg-primary" : "w-1.5 bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;
