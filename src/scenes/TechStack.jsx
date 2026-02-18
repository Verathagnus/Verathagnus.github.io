import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import TechStackImage from "/tech-stack.jpg";
const TechStack = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="techstack" className="pt-10 pb-24 mb-36">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-theme-text">
            TECH <span className="text-theme-blue">STACK</span>
          </p>
          <LineGradient width="w-1/3" />
          {/* <p className="mt-10 mb-7">Text Desscription</p> */}
        </motion.div>
      </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-40 md:gap-16 mt-32">
          {/* Skills */}
            {/* Experience */}
            <motion.div
              className="md:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="relative h-32">
                <div className="z-10 text-theme-text">
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    React
                  </p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Redux-Toolkit
                  </p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Node.JS
                  </p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Express
                  </p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    MongoDB
                  </p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Python
                  </p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Django
                  </p>
                </div>
              </div>
            </motion.div>
          <div className="mt-16 md:mt-0 max-w-[600px]">
            {isAboveMediumScreens ? (
              <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-theme-purple/50 before:z-[-1]">
                <img alt="skills" src={TechStackImage} className="z-10" />
              </div>
            ) : (
              <img alt="profile" src={TechStackImage} className="z-10" />
            )}
          </div>
        </div>
    </section>
  );
};

export default TechStack;
