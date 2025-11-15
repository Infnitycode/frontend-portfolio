import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Animation variants
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.2, y: -2 }, // Slight lift on hover
  tap: { scale: 0.95 },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-950 py-10 px-6 border-t border-gray-800"
      initial="hidden"
      whileInView="visible" // Animate when it scrolls into view
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* 1. Copyright Text */}
        <motion.p className="text-sm text-gray-500 order-2 md:order-1" variants={footerVariants}>
          © {currentYear} **Rohan Bisht**. All Rights Reserved.
        </motion.p>

        {/* 2. Quick Links/Call to Action */}
        <motion.div className="order-1 md:order-2" variants={footerVariants}>
          <a
            href="#contact"
            className="text-indigo-400 hover:text-indigo-300 transition duration-300 text-base font-semibold border-b border-indigo-400/50 pb-0.5"
          >
            Get In Touch ✉️
          </a>
        </motion.div>


        {/* 3. Social Media Icons */}
        <div className="flex space-x-6 order-3 md:order-3">
          <motion.a
            href="https://github.com/Infnitycode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaGithub className="text-2xl" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rohanbisht-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>

          <motion.a
            href="https://twitter.com/Infnity_code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaTwitter className="text-2xl" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}