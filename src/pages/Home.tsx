import React from "react";
import Navigation from "../components/Navigation";
import img from "../images/avatar.png";
import { COLORS } from "../assets/color";
import { MdMail } from "react-icons/md";

import { MystackIcons } from "../data/icons";
import GetTouch from "../components/GetTouch";
const user: any = {
  intro: " Hey I'am Vishnu V 👋",
};
function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 gap-x-16 bg-dark_bg h-full">
      <div className="imageContainer">
        <img src={img} className="w-44 rounded-full bg-white" />
      </div>
      <div className="flex nameContainer bg-gray-800 text-center w-80 h-20 rounded-lg justify-center items-center ">
        <h1 className="text-gray-100 font-normal text-lg font-FiraCode">
          {user?.intro}
        </h1>
      </div>
      <div className="desc">
        <h3
          className={`text-gray-100 text-2xl font-italic sm:text-sm font-Firacode ${
            window.innerWidth <= 640 ? "text-xsm p-5 text-center" : ""
          }`}
        >
          " Tech-savvy and passionate about the latest advancements in
          technology "
        </h3>
      </div>
      <div className="stack-heading-box">
        <h1 className="stack-head font-bold text-xl text-gray-100 font-Firacode">
          SKILLS
        </h1>
      </div>
      <div className="language-dock flex  gap-3 flex-wrap justify-center items-center w-9/12 ">
        {MystackIcons.map((item, i) => (
          <div
            key={i}
            className="iconBox w-38 h-38 flex justify-center items-center p-5"
          >
            {item.icon}
          </div>
        ))}
      </div>
      <GetTouch />
    </div>
  );
}

export default Home;
