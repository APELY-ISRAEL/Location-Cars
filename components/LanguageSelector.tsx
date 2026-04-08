"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useLanguageStore } from "@/app/store/languageStore";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { code: 'fr', name: 'Français', flag: '/images/flags/france.svg', label: 'FR' },
  { code: 'en', name: 'English', flag: '/images/flags/uk.svg', label: 'EN' }
];

const LanguageSelectorContent = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setLanguage, language: storeLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Utiliser la langue du store ou d'i18n comme fallback
  const currentLangCode = storeLanguage || i18n.language || 'fr';
  const currentLanguage = languages.find(lang => lang.code === currentLangCode) || languages[0];

  const changeLanguage = (languageCode: string) => {
    if (!['fr', 'en'].includes(languageCode)) return;

    i18n.changeLanguage(languageCode);
    setLanguage(languageCode);
    
    const currentPath = window.location.pathname;
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', languageCode);
    
    router.replace(`${currentPath}?${params.toString()}`, { scroll: false });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-primary-container/90 backdrop-blur-md border border-secondary/30 text-white rounded-lg shadow-premium hover:border-secondary transition-premium group"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="relative w-5 h-3.5 overflow-hidden rounded-sm shadow-sm border border-white/10">
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        
        <span className="text-xs font-bold tracking-wider uppercase font-['Plus_Jakarta_Sans']">
          {currentLanguage.label}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-secondary/70 group-hover:text-secondary" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-xl bg-primary-container border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs transition-all duration-200 group relative
                    ${currentLangCode === language.code
                      ? 'bg-secondary/10 text-secondary'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <div className={`relative w-5 h-3.5 overflow-hidden rounded-sm shadow-sm border
                    ${currentLangCode === language.code ? 'border-secondary/50' : 'border-white/10'}`}>
                    <Image
                      src={language.flag}
                      alt={language.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  
                  <span className="flex-1 text-left font-medium">
                    {language.name}
                  </span>

                  {currentLangCode === language.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Check className="w-3.5 h-3.5 text-secondary" />
                    </motion.div>
                  )}
                  
                  {currentLangCode === language.code && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-1/2 bg-secondary rounded-r-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LanguageSelector() {
  return (
    <Suspense fallback={
      <div className="flex items-center gap-3 px-4 py-2 bg-primary-container/90 border border-secondary/30 rounded-xl animate-pulse">
        <div className="w-6 h-4 bg-white/10 rounded-sm" />
        <div className="w-6 h-4 bg-white/10 rounded-sm" />
      </div>
    }>
      <LanguageSelectorContent />
    </Suspense>
  );
}