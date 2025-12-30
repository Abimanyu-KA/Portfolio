import Link from "next/link";
import { projectsData, personalInfo } from "@/lib/data";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import { Github, Linkedin, Mail, FileText, ArrowDownRight, Terminal, Cpu, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 selection:bg-emerald-500/30 overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND: TECHNICAL GRID --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Film Grain Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")'}}></div>

      {/* --- HERO SECTION: THE "TECHNICAL DOSSIER" --- */}
      <section className="relative z-10 min-h-[95vh] flex flex-col justify-between pt-12 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto border-x border-white/5">
        
        {/* HEADER: STATUS BAR */}
        <div className="flex justify-between items-start border-b border-white/10 pb-6">
          <div className="font-mono text-xs text-slate-500 space-y-1">
             <p>SYSTEM_READY</p>
             <p>LOC: CHENNAI, IN</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-950/30 border border-emerald-500/20 rounded text-emerald-400 text-xs font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            STATUS: OPEN_TO_WORK (2026)
          </div>
        </div>

        {/* MAIN CONTENT: ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12 lg:mt-0 items-center">
          
          {/* LEFT: IDENTITY & PITCH (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* NAME FIX: "K A" is wrapped in a span to stay together */}
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.9] uppercase">
              ABIMANYU <br className="md:hidden" />
              <span className="whitespace-nowrap text-white">K A</span>
              <span className="text-emerald-500">.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-slate-400 tracking-tight flex items-center gap-4">
              <span className="text-white font-medium">Full Stack Engineer</span>
              <span className="h-px w-8 bg-slate-600"></span>
              <span className="text-slate-500">Data Analyst</span>
            </h2>
            
            {/* NEW BIO: Focus on "Logic + Creativity" instead of "Security" */}
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-2 border-slate-700 pl-6">
              I sit at the intersection of <span className="text-slate-200">creative design</span> and <span className="text-slate-200">hard logic</span>. I don't just write code that works; I build applications that feel intuitive and intelligent. Whether it's visualizing Formula 1 telemetry or crafting seamless UI interactions, I focus on turning complex problems into simple, powerful solutions.
            </p>

            {/* ACTION AREA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/resume.pdf" 
                target="_blank" 
                className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-emerald-400 transition-colors flex items-center gap-2"
              >
                <FileText size={20} /> Resume
              </Link>
              
              <Link 
                href="#work" 
                className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                <ArrowDownRight size={20} /> View Projects
              </Link>

              <div className="flex gap-2 ml-auto lg:ml-4">
                <Link href="https://github.com/Abimanyu-KA" target="_blank" className="p-4 border border-white/10 hover:border-white text-slate-400 hover:text-white transition-colors"><Github size={24}/></Link>
                <Link href="https://linkedin.com/in/abimanyu-ka" target="_blank" className="p-4 border border-white/10 hover:border-white text-slate-400 hover:text-white transition-colors"><Linkedin size={24}/></Link>
              </div>
            </div>
          </div>

          {/* RIGHT: THE "HUD" STATS (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-end h-full">
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm space-y-8 relative overflow-hidden flex flex-col justify-between h-full">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-emerald-500/50"></div>
              
              {/* SECTION 1: CORE CAPABILITIES (Kept exactly as requested) */}
              <div className="space-y-6">
                <h3 className="font-mono text-sm text-emerald-500 uppercase tracking-widest border-b border-white/10 pb-2 flex justify-between">
                  <span>Core_Capabilities</span>
                  <span>[JSON]</span>
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  
                  {/* FRONTEND */}
                  <div className="space-y-1">
                     <div className="flex justify-between items-center text-slate-200 font-bold text-sm uppercase tracking-wide">
                        <span className="flex items-center gap-2"><Globe size={14} className="text-blue-500"/> Frontend Engineering</span>
                        <span className="text-[10px] text-slate-600 font-mono">100%</span>
                     </div>
                     <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full w-full bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div></div>
                     <p className="text-xs text-slate-500 font-mono pt-1">React, Next.js, TypeScript, Tailwind</p>
                  </div>

                  {/* BACKEND */}
                  <div className="space-y-1">
                     <div className="flex justify-between items-center text-slate-200 font-bold text-sm uppercase tracking-wide">
                        <span className="flex items-center gap-2"><Terminal size={14} className="text-emerald-500"/> Backend Systems</span>
                        <span className="text-[10px] text-slate-600 font-mono">100%</span>
                     </div>
                     <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full w-full bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div></div>
                     <p className="text-xs text-slate-500 font-mono pt-1">Python, Node.js, SQL, APIs</p>
                  </div>

                  {/* DATA SCIENCE */}
                  <div className="space-y-1">
                     <div className="flex justify-between items-center text-slate-200 font-bold text-sm uppercase tracking-wide">
                        <span className="flex items-center gap-2"><Cpu size={14} className="text-purple-500"/> Data Analysis</span>
                        <span className="text-[10px] text-slate-600 font-mono">100%</span>
                     </div>
                     <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full w-full bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div></div>
                     <p className="text-xs text-slate-500 font-mono pt-1">Pandas, Scikit-Learn, Visualization</p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: PREVIOUS INTERNSHIPS (New Section) */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                 <h3 className="font-mono text-xs text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    Internships
                 </h3>
                 
                 <Link 
                   href="/DAintern.pdf" 
                   target="_blank"
                   className="group flex items-center justify-between p-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all rounded cursor-pointer"
                 >
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-slate-900 rounded border border-slate-700 text-emerald-400 group-hover:text-emerald-300">
                          <FileText size={16} />
                       </div>
                       <div className="text-left">
                          <p className="text-xs font-bold text-slate-200 group-hover:text-white uppercase tracking-wide">Data Analyst Intern</p>
                          <p className="text-[10px] text-slate-500 font-mono group-hover:text-emerald-400/70">VIEW_CERTIFICATE.pdf</p>
                       </div>
                    </div>
                    <ArrowDownRight size={16} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
                 </Link>
              </div>

            </div>
          </div>

        </div>

        {/* FOOTER OF HERO */}
        <div className="grid grid-cols-3 border-t border-white/10 pt-6 mt-12 text-[10px] md:text-xs font-mono text-slate-600 uppercase tracking-widest">
           <div>© 2025 PORTFOLIO</div>
           <div className="text-center">SCROLL TO VIEW CASE STUDIES</div>
           <div className="text-right">V2.1 [DEPLOYED]</div>
        </div>

      </section>

      {/* --- SHOWCASE SECTION --- */}
      <section id="work" className="relative z-10 bg-[#050505] border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
            <div className="flex items-end justify-between mb-16">
               <div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">SELECTED<br/>WORKS</h2>
               </div>
               <div className="hidden md:block text-right font-mono text-sm text-slate-500">
                  <p>INDEX: 01-03</p>
                  <p>PRIORITY: HIGH</p>
               </div>
            </div>

            <div className="border-t border-white/10">
              {projectsData.map((project, index) => (
                <ProjectShowcase key={index} index={index} project={project} />
              ))}
            </div>
        </div>
      </section>

      {/* --- FOOTER: COMMUNICATION HUB --- */}
      <footer className="relative z-10 py-24 px-6 md:px-12 bg-[#050505] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Initialize Contact Protocol</h2>
            <p className="text-slate-400 font-light max-w-lg mx-auto">
              Ready to integrate into your engineering team for Summer 2026. 
              Available for full-stack architecture and data analysis roles.
            </p>
          </div>

          {/* Primary Action: Email Button */}
          <div className="flex flex-col items-center gap-6">
            <Link 
                href={`mailto:${personalInfo.email}`}
                className="group relative inline-flex items-center gap-3 px-8 py-4 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-mono text-sm transition-all uppercase tracking-wider overflow-hidden"
              >
                <span className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <Mail size={18} className="relative z-10" />
                <span className="relative z-10">SEND_TRANSMISSION()</span>
            </Link>

            {/* Fallback: Copyable Email */}
            <div className="font-mono text-xs text-slate-600">
               <span className="text-slate-500">DIRECT_LINK: </span> 
               <span className="text-slate-300 select-all hover:text-white transition-colors cursor-text">
                 {personalInfo.email}
               </span>
            </div>
          </div>

          {/* Secondary Nodes: Social Links */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
             
             {/* GitHub Node */}
             <Link href="https://github.com/Abimanyu-KA" target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors group">
                <div className="p-2 border border-slate-800 rounded-full group-hover:border-white/50 transition-colors">
                  <Github size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wide">GitHub</p>
                  <p className="text-[10px] font-mono">/SOURCE_CODE</p>
                </div>
             </Link>

             {/* LinkedIn Node */}
             <Link href="https://linkedin.com/in/abimanyu-ka" target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-blue-400 transition-colors group">
                <div className="p-2 border border-slate-800 rounded-full group-hover:border-blue-500/50 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wide">LinkedIn</p>
                  <p className="text-[10px] font-mono">/NETWORK_LOGS</p>
                </div>
             </Link>

          </div>

          {/* Copyright Line */}
          <div className="text-[10px] font-mono text-slate-700 pt-8 uppercase tracking-widest">
            © {new Date().getFullYear()} {personalInfo.name} <span className="mx-2">|</span> SYSTEM_ONLINE
          </div>
        </div>
      </footer>
    </main>
  );
}