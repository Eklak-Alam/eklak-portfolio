"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import heroImg from "../assets/heroImg.jpg";
import { useTheme } from "@/context/ThemeContext"; // Adjust if needed

export default function Hero() {
  const { theme } = useTheme();

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS",
    "Java", "C", "Spring", "Hibernate", "Spring Boot", "MySQL", "Clerk"
  ];

  return (
    <section
      className={`relative flex justify-center items-center w-full overflow-hidden px-4 py-16 min-h-screen mt-10 lg:mt-0 md:mt-10 transition-colors duration-500 ${
        theme === "dark" ? "bg-[#1e1e1e]" : "bg-white"
      }`}
    >
      {/* === 🎨 3D CANVAS BACKGROUND === */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />

          <Suspense fallback={null}>
            {/* === Central Floating Sphere === */}
            <Float speed={2} rotationIntensity={3} floatIntensity={2}>
              <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                  color={theme === "dark" ? "#A5B4FC" : "#6366F1"}
                  emissive={theme === "dark" ? "#818CF8" : "#A5B4FC"}
                  metalness={0.9}
                  roughness={0.05}
                  envMapIntensity={0.9}
                />
              </mesh>
            </Float>

            {/* === Extra Floating Spheres === */}
            {[...Array(10)].map((_, i) => (
              <Float
                key={i}
                speed={1 + Math.random()}
                rotationIntensity={1}
                floatIntensity={2.5}
              >
                <mesh position={[
                  Math.random() * 12 - 6,
                  Math.random() * 12 - 6,
                  Math.random() * 12 - 6
                ]}>
                  <sphereGeometry args={[0.3, 32, 32]} />
                  <meshStandardMaterial
                    color={theme === "dark" ? "#F472B6" : "#EC4899"}
                    emissive={theme === "dark" ? "#F9A8D4" : "#F472B6"}
                    metalness={0.6}
                    roughness={0.2}
                  />
                </mesh>
              </Float>
            ))}

            {/* === Stars === */}
            <Stars
              radius={80}
              depth={50}
              count={4000}
              factor={4}
              fade
              speed={1}
            />

            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* === CONTENT AREA === */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-12">
        {/* === LEFT === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left px-4"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Hi, I'm{" "}
            <motion.span
              initial={{ backgroundSize: "0%" }}
              animate={{ backgroundSize: "100%" }}
              transition={{ delay: 1, duration: 2 }}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
              Eklak Alam
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`text-lg sm:text-xl md:text-2xl mb-8 max-w-xl mx-auto lg:mx-0 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Frontend Developer | Backend Developer | DevOps Enthusiast
          </motion.p>

          {/* === CTA BUTTONS === */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
            >
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="border border-pink-500 text-pink-500 dark:text-pink-400 dark:border-pink-400 px-6 py-2 rounded-md text-sm font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md"
            >
              Download CV
            </motion.a>
          </div>

          {/* === SOCIAL LINKS === */}
          <div className="flex justify-center lg:justify-start space-x-6 text-2xl sm:text-3xl">
            <motion.a
              whileHover={{ scale: 1.3, color: theme === "dark" ? "#fff" : "#000" }}
              href="https://github.com/Eklak-Alam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, color: "#0072b1" }}
              href="https://www.linkedin.com/in/eklak-alam-40ba632b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, color: "#FF0000" }}
              href="https://www.youtube.com/@eklakalam04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </motion.a>
          </div>
        </motion.div>

        {/* === RIGHT IMAGE === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center items-center px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`relative w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 aspect-square rounded-3xl shadow-xl overflow-hidden transition duration-300 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <Image
              src={heroImg}
              alt="Eklak Alam"
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* === SCROLLING SKILLS MARQUEE === */}
      <div
        className={`absolute bottom-0 w-full overflow-hidden py-4 ${
          theme === "dark" ? "bg-[#1e1e1e]/70" : "bg-white/70"
        } backdrop-blur-md`}
      >
        <motion.div
          className="flex space-x-12 text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap px-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className={`mx-6 sm:mx-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* === BACKGROUND BLURS === */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
}
