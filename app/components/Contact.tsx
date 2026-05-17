'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'achmadzakir.work@gmail.com',
      link: 'mailto:achmadzakir.work@gmail.com',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: FaLinkedin as any,
      title: 'LinkedIn',
      value: 'Achmad Zaki Ramadani',
      link: 'https://www.linkedin.com/in/achmad-zaki-ramadani-4626a6365/',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaGithub as any,
      title: 'GitHub',
      value: 'aczaki',
      link: 'https://github.com/aczaki',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: FaInstagram as any,
      title: 'Instagram',
      value: 'aczaki.r',
      link: 'https://www.instagram.com/aczaki.r/',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-linear-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
            Mari Berkolaborasi
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Memiliki pertanyaan atau ingin memulai project? <br />
          Hubungi saya sekarang juga!
        </motion.p>

        {/* Contact Methods */}
        <motion.div 
          className="grid grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((contact, idx) => {
            const IconComponent = contact.icon;
            return (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ translateY: -4 }}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-300 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-600 text-sm break-all hover:text-cyan-600 transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
