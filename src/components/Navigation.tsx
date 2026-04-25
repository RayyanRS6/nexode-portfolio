"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "team", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 mx-auto w-[95%] max-w-[1200px] z-[100] bg-white/5 backdrop-blur-md backdrop-saturate-150 shadow-[0_15px_35px_rgba(0,0,0,0.4)] rounded-full flex justify-between items-center px-4 md:px-8 py-3"
    >
      <div className="flex items-center gap-1.5 md:gap-2 text-xl md:text-2xl font-extrabold tracking-tighter text-primary font-headline">
        <Image src="/logo-white.png" alt="Nexode logo" width={24} height={24} className="brightness-0 invert md:w-[30px] md:h-[30px]" />
        Nexode
      </div>

      <div className="hidden md:flex gap-10 items-center">
        {["home", "about", "projects", "team", "contact"].map((item) => (
          <Link 
            key={item}
            className={`font-semibold text-sm tracking-wide transition-colors duration-300 capitalize ${
              activeSection === item 
                ? "text-primary font-bold" 
                : "text-gray-400 hover:text-primary"
            }`} 
            href={`#${item}`}
          >
            {item}
          </Link>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="copper-gradient-bg text-white px-4 md:px-6 py-2 rounded-lg font-bold text-xs md:text-sm copper-glow-border transition-transform"
      >
        Get Started
      </motion.button>
    </motion.nav>
  );
}
