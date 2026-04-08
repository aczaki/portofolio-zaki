'use client';

import Image from 'next/image';
import { User, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  // Ganti URL ini dengan link foto profil Anda
  const profileImage = '/images/profile.jpg'; // Atau gunakan URL web: 'https://example.com/photo.jpg'

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text">Tentang Saya</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Side - Image Placeholder */}
          <div className="relative">
            <div className="neon-border rounded-lg p-1">
              <div className="bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt="Foto Profil"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="text-center">
                    <User size={128} className="text-cyan-400 mx-auto opacity-50" />
                    <p className="text-gray-500 mt-4">Foto Profil</p>
                  </div>
                )}
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-400/30 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-magenta-500/30 rounded-lg"></div>
          </div>

          {/* Middle - Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Saya adalah seorang <span className="text-cyan-400 font-semibold">Full Stack Developer</span> yang passionate
              tentang menciptakan solusi web yang inovatif dan user-centric.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Saya percaya bahwa teknologi yang baik harus meningkatkan kehidupan pengguna. Oleh karena itu, saya
              selalu fokus pada:
            </p>

            <ul className="space-y-3">
              {[
                'Menulis kode yang bersih, maintainable, dan scalable',
                'Menciptakan antarmuka yang intuitif dan menarik',
                'Mengoptimalkan performa dan user experience',
                'Belajar teknologi terbaru dan best practices',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-cyan-400 mt-0 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-6">
              <a href="#contact" className="glow-button px-6 py-2 rounded-lg font-semibold text-white">
                Hubungi Saya
              </a>
              <a href="#projects" className="px-6 py-2 rounded-lg font-semibold text-cyan-400 border border-cyan-400 hover:bg-cyan-400/10 transition-all">
                Lihat Proyek
              </a>
            </div>
          </div>

          {/* Right Side - Education & Experience */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Pendidikan</h3>

            {[
              {
                icon: GraduationCap,
                title: 'Sarjana Informatika',
                subtitle: 'Universitas Muhammadiyah Surakarta',
                period: '2022 - 2026',
                ipk: '3.54 / 4.00',
              },
              
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="neon-border rounded-lg p-1">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1">
                        <IconComponent className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-cyan-300">{item.title}</h4>
                          <p className="text-gray-400 text-xs">{item.subtitle}</p>
                          <p className="text-gray-500 text-xs mt-1">{item.period}</p>
                        </div>
                      </div>
                      {item.ipk && (
                        <div className="flex flex-col items-center gap-1 pl-2 border-l border-cyan-400/30">
                          <p className="text-xs text-gray-400">IPK</p>
                          <p className="text-sm font-bold text-cyan-400">{item.ipk}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
