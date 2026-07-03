import { useState } from "react";
import { motion } from "framer-motion";
import projects, { categories, categoryThumbnails, type Category } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Open the first project in the chosen category (if any).
  const openCategory = (cat: Category) => {
    const p = projects.find((pr) => pr.category === cat);
    if (p) setSelectedProject(p);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16"
        >
          <div className="md:col-span-6">
            <p className="thin text-xs tracking-[0.3em] uppercase text-primary mb-6">
              002 — Our Work
            </p>
            <h2 className="font-display font-medium tracking-tight text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95]">
              Our Work
            </h2>
          </div>

          <div className="md:col-span-6 flex flex-col justify-end">
            <p className="thin text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
              Where narrative structure meets seamless digital artistry. Explore our work across film, animation, and design.
            </p>
          </div>
        </motion.div>

        {/* Bento tile grid — text lives inside the thumbnails themselves */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-4 md:gap-5 lg:auto-rows-[minmax(0,1fr)] lg:h-[640px]">
          {categories.map((cat, i) => {
            // Desktop bento (6-col × 2-row):
            //  Shortfilms:   col-span-3 row-span-2   (large left)
            //  VFX & CGI:    col-span-3 row-span-1   (top right)
            //  3D Modelling: col-span-2 row-span-1   (bottom right, third)
            //  Graphic:      col-span-2 row-span-1
            //  Commercials:  col-span-2 row-span-1
            //
            // Mobile/tablet: cards stack with a stable 16/9 aspect ratio.
            const spans = [
              "lg:col-span-3 lg:row-span-2",
              "lg:col-span-3 lg:row-span-1",
              "lg:col-span-2 lg:row-span-1",
              "lg:col-span-2 lg:row-span-1",
              "lg:col-span-2 lg:row-span-1",
            ];
            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                onClick={() => openCategory(cat)}
                aria-label={cat}
                className={`group relative overflow-hidden rounded-2xl bg-card text-left aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full ${spans[i]}`}
              >
                <img
                  src={categoryThumbnails[cat]}
                  alt={cat}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                {/* Subtle hover tint — no text overlay, thumbnails already have their titles */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                <div className="absolute left-4 bottom-4 mono text-[10px] tracking-[0.25em] uppercase text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View →
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default PortfolioGrid;
