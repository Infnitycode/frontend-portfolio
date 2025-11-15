import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { 
    SiTailwindcss, 
    SiMongodb, 
    SiExpress, 
    SiAdobeaftereffects, // Added for After Effects
    SiAdobepremierepro,  // Added for Premiere Pro
    SiAdobephotoshop     // Added for Photoshop
} from 'react-icons/si';

export const skills = [
  {
    category: "Frontend Essentials",
    items: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-600" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    ],
  },
  {
    category: "Frontend Frameworks & Styling",
    items: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    ],
  },
  {
    category: "Backend & Server",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
      { name: "SQL", icon: FaDatabase, color: "text-yellow-700" },
    ],
  },
  // --- Nayi Category: Creative Tools Added ---
  {
    category: "Creative & Design Tools",
    items: [
      { name: "After Effects", icon: SiAdobeaftereffects, color: "text-purple-600" },
      { name: "Premiere Pro", icon: SiAdobepremierepro, color: "text-pink-600" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-500" },
    ],
  },
];