import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { FaTerminal } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Animation classes for mobile menu
  const mobileMenuClasses = openNav
    ? "translate-y-0 opacity-100"
    : "-translate-y-10 opacity-0";

  return (
    <div className="sticky top-0 z-50 w-full py-2 px-4 lg:px-8 lg:py-4 bg-light-primary dark:bg-dark-primary shadow-md transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between text-text-light-primary dark:text-text-dark-primary">
        <div className="flex items-center">
          <IconButton
            variant="outlined"
            color={darkMode ? "light-blue" : "blue"}
            ripple={true}
            size="md"
            className="hidden lg:inline-block shadow font-Firacode font-extrabold mr-3 transition-transform duration-300 hover:scale-110"
          >
            <FaTerminal size={30} />
          </IconButton>
          <Typography
            as="a"
            href="#"
            variant="h3"
            className="cursor-pointer py-1.5 font-normal text-xl md:text-2xl lg:text-3xl transition-colors duration-300 hover:text-brand-light dark:hover:text-brand-dark"
          >
            <span>kpdev_root</span>
          </Typography>
        </div>

        <div className="flex items-center gap-4">
          <IconButton
            variant="outlined"
            color={darkMode ? "light-blue" : "blue"}
            ripple={true}
            size="md"
            className="hidden lg:inline-block shadow transition-transform duration-300 hover:scale-110"
            onClick={toggleTheme}
          >
            {darkMode ? (
              <MdOutlineWbSunny size={30} />
            ) : (
              <MdOutlineDarkMode size={30} />
            )}
          </IconButton>

          <IconButton
            variant="text"
            className={`ml-auto h-6 w-6 text-inherit hover:bg-bg-hover focus:bg-bg-hover active:bg-bg-hover rounded-md transition-colors duration-300 lg:hidden`}
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 transition-transform duration-300 rotate-90"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuClasses}`}
        style={{ maxHeight: openNav ? '500px' : '0' }}
      >
        <div className="container mx-auto mt-4 p-4 card">
          <div className="flex flex-col gap-4">
            <a href="#" className="nav-link">Home</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            
            <div className="flex justify-center mt-2">
              <IconButton 
                variant="outlined" 
                size="lg" 
                color={darkMode ? "light-blue" : "blue"} 
                ripple={true} 
                className="transition-transform duration-300 hover:scale-110"
                onClick={toggleTheme}
              >
                {darkMode ? (
                  <MdOutlineWbSunny size={30} />
                ) : (
                  <MdOutlineDarkMode size={30} />
                )}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
