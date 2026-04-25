"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Clock, Zap } from "lucide-react";

interface ComponentProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  statusColor?: string; 
  glowText?: string; 
  className?: string;
  layoutId?: string;
}

export default function GlassmorphismProfileCard({
  name = "Berat Berkay",
  role = "Developer",
  email = "beratberkaygokdemir@gmail.com",
  avatarSrc = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
  statusText = "Available for work",
  statusColor = "bg-primary", // Updated to Nexode brand color
  glowText = "Currently High on Creativity",
  className,
  layoutId,
}: ComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Derive a local clock text once per minute
  const timeText = useMemo(() => {
    if (!mounted) return "--:--";
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m}${ampm}`;
  }, [mounted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("relative w-full max-w-[400px]", className)}
      onClick={(e) => e.stopPropagation()} // Prevent modal background clicks from triggering
      layoutId={layoutId}
      suppressHydrationWarning
    >
     
      {/* Updated the glow underneath to match Nexode's primary blue color #3B82F6 */}
      <div className="pointer-events-none absolute inset-x-3 -bottom-10 top-[90%] rounded-[28px] bg-primary/70 blur-0 shadow-[0_40px_80px_-16px_rgba(59,130,246,0.8)] z-0 " />

      
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-full z-10">
        <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-sm font-medium text-white drop-shadow-md">
          <Zap className="h-4 w-4 text-primary" /> {glowText}
        </div>
      </div>

      <Card className={cn(
        "relative z-10 mx-auto w-full max-w-3xl overflow-visible rounded-[20px]",
        "bg-surface/50 backdrop-blur-xl border-white/10",
        "shadow-2xl shadow-black/50 text-white"
      )}>
        <CardContent className="p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className={cn("inline-block h-2.5 w-2.5 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]", statusColor)} />
              <span className="select-none">{statusText}</span>
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <Clock className="h-4 w-4" />
              <span className="tabular-nums">{timeText}</span>
            </div>
          </div>

        
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative h-40 w-40 sm:h-52 sm:w-52 shrink-0 overflow-hidden rounded-[20px] ring-2 ring-white/10 shadow-xl">
              <Image
                src={avatarSrc}
                alt={`${name} avatar`}
                fill
                sizes="(max-width: 768px) 160px, 208px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 text-center">
              <h3 className="truncate text-xl font-extrabold tracking-tight sm:text-3xl text-white font-headline">
                {name}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-primary uppercase tracking-widest">{role}</p>
            </div>
          </div>


        </CardContent>
      </Card>
    </motion.div>
  );
}
