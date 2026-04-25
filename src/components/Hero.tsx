"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-glow" id="home">
      <div className="container mx-auto px-6 sm:px-10 relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-variant border border-primary/20 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Nexode AI 2.0 is live
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-headline font-extrabold tracking-tight leading-[1.1] sm:leading-[1.05] text-white mb-8">
            Building Intelligent Systems <span className="text-primary italic">for the Future</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mb-8 sm:mb-12">
            We engineer scalable machine learning models and AI-driven solutions that automate complexity and unlock unprecedented business value.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="copper-gradient-bg text-white px-10 py-4 rounded-lg font-bold text-lg copper-glow-border transition-all w-full sm:w-auto text-center"
            >
              Explore Our Work
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/10 hover:border-primary/50 text-white px-10 py-4 rounded-lg font-bold text-lg bg-white/5 backdrop-blur-sm transition-all w-full sm:w-auto"
            >
              Read the Vision
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:flex gap-6 text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase"
      >
        <span>Lat: 37.7749 N</span>
        <span className="text-primary">Lon: 122.4194 W</span>
      </motion.div>
    </header>
  );
}
