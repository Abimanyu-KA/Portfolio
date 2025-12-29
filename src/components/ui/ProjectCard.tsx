// src/components/ui/ProjectCard.tsx
import Link from "next/link";
import { Project } from "@/types";
import { Github, ArrowUpRight } from "lucide-react"; 

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
      
      {/* Top Section: Title & Description */}
      <div>
        <div className="flex justify-between items-start mb-4">
          {/* THE MAIN LINK: Clicking the title opens the website */}
          <Link 
            href={project.projectUrl || "#"} 
            target="_blank"
            className="group/link flex items-center gap-2"
          >
            <h3 className="text-2xl font-bold text-slate-100 group-hover/link:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight size={18} className="text-slate-500 group-hover/link:text-blue-400 transition-colors" />
          </Link>

          {/* GitHub Icon Link */}
          <Link 
            href={project.githubUrl}
            target="_blank" 
            className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
            aria-label="View Source Code"
          >
            <Github size={20} />
          </Link>
        </div>

        <p className="text-slate-400 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Bottom Section: Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}