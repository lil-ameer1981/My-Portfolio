"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const words = "Hi, I'm Muhammad".split(" ");

const Introduction = () => {
  return (
    <MaxWidthWrapper className="py-10 flex flex-col justify-center items-center lg:flex-row sm:pb-28 lg:pt-24 xl:pt-32 lg:pb-28">
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start mt-2">
        <p className="px-5 py-2 text-sm md:text-base font-semibold uppercase tracking-[0.28em] text-[#5148fc]">
          Software & Game developer
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center lg:text-start font-bold px-5 py-2 leading-tight">
          {words.map((word, i) => (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i / 8 }}
              key={word}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="max-w-3xl text-base md:text-xl lg:text-2xl text-center lg:text-start text-foreground/85 px-5 py-2 leading-relaxed"
        >
          I build interactive websites, mobile applications, and video games focused
          on creativity, functionality, and practical problem-solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-5 px-5 py-2 mt-3 mb-10 sm:mb-0"
        >
          <Link href="https://github.com/lil-ameer1981" target="_blank">
            <FaGithub className="w-6 h-6 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300" />
          </Link>

          <Link
            href="mailto:myuguda175@gmail.com"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Mail className="w-6 h-6 md:w-9 md:h-9" />
          </Link>

          <Link href="https://www.linkedin.com/in/muhammad-yuguda" target="_blank">
            <FaLinkedin className="w-6 h-6 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300" />
          </Link>

          <Link href="https://x.com/lil_ameer81" target="_blank">
            <FaXTwitter className="w-6 h-6 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-1 items-center justify-center p-4"
      >
        <img
          src="/svg5.svg"
          alt="Developer illustration"
          className="w-[300px] sm:w-[560px]"
        />
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Introduction;
