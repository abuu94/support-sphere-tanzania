
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sw' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      {i18n.language === 'en' ? '🇹🇿 Kiswahili' : '🇬🇧 English'}
    </Button>
  );
};

export default LanguageSwitcher;
