"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Projects() {
  const cardVariants: Variants = {
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
      <div className="container mx-auto px-6 sm:px-10 relative z-10">
        
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
          <motion.div variants={cardVariants} className="md:col-span-2 min-h-[400px] md:h-[600px]">
            <div className="w-full h-full bg-surface border border-white/5 rounded-[24px] p-0 relative group overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/20">
              <img 
                alt="URAME" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 z-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw3r_hvY0BA7-HI5g1vllKnI7GCHFF0DEuc5960w3wnptx9SbT-S1lgCD9dgqxtinhExz5q9r1Ts7CsI4AivxBeDlJHqAw-apRl-XxH9CNvJVRO4g186iaNHp_X9zXql5XpWO2Vrbpat4mSv2H4ZDNgkkJ6QuReSptrI-GKsS8gnDDSaLf0OrTpkLsfVwN2Sol1jtF5G1EbSva3pU-_CYXbOfmbbhD5TGf4Rldzov7YpqZ4Ah0q7NKDXgm7UQUa5nJcGVU1G3QFq2R"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
              <div 
                className="absolute bottom-0 p-8 md:p-12 w-full z-20 pointer-events-auto transition-all duration-500 opacity-100 md:opacity-90 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0"
              >
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">Neural Net</span>
                  <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">Cloud Native</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">URAME</h3>
                <p className="text-base md:text-lg text-gray-300 max-w-lg mb-8">
                  Predictive maintenance for industrial robotics, reducing downtime by 40%.
                </p>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  View Case Study <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Jetstar */}
          <motion.div variants={cardVariants} className="min-h-[400px] md:h-[600px]">
            <div className="w-full h-full bg-surface border border-white/5 rounded-[24px] p-0 flex items-end relative group overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/20 text-left">
              <img 
                alt="Jetstar Weather App" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 z-0" 
                src="/projects/jetstar_weather.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="p-6 md:p-8 relative z-20 w-full pointer-events-auto transition-all duration-500 opacity-100 md:opacity-90 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">Weather App</span>
                  <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">MLOps</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Jetstar</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  Dynamic pricing engine utilizing deep reinforcement learning for optimal revenue, integrated with real-time weather analytics.
                </p>
                <button className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all">Read more <span className="material-symbols-outlined text-sm">east</span></button>
              </div>
            </div>
          </motion.div>

          {/* Junk Dispatch */}
          <motion.div variants={cardVariants} className="min-h-[400px]">
            <Link href="https://www.junkdispatch.com/" target="_blank" className="block w-full h-full">
              <div className="w-full h-full bg-surface border border-white/5 rounded-[24px] p-0 flex items-end relative group overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/20 cursor-pointer text-left">
                <img 
                  alt="Junk Dispatch" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 z-0" 
                  src="/projects/junk_dispatch_bg.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                
                <div className="p-6 md:p-8 relative z-20 w-full pointer-events-auto transition-all duration-500 opacity-100 md:opacity-90 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">Junk Removal</span>
                    <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">Demolition</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Junk Dispatch</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3">
                    A Massachusetts-based junk removal and demolition company offering instant quotes, same-day services, and guaranteed pricing.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Calls Flow */}
          <motion.div variants={cardVariants} className="md:col-span-2 min-h-[400px]">
            <Link href="https://callsflow.io" target="_blank" className="block w-full h-full">
              <div className="w-full h-full bg-surface border border-white/5 rounded-[24px] p-0 flex items-center relative group overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/20 cursor-pointer text-left">
                <img 
                  alt="Calls Flow" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 z-0" 
                  src="/projects/callsflow.png"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                
                <div className="p-6 md:p-12 relative z-20 w-full md:w-2/3 pointer-events-none">
                  <div className="flex gap-2 mb-6 pointer-events-auto">
                    <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">VoIP & AI</span>
                    <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">Stripe Integrated</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 pointer-events-auto">Calls Flow</h3>
                  <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-6 pointer-events-auto max-w-xl">
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
              </div>
            </Link>
          </motion.div>

          {/* Croptivize */}
          <motion.div variants={cardVariants} className="md:col-span-2 min-h-[400px]">
            <Link href="https://croptivize.vercel.app/" target="_blank" className="block w-full h-full">
              <div className="w-full h-full bg-surface border border-white/5 rounded-[24px] p-0 flex items-center relative group overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/20 cursor-pointer text-left">
                <img 
                  alt="Croptivize" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 z-0" 
                  src="/projects/croptivize.png"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                
                <div className="p-6 md:p-12 relative z-20 w-full md:w-2/3 pointer-events-none">
                  <div className="flex gap-2 mb-6 pointer-events-auto">
                    <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest">Vision AI</span>
                    <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest">Sustainability</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 pointer-events-auto">Croptivize</h3>
                  <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-6 pointer-events-auto max-w-xl">
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
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
