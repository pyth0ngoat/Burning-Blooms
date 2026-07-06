import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Behance, Instagram, Linkedin, Youtube } from "./SocialIcons";

const socials = [
  { label: "Behance", url: "https://behance.net", Icon: Behance },
  { label: "LinkedIn", url: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", url: "https://www.instagram.com/the_burning_blooms", Icon: Instagram },
  { label: "YouTube", url: "https://www.youtube.com/@the.burning.blooms", Icon: Youtube },
];

const AboutContact = () => {
  return (
    <section id="about" className="bg-background">
      <div className="container-x pb-20">
        <div className="rounded-[2rem] bg-card border border-border/60 p-8 md:p-14 lg:p-20">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="thin text-xs tracking-[0.3em] uppercase text-primary mb-6">
              003 — Let's connect
            </p>
            <h2 className="display-xl text-4xl md:text-6xl lg:text-7xl text-foreground">
              Have a story <span className="serif-italic text-primary">worth burning</span> for?
            </h2>
            <p className="mt-8 thin text-foreground/70 text-lg md:text-xl max-w-2xl leading-relaxed">
              We partner with filmmakers, brands, and artists who care about the frame as much as we do. Tell us about the story you're chasing — we'll help you shape it.
            </p>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-16 items-start border-t border-border pt-14"
          >
            <div className="md:col-span-8 min-w-0">
              <p className="thin text-xs tracking-[0.3em] uppercase text-foreground/60 mb-5">
                Drop us a line
              </p>
              <a
                href="mailto:hello@burningblooms.com"
                className="group inline-flex items-center gap-3 md:gap-5 display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] text-foreground hover:text-primary transition-colors break-all"
              >
                <span className="break-all">the.burning.blooms@gmail.com</span>
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 transition-transform duration-500 group-hover:rotate-45 shrink-0" />
              </a>
            </div>

            <div className="md:col-span-4">
              <p className="thin text-xs tracking-[0.3em] uppercase text-foreground/60 mb-5">
                Elsewhere
              </p>
              <ul className="space-y-3">
                {socials.map(({ label, url, Icon }) => (
                  <li key={label}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-border pb-3 text-lg text-foreground hover:text-primary transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        {label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 thin text-xs text-foreground/50">
            <p>© {new Date().getFullYear()} Burning Blooms — All rights reserved</p>
            <p>Crafted frame by frame.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
