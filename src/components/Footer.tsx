
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Recycle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wasteTrade-neutral-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-wasteTrade-green-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-wasteTrade-green-600 to-wasteTrade-blue-500 bg-clip-text text-transparent">
                WasteTrade
              </span>
            </div>
            <p className="text-sm text-wasteTrade-neutral-600 max-w-xs">
              Connecting businesses and individuals to trade recyclable and reusable materials efficiently.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-wasteTrade-neutral-500 hover:text-wasteTrade-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-wasteTrade-neutral-500 hover:text-wasteTrade-green-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-wasteTrade-neutral-500 hover:text-wasteTrade-green-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-wasteTrade-neutral-500 hover:text-wasteTrade-green-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/materials" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  Materials
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-wasteTrade-neutral-600 hover:text-wasteTrade-green-600 transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-wasteTrade-green-600 flex-shrink-0 mt-1" />
                <span className="text-wasteTrade-neutral-600">
                  123 Eco Street, Green City, Earth 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-wasteTrade-green-600 flex-shrink-0" />
                <span className="text-wasteTrade-neutral-600">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-wasteTrade-green-600 flex-shrink-0" />
                <span className="text-wasteTrade-neutral-600">
                  info@wastetrade.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wasteTrade-neutral-200 mt-10 pt-6 text-center text-sm text-wasteTrade-neutral-600">
          <p>© {new Date().getFullYear()} WasteTrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
