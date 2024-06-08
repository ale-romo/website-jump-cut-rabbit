'use client'
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/app/translations';

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language];
};
