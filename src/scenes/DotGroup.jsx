import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
  const linksList = [
    { id: 1, page: "Home", href: "home" },
    { id: 2, page: "Skills", href: "skills" },
    { id: 4, page: "Tech Stack", href: "tech-stack" },
    { id: 3, page: "Projects", href: "projects" },
    { id: 5, page: "Contact", href: "contact" },
  ];

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {linksList.map(link => <AnchorLink
        className={`${
          selectedPage === link.href ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href={`#${link.href}`}
        onClick={() => setSelectedPage(link.href)}
      />)}
    </div>
  );
};

export default DotGroup;
