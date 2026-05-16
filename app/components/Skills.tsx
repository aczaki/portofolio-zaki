'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Zap, Palette } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'Framer Motion'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Backend',
      icon: Code2,
      skills: ['Node.js', 'PHP', 'Laravel', 'RESTful API', 'Authentication', 'Deployment'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'SQL', 'Database Design', 'Query Optimization'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Tools & DevOps',
      icon: Zap,
      skills: ['Git', 'GitHub', 'Vercel', 'Docker', 'CI/CD', 'Linux'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const softSkills = [
    { title: 'Problem Solving', desc: 'Analisis mendalam dan solusi kreatif' },
    { title: 'Communication', desc: 'Penjelasan teknis yang mudah dipahami' },
    { title: 'Teamwork', desc: 'Kolaborasi yang efektif dengan tim' },
    { title: 'Leadership', desc: 'Membimbing dan mentoring junior developers' },
    { title: 'Adaptability', desc: 'Cepat belajar teknologi baru' },
    { title: 'Attention to Detail', desc: 'Perhatian pada kualitas kode' },
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </motion.h2>

        {/* Skill Categories */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={idx}
                variants={categoryVariants}
                whileHover={{ translateY: -4 }}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Soft Skills</h3>
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={categoryVariants}
                className="bg-white p-4 rounded-lg border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
