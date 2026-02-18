import { useState, useRef, useEffect, Fragment } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuIcon from "/menu-icon.svg";
import PlainResume from "/plain-resume.pdf";
import ATSResume from "/ats-compliant-resume.pdf";
import CloseIcon from "/close-icon.svg";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Helper component to handle internal vs external links
const NavLink = ({ page, selectedPage, setSelectedPage, href, isExternal }) => {
  if (isExternal) {
    return (
      <a
        className="hover:text-yellow transition duration-500"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {page}
      </a>
    );
  }

  return (
    <AnchorLink
      className={`${
        selectedPage === href ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${href}`}
      onClick={() => setSelectedPage(href)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [viewResume, setViewResume] = useState(1);
  const buttonRef = useRef(null);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  
  // Refined: teal-500 is very bright; consider a semi-transparent deep-blue for research profile
  const navbarBackground = isTopOfPage ? "" : "bg-deep-blue bg-opacity-90 backdrop-blur-md shadow-lg";

  const linksList = [
    { id: 1, page: "Home", href: "home" },
    { id: 2, page: "Skills", href: "skills" },
    { id: 4, page: "Tech Stack", href: "tech-stack" },
    { id: 3, page: "Projects", href: "projects" },
    { id: 6, page: "Tools", href: "/tools/index.html", isExternal: true }, // Added Tools
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
            <div className="fixed inset-0 bg-deep-blue bg-opacity-80 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                  {/* Modal Content Header */}
                  <div className="bg-white px-6 py-5 flex justify-between items-center border-b">
                    <Dialog.Title className="text-xl font-playfair font-bold text-deep-blue">
                      Resume Selection
                    </Dialog.Title>
                    <XMarkIcon
                      className="w-6 h-6 cursor-pointer text-dark-grey hover:text-red transition duration-300"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                  </div>

                  {/* PDF Selection & Preview */}
                  <div className="p-6 bg-gray-50">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
                      <div className="inline-flex rounded-lg shadow-sm">
                        <button
                          onClick={() => setViewResume(1)}
                          className={`px-4 py-2 text-sm font-semibold rounded-l-lg border transition ${
                            viewResume === 1 ? "bg-blue text-white" : "bg-white text-dark-grey"
                          }`}
                        >
                          Standard
                        </button>
                        <button
                          onClick={() => setViewResume(2)}
                          className={`px-4 py-2 text-sm font-semibold rounded-r-lg border-y border-r transition ${
                            viewResume === 2 ? "bg-teal-500 text-white" : "bg-white text-dark-grey"
                          }`}
                        >
                          ATS Friendly
                        </button>
                      </div>
                      <button
                        className="bg-red px-6 py-2 text-white font-bold rounded-lg hover:bg-opacity-80 transition"
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
          <h4 className="font-playfair text-3xl font-bold tracking-tighter">BP</h4>
          
          {isAboveSmallScreens ? (
            <div className="flex items-center gap-10 font-opensans text-sm font-semibold">
              {linksList.map((link) => (
                <NavLink
                  key={link.id}
                  href={link.href}
                  page={link.page}
                  isExternal={link.isExternal}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
              <button
                className="bg-red px-6 py-2 rounded-full text-white hover:bg-yellow hover:text-deep-blue transition duration-300"
                onClick={() => setIsDropdownOpen(true)}
              >
                Resume
              </button>
            </div>
          ) : (
            <button
              className="rounded-full bg-red p-2 hover:scale-110 transition"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="Menu" src={MenuIcon} />
            </button>
          )}

          {/* Mobile Menu Logic remains similar, but ensure Link is used */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
