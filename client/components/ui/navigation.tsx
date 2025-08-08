import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { GetQuoteModal } from "./get-quote-modal";
import { Logo, LogoMark } from "./logo";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/track", label: "Track Package" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/newspaper", label: "News" },
    { href: "/chat", label: "Live Chat" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Main Navigation */}
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <LogoMark
              size="sm"
              className="transition-transform hover:scale-105 mr-3"
            />
            <div>
              <span className="text-xl font-bold text-royal-600">
                GlobalTrack
              </span>
              <span className="text-lg text-orange-500 ml-1">Logistics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium text-sm xl:text-base transition-all duration-200 hover:text-royal-600 py-2 ${
                  location.pathname === item.href
                    ? "text-royal-600 border-b-2 border-royal-600"
                    : "text-gray-700 hover:text-royal-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3 ml-6">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                size="sm"
                className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-300 px-6"
              >
                Get Quote
              </Button>
              <Link to="/admin/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Admin
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white transition-all duration-300"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
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
                  location.pathname === item.href
                    ? "text-royal-600"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="space-y-3 mt-4">
              <Button
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 text-white"
              >
                Get Quote
              </Button>
              <Link to="/admin" className="block w-full">
                <Button
                  variant="outline"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  Admin Panel
                </Button>
              </Link>
              <Link to="/login" className="block w-full">
                <Button
                  variant="outline"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <GetQuoteModal
        open={isQuoteModalOpen}
        onOpenChange={setIsQuoteModalOpen}
      />
    </nav>
  );
}
