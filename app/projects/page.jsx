'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Next.js, TailwindCSS, and Framer Motion.',
    image: '/eklakportfolio.png',
    github: 'https://github.com/Eklak-Alam/eklak-portfolio',
    live: 'https://eklak-portfolio.vercel.app/',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion']
  },
  {
    id: 2,
    title: 'Shanaya Training Institute Pvt Ltd',
    description: 'A Static website for my client(Teacher).',
    image: '/shanayaimg.png',
    github: 'https://github.com/Eklak-Alam/LMS-Learning-management-system-',
    live: 'https://shanayatraining.com/',
    tech: ['Next js', 'Framer', 'TailwindCSS', 'etc...']
  },
  { 
    id: 3,
    title: 'AI BG Removal',
    description: 'Welcome to the Background Remover',
    image: '/bgremoval.png',
    github: 'https://github.com/Eklak-Alam/BGRemoval',
    live: 'https://bg-removal-eklak.vercel.app/',
    tech: ['React', 'Framer', 'TailwindCSS', 'Node.js']
  },
  { 
    id: 4,
    title: 'Blix Media',
    description: 'A modern website for my client startup.',
    image: '/blixmedia.png',
    github: 'https://github.com/Eklak-Alam/Blix-Media',
    live: 'https://project-psi-ivory-35.vercel.app/',
    tech: ['Next js', 'Framer', 'TailwindCSS', 'Node.js', 'Aceternity ui', 'etc...']
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-6 py-16 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-800 dark:from-[#0f0f0f] dark:to-[#1f1f1f] dark:text-gray-100 transition-colors duration-500 mt-10"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block relative px-6 py-2">
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            My Projects
          </span>
        </span>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-4 shadow-md"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image */}
            <div className="relative w-full h-60 bg-gray-100 dark:bg-gray-700 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between items-center pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="text-lg" />
                  Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
