"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import router from "next/router";
import { useState, useEffect } from "react";
import { IoNotificationsOutline } from "react-icons/io5";



const NavbarComponent = () => {

    const [activeSection, setActiveSection] = useState<string>("");
    const pathname = usePathname();


    // Mapping des hrefs vers les IDs de sections
    const sectionMap: Record<string, string> = {
        "/": "Accueil",
        "/a-propos": "A-propos",
        "/nos-voitures": "Nos voitures",
        "/contact": "Contact",
    };

    // Détecter la section visible avec Intersection Observer
    useEffect(() => {
        if (pathname !== "/") {

            return;
        }

        const sections = ["accueil", "a-propos", "nos-voitures", "contact",];
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
                <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
                    <div className="text-2xl font-bold tracking-tighter text-black">Cyris Cars
                    </div>

                    <ul className="hidden md:flex items-center space-x-8 font-semibold text-surface">
                        {Object.entries(sectionMap).map(([path, label]) => (
                            <li key={path}>
                                <a
                                    href={path}
                                    className={`transition ${pathname === path
                                        ? "text-secondary border-b-2 border-secondary"
                                        : "hover:text-secondary"
                                        }`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-6">

                        <button className="text-on-surface-variant hover:text-amber-500 transition-colors p-2 flex items-center justify-center">
                            <span className="material-symbols-outlined">  <IoNotificationsOutline /></span>
                        </button>

                        <div className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-on-surface-variant">
                            FR / EN
                        </div>
                        <button className="bg-secondary text-primary-foreground px-6 py-2 rounded-xl font-bold shadow-premium hover:scale-105 active:scale-95 transition-premium">
                            Connexion
                        </button>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default NavbarComponent;