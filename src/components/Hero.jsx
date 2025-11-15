import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa"; // Install react-icons

// Parent container variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between child elements
      delayChildren: 0.3, // Initial delay before the first child starts
    },
  },
};

// Variants for individual elements
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 1. Avatar/Image Placeholder */}
      <motion.div
        className="mb-8"
        variants={itemVariants}
        // Custom animation for a little bounce/zoom on entry
        transition={{ ...itemVariants.visible.transition, delay: 0.2 }}
      >
        {/* Replace with your actual image component */}
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-indigo-600/20 border-4 border-indigo-500 shadow-2xl flex items-center justify-center mx-auto overflow-hidden">
          {/* If using an image: <img src="/your-avatar.jpg" alt="Rohan Bisht Avatar" className="w-full h-full object-cover" /> */}
          <span className="text-6xl font-extrabold text-indigo-400">RB</span>
        </div>
      </motion.div>

      {/* 2. Main Heading */}
      <motion.h1
        className="text-7xl md:text-8xl font-black leading-tight text-white max-w-4xl"
        variants={itemVariants}
      >
        Hey, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 drop-shadow-lg">
          Rohan Bisht
        </span>
      </motion.h1>

      {/* 3. Subtitle / Tagline */}
      <motion.p
        className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-2xl"
        variants={itemVariants}
      >
        Building **stunning UIs**, crafting **clean backends**, and specializing in
        **Creative Frontend Development** & Animation.
      </motion.p>

      {/* 4. Call to Action Button */}
      <motion.a
        href="#projects"
        className="mt-12 inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 px-8 py-4 text-xl rounded-full font-extrabold text-white shadow-lg shadow-red-500/30 transition duration-300 hover:scale-[1.03] hover:shadow-red-500/50"
        variants={itemVariants}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Explore My Work</span>
        <FaArrowDown className="animate-bounce" />
      </motion.a>
    </motion.section>
  );
}