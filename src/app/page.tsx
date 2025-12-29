// src/app/page.tsx
import { projectsData, personalInfo } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import { Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-4 text-center relative">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="relative z-10 space-y-6 max-w-3xl">
          <span className="text-blue-500 font-mono tracking-wider text-sm font-semibold">
            HELLO, WORLD
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light">
            {personalInfo.role}
          </p>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-lg">
            {personalInfo.bio}
          </p>
          
          <div className="flex justify-center gap-4 pt-8">
            <Link href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25">
              View Work
            </Link>
            <Link href="mailto:your@email.com" className="px-8 py-3 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 rounded-full font-medium transition-all text-slate-300">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce text-slate-600">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-12 text-center text-slate-500 bg-slate-950">
        <div className="flex justify-center gap-8 mb-8">
          <Link href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110"><Github size={24} /></Link>
          <Link href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></Link>
          <Link href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110"><Mail size={24} /></Link>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind.</p>
      </footer>

    </main>
  );
}