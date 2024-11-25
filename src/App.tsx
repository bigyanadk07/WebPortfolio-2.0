// App.tsx
import React from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Work from './Pages/Work';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Footer from './Components/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const App: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "MESAA",
      description: "A full-stack food ordering web application with real-time order tracking.",
      image: "",
      technologies: ["MERN Stack", "TailwindCSS"],
      liveUrl: "https://github.com/bigyanadk07/MESAA",
      githubUrl: "https://github.com/bigyanadk07/MESAA",
    },
    {
      id: 2,
      title: "Scripted",
      description: "A feature-rich blogging platform with user authentication and markdown support.",
      image: "/path/to/Project3.jpg",
      technologies: ["MERN Stack", "TailwindCSS"],
      liveUrl: "https://github.com/bigyanadk07/Scripted",
      githubUrl: "https://github.com/bigyanadk07/Scripted",
    },
    {
      id: 3,
      title: "Expensio",
      description: "A full-stack expense tracking app designed to allow users to manage their finance with ease.",
      image: "/path/to/Project19.jpg",
      technologies: ["MERN Stack", "TailwindCSS"],
      liveUrl: "https://github.com/bigyanadk07/Expensio---Expense-Tracker",
      githubUrl: "https://github.com/bigyanadk07/Expensio---Expense-Tracker",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "Personal portfolio website showcasing projects and skills.",
      image: "/path/to/Project2.jpg",
      technologies: ["ReactJS", "TailwindCSS"],
      liveUrl: "https://bigyanadk07.netlify.app/",
      githubUrl: "https://github.com/bigyanadk07/WebPortfolio",
    },
    {
      id: 5,
      title: "Web Portfolio(Client)",
      description: "Designed and Curated a personal web portfolio for a client and hosted live on Netlify.",
      image: "/path/to/Project2.jpg",
      technologies: ["ReactJS", "TailwindCSS"],
      liveUrl: "https://prakritiphuyal.netlify.app/",
      githubUrl: "https://github.com/bigyanadk07/PrakritiPortfolio",
    },
  ];

  return (
    <div className="ubuntu-regular">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work projects={projects} />} />
          <Route
            path="/contact"
            element={
              <Contact
                email="bigyanadk07@gmail.com"
                address="Lalitpur, Nepal"
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
