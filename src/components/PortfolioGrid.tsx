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

        {/* Bento tile grid — inspired by the reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(220px,1fr)] gap-4 md:gap-5">
          {categories.map((cat, i) => {
            // Layout recipe for a rhythmic bento (5 tiles):
            // row 1: [Shortfilms x3] [VFX x3]
            // row 2: [3D x2] [Graphic x2] [Commercials x2]
            const spans = [
              "lg:col-span-3 lg:row-span-2 min-h-[320px] lg:min-h-[420px]", // Shortfilms — large
              "lg:col-span-3 min-h-[220px]",                                 // VFX
              "lg:col-span-2 min-h-[220px]",                                 // 3D
              "lg:col-span-2 min-h-[220px]",                                 // Graphic
              "lg:col-span-2 min-h-[220px]",                                 // Commercials
            ];
            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                onClick={() => openCategory(cat)}
                className={`group relative overflow-hidden rounded-2xl bg-card text-left ${spans[i]}`}
              >
                {/* Image */}
                <img
                  src={categoryThumbnails[cat]}
                  alt={cat}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                {/* Darken overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/55 to-background/20 transition-opacity duration-500 group-hover:opacity-90" />
                {/* Big title */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="font-display font-extrabold uppercase text-center leading-[0.9] tracking-tight text-foreground text-4xl sm:text-5xl lg:text-6xl">
                    {cat}
                  </h3>
                </div>
                {/* Bottom meta */}
                <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between mono text-[10px] tracking-[0.25em] uppercase text-foreground/70">
                  <span>0{i + 1}</span>
                  <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary">
                    View →
                  </span>
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
