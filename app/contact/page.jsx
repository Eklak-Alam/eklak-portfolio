'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // SSR prevention

  return (
    <section
      id="contact"
      className="w-full px-4 py-20 bg-gradient-to-b from-white to-blue-50"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 leading-tight tracking-tight relative inline-block"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Let's Connect!
        </span>
        <p className="text-lg md:text-xl text-gray-500 font-medium mt-2">
          Have a project or just want to say hello? Reach out!
        </p>
      </motion.h2>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Contact Info */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between space-y-10 border border-gray-100"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Eklak Alam
            </h3>
            <p className="text-gray-600 text-base">
              Full Stack Developer | Java | React | Spring Boot
            </p>
          </div>

          <div className="space-y-4 text-gray-700 text-sm">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-3" size={18} />
              <span>eklakemail@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-600 mr-3" size={18} />
              <span>+91 7070XXXXXX</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <a
              href="https://github.com/Eklak-Alam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-gray-700 hover:text-black text-2xl transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/eklak-alam-40ba632b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-700 hover:text-blue-700 text-2xl transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          className="bg-white rounded-3xl shadow-xl p-10 space-y-6 border border-gray-100"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks for reaching out! (Hook it up to your backend/email service)');
          }}
        >
          {/* Name Field */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="name"
              className="text-gray-700 text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-gray-700 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-gray-700 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-center text-sm md:text-base w-full"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
