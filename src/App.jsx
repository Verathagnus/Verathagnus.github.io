import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Skills from "./scenes/Skills";
import Tools from "./scenes/Tools";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import TechStack from "./scenes/TechStack";
import LineGradient from "./components/LineGradient";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    // 1. Detect Top of Page
    setIsTopOfPage(window.scrollY === 0);

    // 2. Detect Active Section for DotGroup
    const sections = ["home", "skills", "techstack", "tools", "contact"];
    const scrollPosition = window.scrollY + 300; // Offset for better detection triggers

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setSelectedPage(section);
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []); // Added missing dependency array for performance

  return (
    <ThemeProvider>
    <div className="app bg-theme-bg text-theme-text">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      
      {/* Use AnimatePresence if you plan on adding entry/exit animations for dropdowns */}
      <AnimatePresence>
        {!isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Unified Wrapper for consistent spacing */}
            <div className="w-5/6 mx-auto">
              {isAboveMediumScreens && (
                <DotGroup
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              )}
              
              <section id="home">
                <Landing setSelectedPage={setSelectedPage} />
              </section>
              
              <LineGradient />
              <section id="skills">
                <Skills />
              </section>

              <LineGradient />
              <section id="techstack">
                <TechStack />
              </section>

              <LineGradient />
              <section id="tools">
                <Tools />
              </section>

              <LineGradient />
              <section id="contact">
                <Contact />
              </section>
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </ThemeProvider>
  );
}

export default App;
