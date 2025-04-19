
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Bell } from 'lucide-react';
import AccessibilityMenu from '../shared/AccessibilityMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm relative border-b">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Main Navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-10">
              <span className="text-supportBlue-500 font-ubuntu font-bold text-2xl">Support<span className="text-supportOrange-500">Sphere</span></span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                About Us
              </Link>
              <Link to="/skills" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                Skills
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-supportBlue-500 font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Auth and Accessibility */}
          <div className="flex items-center space-x-4">
            <AccessibilityMenu />
            
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-supportBlue-500 hover:bg-supportBlue-600">Register</Button>
              </Link>
            </div>
            
            {/* Mobile menu button */}
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
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full z-50 shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/skills" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              Skills
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-supportBlue-500 py-2 font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-3 border-t">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full justify-center">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full justify-center bg-supportBlue-500 hover:bg-supportBlue-600">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
