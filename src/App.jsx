import { useEffect, useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import TechStack from "./scenes/TechStack";
import LineGradient from "./components/LineGradient";
import {motion} from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      {isDropdownOpen ? null : (
        <motion.div
        initial="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}>
          <div className="w-5/6 mx-auto md:h-full">
            {isAboveMediumScreens ? (
              <DotGroup
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ) : null}
            <Landing setSelectedPage={setSelectedPage} />
          </div>

          <LineGradient />
          <div className="w-5/6 mx-auto md:h-full">
            <Skills />
          </div>

          <LineGradient />
          <div className="w-5/6 mx-auto md:h-full">
            <TechStack />
          </div>

          <LineGradient />
          <div className="w-5/6 mx-auto">
            <Projects />
          </div>

          <LineGradient />
          <div className="w-5/6 mx-auto">
            <Contact />
          </div>

          <Footer/>

        </motion.div>
      )}
    </div>
  );
}

export default App;
