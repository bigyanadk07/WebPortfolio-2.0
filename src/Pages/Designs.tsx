import React, { useState, useEffect, useRef } from 'react';
import Preview from "../Images/portfolio-preview.png"

const BrowserMockup: React.FC = () => {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const gridSectionRef = useRef(null);

  const websitePreviewImage = Preview;
  const websiteUrl = 'https://design-bigyanadhikari.netlify.app/';

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

  const handleBrowserClick = () => {
    window.open(websiteUrl, '_blank');
  };

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
        flex flex-col items-center justify-center
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

      {/* Moved Designs Explanation */}
      <div className={`
        text-center 
        max-w-2xl 
        mx-auto 
        mb-8 
        px-4
        ${isGridVisible ? 'animate-gridItemIn' : 'opacity-0'}
      `}>
        <h2 className="
          text-2xl 
          sm:text-3xl 
          text-white 
          font-bold 
          mb-4
        ">
          Designs Have Been Moved!!!
        </h2>
        <p className="
          text-zinc-300 
          text-base 
          sm:text-lg 
          leading-relaxed
        ">
          To provide a better browsing experience, my design portfolio has been relocated to a dedicated website. Click the preview below to explore the full collection of my latest designs and creative works.
        </p>
      </div>

      <div className="
        relative z-10 
        w-full 
        max-w-4xl 
        transform 
        transition-all 
        duration-500
        hover:scale-[1.02]
        ${isGridVisible ? 'animate-gridItemIn' : 'opacity-0'}
      ">
        {/* Rest of the component remains the same as in the original code */}
        {/* Browser Mockup */}
        <div 
          className="
            bg-zinc-800 
            rounded-xl 
            overflow-hidden 
            shadow-2xl 
            cursor-pointer 
            transition 
            duration-300 
            hover:shadow-3xl
            border-4 
            border-zinc-700
          "
          onClick={handleBrowserClick}
        >
          {/* Browser Top Bar */}
          <div className="
            bg-zinc-700 
            h-10 
            flex 
            items-center 
            px-4 
            justify-between
          ">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="
              bg-zinc-600 
              text-zinc-300 
              px-4 
              py-1 
              rounded 
              text-sm 
              max-w-md 
              truncate 
              w-full 
              text-center
            ">
              {websiteUrl}
            </div>
            <div className="w-12"></div>
          </div>

          {/* Website Preview */}
          <div className="relative overflow-hidden">
            <img 
              src={websitePreviewImage} 
              alt="Design Portfolio Preview"
              className="
                w-full 
                h-auto 
                object-cover 
                transition 
                duration-300 
                transform 
                hover:scale-105
              "
              loading="lazy"
            />
            <div className="
              absolute 
              inset-0 
              bg-black 
              bg-opacity-0 
              hover:bg-opacity-10 
              transition 
              duration-300 
              flex 
              items-center 
              justify-center
            ">
              <div className="
                text-white 
                text-opacity-0 
                hover:text-opacity-100 
                text-2xl 
                font-bold 
                transition 
                duration-300
              ">
                Click to Open
              </div>
            </div>
          </div>
        </div>
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
            transform: scale(0.8) rotateX(-20deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateX(0);
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
  );
};

export default BrowserMockup;