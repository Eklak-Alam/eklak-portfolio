'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Next.js, TailwindCSS, and Framer Motion.',
    image: 'https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg',
    github: 'https://github.com/eklak/portfolio',
    live: 'https://eklakportfolio.com',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion']
  },
  {
    id: 2,
    title: 'Task Manager API',
    description: 'A RESTful API for managing tasks, built with Node.js, Express, and MongoDB.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDvJrPXUDg4-cuZAWTFI1dQpcP8qmeoG3bA&s',
    github: 'https://github.com/eklak/task-manager-api',
    live: '',
    tech: ['Node.js', 'Express', 'MongoDB']
  },
  {
    id: 3,
    title: 'LMS CodeE',
    description: 'Full-stack E-Commerce application with shopping cart, authentication, and payment integration.',
    image: 'https://s3.envato.com/files/409384063/Preview%20(2).__large_preview.jpg',
    github: 'https://github.com/eklak/ecommerce',
    live: 'https://eklakecommerce.com',
    tech: ['React', 'Node.js', 'Stripe']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full px-6 py-16 bg-gradient-to-b from-white to-blue-50">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          My Projects
        </span>
        <motion.div
          className="h-1 w-20 bg-blue-500 rounded-full mx-auto mt-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
          key={project.id}
          className="group bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.2 }} // 👈 Add viewport config!
        >        
            {/* Image */}
            <div className="relative w-full h-60 bg-gray-100 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between items-center border-t pt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <FaGithub className="text-base" />
                  Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-base" />
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
