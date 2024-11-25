import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost, blogPosts } from '../BlogData/Posts';

const BlogPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBgVisible, setIsBgVisible] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const selectedBlogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (selectedBlog && selectedBlogRef.current) {
      selectedBlogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedBlog]);

  const handleNext = () => {
    if (startIndex + 4 < blogPosts.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const visiblePosts = blogPosts.slice(startIndex, startIndex + 5);

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-200">
      {/* Background title */}
      {isBgVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <h1 className="text-zinc-800 text-[15vw] md:text-[12vw]  select-none whitespace-nowrap animate-sectionIn">
            Blog
          </h1>
        </div>
      )}

      {/* Blog Slider */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-40">
        <div className="relative mb-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 rounded-full transition-colors ${startIndex === 0 ? 'text-gray-600' : 'text-gray-200 hover:bg-gray-800'}`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex space-x-4 transition-transform duration-300"
                style={{ transform: `translateX(-${startIndex * (224 + 16)}px)` }}
              >
                {blogPosts.map((post, index) => (
                  <article 
                    key={post.id}
                    onClick={() => setSelectedBlog(post)}
                    className={`flex-shrink-0 w-56 cursor-pointer border-2 
                      ${selectedBlog?.id === post.id ? 'border-blue-500' : 'border-gray-600'} 
                      border-dashed rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-32 object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <h2 className="text-sm font-bold mt-1 mb-2 line-clamp-2">{post.title}</h2>
                      <p className="text-gray-400 text-xs line-clamp-2">{post.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={startIndex + 5 >= blogPosts.length}
              className={`p-2 rounded-full transition-colors ${startIndex + 5 >= blogPosts.length ? 'text-gray-600' : 'text-gray-200 hover:bg-gray-800'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Selected Blog Content */}
        {selectedBlog && (
          <div 
            ref={selectedBlogRef}
            className="pb-20 transform transition-all duration-500 rounded-lg p-14"
          >
            <img 
              src={selectedBlog.imageUrl} 
              alt={selectedBlog.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
            <div className="space-y-6">
              <span className="text-gray-400">{selectedBlog.date}</span>
              <h2 className="text-4xl font-bold">{selectedBlog.title}</h2>
              <p className="text-xl text-gray-400">{selectedBlog.description}</p>
              <div className="mt-8">
                <p className="text-gray-300 text-lg mb-6">{selectedBlog.content}</p>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedBlog.longDescription}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

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

        .animate-sectionIn {
          animation: sectionIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;