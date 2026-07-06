import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import vfxShots from "@/data/vfxShots";

interface Props {
  open: boolean;
  onClose: () => void;
}

/* ---------- Before/After comparison slider ---------- */

function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50); // percentage
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (draggingRef.current) updateFromClientX(e.clientX);
    };
    const touch = (e: TouchEvent) => {
      if (draggingRef.current && e.touches[0]) updateFromClientX(e.touches[0].clientX);
    };
    const stop = () => (draggingRef.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", touch, { passive: true });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("touchend", stop);
    };
  }, [updateFromClientX]);

  const start = (clientX: number) => {
    draggingRef.current = true;
    updateFromClientX(clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-black select-none cursor-ew-resize"
      onMouseDown={(e) => start(e.clientX)}
      onTouchStart={(e) => e.touches[0] && start(e.touches[0].clientX)}
    >
      {/* After (full) */}
      <img
        src={after}
        alt={`${alt} — after`}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={`${alt} — before`}
          draggable={false}
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${100 / (pos / 100 || 1)}vw`, maxWidth: "none" }}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 mono text-[10px] tracking-[0.3em] uppercase bg-background/70 backdrop-blur px-3 py-1.5 rounded-sm text-foreground">
        Before
      </span>
      <span className="absolute top-4 right-4 mono text-[10px] tracking-[0.3em] uppercase bg-background/70 backdrop-blur px-3 py-1.5 rounded-sm text-foreground">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.5)] pointer-events-none"
        style={{ left: `${pos}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/95 border border-white flex items-center justify-center shadow-xl pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <MoveHorizontal className="w-5 h-5 text-background" />
      </div>
    </div>
  );
}

/* ---------- Modal ---------- */

const VfxShowcaseModal = ({ open, onClose }: Props) => {
  const [index, setIndex] = useState(0);
  const total = vfxShots.length;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, total, onClose]);

  if (total === 0) return null;
  const shot = vfxShots[index];
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Track swipes only on non-slider zones (top bar / footer). Slider swallows touches on itself.
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

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
            <div
              className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-border/60"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="min-w-0">
                <p className="mono text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                  VFX &amp; CGI · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
                <h3 className="font-display font-semibold text-xl md:text-2xl truncate">
                  {shot.title}
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

            {/* Comparison viewer */}
            <div className="relative flex-1 min-h-0 bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={shot.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <BeforeAfter before={shot.beforeUrl} after={shot.afterUrl} alt={shot.title} />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-4 mono text-[10px] tracking-[0.3em] uppercase text-foreground/80 bg-background/60 backdrop-blur px-3 py-1.5 rounded-sm pointer-events-none">
                drag the slider to compare
              </div>

              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous shot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-background/70 hover:bg-background border border-border text-foreground backdrop-blur-sm transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next shot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-background/70 hover:bg-background border border-border text-foreground backdrop-blur-sm transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Footer info + dots */}
            <div
              className="border-t border-border/60 px-5 md:px-8 py-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <p className="thin text-sm text-muted-foreground leading-relaxed flex-1 max-w-2xl">
                {shot.description}
              </p>
              {shot.tools && shot.tools.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {shot.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 mono text-[10px] tracking-[0.15em] uppercase border border-border rounded-sm text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-center gap-2">
                {vfxShots.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to ${s.title}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VfxShowcaseModal;
