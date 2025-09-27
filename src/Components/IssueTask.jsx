import TaskCard from "./TaskCard";
import ResolveCard from "./ResolveCard";
import { useState } from "react";

const IssueTask = ({
  clickedData,
  handleResolveData,
  resolve,
  handleRemove,
  handleCard,
  infoSta,
}) => {
  const data = clickedData;
  const [resSolveTaskInfo, setResolveTaskInfo] = useState(false);
  const handleResolveTaskInfo = (reSolvTaskInfo) => {
    setResolveTaskInfo(reSolvTaskInfo);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3 border-b-2 border-gray-200  pb-2 text-center md:text-start ">
        Task Status
      </h2>
      <p className="text-[#627382] text-center md:text-start ">
        {" "}
        {infoSta == true ? "" : "Select a ticket to add to Task Status"}{" "}
      </p>
      {data.map((taskData) => (
        <TaskCard
          taskData={taskData}
          handleResolveData={handleResolveData}
          handleRemove={handleRemove}
          handleCard={handleCard}
          handleResolveTaskInfo={handleResolveTaskInfo}
        ></TaskCard>
      ))}

      <div>
        <h2 className="text-2xl font-semibold mb-4 mt-10 border-b-2 border-gray-200  pb-2 text-center md:text-start ">
          Resolved Task
        </h2>
        <p className="text-[#627382] text-center md:text-start ">
          {" "}
          {resSolveTaskInfo == true ? " " : "No resolved tasks yet."}{" "}
        </p>
        <div>
          {resolve.map((reData) => (
            <ResolveCard reData={reData}></ResolveCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IssueTask;
