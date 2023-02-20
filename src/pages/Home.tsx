import React from "react";
import Navigation from "../components/Navigation";
import img from "../images/avatar.png";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTelegram,
  FaVuejs,
  FaJava,
  FaIcons,
  FaGit,
  FaGitAlt,
  FaGithubAlt,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaBootstrap,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import { COLORS } from "../assets/color";
import { MdMail } from "react-icons/md";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 gap-x-16 bg-dark_bg h-auto">
      <div className="imageContainer">
        <img src={img} className="w-44 rounded-full bg-white" />
      </div>
      <div className="flex nameContainer bg-gray-800 text-center w-80 h-20 rounded-lg justify-center items-center ">
        <h1 className="text-gray-100 font-semibold text-lg">
          Hey I'am Vishnu V 👋
        </h1>
      </div>
      <div className="desc">
        <h3
          className={`text-gray-100 text-2xl font-italic sm:text-sm ${
            window.innerWidth <= 640 ? "text-sm p-5 text-center" : ""
          }`}
        >
          "Tech-savvy and passionate about the latest advancements in
          technology"
        </h3>
      </div>
      <div className="stack-heading-box">
        <h1 className="stack-head font-bold text-xl text-gray-100">SKILLS</h1>
      </div>
      <div className="language-dock flex  gap-4 flex-wrap justify-center items-center w-9/12">
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaPython size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaJava size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <SiJavascript size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaHtml5 size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaCss3 size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <SiMongodb size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <SiExpress size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaReact size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <SiNodedotjs size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaBootstrap size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <SiTailwindcss size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaAws size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaGit size={75} color="cyan" />
        </div>
        <div className="iconBox w-38 h-38 flex justify-center items-center p-5">
          <FaLinux size={75} color="cyan" />
        </div>
      </div>
      <div className="get-in-touch-box p-10">
        <div className="touch-heading-head">
          <h1 className="text-xl font-semi-bold text-center m-4 text-gray-100">
            TOUCH WITH ME
          </h1>
        </div>
        <div
          className={`link-dock flex gap-5 justify-evenly items-baseline ${
            window.innerWidth <= 570 ? "flex-col" : ""
          }`}
        >
          <div className="github-box flex gap-2 h-auto">
            <FaGithubAlt size={30} color={COLORS?.iconColor} />
            <a
              href="https://github.com/kpndevroot"
              className="text-xl text-gray-300"
            >
              @kpndevroot
            </a>
          </div>
          <div className="github-box flex gap-2  h-auto">
            <FaLinkedinIn size={30} color={COLORS?.iconColor} />
            <a
              href="https://github.com/kpndevroot"
              className="text-xl text-gray-300"
            >
              @kpndevroot
            </a>
          </div>
          <div className="github-box flex gap-2 h-auto">
            <MdMail size={30} color={COLORS?.iconColor} />
            <a
              href="https://github.com/kpndevroot"
              className="text-xl text-gray-300"
            >
              @kpndevroot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
