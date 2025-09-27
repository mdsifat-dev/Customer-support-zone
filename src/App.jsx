import { Suspense } from "react";
import "./App.css";
import IssueManagement from "./Components/IssueManagement";
import Navbar from "./Components/Navbar";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchData();

  return (
    <div className="bgColor">
      {/* Navbar  */}
      <Navbar></Navbar>

      {/* Main Section  */}
      <Suspense
        fallback={<span class="loading loading-spinner loading-xl  "></span>}
      >
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>
    </div>
  );
}

export default App;
