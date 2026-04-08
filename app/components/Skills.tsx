'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5'],
      level: 80,
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'PHP', 'MySQL', 'MongoDB', 'REST API'],
      level: 85,
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub Actions', 'Vercel'],
      level: 75,
    },
    {
      title: 'Design & UX',
      skills: ['Figma', 'UI/UX Design', 'Canva', 'Accessibility', 'Performance'],
      level: 70,
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text">Skill & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="neon-border p-6 rounded-lg bg-slate-900/50 hover:bg-slate-900/70 transition-all">
              {/* Category Title */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-cyan-400">{category.title}</h3>
                <span className="text-3xl text-magenta-500">{category.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6 relative">
                <div className="bg-slate-800 rounded-full h-2 overflow-hidden border border-cyan-400/30">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                    style={{ width: `${category.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/50 rounded-full text-sm text-cyan-300 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 p-8 neon-border rounded-lg bg-slate-900/50">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Problem Solving', desc: 'Analisis mendalam dan solusi kreatif' },
              { title: 'Communication', desc: 'Penjelasan teknis yang mudah dipahami' },
              { title: 'Teamwork', desc: 'Kolaborasi yang efektif dengan tim' },
              { title: 'Leadership', desc: 'Membimbing dan mentoring junior developers' },
              { title: 'Adaptability', desc: 'Cepat belajar teknologi baru' },
              { title: 'Attention to Detail', desc: 'Perhatian pada kualitas kode' },
            ].map((skill, idx) => (
              <div key={idx} className="p-4 bg-slate-950/50 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
                <h4 className="font-semibold text-cyan-400 mb-2">{skill.title}</h4>
                <p className="text-sm text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
