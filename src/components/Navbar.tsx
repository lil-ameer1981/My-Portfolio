"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Dancing_Script, Great_Vibes, Satisfy } from "next/font/google";
import { ModeToggle } from "./ModeToggle";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const myFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const isScrolled =
    scrollPosition > 0
      ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
      : "shadow-none";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [effect, setEffect] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={cn(
        "z-50 sticky top-0 transition-shadow w-full flex flex-col items-center justify-between mt-0 sm:mt-2 mx-auto px-8 py-6 sm:px-16 sm:py-6 text-sm lg:text-lg sm:flex-row lg:felx-row",
        isScrolled
      )}
    >
      {/* Logo */}
      <div className="w-full flex flex-row items-center justify-between">
        <Link href="/" className="self-center">
          <h2 className={cn("text-2xl md:text-4xl", myFont.className)}>
            Muhammad Yuguda
          </h2>
        </Link>

        {/* Burger Menu */}
        <div className="flex justify-center items-center gap-2 sm:hidden">
          <ModeToggle />
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              onClick={toggleMenu}
              animate={isMenuOpen ? "open" : "closed"}
              className="focus:outline-none relative h-10 w-10 rounded-full transition-colors"
            >
              <motion.span
                style={{
                  left: "50%",
                  top: "35%",
                  x: "-50%",
                  y: "-50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    top: ["35%", "50%", "50%"],
                  },
                  closed: {
                    rotate: ["45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "35%"],
                  },
                }}
                className="absolute h-[2px] w-4 bg-foreground  "
              />
              <motion.span
                style={{
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "-45deg"],
                  },
                  closed: {
                    rotate: ["-45deg", "0deg", "0deg"],
                  },
                }}
                className="absolute h-[2px] w-4 bg-foreground  "
              />
              <motion.span
                style={{
                  left: "60%",
                  bottom: "35%",
                  x: "-50%",
                  y: "50%",
                }}
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    left: "50%",
                    bottom: ["35%", "50%", "50%"],
                  },
                  closed: {
                    rotate: ["45deg", "0deg", "0deg"],
                    left: "60%",
                    bottom: ["50%", "50%", "35%"],
                  },
                }}
                className="absolute h-[2px] w-2 bg-foreground  "
              />
              {/* <Menu className="w-6 h-6" /> */}
            </motion.button>
          </MotionConfig>
        </div>
      </div>

      <ul
        className={`flex flex-col w-full mt-5 sm:mt-0 sm:flex sm:flex-row sm:justify-end items-center gap-2 sm:gap-5 font-medium 
        ${isMenuOpen ? "block" : "hidden"} `}
      >
        <li className="hover:font-bold transition ease-in-out duration-300 py-2 px-3">
          <Link
            href="/"
            className={pathname == "/" ? `block font-bold` : `duration-300 `}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li className="hover:font-bold transition ease-in-out duration-300 py-2 px-3">
          <Link
            href="/projects"
            className={
              pathname == "/projects" ? `block   font-bold` : ` duration-300 `
            }
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </li>
        <li className="hover:font-bold transition ease-in-out duration-300 py-2 px-3">
          <Link
            href="/contact"
            className={
              pathname == "/contact" ? `block  font-bold` : ` duration-300 `
            }
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
        <div className="hidden sm:block">
          <ModeToggle />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
