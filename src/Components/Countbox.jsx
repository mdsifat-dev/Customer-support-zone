import React from "react";
import bgImg1 from "../assets/vector1.png";

const Countbox = ({ clickedData, resolve }) => {
  const clickData = clickedData;

  return (
    <div className="max-w-[1440px] mx-auto flex md:flex-row flex-col gap-10 my-[70px]  ">
      <div className=" relative flex-1 flex justify-center items-center  flex-col p-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg overflow-hidden mx-7 md:mx-0">
        <div className=" hidden  md:flex justify-center md:justify-between absolute top-0 left-0 right-0 h-auto ">
          <img src={bgImg1} alt="vector" />
          <img src={bgImg1} alt="vector" className=" rotate-y-180  " />
        </div>

        <h2 className="text-2xl font-medium">In-Progress</h2>
        <span className="text-[60px] font-semibold "> {clickData.length} </span>
      </div>

      <div className=" relative flex-1 flex justify-center items-center  flex-col p-10 bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded-lg mx-7 md:mx-0 ">
        <div className="  hidden md:flex  justify-center md:justify-between absolute top-0 left-0 right-0  h-auto ">
          <img src={bgImg1} alt="vector" />
          <img src={bgImg1} alt="vector" className=" rotate-y-180 " />
        </div>

        <h2 className="text-2xl font-medium">Resolved</h2>
        <span className="text-[60px] font-semibold "> {resolve.length} </span>
      </div>
    </div>
  );
};

export default Countbox;
