'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaTwitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/achmad-zaki-ramadani-4626a6365/', color: 'hover:text-blue-600' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/aczaki', color: 'hover:text-foreground' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/aczaki.r/', color: 'hover:text-pink-500' },
  ];

  const quickLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border-color bg-white/65 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
              Achmad Zaki
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-foreground/60 transition-colors duration-300 ${social.color} hover:scale-110 transform transition-transform`}
                    title={social.label}
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scroll to Top */}
          <div className="flex flex-col items-start md:items-end justify-start h-full">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-color text-foreground/70 hover:text-primary hover:border-secondary font-medium transition-all duration-300 text-sm"
              aria-label="Scroll to top"
            >
              Back to Top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-color my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-foreground/70 text-sm">
            &copy; {year} Achmad Zaki Ramadani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
