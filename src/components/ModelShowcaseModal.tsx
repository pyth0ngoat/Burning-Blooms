import { Suspense, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Bounds, Center } from "@react-three/drei";
import modelShowcases, { type ModelShowcase } from "@/data/models";

interface Props {
  open: boolean;
  onClose: () => void;
}

/* ---------- 3D bits ---------- */

function GLBModel({ url, scale = 1 }: { url: string; scale?: number }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} />;
}

function PlaceholderModel() {
  // Stylised procedural placeholder — used when modelUrl is empty.
  return (
    <group>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.32, 200, 32]} />
        <meshStandardMaterial
          color="#D39858"
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

function ModelStage({ showcase }: { showcase: ModelShowcase }) {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 2, 4], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#150C0C"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} castShadow />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <Center>
            {showcase.modelUrl ? (
              <GLBModel url={showcase.modelUrl} scale={showcase.modelScale ?? 1} />
            ) : (
              <PlaceholderModel />
            )}
          </Center>
        </Bounds>
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={0.05}
        maxDistance={1000}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}

/* ---------- Modal + Carousel ---------- */

const ModelShowcaseModal = ({ open, onClose }: Props) => {
  const [index, setIndex] = useState(0);
  const total = modelShowcases.length;
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

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const showcase = modelShowcases[index];

  return (
    <AnimatePresence>
      {open && showcase && (
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
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative z-10 w-full h-full md:h-[92vh] md:max-w-[1400px] md:mx-6 bg-background border border-border md:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-border/60">
              <div className="min-w-0">
                <p className="mono text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                  3D Modelling · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
                <h3 className="font-display font-semibold text-xl md:text-2xl truncate">
                  {showcase.title}
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

            {/* Body: 3D viewer + renders column */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_360px] min-h-0">
              {/* 3D viewer */}
              <div className="relative min-h-[45vh] lg:min-h-0 bg-[#150C0C]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showcase.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <ModelStage showcase={showcase} />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute left-4 bottom-4 mono text-[10px] tracking-[0.2em] uppercase text-foreground/70 pointer-events-none">
                  drag to orbit · scroll to zoom
                </div>

                {/* Prev / Next */}
                <button
                  onClick={prev}
                  aria-label="Previous model"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-background/70 hover:bg-background border border-border text-foreground backdrop-blur-sm transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next model"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-background/70 hover:bg-background border border-border text-foreground backdrop-blur-sm transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Renders */}
              <div className="border-t lg:border-t-0 lg:border-l border-border/60 overflow-y-auto p-4 md:p-5 bg-card/40">
                <p className="mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Renders
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  {showcase.renders.map((src, i) => (
                    <a
                      key={i}
                      href={src}
                      target="_blank"
                      rel="noreferrer"
                      className="group block overflow-hidden rounded-lg border border-border/60 bg-secondary aspect-square"
                    >
                      <img
                        src={src}
                        alt={`${showcase.title} render ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </a>
                  ))}
                </div>

                <p className="thin text-sm text-muted-foreground leading-relaxed mt-5">
                  {showcase.description}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 py-4 border-t border-border/60">
              {modelShowcases.map((s, i) => (
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModelShowcaseModal;
