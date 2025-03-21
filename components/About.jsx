'use client';

import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/aboutimg2.jpg'
import Image from 'next/image';

const About = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4 py-16"
    >
      
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Container */}
      <motion.div
        className="max-w-4xl w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center w-full py-10"
        >
      <div className="relative">
        <Image
          src={aboutImage}
          alt="Eklak Alam"
          width={500}  // Original image size for Next.js optimization
          height={500}
          className="
            rounded-full object-cover border-4 border-blue-200 shadow-lg
            w-48 h-48        // default mobile (128px)
            sm:w-48 sm:h-48  // small devices (192px)
            md:w-56 md:h-56  // medium devices (224px)
            lg:w-64 lg:h-64  // large devices (256px)
            xl:w-72 xl:h-72  // extra large devices (288px)
            2xl:w-80 2xl:h-80 // extra extra large (320px)
          "
        />
      </div>
    </motion.div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
            Hi, I'm Eklak Alam 👋
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I’m a passionate Frontend Developer with experience in building responsive and interactive web applications using React, Next.js, and TailwindCSS. I enjoy crafting clean UI/UX with smooth animations using Framer Motion. On the backend, I work with Node.js and explore DevOps practices.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I'm also a content creator sharing my knowledge on web development and helping others grow in tech!
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
              Frontend Developer
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
              Backend Developer
            </span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
              DevOps Beginner
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
              Content Creator
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
