'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'spring' as const, damping: 15, stiffness: 30 },
    },
  };

  const scrollDown = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative gradient blur backgrounds */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-50/20 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/2"></div>

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block text-gray-900">Halo, Saya</span>
            <span className="block bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Achmad Zaki Ramadani
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-600 font-medium mb-6"
        >
          Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Saya membangun pengalaman digital yang indah dan fungsional. Spesialisasi dalam{' '}
          <span className="text-purple-600 font-semibold">Laravel, Next.js, TypeScript</span> dan teknologi modern lainnya.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-linear-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Lihat Proyek
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-300 hover:-translate-y-1"
          >
            Hubungi Saya
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center pt-8"
        >
          <button
            onClick={scrollDown}
            className="p-2 rounded-full border-2 border-gray-300 text-gray-600 hover:border-purple-400 hover:text-purple-600 transition-all duration-300"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
