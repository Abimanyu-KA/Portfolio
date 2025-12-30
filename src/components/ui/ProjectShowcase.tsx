"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Project } from "@/types";
import { Github } from "lucide-react";

// --- TEXT SCRAMBLE EFFECT ---
const ScrambleText = ({ text, active }: { text: string; active: boolean }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

  useEffect(() => {
    if (!active) {
      setDisplay(text);
      return;
    }
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3; 
    }, 30);
    return () => clearInterval(interval);
  }, [active, text]);

  return <span className="font-mono text-emerald-400">{display}</span>;
};

export default function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isHovered, setHovered] = useState(false);
  const f1Controls = useAnimation();

  // --- F1 ANIMATION LOGIC ---
  useEffect(() => {
    if (project.variant === "f1") {
      if (isHovered) {
        // Drive in and BRAKE at 3/4th (approx 50% left relative to container width)
        f1Controls.start({ 
          x: "40vw", 
          transition: { duration: 1.5, ease: "easeOut" } // EaseOut = Braking feel
        });
      } else {
        // Accelerate away to the RIGHT
        f1Controls.start({ 
          x: "120vw", 
          transition: { duration: 0.8, ease: "easeIn" } // EaseIn = Accelerating feel
        }).then(() => {
          // Reset instantly to left side after it's gone
          f1Controls.set({ x: "-100vw" });
        });
      }
    }
  }, [isHovered, project.variant, f1Controls]);


  const getGradient = () => {
    switch (project.variant) {
      case "coords": return "from-blue-900/20 to-slate-950";
      case "mirage": return "from-emerald-900/20 to-slate-950";
      case "f1": return "from-red-900/20 to-slate-950";
      default: return "from-slate-900/20 to-slate-950";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative w-full min-h-[500px] border-b border-white/5 py-24 group overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 1. MAIN CLICK LINK (Covers entire card) */}
      <Link 
        href={project.projectUrl || "#"} 
        target="_blank" 
        className="absolute inset-0 z-20 cursor-pointer" 
        aria-label={`View ${project.title}`} 
      />

      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${getGradient()} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

      {/* --- ANIMATION LAYERS --- */}
      
      {/* 1. F1: STOP & GO ANIMATION */}
      {project.variant === "f1" && (
        <div className="absolute bottom-0 left-0 w-full h-80 overflow-hidden pointer-events-none z-10">
          
          {/* THE CAR controlled by useEffect above */}
          <motion.div
            initial={{ x: "-100vw" }} 
            animate={f1Controls}
            className="absolute bottom-10 left-0 w-96 h-40 z-20"
          >
             {/* The Car Image */}
            <Image 
                src="/images/f1/f1-car.png" 
                alt="F1 Car"
                width={500} 
                height={200}
                className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
            {/* Speed Trail (Only visible when moving fast/entering) */}
            <div className="absolute top-1/2 right-full w-[150px] h-4 bg-gradient-to-l from-red-500/20 to-transparent blur-md transform -translate-y-1/2"></div>
          </motion.div>

          {/* WIND STREAKS (Visuals for speed) */}
          <motion.div 
             animate={isHovered ? { x: ["100%", "-100%"] } : { x: "0%" }}
             transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
             className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-30"
          />
           <motion.div 
             animate={isHovered ? { x: ["100%", "-100%"] } : { x: "0%" }}
             transition={{ duration: 0.6, repeat: Infinity, ease: "linear", delay: 0.2 }}
             className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-20"
          />
        </div>
      )}

      {/* 2. COORDS: RADAR + TARGET DETECTED */}
      {project.variant === "coords" && (
        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-60 transition-opacity duration-500 overflow-hidden pointer-events-none">
           {/* Rotating Beam */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(59,130,246,0.5)_360deg)] opacity-30"
           />
           {/* Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
           
           {/* THE "TARGET" */}
           <div className="absolute top-1/3 right-2/5 flex flex-col items-center">
              <div className="relative">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-cyan-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-600 border border-blue-400 shadow-[0_0_15px_rgba(38,38,220,0.8)]"></span>
              </div>
              
              {/* Text appears only on hover */}
              <motion.div 
                animate={isHovered ? { opacity: [0, 1, 0, 1] } : { opacity: 0 }}
                transition={{ duration: 0.5, times: [0, 0.2, 0.8, 1] }}
                className="mt-2 text-[10px] font-mono text-cyan-400 tracking-widest bg-black/50 px-2 py-1 border border-blue-500/30"
              >
                TARGET_DETECTED
              </motion.div>
           </div>
        </div>
      )}

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pointer-events-none">
        
        {/* Left: Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">0{index + 1} // {project.variant}</span>
             <div className="h-px w-12 bg-slate-800" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            {project.variant === "mirage" ? (
              <ScrambleText text={project.title} active={isHovered} />
            ) : (
              project.title
            )}
          </h2>

          <p className="text-lg text-slate-400 max-w-md leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-mono text-slate-300 border border-slate-700/50 rounded-sm bg-slate-900/50">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: GitHub Button (Classy & Visible) */}
        {/* pointer-events-auto turns clicking BACK ON for this specific button */}
        <div className="flex justify-end items-center pointer-events-auto">
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              className="group relative z-50 flex items-center gap-3 px-8 py-4 bg-slate-950/80 border border-slate-600 hover:border-white text-slate-300 hover:text-white rounded-full transition-all duration-300 backdrop-blur-md shadow-lg"
            >
                <Github size={20} className="group-hover:scale-110 transition-transform"/>
                <span className="font-medium tracking-wide">View Source</span>
            </Link>
        </div>

      </div>
    </motion.div>
  );
}