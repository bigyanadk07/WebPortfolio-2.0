
import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Work from './Pages/Work'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Footer from './Components/Footer'


const App:React.FC = () => {

  const projects = [
    {
      id: 1,
      title: "MESAA",
      description: "A full-stack food ordering web application with real-time order tracking.",
      image: "",
      technologies: ["MERN Stack", "TailwindCSS"],
      liveUrl: "https://github.com/bigyanadk07/MESAA",
      githubUrl: "https://github.com/bigyanadk07/MESAA"
    },
    {
      id: 2,
      title: "Scripted",
      description: "A feature-rich blogging platform with user authentication and markdown support.",
      image: "/path/to/Project3.jpg", // Replace with actual path
      technologies: ["MERN Stack", "TailwindCSS"],
      liveUrl: "https://github.com/bigyanadk07/Scripted",
      githubUrl: "https://github.com/bigyanadk07/Scripted"
    },
    {
      id: 3,
      title: "Expensio",
      description: "A full-stack expense tracking app designed to allow users to manage their finance with ease.",
      image: "/path/to/Project19.jpg", // Replace with actual path
      technologies: ["MERN Stack", "TailwindCSS"],
      liveUrl: "https://github.com/bigyanadk07/Expensio---Expense-Tracker",
      githubUrl: "https://github.com/bigyanadk07/Expensio---Expense-Tracker"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "Personal portfolio website showcasing projects and skills.",
      image: "/path/to/Project2.jpg", // Replace with actual path
      technologies: ["ReactJS", "TailwindCSS"],
      liveUrl: "https://bigyanadk07.netlify.app/",
      githubUrl: "https://github.com/bigyanadk07/WebPortfolio"
    },
    {
      id: 4,
      title: "Web Portfolio [Client}",
      description: "Built a web portfolio using React and Tailwind for a client and deployed using Netlify.",
      image: "/path/to/Project2.jpg", // Replace with actual path
      technologies: ["ReactJS", "TailwindCSS"],
      liveUrl: "https://prakritiphuyal.netlify.app/#",
      githubUrl: "https://github.com/bigyanadk07/PrakritiPortfolio"
    },
    {
      id: 4,
      title: "Web Portfolio [Personal]",
      description: "Personal portfolio website showcasing projects and skills.",
      image: "/path/to/Project2.jpg", // Replace with actual path
      technologies: ["ReactJS", "TailwindCSS"],
      liveUrl: "https://github.com/bigyanadk07/WebPortfolio-2.0",
      githubUrl: "https://github.com/bigyanadk07/WebPortfolio-2.0"
    },
  ];
  
  return (
    <div className='ubuntu-regular'>
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/work" element={<Work projects = {projects}/>} />
          <Route path="/contact" element={<Contact email="bigyanadk07@gmail.com"
        address="Lalitpur, Nepal"/>} />
        <Route path="/blog" element={<Blog/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App