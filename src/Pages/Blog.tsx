import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { BlogPost, blogPosts } from '../BlogData/Posts';

const BlogPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const selectedBlogRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check screen size and set mobile/desktop mode
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Tailwind's md breakpoint
    };

    // Check initial screen size
    checkMobile();

    // Add event listener to check screen size on resize
    window.addEventListener('resize', checkMobile);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (selectedBlog && selectedBlogRef.current) {
      selectedBlogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedBlog]);

  // Handle navigation for both mobile and desktop
  const handleNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;
      const currentScroll = container.scrollLeft;

      if (isMobile && startIndex + 1 < blogPosts.length) {
        // Mobile: Move to next item
        setStartIndex(prev => prev + 1);
      } else if (!isMobile) {
        // Desktop: Scroll horizontally
        const scrollAmount = Math.min(
          currentScroll + containerWidth, 
          scrollWidth - containerWidth
        );
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (isMobile && startIndex > 0) {
        // Mobile: Move to previous item
        setStartIndex(prev => prev - 1);
      } else if (!isMobile) {
        // Desktop: Scroll horizontally
        const scrollAmount = Math.max(currentScroll - containerWidth, 0);
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Determine if navigation buttons should be shown
  const showNavButtons = !isMobile && blogPosts.length > 4;

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200 relative overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-75 pointer-events-none"></div>

      {/* Floating Background Title */}
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-zinc-800 text-[15vw] md:text-[12vw] select-none whitespace-nowrap opacity-10 blur-sm">
          Blog
        </h1>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-40">
        {/* Blog Slider */}
        <div className="relative mb-16">
          <div className="flex items-center space-x-4">
            {/* Navigation buttons for mobile */}
            {isMobile && (
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className={`p-2 rounded-full transition-all group ${startIndex === 0 
                  ? 'text-gray-600' 
                  : 'text-gray-200 hover:bg-blue-500/20 hover:text-blue-400'}`}
              >
                <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* Navigation buttons for desktop */}
            {showNavButtons && (
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-zinc-700/50 hover:bg-blue-500/20 text-gray-200 hover:text-blue-400 transition-all group"
              >
                <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
              </button>
            )}
            
            <div className="flex-1 overflow-hidden">
              <div 
                ref={containerRef}
                className={`
                  flex 
                  ${isMobile 
                    ? 'space-x-4 transform transition-transform duration-300' 
                    : 'overflow-x-auto pb-4 space-x-4 scrollbar-hide'}`}
                style={isMobile 
                  ? { transform: `translateX(-${startIndex * (224 + 16)}px)` } 
                  : {}}
              >
                {blogPosts.map((post, index) => (
                  <article 
                    key={post.id}
                    onClick={() => setSelectedBlog(post)}
                    className={`
                      ${isMobile || showNavButtons 
                        ? 'flex-shrink-0 w-56' 
                        : 'flex-shrink-0 w-56'}
                      cursor-pointer 
                      bg-zinc-800 rounded-xl overflow-hidden 
                      transform transition-all duration-300 
                      hover:scale-105 hover:shadow-2xl
                      ${selectedBlog?.id === post.id 
                        ? 'ring-2 ring-blue-500 scale-105' 
                        : 'hover:ring-1 hover:ring-gray-600'}
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                    style={{ 
                      transitionDelay: isMobile ? `${index * 100}ms` : '0ms',
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <ArrowUpRight size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h2 className="text-sm font-bold mt-1 mb-2 line-clamp-2">{post.title}</h2>
                      <p className="text-gray-400 text-xs line-clamp-2">{post.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Navigation buttons for mobile */}
            {isMobile && (
              <button
                onClick={handleNext}
                disabled={startIndex + 1 >= blogPosts.length}
                className={`p-2 rounded-full transition-all group ${startIndex + 1 >= blogPosts.length 
                  ? 'text-gray-600' 
                  : 'text-gray-200 hover:bg-blue-500/20 hover:text-blue-400'}`}
              >
                <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
              </button>
            )}

            {/* Navigation buttons for desktop */}
            {showNavButtons && (
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-zinc-700/50 hover:bg-blue-500/20 text-gray-200 hover:text-blue-400 transition-all group"
              >
                <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
              </button>
            )}
          </div>
        </div>

        {/* Selected Blog Content - Unchanged from previous version */}
        {selectedBlog && (
          <div 
            ref={selectedBlogRef}
            className="pb-20 bg-zinc-800/50 backdrop-blur-lg rounded-2xl p-14 border border-zinc-700/50 shadow-2xl"
          >
            <div className="relative mb-8 overflow-hidden rounded-xl">
              <img 
                src={selectedBlog.imageUrl} 
                alt={selectedBlog.title}
                className="w-full h-96 object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
            <div className="space-y-6">
              <span className="text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {selectedBlog.date}
              </span>
              <h2 className="text-4xl font-bold text-white">{selectedBlog.title}</h2>
              <p className="text-xl text-gray-400 italic">{selectedBlog.description}</p>
              <div className="mt-8 border-l-4 border-blue-500 pl-6">
                <p className="text-gray-300 text-lg mb-6">{selectedBlog.content}</p>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedBlog.longDescription}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Existing styles - Unchanged */}
      <style>{`
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

        .animate-sectionIn {
          animation: sectionIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* Custom scrollbar hide for webkit browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default BlogPage;