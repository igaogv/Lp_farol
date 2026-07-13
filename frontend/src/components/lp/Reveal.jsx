import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ eyebrow, title, subtitle, center = false }) => (
  <Reveal className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
    {eyebrow && (
      <span className="h-eyebrow">
        <span className="w-6 h-px bg-brand-red inline-block" />
        {eyebrow}
      </span>
    )}
    <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl mt-3 text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="text-brand-gray-mute text-base md:text-lg mt-4 leading-relaxed">
        {subtitle}
      </p>
    )}
  </Reveal>
);
