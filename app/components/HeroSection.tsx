'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="block text-white">Halo, Saya</span>
          <span className="gradient-text block text-6xl md:text-7xl">
            Achmad Zaki Ramadani
          </span>
        </h1>

        {/* Typing Text */}
        <div className="text-2xl md:text-3xl text-cyan-400 mb-8 h-12 font-mono">
          {text}
          <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Saya membangun pengalaman digital yang indah dan fungsional. Spesialisasi dalam
          <span className="text-cyan-400"> Laravel, Next.js, TypeScript</span> dan teknologi modern lainnya.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="glow-button px-8 py-3 rounded-lg font-semibold text-white hover:shadow-2xl transition-all"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-all"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="animate-bounce">
            <ChevronDown size={28} className="text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
