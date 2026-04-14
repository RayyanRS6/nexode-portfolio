"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 mx-auto w-[95%] max-w-[1200px] z-[100] bg-white/5 backdrop-blur-md backdrop-saturate-150 shadow-[0_15px_35px_rgba(0,0,0,0.4)] rounded-full flex justify-between items-center px-8 py-3"
    >
      <div className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter text-primary font-headline">
        <Image src="/logo-white.png" alt="Nexode logo" width={30} height={30} className="brightness-0 invert" />
        Nexode
      </div>

      <div className="hidden md:flex gap-10 items-center">
        <Link className="text-primary font-bold text-sm tracking-wide" href="/">Home</Link>
        <Link className="text-gray-400 font-semibold text-sm hover:text-primary transition-colors duration-300" href="#about">About</Link>
        <Link className="text-gray-400 font-semibold text-sm hover:text-primary transition-colors duration-300" href="#projects">Projects</Link>
        <Link className="text-gray-400 font-semibold text-sm hover:text-primary transition-colors duration-300" href="#team">Team</Link>
        <Link className="text-gray-400 font-semibold text-sm hover:text-primary transition-colors duration-300" href="#contact">Contact</Link>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="copper-gradient-bg text-white px-6 py-2 rounded-lg font-bold text-sm copper-glow-border transition-transform"
      >
        Get Started
      </motion.button>
    </motion.nav>
  );
}
