import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

// Single source of truth for tools. Add new tools here and add a card in tools/index.html.
const tools = [
  {
    title: "All Tools",
    description: "Browse all pdf utilities in one place.",
    href: "/tools/",
  },
  {
    title: "Handout Generator",
    description: "Layout multiple pages on a single A4 sheet (2-up or 4-up).",
    href: "/tools/pdf-layout-merge.html",
  },
  {
    title: "PDF Merger",
    description: "Combine separate PDFs into a single file.",
    href: "/tools/merge-pdf.html",
  },
  {
    title: "Image to PDF",
    description: "Convert images into a single PDF document.",
    href: "/tools/img2pdf.html",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const Tools = () => {
  return (
    <section id="tools" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5 text-theme-text">
            <span className="text-theme-purple">TOOLS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-theme-muted">
          Client-side PDF utilities — open-source & ad-free
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {tools.map((tool, i) => (
          <motion.a
            key={tool.title}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 rounded-2xl bg-theme-card border border-theme-purple/20 shadow-theme hover:shadow-xl hover:border-theme-teal/40 transition-all duration-300 text-theme-text no-underline group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            variants={cardVariant}
          >
            <h3 className="font-playfair font-semibold text-xl mb-2 text-theme-highlight">
              {tool.title}
            </h3>
            <p className="text-sm text-theme-muted leading-relaxed">
              {tool.description}
            </p>
            <span className="inline-block mt-4 text-theme-teal font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Open tool →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Tools;
