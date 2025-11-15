import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Import the new Navbar

export default function App() {
  return (
    // Main wrapper for consistent styling and smooth scrolling
    <div className="bg-gray-950 min-h-screen text-white antialiased selection:bg-indigo-600 selection:text-white"
         style={{ scrollBehavior: 'smooth' }}> 
      
      {/* 1. Navigation Bar (Fixed to top) */}
      <Navbar />

      <main>
        {/* 2. Main Content Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* 3. Footer */}
      <Footer />
    </div>
  );
}