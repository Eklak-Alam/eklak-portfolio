'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-900 to-black text-white">
      <motion.div
        className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Logo + Tagline */}
        <motion.div
          className="flex flex-col space-y-4 w-full md:w-1/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white">Eklak Alam</h3>
          <p className="text-gray-400 text-sm">Full Stack Developer | Java | React | Nextjs | Spring Boot</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-col space-y-4 w-full md:w-1/4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition-colors cursor-pointer"><Link href='/'>Home</Link></li>
            <li className="hover:text-white transition-colors cursor-pointer"><Link href='/about'>About</Link></li>
            <li className="hover:text-white transition-colors cursor-pointer"><Link href='/projects'>Projects</Link></li>
            <li className="hover:text-white transition-colors cursor-pointer"><Link href='/contact'>Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col space-y-4 w-full md:w-1/4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h4 className="text-xl font-semibold text-white">Contact</h4>
          <div className="flex items-center text-gray-400">
            <FaEnvelope className="text-blue-400 mr-3" />
            <span>eklakalam420@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-400">
            <FaPhoneAlt className="text-blue-400 mr-3" />
            <span>+91 7070XXXXXX</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-col space-y-4 w-full md:w-1/4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h4 className="text-xl font-semibold text-white">Follow Me</h4>
          <div className="flex space-x-4 text-gray-400 text-2xl">
            <a
              href="https://github.com/eklak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/eklak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        &copy; {new Date().getFullYear()} Eklak Alam. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
