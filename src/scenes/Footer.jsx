import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-theme-purple via-theme-blue to-theme-green py-8">
            <div className="w-5/6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-playfair font-semibold text-xl text-white tracking-wide">
                        BISHWARAJ PAUL
                    </p>
                    <SocialMediaIcons light />
                    <p className="font-opensans text-sm text-white/80">
                        © 2026 Paul. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;