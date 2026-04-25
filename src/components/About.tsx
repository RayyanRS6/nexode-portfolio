"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

// Animated counter hook
function useCounter(end: number, duration: number, inView: boolean, suffix: string = "") {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return count + suffix;
}

// Floating particles background
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animationId: number;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const cleanup = animate();
    const handleResize = () => animate();
    window.addEventListener("resize", handleResize);
    return () => {
      cleanup?.();
      window.removeEventListener("resize", handleResize);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// Stat card component
function StatCard({ icon, value, suffix, label, delay }: { icon: string; value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(value, 1800, isInView, suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative group cursor-default"
    >
      {/* Glow effect behind card */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-surface/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 overflow-hidden group-hover:border-primary/30 transition-all duration-500">
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-bl-[40px]">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent group-hover:from-primary/25 transition-all duration-500" />
        </div>

        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined text-2xl">{icon}</span>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white mb-1 font-headline tabular-nums">
              {isInView ? count : "0"}
            </div>
            <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">{label}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Journey milestone component
function Milestone({ year, title, description, index }: { year: string; title: string; description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="flex items-start gap-5">
        {/* Timeline dot and line */}
        <div className="flex flex-col items-center shrink-0">
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] border-2 border-primary/50 z-10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.9)] transition-shadow"
          />
          <div className="w-px h-full bg-gradient-to-b from-primary/30 to-transparent min-h-[60px]" />
        </div>

        {/* Content */}
        <div className="pb-10">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">{year}</span>
          <h4 className="text-lg font-bold text-white mt-1 mb-1">{title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Value card component
function ValueCard({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-surface/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 h-full group-hover:border-primary/20 transition-all duration-500 overflow-hidden">
        {/* Background pulse */}
        <motion.div
          animate={isHovered ? { scale: [1, 1.5], opacity: [0.1, 0] } : { scale: 1, opacity: 0 }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary"
        />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-xl">{icon}</span>
          </div>
          <h4 className="text-base font-bold text-white mb-2">{title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const scrollVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const milestones = [
    { year: "The Spark", title: "Five Friends, One Belief", description: "We met at university and saw the same problem everywhere — businesses struggling with outdated processes while AI remained locked behind enterprise paywalls." },
    { year: "The Decision", title: "Nexode Was Born", description: "We decided to bridge the gap. No more gatekeeping. Automation and AI should be as accessible as electricity — a basic utility for the modern world." },
    { year: "Today", title: "Building the Future", description: "From dorm rooms to production systems, we now deliver intelligent solutions for businesses of every size across multiple industries." },
  ];

  const values = [
    { icon: "lock_open", title: "Accessible by Design", description: "AI shouldn't be a luxury. We build solutions that any business can adopt and benefit from." },
    { icon: "psychology", title: "Human-First AI", description: "Technology should amplify people, not replace them. Every solution we build keeps humans in the loop." },
    { icon: "speed", title: "Ship Fast, Iterate", description: "We believe in rapid deployment and continuous improvement over endless planning cycles." },
    { icon: "handshake", title: "Partnership Mindset", description: "Your success is our success. We embed ourselves in your vision and treat every project as our own." },
  ];

  return (
    <section className="relative bg-surface overflow-hidden" id="about">
      {/* Particle background */}
      <ParticleField />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 relative z-10">
        {/* Hero Statement */}
        <div className="py-32 pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={scrollVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-variant border border-primary/20 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Our Story
            </motion.div>

            <motion.h2 variants={scrollVariants} className="text-5xl sm:text-6xl md:text-7xl font-headline font-extrabold text-white mb-8 leading-[1.1]">
              Five friends, one{" "}
              <span className="text-glow text-primary italic">vision.</span>
            </motion.h2>

            <motion.p variants={scrollVariants} className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-4">
              We were five university friends who shared a single conviction:{" "}
              <span className="text-white font-semibold">automation and AI shouldn&apos;t be a luxury reserved for tech giants</span>{" "}
              — they are a basic need of today&apos;s modern world.
            </motion.p>
            <motion.p variants={scrollVariants} className="text-lg text-gray-500 leading-relaxed">
              That idea became Nexode. We build intelligent, scalable solutions that make cutting-edge technology accessible for businesses of every size.
            </motion.p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-32">
          <StatCard icon="group" value={5} suffix="" label="Co-Founders & Builders" delay={0} />
          <StatCard icon="deployed_code" value={10} suffix="+" label="Projects Delivered" delay={0.1} />
          <StatCard icon="public" value={3} suffix="+" label="Countries Served" delay={0.2} />
          <StatCard icon="trending_up" value={100} suffix="%" label="Client Satisfaction" delay={0.3} />
        </div>

        {/* Journey + Values Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 pb-32">
          {/* Journey Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-3xl font-headline font-bold text-white mb-3">Our Journey</h3>
              <p className="text-gray-500">From a shared dorm room idea to real-world impact.</p>
            </motion.div>

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <Milestone key={i} index={i} year={m.year} title={m.title} description={m.description} />
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-3xl font-headline font-bold text-white mb-3">What Drives Us</h3>
              <p className="text-gray-500">The principles behind every line of code we write.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <ValueCard key={i} index={i} icon={v.icon} title={v.title} description={v.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
