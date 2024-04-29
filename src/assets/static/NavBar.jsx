import React, { useState } from "react";
import { Bar } from "../icons";
const NavBar = () => {
  const [bar, setBar] = useState(false);
  const navList = [
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Work",
      path: "/Work",
    },
    {
      title: "Contact",
      path: "/Contact",
    },
  ];
  return (
      <div className="flex flex-row gap-2 justify-between items-center mx-[5%] bg-transparent py-5 ">
        <div className="flex flex-row gap-1 items-center text-white-100 font-bold text-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJz1Oho7lk5Ljj3yaytFOS4Ga0hnDeVbZhg&usqp=CAU"
            alt=""
            className="h-10 rounded-full"
          />
          <h1>PraKash | Full Stack Developer</h1>
        </div>
        <ul className="hidden md:flex flex-row gap-10 items-center text-secondary font-bold">
          {navList.map((item, index) => {
            return (
              <a key={index} href={`#${item?.title}`}>
                {item?.title}
              </a>
            );
          })}
        </ul>
        <div className="relative md:hidden">
          <Bar
            className="text-white h-14 "
            onClick={() => setBar((pre) => !pre)}
          />
          <ul
            className={`flex flex-col absolute top-full min-w-[150px] p-2 right-0 border rounded-md items-center whitespace-nowrap gap-1 bg-slate-100 ${
              bar ? "flex" : "hidden"
            }`}
          >
            <a href="#About">About</a>
            <a href="#Work">Work</a>
            <a href="#Contact">Contact</a>
          </ul>
        </div>
      </div>
  );
};

export default NavBar;
