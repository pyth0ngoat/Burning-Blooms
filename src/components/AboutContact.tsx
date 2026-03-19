import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const socials = [
  { label: "ArtStation", url: "https://artstation.com" },
  { label: "Instagram", url: "https://instagram.com" },
  { label: "LinkedIn", url: "https://linkedin.com" },
];

const AboutContact = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">About</p>
          <h2 className="font-display text-4xl font-bold mb-6">The Artist</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a multidisciplinary digital artist specializing in 3D animation, visual effects, and cinematic video editing.
            With a passion for storytelling through motion and light, I craft experiences that blur the line between reality and imagination.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently available for freelance projects, studio collaborations, and creative partnerships.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-4xl font-bold mb-6">Let's Connect</h2>

          <a
            href="mailto:hello@youremail.com"
            className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors font-display text-lg mb-8 group"
          >
            <Mail className="w-5 h-5 text-primary" />
            hello@youremail.com
          </a>

          <div className="flex gap-6 mt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm tracking-wider uppercase"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs font-mono">
          © {new Date().getFullYear()} — All rights reserved
        </p>
        <p className="text-muted-foreground/50 text-xs font-mono">
          Built with passion & pixels
        </p>
      </div>
    </section>
  );
};

export default AboutContact;
