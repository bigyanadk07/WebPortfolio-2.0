import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

const VerticalNav:React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About', to: '/' },
    { id: 'work', label: 'Work', to: '/work' },
    { id: 'contact', label: 'Contact', to: '/contact' },
    { id: 'blog', label: 'Blog', to: '/blog' },
  ];

  // Update active link based on current path
  useEffect(() => {
    const path = location.pathname;
    const currentLink = navLinks.find(link => link.to === path)?.id || 'about';
    setActiveLink(currentLink);
  }, [location.pathname]);

  const handleClick = (id: string) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Toggle Button - Only visible below 788px */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed right-6 top-6 z-50 hidden max-[788px]:block"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <Menu className="text-white w-6 h-6" />
        )}
      </button>

      {/* Vertical Navigation - Hidden below 788px */}
      <nav className="fixed right-12 top-1/2 -translate-y-1/2 z-50 max-[788px]:hidden">
        <ul className="flex flex-col gap-14">
          {navLinks.map(({ id, label, to }, index) => (
            <li key={id} className="relative overflow-hidden">
              <Link
                to={to}
                onClick={() => handleClick(id)}
                className={`vertical-text group flex items-center transition-transform duration-300 hover:translate-x-[-8px]
                  ${activeLink === id ? 'text-white' : 'text-zinc-600'}`}
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`
                }}
              >
                <span className="absolute right-0 top-0 w-[1px] h-0 bg-white/50 
                  transition-all duration-300 ease-out group-hover:h-full" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Fullscreen Overlay - Mobile Menu (Below 788px) */}
      <div
        className={`fixed inset-0 bg-zinc-900/98 backdrop-blur-sm z-40 transition-transform duration-500 ease-in-out hidden max-[788px]:block
          ${isMenuOpen ? 'transform translate-y-0' : 'transform translate-y-full'}`}
      >
        <div className="flex items-center justify-center h-full">
          <ul className="flex flex-col gap-8 text-center">
            {navLinks.map(({ id, label, to }, index) => (
              <li
                key={id}
                className="transform translate-y-10 opacity-0"
                style={{
                  animation: isMenuOpen
                    ? `slideUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${index * 0.1}s`
                    : 'none'
                }}
              >
                <Link
                  to={to}
                  onClick={() => handleClick(id)}
                  className={`text-2xl font-light tracking-wider transition-colors duration-300
                    ${activeLink === id ? 'text-white' : 'text-zinc-400'} hover:text-white`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.875rem;
          padding: 0.5rem 0;
          cursor: pointer;
          transform: rotate(180deg);
          opacity: 0;
          animation: slideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(20px) rotate(180deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(180deg);
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default VerticalNav;