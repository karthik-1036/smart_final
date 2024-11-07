import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">SmartPiece</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">Home</a>
          <a href="about.html" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
          <a href="contact.html" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600 transition duration-300">
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 py-4 px-6">
          <div className="space-y-4">
            <a href="#" className="block text-lg font-medium text-blue-600 hover:text-blue-800 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="about.html" className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="contact.html" className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
