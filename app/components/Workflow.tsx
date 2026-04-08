'use client';

import { Search, Palette, Code, CheckCircle2, Rocket, Wrench, Sparkles, Users, Trophy } from 'lucide-react';

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

  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="gradient-text">Workflow & Process</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Berikut adalah proses yang saya ikuti untuk memastikan project Anda berjalan dengan sukses.
        </p>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connecting Line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent opacity-50"></div>
              )}

              <div className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 rounded-lg group-hover:shadow-2xl transition-all group-hover:shadow-cyan-500/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-20"></div>
                    <div className="relative h-full flex items-center justify-center border border-cyan-400/50 rounded-lg group-hover:border-cyan-400 transition-colors">
                      <span className="text-2xl font-bold gradient-text">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 neon-border p-6 rounded-lg bg-slate-950/50 group-hover:bg-slate-900/70 transition-all">
                  <div className="flex items-start gap-4">
                    {(() => {
                      const IconComponent = step.icon;
                      return <IconComponent size={48} className="text-cyan-400 flex-shrink-0 group-hover:text-magenta-400 transition-colors" />;
                    })()}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-magenta-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { number: '50+', label: 'Projects Completed', icon: Sparkles },
            { number: '40+', label: 'Happy Clients', icon: Users },
            { number: '5+', label: 'Years Experience', icon: Trophy },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="neon-border p-6 rounded-lg bg-slate-950/50 text-center hover:bg-slate-900 transition-all">
                <IconComponent size={48} className="text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
