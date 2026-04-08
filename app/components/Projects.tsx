'use client';

import { useState } from 'react';

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'SiData DISKOMINFO SP Kota Surakarta',
      description:
        'Platform milik Pemerintah Kota Surakarta dikembangkan dalam program magang di Dinas Komunikasi dan Informatika Statistik dan Persandian Kota Surakarta. Menampilkan data kependudukan dalam bentuk statistik interaktif dengan fitur filter dan visualisasi yang menarik.',
      image: '/images/sidata.png',
      tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Authentication'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'SmartDraft - Website pembuatan surat otomatis menggunakan Regex',
      description:
        'Website untuk membuat surat otomatis menggunakan regex untuk memvalidasi dan mengisi formulir secara dinamis.',
      image: '/images/smartdraft.png',
      tags: ['Laravel 12', 'Tailwind CSS', 'MySQL', 'Authentication'],
      liveUrl: 'https://smartdraft.smartsense.my.id',
      githubUrl: '#',
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group neon-border rounded-lg overflow-hidden bg-slate-950/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image/Icon Area */}
              <div className="h-40 bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    📸
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-magenta-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-cyan-400/10 text-cyan-300 rounded border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-cyan-400/20">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-center text-cyan-400 hover:text-cyan-300 font-semibold py-2 rounded hover:bg-cyan-400/10 transition-all"
                    >
                      Live →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex-1 text-center text-gray-400 hover:text-cyan-400 font-semibold py-2 rounded hover:bg-cyan-400/10 transition-all"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="glow-button px-8 py-3 rounded-lg font-semibold text-white inline-block hover:shadow-2xl transition-all"
          >
            Lihat Semua Proyek →
          </a>
        </div>
      </div>
    </section>
  );
}
