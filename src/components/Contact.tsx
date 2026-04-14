"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 relative overflow-hidden bg-background" id="contact">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-headline font-extrabold text-white mb-8">Start the <span className="text-primary text-glow">Dialogue</span></h2>
            <div className="space-y-12">
              <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-md">
                Ready to integrate intelligence into your core infrastructure? Let&apos;s initialize your project sequence.
              </p>
              
              <div className="font-mono text-xs space-y-4">
                <div className="flex items-center gap-4 text-primary font-bold">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  SYS.COMM_PORT: OPEN
                </div>
                <div className="text-gray-500">
                  direct:// <a className="text-white hover:text-primary transition-colors" href="mailto:mrayyansalman69@gmail.com">mrayyansalman69@gmail.com</a>
                </div>
                <div className="text-gray-500">
                  uplink:// +92 335 125 6969
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flare-card p-10 rounded-3xl border border-primary/20 shadow-2xl relative"
          >
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Full Identity</label>
                <input 
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-700" 
                  placeholder="Aiden Pearce" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Corporate Node</label>
                <input 
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-700" 
                  placeholder="name@company.com" 
                  type="email" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Project Parameters</label>
                <textarea 
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-700" 
                  placeholder="System scope..." 
                  rows={4}
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full copper-gradient-bg text-white font-extrabold py-5 rounded-lg copper-glow-border hover:opacity-90 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm" 
                type="submit"
              >
                Initialize Sequence <span className="material-symbols-outlined">send</span>
              </motion.button>
            </form>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
