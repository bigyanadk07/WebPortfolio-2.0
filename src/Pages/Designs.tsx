import React, { useState, useEffect, useRef } from 'react'
import Image1 from '../Images/GraphicImages/Boba-Coffee.png';
import Image2 from '../Images/GraphicImages/Brew & Beans.png';
import Image3 from '../Images/GraphicImages/Food4you.png';
import Image4 from '../Images/GraphicImages/Konasku-Cafe.png';
import Image5 from '../Images/GraphicImages/Krita-Food-Land.png';
import Image6 from '../Images/GraphicImages/Mimi-Restro.png';
import Image7 from '../Images/GraphicImages/Restaurant-menu.png';
import Image8 from '../Images/GraphicImages/Triveni-Food-Land.png';
import Image9 from '../Images/GraphicImages/Waffle-house.png';

const NineByNineGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const gridSectionRef = useRef(null);

  const images = [
    Image1, Image2, Image3, 
    Image4, Image5, Image9, 
    Image7, Image8, Image6
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsGridVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (gridSectionRef.current) {
      observer.observe(gridSectionRef.current);
    }

    return () => {
      if (gridSectionRef.current) {
        observer.unobserve(gridSectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={gridSectionRef}
      className="
        relative w-full 
        px-4 sm:px-10 md:px-20 lg:px-60 
        pt-24 sm:pt-48 md:pt-72 lg:pt-96 
        bg-zinc-900 
        min-h-screen 
        overflow-hidden
      "
    >
      {/* Background Text Animation at the Top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <div className={`
          text-center w-full
          text-[25vw] sm:text-[20vw] md:text-[15vw] lg:text-[15vw] 
          text-white text-opacity-90
          whitespace-nowrap
          ${isGridVisible ? 'animate-backgroundIn' : ''}
          overflow-hidden gasoek-one-regular
        `}>
          Designs
        </div>
      </div>

      <div className="
        grid 
        grid-cols-2 sm:grid-cols-3 
        gap-2 sm:gap-4 
        rounded-xl 
        overflow-hidden 
        relative 
        z-10
      ">
        {[...Array(images.length)].map((_, index) => {
          const imageIndex = index % 9;
          const image = images[imageIndex];

          return (
            <div 
              key={index} 
              className={`
                aspect-square flex items-center justify-center 
                transition-all duration-300 ease-in-out
                ${hoveredIndex !== null && hoveredIndex !== index 
                  ? 'opacity-50 scale-95' 
                  : 'opacity-100 scale-100'}
                hover:scale-105 hover:z-10
                rounded-lg overflow-hidden
                relative group
                ${isGridVisible ? 'animate-gridItemIn' : 'opacity-0'}
              `}
              style={{
                animationDelay: isGridVisible ? `${index * 100}ms` : '0ms'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {image && (
                <img 
                  src={image} 
                  alt={`Grid item ${index + 1}`} 
                  className="
                    w-full h-full object-contain p-2 sm:p-4 
                    transition-transform duration-300 ease-in-out
                    group-hover:scale-110
                  "
                />
              )}
              <div className="
                absolute inset-0 bg-opacity-0 
                group-hover:bg-opacity-20 
                transition-all duration-300 
                flex items-center justify-center
              ">
                <span className="
                  text-white text-opacity-0 
                  group-hover:text-opacity-100 
                  text-lg sm:text-xl font-bold 
                  transition-all duration-300
                ">
                  {index + 1}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes backgroundIn {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 0.05;
            transform: translateY(0);
          }
        }

        @keyframes gridItemIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-backgroundIn {
          animation: backgroundIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-gridItemIn {
          animation: gridItemIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  )
}

export default NineByNineGrid