import React from "react";
import { FaPython, FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { COLORS } from "../assets/color";
import { useTheme } from "../context/ThemeContext";

export default function GetTouch() {
  const { darkMode } = useTheme();
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary font-Firacode relative inline-block group">
          GET IN TOUCH
          <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h2>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* GitHub */}
        <a 
          href="https://github.com/kpndevroot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card flex items-center gap-4 p-5 bg-card-bg rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1 group"
        >
          <div className={`icon-container p-3 ${darkMode ? 'bg-gray-900' : 'bg-secondary-bg'} rounded-full transition-all duration-300 group-hover:bg-cyan-900/20`}>
            <FaGithubAlt size={30} className="text-cyan-primary" />
          </div>
          <div>
            <h3 className="text-text-primary font-medium text-lg">GitHub</h3>
            <p className="text-text-secondary text-sm sm:text-base">@kpndevroot</p>
          </div>
        </a>
        
        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/kpndevroot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card flex items-center gap-4 p-5 bg-card-bg rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1 group"
        >
          <div className={`icon-container p-3 ${darkMode ? 'bg-gray-900' : 'bg-secondary-bg'} rounded-full transition-all duration-300 group-hover:bg-cyan-900/20`}>
            <FaLinkedinIn size={30} className="text-cyan-primary" />
          </div>
          <div>
            <h3 className="text-text-primary font-medium text-lg">LinkedIn</h3>
            <p className="text-text-secondary text-sm sm:text-base">@kpndevroot</p>
          </div>
        </a>
        
        {/* Email */}
        <a 
          href="mailto:kpndevroot@gmail.com" 
          className="contact-card flex items-center gap-4 p-5 bg-card-bg rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1 group"
        >
          <div className={`icon-container p-3 ${darkMode ? 'bg-gray-900' : 'bg-secondary-bg'} rounded-full transition-all duration-300 group-hover:bg-cyan-900/20`}>
            <MdMail size={30} className="text-cyan-primary" />
          </div>
          <div>
            <h3 className="text-text-primary font-medium text-lg">Email</h3>
            <p className="text-text-secondary text-sm sm:text-base">kpndevroot@gmail.com</p>
          </div>
        </a>
      </div>
      
      {/* Footer */}
      <div className="mt-16 text-center text-text-muted text-sm">
        <p>© {new Date().getFullYear()} kpdev_root. All rights reserved.</p>
        <p className="mt-2">Made with ❤️ using React & Tailwind CSS</p>
      </div>
    </div>
  );
}
