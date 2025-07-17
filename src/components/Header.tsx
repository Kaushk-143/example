import React from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Dumroo.ai</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">About Us</a>
            <a href="#ai-tools" className="text-slate-300 hover:text-white transition-colors">AI Tools</a>
            <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Why Choose Us?</a>
            <ThemeToggle />
            <a href="https://dumroo.ai/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#how-it-works" className="block px-3 py-2 text-slate-300 hover:text-white">About Us</a>
              <a href="#ai-tools" className="block px-3 py-2 text-slate-300 hover:text-white">AI Tools</a>
              <a href="#testimonials" className="block px-3 py-2 text-slate-300 hover:text-white">Why Choose Us?</a>
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
              <a href="https://dumroo.ai/login" className="block w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors mt-2">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}