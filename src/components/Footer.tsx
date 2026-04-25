"use client";

import { motion } from "framer-motion";

const FooterContent = () => (
    <div className="flex flex-col md:flex-row justify-between items-end px-10 max-w-[1440px] mx-auto pt-12" suppressHydrationWarning>
      <div className="mb-8 md:mb-0" suppressHydrationWarning>
        <div className="text-2xl font-black text-white font-headline mb-3">Nexode</div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">© 2026 Nexode AI Labs. All systems functional.</div>
      </div>
      
      <div className="flex gap-12 mb-8 md:mb-0">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">Legal</span>
          <a className="text-white/70 hover:text-white transition-all text-xs font-bold" href="#">Privacy</a>
          <a className="text-white/70 hover:text-white transition-all text-xs font-bold" href="#">Terms</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">Social</span>
          <a className="text-white/70 hover:text-white transition-all text-xs font-bold" href="#">X / Twitter</a>
          <a className="text-white/70 hover:text-white transition-all text-xs font-bold" href="#">LinkedIn</a>
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="text-white/70 text-xs font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
          Sydney, NSW, Australia
        </div>
        <div className="text-white/70 text-xs font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
          Islamabad, Pakistan
        </div>
      </div>
    </div>
  );

export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 left-0 w-full z-0 footer-flare pt-32 pb-16" suppressHydrationWarning>
        <FooterContent />
      </footer>

      <footer className="opacity-0 pointer-events-none footer-flare pt-32 pb-16 -mt-[100px]" aria-hidden="true" suppressHydrationWarning>
        <FooterContent />
      </footer>
    </>
  );
}
