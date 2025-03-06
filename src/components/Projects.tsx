import React from "react";
import { projectData } from "../data/projects";
import SingleCard from "./SingleCard";
import "../assets/css/Project.css";
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { darkMode } = useTheme();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto">
      {projectData.map((data, index) => (
        <div 
          key={index}
          className="transform transition-all duration-500 hover:scale-105"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animation: "fadeInUp 0.6s ease-out forwards",
            opacity: 0,
            transform: "translateY(20px)"
          }}
        >
          <SingleCard 
            name={data.name} 
            image={data.image} 
            link={data.link} 
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
