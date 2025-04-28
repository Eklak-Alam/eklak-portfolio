"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaSitemap,
  FaCogs,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full py-16 transition-all duration-500 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-800 dark:from-[#0f0f0f] dark:to-[#1f1f1f] dark:text-gray-100"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-400 to-lime-400 dark:from-indigo-400 dark:via-purple-500 dark:to-pink-400"
        >
          My Skills
        </motion.h2>

        <motion.p
          variants={cardVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Full Stack Developer | DevOps Enthusiast | Learning DSA, Microservices
          & System Design 🚀
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Frontend */}
          <SkillCard
            title="Frontend"
            skills={[
              { name: "React", icon: <FaReact className="text-sky-400" /> },
              { name: "Next.js", icon: <SiNextdotjs /> },
              {
                name: "TailwindCSS",
                icon: <SiTailwindcss className="text-teal-400" />,
              },
              { name: "HTML/CSS", icon: <span>🌐</span> },
              { name: "JavaScript", icon: <span>🟨</span> },
            ]}
          />

          {/* Backend */}
          <SkillCard
            title="Backend"
            skills={[
              { name: "Java", icon: <FaJava className="text-orange-500" /> },
              {
                name: "Spring Boot",
                icon: <FaNodeJs className="text-green-500" />,
              },
              { name: "Hibernate", icon: <FaDatabase /> },
              { name: "MySQL", icon: <FaDatabase /> },
              { name: "JDBC", icon: <FaDatabase className="text-green-400" /> },
            ]}
          />

          {/* DevOps */}
          <SkillCard
            title="DevOps Basics"
            skills={[
              { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
              {
                name: "Git/GitHub",
                icon: <FaGitAlt className="text-rose-400" />,
              },
            ]}
          />

          {/* DSA */}
          <SkillCard
            title="DSA Problem Solving"
            skills={[
              { name: "Arrays & Strings", icon: <span>📚</span> },
              { name: "Trees & Graphs", icon: <span>🌳</span> },
              { name: "DP & Recursion", icon: <span>🔄</span> },
              { name: "Problem Solving", icon: <span>🧠</span> },
            ]}
          />

          {/* Microservices */}
          <SkillCard
            title="Learning Microservices"
            skills={[
              {
                name: "Spring Cloud",
                icon: <FaJava className="text-red-500" />,
              },
              { name: "Eureka", icon: <span>🧭</span> },
              { name: "API Gateway", icon: <span>🛡️</span> },
              { name: "Kafka", icon: <span>📨</span> },
            ]}
          />

          {/* System Design */}
          <SkillCard
            title="Learning System Design"
            skills={[
              {
                name: "Scalability",
                icon: <FaSitemap className="text-indigo-400" />,
              },
              {
                name: "Load Balancing",
                icon: <FaCogs className="text-green-500" />,
              },
              {
                name: "Database Sharding",
                icon: <FaServer className="text-purple-500" />,
              },
              {
                name: "Caching",
                icon: <FaDatabase className="text-amber-400" />,
              },
            ]}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        rotate: 0.5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="bg-white/80 dark:bg-[#1f1f1f]/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-200">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-2"
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              className="text-4xl transition-all duration-500"
            >
              {skill.icon}
            </motion.div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
