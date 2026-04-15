"use client";

import { motion } from "framer-motion";
import { GlowCard } from "./ui/spotlight-card";
import Link from "next/link";

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="projects">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-10 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl font-headline font-extrabold text-white mb-4">Pioneering Solutions</h2>
          <p className="text-xl text-gray-400 font-medium">Deployments across diverse tech ecosystems.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Large Card */}
          <motion.div variants={cardVariants} className="md:col-span-2 h-[600px]">
            <GlowCard size="full" className="p-0 border-none group relative h-full">
              <img 
                alt="URAME" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 z-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw3r_hvY0BA7-HI5g1vllKnI7GCHFF0DEuc5960w3wnptx9SbT-S1lgCD9dgqxtinhExz5q9r1Ts7CsI4AivxBeDlJHqAw-apRl-XxH9CNvJVRO4g186iaNHp_X9zXql5XpWO2Vrbpat4mSv2H4ZDNgkkJ6QuReSptrI-GKsS8gnDDSaLf0OrTpkLsfVwN2Sol1jtF5G1EbSva3pU-_CYXbOfmbbhD5TGf4Rldzov7YpqZ4Ah0q7NKDXgm7UQUa5nJcGVU1G3QFq2R"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
              <motion.div 
                className="absolute bottom-0 p-12 w-full z-20 pointer-events-auto"
                initial={{ y: 20, opacity: 0.9 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">Neural Net</span>
                  <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">Cloud Native</span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">URAME</h3>
                <p className="text-lg text-gray-300 max-w-lg mb-8">
                  Predictive maintenance for industrial robotics, reducing downtime by 40%.
                </p>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  View Case Study <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </motion.div>
            </GlowCard>
          </motion.div>

          {/* Jetstar */}
          <motion.div variants={cardVariants} className="h-[600px]">
            <GlowCard size="full" className="p-10 flex flex-col justify-between group">
              <div className="relative z-20">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">flight</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Jetstar</h3>
                <p className="text-gray-400 leading-relaxed">
                  Dynamic pricing engine utilizing deep reinforcement learning for optimal revenue.
                </p>
              </div>
              <div className="relative z-20">
                <div className="mt-8 flex gap-3">
                  <span className="text-[10px] font-bold text-gray-600 tracking-widest">#MLOPS</span>
                  <span className="text-[10px] font-bold text-gray-600 tracking-widest">#DATAVIZ</span>
                </div>
                <motion.div 
                  className="mt-6 opacity-0 h-0 overflow-hidden"
                  whileHover={{ opacity: 1, h: "auto" }}
                >
                  <button className="text-primary text-sm font-bold flex items-center gap-2">Read more <span className="material-symbols-outlined text-sm">east</span></button>
                </motion.div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Quantum Insight */}
          <motion.div variants={cardVariants} className="h-auto">
            <GlowCard size="full" className="p-10 flex flex-col justify-between group h-full">
              <div className="relative z-20">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">query_stats</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Quantum Insight</h3>
                <p className="text-gray-400 leading-relaxed">
                  Big-data analytics providing granular sentiment analysis for global equity markets.
                </p>
              </div>
              <div className="mt-8 flex gap-3 relative z-20">
                <span className="text-[10px] font-bold text-gray-600 tracking-widest">#FINTECH</span>
                <span className="text-[10px] font-bold text-gray-600 tracking-widest">#NLP</span>
              </div>
            </GlowCard>
          </motion.div>

          {/* Calls Flow */}
          <motion.div variants={cardVariants} className="md:col-span-2 min-h-[400px]">
            <Link href="https://callsflow.io" target="_blank" className="block w-full h-full">
              <GlowCard size="full" className="group rounded-[24px] p-0 border-none flex items-center overflow-hidden w-full h-full relative cursor-pointer">
                <img 
                  alt="Calls Flow" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 z-0" 
                  src="/projects/callsflow.png"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                
                <div className="p-12 relative z-20 w-full md:w-2/3 pointer-events-none">
                  <div className="flex gap-2 mb-6 pointer-events-auto">
                    <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">VoIP & AI</span>
                    <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">Stripe Integrated</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 pointer-events-auto">Calls Flow</h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6 pointer-events-auto max-w-xl">
                    Automated agent-led communication system featuring Twilio SIP trunking and dynamic Stripe-powered credit management.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold pointer-events-auto">
                    <span className="text-primary">Communication SaaS</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-gray-500">Active Deployment</span>
                  </div>
                </div>
                
                <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:block z-0 pointer-events-none opacity-10 group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-700">
                  <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'FILL' 1" }}>settings_phone</span>
                </div>
              </GlowCard>
            </Link>
          </motion.div>

          {/* Croptivize */}
          <motion.div variants={cardVariants} className="md:col-span-2 min-h-[400px]">
            <Link href="https://croptivize.vercel.app/" target="_blank" className="block w-full h-full">
              <GlowCard size="full" className="group rounded-[24px] p-0 border-none flex items-center overflow-hidden w-full h-full relative cursor-pointer">
                <img 
                  alt="Croptivize" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 z-0" 
                  src="/projects/croptivize.png"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                
                <div className="p-12 relative z-20 w-full md:w-2/3 pointer-events-none">
                  <div className="flex gap-2 mb-6 pointer-events-auto">
                    <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">Vision AI</span>
                    <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">Sustainability</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 pointer-events-auto">Croptivize</h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6 pointer-events-auto max-w-xl">
                    AI-driven crop disease detection system that empowers farmers by identifying agricultural threats instantly and effectively.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold pointer-events-auto">
                    <span className="text-primary">AgTech Innovation</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-gray-500">2026 Deployment</span>
                  </div>
                </div>
                
                <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:block z-0 pointer-events-none opacity-10 group-hover:opacity-[0.25] group-hover:scale-110 transition-all duration-700">
                  <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'FILL' 1" }}>agriculture</span>
                </div>
              </GlowCard>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
