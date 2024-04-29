import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Starbuck from "../images/1.png";
import Tesla from "../images/2.png";
import SuperMarket from "../images/3.png";
import Meta from "../images/4.png";
import Html from "../images/html.png";
import Tailwind from "../images/tailwind.png";
import Javascript from "../images/javascript.png";
import Typescript from "../images/typescript.png";
import Reactjs from "../images/reactjs.png";
import Css from "../images/css.png";
import Docker from "../images/docker.png";
import Figma from "../images/figma.png";
import Git from "../images/git.png";
import Mongodb from "../images/mongodb.png";
import Nodejs from "../images/nodejs.png";
import Redux from "../images/redux.png";
import Threejs from "../images/threejs.svg";
import ProjectI from "../images/carrent-aba013d1.png";
import ProjectII from "../images/jobit-ecb9d39c.png";
import ProjectIII from "../images/tripguide-892dd3b1.png";
import ProjectCard from "./ProjectCard";
import TestomonialsI from "../images/ceo1.jpg"
import TestomonialsII from "../images/ceo2.jpg"
import TestomonialsIII from "../images/ceo3.jpg"
import TestiCard from "./TestiCard";

const Experience = () => {
  const expList = [
    {
      title: "React.js Developer",
      subTitle: "Chaldal",
      desc: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      date: "March 2020 - April 2021",
      iconBg: "#383E56",
      icon: Starbuck,
    },
    {
      title: "Full Stack Developer",
      subTitle: "10 Minute School",
      desc: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      date: "April 2021 - Sep 2022",
      iconBg: "#E6DEDD",
      icon: Tesla,
    },
    {
      title: "Web Developer",
      subTitle: "Shikho",
      desc: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      date: "Oct 2022 - Jan 2023",
      iconBg: "#383E56",
      icon: SuperMarket,
    },
    {
      title: "MERN Stack Developer",
      subTitle: "Pathao",
      desc: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      date: "Jan 2023 - Present",
      iconBg: "#E6DEDD",
      icon: Meta,
    },
  ];
  const projectList = [
    {
      title: "Car Rent",
      desc: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      subTitleI:"#react",
      subTitleII:"#mongodb",
      subTitleIII:"#tailwind",
      pic: ProjectI
    },
    {
      title: "Job IT",
      desc: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      subTitleI:"#react",
      subTitleII:"#restapi",
      subTitleIII:"#scss",
      pic: ProjectII
    },
    {
      title: "Trip Guide",
      desc: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      subTitleI:"#nextjs",
      subTitleII:"#supabase",
      subTitleIII:"#css",
      pic: ProjectIII
    }
  ]
  const TestomonialsList = [
    {
      desc:"I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.",
      userName:"Sara Lee",
      job:"CFO of Acme Co",
      pic: TestomonialsI
    },
    {
      desc:"I've never met a web developer who truly cares about their clients' success like Hasan does. Hasan is a fantastic web Developer.",
      userName:"Chris Brown",
      job:"COO of DEF Corp",
      pic: TestomonialsII
    },
    {
      desc:"After Hasan optimized our website, our traffic increased by 50%. He is a great developer. We can't thank them enough!",
      userName:"Lisa Wang",
      job:"CTO of 456 Enterprises",
      pic:TestomonialsIII
    }
  ]
  return (
    <div className="flex flex-col gap-20">
      <VerticalTimeline>
        {expList.map((item, index) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
              date={item?.date}
              iconStyle={{ background: item?.iconBg, color: "#fff" }}
              icon={
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={item?.icon}
                    className="h-[60%] w-[60%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title text-3xl font-bold">
                {item?.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-secondary font-semibold text-xl">
                {item?.subTitle}
              </h4>
              <ul className="ml-5 mt-5 list-disc space-y-2">
                {item.desc.map((point, index) => (
                  <li
                    className=" pl-1 text-[14px] tracking-wider text-white-100 font-semibold"
                    key={`experience-point-${index}`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center">
          <img src={Html} alt="" className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2" />
          <img src={Css} alt="" className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2" />
          <img
            src={Javascript}
            alt=""
            className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2"
          />
          <img
            src={Typescript}
            alt=""
            className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2"
          />
          <img
            src={Reactjs}
            alt=""
            className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2"
          />
          <img
            src={Tailwind}
            alt=""
            className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2"
          />
          <img
            src={Threejs}
            alt=""
            className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2"
          />
        </div>
        <div className="flex flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center">
          <img src={Nodejs} alt="" className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2" />
          <img src={Figma} alt="" className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2" />
          <img src={Git} alt="" className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2" />
          <img
            src={Mongodb}
            alt=""
            className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2"
          />
          <img src={Docker} alt="" className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2" />
          <img src={Redux} alt="" className="rounded-full bg-white h-6 sm:h-12 md:h-16 lg:h-24 p-2" />
        </div>
      </div>
      <div className="flex flex-col mx-[8%] gap-5">
        <h2 className="text-secondary text-xl font-bold">MY WORK</h2>
        <h1 className="text-white font-extrabold text-5xl md:text-6xl lg:text-8xl">Projects.</h1>
        <p className="max-w-[800px] sm:text-sm md:text-md lg:text-lg font-semibold text-secondary">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:flex flex-row gap-10 mx-[8%]">
        {projectList.map((item,index)=>{
          return(
            <ProjectCard title={item?.title} desc={item?.desc} subTitleI={item?.subTitleI} subTitleII={item?.subTitleII} subTitleIII={item?.subTitleIII} pic={item?.pic}/>
          )
        })}
      </div>
      <div className="flex flex-col mx-[8%] gap-5 bg-[#1d1836] px-10 py-16 rounded-xl">
        <h2 className="text-secondary">WHAT OTHERS SAY</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white">Testimonials.</h1>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-16">
        {
          TestomonialsList.map((item,index)=>{
            return(
              <TestiCard pic={item?.pic} desc={item?.desc} job={item?.job} userName={item?.userName}/>
            )
          })
        }
      </div>
      </div>
    </div>
  );
};

export default Experience;
