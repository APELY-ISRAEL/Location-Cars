'use client';

import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import Image from 'next/image';
import BaseButton from '../BaseButton';
import { Suspense } from 'react';


import { toast } from 'sonner';
import { useLanguageStore } from '@/app/store/languageStore';

const LanguageSwitcherContent = () => {
  const { t, i18n } = useTranslation();
//   const { data: session } = useSession();
  const { language } = useLanguageStore();

  const languages = [
    {
      code: 'fr',
      name: 'Français',
      flag: '/images/flags/france.svg',
    },
    {
      code: 'en',
      name: 'English',
      flag: '/images/flags/uk.svg',
    },
  ];

  const handleLanguageChange = async (langCode: string) => {
    if (!['fr', 'en'].includes(langCode)) return;

    // Si l'utilisateur est connecté, ne pas sauvegarder ici
    // La langue doit être changée depuis la page profil
    // if (session?.user) {
    //   // Juste changer la langue temporairement pour l'affichage
    //   i18n.changeLanguage(langCode);
    //   toast.info(t('language.changeInProfile', { defaultValue: 'Pour sauvegarder votre préférence de langue, veuillez aller dans votre profil' }));
    // } else {
    //   // Si pas de session, juste changer la langue localement
    //   i18n.changeLanguage(langCode);
    // }

     if (true) {
      // Juste changer la langue temporairement pour l'affichage
      i18n.changeLanguage(langCode);
      toast.info(t('language.changeInProfile', { defaultValue: 'Pour sauvegarder votre préférence de langue, veuillez aller dans votre profil' }));
    } else {
      // Si pas de session, juste changer la langue localement
      i18n.changeLanguage(langCode);
    }
  };

  // Utiliser la langue de la session si disponible, sinon celle du store
  const currentLanguage = language || language || i18n.language || 'fr';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <BaseButton variantStyle="danger" className="flex items-center rounded-md  ">
          <Globe className="h-4 w-4 text-white " />
          <span className={`hidden sm:inline font-kantumruy-medium text-white hover:text-white `}>{t('home.navbar.language')}</span>
        </BaseButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="flex cursor-pointer items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Image
                src={language.flag}
                alt={`${language.name} flag`}
                width={16}
                height={16}
                
              />
              <span>{language.name}</span>
            </div>
            {currentLanguage === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const LanguageSwitcher = () => {
  return (
    <Suspense fallback={
      <BaseButton variantStyle="danger" className="flex items-center rounded-md">
        <Globe className="h-4 w-4 text-white" />
        <span className="hidden sm:inline font-kantumruy-medium text-white hover:text-white">Language</span>
      </BaseButton>
    }>
      <LanguageSwitcherContent />
    </Suspense>
  );
};

export default LanguageSwitcher;