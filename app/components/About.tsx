'use client';

import Image from 'next/image';
import { User, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const profileImage = '/images/profile-v2.jpg';

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tentang Saya
          </span>
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side - Image */}
          <motion.div variants={itemVariants} className="relative group mx-auto w-full max-w-sm md:max-w-full">
            <div className="relative rounded-full aspect-square overflow-hidden shadow-lg border-4 border-border-color group-hover:border-primary group-hover:shadow-2xl transition-all duration-300">
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
                <div className="bg-linear-to-br from-primary/10 to-primary/5 w-full aspect-square flex items-center justify-center">
                  <User size={128} className="text-secondary" />
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Middle - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              Saya adalah seorang <span className="text-primary font-semibold">Full Stack Developer</span> yang passionate
              dalam menciptakan solusi web yang inovatif dan user-centric.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
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
                  <CheckCircle2 size={20} className="text-primary mt-1 shrink-0 flex-none" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-6">
              <a 
                href="#contact" 
                className="px-6 py-2 glow-button rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Hubungi Saya
              </a>
              <a 
                href="#projects" 
                className="px-6 py-2 border-2 border-border-color text-foreground rounded-lg font-semibold hover:border-secondary hover:bg-primary/50 transition-all duration-300"
              >
                Lihat Proyek
              </a>
            </div>
          </motion.div>

          {/* Right Side - Education & Experience */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4">Pendidikan</h3>

            <div className="bg-white/65 backdrop-blur-md rounded-lg p-4 border border-border-color hover:border-secondary hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Sarjana Informatika</h4>
                    <p className="text-xs text-foreground/70 mt-1">Universitas Muhammadiyah Surakarta</p>
                    <p className="text-xs text-primary font-medium mt-2">2022 - 2026 • IPK: 3.54/4.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 mt-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel', 'MySQL', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/5 border border-primary/30 rounded-full text-xs font-medium text-primary hover:bg-primary/10 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
