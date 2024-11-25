import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <a
      href={project.liveUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-64 sm:w-[450px] lg:w-96"
    >
      {/* Outer dashed border */}
      <span className="absolute inset-0 border-2 border-dashed border-zinc-700"></span>

      <div className="relative flex h-full transform items-end border-2 border-zinc-700 bg-gradient-to-br from-zinc-800/40 to-zinc-900/80 backdrop-blur-md transition-transform duration-700 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2 overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full">
            {/* Diagonal lines */}
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(45deg, #27272a 25%, transparent 25%, transparent 75%, #27272a 75%, #27272a)", backgroundSize: "60px 60px", backgroundPosition: "0 0" }}></div>
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(45deg, #27272a 25%, transparent 25%, transparent 75%, #27272a 75%, #27272a)", backgroundSize: "60px 60px", backgroundPosition: "30px 30px" }}></div>
          </div>
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Circle */}
          <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-600 animate-spin-slow">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4"/>
            </svg>
          </div>
          
          {/* Hexagon */}
          <div className="absolute left-0 bottom-0 w-24 h-24 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-600">
              <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          {/* Dots Grid */}
          <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-20">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-zinc-600 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Default Content */}
        <div className="p-4 sm:p-6 lg:p-8 transition-opacity duration-700 ease-in-out group-hover:absolute group-hover:opacity-0 relative z-10">
          <h3 className="mt-8 text-xl font-semibold sm:text-2xl text-white">
          <span className="flex items-center mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              </span>
            {project.title}
          </h3>
        </div>

        {/* Hover Content */}
        <div className="absolute p-4 sm:p-6 lg:p-8 opacity-0 transition-opacity duration-700 ease-in-out group-hover:relative group-hover:opacity-100 z-10">
          <h3 className="mt-8 text-xl font-semibold sm:text-2xl text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-zinc-700/50 backdrop-blur-sm rounded-full text-zinc-300 border border-zinc-600/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-500 ease-in-out"
              >
                <Github size={20} />
                <span>Source</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-500 ease-in-out"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

// Add this to your global CSS or Tailwind config
const styles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;

export default ProjectCard;