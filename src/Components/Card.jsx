import React, { useState } from "react";
import celanderImg from "../assets/ri_calendar-line.png";
import { toast } from "react-toastify";
import correctImg from "../assets/correct.png";
const Card = ({ data, handleData, handleTaskInfo }) => {
  const [statuses, setStutas] = useState(false);

  const handlegetData = (data) => {
    setStutas(true);
    toast(
      <div className="flex items-center gap-1">
        <img src={correctImg} alt="" className="w-5" /> In Progress
      </div>
    );
    handleData(data);
    handleTaskInfo(true);
  };
  return (
    <div>
      <div
        onClick={() => handlegetData(data)}
        className=" rounded-sm p-4 bg-white shadow-lg mx-7 md:mx-0 "
      >
        <div className="flex justify-between items-center cursor-pointer">
          <h2 className={`text-xl font-semibold `}> {data.title} </h2>
          <div
            className={`flex items-center gap-1 ${
              statuses == false ? "bg-green-200" : "bg-yellow-100"
            } px-3 py-1 rounded-full`}
          >
            <div
              className={`w-4 h-4 ${
                statuses == false ? "bg-green-400" : "bg-amber-300"
              } rounded-full`}
            ></div>
            <h2 className={`font-semibold`}>
              {" "}
              {statuses ? "In Progress" : data.status}{" "}
            </h2>
          </div>
        </div>

        <p className="my-3 text-[#627382]"> {data.description} </p>

        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-3 text-[#627382]">
            <p> #{data.id} </p>
            <h2
              className={`${
                statuses == false ? "text-red-500" : "text-amber-400"
              }`}
            >
              {" "}
              {statuses ? "Medium" : data.priority}{" "}
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#627382]">
            <h2> {data.customer} </h2>
            <div className="flex items-center gap-1">
              <img src={celanderImg} alt="" />
              {data.createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
