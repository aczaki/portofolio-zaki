'use client';

import { Search, Palette, Code, CheckCircle2, Rocket, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'Saya memahami kebutuhan Anda, melakukan riset pasar, dan merencanakan solusi yang tepat.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Design & Mockup',
      description: 'Membuat wireframe dan mockup visual menggunakan Figma untuk persetujuan sebelum development.',
      icon: Palette,
    },
    {
      number: '03',
      title: 'Development',
      description: 'Menulis kode berkualitas tinggi dengan best practices, testing, dan version control.',
      icon: Code,
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Testing menyeluruh untuk memastikan aplikasi berfungsi sempurna di semua platform.',
      icon: CheckCircle2,
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'Deploy ke production dengan confidence menggunakan CI/CD pipelines dan monitoring.',
      icon: Rocket,
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Dukungan berkelanjutan, bug fixes, dan improvements berdasarkan feedback pengguna.',
      icon: Wrench,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Workflow & Process
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Berikut adalah proses yang saya ikuti untuk memastikan project Anda berjalan dengan sukses.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                variants={stepVariants}
                whileHover={{ translateY: -4 }}
                className="bg-white/65 backdrop-blur-md border border-border-color rounded-xl p-6 hover:shadow-lg hover:border-secondary transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
