import React, { use, useState } from "react";
import IssueCard from "./IssueCard";
import IssueTask from "./IssueTask";
import Countbox from "./Countbox";

const IssueManagement = ({ fetchPromise }) => {
  const data = use(fetchPromise);

  const [currentData, setCurrentData] = useState(data);

  const [clickedData, setClickedData] = useState([]);

  //! task status
  const handleData = (data) => {
    const newData = [...clickedData, data];
    setClickedData(newData);
  };

  //! resolve status
  const [resolve, setResolve] = useState([]);

  const handleResolveData = (resolveData) => {
    const newResolve = [...resolve, resolveData];
    setResolve(newResolve);
  };

  //! Remove function

  const handleRemove = (removeData) => {
    const filterData = clickedData.filter(
      (data) => data.customer != removeData.customer
    );
    setClickedData(filterData);
  };

  //! Remove card function

  const handleCard = (cardData) => {
    const filterData = currentData.filter(
      (filterItem) => filterItem.id !== cardData.id
    );
    setCurrentData(filterData);
  };

  //! Task info

  const [infoSta, setInfoSta] = useState(false);

  const handleTaskInfo = (sta) => {
    setInfoSta(sta);
  };

  return (
    <div className=" max-w-[1440px] mx-auto ">
      <Countbox clickedData={clickedData} resolve={resolve}></Countbox>

      <div className="grid md:grid-cols-12 gap-6 mb-[80px]">
        <div className=" grid md:col-span-9 order-2 md:order-none ">
          <IssueCard
            currentData={currentData}
            handleData={handleData}
            resolve={resolve}
            handleTaskInfo={handleTaskInfo}
          ></IssueCard>
        </div>

        <div className=" grid md:col-span-3 order-1 md:order-none ">
          <IssueTask
            clickedData={clickedData}
            handleResolveData={handleResolveData}
            resolve={resolve}
            handleRemove={handleRemove}
            handleCard={handleCard}
            infoSta={infoSta}
          ></IssueTask>
        </div>
      </div>
    </div>
  );
};

export default IssueManagement;
