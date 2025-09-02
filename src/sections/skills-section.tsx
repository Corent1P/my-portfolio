import { motion } from "framer-motion";
import { BentoSkills } from "@/components/ui/bento-skills";

export function SkillsSection() {
  return (
    <div
      id="skills"
      className="flex flex-col gap-20 min-h-screen pt-40 items-center"
    >
      <motion.div
        className="flex flex-col w-1/2 font-bold"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-shadow-lg/30">
          My{" "}
          <span className="text-primary text-shadow-lg/30 text-shadow-indigo-500">
            Skills
          </span>
        </h1>
      </motion.div>
      <motion.div
        className="flex flex-col w-1/2 h-full font-bold"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BentoSkills />
      </motion.div>
    </div>
  );
}
