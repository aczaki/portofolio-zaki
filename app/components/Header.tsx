'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-cyan-500/30 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold gradient-text">
              Achmad Zaki. 
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 animate-in fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 px-4 text-gray-300 hover:text-cyan-400 hover:bg-slate-900/50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
