import React from "react";
import GithubLogo from "../images/github-3b4e1609.png";

const ProjectCard = ({
  subTitleI = "",
  subTitleII = "",
  subTitleIII = "",
  title = "",
  desc = "",
  pic = "",
}) => {
  return (
    <div>
      <div className="flex flex-col text-white bg-[#1d1836] p-5 rounded-xl gap-5 relative">
        <img src={pic} alt="" className="h-52 rounded-xl w-full z-10" />
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-secondary">{desc}</p>
        <div className="flex flex-row gap-3">
          <h2 className="text-blue-500">{subTitleI}</h2>
          <h2 className="text-green-500">{subTitleII}</h2>
          <h2 className="text-red-500">{subTitleIII}</h2>
        </div>
        <div className="absolute top-8 z-20 right-8">
      <img src={GithubLogo} alt="" className="h-8 rounded-full bg-black" />
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
