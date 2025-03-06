import React from "react";
import "../assets/css/SingleCard.css";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface SingleCardProps {
  name: string;
  image: string;
  link: string;
}

function SingleCard({ name, image, link }: SingleCardProps) {
  const { darkMode } = useTheme();
  
  return (
    <div className="project-card relative overflow-hidden rounded-xl shadow-lg bg-bg-card h-64 sm:h-72 w-full transition-all duration-500">
      {/* Card Image */}
      <img
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        src={image}
        alt={name}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-black/90 via-black/60' : 'from-gray-900/90 via-gray-900/60'} to-transparent opacity-80 transition-opacity duration-300 hover:opacity-95`} />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transition-transform duration-300">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-white font-bold text-lg sm:text-xl truncate pr-2">{name}</h3>
          <div className="flex gap-2">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${darkMode ? 'bg-bg-card/80' : 'bg-bg-secondary/80'} p-2 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-bg-hover`}
              aria-label="Visit project"
            >
              <AiOutlineLink size={20} className="text-brand-primary" />
            </a>
            <a 
              href={link.includes('github.com') ? link : 'https://github.com/kpndevroot'} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${darkMode ? 'bg-bg-card/80' : 'bg-bg-secondary/80'} p-2 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-bg-hover`}
              aria-label="View source code"
            >
              <FaGithub size={20} className="text-brand-primary" />
            </a>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-bg-card/50' : 'bg-bg-secondary/50'} h-1 w-full mb-3 rounded-full overflow-hidden`}>
          <div className="bg-brand-primary h-full w-3/4 rounded-full transform origin-left transition-transform duration-500 hover:scale-x-110"></div>
        </div>
        
        <p className="text-white text-sm sm:text-base line-clamp-2">
          {name} - A project by kpdev_root
        </p>
      </div>
    </div>
  );
}

export default SingleCard;
