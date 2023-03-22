import React from "react";
import "../assets/css/SingleCard.css";
import { AiOutlineLink } from "react-icons/ai";

interface SingleCardProps {
  name: string;
  image: string;
  link: string;
}
function SingleCard({ name, image, link }: SingleCardProps) {
  return (
    <div
      style={{ borderTop: "1px solid black" }}
      className="article-card  bg-gradient-to-b from-cyan-500 via-black-500 to-white-500 p-0.5 shadow-xl"
    >
      <div className="content">
        {/* <p className="date">Jan 1, 2022</p> */}
        <a href={link} target="_blank">
          <AiOutlineLink
            size={25}
            color="cyan"
            style={{ backgroundColor: "transparent" }}
          />
        </a>
        <p className="title">{name}</p>
      </div>
      <img
        className="rounded-xl"
        // src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
        src={image}
        alt="article-cover"
      />
    </div>
  );
}

export default SingleCard;
