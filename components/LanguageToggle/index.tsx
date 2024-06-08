import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={toggleLanguage}
        className={`uppercase ${language === 'en' ? 'opacity-100' : 'opacity-60'}`}
      >
        En
      </button>
      /
      <button
        onClick={toggleLanguage}
        className={`uppercase ${language === 'es' ? 'opacity-100' : 'opacity-60'}`}
      >
        Es
      </button>
    </div>
  );
};

export default LanguageToggle;

