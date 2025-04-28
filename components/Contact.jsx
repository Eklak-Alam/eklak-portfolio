'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const form = useRef(); // For form reference
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_m8xjldu', // Replace with your Service ID
        'Ytemplate_81hm4zn', // Replace with your Template ID
        form.current,
        'ks97KAMEjoyIZlezQ' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccessMessage('Message sent successfully!');
          form.current.reset(); // Clear form
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setSuccessMessage('Failed to send message. Please try again!');
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full px-4 py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16 leading-tight tracking-tight relative inline-block"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
          Let's Connect!
        </span>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mt-2">
          Have a project or just want to say hello? Reach out!
        </p>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Contact Info */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col justify-between space-y-10 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Eklak Alam
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Full Stack Developer | Java | React | Spring Boot
            </p>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-3" size={18} />
              <span>eklakemail@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-600 dark:text-blue-400 mr-3" size={18} />
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
              <FaGithub className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/eklak-alam-40ba632b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 text-2xl transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 space-y-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Name attribute required for EmailJS
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-lg text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Name attribute required for EmailJS
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-lg text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message" // Name attribute required for EmailJS
              rows={5}
              required
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-lg text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            />
          </div>

          {successMessage && (
            <p className="text-center text-sm text-green-600 dark:text-green-400">
              {successMessage}
            </p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-center text-sm md:text-base w-full disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
