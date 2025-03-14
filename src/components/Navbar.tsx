import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, Recycle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Recycle className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
            WasteTrade
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-green-600 transition duration-300">
            Home
          </Link>
          <Link to="/materials" className="text-gray-800 hover:text-green-600 transition duration-300">
            Materials
          </Link>
          <Link to="/how-it-works" className="text-gray-800 hover:text-green-600 transition duration-300">
            How It Works
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-green-600 transition duration-300">
            About
          </Link>
        </div>

        {/* Search and Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full hover:bg-green-100 transition duration-300 hover:text-green-800">
            <Search className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Link to="/sign-in">
            <Button variant="outline" className="rounded-full hover:bg-green-100 transition duration-300 hover:text-green-800">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="rounded-full bg-green-600 text-white hover:bg-green-700 hover:text-white transition duration-300">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-b py-4 px-6 animate-fade-in shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-green-600 transition duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/materials" 
              className="text-gray-800 hover:text-green-600 transition duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Materials
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-800 hover:text-green-600 transition duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-green-600 transition duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex space-x-3 pt-2">
              <Link to="/sign-in" className="flex-1">
                <Button variant="outline" className="rounded-full w-full hover:bg-green-100 transition duration-300">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button className="rounded-full w-full bg-green-600 text-white hover:bg-green-700 hover:text-white transition duration-300">
                  Register
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
