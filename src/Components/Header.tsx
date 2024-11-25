import React from 'react';
import Logo from '../Images/bigyanLogo.png';

const AbstractShape = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-20 h-20 text-white animate-spin-slow"
    aria-hidden="true"
  >
    <circle 
      cx="50" 
      cy="50" 
      r="30" 
      className="fill-none stroke-current opacity-70 animate-pulse" 
      strokeWidth="1" 
    />
    <path 
      d="M20,50 Q50,20 80,50 T20,50" 
      className="fill-none stroke-current opacity-70" 
      strokeWidth="0.5" 
    />
    <path 
      d="M20,60 Q50,30 80,60 T20,60" 
      className="fill-none stroke-current opacity-70 animate-draw" 
      strokeWidth="0.5" 
    />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="opacity-90 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <img src={Logo} alt="" className='w-14 h-auto' />
          </div>

          {/* Abstract Design Element */}
          <div className="hidden md:flex opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] relative">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-zinc-800/20 to-transparent rounded-full blur-xl" />
            <AbstractShape />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
