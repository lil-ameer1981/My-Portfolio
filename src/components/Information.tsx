"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Code2, Gamepad2, Smartphone } from "lucide-react";

const services = [
  {
    title: "Game Developer",
    icon: Gamepad2,
    description:
      "I create playable 2D and 3D game experiences, from quick browser games to Flutter Flame and Godot projects."
  },
  {
    title: "Website Developer",
    icon: Code2,
    description:
      "I build responsive websites and web apps using HTML, CSS, JavaScript, React, Next.js, and modern backend tools."
  },
  {
    title: "App Developer",
    icon: Smartphone,
    description:
      "I design and build mobile app interfaces with Flutter, focusing on clean flows, usable screens, and strong presentation."
  }
];

const Information = () => {
  return (
    <MaxWidthWrapper className="py-10 flex flex-col justify-center items-center gap-y-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-6xl text-center font-bold px-5 md:py-2 text-[#5148fc]"
      >
        About Me
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-5">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5148fc]/10 text-[#5148fc]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default Information;
