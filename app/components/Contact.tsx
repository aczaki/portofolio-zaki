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
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Achmad Zaki Ramadani',
      link: 'https://www.linkedin.com/in/achmad-zaki-ramadani-4626a6365/',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'aczaki',
      link: 'https://github.com/aczaki',
      color: 'from-foreground/80 to-foreground',
    },
    {
      icon: FaInstagram,
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
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mari Berkolaborasi
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-foreground/70 mb-12 text-lg"
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-12"
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
                className="group bg-white/65 backdrop-blur-md border border-border-color rounded-lg md:rounded-xl p-4 md:p-6 hover:shadow-lg hover:border-secondary transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className={`inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-lg bg-gradient-to-br ${contact.color} mb-3 md:mb-4`}>
                  <IconComponent className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                  {contact.title}
                </h3>
                <p className="text-foreground/70 text-xs md:text-sm break-all hover:text-primary transition-colors line-clamp-3">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border-color"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
