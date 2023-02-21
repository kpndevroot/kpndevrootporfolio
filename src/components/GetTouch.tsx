import React from "react";
import { FaPython, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { COLORS } from "../assets/color";

export default function () {
  return (
    <div className="get-in-touch-box p-10">
      <div className="touch-heading-head">
        <h1 className="text-xl font-semi-bold text-center m-4 text-gray-100 font-Firacode">
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
            className="text-xl text-gray-300 font-Firacode"
          >
            @kpndevroot
          </a>
        </div>
        <div className="github-box flex gap-2  h-auto">
          <FaLinkedinIn size={30} color={COLORS?.iconColor} />
          <a
            href="https://github.com/kpndevroot"
            className="text-xl text-gray-300 font-Firacode"
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
  );
}
