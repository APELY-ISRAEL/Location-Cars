'use client';

import { useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
// import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useLanguageStore } from '@/app/store/languageStore';


const LanguageUrlHandlerContent = () => {
  const { i18n } = useTranslation();
//   const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const { setLanguage, language: storeLanguage } = useLanguageStore();

  useEffect(() => {
    // Ordre de priorité : URL > localStorage (store) > session > défaut
    let targetLang: string | null = null;

    // 1. Vérifier l'URL en premier (source de vérité principale)
    const langFromUrl = searchParams.get('lang');
    if (langFromUrl && ['fr', 'en'].includes(langFromUrl)) {
      targetLang = langFromUrl;
    }
    // 2. Sinon, vérifier le localStorage (via le store)
    else if (storeLanguage && ['fr', 'en'].includes(storeLanguage)) {
      targetLang = storeLanguage;
    }
    // 3. Sinon, si la session est chargée, vérifier la session utilisateur
    // else if (status !== 'loading' && session?.user?.language && ['fr', 'en'].includes(session.user.language)) {
    //   targetLang = session.user.language;
    // }
    // 4. En dernier recours, utiliser la langue par défaut
    else if (status !== 'loading') {
      // Ne forcer la langue par défaut que si la session est chargée
      targetLang = 'fr';
    }

    // Synchroniser seulement si on a déterminé une langue
    if (targetLang) {
      // Synchroniser le store avec la langue déterminée (sauf si c'est déjà la bonne)
      if (targetLang !== storeLanguage) {
        setLanguage(targetLang);
      }

      // Synchroniser i18n avec la langue déterminée
      if (targetLang !== i18n.language) {
        i18n.changeLanguage(targetLang);
      }
    }
  }, [ status, searchParams, i18n, setLanguage, storeLanguage]);

  return null;
};

const LanguageUrlHandler = () => {
  return (
    <Suspense fallback={null}>
      <LanguageUrlHandlerContent />
    </Suspense>
  );
};

export default LanguageUrlHandler;