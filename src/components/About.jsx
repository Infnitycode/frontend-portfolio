import { motion } from 'framer-motion';

// Animation variants for the whole section and its children
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.3, // Delay between child animations
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 md:py-32 px-6 bg-gray-900 border-b border-gray-800"
      initial="hidden"
      whileInView="visible" // Animate when the section comes into view
      viewport={{ once: true, amount: 0.3 }} // Only animate once
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Title with Animation */}
        <motion.h2
          className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center"
          variants={childVariants}
        >
          Know More About Me 💡
        </motion.h2>

        {/* Main Content Card */}
        <motion.div
          className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl hover:shadow-blue-500/30 transition duration-500"
          variants={childVariants}
        >
          {/* Main Paragraph */}
          <motion.p
            className="text-xl leading-relaxed text-gray-300 mb-6 border-b border-gray-700 pb-4"
            variants={childVariants}
          >
            I am a **passionate full-stack developer** who thrives on bringing ideas to life. My expertise lies in crafting
            **stunning UIs**, architecting **clean and scalable backends**, and implementing
            **crazy, engaging animations** that elevate the user experience.
          </motion.p>

          {/* Key Details/Current Status */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={sectionVariants} // Reuse section variant for staggered effect in this sub-area
          >
            <motion.div className="flex items-start space-x-3" variants={childVariants}>
              <span className="text-2xl text-blue-400">🎓</span>
              <div>
                <h4 className="font-semibold text-white text-lg">Current Status</h4>
                <p className="text-gray-400">Currently pursuing **BCA (Bachelor of Computer Applications)**, building a strong theoretical foundation.</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start space-x-3" variants={childVariants}>
              <span className="text-2xl text-purple-400">🛠️</span>
              <div>
                <h4 className="font-semibold text-white text-lg">My Focus</h4>
                <p className="text-gray-400">I am constantly **improving daily**, focusing on modern development practices and working on multiple cool, challenging projects.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action/Footer */}
        <motion.p
          className="mt-10 text-center text-lg text-gray-500"
          variants={childVariants}
        >
          Let's connect and build something awesome together! 🚀
        </motion.p>
      </div>
    </motion.section>
  );
}