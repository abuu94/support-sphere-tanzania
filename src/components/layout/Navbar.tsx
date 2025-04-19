
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AccessibilityMenu from '../shared/AccessibilityMenu';
import LanguageSwitcher from '../shared/LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm relative border-b">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-10">
              <span className="text-supportBlue-500 font-ubuntu font-bold text-2xl">Support<span className="text-supportOrange-500">Sphere</span></span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/skills" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                {t('nav.skills')}
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                {t('nav.products')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <AccessibilityMenu />
            
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {t('nav.login')}
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-supportBlue-500 hover:bg-supportBlue-600">
                  {t('nav.register')}
                </Button>
              </Link>
            </div>
            
            <button 
              className="md:hidden text-gray-700 focus:outline-none" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full z-50 shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              {t('nav.about')}
            </Link>
            <Link to="/skills" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              {t('nav.skills')}
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              {t('nav.products')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              {t('nav.contact')}
            </Link>
            <div className="flex flex-col space-y-3 pt-3 border-t">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full justify-center">
                  <User className="mr-2 h-4 w-4" />
                  {t('nav.login')}
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full justify-center bg-supportBlue-500 hover:bg-supportBlue-600">
                  {t('nav.register')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
