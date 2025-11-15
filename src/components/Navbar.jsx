// src/components/Navbar.js (New File)
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#hero" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500">
          Rohan.dev
        </a>
        
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 font-medium hover:text-indigo-400 transition duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}