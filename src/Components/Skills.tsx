import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { FaWordpress } from 'react-icons/fa';

const Skills: React.FC = () => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    // Create IntersectionObserver to detect when the Skills section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSkillsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is in view
      }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={skillsSectionRef}
      className="relative bg-zinc-900 text-white poiret-one-regular py-20 px-6 lg:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <h1
          className={`text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-zinc-700/20 select-none
            ${isSkillsVisible ? 'animate-backgroundIn' : ''}`}
        >
          Skills
        </h1>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 relative z-10">
        <SkillCard icon={<FaReact />} label="React" />
        <SkillCard icon={<DiNodejs />} label="Node.js/Express" />
        <SkillCard icon={<DiMongodb />} label="MongoDB" />
        <SkillCard icon={<SiTailwindcss />} label="TailwindCSS" />
        <SkillCard icon={<SiAdobephotoshop />} label="Adobe Photoshop" />
        <SkillCard icon={<FaPython />} label="Python" />
        <SkillCard icon={<FaGitAlt />} label="Git" />
        <SkillCard icon={<FaJs />} label="JavaScript" />
        <SkillCard icon={<FiFigma />} label="Figma" />
        <SkillCard icon={<FaWordpress />} label="Wordpress" />

      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes backgroundIn {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-backgroundIn {
          animation: backgroundIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

const SkillCard: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="p-6 rounded-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out group relative">
    {/* Skill Icon */}
    <div className="text-5xl mb-4 flex justify-center items-center text-white group-hover:text-blue-400 transition-transform duration-300 group-hover:rotate-180">
      {icon}
    </div>

    {/* Skill Label */}
    <p className="text-lg font-medium text-gray-200">{label}</p>

    {/* Border Animation */}
    <div className="absolute inset-0 rounded-lg transition-all duration-300 ease-in-out" />
  </div>
);

export default Skills;
