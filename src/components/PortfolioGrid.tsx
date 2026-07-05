import { useState } from "react";
import { motion } from "framer-motion";
import projects, { categories, categoryThumbnails, type Category } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import ModelShowcaseModal from "./ModelShowcaseModal";
import type { Project } from "@/data/projects";

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modelsOpen, setModelsOpen] = useState(false);

  // Open the first project in the chosen category (if any).
  const openCategory = (cat: Category) => {
    if (cat === "3D Modelling") {
      setModelsOpen(true);
      return;
    }
    const p = projects.find((pr) => pr.category === cat);
    if (p) setSelectedProject(p);
  };

  return (
    <section id="portfolio" className="pt-10 md:pt-14 pb-24 md:pb-32 bg-background">
      <div className="container-x">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-14"
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

        {/* 2-column grid on desktop, 1-column on mobile — thumbnails carry their own titles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={() => openCategory(cat)}
              aria-label={cat}
              className="group relative overflow-hidden rounded-2xl bg-card text-left aspect-[4/3]"
            >
              <img
                src={categoryThumbnails[cat]}
                alt={cat}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/25 transition-colors duration-500" />
              <div className="absolute left-4 bottom-4 mono text-[10px] tracking-[0.25em] uppercase text-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View →
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ModelShowcaseModal open={modelsOpen} onClose={() => setModelsOpen(false)} />
    </section>
  );
};

export default PortfolioGrid;
