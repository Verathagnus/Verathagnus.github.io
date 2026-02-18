import { useState, useRef, Fragment } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuIcon from "/menu-icon.svg";
import PlainResume from "/plain-resume.pdf";
import ATSResume from "/ats-compliant-resume.pdf";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

// Helper component to handle internal vs external links
const NavLink = ({ page, selectedPage, setSelectedPage, href }) => (
  <AnchorLink
    className={`${
      selectedPage === href ? "text-theme-highlight" : "text-theme-text"
    } hover:text-theme-teal transition duration-300`}
    href={`#${href}`}
    onClick={() => setSelectedPage(href)}
  >
    {page}
  </AnchorLink>
);

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const [viewResume, setViewResume] = useState(1);
  const buttonRef = useRef(null);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const { theme, toggleTheme } = useTheme();

  const navbarBackground = isTopOfPage
    ? ""
    : "bg-theme-bg/95 backdrop-blur-md shadow-theme border-b border-theme-purple/10";

  const linksList = [
    { id: 1, page: "Home", href: "home" },
    { id: 2, page: "Skills", href: "skills" },
    { id: 3, page: "Tech Stack", href: "techstack" },
    { id: 4, page: "Tools", href: "tools" },
    { id: 5, page: "Contact", href: "contact" },
  ];

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = viewResume === 1 ? PlainResume : ATSResume;
    link.download = `Bishwaraj_Paul_Resume${viewResume === 2 ? "_ATS" : ""}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Resume Modal - Logic unchanged but z-index consolidated to z-50 */}
      <Transition.Root show={isDropdownOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" initialFocus={buttonRef} onClose={setIsDropdownOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-theme-bg/80 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-theme-card text-theme-text border border-theme-purple/20 shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                  <div className="bg-theme-card px-6 py-5 flex justify-between items-center border-b border-theme-purple/20">
                    <Dialog.Title className="text-xl font-playfair font-bold text-theme-text">
                      Resume Selection
                    </Dialog.Title>
                    <XMarkIcon
                      className="w-6 h-6 cursor-pointer text-theme-muted hover:text-theme-highlight transition duration-300"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                  </div>

                  <div className="p-6 bg-theme-bg">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
                      <div className="inline-flex rounded-lg shadow-sm border border-theme-purple/20 overflow-hidden">
                        <button
                          onClick={() => setViewResume(1)}
                          className={`px-4 py-2 text-sm font-semibold transition ${
                            viewResume === 1 ? "bg-theme-blue text-white" : "bg-theme-card text-theme-muted"
                          }`}
                        >
                          Standard
                        </button>
                        <button
                          onClick={() => setViewResume(2)}
                          className={`px-4 py-2 text-sm font-semibold border-l border-theme-purple/20 transition ${
                            viewResume === 2 ? "bg-theme-teal text-white" : "bg-theme-card text-theme-muted"
                          }`}
                        >
                          ATS Friendly
                        </button>
                      </div>
                      <button
                        className="bg-theme-purple px-6 py-2 text-white font-bold rounded-lg hover:opacity-90 transition"
                        onClick={handleDownloadClick}
                      >
                        Download PDF
                      </button>
                    </div>

                    <iframe
                      title="PDF Viewer"
                      src={viewResume === 1 ? PlainResume : ATSResume}
                      className="w-full h-[450px] rounded-md border shadow-inner"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Main Navigation */}
      <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 transition-all duration-300`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
          <h4 className="font-playfair text-3xl font-bold tracking-tighter text-theme-text">BP</h4>

          {isAboveSmallScreens ? (
            <div className="flex items-center gap-8 font-opensans text-sm font-semibold">
              {linksList.map((link) => (
                <NavLink
                  key={link.id}
                  href={link.href}
                  page={link.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full border border-theme-purple/30 text-theme-text hover:bg-theme-purple/20 transition"
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? (
                  <MoonIcon className="w-5 h-5" />
                ) : (
                  <SunIcon className="w-5 h-5" />
                )}
              </button>
              <button
                className="bg-theme-purple px-6 py-2 rounded-full text-white hover:bg-theme-highlight transition duration-300"
                onClick={() => setIsDropdownOpen(true)}
              >
                Resume
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full border border-theme-purple/30 text-theme-text"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
              </button>
              <button
                className="rounded-full bg-theme-purple p-2 hover:opacity-90 transition"
                onClick={() => setIsDropdownOpen(true)}
              >
                <img alt="Menu" src={MenuIcon} />
              </button>
            </div>
          )}

          {/* Mobile Menu Logic remains similar, but ensure Link is used */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
