import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, Linkedin, FileDown } from 'lucide-react';

interface Props {
  name: string;
  bio: string;
  links: {
    linkedin: string;
    github: string;
    email: string;
  };
}

const About: React.FC<Props> = ({ name, bio }) => {
  const [currentSection, setCurrentSection] = useState('about');
  const [isAboutVisible, setIsAboutVisible] = useState(true);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsAboutVisible(entry.isIntersecting);
          setCurrentSection(entry.isIntersecting ? 'about' : 'work');
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px',
      }
    );

    const currentRef = aboutSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleDownload = async () => {
    try {
      setDownloadError(null);
      // Using Vite's environment variable syntax
      const cvPath = import.meta.env.BASE_URL ? 
        `${import.meta.env.BASE_URL}cv.pdf` : 
        '/cv.pdf';

      // First check if the file exists
      const response = await fetch(cvPath);
      if (!response.ok) {
        throw new Error("CV file not found. Please make sure it's uploaded to the correct location.");
      }

      // Get the file as a blob
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create and click a temporary link
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Bigyan_Adhikari_CV.pdf';
      
      // Append to document temporarily
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadError(error instanceof Error ? error.message : 'Failed to download CV. Please try again later.');
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-900 text-white">
      {isAboutVisible && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none gasoek-one-regular">
          <h1
            className={`text-zinc-800 text-[15vw] md:text-[12vw] select-none whitespace-nowrap
              hover:cursor-default hover:animate-textHover
              ${currentSection === 'about' ? 'animate-sectionIn' : 'animate-sectionOut'}`}
            style={{ pointerEvents: 'auto' }}
          >
            {currentSection === 'about' ? 'About me' : 'Work'}
          </h1>
        </div>
      )}

      <div
        ref={aboutSectionRef}
        className={`relative z-10 w-full max-w-4xl mx-4 sm:ml-[10%] lg:ml-[15%] min-h-screen flex flex-col justify-center
          ${isAboutVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}
      >
        {downloadError && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-500">
            {downloadError}
          </div>
        )}

        <div className="overflow-hidden">
          <h2 className="text-4xl sm:text-5xl md:text-7xl tracking-widest mb-8 animate-contentIn font-bold gasoek-one-regular">
            {name}
          </h2>
        </div>

        <div className="overflow-hidden">
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mb-12 animate-contentIn animation-delay-200">
            {bio}
          </p>
        </div>

        <div className="flex flex-col gap-8 animate-contentIn animation-delay-400">
          <div className="flex gap-4 sm:gap-6">
            <a
              href="http://www.linkedin.com/in/bigyanadhikari07"
              className="text-zinc-400 hover:text-white transition-colors p-2"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/bigyanadk07/"
              className="text-zinc-400 hover:text-white transition-colors p-2"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:bigyanadk07@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors p-2"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 
              text-white rounded-md transition-colors duration-200 w-fit
              animate-contentIn animation-delay-600"
            aria-label="Download CV"
          >
            <FileDown size={20} />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      <style>
        {`
        @keyframes sectionIn {
          0% { opacity: 0; transform: translateY(100%); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes sectionOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-100%); }
        }
        @keyframes contentIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-sectionIn { animation: sectionIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-sectionOut { animation: sectionOut 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-contentIn { opacity: 0; animation: contentIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        `}
      </style>
    </div>
  );
};

export default About;