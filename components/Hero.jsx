"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls, Sphere } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import heroImg from "../assets/heroImg.jpg";

export default function Hero() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS",
    "Java", "C", "Spring", "Hibernate", "Spring Boot", "MySQL", "Clerk"
  ];

  return (
    <section className="relative flex justify-center items-center w-full overflow-hidden px-4 py-16 min-h-screen mt-10 lg:mt-0 md:mt-10">
      {/* 🎨 Animated 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />

          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={3} floatIntensity={2}>
              {/* Replace Box with a Sphere */}
              <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                  color="#6366F1"
                  emissive="#A5B4FC"
                  metalness={0.8}
                  roughness={0.1}
                />
              </mesh>
            </Float>

            {/* ✨ Extra floating spheres */}
            {[...Array(10)].map((_, i) => (
              <Float
                key={i}
                speed={1 + Math.random()}
                rotationIntensity={1}
                floatIntensity={3}
              >
                <mesh position={[
                  Math.random() * 10 - 5,
                  Math.random() * 10 - 5,
                  Math.random() * 10 - 5
                ]}>
                  <sphereGeometry args={[0.3, 32, 32]} />
                  <meshStandardMaterial
                    color="#EC4899"
                    emissive="#F472B6"
                    metalness={0.6}
                    roughness={0.2}
                  />
                </mesh>
              </Float>
            ))}

            <Stars radius={80} depth={50} count={5000} factor={4} fade speed={1} />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* ================= LEFT CONTENT ================= */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-12">
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
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight"
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
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Frontend Developer | Backend Developer | DevOps Enthusiast
          </motion.p>

          {/* ====== CTA BUTTONS ====== */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/resume.pdf"
              download
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md transition duration-300"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/cv.pdf"
              download
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md transition duration-300"
            >
              Download CV
            </motion.a>
          </div>

          {/* ====== SOCIAL LINKS ====== */}
          <div className="flex justify-center lg:justify-start space-x-6 text-gray-700 text-2xl sm:text-3xl">
            <motion.a
              whileHover={{ scale: 1.3, color: "#000" }}
              href="https://github.com/Eklak-Alam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, color: "#0072b1" }}
              href="https://www.linkedin.com/in/eklak-alam-40ba632b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, color: "#FF0000" }}
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </motion.a>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center items-center px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 aspect-square bg-white rounded-3xl shadow-xl overflow-hidden transition duration-300"
          >
            <Image
              src={heroImg}
              alt="Eklak Alam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLLING SKILLS ================= */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-white/40 backdrop-blur-md py-4">
        <motion.div
          className="flex space-x-12 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium whitespace-nowrap px-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} className="mx-6 sm:mx-8">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ================= BACKGROUND BLURS ================= */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
}
