import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import { useEffect } from "react";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-background/90 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-5xl mx-4 my-12 bg-background border border-border rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video embed */}
            {project.video_embed_url && (
              <div className="aspect-video w-full bg-secondary">
                <iframe
                  src={project.video_embed_url}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}

            {/* If no video, show thumbnail */}
            {!project.video_embed_url && (
              <div className="aspect-video w-full">
                <img src={project.thumbnail_url} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Info */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-mono text-xs tracking-widest uppercase">
                  {project.category}
                </span>
                <span className="text-muted-foreground font-mono text-xs">{project.date}</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{project.title}</h2>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">{project.description}</p>

              {/* Tools */}
              {project.tools && project.tools.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-mono border border-border rounded-sm text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Gallery
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.gallery.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} gallery ${i + 1}`}
                        className="rounded-md w-full aspect-video object-cover"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
