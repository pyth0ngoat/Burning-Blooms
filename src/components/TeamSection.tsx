import { motion } from "framer-motion";
import team from "@/data/team";

const TeamSection = () => {
  return (
    <section id="team" className="pt-16 md:pt-24 pb-8 md:pb-12 bg-background">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-14"
        >
          <div className="md:col-span-6">
            <p className="thin text-xs tracking-[0.3em] uppercase text-primary mb-6">
              002.5 — About Us
            </p>
            <h2 className="font-display font-medium tracking-tight text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95]">
              The people behind the frame
            </h2>
          </div>
          <div className="md:col-span-6 flex flex-col justify-end">
            <p className="thin text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
              A small crew of filmmakers, artists and designers who care about the craft as much as the story.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-card aspect-[3/5]"
            >
              <img
                src={m.imageUrl}
                alt={m.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="absolute left-4 right-4 bottom-4">
                <p className="mono text-[10px] tracking-[0.25em] uppercase text-primary mb-1">
                  {m.role}
                </p>
                <h3 className="font-display text-lg md:text-xl text-foreground leading-tight">
                  {m.name}
                </h3>
                {m.bio && (
                  <p className="thin text-xs md:text-sm text-foreground/70 mt-1.5 line-clamp-2">
                    {m.bio}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
