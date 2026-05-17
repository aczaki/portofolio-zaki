'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SiData DISKOMINFO SP Kota Surakarta',
      description:
        'Platform milik Pemerintah Kota Surakarta dikembangkan dalam program magang di Dinas Komunikasi dan Informatika. Menampilkan data kependudukan dalam bentuk statistik interaktif dengan fitur filter dan visualisasi yang menarik.',
      image: '/images/sidata.png',
      tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Authentication'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'SmartDraft - Website pembuatan surat otomatis',
      description:
        'Website untuk membuat surat otomatis menggunakan regex untuk memvalidasi dan mengisi formulir secara dinamis.',
      image: '/images/smartdraft.png',
      tags: ['Laravel 12', 'Tailwind CSS', 'MySQL', 'Authentication'],
      liveUrl: 'https://smartdraft.smartsense.my.id',
      githubUrl: '#',
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-linear-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ translateY: -8 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col"
            >
              {/* Project Image/Icon Area */}
              <div className="h-48 bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    📸
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-2.5 py-1 bg-cyan-50 text-cyan-700 rounded-full border border-cyan-200 hover:bg-cyan-100 transition-colors duration-300 font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center flex items-center justify-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold py-2 rounded-lg hover:bg-cyan-50 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center flex items-center justify-center gap-2 text-gray-600 hover:text-cyan-600 font-semibold py-2 rounded-lg hover:bg-cyan-50 transition-all duration-300"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 gap-2"
          >
            Lihat Semua Proyek
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
