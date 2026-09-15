'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectsProps {
  showViewAll?: boolean;
  title?: string;
}

export default function Projects({ showViewAll = true, title = "Featured Projects" }: ProjectsProps = {}) {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'SiData DISKOMINFO SP Kota Surakarta',
      description:
        'Platform milik Pemerintah Kota Surakarta dikembangkan dalam program magang di Dinas Komunikasi dan Informatika. Menampilkan data kependudukan dalam bentuk statistik interaktif dengan fitur filter dan visualisasi yang menarik.',
      image: '/images/sidata.png',
      tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Authentication'],
      liveUrl: '#',
      githubUrl: 'https://github.com/aczaki/sidata.git',
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
      githubUrl: 'https://github.com/aczaki/smartdraft.git',
      featured: true,
    },
    {
      id: 3,
      title: 'Inventory Management System',
      description:
        'Website untuk mengelola inventaris barang gudang meliputi stok masuk, stok keluar, dan laporan inventaris. Dilengkapi dengan fitur autentikasi dan manajemen pengguna.',  
      image: '/images/inventory.png',
      tags: ['Laravel 13', 'Tailwind CSS', 'React.js', 'MySQL', 'Authentication'],
      liveUrl: '#',
      githubUrl: 'https://github.com/aczaki/inventory-management.git',
      featured: true,
    }
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
            {title}
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
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col cursor-pointer"
            >
              {/* Project Image/Icon Area */ }
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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl !== '#' ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.liveUrl === '#') e.preventDefault();
                      }}
                      className={`flex-1 text-center flex items-center justify-center gap-2 font-semibold py-2 rounded-lg transition-all duration-300 ${project.liveUrl !== '#' ? 'text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50' : 'text-gray-400 bg-gray-50 cursor-not-allowed'}`}
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target={project.githubUrl !== '#' ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.githubUrl === '#') e.preventDefault();
                      }}
                      className={`flex-1 text-center flex items-center justify-center gap-2 font-semibold py-2 rounded-lg transition-all duration-300 ${project.githubUrl !== '#' ? 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50' : 'text-gray-400 bg-gray-50 cursor-not-allowed'}`}
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
        {showViewAll && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 gap-2"
            >
              Lihat Semua Proyek
              <ExternalLink size={18} />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Modal Detail Project */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 9999 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10 transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-1">
                {/* Header Image */}
                <div className="h-64 sm:h-80 w-full relative bg-gray-100">
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-cyan-100 to-cyan-50">
                      📸
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full border border-cyan-200 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="prose max-w-none text-gray-600 mb-8">
                    <p className="text-base sm:text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target={selectedProject.liveUrl !== '#' ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (selectedProject.liveUrl === '#') e.preventDefault();
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all shadow-sm ${selectedProject.liveUrl !== '#' ? 'bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                      >
                        <ExternalLink size={20} />
                        Kunjungi Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target={selectedProject.githubUrl !== '#' ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (selectedProject.githubUrl === '#') e.preventDefault();
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all shadow-sm ${selectedProject.githubUrl !== '#' ? 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                      >
                        <FaGithub size={20} />
                        Lihat Kode (GitHub)
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
