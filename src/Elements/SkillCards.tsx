import React from "react";

interface SkillCardProps {
  logo: string; // Prop for the logo (image URL)
  title: string; // Prop for the skill title
}

const SkillCards: React.FC<SkillCardProps> = ({ logo, title }) => {
  return (
    <div className="relative flex items-center justify-center">
      <a
        href="#"
        className="group relative block h-64 sm:h-80 lg:h-96 max-w-xs mx-auto bg-zinc-800/30 rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2"
      >
        {/* Card Content */}
        <div className="relative flex h-full items-center justify-center p-6">
          {/* Icon or Image */}
          <div className="transition-opacity group-hover:absolute group-hover:opacity-0">
            <img
              src={logo}
              alt={title}
              className="w-16 h-16 object-contain text-zinc-300"
            />
          </div>

          {/* Hover Content */}
          <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 text-center">
            <h3 className="text-xl sm:text-2xl font-medium text-white">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SkillCards;
