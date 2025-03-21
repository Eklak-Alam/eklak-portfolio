
'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // or a fallback, or just render static HTML

  return (
    <section id="contact" className="w-full px-4 py-16 bg-gradient-to-b from-white to-blue-50">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-14 relative inline-block"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }} // replaces whileInView for client-only animations
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Contact Me
        </span>
      </motion.h2>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Info */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Eklak Alam</h3>
          <p className="text-gray-600 text-sm mb-6">Full Stack Developer | Java | React | Spring Boot</p>

          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="text-blue-500 mr-3" />
              <span>eklakemail@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaPhoneAlt className="text-blue-500 mr-3" />
              <span>+91 7070XXXXXX</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/Eklak-Alam" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 hover:text-black text-2xl transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/eklak-alam-40ba632b5/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-600 hover:text-blue-700 text-2xl transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form Submitted! (Hook it to backend or email service)');
          }}
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="What do you want to say?"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
