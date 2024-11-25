import React, { useEffect } from 'react'
import About from '../Components/About'
import Skills from '../Components/Skills'
import TestimonialComponent from '../Components/Testimonials';

const Home:React.FC = () => {

    // Scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div className=''>
      <About 
  name="Bigyan Adhikari"
  bio="Based in Nepal, I'm a Web Developer, Graphic Designer   and Writer passionate about building great UIs and writing fantasy-fiction and, of course, Games."
  links={{
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    email: "your.email@example.com"
  }}
/>
  <Skills />
  <TestimonialComponent/>
    </div>
  )
}

export default Home
