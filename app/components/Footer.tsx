'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Beranda', href: '#hero' },
        { name: 'Tentang', href: '#about' },
        { name: 'Proyek', href: '#projects' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, label: 'Twitter', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/achmad-zaki-ramadani-4626a6365/' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/aczaki' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/aczaki.r/' },
  ];

  return (
    <footer className="bg-slate-950/80 border-t border-cyan-500/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">Achmad Zaki</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 flex items-center justify-center rounded border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 transition-all group"
                    title={social.label}
                  >
                    <IconComponent className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-cyan-400 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {year} Achmad Zaki Ramadani. All rights reserved. | Made with ❤️ using Next.js & Tailwind CSS
          </p>
          <div className="flex gap-6">
            <a href="#">
              <span className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">Terms</span>
            </a>
            <a href="#">
              <span className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">Privacy</span>
            </a>
            <a href="#hero" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
