import { Link, useLocation } from "react-router-dom";
import { Package, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { GetQuoteModal } from "./get-quote-modal";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/track", label: "Track Package" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-royal-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@globaltrack.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Global Shipping Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Package className="h-8 w-8 text-royal-600" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-royal-600">GlobalTrack</span>
              <span className="text-lg text-orange-500 ml-1">Logistics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors hover:text-royal-600 ${
                  location.pathname === item.href
                    ? "text-royal-600 border-b-2 border-royal-600 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 text-white"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-2 font-medium transition-colors hover:text-royal-600 ${
                  location.pathname === item.href ? "text-royal-600" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 text-white">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
