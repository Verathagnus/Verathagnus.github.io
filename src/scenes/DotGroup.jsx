import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = "relative bg-theme-highlight before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-theme-highlight before:left-[-50%] before:top-[-50%]";
  const linksList = [
    { id: 1, href: "home" },
    { id: 2, href: "skills" },
    { id: 3, href: "techstack" },
    { id: 4, href: "tools" },
    { id: 5, href: "contact" },
  ];

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7 z-30">
      {linksList.map((link) => (
        <AnchorLink
          key={link.id}
          className={`${
            selectedPage === link.href ? selectedStyles : "bg-theme-muted"
          } w-3 h-3 rounded-full`}
          href={`#${link.href}`}
          onClick={() => setSelectedPage(link.href)}
        />
      ))}
    </div>
  );
};

export default DotGroup;
