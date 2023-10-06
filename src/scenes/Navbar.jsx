import { useState, useRef, useEffect, Fragment } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuIcon from "/menu-icon.svg";
import PlainResume from "/plain-resume.pdf";
import ATSResume from "/ats-compliant-resume.pdf";
import CloseIcon from "/close-icon.svg";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Link = ({ page, selectedPage, setSelectedPage, href }) => {
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
  const buttonRef = useRef(null);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-teal-500";
  const linksList = [
    { id: 1, page: "Home", href: "home" },
    { id: 2, page: "Skills", href: "skills" },
    { id: 4, page: "Tech Stack", href: "tech-stack" },
    { id: 3, page: "Projects", href: "projects" },
    { id: 5, page: "Contact", href: "contact" },
  ];

  const handleDownloadClick = () => {
    // Implement the download functionality here
    console.log("Test");
    const element = document.createElement("a");
    element.href = viewResume === 1 ? PlainResume : ATSResume;
    element.download =
      "Bishwaraj Paul Resume" + (viewResume === 1 ? "" : " ATS Compliant");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const [viewResume, setViewResume] = useState(1);
  return (
    <>
      <Transition.Root show={isDropdownOpen} as={Fragment} className="z-100">
        <Dialog
          as="div"
          className="relative z-100"
          initialFocus={buttonRef}
          onClose={setIsDropdownOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-100" />
          </Transition.Child>

          <div className="fixed inset-0  w-screen overflow-y-auto z-100">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 z-100">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                className="z-100"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg z-100">
                  <div className="bg-white px-4 pb-4 pt-5 z-100">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex flex-row justify-between z-100">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900 z-100"
                      >
                        Download Resume
                      </Dialog.Title>
                      <XMarkIcon
                        className="w-7 cursor-pointer z-100 text-dark-grey dark:text-dark-grey hover:text-gray-800 hover:scale-125 transition duration-500"
                        onClick={() => setIsDropdownOpen(false)}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-between items-center sm:px-6 z-100">
                    <div
                      className="inline-flex rounded-md shadow-sm"
                      role="group"
                    >
                      <button
                        type="button"
                        onClick={() => setViewResume(1)}
                        className={`px-4 py-2 text-sm font-medium text-white  border border-gray-200 rounded-l-lg hover:bg-violet-800 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue  ${
                          viewResume === 1 ? "bg-blue" : "bg-dark-grey"
                        }`}
                      >
                        Resume
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium text-white  border border-gray-200 rounded-r-md hover:bg-violet-800 hover:text-white focus:z-10 focus:ring-2 focus:ring-teal-500  ${
                          viewResume === 2 ? "bg-teal-500" : "bg-dark-grey"
                        }`}
                        onClick={() => setViewResume(2)}
                      >
                        ATS Compliant
                      </button>
                    </div>
                    <button
                      className={`px-4 py-2 text-sm font-medium text-white  border border-gray-200 rounded-lg hover:bg-violet-800 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue bg-red`}
                      onClick={handleDownloadClick}
                    >
                      Download PDF
                    </button>
                  </div>
                  <div className="w-full h-full p-5 mb-5">
                    {/* <Document file={viewResume === 1 ? PlainResume : ATSResume}>
                      <Page pageNumber={1} />{" "}
                    </Document> */}
                    <iframe
                      title="PDF Viewer"
                      src={viewResume === 1 ? PlainResume : ATSResume}
                      width="100%"
                      height="400px"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {isDropdownOpen ? null : (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
          <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold">BP</h4>
            {/* Desktop Nav */}
            {isAboveSmallScreens ? (
              <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                {linksList.map((link) => (
                  <Link
                    id={link.id}
                    href={link.href}
                    page={link.page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
                <button
                  className="bg-red px-3 py-1 rounded-full"
                  ref={buttonRef}
                  onClick={() => setIsDropdownOpen((prevState) => !prevState)}
                >
                  Resume
                </button>
              </div>
            ) : (
              <button
                className="rounded-full bg-red p-2"
                onClick={() => setIsMenuToggled((prevValue) => !prevValue)}
              >
                <img alt="Menu" src={MenuIcon} />
              </button>
            )}
            {/* Mobile Nav Expand */}
            {!isAboveSmallScreens && isMenuToggled ? (
              <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                {/* Close Icon */}
                <div className="flex justify-end p-12">
                  <button
                    onClick={() => setIsMenuToggled((prevValue) => !prevValue)}
                  >
                    <img alt="close-icon" src={CloseIcon} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                  {linksList.map((link) => (
                    <Link
                      id={link.id}
                      page={link.page}
                      href={link.href}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                <div className="w-full mx-auto text-2xl text-deep-blue my-10 flex flex-col justify-center items-center">
                  <button
                    className="bg-red py-2 px-5 rounded-full w-[150px]"
                    ref={buttonRef}
                  >
                    Resume
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
