import Card from "./Card";
const IssueCard = ({ currentData, handleData, handleTaskInfo }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3 text-center md:text-start ">
        Customer Tickets
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {currentData.map((data) => (
          <Card
            key={data.id}
            data={data}
            handleData={handleData}
            handleTaskInfo={handleTaskInfo}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default IssueCard;
