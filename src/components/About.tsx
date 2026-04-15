"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  const scrollVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="py-32 bg-surface" id="about">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={scrollVariants} className="text-5xl font-headline font-bold text-white mb-8 leading-tight">
              Decoding complexity through <span className="text-glow text-primary">Intelligence.</span>
            </motion.h2>
            <motion.p variants={scrollVariants} className="text-lg text-gray-400 leading-relaxed mb-12">
              Nexode AI bridges the gap between theoretical machine learning and practical business application. Our approach treats code as a living architecture, evolving with every inference.
            </motion.p>
            
            <motion.div variants={containerVariants} className="space-y-6">
              {[
                { icon: "bolt", text: "AI Innovation" },
                { icon: "hub", text: "Scalable Systems" },
                { icon: "rocket_launch", text: "Real-world Solutions" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={scrollVariants} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="text-xl font-bold text-white">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={scrollVariants} className="flare-card p-10 rounded-2xl md:mt-12 group">
              <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">neurology</span></div>
              <div className="text-4xl font-extrabold text-white mb-2">1.4B</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Neural pathways active</div>
            </motion.div>
            
            <motion.div variants={scrollVariants} className="flare-card p-10 rounded-2xl group">
              <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">speed</span></div>
              <div className="text-4xl font-extrabold text-white mb-2">0.4ms</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Inference latency avg</div>
            </motion.div>
            
            <motion.div variants={scrollVariants} className="col-span-full flare-card p-10 rounded-2xl border-t-primary/20 group">
              <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">database</span></div>
              <div className="text-4xl font-extrabold text-white mb-2">140 Tbps</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">System Throughput</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
