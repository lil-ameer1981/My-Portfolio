"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "MongoDB",
  "Firebase",
  "Supabase",
  "SQL",
  "Dart",
  "Flutter",
  "Flutter Flame",
  "Godot"
];

const TechStack = () => {
  return (
    <MaxWidthWrapper className="my-10">
      <div className="flex flex-col self-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl self-center mb-4 mt-5 font-bold lg:mb-6 text-[#5148fc]"
        >
          Tech Stack
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-muted-foreground px-5"
        >
          The tools I currently use across websites, mobile apps, databases, and
          game development.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 px-5 mt-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card px-4 py-4 text-center font-semibold shadow-sm hover:border-[#5148fc]/60 hover:text-[#5148fc] transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TechStack;
