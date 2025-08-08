import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Globe, Shield } from "lucide-react";
import { Logo, LogoMark } from "./logo";
import { SimpleSocialFooter } from "./simple-social-footer";

export function Footer() {
  return (
    <footer className="bg-royal-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <LogoMark size="sm" className="text-white mr-3" />
              <div>
                <span className="text-xl font-bold text-white">
                  GlobalTrack
                </span>
                <span className="text-lg text-orange-500 ml-1">Logistics</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for global shipping solutions. We provide
              fast, secure, and reliable logistics services worldwide with
              real-time tracking.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-300">120+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-300">Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/track"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Track Package
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/newspaper"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">
              Services
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Air Freight</li>
              <li className="text-gray-300">Ocean Freight</li>
              <li className="text-gray-300">Ground Transport</li>
              <li className="text-gray-300">Express Delivery</li>
              <li className="text-gray-300">Customs Clearance</li>
              <li className="text-gray-300">Warehousing</li>
            </ul>
          </div>

          {/* Social Media & Contact Section */}
          <div>
            <SimpleSocialFooter className="" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-royal-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 GlobalTrack Logistics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/security"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Security
              </Link>
              <Link
                to="/login?admin=true"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center"
              >
                <Shield className="h-3 w-3 mr-1" />
                Admin Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
