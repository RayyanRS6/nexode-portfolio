"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ Name: '', Email: '', 'Project Parameters': '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formBody = new URLSearchParams(formData as Record<string, string>);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzsnBeLgcsMO_s4fVgMr5bruIbf33m0STTRTz-G_oMSIZKeC_2W0BNeAxq9M1y4r9HH7g/exec", {
        method: "POST",
        body: formBody,
        mode: "no-cors"
      });

      // Since we use no-cors, the response is opaque and we can't read response.ok
      // If fetch didn't throw a network error, we assume it was successful
      setSubmitStatus("success");
      setFormData({ Name: '', Email: '', 'Project Parameters': '' });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-background" id="contact" suppressHydrationWarning>
      <div className="container mx-auto px-10" suppressHydrationWarning>
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
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Full Identity</label>
                <input
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-700"
                  placeholder="Enter Your Name"
                  type="text"
                  required
                  value={formData.Name}
                  onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Corporate Node</label>
                <input
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-700"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                  value={formData.Email}
                  onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Project Parameters</label>
                <textarea
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-700"
                  placeholder="Enter Your Project Details"
                  rows={4}
                  required
                  value={formData['Project Parameters']}
                  onChange={(e) => setFormData({ ...formData, 'Project Parameters': e.target.value })}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full copper-gradient-bg text-white font-extrabold py-5 rounded-lg copper-glow-border hover:opacity-90 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Transmitting..." : submitStatus === "success" ? "Sequence Initialized" : submitStatus === "error" ? "Transmission Failed - Retry" : "Initialize Sequence"} <span className="material-symbols-outlined">{submitStatus === "success" ? "check_circle" : "send"}</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
