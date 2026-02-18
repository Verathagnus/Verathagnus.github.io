import GoogleScholarLogo from "/google-scholar-logo.svg";

const SocialMediaIcons = ({ light = false }) => {
  const iconsList = [
    {
      id: 1,
      url: "https://www.linkedin.com/in/BishwarajPaul",
      alt: "linkedin-link",
      type: "linkedin",
    },
    {
      id: 2,
      url: "https://www.github.com/Verathagnus",
      alt: "github-link",
      type: "github",
    },
    {
      id: 3,
      url: "https://scholar.google.com/citations?user=-UZMVSgAAAAJ&hl=en",
      alt: "google-scholar-link",
      type: "scholar",
    },
  ];

  const iconClass = light
    ? "w-8 h-8 text-white"
    : "w-10 h-10 text-theme-text dark:text-white";

  const containerClass = light
    ? "flex justify-center gap-5 items-center"
    : "flex justify-center md:justify-start gap-7 mt-10 w-fit items-center";

  return (
    <div className={containerClass}>
      {iconsList.map((icon) => (
        <a
          className="rounded-lg p-0 hover:-translate-y-0.5 hover:opacity-80 transition duration-300"
          href={icon.url}
          key={icon.id}
          target="_blank"
          rel="noreferrer"
        >
          {icon.type === "linkedin" ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={iconClass}
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31ZM5.34 7.44A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
            </svg>
          ) : icon.type === "github" ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={iconClass}
              fill="currentColor"
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.1c-3.35.73-4.06-1.62-4.06-1.62-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.25 1.83 1.25 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.98 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1.01-.33 3.3 1.24A11.5 11.5 0 0 1 12 6.58c1.02 0 2.05.14 3 .42 2.29-1.57 3.3-1.24 3.3-1.24.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.65-2.82 5.67-5.5 5.97.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
          ) : (
            <img
              alt={icon.alt}
              src={GoogleScholarLogo}
              width={light ? 32 : 40}
              className={light ? "w-8 h-8 brightness-0 invert" : "w-10 h-10"}
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;