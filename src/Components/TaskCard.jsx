import React from "react";
import { toast } from "react-toastify";
import correctImg from "../assets/correct.png";
const TaskCard = ({
  taskData,
  handleResolveData,
  handleRemove,
  handleCard,
  handleResolveTaskInfo,
}) => {
  const handleResolve = (data) => {
    toast(
      <div className="flex items-center gap-1">
        <img src={correctImg} alt="" className="w-5" /> Completed
      </div>
    );
    handleResolveData(data);
    handleRemove(data);
    handleCard(data);
    handleResolveTaskInfo(true);
  };
  return (
    <div>
      <div className="bg-white shadow-md p-3 rounded-lg mb-3 text-center md:text-start mx-7 md:mx-0 ">
        <h2 className="text-xl font-bold"> {taskData.title} </h2>
        <button
          onClick={() => handleResolve(taskData)}
          className="btn rounded-lg bg-[#02A53B] w-full text-white mt-2 "
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
