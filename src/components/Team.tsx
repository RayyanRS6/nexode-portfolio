"use client";

import { motion } from "framer-motion";
import GlassmorphismProfileCard from "./ui/glassmorphism-profile-card";

const teamMembers = [
  {
    id: "hashim",
    name: "Hashim Ali",
    role: "Principal AI Architect",
    image: "/team/hashim-portrait.png",
    bio: "Scalable Enterprise AI Models"
  },
  {
    id: "maniha",
    name: "Maniha Fatima",
    role: "Lead Data Scientist",
    image: "/team/maniha-fatima.png",
    bio: "Predictive NLP Workflows"
  },
  {
    id: "arham",
    name: "Arham Awan",
    role: "Systems Engineer",
    image: "/team/arham-awan.png",
    bio: "140 Tbps Cloud Infrastructure"
  },
  {
    id: "rayyan",
    name: "Muhammad Rayyan",
    role: "DevOps Lead",
    image: "/team/muhammad-rayyan.png",
    bio: "Zero-Downtime Deployment Sequences"
  },
  {
    id: "musab",
    name: "Musab Bin Aslam",
    role: "Quantum Strategist",
    image: "/team/musab-bin-aslam.png",
    bio: "Post-Quantum Cryptography Specialist"
  }
];

export default function Team() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="team">
      {/* Dynamic background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-headline font-extrabold text-white mb-6"
          >
            The Architects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 copper-gradient-bg mx-auto rounded-full"
          ></motion.div>
        </div>
        
        {/* Render Glassmorphism Cards directly in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-24 md:gap-y-32 place-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={`card-${member.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="w-full flex justify-center"
            >
              <GlassmorphismProfileCard 
                name={member.name}
                role={member.role}
                avatarSrc={member.image}
                glowText={member.bio}
                email={`${member.id}@nexode.ai`}
                statusText="Available for Architecture"
                statusColor="bg-primary"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
