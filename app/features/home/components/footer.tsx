"use client";
import { Mail, Phone, Share2, Globe, MapPin, ShieldCheck, FileText, HelpCircle, Headphones } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillCar, AiOutlineHome, AiOutlineInfoCircle, AiOutlinePhone, AiOutlineProject } from "react-icons/ai";



const sectionMap: { [key: string]: { label: string; icon: JSX.Element } } = {
    "/": { label: "Accueil", icon: <AiOutlineHome /> },
    "/a-propos": { label: "A-propos", icon: <AiOutlineInfoCircle /> },
    "/nos-voitures": { label: "Nos voitures", icon: <AiFillCar /> },
    "/contact": { label: "Contact", icon: <AiOutlinePhone /> },
};

const Footer = () => {
    const { t } = useTranslation();
    const pathname = usePathname();

    const [activeSection, setActiveSection] = useState<string>("");

    // Détecter la section visible sur la page d'accueil
    useEffect(() => {
        if (pathname !== "/") {

            return;
        }

        const sections = ["accueil", "a-propos", "nos-voitures", "contact",];

        const handleScroll = () => {
            let current = "";
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom > 0) current = id;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const isActive = (path: string) => {
        if (pathname === "/") {
            // sur la page d'accueil, comparer avec activeSection
            return activeSection === sectionMap[path]?.label.toLowerCase();
        }
        return pathname === path;
    };
    return (
        <footer className="bg-slate-100 w-full pt-16 pb-20 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto font-['Inter'] text-sm">
                <div className="space-y-4">
                    <div className="text-xl font-black text-slate-900 ">Cyris Cars</div>
                    <p className="text-slate-500  leading-relaxed">
                        © 2024 Cyris Cars. Cinematic Velocity. L'excellence automobile redéfinie pour vos trajets d'exception.
                    </p>
                </div>
                {/* <div>
                    <h5 className="font-bold mb-6 text-slate-900">Liens rapides</h5>
                    <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                        {Object.entries(sectionMap).map(([path, { label, icon }]) => (
                            <Link
                                key={path}
                                href={path}
                                className={`flex items-center gap-1 transition ${isActive(path) ? "text-secondary border-b-2 border-secondary" : "hover:text-secondary"
                                    }`}
                            >
                                <span className="text-lg">{icon}</span>
                                <span>{label}</span>
                            </Link>
                        ))}
                    </ul>
                </div> */}
                <div className="space-y-4">
                    <h4 className="font-headline font-bold text-slate-900 uppercase tracking-widest text-xs">Informations</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li>
                            <a className="flex items-center gap-2 hover:text-secondary transition-colors" href="#">
                                <ShieldCheck size={18} />
                                <span>Politique de confidentialité</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-2 hover:text-secondary transition-colors" href="#">
                                <FileText size={18} />
                                <span>Conditions Générales</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-2 hover:text-secondary transition-colors" href="#">
                                <HelpCircle size={18} />
                                <span>FAQ</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-2 hover:text-secondary transition-colors" href="#">
                                <Headphones size={18} />
                                <span>Support</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-headline font-bold text-slate-900  uppercase tracking-widest text-xs">Contactez-nous</h4>
                    <div className="text-slate-500 space-y-2">
                        <p className="flex items-center gap-2">
                            <Mail size={14} />
                            contact@cyris-cars.com
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={14} />
                            +33 1 23 45 67 89
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin size={14} />
                            123 Rue de la Paix, 75001 Togo, Lomé
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-primary-container hover:text-white transition-all">
                            <FacebookIcon />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-primary-container hover:text-white transition-all">
                            <InstagramIcon />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-primary-container hover:text-white transition-all">
                            <XIcon />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-primary-container hover:text-white transition-all">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="h-px w-full bg-slate-300 mb-4"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-8 pb-2 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-center md:text-left text-xs text-slate-400 font-medium">
                        {t("footer.copyright", { year: new Date().getFullYear() })}{" "}
                        <Link
                            href="https://israel.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition-colors"
                        >
                            {t("footer.company")}
                        </Link>
                    </p>
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                        <a href="#" className="hover:text-secondary transition-colors">Confidentialité</a>
                        <div className="w-px h-3 bg-slate-300"></div>
                        <a href="#" className="hover:text-secondary transition-colors">Mentions légales</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FacebookIcon() {
    return (
        <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.994 2.012 9.334 2 11.97 2h.08zm0 5.838a3.869 3.869 0 100 7.738 3.869 3.869 0 000-7.738zm0 6.387a2.519 2.519 0 110-5.038 2.519 2.519 0 010 5.038zm5.21-6.5a.903.903 0 11-1.807 0 .903.903 0 011.807 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function XIcon() {
    return (
        <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}
export default Footer;