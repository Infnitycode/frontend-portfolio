import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"; // Ensure react-icons is installed

// Variants for the card entrance animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Projects() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // --- API INTEGRATION: CONNECTING TO BACKEND ---
        const res = await fetch("https://portfoliobackend-edh1.onrender.com/api/projects"); 
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const projectData = await res.json();
        setData(projectData);
      } catch (e) {
        console.error("Failed to fetch projects:", e);
        // Show an error message and use fallback data if available
        setError("Failed to load projects. Check your backend server.");
        setData(FALLBACK_PROJECTS); // Use fallback data here
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // --- CONDITIONAL RENDERING ---

  if (isLoading) {
    return (
      <section id="projects" className="py-32 px-6 text-center text-white bg-gray-950">
        <h2 className="text-5xl font-extrabold mb-8">Projects</h2>
        <div className="flex justify-center items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
          <p className="text-xl">Loading Projects...</p>
        </div>
      </section>
    );
  }

  if (error && data.length === 0) {
    return (
      <section id="projects" className="py-32 px-6 text-center text-red-400 bg-gray-950">
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <p className="text-xl">{error}</p>
        <p className="mt-4 text-gray-400">Please ensure your MongoDB and Node.js server are running on port 5000.</p>
      </section>
    );
  }

  // --- MAIN RENDER (After loading/with data) ---

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          My Creative Projects 🛠️
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-2xl flex flex-col h-full transform transition duration-500 hover:scale-[1.03] hover:shadow-indigo-500/30"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-extrabold text-indigo-400 mb-2 border-b border-gray-800 pb-2">
                {p.title || `Project ${i + 1}`}
              </h3>
              
              <p className="text-gray-400 my-3 flex-grow">{p.description || "A captivating project with full-stack functionality."}</p>

              {p.technologies && p.technologies.length > 0 && (
                <div className="mb-4 pt-2 border-t border-gray-800">
                  <span className="text-sm font-semibold text-gray-500 mr-2">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {p.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-gray-700 text-gray-200 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-4 mt-auto pt-4">
                {p.link && (
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-red-500 font-semibold hover:text-red-300 transition"
                    whileHover={{ x: 5 }}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
                {p.repo && (
                  <motion.a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-200 transition"
                    whileHover={{ x: 5 }}
                  >
                    <FaCode className="text-sm" />
                    <span>View Code</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FALLBACK DATA STRUCTURE (Needed for robust error handling) ---
const FALLBACK_PROJECTS = [
    {
        title: "Fallback E-Commerce",
        description: "Data loading failed. Showing static project info. (React, Node.js, MongoDB)",
        link: "#",
        repo: "#",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Fallback Task App",
        description: "Data loading failed. Showing static project info. (Next.js, TypeScript, Tailwind)",
        link: "#",
        repo: "#",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
    }
];