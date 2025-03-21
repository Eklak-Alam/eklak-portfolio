"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Guard to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900"
        >
          Eklak Alam
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="cursor-pointer transition-all hover:text-blue-600"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-64 h-screen bg-white/90 backdrop-blur-lg shadow-lg p-6 flex flex-col space-y-6 z-40"
          >
            <button
              onClick={toggleMenu}
              className="self-end mb-4"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-800 hover:text-blue-600"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
