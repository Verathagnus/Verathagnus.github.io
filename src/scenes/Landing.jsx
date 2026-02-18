import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="md:flex md:justify-center md:items-start pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Main Section */}
      <div className="z-30 w-full max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl md:text-7xl leading-[1.05] font-playfair z-10 text-center md:text-start text-theme-text tracking-tight">
          <span className="pb-7 inline-block">Bishwaraj &nbsp;</span>
            <span className="relative font-semibold z-10 brush-bg">
              Paul
            </span>
          </p>
          <p className="mt-10 mb-8 text-sm md:text-base text-center md:text-start text-theme-muted">
            Full Stack Developer specializing in MERN Stack
          </p>
        </motion.div>
        {/* Call To Actions - combined/joined button aesthetic */}
        <motion.div
          className="flex mt-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="inline-flex">
            <AnchorLink
              className="inline-flex items-center justify-center rounded-l-sm bg-gradient-rainbow text-theme-text dark:text-white py-3 px-7 font-semibold hover:opacity-95 transition duration-300"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>
            <AnchorLink
              className="rounded-r-sm bg-gradient-rainblue p-[2px] pl-0"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <span className="inline-flex bg-theme-bg hover:opacity-90 text-theme-text transition duration-300 h-full items-center justify-center font-playfair px-10 py-[10px] rounded-r-[2px]">
                Let's talk.
              </span>
            </AnchorLink>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
