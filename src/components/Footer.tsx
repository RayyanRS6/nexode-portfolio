"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const FooterContent = () => (
    <div className="flex flex-col md:flex-row justify-between items-end px-10 max-w-[1440px] mx-auto pt-12">
      <div className="mb-8 md:mb-0">
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
      
      <div className="flex gap-4">
        <motion.a 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all" 
          href="#"
        >
          <span className="material-symbols-outlined">language</span>
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all" 
          href="#"
        >
          <span className="material-symbols-outlined">share</span>
        </motion.a>
      </div>
    </div>
  );

  return (
    <>
      {/* Real Footer: Fixed at the absolute bottom of the screen with a lower z-index */}
      <footer className="fixed bottom-0 left-0 w-full z-0 footer-flare pt-32 pb-16">
        <FooterContent />
      </footer>

      {/* Ghost Footer: Transparent copy that bounds the scroll depth. 
          The -mt-[100px] is the magic trick: It forces the ghost footer to be 100px 'shorter' than reality.
          This prevents the user from scrolling the final 100px of the page, forcing the massive black 
          upper curtain to permanently drape OVER the top 100px of the fixed orange footer.
          This preserves the visibility of the rounded-b-[60px] corners since they will sit on blue instead of black body background!
      */}
      <footer className="opacity-0 pointer-events-none footer-flare pt-32 pb-16 -mt-[100px]" aria-hidden="true">
        <FooterContent />
      </footer>
    </>
  );
}
