import { useState } from "react";
import {
  FaAws,
  FaBootstrap,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJava,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsCamera2 } from "react-icons/bs";
interface Item {
  id: number;
  name: string;
  icon: any;
}
let mycolor: string = "cyan";
let size: number = 50;
const MystackIcons: Item[] = [
  { id: 1, name: "python", icon: <FaPython size={size} color={mycolor} /> },
  { id: 2, name: "java", icon: <FaJava size={size} color={mycolor} /> },
  { id: 3, name: "js", icon: <SiJavascript size={size} color={mycolor} /> },
  { id: 4, name: "html", icon: <FaHtml5 size={size} color={mycolor} /> },
  { id: 5, name: "css", icon: <FaCss3 size={size} color={mycolor} /> },
  { id: 6, name: "mongodb", icon: <SiMongodb size={size} color={mycolor} /> },
  { id: 7, name: "express", icon: <SiExpress size={size} color={mycolor} /> },
  { id: 8, name: "nodejs", icon: <SiNodedotjs size={size} color={mycolor} /> },
  {
    id: 9,
    name: "bootstrap",
    icon: <FaBootstrap size={size} color={mycolor} />,
  },
  {
    id: 10,
    name: "talwind",
    icon: <SiTailwindcss size={size} color={mycolor} />,
  },
  { id: 11, name: "aws", icon: <FaAws size={size} color={mycolor} /> },
  { id: 12, name: "git", icon: <FaGit size={size} color={mycolor} /> },
  { id: 13, name: "linux", icon: <FaLinux size={size} color={mycolor} /> },
  { id: 14, name: "ts", icon: <SiTypescript size={size} color={mycolor} /> },
  { id: 15, name: "sql", icon: <SiMysql size={size} color={mycolor} /> },
  { id: 16, name: "nginx", icon: <SiNginx size={size} color={mycolor} /> },
  { id: 16, name: "camera", icon: <BsCamera2 size={size} color={mycolor} /> },
];

export { MystackIcons };
