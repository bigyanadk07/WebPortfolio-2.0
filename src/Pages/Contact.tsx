import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import ContactForm from '../Components/ContactForm';

const Contact = ({ email,address }) => {
  const [isContactVisible, setIsContactVisible] = useState(true);
  const contactSectionRef = useRef(null);

    // Scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update visibility state based on intersection
          setIsContactVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '-50px',
      }
    );

    // Start observing the contact section
    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-900 text-white font-thin pb-20">
      {/* Background title - Only show when contact section is visible */}
      {isContactVisible && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <h1
            className={`text-zinc-800 text-[15vw] md:text-[12vw]  select-none whitespace-nowrap
              ${isContactVisible ? 'animate-sectionIn' : 'animate-sectionOut'}`}
          >
            Contact Me
          </h1>
        </div>
      )}

      {/* Contact Section */}
      <div
        ref={contactSectionRef}
        className={`relative z-10 w-full max-w-4xl mx-4 sm:ml-[10%] lg:ml-[15%] min-h-screen flex flex-col justify-center
          ${isContactVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}
      >
        <div className="overflow-hidden">
        <h2 className="text-xl sm:text-xl md:text-xl  mb-8 animate-contentIn">
            Got a project?
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-7xl  mb-8 animate-contentIn">
            Let's Get in Touch
          </h2>
        </div>

        <div className="flex flex-col gap-8 text-zinc-400 text-base sm:text-lg md:text-xl animate-contentIn animation-delay-200">
          <div className="flex items-center gap-4">
            <Mail size={24} />
            <a href={`mailto:${email}`} className="hover:text-white transition-colors">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin size={24} />
            <a 
              href={"http://www.linkedin.com/in/bigyanadhikari07"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Bigyanadk07
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin size={24} />
            <span>{address}</span>
          </div>
        </div>
      </div>

        <div className=''>
        <ContactForm/>
        </div>
 
      {/* Animations */}
      <style jsx global>{`
        @keyframes sectionIn {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sectionOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }

        @keyframes contentIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contentOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-sectionIn {
          animation: sectionIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-sectionOut {
          animation: sectionOut 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-contentIn {
          opacity: 0;
          animation: contentIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default Contact;
