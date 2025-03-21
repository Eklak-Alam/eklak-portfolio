"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDatabase, FaJava, FaSitemap, FaCogs, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiDocker, SiKubernetes } from "react-icons/si";

// Variants for Staggered Animation
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
      className="min-h-screen w-full py-16 bg-gradient-to-b from-white to-blue-50 text-black"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Section Heading */}
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
        >
          My <span className="text-blue-600">Skills</span>
        </motion.h2>

        <motion.p
          variants={cardVariants}
          className="text-lg text-gray-600 mb-12"
        >
          Full Stack Developer | DevOps Enthusiast | Learning DSA, Microservices & System Design 🚀
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
              { name: "React", icon: <FaReact className="text-sky-500" /> },
              { name: "Next.js", icon: <SiNextdotjs /> },
              { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
              { name: "HTML/CSS", icon: <span>🌐</span> },
              { name: "JavaScript", icon: <span>🟨</span> },
            ]}
          />

          {/* Backend */}
          <SkillCard
            title="Backend"
            skills={[
              { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
              { name: "Spring Boot", icon: <FaJava className="text-orange-600" /> },
              { name: "Hibernate", icon: <FaDatabase /> },
              { name: "MySQL", icon: <FaDatabase /> },
              { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            ]}
          />

          {/* DevOps */}
          <SkillCard
            title="DevOps & Cloud"
            skills={[
              { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
              { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
              { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
              { name: "CI/CD", icon: <span>🔧</span> },
              { name: "Git/GitHub", icon: <FaGitAlt className="text-red-500" /> },
            ]}
          />

          {/* DSA */}
          <SkillCard
            title="Currently Learning Problem Solving (DSA)"
            skills={[
              { name: "Arrays & Strings", icon: <span>📚</span> },
              { name: "Trees & Graphs", icon: <span>🌳</span> },
              { name: "DP & Recursion", icon: <span>🔄</span> },
              { name: "Problem Solving", icon: <span>🧠</span> },
            ]}
          />

          {/* Microservices */}
          <SkillCard
            title="Currently Learning Microservices"
            skills={[
              { name: "Spring Cloud", icon: <FaJava /> },
              { name: "Eureka", icon: <span>🧭</span> },
              { name: "API Gateway", icon: <span>🛡️</span> },
              { name: "Kafka", icon: <span>📨</span> },
            ]}
          />

          {/* System Design */}
          <SkillCard
            title="Currently Learning System Design"
            skills={[
              { name: "Scalability", icon: <FaSitemap className="text-blue-600" /> },
              { name: "Load Balancing", icon: <FaCogs className="text-green-600" /> },
              { name: "Database Sharding", icon: <FaServer className="text-purple-600" /> },
              { name: "Caching", icon: <FaDatabase className="text-orange-500" /> },
            ]}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// SkillCard Component
const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05, // Scaling up on hover
        rotate: 1,   // Optional: slight rotation
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all hover:shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-2"
          >
            <motion.div
              whileHover={{
                scale: 1.3,
                rotate: 360,
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              className="text-4xl"
            >
              {skill.icon}
            </motion.div>
            <span className="text-sm text-gray-600">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};



export default Skills;
