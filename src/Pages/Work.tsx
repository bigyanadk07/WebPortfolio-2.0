import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from '../Elements/ProjectCard';
import { Dot } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

interface WorkProps {
  projects: Project[];
}

const Work: React.FC<WorkProps> = ({ projects }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const workSectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate background dots pattern
  const renderBackgroundDots = () => {
    return (
      <div className="fixed inset-0 z-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <Dot
            key={i}
            className="absolute text-zinc-600"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 2 + 1})`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative bg-zinc-900 text-white overflow-x-hidden min-h-screen">
      {/* Background Pattern */}
      {renderBackgroundDots()}

      {/* Fixed Background Title with initial animation */}
      <div className="fixed inset-0 left-96 flex items-center justify-center pointer-events-none">
        <h1
          className={`text-zinc-600 text-[15vw] md:text-[12vw] select-none whitespace-nowrap opacity-20 gasoek-one-regular
            ${isAnimating ? 'animate-sectionOut' : 'animate-sectionIn'}`}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            willChange: 'transform',
          }}
          onAnimationEnd={() => setIsAnimating(false)}
        >
          Work
        </h1>
      </div>

      {/* Content Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="sticky top-0 h-32 bg-gradient-to-b from-zinc-900 to-transparent z-10"></div>
        <div className="sticky bottom-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>

        {/* Side Decorative Lines */}
        <div className="fixed left-8 top-0 w-px h-screen bg-gradient-to-b from-transparent via-zinc-700 to-transparent opacity-20"></div>
        <div className="fixed right-8 top-0 w-px h-screen bg-gradient-to-b from-transparent via-zinc-700 to-transparent opacity-20"></div>

        {/* Projects Grid */}
        <div
          ref={workSectionRef}
          className="relative z-0 w-11/12 md:w-9/12 max-w-6xl mx-auto px-4 sm:px-8 py-32"
        >
          {/* Section Info */}
          <div className="mb-16 will-change-transform animate-fadeInPermanent">
            <p className="text-zinc-400 text-lg mb-4">Browse through my selected projects</p>
            <div className="flex items-center space-x-4 text-sm text-zinc-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Active Projects
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                In Progress
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-zinc-500 rounded-full mr-2"></span>
                Archived
              </span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-16">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div
                  key={project.id}
                  className="opacity-0 animate-fadeIn group"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="relative">
                    <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <ProjectCard project={project} />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-zinc-800/20 rounded-lg border border-zinc-800">
                <p className="text-gray-400 mb-4">No projects found.</p>
                <p className="text-sm text-zinc-500">Check back soon for updates.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes sectionIn {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 0.2;
            transform: translateY(0);
          }
        }

        @keyframes sectionOut {
          0% {
            opacity: 0.2;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInPermanent {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-sectionIn {
          animation: sectionIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-sectionOut {
          animation: sectionOut 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .animate-fadeInPermanent {
          animation: fadeInPermanent 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Work;
