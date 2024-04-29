import React from "react";

const Card = ({ pic = "", title = "",work="" }) => {
  return (
    <div className="flex flex-col border-2 border-sky-600 py-16 rounded-3xl gap-2">
      <img src={pic} alt="" className="h-20 mx-auto" />
      <div className="flex flex-col mx-auto items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <h1 className="text-xl font-bold">{work}</h1>
      </div>
    </div>
  );
};
export default Card;
