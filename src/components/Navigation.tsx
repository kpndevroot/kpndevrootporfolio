import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaTerminal } from "react-icons/fa";
import { COLORS } from "../assets/color";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="w-full py-2 px-4 lg:px-8 lg:py-4 bg-dark_bg  shadow mx-auto">
      <div className="container mx-auto flex items-center justify-between text-gray-400 ">
        <IconButton
          variant="outlined"
          color={COLORS.iconColor}
          ripple={true}
          size="md"
          className="hidden lg:inline-block shadow font-Firacode font-extrabold"
        >
          <FaTerminal size={30} />
        </IconButton>
        <Typography
          as="a"
          href="#"
          variant="h3"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>kpdev_root</span>
        </Typography>

        <IconButton
          variant="outlined"
          color={COLORS.iconColor}
          ripple={true}
          size="md"
          className="hidden lg:inline-block shadow"
        >
          <MdOutlineDarkMode size={30} />
        </IconButton>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
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
              className="h-6 w-6"
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {/* {navList} */}
          <IconButton variant="outlined" size="lg" color="blue" ripple={true}>
            <MdOutlineDarkMode size={30} />
          </IconButton>
        </div>
      </MobileNav>
    </div>
  );
}
