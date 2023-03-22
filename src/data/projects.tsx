import React from "react";
import GiCareImg from "../assets/images/gicareWebsite.png";
import CarbonCopyImg from "../assets/images/CarbonCopyImg.png";
import IptImg from "../assets/images/IptgptcImg.png";
import GostEyeImg from "../assets/images/GostEyeImg.png";
import DewDonImg from "../assets/images/DewDonImg.png";
import DbooksImg from "../assets/images/dbooksImg.png";
import AltImg from "../assets/images/reactNative.png";
interface Item {
  id: number;
  name: string;
  image: any;
  link: string;
}

export const projectData: Item[] = [
  {
    id: 1,
    name: "GiCare",
    image: GiCareImg,
    link: "https://gi-care-landing.vercel.app/",
  },

  {
    id: 4,
    name: "GostEye",
    image: GostEyeImg,
    link: "https://github.com/kpndevroot/gosteye",
  },
  {
    id: 5,
    name: "Dewdon",
    image: DewDonImg,
    link: "https://github.com/kpndevroot/gosteye",
  },
  {
    id: 3,
    name: "iptgptc.ac.in",
    image: IptImg,
    link: "https://iptgptc.ac.in/",
  },
  {
    id: 6,
    name: "dbooks",
    image: DbooksImg,
    link: "https://641b389c22a55900092012f8--reliable-druid-83814b.netlify.app/",
  },
  {
    id: 7,
    name: "DoIt",
    image: AltImg,
    link: "https://github.com/kpndevroot/Do_It/releases",
  },
  {
    id: 2,
    name: "CarbonCopy",
    image: CarbonCopyImg,
    link: "https://carboncopy-rouge.vercel.app/",
  },
  {
    id: 8,
    name: "Adviser",
    image: AltImg,
    link: "https://github.com/kpndevroot/adviserapp/releases",
  },
];
