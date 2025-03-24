"use client";
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext"; // adjust the path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full top-0 z-50 border-b bg-white/70 dark:bg-[#1e1e1e]/70 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold cursor-pointer text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-all"
        >
          Eklak Alam
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 font-medium">
            {navLinks.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="transition-all duration-300 text-gray-900 dark:text-gray-100 hover:text-blue-600"
                >
                  {item}
                </Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300 origin-left" />
              </li>
            ))}
          </ul>

          {/* Contact Me Button */}
          <Link href="/contact">
            <button className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Contact Me
            </button>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? (
              <Moon size={20} className="text-gray-800" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? (
              <Moon size={20} className="text-gray-800" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>

          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-64 h-screen bg-white dark:bg-[#1e1e1e] backdrop-blur-lg shadow-lg p-6 flex flex-col space-y-6 z-40"
          >
            {/* Close Button */}
            <motion.button
              onClick={toggleMenu}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-6 right-6 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
              aria-label="Close Menu"
            >
              <X size={28} />
            </motion.button>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 mt-12">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto"
            >
              <Link href="/contact">
                <motion.button
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
