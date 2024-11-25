import React, { useEffect } from 'react';
import About from '../Components/About';
import Skills from '../Components/Skills';
import TestimonialComponent from '../Components/Testimonials';

interface Links {
  linkedin: string;
  github: string;
  email: string;
}

const Home: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const links: Links = {
    linkedin: "https://linkedin.com/in/BigyanAdhikari",
    github: "https://github.com/BigyanAdhikari",
    email: "bigyan.adhikari@example.com",
  };

  return (
    <div>
      <About
        name="Bigyan Adhikari"
        bio="Based in Nepal, I'm a Web Developer, Graphic Designer, and Writer passionate about building great UIs, writing fantasy-fiction, and exploring games."
        links={links}
      />
      <Skills />
      <TestimonialComponent />
    </div>
  );
};

export default Home;
