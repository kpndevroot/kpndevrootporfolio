import React from "react";
import Navigation from "../components/Navigation";
import img from "../images/avatar.png";
import { COLORS } from "../assets/color";
import { MdMail } from "react-icons/md";

import { MystackIcons } from "../data/icons";
import GetTouch from "../components/GetTouch";
import Projects from "../components/Projects";
import { useTheme } from "../context/ThemeContext";

const user: any = {
  intro: " Hey I'am Vishnu V 👋",
};

function Home() {
  const { darkMode } = useTheme();
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-light-primary dark:bg-dark-primary">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center animate-fadeIn">
        <div className="imageContainer mb-6 transform transition-transform duration-500 hover:scale-105">
          <img 
            src={img}   
            className={`w-32 sm:w-40 md:w-44 rounded-full ${darkMode ? 'bg-white' : 'bg-gray-100'} shadow-lg border-2 border-cyan-primary`}
            alt="Profile"
          />
        </div>
        
        <div className="nameContainer bg-card-bg text-center w-full max-w-xs sm:max-w-sm rounded-lg p-4 shadow-lg mb-8 transform transition-all duration-300 hover:shadow-cyan-900/20">
          <h1 className="text-text-primary font-normal text-lg sm:text-xl md:text-2xl font-FiraCode">
            {user.intro}
          </h1>
        </div>
        
        <div className="desc max-w-2xl text-center mb-12">
          <h3 className="text-text-primary text-lg sm:text-xl md:text-2xl font-italic font-Firacode leading-relaxed">
            " Tech-savvy and passionate about the latest advancements in
            technology "
          </h3>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="stack-heading-box mb-8 text-center">
          <h1 className="stack-head font-bold text-xl sm:text-2xl md:text-3xl text-text-primary font-Firacode relative inline-block group">
            SKILLS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h1>
        </div>
        
        <div className="language-dock flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {MystackIcons.map((item, i) => (
            <div
              key={i}
              className="iconBox w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center p-3 sm:p-4 bg-card-bg rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/30 hover:-translate-y-1"
            >
              {React.cloneElement(item.icon, { 
                size: window.innerWidth <= 640 ? 30 : window.innerWidth <= 768 ? 35 : 40,
                color: darkMode ? COLORS.iconColor : COLORS.cyan2
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="stack-heading-box mb-8 text-center">
          <h1 className="stack-head font-bold text-xl sm:text-2xl md:text-3xl text-text-primary font-Firacode relative inline-block group">
            PROJECTS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h1>
        </div>
        
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <GetTouch />
      </section>
    </div>
  );
}

export default Home;
