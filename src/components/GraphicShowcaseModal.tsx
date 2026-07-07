import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import graphics from "@/data/graphics";

interface Props {
  open: boolean;
  onClose: () => void;
}

/**
 * Curved, circular poster gallery.
 * Posters are arranged around a virtual cylinder — scroll / drag / arrows
 * rotate the ring. The center poster is focused; clicking it opens the
 * full poster in a lightbox.
 */
const GraphicShowcaseModal = ({ open, onClose }: Props) => {
  const total = graphics.length;
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const dragStart = useRef<number | null>(null);
  const dragStartActive = useRef(0);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setActive(0);
      setLightbox(null);
    }
  }, [open]);

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

  // Keyboard
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      }
      if (lightbox !== null) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev, onClose, lightbox]);

  // Wheel scroll → rotate carousel
  const wheelAccum = useRef(0);
  const onWheel = (e: React.WheelEvent) => {
    if (lightbox !== null) return;
    wheelAccum.current += e.deltaY + e.deltaX;
    if (wheelAccum.current > 60) {
      next();
      wheelAccum.current = 0;
    } else if (wheelAccum.current < -60) {
      prev();
      wheelAccum.current = 0;
    }
  };

  // Drag / swipe
  const onPointerDown = (e: React.PointerEvent) => {
    if (lightbox !== null) return;
    dragStart.current = e.clientX;
    dragStartActive.current = active;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    const step = 120; // px per step
    const delta = Math.round(-dx / step);
    const nextIdx = ((dragStartActive.current + delta) % total + total) % total;
    if (nextIdx !== active) setActive(nextIdx);
  };
  const onPointerUp = () => {
    dragStart.current = null;
  };

  if (total === 0) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full h-full md:h-[92vh] md:max-w-[1400px] md:mx-6 bg-background border border-border md:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-border/60">
              <div className="min-w-0">
                <p className="mono text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                  Graphic Design · {String(active + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </p>
                <h3 className="font-display font-semibold text-xl md:text-2xl truncate">
                  {graphics[active].title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Curved gallery stage */}
            <div
              className="relative flex-1 min-h-0 overflow-hidden select-none"
              onWheel={onWheel}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{ perspective: "1600px", cursor: "grab" }}
            >
              {/* Ambient backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--muted)/0.25),_transparent_70%)] pointer-events-none" />

              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {graphics.map((g, i) => {
                  // Shortest signed distance on ring
                  let offset = i - active;
                  if (offset > total / 2) offset -= total;
                  if (offset < -total / 2) offset += total;

                  const abs = Math.abs(offset);
                  const visible = abs <= 3;
                  const translateX = offset * 240; // horizontal spread
                  const translateZ = -Math.abs(offset) * 220; // depth
                  const rotateY = offset * -22; // curve inward
                  const opacity = visible ? 1 - abs * 0.18 : 0;
                  const zIndex = 100 - abs;

                  return (
                    <motion.button
                      key={g.id}
                      type="button"
                      onClick={() => {
                        if (i === active) setLightbox(i);
                        else setActive(i);
                      }}
                      aria-label={g.title}
                      className="absolute rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-card"
                      style={{ zIndex }}
                      animate={{
                        x: translateX,
                        z: translateZ,
                        rotateY,
                        opacity,
                        scale: i === active ? 1 : 0.9,
                      }}
                      transition={{ type: "spring", stiffness: 140, damping: 22 }}
                    >
                      <div className="w-[260px] h-[380px] md:w-[320px] md:h-[460px] relative">
                        <img
                          src={g.imageUrl}
                          alt={g.title}
                          draggable={false}
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        />
                        {i !== active && (
                          <div className="absolute inset-0 bg-background/40" />
                        )}
                        {i === active && (
                          <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                            <p className="mono text-[10px] tracking-[0.25em] uppercase text-primary mb-1">
                              Click to view
                            </p>
                            <p className="font-display font-medium text-base truncate">
                              {g.title}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Arrows */}
              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous poster"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-background/70 hover:bg-background border border-border text-foreground backdrop-blur-sm transition z-[200]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next poster"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-background/70 hover:bg-background border border-border text-foreground backdrop-blur-sm transition z-[200]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute left-1/2 -translate-x-1/2 bottom-4 mono text-[10px] tracking-[0.3em] uppercase text-foreground/70 bg-background/60 backdrop-blur px-3 py-1.5 rounded-sm pointer-events-none z-[200]">
                scroll · drag · click to open
              </div>
            </div>

            {/* Footer: dots */}
            <div className="border-t border-border/60 px-5 md:px-8 py-4 flex items-center justify-center gap-2">
              {graphics.map((g, i) => (
                <button
                  key={g.id}
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${g.title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightbox !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-background/95 backdrop-blur-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(null);
                }}
              >
                <motion.img
                  key={graphics[lightbox].id}
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  src={graphics[lightbox].imageUrl}
                  alt={graphics[lightbox].title}
                  className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(null);
                  }}
                  aria-label="Close preview"
                  className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full bg-background/80 border border-border text-foreground hover:border-primary transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GraphicShowcaseModal;
