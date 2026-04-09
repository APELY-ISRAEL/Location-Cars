"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, JSX } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AiFillCar, AiOutlineHome, AiOutlineInfoCircle, AiOutlinePhone } from "react-icons/ai";
import LanguageSelector from "@/components/LanguageSelector";



const NavbarComponent = () => {

    const [activeSection, setActiveSection] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (path: string) => pathname === path;


    // Mapping des hrefs vers les IDs de sections
    const sectionMap: { [key: string]: { label: string; icon: JSX.Element } } = {
        "/": { label: "Accueil", icon: <AiOutlineHome /> },
        "/voiture": { label: "Nos voitures", icon: <AiFillCar /> },
        "/a-propos": { label: "A-propos", icon: <AiOutlineInfoCircle /> },
        "/contact": { label: "Contact", icon: <AiOutlinePhone className="-scale-x-100" /> },
    };

    // Détecter la section visible avec Intersection Observer
    useEffect(() => {
        if (pathname !== "/") {

            return;
        }

        const sections = ["accueil","voiture","a-propos", "contact",];
        const observers: IntersectionObserver[] = [];

        const updateActiveSection = () => {
            let currentSection = "";
            let minDistance = Infinity;

            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (!element) return;

                const rect = element.getBoundingClientRect();
                const headerOffset = 80;

                // Si la section est visible et proche du haut (après la navbar)
                if (rect.top <= headerOffset + 100 && rect.bottom > headerOffset) {
                    const distance = Math.abs(rect.top - headerOffset);
                    if (distance < minDistance) {
                        minDistance = distance;
                        currentSection = sectionId;
                    }
                }
            });

            // Si aucune section n'est proche du haut, prendre celle qui est la plus visible
            if (!currentSection) {
                sections.forEach((sectionId) => {
                    const element = document.getElementById(sectionId);
                    if (!element) return;

                    const rect = element.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

                    if (visibleHeight > windowHeight * 0.3 && rect.top < windowHeight * 0.5) {
                        currentSection = sectionId;
                    }
                });
            }

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (!element) return;

            const observer = new IntersectionObserver(
                () => {
                    updateActiveSection();
                },
                {
                    rootMargin: "-80px 0px -50% 0px",
                    threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        // Écouter aussi le scroll pour une détection plus précise
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        updateActiveSection(); // Appel initial

        // Nettoyer les observers et l'event listener au démontage
        return () => {
            observers.forEach((observer) => observer.disconnect());
            window.removeEventListener("scroll", updateActiveSection);
        };
    }, [pathname]);



    const scrollToSection = (sectionId: string) => {
        if (pathname !== "/") {
            // Si on n'est pas sur la page d'accueil, naviguer d'abord
            router.push(`/#${sectionId}`);
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80; // Hauteur de la navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };


    return (
        <header className="bg-surface font-body text-on-surface antialiased">
            <nav className="fixed top-0 w-full z-50 bg-slate-100 backdrop-blur-xl shadow-sm">
                <div className="flex items-center px-8 py-4 max-w-screen-2xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
                    <div className="flex-1 text-2xl font-bold tracking-tighter text-black">
                        Cyris Cars
                    </div>

                    <ul className="hidden md:flex flex-none items-center space-x-8 font-semibold text-surface">
                        {Object.entries(sectionMap).map(([path, { label, icon }]) => (
                            <li key={path}>
                                <a
                                    href={path}
                                    onClick={(e) => {
                                        if (path.startsWith("/")) {
                                            const sectionId = path === "/" ? "accueil" : path.replace("/", "");
                                            const element = document.getElementById(sectionId);
                                            if (element) {
                                                e.preventDefault();
                                                scrollToSection(sectionId);
                                            }
                                        }
                                    }}
                                    className={`flex items-center gap-2 transition ${isActive(path)
                                        ? "text-secondary border-b-2 border-secondary"
                                        : "hover:text-secondary text-slate-600"
                                        }`}
                                >
                                    <span className="text-xl">{icon}</span>
                                    <span>{label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex-1 flex items-center justify-end space-x-4 md:space-x-6">
                        <button className="hidden md:flex text-on-surface-variant hover:text-amber-500 transition-colors p-2 items-center justify-center">
                            <IoNotificationsOutline size={20} />
                        </button>

                        <div className="flex items-center">
                          <LanguageSelector/>
                        </div>
                        <button className="hidden md:block bg-secondary text-primary-foreground px-6 py-2 rounded-xl font-bold shadow-premium hover:scale-105 active:scale-95 transition-premium">
                          <Link href="/login">
                            Connexion
                          </Link>
                        </button>

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger
                                render={
                                    <Button variant="outline" size="icon" className="md:hidden text-slate-900" aria-label="Toggle menu">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <line x1="4" x2="20" y1="12" y2="12" />
                                            <line x1="4" x2="20" y1="6" y2="6" />
                                            <line x1="4" x2="20" y1="18" y2="18" />
                                        </svg>
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                }
                            />
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-100 p-6 flex flex-col">
                                <SheetTitle className="text-2xl tracking-tighter text-black mb-8 border-b pb-4 border-outline-variant/10">
                                    Cyris <span className="text-secondary">Cars</span>
                                </SheetTitle>
                                <nav className="flex flex-col gap-6">
                                    {Object.entries(sectionMap).map(([path, { label, icon }]) => (
                                        <a
                                            key={path}
                                            href={path}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const sectionId = path === "/" ? "accueil" : path.replace("/", "");
                                                scrollToSection(sectionId);
                                                setIsOpen(false);
                                            }}
                                            className={`flex items-center gap-3 text-lg transition-all ${isActive(path) || activeSection === (path === "/" ? "accueil" : path.replace("/", ""))
                                                ? "text-secondary pl-4 border-l-4 border-secondary"
                                                : "text-slate-600 hover:text-secondary hover:pl-2"
                                                }`}
                                        >
                                            <span className="text-xl">{icon}</span>
                                            <span>{label}</span>
                                        </a>
                                    ))}


                                    <button className="flex text-on-surface-variant hover:text-amber-500 transition-colors p-2 ">
                                        <IoNotificationsOutline size={20} />
                                    </button>

                                    <div className="flex items-center">
                                       <LanguageSelector/>
                                    </div>

                                    <Button
                                        className="w-full bg-secondary text-white px-6 py-4 rounded-xl hover:bg-secondary/80"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Connexion
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavbarComponent;