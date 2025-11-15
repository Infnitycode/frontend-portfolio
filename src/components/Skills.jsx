import { motion } from "framer-motion";
import { skills } from "../data/skills"; // Assuming the structure defined above

// Parent container variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay between categories
      delayChildren: 0.3,
    },
  },
};

// Variants for category sections
const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variants for individual skill cards
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-24 md:py-32 px-6 bg-gray-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-white"
          variants={categoryVariants}
        >
          My Tech Stack & Expertise 💡
        </motion.h2>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skills.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
              variants={categoryVariants}
            >
              {/* Category Title */}
              <h3 className="text-3xl font-bold mb-6 text-indigo-400 border-b border-gray-800 pb-3">
                {category.category}
              </h3>

              {/* Individual Skills Grid */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants} // Use container variants for staggered items inside the category
              >
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl cursor-pointer transition duration-300 hover:bg-gray-700/70"
                  >
                    {/* Skill Icon */}
                    {skill.icon && (
                      <skill.icon className={`text-4xl mb-2 ${skill.color || 'text-white'}`} />
                    )}
                    {/* Skill Name */}
                    <span className="text-sm font-semibold text-white text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}