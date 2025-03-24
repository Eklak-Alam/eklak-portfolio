'use client';

import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/aboutimg2.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#131313] px-4 py-16 transition-colors duration-500 mt-10">
      
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Container */}
      <motion.div
        className="max-w-4xl w-full bg-white/70 dark:bg-[#1e1e1e] backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 transition-all duration-500"
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
              width={500}
              height={500}
              className="
                rounded-full object-cover border-4 border-blue-200 dark:border-blue-400 shadow-lg
                w-48 h-48
                sm:w-48 sm:h-48
                md:w-56 md:h-56
                lg:w-64 lg:h-64
                xl:w-72 xl:h-72
                2xl:w-80 2xl:h-80
              "
            />
          </div>
        </motion.div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-100">
            Hi, I'm Eklak Alam 👋
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I’m a passionate Full-Stack Developer who loves building modern, responsive web applications.
            I specialize in frontend technologies like React.js, Next.js, and TailwindCSS, with a focus on clean UI/UX
            and smooth animations using Framer Motion.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            On the backend, I work with Java and Spring Boot to create powerful and scalable APIs. I’m a continuous
            learner, always exploring new technologies and tools to stay ahead in the ever-evolving world of web development.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            I'm also a content creator sharing my knowledge on web development and helping others grow in tech!
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm transition-all duration-300">
              Frontend Developer
            </span>
            <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm transition-all duration-300">
              Backend Developer
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm transition-all duration-300">
              DevOps Beginner
            </span>
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm transition-all duration-300">
              Content Creator
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
