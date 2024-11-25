import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import Img1 from '../Images/pakiti.png';
import Img2 from '../Images/sajo.jpg';

const testimonials = [
  {
    name: "Prakriti Phuyal",
    title: "Graphic Designer at Baama Consultant",
    imgsrc: Img1, // Use the imported image directly
    quote: "Working with Bigyan has been an absolute pleasure! His skills and professionalism is unmatched."
  },
  {
    name: "Saroj Budhathoki",
    title: "Freelance Web Developer and Graphic Designer",
    imgsrc: Img2,
    quote: "Working with Bigyan has been an absolute pleasure! His skills and professionalism is unmatched."
  },
];

const TestimonialCard = ({ name, title, quote, imgsrc }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
    
    <div className="relative rounded-xl p-8 hover:border-gray-700 transition-all duration-300">
      <div className="absolute -top-4 right-8">
        <div className="bg-blue-500/10 p-3 rounded-full">
          <Quote className="w-6 h-6 text-blue-400" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
          <img
            src={imgsrc}
            alt={name}
            className="w-20 h-20 rounded-full object-cover bg-zinc-800"
            onError={(e) => {
              e.target.src = "/api/placeholder/80/80"; // Fallback if image fails to load
              e.target.onerror = null; // Prevent infinite loop
            }}
          />
        </div>

        <p className="mt-6 text-gray-300 text-center leading-relaxed">
          "{quote}"
        </p>

        <div className="w-12 h-1 bg-zinc-600 rounded-full my-4" />

        <div className="text-center">
          <h3 className="font-semibold text-white text-lg">
            {name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {title}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-zinc-900 text-white py-60 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 
          className={`text-5xl sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-bold text-zinc-800 select-none
            transform transition-all duration-1000 ease-out
            ${isVisible 
              ? 'opacity-100 translate-y-0 blur-none' 
              : 'opacity-0 translate-y-24 blur-sm'
            }`}
        >
          Testimonials
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;