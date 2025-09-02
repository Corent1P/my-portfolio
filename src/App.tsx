import "./App.css";
import { motion } from "motion/react";
import Navigation from "./components/ui/navigation";
import { AboutSection } from "./sections/about-section";
import { HeroSection } from "./sections/hero-section";
import { SkillsSection } from "./sections/skills-section";

function App() {
  return (
    <div className="flex flex-col w-full scroll-smooth">
      <Navigation />
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SkillsSection />
      </motion.div>
    </div>
  );
}

export default App;
