"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sectionPadding } from '../styles/styles';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('GykA6BSKGY9wLE29Z');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_i5znipo',
        'template_zf9ueu7',
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');
      console.error('Email error:', error);
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "Nelsonokosun@hotmail.com",
      link: "mailto:Nelsonokosun@hotmail.com"
    },
    // {
    //   icon: <Phone size={24} />,
    //   title: "Phone",
    //   value: "+234 XXX XXX XXXX",
    //   link: "tel:+234XXXXXXXXX"
    // },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Available Worldwide",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nelsonokosun/",
      color: "hover:text-blue-400"
    },
    // {
    //   icon: <Instagram size={20} />,
    //   name: "Instagram",
    //   url: "https://instagram.com/nelson_okosun",
    //   color: "hover:text-pink-400"
    // },
    {
      icon: <Mail size={20} />,
      name: "Email",
      url: "mailto:Nelsonokosun@hotmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <motion.section
      id="contact"
      className={`${sectionPadding} bg-black min-h-screen w-full flex items-center justify-center md:py-16 py-12 px-4`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      >
      <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-purple-600">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your next GIS project? Let's discuss how I can help transform your spatial data into actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-purple-600 mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.2 + index * 0.05 }}
                  className="flex items-center space-x-4 p-4 bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-purple-600">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-300 hover:text-purple-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center text-gray-300 hover:text-purple-600 transition-all duration-300 hover:scale-110 hover:bg-white/20"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-purple-600/30 border border-purple-600/30 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-white mb-2">Why Work With Me?</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 8+ years of GIS consulting experience</li>
                <li>• Proven track record with 50+ successful projects</li>
                <li>• Expert in both technical implementation and project management</li>
                <li>• Available for remote and on-site collaboration</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                  placeholder="Project inquiry, consultation, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and how I can help..."
                />
              </div>

              <div className="space-y-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-600/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                  >
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <p className="text-green-300 text-sm">{statusMessage}</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                    <p className="text-red-300 text-sm">{statusMessage}</p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;