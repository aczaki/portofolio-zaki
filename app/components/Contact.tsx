'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Pesan terkirim! Saya akan segera membalas.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('❌ Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (error) {
      alert('❌ Terjadi kesalahan. Silakan coba lagi.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="gradient-text">Mari Berkolaborasi</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Memiliki pertanyaan atau ingin memulai project? Hubungi saya sekarang juga!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Mail,
              title: 'Email',
              value: 'achmadzakir.work@gmail.com',
              link: 'mailto:achmadzakir.work@gmail.com',
            },
            {
              icon: FaLinkedin,
              title: 'LinkedIn',
              value: 'linkedin.com/in/achmad-zaki-ramadani-4626a6365',
              link: 'https://www.linkedin.com/in/achmad-zaki-ramadani-4626a6365/',
            },
            {
              icon: FaGithub,
              title: 'GitHub',
              value: 'github.com/aczaki',
              link: 'https://github.com/aczaki',
            },
          ].map((contact, idx) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-border p-6 rounded-lg bg-slate-950/50 hover:bg-slate-900 transition-all text-center group"
              >
                <IconComponent size={48} className="text-cyan-400 mx-auto mb-3 group-hover:text-magenta-400 transition-colors" />
                <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-magenta-400 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-400 text-sm break-all">{contact.value}</p>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        {/* <form onSubmit={handleSubmit} className="neon-border p-8 rounded-lg bg-slate-950/50 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-cyan-400 mb-2">
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-cyan-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-cyan-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-900/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="Topik pesan Anda"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-cyan-400 mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-slate-900/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              placeholder="Tuliskan pesan Anda di sini..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full glow-button py-3 rounded-lg font-semibold text-white hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Send size={20} />
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </form> */}

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Atau hubungi saya di media sosial:</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: Mail, link: '#', label: 'Email' },
              { icon: FaLinkedin, link: 'https://www.linkedin.com/in/achmad-zaki-ramadani-4626a6365/', label: 'LinkedIn' },
              { icon: FaGithub, link: 'https://github.com/aczaki', label: 'GitHub' },            
              { icon: FaInstagram, link: 'https://www.instagram.com/aczaki.r/', label: 'Instagram' },            ].map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 transition-all group"
                  title={social.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
