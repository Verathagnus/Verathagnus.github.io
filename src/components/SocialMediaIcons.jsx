import LinkedInLogo from "/linkedin.png";
import GithubLogo from "/github-mark-white.png";
import GoogleScholarLogo from "/google-scholar-logo.svg";

const SocialMediaIcons = () => {
    const iconsList = [
        {
            id: 1,
            url: "https://www.linkedin.com/BishwarajPaul",
            alt: "linkedin-link",
            imgSrc: LinkedInLogo
        },
        {
            id: 2,
            url: "https://www.github.com/Verathagnus",
            alt: "github-link",
            imgSrc: GithubLogo
        },
        {
            id: 3,
            url: "https://scholar.google.com/citations?user=-UZMVSgAAAAJ&hl=en",
            alt: "google-scholar-link",
            imgSrc: GoogleScholarLogo
        },
        
    ]
    return <div className="flex justify-center md:justify-start my-10 gap-7">
        {iconsList.map(icon => <a className="hover:opacity-50 transition duration-500" href={icon.url} key={icon.id} target="_blank" rel="noreferrer">
            <img alt={icon.alt} src={icon.imgSrc} width={40}/>
        </a>)}
        {/* <iframe src="https://github-readme-stats-clone-czyq.vercel.app/api?username=Verathagnus&show_icons=true&theme=algolia" className="hidden md:block w-[550px] h-[210px]"/> */}
    </div>
}

export default SocialMediaIcons;