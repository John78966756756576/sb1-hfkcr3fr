import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Flux
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#generate" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Generate
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Gallery
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#docs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Docs
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <a href="#generate" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Generate
            </a>
            <a href="#gallery" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Gallery
            </a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Pricing
            </a>
            <a href="#docs" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Docs
            </a>
            <div className="flex space-x-4 py-2">
              <button className="text-gray-700 hover:text-purple-600 transition-colors">
                Login
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;