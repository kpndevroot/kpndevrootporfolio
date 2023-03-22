import React from "react";
import { projectData } from "../data/projects";
import SingleCard from "./SingleCard.jsx";
import "../assets/css/Project.css";
function Projects() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 px-14">
      {/* card */}

      {projectData.map((data) => (
        <SingleCard name={data.name} image={data.image} link={data.link} />
      ))}

      {/* card */}
    </div>
  );
}

export default Projects;
