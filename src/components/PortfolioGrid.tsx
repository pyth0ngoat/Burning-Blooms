import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects, { categories, type Category } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

type Filter = "All" | Category;

const PortfolioGrid = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: Filter[] = ["All", ...categories];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        {/* Header — inspired by "Behind the Designs" block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20"
        >
          <div className="md:col-span-6">
            <p className="thin text-xs tracking-[0.3em] uppercase text-primary mb-6">
              002 — Our Work
            </p>
            <h2 className="display-xl text-5xl md:text-6xl lg:text-7xl text-foreground">
              Our <span className="serif-italic text-primary">Work</span>
            </h2>
          </div>

          <div className="md:col-span-6 flex flex-col justify-end gap-8">
            <p className="thin text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
              Where narrative structure meets seamless digital artistry. Browse our recent work in independent filmmaking, commercial direction, and advanced post-production.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-xs thin tracking-widest uppercase rounded-full border transition-all duration-300 ${
                    filter === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-foreground/70 hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-bleed project rows */}
      <motion.div layout className="flex flex-col">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.button
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: (i % 3) * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group relative w-full text-left border-t border-border last:border-b py-10 md:py-14 hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              <div className="container-x">
                <div className="grid grid-cols-12 gap-6 items-center">
                  {/* Index */}
                  <div className="col-span-2 md:col-span-1 mono text-xs text-muted-foreground group-hover:text-background/60">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title + meta */}
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="display-xl text-4xl md:text-6xl leading-[0.95]">
                      {project.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-4 mono text-xs tracking-widest uppercase text-muted-foreground group-hover:text-background/60">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Thumbnail (reveals on hover) */}
                  <div className="hidden md:block col-span-5 aspect-[16/10] overflow-hidden rounded-sm relative">
                    <img
                      src={project.thumbnail_url}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                    />
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 md:col-span-1 flex md:justify-end">
                    <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default PortfolioGrid;
