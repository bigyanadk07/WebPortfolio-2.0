import React, { useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';
import Logo from "../Images/cmplogo1.jpeg"


interface ExperienceProps {
  role: string;
  company: string;
  companyLogo: string;
  duration: string;
  description: string;
}

const experiences: ExperienceProps[] = [
  {
    role: "FullStack Developer Intern",
    company: "Wisdom Technologies.",
    companyLogo: "../Images/cmplogo1.jpeg",
    duration: "Jan 2022 - Present",
    description: "Developing and maintaining modern web applications using MERN stack, ensuring optimal user experience and performance."
  },
];

const ExperienceCard: React.FC<ExperienceProps> = ({ role, company, companyLogo, duration, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
    
    <div className="relative rounded-xl p-8 hover:border-gray-700 transition-all duration-300">
      <div className="absolute -top-4 right-8">
        <div className="bg-blue-500/10 p-3 rounded-full">
          <Briefcase className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      
      <div className="text-center">
        <img src={Logo} alt={company} className="w-16 h-16 mx-auto rounded-full mb-4" />
        <h3 className="font-semibold text-white text-lg">{role}</h3>
        <p className="text-sm text-gray-400 mt-1">{company}</p>
        <p className="text-xs text-gray-500 mt-1">{duration}</p>
        <div className="w-12 h-1 bg-zinc-600 rounded-full my-4 mx-auto" />
        <p className="text-gray-300 text-center leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ExperienceComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-zinc-900 text-white py-60 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 
          className={`text-5xl sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-bold text-zinc-800 select-none
            transform transition-all duration-1000 ease-out gasoek-one-regular
            ${isVisible 
              ? 'opacity-100 translate-y-0 blur-none' 
              : 'opacity-0 translate-y-24 blur-sm '
            }`}
        >
          Experience
        </h1>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.role} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
