import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { vopInfo } from '../data/vopData';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Вільний Освітній Простір" 
            className="w-11 h-11 rounded-full object-cover shadow-sm border border-slate-200" 
          />
          <div>
            <span className="font-bold text-slate-900 text-base sm:text-lg leading-tight block">
              {vopInfo.name}
            </span>
            <span className="text-xs text-slate-500 hidden sm:block">Громадська організація</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#about" className="hover:text-blue-600 transition-colors">Про нас</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Проєкти</a>
          <a href="#schedule" className="hover:text-blue-600 transition-colors">Події</a>
          <a href="#contacts" className="hover:text-blue-600 transition-colors">Контакти</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#join"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            Долучитися
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-blue-600"
          >
            Про нас
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-blue-600"
          >
            Проєкти
          </a>
          <a
            href="#schedule"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-blue-600"
          >
            Події
          </a>
          <a
            href="#contacts"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-blue-600"
          >
            Контакти
          </a>
          <a
            href="#join"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-blue-600 text-white font-medium py-2.5 rounded-xl mt-4"
          >
            Долучитися
          </a>
        </div>
      )}
    </header>
  );
};